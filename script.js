document.getElementById('btn-consultar').addEventListener('click', async () => {
    const divResultado = document.getElementById('resultado');
    divResultado.textContent = "Cargando...";
    divResultado.classList.remove('oculto');

    try {
        // Hacemos una petición a la ruta que Vercel crea automáticamente
        const respuesta = await fetch('/api/saludo');
        const datos = await respuesta.json();
        
        // Mostramos el mensaje que viene desde Python
        divResultado.textContent = datos.mensaje;
    } catch (error) {
        divResultado.textContent = "Error al conectar con el backend.";
        console.error(error);
    }
});