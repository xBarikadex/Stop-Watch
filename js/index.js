let startToggle = 0;
let lapToggle = 0;

function startLoop() {
    if (startToggle == 0) {
        interval = setInterval(function() {
            let centiseconds = Number(document.getElementById("centiseconds").innerHTML);
            let seconds = Number(document.getElementById("seconds").innerHTML);
            let minutes = Number(document.getElementById("minutes").innerHTML);
            for (i = 0; i < 1; i++) {
                centiseconds++;
                document.getElementById("centiseconds").innerHTML = centiseconds;
                if (centiseconds < 10) {
                    document.getElementById("centiseconds").innerHTML = "0" + centiseconds;
                }
                if (centiseconds == 100) {
                    centiseconds = 0;
                    document.getElementById("centiseconds").innerHTML = centiseconds;
                    seconds++;
                    document.getElementById("seconds").innerHTML = seconds;
                    if (seconds < 10) {
                        document.getElementById("seconds").innerHTML = "0" + seconds;
                    }
                    if (seconds == 60) {
                        seconds = 0;
                        document.getElementById("seconds").innerHTML = seconds;
                        minutes++;
                        document.getElementById("minutes").innerHTML = minutes;
                        if (minutes < 10) {
                            document.getElementById("minutes").innerHTML = "0" + minutes;
                        }
                    }
                }
            }
        }, 10);
        startToggle = 1;
    }
}

function stopLoop() {
    clearInterval(interval);
    startToggle = 0;
}

function timerToggle() {
    if (startToggle == 0) {
        startLoop();
    }
    else if (startToggle == 1) {
        stopLoop();
    }
}

function lap() {
    if (lapToggle == 0) {
        stopLoop();
        /*A function to keep counting but not change the html*/
    }
    else if (lapToggle == 1) {
        /*A function to display the counted numbers*/
        document.getElementById("centiseconds").innerHTML = centiseconds;
        document.getElementById("seconds").innerHTML = seconds;
        document.getElementById("minutes").innerHTML = minutes;
    }
}





function example() {
    if (startToggle == 0) {
        interval = setInterval(function() {
            let centiseconds = Number(document.getElementById("centiseconds").innerHTML);
            let seconds = Number(document.getElementById("seconds").innerHTML);
            let minutes = Number(document.getElementById("minutes").innerHTML);
            for (i = 0; i < 1; i++) {
                centiseconds++;
                if (centiseconds == 100) {
                    centiseconds = 0;
                    seconds++;
                    if (seconds == 60) {
                        seconds = 0;
                        minutes++;
                    }
                }
            }
        }, 10);
        startToggle = 1;
        lapToggle = 1;
    }
}

function prints() {
    example();
    console.log(minutes + ":" + seconds + " " + centiseconds);
}