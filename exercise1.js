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
        region.moveTo(30, 90);
        region.lineTo(110, 20);
        region.lineTo(240, 130);
        region.lineTo(60, 130);
        region.lineTo(190, 20);
        region.lineTo(270, 90);
        region.closePath();

        context.fillstyle = 'green';
        context.fill(region, 'evenodd');
    }
   
};
