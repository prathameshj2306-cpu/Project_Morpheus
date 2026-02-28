// ==========================================
// 1. YOUR LOCATION DATA
// ==========================================
const locationData = {
    " Punjab": [
        "Fazilka"
    ],
    "Andhra Pradesh": [
        "Nalgonda",
        "Kurnool",
        "Hyderabad",
        "Karimnagar",
        "Mahbubnagar",
        "Adilabad",
        "Medak",
        "Warangal",
        "Nizamabad",
        "Krishna"
    ],
    "Assam": [
        "Lakhimpur",
        "Kamrup",
        "Nalbari",
        "Sonitpur",
        "Jorhat",
        "Dhubri",
        "Goalpara"
    ],
    "Bihar": [
        "Sheikhpura",
        "Supaul",
        "Madhubani",
        "Kishanganj",
        "Jehanabad",
        "Muzaffarpur",
        "Vaishali",
        "Araria",
        "Bhojpur",
        "Samastipur",
        "Sheohar",
        "Banka",
        "Jamui",
        "Madhepura",
        "Rohtas",
        "Buxar",
        "Darbhanga",
        "Khagaria",
        "Patna"
    ],
    "Chandigarh": [
        "Chandigarh"
    ],
    "Chattisgarh": [
        "Rajnandgaon",
        "Janjgir",
        "Durg",
        "Korba",
        "Jashpur",
        "Mahasamund",
        "Raipur",
        "Kanker",
        "Dhamtari"
    ],
    "Chhattisgarh": [
        "Bilaspur"
    ],
    "Delhi": [
        "Delhi"
    ],
    "Gao": [
        "North Goa"
    ],
    "Gujarat": [
        "Bhavnagar",
        "Anand",
        "Patan",
        "Surat",
        "Amreli",
        "Porbandar",
        "Rajkot",
        "Dahod",
        "Gandhinagar",
        "Ahmedabad",
        "Navsari",
        "Sabarkantha",
        "Surendranagar",
        "Jamnagar",
        "Bharuch",
        "Kheda"
    ],
    "Haryana": [
        "Ambala",
        "Panipat",
        "Kaithal",
        "Sonipat",
        "Yamuna Nagar",
        "Jind",
        "Kurukshetra",
        "Fatehabad",
        "Gurgaon",
        "Rohtak",
        "Faridabad",
        "Panchkula",
        "Bhiwani",
        "Mewat",
        "Palwal",
        "Karnal",
        "Rewari",
        "Sirsa"
    ],
    "Himachal Pradesh": [
        "Mandi",
        "Kangra",
        "Una",
        "Hamirpur",
        "Kullu",
        "Shimla",
        "Chamba",
        "Solan"
    ],
    "Jammu & Kashmir": [
        "Udhampur",
        "Jammu",
        "Kathua",
        "Rajouri"
    ],
    "Jammu And Kashmir": [
        "Anantnag"
    ],
    "Karnataka": [
        "Bangalore",
        "Davangere",
        "Shimoga",
        "Udupi",
        "Bidar",
        "Mandya",
        "Belgaum",
        "Kolar",
        "Chikmagalur",
        "Bellary",
        "Dharwad",
        "Mysore",
        "Hassan",
        "Gadag",
        "Bagalkot",
        "Tumkur",
        "Bijapur",
        "Haveri",
        "Koppal",
        "Raichur",
        "Chitradurga"
    ],
    "Kerala": [
        "Ernakulam",
        "Thiruvananthapuram",
        "Kollam",
        "Kottayam",
        "Idukki",
        "Malappuram",
        "Palakad",
        "Alappuzha",
        "Kannur"
    ],
    "Madhya Pradesh": [
        "Rajgarh",
        "Sagar",
        "Satna",
        "Mandla",
        "Jhabua",
        "Vidisha",
        "Tikamgarh",
        "Bhind",
        "Bhopal",
        "Narsinghpur",
        "Ujjain",
        "Dindori",
        "Mandsaur",
        "Dewas",
        "Ratlam",
        "Panna",
        "Jabalpur",
        "Shajapur",
        "Dhar",
        "Seoni",
        "Betul",
        "Hoshangabad",
        "Rewa",
        "Gwalior",
        "Guna",
        "Morena",
        "Sidhi",
        "Raisen",
        "Chhatarpur",
        "Chhindwara",
        "Harda",
        "Burhanpur",
        "Indore",
        "Khandwa",
        "Datia",
        "Shivpuri",
        "Khargone",
        "Neemuch",
        "Sheopur",
        "Katni",
        "Alirajpur",
        "Damoh",
        "Anupur",
        "Balaghat"
    ],
    "Maharashtra": [
        "Nashik",
        "Satara",
        "Ahmednagar",
        "Dhule",
        "Mumbai",
        "Kolhapur",
        "Pune",
        "Sangli",
        "Jalgaon",
        "Sholapur",
        "Raigad",
        "Nanded",
        "Amarawati",
        "Akola",
        "Hingoli",
        "Wardha",
        "Parbhani",
        "Beed",
        "Nagpur",
        "Thane",
        "Nandurbar",
        "Latur",
        "Chandrapur",
        "Aurangabad",
        "Bhandara",
        "Ratnagiri"
    ],
    "Manipur": [
        "Thoubal",
        "Bishnupur"
    ],
    "Meghalaya": [
        "West Garo Hills",
        "East Khasi Hills",
        "South Garo Hills",
        "West Khasi Hills",
        "East Garo Hills"
    ],
    "Nagaland": [
        "Mokokchung",
        "Kohima",
        "Kiphire",
        "Longleng",
        "Tuensang",
        "Zunheboto",
        "Peren",
        "Phek",
        "Dimapur",
        "Mon",
        "Wokha"
    ],
    "Orissa": [
        "Nayagarh",
        "Kendrapara",
        "Nuapada",
        "Keonjhar",
        "Dhenkanal",
        "Malkangiri",
        "Bargarh",
        "Sambalpur",
        "Jharsuguda",
        "Ganjam",
        "Angul",
        "Rayagada",
        "Koraput",
        "Bhadrak",
        "Khurda",
        "Kalahandi",
        "Puri",
        "Jajpur",
        "Gajapati",
        "Cuttack"
    ],
    "Punjab": [
        "Ludhiana",
        "Patiala",
        "Jalandhar",
        "Muktsar",
        "Moga",
        "Kapurthala",
        "Hoshiarpur",
        "Gurdaspur",
        "Sangrur",
        "Barnala",
        "Nawanshahr",
        "Amritsar",
        "Faridkot"
    ],
    "Rajasthan": [
        "Chittorgarh",
        "Pratapgarh",
        "Bharatpur",
        "Hanumangarh",
        "Kota",
        "Tonk",
        "Churu",
        "Jodhpur",
        "Bikaner",
        "Ajmer",
        "Jalore",
        "Rajsamand",
        "Bundi",
        "Baran",
        "Bhilwara",
        "Sikar",
        "Dausa",
        "Udaipur",
        "Ganganagar",
        "Sirohi",
        "Alwar",
        "Jhalawar",
        "Pali",
        "Jaipur",
        "Jaisalmer",
        "Karauli",
        "Nagaur",
        "Dungarpur"
    ],
    "Tamil Nadu": [
        "Ranipet",
        "Thiruchirappalli",
        "Thiruvannamalai"
    ],
    "Tamilnadu": [
        "Namakkal",
        "Salem",
        "Thiruvarur",
        "Theni",
        "Nagapattinam",
        "Ramanathapuram",
        "Erode",
        "Coimbatore",
        "Thanjavur",
        "Villupuram",
        "Vellore",
        "Dindigul",
        "Sivaganga",
        "Virudhunagar",
        "Dharmapuri",
        "Kancheepuram",
        "Krishnagiri",
        "Cuddalore",
        "Karur",
        "Thirunelveli",
        "Madurai",
        "The Nilgiris",
        "Perambalur",
        "Thiruchirappalli"
    ],
    "Tripura": [
        "North Tripura"
    ],
    "Uttar Pradesh": [
        "Mainpuri",
        "Pratapgarh",
        "Sambhal",
        "Bareilly",
        "Amethi",
        "Bulandshahar",
        "Jaunpur",
        "Etawah",
        "Mirzapur",
        "Ghazipur",
        "Deoria",
        "Saharanpur",
        "Unnao",
        "Mathura",
        "Aligarh",
        "Lalitpur",
        "Hardoi",
        "Ballia",
        "Shahjahanpur",
        "Kaushambi",
        "Ghaziabad",
        "Maharajganj",
        "Rampur",
        "Balrampur",
        "Badaun",
        "Meerut",
        "Agra",
        "Jhansi",
        "Gonda",
        "Bijnor",
        "Gorakhpur",
        "Fatehpur",
        "Sitapur",
        "Firozabad",
        "Auraiya",
        "Etah",
        "Amroha",
        "Banda",
        "Lucknow",
        "Barabanki",
        "Baghpat",
        "Basti",
        "Prayagraj",
        "Chandauli",
        "Bahraich",
        "Sonbhadra",
        "Varanasi",
        "Azamgarh",
        "Muzaffarnagar",
        "Mahoba",
        "Shravasti",
        "Ambedkarnagar",
        "Ayodhya",
        "Kushinagar",
        "Shamli",
        "Kanpur"
    ],
    "Uttrakhand": [
        "Champawat"
    ],
    "West Bengal": [
        "Birbhum",
        "Nadia",
        "Kolkata",
        "Jalpaiguri",
        "Paschim Bardhaman",
        "Murshidabad",
        "North 24 Parganas",
        "Bankura",
        "Hooghly",
        "Alipurduar",
        "Puruliya",
        "Howrah",
        "Darjeeling",
        "Coochbehar"
    ]
};


