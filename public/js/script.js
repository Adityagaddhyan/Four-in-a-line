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
        var col_=col-1;
        $.get(window.location.pathname+"/" + col_, function (data, status) {
            if (data.valid) {
                document.getElementById("info").textContent="Player " +(movenumber%2?1:2) +"'s move!";
                document.getElementById("info").classList.toggle("card-pannel-green");
                if(data.won){
                    document.getElementById('info').textContent= "Player "+(movenumber%2?2:1)+" won!";
                    $('canvas').fadeOut(8000);
                    $('#newgame').fadeIn('slow');

                }
                else if(data.draw){
                    document.getElementById('info').textContent= "Its a draw!";
                    $('canvas').fadeOut(500);
                    $('#newgame').fadeIn('slow');
                }
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
        myCircle.fillColor = player==0?'#F1D302':'#235789';
    }
   
    tool.onMouseDrag = function (event) {
        var point = event.point;
        console.log(point);
    }
}