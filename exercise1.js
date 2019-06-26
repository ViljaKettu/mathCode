window.onload = function()
{

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

        context.fillstyle = 'green';
        context.fill();
    }
   
};
