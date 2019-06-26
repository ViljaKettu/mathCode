window.onload = function()
{


    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    for(var i= 0; i<10; i++)
    {
        let region = new Path2D();
        region.beginPath();
        region.moveTo(Math.random()*width, Math.random()*height);
        for(var j = 0; j<5; j++)
        {
            
            region.lineTo(Math.random()*width, Math.random() *height);
            
            //region.stroke();
    
        }
        region.closePath();

        context.fillstyle = getRandomColor();
        context.fill(region, 'evenodd');
    }
   
};

function getRandomColor()
{
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};