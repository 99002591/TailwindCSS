var a = 0;
function changeColor(color_id) {
   a = document.getElementById("colorOption");
   if(color_id === "glossBlack"){
    a.src = "./resources/images/glossBlack.jpg"
   }
   else if (color_id === "matteBlue"){
    a.src = "./resources/images/matteBlue.jpg"
   }
   else if (color_id === "pearlWhite"){
    a.src = "./resources/images/pearlWhite.jpg"
   }
   console.log(color_id)
}