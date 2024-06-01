setInterval(

    function () {
        d = new Date();
        sec = d.getSeconds * 6;
        
        min = d.getMinutes * 6;

        hour = d.getHours * 30;

        document.getElementById("second-hand").style.transform = 
         "rotate(" + sec + "deg)"


            document.getElementById("minute-hand").style.transform 
             "rotate(" + min + "deg)"


            document.getElementById("hour-hand").style.transform =

         "rotate(" + hour + "deg)"

    }, 1000
);