// ==========================================
// 2. MAIN EXECUTION BLOCK
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
    
    // --- UI Selectors ---
    const inputView = document.getElementById('input-view');
    const resultsView = document.getElementById('results-view');
    const backBtn = document.getElementById('back-btn');
    const fetchBtn = document.getElementById('fetch-weather-btn');
    const recommendForm = document.getElementById('recommend-form');
    const stateSelect = document.getElementById('state-select');
    const districtSelect = document.getElementById('district-select');

    // --- User Profile ---
    try {
        const savedName = localStorage.getItem("farmerName") || "Farmer";
        const userProfileName = document.getElementById("sidebar-user-name");
        if (userProfileName) userProfileName.innerText = savedName;
    } catch (e) { console.error(e); }

    // --- Dropdown Setup ---
    if (stateSelect && Object.keys(locationData).length > 0) {
        for (let state in locationData) {
            let option = document.createElement("option"); option.value = state; option.text = state;
            stateSelect.appendChild(option);
        }
        stateSelect.addEventListener('change', function() {
            districtSelect.innerHTML = '<option value="">-- Select District --</option>';
            if (this.value && locationData[this.value]) {
                districtSelect.disabled = false;
                locationData[this.value].forEach(district => {
                    let opt = document.createElement('option'); opt.value = district; opt.text = district;
                    districtSelect.appendChild(opt);
                });
            } else { districtSelect.disabled = true; }
        });
    }

    // --- Weather Fetch Listener ---
    if (fetchBtn) {
        fetchBtn.addEventListener('click', function() {
            const dist = districtSelect ? districtSelect.value : '';
            const st = stateSelect ? stateSelect.value : '';
            if (!dist || !st) {
                showToast("Please select a State and District first!", "error");
                return;
            }
            fetchRealWeather(dist, st); 
        });
    }

    // --- Recommendation Form Submit ---
    // --- Recommendation Form Submit ---
    if (recommendForm) {
        recommendForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = document.getElementById('recommend-btn');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = `<div class="btn-loading"><div class="spinner"></div> Analyzing Land Conditions...</div>`;
            btn.disabled = true;

            // 1. Grab the area safely
            const areaInput = document.getElementById('area-input');
            const areaValue = areaInput && areaInput.value ? parseFloat(areaInput.value) : 1.0;

            // 2. Add 'area' to the payload so Python gets it!
            const payload = {
                state: stateSelect.value,
                district: districtSelect.value,
                season: document.getElementById('season-select').value,
                soil: document.getElementById('soil-select').value,
                temp: document.getElementById('temp-input').value || 25.0,
                rain: document.getElementById('rain-input').value || 100.0,
                area: areaValue 
            };

            fetch('/api/recommend_crop', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            })
            .then(res => res.json())
            .then(data => {
                if (data.crop) {
                    // Switch Views safely
                    if (inputView && resultsView) {
                        inputView.classList.remove('active-view'); 
                        inputView.classList.add('hidden-view');
                        resultsView.classList.remove('hidden-view'); 
                        resultsView.classList.add('active-view');
                    }

                    // Update Text
                    document.getElementById('rec-crop').innerText = data.crop + " 🌾";
                    const reasonEl = document.querySelector('.match-reason');
                    if (reasonEl) {
                        reasonEl.innerText = `Based on ${payload.season} season data and your soil type, the AI has identified this as the highest revenue-generating crop for ${payload.district}.`;
                    }

                    // 3. USE THE REAL DATA FROM PYTHON!
                    // Instead of hardcoding 2250, we use data.est_price
                    const estimatedYield = data.est_yield; 
                    const estimatedPrice = data.est_price; 
                    const estimatedRevenue = data.total_revenue; 

                    animateValue(document.getElementById('rec-yield'), 0, estimatedYield, 1500, "", " Tonnes");
                    animateValue(document.getElementById('rec-price'), 0, estimatedPrice, 1500, "₹", "/ Qtl");
                    animateValue(document.getElementById('rec-revenue'), 0, estimatedRevenue, 2000, "₹", "");
                } else {
                    showToast("AI Error: " + (data.error || "Could not determine best crop."), "error");
                }
            })
            .catch(err => { 
                showToast("Server Error: Check if Flask is running!", "error"); 
                console.error(err); 
            })
            .finally(() => { 
                btn.innerHTML = originalText; 
                btn.disabled = false; 
            });
        });
    }

    // --- Back Button ---
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            resultsView.classList.remove('active-view'); 
            resultsView.classList.add('hidden-view');
            inputView.classList.remove('hidden-view'); 
            inputView.classList.add('active-view');
        });
    }
});

