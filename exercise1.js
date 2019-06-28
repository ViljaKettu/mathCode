window.onload = function()
{
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        minSize, maxSize, rColor, xCenter, yCenter;


        RandomColor();

        DrawCircle();
        DrawPentagon();
        DrawTriangle();
        
        function DrawTriangle()
        {
            for(var i= 0; i < 500; i++)
            {
                context.beginPath();
                
                xCenter=Math.random()*width;
                yCenter=Math.random()*(height*0.35);

                minSize = 15;
                maxSize = 50;
                
                //how far away lines can end from starting point
                var size = Math.floor(Math.random()*(maxSize-minSize) +minSize);
                size *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
        
                context.moveTo(xCenter, yCenter);           
                context.lineTo(xCenter+Math.random()*size, yCenter+Math.random()*size);
                context.lineTo(xCenter+Math.random()*size, yCenter+Math.random()*size);
        
                //var letters = '0123456789ABCDEF';
                //var color = '#';
                //for (var j = 0; j < 6; j++) 
                //{
                //color += letters[Math.floor(Math.random() * 16)];
                //}
        
               // console.log(color);

               var rgbR = Math.floor((xCenter/width) * 255),
               rgbG = Math.floor((yCenter/height) * 255),
               rgbB = rColor;

               context.fillStyle = 'rgb('+ rgbR + ',' + rgbG +',' + rgbB+')';
                context.fill();
            }
        }
        
        function DrawCircle()
        {
            for(var i= 0; i < 700; i++)
            {           
                minSize = 5;
                maxSize = 15;    
        
                var size = Math.floor(Math.random()*(maxSize-minSize) +minSize);
        
                xCenter=Math.random()*width;
                yCenter=Math.random()*height +(height*0.55);

                context.beginPath();
                context.arc(xCenter, yCenter, size, 0, 2*Math.PI)
                context.stroke();
                
                //var rgbR = Math.floor((xCenter/width) * 255),
                //rgbG = rColor,
                //rgbB = Math.floor((yCenter/height) * 255);
        
                var rgbR = Math.floor((xCenter/width) * 255),
                rgbG = Math.floor((yCenter/height) * 255),
                rgbB = rColor;

                context.fillStyle = 'rgb('+ rgbR + ',' + rgbG +',' + rgbB+ ')';
                context.fill();
            }
        }
        
        function DrawPentagon()
        {
            for(var i= 0; i < 400; i++)
            {
                var numberOfSides = 5,
                step  = 2 * Math.PI / numberOfSides,
                shift = (Math.PI / 180.0) * -18;
        
                minSize = 5;
                maxSize = 15;
        
                xCenter=Math.random()*width;
                yCenter=Math.floor(Math.random()*(height*0.66 -height*0.2)+(height*0.2));
        
                var size = Math.floor(Math.random()*(maxSize-minSize) +minSize);
        
                context.beginPath();
                for (var j = 0; j <= numberOfSides;j++) {
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
        }

        function RandomColor()
        {
            rColor = Math.floor((Math.random() * 255) + 70);
        }
};

