window.setTimeout(function(){
var numsquares=6;
var colors= generateRandomColors(numsquares);
var squares= document.querySelectorAll(".square");
var pickedColor= pickColor();
var colorDisplay=document.getElementById ("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetbutton=document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");
colorDisplay.textContent= pickedColor;
for(var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click",function(){
		var clickedColor=this.style.backgroundColor;
		if(clickedColor===pickedColor)
		{
			messageDisplay.textContent="Correct!!";
			resetbutton.textContent="Play Again?";
			changecolors(clickedColor);
			h1.style.backgroundColor=clickedColor;
		}
		else
		{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent="Try Again";
		}
	})
}
easybtn.addEventListener("click",function(){
	hardbtn.classList.remove("selected");
    easybtn.classList.add("selected");
    numsquares=3
    colors= generateRandomColors(numsquares);
     pickedColor= pickColor();
    colorDisplay.textContent= pickedColor;
    for(var i=0;i<squares.length;i++)
    {
    	if(i<3)
    		squares[i].style.backgroundColor=colors[i];
    	else
    		squares[i].style.display="none";
    }

})
hardbtn.addEventListener("click",function(){
   easybtn.classList.remove("selected");
   hardbtn.classList.add("selected");
   numsquares=6;
    colors= generateRandomColors(numsquares);
    pickedColor= pickColor();
    colorDisplay.textContent= pickedColor;
    for(var i=0;i<squares.length;i++)
    {
    	squares[i].style.backgroundColor=colors[i];
    	squares[i].style.display="block";
    }
})
resetbutton.addEventListener("click",function(){
	
	colors= generateRandomColors(numsquares);
	pickedColor= pickColor();
	colorDisplay.textContent= pickedColor;
	messageDisplay.textContent="";
	this.textContent="New Colors";
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="steelblue";
})
function changecolors(color)
{
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=color;
	}
}
function pickColor()
{
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}
function generateRandomColors(num)
{
	var arr=[];
	for(var i=0;i<num;i++)
	{
        arr.push(RandomColor());
	}
	return arr;
}
function RandomColor()
{
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	 return ("rgb("+r+", "+g+", "+b+")");
}
},100);