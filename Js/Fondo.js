    var c ,cx,centerX,centerY;
    var estrellas = [];
    var rotacion =0;
    window.addEventListener("load", init);
    function init() {
        c = document.getElementById("lienzo");
        cx = c.getContext("2d");
        fullScreen(c);
        //Establecemos las posiciones de 20 puntos en un array
        for (var u = 0; u < 50; u++){
            estrellas.push({
                x: centerX = Math.floor(Math.round(Math.random() * (-c.width/2 - c.width/2) + c.width/2)),
                y: centerY = Math.floor(Math.round(Math.random() * (-c.width/2 - c.width/2) + c.width/2))
            });
        }
        actualizar();
    }
    function fullScreen(c){
        c.width = window.innerWidth;
        c.height = window.innerHeight;
        var X, Y, wiw, wih, wow, woh,scale,cw,ch;
        X = window.innerWidth/2 - c.offsetWidth/2;
        Y = window.innerHeight/2 - c.offsetHeight/2;
 
        //alto y ancho de la ventana (lo que se puede ver)
        wiw = window.innerWidth;
        wih = window.innerHeight;
 
        //ancho y alto de la ventana (lo que se puede ver + lo de el scroll)
        wow = window.outerWidth;
        woh = window.outerHeight;
 
        //alto y ancho del canvas (lo que se puede ver en pantalla)
        cw = c.offsetWidth;
        ch = c.offsetHeight;
 
        scale = 1.77; //relacion aspecto 16:9
        c.style.transform = 'translate('+ X +'px,'+ Y +'px)' ;
 
        // Hacer bien el condicional
        if(wiw > cw || wih === ch && wiw > (wih * scale)){//si la ventana tiene mas ancho del canvaso igual
            c.style.width = window.innerHeight * scale;
            c.style.height = window.innerHeight;
        }else if(wih > c.offsetHeight){
            c.style.display = "block";
            c.style.margin = "auto";
            c.style.width = window.innerWidth;
            c.style.height = window.innerHeight * - scale;
        }
        //Se detecta si la ventana ha sido redimensionada y se vuelve a escalar
        window.onresize = function () {
            fullScreen(c);
        }
    }
    function actualizar(){
       window.requestAnimationFrame(actualizar);
        var degFondo = cx.createLinearGradient(0,500,0,0);
        degFondo.addColorStop(1,"#003072");
        degFondo.addColorStop(0,"#0053c6");
        //Dibjuamos el fondo
        cx.beginPath();
        cx.rect(0,0,c.width,c.height);
        cx.fillStyle = degFondo;
        cx.fill();
 
        rotacion--;
        console.log(rotacion);
        cx.translate(c.width/2, c.height/2);
        cx.rotate((rotacion > 160)?rotacion=0:rotacion * Math.PI / 180);
        for (var i = 0; i < 50; i++) {
            cx.beginPath();
            cx.arc(estrellas[i].x, estrellas[i].y, 5, 0, 2 * Math.PI);
            cx.fillStyle = "#fff"; // color de las estrellas
            cx.strokeStyle = "#d5d5d5";
            cx.fill();
            cx.stroke();
        }
        //Dibujamos los puntos o estrellas con el array de posiciones anterior
        cx.resetTransform();
        //Dibujamos la luna
        cx.beginPath();
        cx.fillStyle="#bfd3cc";
        cx.arc(c.width/18,c.height/8,120,0,6.3);
        cx.fill();
        //Dibjuamos la montaña de fondo
        cx.beginPath();
        cx.fillStyle="#3778b5";
        cx.moveTo(80,c.height);
        cx.lineTo(c.width/2,100);
        cx.lineTo(c.width-80,c.height);
        cx.fill();
 
        cx.beginPath();
        cx.fillStyle="#1074b5";
        cx.moveTo(0,c.height);
        cx.lineTo(c.width/4,c.height/3);
        cx.lineTo(c.width/2,c.height);
        cx.fill();
 
        cx.beginPath();
        cx.fillStyle="#1a6db5";
        cx.moveTo(c.width/2,c.height);
        cx.lineTo(c.width/1.3,c.height/3);
        cx.lineTo(c.width,c.height);
        cx.fill();
 
        cx.beginPath();
        cx.fillStyle="#0769a5";
        cx.moveTo(0,c.height);
        cx.lineTo(c.width/2,c.height/1.5);
        cx.lineTo(c.width,c.height);
        cx.fill();
 
    }
 