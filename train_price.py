import os
import pandas as pd
import joblib
from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import OrdinalEncoder
from sklearn.metrics import mean_absolute_error, r2_score

# =========================
# 1. Load Data
# =========================
file_path = os.path.join("data", "price_dataset.csv") # Ensure this filename is correct
df = pd.read_csv(file_path)

# =========================
# 2. Convert Date & Clean
# =========================
df["Price Date"] = pd.to_datetime(df["Price Date"])
df["Year"] = df["Price Date"].dt.year
df["Month"] = df["Price Date"].dt.month

# Drop blank prices
df = df.dropna(subset=["Modal_Price"]).reset_index(drop=True)

# Fill missing categorical data to prevent errors
# These headers now match your CSV exactly!
df["STATE"] = df["STATE"].fillna("Unknown")
df["District Name"] = df["District Name"].fillna("Unknown")
df["Market Name"] = df["Market Name"].fillna("Unknown")
df["Commodity"] = df["Commodity"].fillna("Unknown")

# =========================
# 3. Feature Selection
# =========================
# I included 'Market Name' because it's a very strong indicator of price
features = [
    "STATE", 
    "District Name", 
    "Market Name", 
    "Commodity", 
    "Month", 
    "Year"
]
target = "Modal_Price"

X = df[features].copy()
y = df[target].copy()

# =========================
# 4. CRASH-PROOF ENCODING
# =========================
# This encoder handles the columns exactly as named in your CSV
categorical_cols = ["STATE", "District Name", "Market Name", "Commodity"]

encoder = OrdinalEncoder(handle_unknown='use_encoded_value', unknown_value=-1)
X[categorical_cols] = encoder.fit_transform(X[categorical_cols])

# =========================
# 5. Train-Test Split (Time-Series Safe)
# =========================
df = df.sort_values(by=["Price Date"])

split_idx = int(len(X) * 0.8)
X_train = X.iloc[:split_idx]
X_test = X.iloc[split_idx:]
y_train = y.iloc[:split_idx]
y_test = y.iloc[split_idx:]

# =========================
# 6. Train Model
# =========================
model = RandomForestRegressor(
    n_estimators=150,
    random_state=42,
    n_jobs=-1
)

print("Training Price Model...")
model.fit(X_train, y_train)

# =========================
# 7. Evaluate
# =========================
y_pred = model.predict(X_test)
print("Price Model Performance:")
print("MAE:", mean_absolute_error(y_test, y_pred))
print("R2 Score:", r2_score(y_test, y_pred))

# =========================
# 8. Save Model
# =========================
joblib.dump(model, "models/price_model.pkl")
joblib.dump(encoder, "models/price_encoder.pkl")

print("✅ Deployment-ready Price model saved successfully.")