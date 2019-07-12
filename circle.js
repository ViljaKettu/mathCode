window.onload = function()
{
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        
        centerX = width/2,
        centerY = height/2,
        radius = 400,
        angle = 0,
        numObjects = 20,
        speed = 0.1,
        slice = Math.PI * 2/ numObjects,
        x,y;

       


    renderCircle();
        
    function renderCircle()
    {

        for(var i = 0; i < numObjects; i += 1)
        {

            angle = i *slice;


            x = centerX + Math.cos(angle) * radius;
            y = centerY + Math.sin(angle) * radius;
            context.beginPath();
            context.arc(x, y, 45, 0, Math.PI * 2, false);

            var rgbR = Math.floor((x/width) * 255),
                rgbG = Math.floor((y/height) * 255),
                rgbB = 100;

            context.fillStyle = 'rgb('+ rgbR + ',' + rgbG +',' + rgbB+')';

            context.fill();
        }
    }

};