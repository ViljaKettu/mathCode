window.onload = function()
{
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    for(var i= 0; i<30; i++)
    {
        context.beginPath();
        var x=Math.random()*width;
        var y=Math.random()*height;
        context.moveTo(x, y);           
        context.lineTo(x+30, y+10);
        context.lineTo(x+5, y-15);

        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var j = 0; j < 6; j++) 
        {
        color += letters[Math.floor(Math.random() * 16)];
        }

        console.log(color);
        
        context.fillStyle = color;
        context.fill();
    }
   
};
