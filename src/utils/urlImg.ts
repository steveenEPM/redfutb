
/**
                    URL de bloque de imagenes avatar
 */

let imgAvatar: string[] = [
    "https://i.pinimg.com/736x/51/dd/2a/51dd2a9c1ec3fabba748b9ee3605bd08.jpg",
    "https://i.pinimg.com/564x/ab/f7/cb/abf7cbf2763e417ca34f4bc0dc8afef9.jpg",
    "https://i.pinimg.com/564x/11/38/60/1138600de824b035b8448f8a58112452.jpg",
    "https://i.pinimg.com/564x/2b/d6/15/2bd615fc9906c24c8dcd3effd613975b.jpg",
    "https://i.pinimg.com/736x/75/2e/a3/752ea35fc718c70447a4488d9f8de35d.jpg"
]


/**
     getRandomAvatar utiliza Math.random() para generar un número 
     decimal aleatorio entre 0 (inclusive) y 1 (exclusivo). Luego, multiplica este número por la longitud de la
     matriz imgAvatar y utiliza Math.floor() para redondear hacia abajo y obtener un índice válido dentro del 
    rango de la matriz. Finalmente, devuelve el elemento correspondiente al índice aleatorio.
 */
export const getRandomAvatar = (): string => {
    // Genera un índice aleatorio dentro del rango de la longitud de la matriz
    let randomIndex = Math.floor(Math.random() * imgAvatar.length);

    // Devuelve el elemento correspondiente al índice aleatorio
    return imgAvatar[randomIndex];
}

/**
                    URL de bloque de imagenes 1 
 */
const urlIMG: string[] = [
    "https://i.pinimg.com/564x/c2/76/b9/c276b9809dcae1b0b8dac3090a902217.jpg",
    "https://i.pinimg.com/564x/53/83/5b/53835b3ead2b6950ef4468e31c8021e6.jpg",
    "https://i.pinimg.com/564x/2d/18/dd/2d18dd413dcc9cc46017f75fdeb99b17.jpg",
    "https://i.pinimg.com/564x/69/2b/53/692b532925a43adec84a6991131b9569.jpg",
    "https://i.pinimg.com/564x/87/73/73/8773732c11b5445d0e2f8602da255fe0.jpg",
    "https://i.pinimg.com/564x/ac/1d/7d/ac1d7d14590a3611de6026b2820ae700.jpg"
]

export function getRandomURL(): string {
    // Genera un índice aleatorio dentro del rango de la longitud de la matriz
    let randomIndex = Math.floor(Math.random() * urlIMG.length);

    // Devuelve el elemento correspondiente al índice aleatorio
    return urlIMG[randomIndex];
}