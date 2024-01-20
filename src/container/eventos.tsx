import { FC } from "react"

import { convertirFecha } from "../utils/fechas"
import { interfaceEventoDeportivo } from "../interface/interface"
import { eventoDeportivo } from "../utils/eventosDeportivos"
import { ContentBottom2 } from "../components/component"

const Imagen = require('../assests/Sport_Family.png')

export default function Eventos() {

    return (
        <div className="containersScreen">
            <div
                style={{ display: "flex", flexDirection: "column", gap: 30, width: "100%" }}
            >
                {
                    eventoDeportivo.map((key, index) => (
                        <div key={index} style={{
                            display: "flex", flexDirection: "column", gap: 20, padding: "0.5%", width: "80%"
                        }}>
                            <Components element={key} />
                        </div>
                    ))
                }
            </div>
            {/* eslint-disable-next-line*/}
            <img src={Imagen} width={400} height={100} id="imgae1"/>
        </div>
    )
}



const Components: FC<{ element: interfaceEventoDeportivo }> = ({ element }) => (
    <>
        <div style={{

        }}>
            <h3 style={{
                fontSize: 26, fontWeight: "bold"
            }}>
                {element.titulo}
            </h3>
            <span style={{
                fontSize: 14, fontWeight: 600
            }}>
                Deporte {element.deporte}
            </span>
            <p style={{
                fontSize: 14, marginTop: 6
            }}>
                {element.descripcion}
            </p>
        </div>
        <div>

            <div style={{
                display: "flex", flexDirection: "row", alignItems: "center", gap: 4
            }}>
                <img src={"https://img.icons8.com/ios-filled/50/000000/calendar--v1.png"} alt="calendar" width={15} height={15} />
                <samp>Dia del evento {convertirFecha(element.fecha)} a la hora {element.hora}</samp>
            </div>


            <div style={{
                display: "flex", flexDirection: "row", alignItems: "center", gap: 4
            }}>
                <img src={"https://img.icons8.com/ios-glyphs/30/000000/marker--v1.png"} alt="calendar" width={15} height={15} />
                <samp>Lugar {element.ubicacion}</samp>
            </div>

        </div>

        <ContentBottom2 element={element.participantes.length} />

        <div style={{
            width: "50%", height: 2, borderRadius: 15, backgroundColor: "rgba(0,0,0,.5)"
        }} />
    </>
)