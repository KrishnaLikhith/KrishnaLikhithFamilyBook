var names = ["Family Book","Gopi", "Kalpana", "Likhith", "Mohana"];
var images = ["Family Book.jpg","Father.png", "Mother.png","Brother.jpg","Sister.jpg"];
 var index = 0;
function imgclick(){
if(index < 5){
    document.getElementById("fbook").src = images [index];
    document.getElementById("name").innerHTML = names[index];
    index++;
}     
}