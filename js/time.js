function showTime() {
	var currentDate = new Date();
	var startDate = new Date(2021, 12, 5);
	var date3 = currentDate - startDate;
	var days = Math.floor(date3 / (24 * 3600 * 1000));
	var leave1 = date3 % (24 * 3600 * 1000);     //计算天数后剩余的毫秒数
	var hours = Math.floor(leave1 / (3600 * 1000));
	var leave2 = leave1 % (3600 * 1000);        //计算小时数后剩余的毫秒数
	var minutes = Math.floor(leave2 / (60 * 1000));
	var leave3 = leave2 % (60 * 1000);          //计算分钟数后剩余的毫秒数
	var seconds = Math.round(leave3 / 1000);
	if (minutes < 10)
		minutes = "0" + minutes;
	if (seconds < 10)
		seconds = "0" + seconds;
	var currentTimeString = "丫头，我喜欢你 已经是...<br> "
		+ "&nbsp&nbsp&nbsp第 "
		+ "<c style=\"font-size:40px\" >" + days + " </c>天 "
		+ "<c style=\"font-size:40px\" >" + hours + " </c>小时 "
		+ "<c style=\"font-size:40px\" >" + minutes + " </c>分钟 "
		+ "<c style=\"font-size:40px\" >" + seconds + " </c>秒<br>"
		+ "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp只愿执子之手，与子偕老！&nbsp&nbsp&nbsp&nbsp"
		+ "<c style=\"font-size:18px\" >---2022-02-14</c>";
	document.getElementById("show").innerHTML = currentTimeString;  //改这地方
	window.setTimeout("showTime()", 1000);
}
