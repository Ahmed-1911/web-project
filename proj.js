var inp=document.getElementById("inpu");
var btn=document.getElementById("butt");
var btndiv=document.getElementById("btnshow");
var imgdiv=document.getElementById("imgshow");
window.addEventListener("load",function(){
	localStorage.setItem("load", new Date());
		alert("Welcome");});
window.addEventListener("unload",function(){alert("see you later! ");});
window.addEventListener("beforeunload",function(e){alert("see you later! ");});
btn.addEventListener("click",function(e){
	display();
	localStorage.setItem(e.target.value, localStorage.getItem(e.target.value)+new Date());
});
btndiv.addEventListener("click",function(e){
	showimg(e);
	})
function showimg(e){
	imgdiv.innerHTML="<img src='"+e.target.value+".jpg'>";
	localStorage.setItem(e.target.value, localStorage.getItem(e.target.value)+new Date());
}	
function display(){
	var count=0;
	btndiv.innerHTML=" ";
	var letter=[];
	var arr="ABCDEFGHIJKLMNOPQRSTUVWYZ";
	if(parseInt(inp.value)<=26&&parseInt(inp.value)>=1)
	{
		while(count<parseInt(inp.value))
		{
			var x=Math.floor((Math.random() * 25) + 0);
			if (!letter.includes(x))
			{
				letter[count]=x;
				btndiv.innerHTML+="<input type='button' value='"+arr[x]+"'>";
				count++;
			}
		}
	}
	else
		alert("Please Enter valed Number");
	
}
for(var i=0;i<inp.value;i++)
{
	
}