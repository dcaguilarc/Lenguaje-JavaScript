window.onload = function() {
    // Simulación del clima de Quito
    const clima = {
        temperatura: "22°C",
        descripcion: "Soleado",
        icono: "sunny",
        fecha: new Date().toLocaleDateString(),
        hora: new Date().toLocaleTimeString()
    };

    // Mostrar la información del clima
    document.getElementById('temperature').textContent = clima.temperatura;
    document.getElementById('description').textContent = clima.descripcion;
    document.getElementById('weather-icon').className = `icon ${clima.icono}`;
    document.getElementById('date').textContent = clima.fecha;
    document.getElementById('time').textContent = clima.hora;

    // Actualizar la hora cada minuto
    setInterval(function() {
        document.getElementById('time').textContent = new Date().toLocaleTimeString();
    }, 60000);
};
