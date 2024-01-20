import { useState, createContext } from 'react'

import '../styles/homes.css'
import BarMenuOpc from "../container/MenuOpc"
import Publicaciones from '../container/publicaciones'
import Eventos from '../container/eventos'

export const context = createContext<any>(undefined);



export default function Homes() {

    const [state, setState] = useState<string>('comunidad')

    return (
        <context.Provider value={{ state, setState }}>
            <div className="homes" >
                <BarMenuOpc />

                {
                    state === "comunidad" &&
                    <Publicaciones />
                }
                {
                    state === "eventos" &&
                    <Eventos />
                }
            </div>
        </context.Provider>

    )

}