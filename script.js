function startTracking() {
    webgazer.setGazeListener(function(data, elapsedTime) {
        if (data) {
            console.log(`X: ${data.x}, Y: ${data.y}`);
        }
    }).begin();
}
