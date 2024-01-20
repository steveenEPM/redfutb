import { interfacePublicacion } from "../interface/interface";

export const publicaciones: interfacePublicacion[] = [
    {
        id: 1,
        usuario: {
            nombre: "Usuario1",
            avatar: "url_del_avatar_usuario1"
        },
        contenido: "¡Increíble gol en el partido de hoy! ⚽️",
        imagen: "url_de_la_imagen1.jpg",
        fecha_publicacion: "2024-01-19T12:30:00Z",
        likes: 15,
        comentarios: [
            {
                usuario: {
                    nombre: "Usuario2",
                    avatar: "url_del_avatar_usuario2"
                },
                contenido: "Estoy de acuerdo, fue asombroso."
            },
            {
                usuario: {
                    nombre: "Usuario3",
                    avatar: "url_del_avatar_usuario3"
                },
                contenido: "¿Alguien vio la jugada previa? Fue genial."
            }
        ]
    },
    {
        id: 2,
        usuario: {
            nombre: "Usuario4",
            avatar: "url_del_avatar_usuario4"
        },
        contenido: "¡Vamos equipo, a por la victoria en el próximo partido!",
        fecha_publicacion: "2024-01-19T15:45:00Z",
        likes: 8,
        comentarios: []
    },
    {
        id: 3,
        usuario: {
            nombre: "Usuario5",
            avatar: "url_del_avatar_usuario5"
        },
        contenido: "Hoy conocí a mi ídolo futbolístico. ¡Me siento afortunado!",
        fecha_publicacion: "2024-01-20T08:15:00Z",
        likes: 25,
        comentarios: [
            {
                usuario: {
                    nombre: "Usuario6",
                    avatar: "url_del_avatar_usuario6"
                },
                contenido: "¡Eso es increíble! ¿Cómo fue la experiencia?"
            }
        ]
    },
    {
        id: 4,
        usuario: {
            nombre: "Usuario7",
            avatar: "url_del_avatar_usuario7"
        },
        contenido: "Partidazo en el barrio hoy. ¡Ganamos 3-2!",
        fecha_publicacion: "2024-01-20T17:00:00Z",
        likes: 12,
        comentarios: [
            {
                usuario: {
                    nombre: "Usuario8",
                    avatar: "url_del_avatar_usuario8"
                },
                contenido: "Felicidades, chicos. ¿Quién anotó los goles?"
            }
        ]
    },
    {
        id: 5,
        usuario: {
            nombre: "Usuario9",
            avatar: "url_del_avatar_usuario9"
        },
        contenido: "Mi equipo favorito va líder en la liga. ¡Vamos por el campeonato!",
        fecha_publicacion: "2024-01-21T09:30:00Z",
        likes: 18,
        comentarios: [
            {
                usuario: {
                    nombre: "Usuario10",
                    avatar: "url_del_avatar_usuario10"
                },
                contenido: "¿Cuál es tu pronóstico para el próximo partido?"
            }
        ]
    },
    {
        id: 6,
        usuario: {
            nombre: "Usuario11",
            avatar: "url_del_avatar_usuario11"
        },
        contenido: "Entrenamiento intenso hoy. ¡Preparándonos para la gran final!",
        fecha_publicacion: "2024-01-21T14:00:00Z",
        likes: 20,
        comentarios: []
    },
    {
        id: 7,
        usuario: {
            nombre: "Usuario12",
            avatar: "url_del_avatar_usuario12"
        },
        contenido: "¡Reviviendo el gol histórico que nos dio la copa el año pasado! #RecuerdosInolvidables",
        fecha_publicacion: "2024-01-22T11:45:00Z",
        likes: 30,
        comentarios: []
    },
    {
        id: 8,
        usuario: {
            nombre: "Usuario13",
            avatar: "url_del_avatar_usuario13"
        },
        contenido: "Fútbol y amigos, la combinación perfecta. Tarde de partidos amistosos.",
        fecha_publicacion: "2024-01-22T16:30:00Z",
        likes: 10,
        comentarios: [
            {
                usuario: {
                    nombre: "Usuario14",
                    avatar: "url_del_avatar_usuario14"
                },
                contenido: "¡Qué bien suena! ¿Dónde juegan?"
            }
        ]
    },
    {
        id: 9,
        usuario: {
            nombre: "Usuario15",
            avatar: "url_del_avatar_usuario15"
        },
        contenido: "El estadio estaba en llamas hoy. ¡Ganamos 4-0!",
        fecha_publicacion: "2024-01-23T20:15:00Z",
        likes: 22,
        comentarios: []
    },
    {
        id: 10,
        usuario: {
            nombre: "Usuario16",
            avatar: "url_del_avatar_usuario16"
        },
        contenido: "¿Cuál es tu equipo favorito? ¡Deja un comentario!",
        fecha_publicacion: "2024-01-24T12:00:00Z",
        likes: 14,
        comentarios: []
    }
]
