import { FC } from "react";
import { Usuario, interfacePublicacion } from "../interface/interface";

import { getRandomAvatar, getRandomURL } from "../utils/urlImg";
import { convertirFecha } from "../utils/fechas";
import { bottomOpc } from "../utils/bottopOpc";

export const UsuarioComponent: FC<{ element: Usuario }> = ({ element }) => (
    <>
        <img src={getRandomAvatar()} alt={element.avatar} width={40} height={40} style={{
            borderRadius: 80
        }} />
        <span style={{
            fontWeight: 700,
            fontSize: 17
        }}>
            {element.nombre}
        </span>
    </>
)


export const ContentElement: FC<{ element: interfacePublicacion }> = ({ element }) => (
    <>

        <div>
            <p style={{
                fontSize: 16,
                fontWeight: 500
            }}>
                {element.contenido}
            </p>
            <label
                style={{
                    fontWeight: "lighter", fontSize: 12
                }}
            >
                {convertirFecha(element.fecha_publicacion)}
            </label>
        </div>

        <div style={{
            display: "flex", flexDirection: "row", gap: 20
        }}>
            {
                [1, 2].map((key) => (
                    <img src={getRandomURL()} alt={`imagen ${key}`} width={250} height={250} style={{
                        borderRadius: 7
                    }} />
                ))
            }
        </div>
    </>
)

export const ContentBottom = () => (
    <>
        {
            bottomOpc.map((key, index) => (
                <button style={{
                    backgroundColor: "transparent", display: "flex", flexDirection: "row", alignItems: "center",
                    gap: 3, padding: "1%", border: "none", fontWeight: 700, opacity: 0.5
                }}>
                    <img src={key.img} alt={`index ${index}`} width={20} height={20} />
                    {key.content}
                </button>
            ))
        }
    </>
)

export const ContentPublicar = () => (
    <div style={{
        display: "flex", flexDirection: "column", gap: 3,
    }}>
        <textarea className="textArea" placeholder="Publicación de contenido" maxLength={150} />
        <div style={{
            display: "flex", flexDirection: "row", justifyContent: "flex-end", gap: 12
        }}>
            <button style={{
                display: "flex", alignItems: "center", justifyContent: "center", padding: 3, border: "none", backgroundColor: "transparent"
            }}>
                <img src="https://img.icons8.com/ios-glyphs/30/000000/attach.png" alt="attach" width={20} height={20} />
            </button>
            <button style={{
                backgroundColor: "rgba(50, 49, 89,1)", padding: "1% 3%", borderRadius: 12, border: "none",
                color: "white", fontWeight: "bold", fontSize: 16
            }}>
                Publicar
            </button>
        </div>
    </div>
)

export const ItmeSeg: FC<{ element: string }> = ({ element }) => (
    <>
        <img src={getRandomAvatar()} alt={element} width={40} height={40} style={{
            borderRadius: 80
        }} />
        <div>
            <strong>{element}</strong>
            <div style={{ display: "flex", flexDirection: "row", gap: 12 }}>
                {
                    ["Añadir", "Seguir"].map((key) => {

                        return (
                            <>
                                {/*eslint-disable-next-line */}
                                <a style={{ opacity: 0.8, fontSize: 12 }}>{key}</a>
                            </>
                        )
                    })
                }
            </div>
        </div>
    </>
)


export const ContentBottom2: FC<{ element: number }> = ({ element }) => (
    <div style={{
        display: "flex", flexDirection: "row", marginLeft: "3%", gap: 12
    }}>
        {/*eslint-disable-next-line */}
        <a style={{
            display: "flex", flexDirection: "row", alignItems: "center", gap: 3
        }}>
            <img src={`https://img.icons8.com/ios/50/000000/conference-call--v1.png`} alt="conference" width={15} height={15} />
            {element}
        </a>
        {/*eslint-disable-next-line */}
        <a style={{
            display: "flex", flexDirection: "row", alignItems: "center", gap: 3
        }}>
            <img src={`https://img.icons8.com/metro/52/000000/create-new.png`} alt="create-new.png" width={15} height={15} />
            Participar
        </a>
        {/*eslint-disable-next-line */}
        <a style={{
            display: "flex", flexDirection: "row", alignItems: "center", gap: 3
        }}>
            <img src={`https://img.icons8.com/ios-filled/50/000000/bookmark-ribbon.png`} alt="bookmark" width={15} height={15} />
            Guardar
        </a>
        {/*eslint-disable-next-line */}
        <a style={{
            display: "flex", flexDirection: "row", alignItems: "center", gap: 3
        }}>
            <img src={`https://img.icons8.com/ios-glyphs/30/000000/share--v1.png`} alt="compartir" width={15} height={15} />
            Compartir
        </a>
    </div>
)