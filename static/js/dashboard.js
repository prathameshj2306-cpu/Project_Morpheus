// --- 1. Load User Name ---
document.addEventListener("DOMContentLoaded", () => {
    const savedName = localStorage.getItem("farmerName") || "Farmer";
    document.getElementById("sidebar-user-name").innerText = savedName;
});

// --- 2. Crop Data Database ---
const cropData = {
    rice: {
        name: "Rice Overview",
        temp: "20 - 27 °C", water: "100 - 200 cm", ph: "5.5 - 6.5",
        revenue: "₹ 65,000", cost: "₹ 25,000", marginPercent: 62,
        prices: [2100, 2150, 2200, 2180, 2250, 2300, 2350, 2400, 2380, 2100, 2050, 2080]
    },
    wheat: {
        name: "Wheat Overview",
        temp: "15 - 25 °C", water: "45 - 65 cm", ph: "6.0 - 7.0",
        revenue: "₹ 50,000", cost: "₹ 18,000", marginPercent: 64,
        prices: [2250, 2200, 2150, 2100, 2120, 2180, 2250, 2300, 2350, 2400, 2450, 2300]
    },
    maize: {
        name: "Maize Overview",
        temp: "21 - 27 °C", water: "50 - 80 cm", ph: "5.8 - 7.0",
        revenue: "₹ 45,000", cost: "₹ 15,000", marginPercent: 66,
        prices: [1800, 1850, 1900, 1950, 2000, 1980, 1950, 1900, 1850, 1800, 1750, 1780]
    },
    cotton: {
        name: "Cotton Overview",
        temp: "21 - 30 °C", water: "50 - 100 cm", ph: "5.8 - 8.0",
        revenue: "₹ 85,000", cost: "₹ 35,000", marginPercent: 58,
        prices: [7000, 7100, 7250, 7400, 7500, 7300, 7200, 7000, 6800, 6900, 7100, 7200]
    }
};

// --- 3. Chart Variables ---
let barChart = null;
let doughnutChart = null;

// --- 4. Update UI Function ---
function updateDashboard(cropKey) {
    const data = cropData[cropKey];

    // Update Text
    document.getElementById("crop-title").innerText = data.name;
    document.getElementById("val-temp").innerText = data.temp;
    document.getElementById("val-water").innerText = data.water;
    document.getElementById("val-ph").innerText = data.ph;
    document.getElementById("val-revenue").innerText = data.revenue;
    document.getElementById("val-cost").innerText = data.cost;

    // Redraw Financial Doughnut Chart
    if (doughnutChart) doughnutChart.destroy();
    const ctxDoughnut = document.getElementById('financeChart').getContext('2d');
    doughnutChart = new Chart(ctxDoughnut, {
        type: 'doughnut',
        data: {
            labels: ['Profit Margin', 'Input Costs'],
            datasets: [{
                data: [data.marginPercent, 100 - data.marginPercent],
                backgroundColor: ['#2e7d32', '#e0e0e0'],
                borderWidth: 0,
                cutout: '75%'
            }]
        },
        options: { plugins: { legend: { display: false }, tooltip: { enabled: false } }, responsive: true, maintainAspectRatio: false }
    });

    // Redraw Monthly Bar Chart
    if (barChart) barChart.destroy();
    const ctxBar = document.getElementById('monthlyPriceChart').getContext('2d');
    barChart = new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [{
                label: 'Price (₹/Qtl)',
                data: data.prices,
                backgroundColor: '#66bb6a',
                borderRadius: 4
            }]
        },
        options: { 
            responsive: true, 
            maintainAspectRatio: false,
            scales: { y: { beginAtZero: false } },
            plugins: { legend: { display: false } }
        }
    });
}

// --- 5. Tab Click Event Listeners ---
document.querySelectorAll('.crop-tab').forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all, add to clicked
        document.querySelectorAll('.crop-tab').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Update data
        const cropKey = this.getAttribute('data-crop');
        updateDashboard(cropKey);
    });
});

// --- 6. Initialize First Load (Rice) ---
window.onload = () => {
    updateDashboard('rice');
};

