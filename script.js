// Array to store gaze data
let gazeData = [];

// Start eye tracking
function startTracking() {
    // Enable WebGazer and set up gaze listener
    webgazer.setGazeListener((data, elapsedTime) => {
        if (data) {
            gazeData.push({
                x: data.x,
                y: data.y,
                time: elapsedTime
            });
        }
    }).begin();

    console.log("Eye tracking started. Data will be recorded.");
}

// Stop tracking and save data to local storage
function stopTracking() {
    webgazer.pause();
    // Store data to local storage for the session
    localStorage.setItem("gazeData", JSON.stringify(gazeData));
    console.log("Tracking stopped. Data saved locally.");
}

// Retrieve and display data
function viewData() {
    const savedData = JSON.parse(localStorage.getItem("gazeData"));
    console.log("Collected Gaze Data:", savedData);
    alert(`Data collected: ${savedData ? savedData.length : 0} data points`);
}

function downloadData() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(gazeData));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "gazeData.json");
    document.body.appendChild(downloadAnchor); // Required for Firefox
    downloadAnchor.click();
    downloadAnchor.remove();
}
