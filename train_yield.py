# yield_training.py

import os
import pandas as pd
import numpy as np
import joblib

from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import mean_absolute_error, r2_score

# =========================
# 1. Load Data
# =========================
file_path = os.path.join("data", "yield_data.csv")
df = pd.read_csv(file_path)

# =========================
# 2. Basic Cleaning
# =========================
df = df.dropna(subset=["YIELD"])

numeric_cols = ["TEMPERATURE", "RAINFALL", "AREA"]
for col in numeric_cols:
    df[col] = df[col].fillna(df[col].median())

df["DISTRICT"] = df["DISTRICT"].fillna("Unknown")
df["SEASON"] = df["SEASON"].fillna("Unknown")

# =========================
# 3. Feature Selection
# =========================
features = [
    "STATE",
    "DISTRICT",
    "CROP",
    "SEASON",
    "YEAR",
    "TEMPERATURE",
    "RAINFALL",
    "AREA"
]

target = "YIELD"

X = df[features].copy()   # <-- FIXED
y = df[target].copy()

from sklearn.preprocessing import OrdinalEncoder
# ... (Keep your imports and Steps 1-3 exactly the same) ...

# =========================
# 4. Encode Categorical Features (CRASH-PROOF)
# =========================
# Create one master encoder for all categorical columns
# If it sees a new district in the web app, it assigns it -1 instead of crashing
encoder = OrdinalEncoder(handle_unknown='use_encoded_value', unknown_value=-1)

categorical_cols = ["STATE", "DISTRICT", "CROP", "SEASON"]

# Fit and transform all text columns at once
X[categorical_cols] = encoder.fit_transform(X[categorical_cols])

# ... (Keep Steps 5, 6, and 7 exactly the same) ...

# =========================
# 5. Train-Test Split
# =========================
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# =========================
# 6. Train Model
# =========================
model = RandomForestRegressor(
    n_estimators=150,
    max_depth=None,
    random_state=42
)

model.fit(X_train, y_train)

# =========================
# 7. Evaluate
# =========================
y_pred = model.predict(X_test)

mae = mean_absolute_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

print("Yield Model Performance:")
print("MAE:", mae)
print("R2 Score:", r2)

# 8. Save Model & Encoders
# =========================
joblib.dump(model, "models/yield_model.pkl")
# Save the single OrdinalEncoder instead of a dictionary of LabelEncoders
joblib.dump(encoder, "models/yield_encoder.pkl") 

print("Yield model and crash-proof encoder saved successfully.")