// ==========================================
// 3. GLOBAL UTILITIES (Outside Main Block)
// ==========================================

function showToast(message, type="error") {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div'); 
        container.className = 'toast-container';
        document.body.appendChild(container);
    }
    const toast = document.createElement('div'); 
    toast.className = `toast ${type}`; 
    toast.innerText = message;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3500);
}

function animateValue(obj, start, end, duration, prefix = "", suffix = "") {
    if (!obj) return;
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 4); 
        let currentVal = easeProgress * (end - start) + start;
        
        // Format with commas for Indian currency style
        let displayVal = currentVal.toLocaleString('en-IN', { maximumFractionDigits: 1 });
        obj.innerHTML = `<span style="font-size: 18px;">${prefix}</span> ${displayVal} <span style="font-size: 16px; color: #777;">${suffix}</span>`;
        if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
}

function fetchRealWeather(district, state) {
    const btn = document.getElementById('fetch-weather-btn');
    if (!btn) return;
    const originalText = btn.innerHTML;
    btn.innerHTML = `<div class="btn-loading"><div class="spinner dark"></div> Fetching...</div>`;
    btn.disabled = true;

    fetch('/api/get_weather', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ district: district, state: state })
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            document.getElementById('temp-input').value = data.temp;
            document.getElementById('rain-input').value = data.rain;
            showToast("Live weather updated!", "success");
        } else {
            showToast("Weather fetch failed.", "error");
        }
    })
    .catch(err => { showToast("Connection error.", "error"); })
    .finally(() => { btn.innerHTML = originalText; btn.disabled = false; });
}