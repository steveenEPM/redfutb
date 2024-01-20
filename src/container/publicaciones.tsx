import { publicaciones } from "../utils/publicaciones"
import { interfacePublicacion } from "../interface/interface"
import { UsuarioComponent, ContentElement, ContentBottom, ContentPublicar, ItmeSeg } from "../components/component"
import { FC } from "react"

export default function ContainerPublicaciones() {

    return (
        <div className="containersScreen">
            <div style={{
                display: "flex", flexDirection: "column", gap: 30,
            }}>
                <ContentPublicar />
                {
                    publicaciones.map((key, index) => {

                        return (
                            <div key={index} style={{
                                display: "flex", flexDirection: "column", gap: 20, padding: "0.5%"
                            }}>
                                <Components element={key} />
                            </div>
                        )
                    })
                }
            </div>

            <div style={{
                marginLeft: "20%"
            }}>
                <strong style={{
                    fontSize: 16
                }}>
                    Otros usuarios
                </strong>
                <div style={{
                    marginTop:12, display:"flex",flexDirection:"column",gap:7
                }}>
                    {
                        ["maria", "jauna", "homero", "martinex","lucas"].map((key) => (
                            <div key={key} style={{display:"flex",flexDirection:"row",gap:12}}>
                                <ItmeSeg element={key} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

const Components: FC<{ element: interfacePublicacion }> = ({ element }) => (
    <>

        <div style={{
            display: "flex", flexDirection: "row", alignItems: "center", gap: 12
        }}>
            <UsuarioComponent element={element.usuario} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <ContentElement element={element} />
        </div>
        <div style={{
            display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 12
        }}>
            <ContentBottom />
        </div>

        <div style={{
            width: "95%", height: 1, backgroundColor: "rgba(0,0,0,.2)", alignSelf: "center"
        }} />

    </>
)

