
let b=0;
var x=document.cookie;
if(x=="user=1"){
    b=1;
    var box=document.getElementById('pay');
    box.style.opacity="100";
}
for(;b==0;){
    let a=prompt("请输入解锁口令（本网站仅供内部人员使用，口令可私信站长获得）");
	var x = document.cookie;
    if (a=="遥遥领先"){
    window.alert("欢迎使用");
    b=1; 
    var box=document.getElementById('pay');
    box.style.opacity="100";
    document.cookie="user=1";
}else{
    window.alert("错误，请重试");

}
}