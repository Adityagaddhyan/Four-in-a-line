//get the mouse click
tool.onMouseDown=function(event){
    var point=event.point;
    //convert coordinates into col no
    var col=Math.ceil(point.x/100);
    console.log(col);
    //sent the get request
    var xhr=new XMLHttpRequest();
    xhr.open("GET","/move/"+col,true);
    xhr.onload=()=>{
        if(this.status==200){
            var result=JSON.parse(this.responseText);
        }
    }


}

// var myCircle = new Path.Circle(new Point(100, 70), 50);
// myCircle.fillColor = 'black';