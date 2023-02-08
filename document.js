"use strict"
// - - - - - - - - - - - - - - - RELOJ - - - - - - - - - - - - - - - //

const clock = new Date();

const turnOn = ()=>{
    setTimeout(() => {
            screen.innerHTML = `

    <div class="screen-upper-bar">
        <p>${corregirDia()}/${corregirMes()}</p>
        <p>${comprobarDia()}</p>
        <p><i class="fa-solid fa-cloud-sun"></i> 34 º</p>
    </div>

    <div class="screen-clock">
        <b>${clock.getHours()}:${clock.getMinutes()}</b>
        <p class="seg">${clock.getSeconds()}</p>
    </div>

    <div class="screen-data">
        <p><i class="fa-solid fa-heart-pulse"></i>82</p>
        <p><i class="fa-solid fa-shoe-prints"></i>16</p>
        <p><i class="fa-solid fa-fire-flame-curved"></i>0</p>
        <p><i class="fa-solid fa-location-dot"></i>0.01</p>
    </div>`

    }, 100);

}

const turnOff = ()=>{
    screen.innerHTML = ``
}




// - - - - - - - - - - - - - - - BOTÓN - - - - - - - - - - - - - - - //

const button = document.querySelector(".button");
const screen = document.querySelector(".clock-screen");

let screenOn = false

button.addEventListener("click",()=>{
    if (screenOn == false){
        screen.style.background = `#111111`
        turnOn()
        screenOn = true
        setInterval(actualizarHora,100);
        setInterval(actualizarMinutos,100);
        setInterval(actualizarSegundos,100);
    }
    else {
        screen.style.background = `#060606`
        screenOn = false
        turnOff()
    }
})

// - - - - - - - - - - - - - - - FUNCIONES UPPER BAR- - - - - - - - - - - - - - - // 


const comprobarDia = ()=>{
    let day = `null`
    if(clock.getDay() == 0){
        day = `SUN`
        return day
    }
    else if(clock.getDay() == 1){
        day = `MON`
        return day
    }
    else if(clock.getDay() == 2){
        day = `TUE`
        return day
    }
    else if(clock.getDay() == 3){
        day = `WED`
        return day
    }
    else if(clock.getDay() == 4){
        day = `THU`
        return day
    }
    else if(clock.getDay() == 5){
        day = `FRI`
        return day
    }
    else if(clock.getDay() == 6){
        day = `SAT`
        return day
    }
}

const corregirDia =()=>{
    let numberDay = clock.getDate()

    if (clock.getDate() < 10){
        numberDay = `0${clock.getDate()}`
        return numberDay
    }
    else{
        return numberDay
    }

}

const corregirMes =()=>{
    let numberMonth = clock.getMonth()

    if (clock.getMonth() < 10){
        numberMonth = `0${clock.getMonth()+1}`
        return numberMonth
    }
    else{
        return numberMonth
    }
}

// - - - - - - - - - - - - - - - FUNCIONES UPPER BAR- - - - - - - - - - - - - - - // 

const actualizarHora = ()=>{
    let hora = clock.getHours()
    return hora
}

const actualizarMinutos = ()=>{
    const time = new Date();
    let min = time.getMinutes();
    return min
}




const actualizarSegundos = ()=>{
    const time = new Date();
    let seg = time.getSeconds();
    document.querySelector(".seg").textContent = seg
}

