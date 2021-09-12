canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="red";

ctx.fillRect(20,20,100,100); 
ctx.clearRect(40,40,60,60); 
ctx.strokeRect(45,45,50,50);


canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e) {
color=document.getElementById("color").value;
console.log(color);

mouse_x=e.clientX-canvas.offsetLeft;
mouse_y=e.clientY-canvas.offsetTop;
console.log("X=" + mouse_x + ",Y=" + mouse_y);
circle(mouse_x,mouse_y);
}

function circle(mouse_x,mouse_y){
    ctx.fillRect(20,20,100,100); 
    ctx.clearRect(40,40,60,60); 
    ctx.strokeRect(45,45,50,50);
}

function clearArea(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}