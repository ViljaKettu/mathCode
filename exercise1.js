window.onload = function()
{
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        minSize, maxSize, rColor;

        RandomColor();
        DrawCircle();
        DrawPentagon();
        DrawTriangle();

        function DrawTriangle()
        {
            for(var i= 0; i < 500; i++)
            {
                context.beginPath();
                var x=Math.random()*width;
                var y=Math.random()*height;
        
                minSize = 10;
                maxSize = 50;
                
                var size = Math.floor(Math.random()*(maxSize-minSize) +minSize);
                size *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
        
                context.moveTo(x, y);           
                context.lineTo(x+Math.random()*size, y+Math.random()*size);
                context.lineTo(x+Math.random()*size, y+Math.random()*size);
        
                //var letters = '0123456789ABCDEF';
                //var color = '#';
                //for (var j = 0; j < 6; j++) 
                //{
                //color += letters[Math.floor(Math.random() * 16)];
                //}
        
               // console.log(color);

               var rgbR = Math.floor((x/width) * 255),
               rgbG = Math.floor((y/height) * 255),
               rgbB = rColor;

                context.fillStyle = 'rgb('+ rgbR + ',' + rgbG +',' + rgbB+')';
                context.fill();
            }
        }
        
        function DrawCircle()
        {
            for(var i= 0; i < 500; i++)
            {
                var xCenter=Math.random()*width;
                var yCenter=Math.random()*height;
                
                minSize = 2;
                maxSize = 15;    
        
                var size = Math.floor(Math.random()*(maxSize-minSize) +minSize);
        
                context.beginPath();
                context.arc(xCenter, yCenter, size, 0, 2*Math.PI)
                context.stroke();
                
                var rgbR = Math.floor((xCenter/width) * 255),
                rgbG = rColor,
                rgbB = Math.floor((yCenter/height) * 255);
        
                context.fillStyle = 'rgb('+ rgbR + ',' + rgbG +',' + rgbB+')';
                context.fill();
            }
        }
        
        function DrawPentagon()
        {
            for(var i= 0; i < 500; i++)
            {
                var xCenter=Math.random()*width;
                var yCenter=Math.random()*height;
                var numberOfSides = 5,
                step  = 2 * Math.PI / numberOfSides,
                shift = (Math.PI / 180.0) * -18;
        
                minSize = 2;
                maxSize = 15;
        
        
                var size = Math.floor(Math.random()*(maxSize-minSize) +minSize);
        
                context.beginPath();
                for (var j = 0; j <= numberOfSides;j++) {
                    var curStep = j * step + shift;
                    context.lineTo (xCenter + size * Math.cos(curStep), yCenter + size * Math.sin(curStep));
                }          
                context.closePath();
                context.stroke();

                var rgbR = rColor,
                rgbG = Math.floor((xCenter/width) * 255),
                rgbB = Math.floor((yCenter/height) * 255);
        
                context.fillStyle = 'rgb('+ rgbR + ',' + rgbG +',' + rgbB+')';
                context.fill();
            }
        }

        function RandomColor()
        {
            rColor = Math.floor((Math.random() * 255));
        }
};

