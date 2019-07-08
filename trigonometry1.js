window.onload = function()
{
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        minSize, maxSize, rColor, xCenter, yCenter;

    RandomColor();
    
    context.translate(0, height/2);
    context.scale(1, -1);

    for(var angle = 0; angle < Math.PI * 2; angle += .1)
    {
        xCenter = angle * 200,
        yCenter = Math.sin(angle) * 200;

       // context.fillRect(x, y, 5, 5);
       DrawPentagon();
    }

    function DrawPentagon()
    {
        var numberOfSides = 5,
        step  = 2 * Math.PI / numberOfSides,
        shift = (Math.PI / 180.0) * -18;
    
        minSize = 5;
        maxSize = 15;
    
        var size = Math.floor(Math.random()*(maxSize-minSize) +minSize);
    
        context.beginPath();
        for (var j = 0; j <= numberOfSides;j++) 
        {
            var curStep = j * step + shift;
            context.lineTo (xCenter + size * Math.cos(curStep), yCenter + size * Math.sin(curStep));
        }          
        context.closePath();
        context.stroke();

        //var rgbR = rColor,
        //rgbG = Math.floor((xCenter/width) * 255),
        //rgbB = Math.floor((yCenter/height) * 255);
    
        var rgbR = Math.floor((xCenter/width) * 255),
        rgbG = Math.floor((yCenter/height) * 255),
        rgbB = rColor;

        context.fillStyle = 'rgb('+ rgbR + ',' + rgbG +',' + rgbB+')';
        context.fill();
    
    }

    function RandomColor()
    {
        rColor = Math.floor((Math.random() * 255) + 70);
    }
};