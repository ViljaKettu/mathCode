window.onload = function()
{
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    for(var i= 0; i<30; i++)
    {
        context.beginPath();
        context.moveTo(Math.random()*width, Math.random()*height);           
        context.lineTo(Math.random()*width/4, Math.random() *height/4);
        context.lineTo(Math.random()*width/4, Math.random() *height/4);

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
