secHand = document.getElementById("sec");
minHand = document.getElementById("min");
hourHand = document.getElementById("hour");

clock();

setInterval(clock,1000);

function clock(){
    let time = new Date();
    secHand.style.transform = `rotate(${ 
        time.getSeconds() * (360/60)
    }deg)`;

    minHand.style.transform = `rotate(${ 
        time.getMinutes() * (360/60)
    }deg)`;
    
    hourHand.style.transform = `rotate(${ 
        (time.getHours() * 30) + (time.getMinutes()*6)/12
    }deg)`;
}
