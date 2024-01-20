

export type PropsElement = {
    element: string
    img: string
    id: string
}

const colors:string = "fafafa"

export const menuOpc1: PropsElement[] = [
    {
        element: "Eventos",
        img: `https://img.icons8.com/material/24/${colors}/medal2.png`,
        id: "eventos"
    },
    {
        element: "comunidad",
        img: `https://img.icons8.com/ios-glyphs/30/${colors}/group.png`,
        id: "comunidad"
    },
    {
        element: "agregar evento",
        img: `https://img.icons8.com/ios-filled/50/${colors}/plus-2-math.png`,
        id: "agregar"
    },
    {
        element: "mis eventos",
        img: `https://img.icons8.com/ios-filled/50/${colors}/calendar--v1.png`,
        id: `mis_eventos`
    }, {
        element: "favoritos",
        img: `https://img.icons8.com/ios-filled/50/${colors}/like--v1.png`,
        id: "favoritos"
    }
]

export const menuOpc2: PropsElement[] = [
    {
        element: "mi perfil",
        img: `https://img.icons8.com/ios-glyphs/30/${colors}/user--v1.png`,
        id: `perfil`
    },

    {
        element: "mensajes",
        img: `https://img.icons8.com/ios-glyphs/30/${colors}/speech-bubble--v1.png`,
        id: "mensajes"
    },
    {
        element: "Notificación",
        img: `https://img.icons8.com/ios-glyphs/30/${colors}/alarm.png`,
        id: "notificación"
    },
    {
        element: "configuración",
        img: `https://img.icons8.com/ios-glyphs/30/${colors}/gear.png`,
        id: "configuración"
    }, {
        element: "cerrar sección",
        img: `https://img.icons8.com/sf-regular-filled/48/${colors}/exit.png`,
        id: `cerrar`
    }
]