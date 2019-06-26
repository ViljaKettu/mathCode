window.onload = function()
{
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        minSize = 40, maxSize=100;

    for(var i= 0; i<100; i++)
    {
        context.beginPath();
        var x=Math.random()*width;
        var y=Math.random()*height;
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

        var colors =[];
        for(var j = 0; j< 3; j++)
        {
            colors.push(Math.floor(x*255));
        }

        console.log(colors);
        
        context.fillStyle = colors;
        context.fill();
    }
   
};
