// Importamos las funciones necesarias directamente de los servidores de Google
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Pega aquí la configuración que te dio Firebase en el Paso 1
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-proyecto",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "123456789",
  appId: "TU_APP_ID"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Lógica del botón de login
document.getElementById('btn-login').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const mensajeError = document.getElementById('mensaje-error');

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Login exitoso
            const user = userCredential.user;
            alert("¡Bienvenido " + user.email + "!");
            // Aquí redirigirías al usuario al calendario de reservas
            // window.location.href = "calendario.html";
        })
        .catch((error) => {
            // Error en login
            mensajeError.textContent = "Credenciales incorrectas o usuario no existe.";
            console.error(error.code, error.message);
        });
});auth.js
