window.onload = function()
{
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    for(var i= 0; i<30; i++)
    {
        var x = Math.random()*width,
            y = Math.random()*height;
        context.beginPath();
        context.moveTo(x, y);           
        context.lineTo(x+Math.random*20, y+Math.random() *20);
        context.lineTo(x+Math.random()*20, y + Math.random() *20);

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
