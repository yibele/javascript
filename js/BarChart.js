
function makeBarChart(data,width,height,barcolor){
    if(!width) width = 500;
    if(!height) height = 350;
    if(!barcolor) barcolor = 'blue';

    width -= 24;
    height -=14;

    var char = document.createElement("div");
    char.style.position = 'relative';
    char.style.width = width+'px';
    char.style.height = height+'px';
    char.style.border = 'solid black 2px';
    char.style.paddingLeft='10px';
    char.style.paddingRight = '10px';
    char.style.paddingTop = '5';
    char.style.paddingBottom = '5';
    char.style.backgroundColor = 'white';

    var barwidth = Math.floor(width/data.length);
    var maxdata = Math.max.apply(this,data);
    var scale = height/maxdata;

    for(var i=0;i<data.length;i++){
        var bar = document.createElement('div');
        var barheight = data[i]*scale;

        bar.style.position ='absolute';
    }
}
