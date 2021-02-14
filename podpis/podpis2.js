    <script type="text/javascript">
    var canvas = document.getElementById("podpis");
    var ctx = canvas.getContext("2d");
    var painting = document.getElementById("podpis");
    var paintStyle = getComputedStyle(painting);
    canvas.width = parseInt(paintStyle.getPropertyValue("width"));
    canvas.height = parseInt(paintStyle.getPropertyValue("height"));

   
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#ff674d";
    ctx.font="2mm Helvetica";

    ctx.beginPath();
    ctx.moveTo(5,85);
    ctx.lineTo(159,85);
    ctx.stroke();
    ctx.closePath();

    ctx.fillStyle = "#ff674d";
    ctx.fillText("Podpis plačnika",55,94);
    ctx.fillText("(neobvezno žig)",55,104);
    

    var mouse = {x: 0, y: 0};

    canvas.addEventListener("mousemove", function(e){
      mouse.x = e.pageX - this.offsetLeft;
      mouse.y = e.pageY - this.offsetTop;
    }, false);

    ctx.lineWidth = 0.25;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.strokeStyle = "#000000";

    canvas.addEventListener("mousedown", function(e) {
      ctx.beginPath();
      ctx.moveTo(mouse.x, mouse.y);
      canvas.addEventListener("mousemove", onPaint, false);
    }, false);

    canvas.addEventListener("mouseup", function() {
      canvas.removeEventListener("mousemove", onPaint, false);
    }, false);

    var onPaint = function() {
      ctx.lineTo(mouse.x, mouse.y);
      ctx.stroke();
    };

    </script>