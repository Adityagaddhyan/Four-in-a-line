// document.addEventListener("DOMContentLoaded", function () {
//     function getMousePosition(canvas, event) {
//         let rect = canvas.getBoundingClientRect();
//         let x = event.clientX - rect.left;
//         let y = event.clientY - rect.top;
//         console.log("Coordinate x: " + x,
//             "Coordinate y: " + y);
//         var col = Math.floor(x / 100 + 1);
//         console.log("col : ",col)
//     }

//     let canvasElem = document.querySelector("canvas");

//     canvasElem.addEventListener("mousedown", function (e) {
//         getMousePosition(canvasElem, e);
//     });
// });
// module.exports=getMousePosition(canvasElem,e)

// module.exports=function(){
//     console.log("concole");
// }

    
paper.install(window);
window.onload = function() {
    paper.setup('myCanvas1');
    // Create a simple drawing tool:
    var tool = new Tool();
    var path;

    // Define a mousedown and mousedrag handler
    tool.onMouseDown = function(event) {
        var point=event.point;
       var col=Math.ceil(point.x/100);
       console.log(col);
       $.get("/start/"+col,function(data,status){
           if(data.valid)
       })
    }

    tool.onMouseDrag = function(event) {
        var point=event.point;
        console.log(point);
    }
}