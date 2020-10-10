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

var arr = [0,0,0,0,0,0,0];
var movenumber=0;
function makemove(col) {
    col--;
    movenumber++;
    arr[col] = arr[col] + 1;
    return arr[col];
}
paper.install(window);
window.onload = function () {
    paper.setup('myCanvas1');
    // Create a simple drawing tool:
    var tool = new Tool();
    var path;

    // Define a mousedown and mousedrag handler
    tool.onMouseDown = function (event) {
        var point = event.point;
        var col = Math.ceil(point.x / 90);
        console.log(col);
        var row;
        var col_=4;
        $.get("/start/" + col, function (data, status) {
            if (data.valid) {
                document.getElementById("info").textContent="Player " +(movenumber%2?1:2) +"'s move!";
                document.getElementById("info").classList.toggle("card-pannel-green");
                if(data.won)document.getElementById('info').textContent= "Player "+(movenumber%2?2:1)+" won!";
                console.log(data);  
                row = makemove(col);
                console.log(row,col);
                makeCircle(row,col,movenumber%2);

            }
            else{
                console.log("invalid");
            }
        })
    }

    function makeCircle(row,col,player) {
        var x=col*90-45;
        var y=630+90-row*90-45;
        var myCircle = new Path.Circle(new Point(x,y), 35);
        myCircle.fillColor = player==0?'yellow':'green';
    }
    tool.onMouseDrag = function (event) {
        var point = event.point;
        console.log(point);
    }
}