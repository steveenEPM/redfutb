export interface Usuario {
    nombre: string;
    avatar: string;
}

export interface Comentario {
    usuario: Usuario;
    contenido: string;
}

export interface interfacePublicacion {
    id: number;
    usuario: Usuario;
    contenido: string;
    imagen?: string;
    fecha_publicacion: string;
    likes: number;
    comentarios: Comentario[];
}

export interface interfaceEventoDeportivo {
    id: number;
    creador: Usuario;
    deporte: string;
    titulo: string;
    descripcion: string;
    fecha: string;
    hora: string;
    ubicacion: string;
    participantes: Usuario[];
  }
  