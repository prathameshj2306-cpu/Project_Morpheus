import os
import pandas as pd
import joblib
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import OrdinalEncoder
from sklearn.metrics import accuracy_score

print("💡 Starting Master Strategy Recommendation Engine...")

# =========================
# 1. LOAD DATASETS
# =========================
try:
    df_yield = pd.read_csv(os.path.join("data", "yield_data.csv"))
    df_price = pd.read_csv(os.path.join("data", "price_dataset.csv"))
    print("✅ Datasets loaded!")
except FileNotFoundError as e:
    print(f"⚠️ Missing Data: {e}")
    exit()

# =========================
# 2. STANDARDIZE COLUMNS FOR MERGING
# =========================
# Rename price columns to match yield columns
df_price = df_price.rename(columns={
    "Commodity": "CROP", 
    "STATE": "STATE", 
    "District Name": "DISTRICT"
})

# Ensure standard formatting
for df in [df_yield, df_price]:
    df['STATE'] = df['STATE'].astype(str).str.strip().str.upper()
    df['DISTRICT'] = df['DISTRICT'].astype(str).str.strip().str.upper()
    df['CROP'] = df['CROP'].astype(str).str.strip().str.upper()

# =========================
# 3. CALCULATE STATE-LEVEL PRICES
# =========================
# Calculate average price per Crop per State
state_avg_prices = df_price.groupby(['STATE', 'CROP'])['Modal_Price'].mean().reset_index()

# =========================
# 4. MERGE DATA
# =========================
print("🔄 Merging data...")
merged_df = pd.merge(df_yield, state_avg_prices, on=['STATE', 'CROP'], how='left')

# Fill missing prices with Global Crop Average
global_avg = df_price.groupby('CROP')['Modal_Price'].mean()
merged_df['Modal_Price'] = merged_df['Modal_Price'].fillna(merged_df['CROP'].map(global_avg))

# Drop rows where we have no price and no yield (can't train on nothing)
merged_df = merged_df.dropna(subset=['Modal_Price', 'YIELD'])

# =========================
# 5. FIND THE "WINNING" CROP
# =========================
# Revenue = Yield * Price
merged_df['Revenue'] = merged_df['YIELD'] * merged_df['Modal_Price']

# Find the crop with the highest revenue for each District/Season
best_crop_indices = merged_df.groupby(['STATE', 'DISTRICT', 'SEASON'])['Revenue'].idxmax()
training_df = merged_df.loc[best_crop_indices].reset_index(drop=True)

# =========================
# 6. PREPARE AI FEATURES
# =========================
features = ["STATE", "DISTRICT", "SEASON", "TEMPERATURE", "RAINFALL"]
target = "CROP"

X = training_df[features].copy()
y = training_df[target].copy()

# =========================
# 7. ENCODING
# =========================
categorical_cols = ["STATE", "DISTRICT", "SEASON"]
encoder = OrdinalEncoder(handle_unknown='use_encoded_value', unknown_value=-1)
X[categorical_cols] = encoder.fit_transform(X[categorical_cols])

# =========================
# 8. TRAIN MODEL
# =========================
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X, y)

# =========================
# 9. SAVE
# =========================
joblib.dump(model, "models/recommend_model.pkl")
joblib.dump(encoder, "models/recommend_encoder.pkl")

print(f"✅ Success! Trained on {len(training_df)} unique regional winning scenarios.")