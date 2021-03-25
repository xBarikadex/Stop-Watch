let interval;
let startToggle = 0;

function startLoop() {
    interval = setInterval(function() {
        let centiseconds = Number(document.getElementById("hundreths").innerHTML);
        centiseconds++;
        console.log(centiseconds);
    }, 10);
    startToggle = 1;
}
function stopLoop() {
    clearInterval(interval);
    startToggle = 0;
}

$('#button1').on('click', startLoop);
$('#button2').on('click', stopLoop);

