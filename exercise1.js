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
        context.beginPath();
        context.moveTo(Math.random()*width, Math.random()*height);           
        context.lineTo(Math.random()*width, Math.random() *height);
        context.lineTo(Math.random()*width, Math.random() *height);

        for(var j = 0; j<6;j++)
        {
            color += letters[Math.floor(Math.random() * 16)];
        }

        context.fillStyle = 'color';
        context.fill();
    }
   
};
