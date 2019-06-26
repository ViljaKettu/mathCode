window.onload = function()
{
    var letters = '0123456789ABCDEF';
    var color = '#';

    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    for(var i= 0; i<10; i++)
    {
        let region = new Path2D();
        region.beginPath();
        region.moveTo(Math.random()*width, Math.random()*height);

            
        region.lineTo(Math.random()*width, Math.random() *height);
        region.lineTo(Math.random()*width, Math.random() *height);
            
        

        
        for (var k = 0; k < 6; k++) {
        color += letters[Math.floor(Math.random() * 16)];
        }

        context.fillstyle = color;
        context.fill();
    }
   
};
