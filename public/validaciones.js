function showFlights() {
    // Get form inputs
    var departingDate = new Date(document.getElementById('departing').value);
    var returningDate = new Date(document.getElementById('returning').value);
    var fechaActual = new Date();

    // Check if departure and return dates are valid
    if (departingDate < fechaActual && returningDate < fechaActual && departingDate > returningDate) {
        alert("Muchas gracias vuelo agendado");
    } else {
        alert("Error las fechas que has ingresado son erroneas");
    }
}