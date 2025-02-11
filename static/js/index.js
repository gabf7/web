document.addEventListener("DOMContentLoaded", function () {
    // 🌤️ Obtener clima de Buenos Aires con OpenWeather
    const API_KEY = "b37a2dbcab32e4e4f5645d7084a87721";
    const CITY = "Buenos Aires";
    const weatherElement = document.getElementById("weather");

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&appid=${API_KEY}&lang=es`)
        .then(response => response.json())
        .then(data => {
            const temp = Math.round(data.main.temp);
            weatherElement.innerText = `${temp}° C`;
        })
        .catch(() => weatherElement.innerText = "No se pudo obtener el clima");
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
    const timeElement = document.getElementById("time");

    function updateArgentinaTime() {
        const now = new Date();
        const utc = now.getTime() + now.getTimezoneOffset() * 60000;
        const argentinaTime = new Date(utc + (3600000 * -3)); // UTC-3 para Buenos Aires

        let hours = argentinaTime.getHours();
        const minutes = argentinaTime.getMinutes().toString().padStart(2, "0");
        const ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;

        timeElement.innerText = `${hours}:${minutes} ${ampm}`;
    }

    setInterval(updateArgentinaTime, 1000);
    updateArgentinaTime();
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
const carrusel = document.querySelector('.contenedor');
let scrollAmount = 0;
const step = 1; // Velocidad de desplazamiento
let isHovered = false;
let interval;

// Duplica los elementos para el efecto infinito
const carruselItems = [...carrusel.children];
carruselItems.forEach(item => {
    const clone = item.cloneNode(true);
    carrusel.appendChild(clone);
});

// Función para mover el carrusel
function startCarousel() {
    interval = setInterval(() => {
        if (!isHovered) {
            scrollAmount -= step;
            carrusel.style.transform = `translateX(${scrollAmount}px)`;

            // Reinicia cuando se haya desplazado un grupo completo
            if (Math.abs(scrollAmount) >= carruselItems[0].offsetWidth * carruselItems.length) {
                scrollAmount = 0;
            }
        }
    }, 20);
}

startCarousel();