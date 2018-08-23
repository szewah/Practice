
// Program Flow
//
// 1: User clicks on #clickme
// 2: Increment the value of #click-num by one for each click (eg if clicknum is 0, make it 1; it clicknum is 10, make it 11; etc.)
// 3: If the number of clicks === 5, change the background of <body> to red
// 4: Else if the number of clicks === 10, change the background of <body> to green
// 5: Else if the number of clicks === 15, change the background of <body> to blue
// 6: Else, change the background of <body> to black

var count = 0;

$("#clickme").click(function () {
	count++; 
	$('#click-num').text(count);
	if(count === 5) {
		$("body").css("background-color", "red")
	} else if (count === 10) {
		$("body").css("background-color", "green")
	} else if (count === 15) {
		$("body").css("background-color", "blue")
	} else if (count === 20){
		$("body").css("background-color", "purple")
	} else {
		$("body").css("background-color", "black")
	}
	// return count = 0;
});