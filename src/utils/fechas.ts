export function convertirFecha(fechaString: string): string {
    // Crea un objeto de fecha a partir de la cadena proporcionada
    const fecha = new Date(fechaString);

    // Define los nombres de los meses
    const meses = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];

    // Obtiene el día, el mes y el año de la fecha
    const dia = fecha.getDate();
    const mes = fecha.getMonth();
    const año = fecha.getFullYear();

    // Construye la cadena de resultado
    const fechaFormateada = `${dia} de ${meses[mes]} de ${año}`;

    return fechaFormateada;
}