$('#stopButton').on('click',turnOnStopLight)
function turnOnStopLight(){
$('#stopLight').css('background-color','red');
$('#slowLight').css('background-color','black');
$('#goLight').css('background-color','black');
}

$('#slowButton').on('click',turnOnSlowLight)
function turnOnSlowLight(){
$('#stopLight').css('background-color','black');
$('#slowLight').css('background-color','yellow');
$('#goLight').css('background-color','black');
}



$('#goButton').on('click',turnOnGoLight)
function turnOnGoLight(){
$('#stopLight').css('background-color','black');
$('#slowLight').css('background-color','black');
$('#goLight').css('background-color','green');
}
