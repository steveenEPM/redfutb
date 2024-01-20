import { FC, useContext } from "react"
import { menuOpc1, menuOpc2, PropsElement } from "../utils/headerElem"
import { context } from "../page/homes"



export default function BarMenuOpc() {

    let { state, setState } = useContext(context)

    const eventClick = (e: string) => {

        if ((e === "eventos") || (e === "comunidad")) {
            setState(e)
        }

    }



    return (
        <div className="headerContainer">

            <div style={{
                display: "flex", flexDirection: "row", gap: 12, alignItems: "center", marginBottom: 12
            }}>
                <img src={`https://img.icons8.com/ios-filled/50/fafafa/sport.png`} alt="icons_app" width={35} height={35} />
                <h1 style={{ fontSize: 18, color: "#fafafa" }}>REDFUTB </h1>
            </div>

            <div className="components">
                {
                    menuOpc1.map((key, index) => (
                        <button className={state !== key.id ? "header_Btn" : "header_Btn active_Btn"} key={index}
                            onClick={() => eventClick(key.id)}
                        >
                            <Element elemnt={key} />
                        </button>
                    ))
                }
            </div>
            <div style={{ height: 1, width: "80%", backgroundColor: "rgba(0,0,0,0.3)" }} />
            <div className="components">
                {
                    menuOpc2.map((key, index) => (
                        <button className={state !== key.id ? "header_Btn" : "header_Btn active_Btn"} key={index} >
                            <Element elemnt={key} />
                        </button>
                    ))
                }
            </div>
        </div>
    )
}


const Element: FC<{ elemnt: PropsElement }> = ({ elemnt }) => (
    <>
        <img src={elemnt.img} alt={elemnt.id} width={20} height={20} />
        {elemnt.element}
    </>
)