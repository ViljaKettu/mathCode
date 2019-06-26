window.onload = function()
{


    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    for(var i= 0; i<10; i++)
    {
        
        context.beginPath();
        for(var j = 0; j<5; j++)
        {
            context.moveTo(Math.random()*width, Math.random()*height);
            context.lineTo(Math.random()*width, Math.random() *height);
            context.stroke();
    
        }
        context.closePath();

        context.fillstyle = getRandomColor();
        context.fill();
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
}