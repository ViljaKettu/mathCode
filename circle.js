window.onload = function()
{
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        centerX = width/2,
        centerY = height/2,
        angle = 0,
        angle2 = 10,
        speed = .01,
        x,y;

        renderCircle();
        

        function renderCircle()
        {
            context.clearRect(0, 0, width, height);

            var radius = 350;

            x= centerX + Math.cos(angle) * radius;
            y = centerY + Math.sin(angle) * radius;
            context.beginPath();
            context.arc(x, y, 45, 0, Math.PI * 2, false);

            var rgbR = Math.floor((x/width) * 255),
               rgbG = Math.floor((y/height) * 255),
               rgbB = 100;

            context.fillStyle = 'rgb('+ rgbR + ',' + rgbG +',' + rgbB+')';

            context.fill();

            angle += speed;
            requestAnimationFrame(renderCircle);

            renderCircle2();
        }

        function renderCircle2()
        {
            context.clearRect(0, 0, width, height);

            var radius2 = 200;

            x= centerX + Math.cos(angle2) * radius2;
            y = centerY + Math.sin(angle2) * radius2;
            context.beginPath();
            context.arc(x, y, 35, 0, Math.PI * 2, false);

            var rgbR = Math.floor((x/width) * 255),
               rgbG = Math.floor((y/height) * 255),
               rgbB = 100;

            context.fillStyle = 'rgb('+ rgbR + ',' + rgbG +',' + rgbB+')';

            context.fill();

            angle2 += speed;
            requestAnimationFrame(renderCircle2);
        }
        
};