function goToLogin() {
    document.getElementById('welcome-page').style.display = 'none';
    document.getElementById('login-page').style.display = 'block';
}

function goToMonitoring() {
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('monitoring-page').style.display = 'block';
}

function startMonitoring() {
    console.log("Monitoreo iniciado");
}

function stopMonitoring() {
    console.log("Monitoreo detenido");
}

function viewAlerts() {
    console.log("Viendo alertas");
}

function simulateAlert() {
    const alertDiv = document.getElementById('alert');
    alertDiv.style.display = 'block';
    setTimeout(() => {
        alertDiv.style.display = 'none';
    }, 5000);
}

// Las funciones relacionadas con Google y Apple Sign-In han sido eliminadas
