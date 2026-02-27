document.getElementById('login-form').addEventListener('submit', function(e) {
    // Prevent the form from refreshing the page immediately
    e.preventDefault();

    // Grab the values the user typed
    const name = document.getElementById('farmer-name').value;
    const mobile = document.getElementById('mobile-number').value;

    if (name && mobile) {
        // Change the button text to show it's working
        const btn = document.querySelector('.login-btn');
        btn.innerText = "Authenticating...";
        btn.style.opacity = "0.8";

        // Save the farmer's name to LocalStorage so the Dashboard can read it later
        localStorage.setItem("farmerName", name);

        // Simulate a tiny delay for a premium "processing" feel, then redirect to the dashboard
        setTimeout(() => {
            // This will tell Flask to load the dashboard page!
            window.location.href = "/dashboard"; 
        }, 800);
    }
});