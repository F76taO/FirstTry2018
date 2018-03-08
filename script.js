var hours=document.getElementById("hours"),
	minutes=document.getElementById("minutes"),
	seconds=document.getElementById("seconds");

function fn(){
	var date=new Date();
	hours.innerHTML=time(date.getHours());
	minutes.innerHTML=time(date.getMinutes());
	seconds.innerHTML=time(date.getSeconds());
}
//加入一个定时器
setInterval(function(){
	fn();
},1000)
//保证一直是两位数
function time(str){
	if(str<10){
		return "0"+str;
	}else{
		return str;
	}
}
//定时器刷新1秒后才执行，所以要先执行一次函数，再执行定时器中的函数
fn();