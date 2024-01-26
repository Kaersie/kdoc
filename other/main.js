
let b=0;
var x=document.cookie;
if(x=="user=1"){
    b=1;
    var box=document.getElementById('pay');
    cc();
}
for(;b==0;){
    let a=prompt("请输入解锁口令（普通用户输入:0000,校级用户请私信站长）");
	var x = document.cookie;
        if (a=="遥遥领先"){
        window.alert("昆明润城学校 用户,欢迎使用");
        b=1; 
        document.cookie="user=1";
        cc();
        
        }else if(a=="0000"){
        b=1;
        window.alert("您正在以普通用户身份访问");
        }else{
        window.alert("错误，请重试");
        }
}
function cc(){
    let h=document.getElementById('rcneed');
    let cr = h.parentElement;
    cr.innerHTML='<hr><a href="https://dlink.host/lanzou/aHR0cHM6Ly9ncmFzcC5sYW56b3V0LmNvbS9pZ21TUzFreWZwY2Q.pdf"><button type="submit" class="linkbutton" ><p class="lbh1">政治-需背内容统计</p></button></a> <br>'+
    '<a href="https://dlink.host/lanzou/aHR0cHM6Ly9ncmFzcC5sYW56b3V0LmNvbS9paHU2UDFreWZwZGUmcGFzc0NvZGU9ZXA3cA.pdf"><button type="submit" class="linkbutton" ><p class="lbh1">政治-必修1、2 主观题模板</p></button></a> <br>'+
    '<a href="https://dlink.host/lanzou/aHR0cHM6Ly9ncmFzcC5sYW56b3V0LmNvbS9pV05RSzFreWZwZmcmcGFzc0NvZGU9ZHI5Mg.pdf"><button type="submit" class="linkbutton" ><p class="lbh1">政治-必修1、2 常考句子</p></button></a> <br>'+
'<a href="https://dlink.host/lanzou/aHR0cHM6Ly9ncmFzcC5sYW56b3V0LmNvbS9pOEd6bTFreWZwZWY.jpg"><button type="submit" class="linkbutton" ><p class="lbh1">政治-必修1 知识手册</p></button></a> <br>'+
'<a href="https://dlink.host/lanzou/aHR0cHM6Ly9ncmFzcC5sYW56b3V0LmNvbS9pS0pDazFreWZwamEmcGFzc0NvZGU9.pdf"><button type="submit" class="linkbutton" ><p class="lbh1">政治-必修2 知识手册</p></button></a> <br>'+
'<a href="https://dlink.host/lanzou/aHR0cHM6Ly9ncmFzcC5sYW56b3V0LmNvbS9pVk5wMjFreWZwZ2gmcGFzc0NvZGU9M3V4Ng.pptx"><button type="submit" class="linkbutton" ><p class="lbh1">英语-必修2 Unit1 补充单词</p></button></a> <br>'+
'<a href="https://dlink.host/lanzou/aHR0cHM6Ly9ncmFzcC5sYW56b3V0LmNvbS9pU3pqTzFreWZwaGkmcGFzc0NvZGU9M2g4cw.pptx"><button type="submit" class="linkbutton" ><p class="lbh1">英语-必修2 Unit2 补充单词</p></button></a> <br>'+
'<a href="https://dlink.host/lanzou/aHR0cHM6Ly9ncmFzcC5sYW56b3V0LmNvbS9paUhCTjFreWZwaWomcGFzc0NvZGU9ZWJmcA.pptx"><button type="submit" class="linkbutton" ><p class="lbh1">英语-必修2 Unit3 补充单词</p></button></a> <br>'+
'<a href="https://grasp.lanzout.com/iGHxZ1m4yo0b"><button type="submit" class="linkbutton" ><p class="lbh1">假期作业</p></button></a> <br>'+
'<a href="https://grasp.lanzout.com/iqIQ11mbqd8h"><button type="submit" class="linkbutton" ><p class="lbh1">（假期作业补充1）英语-周报14-16</p></button></a> <br>'+
'<a href="https://grasp.lanzout.com/iwidh1m9au2f"><button type="submit" class="linkbutton" ><p class="lbh1">（假期作业补充2）生物-答案1（做完作业再看哦）</p></button></a> <br>'

}
           