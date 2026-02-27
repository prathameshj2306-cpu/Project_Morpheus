# Project_Morpheus
Yield Prediction &amp; Market Price Forecasting
# Project Morpheus: AI-Powered Agricultural Intelligence 🌾

Project Morpheus is a comprehensive AgTech solution designed to empower Indian farmers with data-driven decision-making. By leveraging machine learning, we provide real-time yield predictions, market price forecasting, and crop recommendations tailored to local soil and weather conditions.

## 🚀 Key Features
* **AI Yield Prediction:** Advanced regression models predict harvest tonnage based on crop, area, and environmental factors.
* **Price Forecasting:** Data-driven insights on market trends to help farmers decide when to sell.
* **Crop Recommendation:** Hybrid-expert system suggests the most revenue-generating crops based on your specific location.
* **Localized Intelligence:** Dynamic weather-fetch integration combined with agronomic guardrails to ensure realistic, data-backed insights.
* **Bilingual Support:** Instant UI translation between English and Hindi for maximum accessibility.

## 🛠 Tech Stack
* **Backend:** Python (Flask)
* **AI/ML:** Scikit-Learn (Random Forest & Regressor Models)
* **Frontend:** HTML5, CSS3, JavaScript (Chart.js for visualizations)
* **Data Sources:** OpenWeatherMap API & Custom Agricultural Datasets

## 📂 Project Structure
- `/models`: Contains our serialized `.pkl` AI models (See *Model Access* below).
- `/static/js`: Frontend logic for UI, language switching, and charts.
- `/templates`: HTML structure for the dashboard.
- `app.py`: The main Flask engine powering the API.

## 📦 Model Access
Due to GitHub’s file size limitations, our trained model weights (approx. 1GB) are hosted externally.
**Please download the models here and place them in the `/models` directory:**
https://drive.google.com/file/d/1k4OfV6PA6v8v7jWO5B9Nt4BM_HrqtXKU/view?usp=sharing

## 💻 How to Run
1. **Clone the repo:** `git clone https://github.com/prathameshj2306-cpu/Project_Morpheus.git`
2. **Install dependencies:** `pip install -r requirements.txt`
3. **Download & Place Models:** Ensure `.pkl` files are placed inside the `/models` folder.
4. **Run the server:** `python app.py`
5. **Access the dashboard:** Open `http://127.0.0.1:5000` in your browser.

---
*Built for the project morpheus 2026 by Team Hackops!.*