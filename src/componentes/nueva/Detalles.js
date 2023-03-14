import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Contexto } from "../../servicios/Memoria";
import estilos from "./Detalles.module.css"

function Detalles() {

    const {id} = useParams()

    const [form, setForm] = useState({
        detalles:'',
        periodo:'dia',
        eventos:1,
        icono:'🏃',
        meta: 52,
        plazo:'2023-01-01',
        completado: 0
    })

    const [estado, enviar] = useContext(Contexto)

    const {detalles, periodo, eventos, icono, meta, plazo,completado} = form

    const onChange = (event, prop) => {
        setForm(estado => ({...estado, [prop]: event.target.value }))
    }

    useEffect(() => {
        const metaMemoria = estado.objetos[id]
        if (!id) return 
        if (!metaMemoria) {
            return navegar('/lista')
        }
       setForm(metaMemoria)
    },[id]) 

    const navegar = useNavigate()

    const crear = () => {
       enviar({tipo: 'crear', meta: form})
       navegar('/lista')
    }

    const actualizar = () => {
        enviar({tipo: 'actualizar', meta: form})
        navegar('/lista')
     }

     const borrar = () => {
        enviar({tipo: 'borrar', id})
        navegar('/lista')
     }

    const cancelar = () => {
        navegar('/lista')
     }

    const frecuencias = ["dia","semana","mes","año"]
    const emojis = ["⚽","🏐","🏋️‍♂️","🏊","🚵‍♂️","👨‍💻","🏃","🚗","💵","💈","📖"]

    return (
        <div className="tarjeta">
            <form className="p-4">
                <label className="label">
                    DESCRIBE TU META
                    <input 
                    className="input" 
                    placeholder="ej. 40 caminatas"
                    value={detalles}
                    onChange= {e => onChange(e, 'detalles')}
                    />
                </label>
                <label className="label">
                    ¿CON QUE FRECUENCIA DESEAS CUMPLIR TU META? <span>(ej. 1 vez a la semana)</span>
                    <div className="flex mb-6">
                        <input 
                        className="input mr-6" 
                        type="number" 
                        value={eventos}
                        onChange= {e => onChange(e, 'eventos')}
                        />
                        <select 
                        className="input"
                        value={periodo} 
                        onChange= {e => onChange(e, 'periodo')}
                        >
                            {frecuencias.map((opcion) => 
                            <option value={opcion}>
                                {opcion}
                            </option> )}
                        </select> 
                    </div>   
                </label>
                <label className="label">
                    ¿CUANTAS VECES DESEAS COMPLETAR ESTA META?
                    <input 
                    className="input" 
                    type="number"
                    value={meta}
                    onChange= {e => onChange(e, 'meta')}
                    />
                </label>
                <label className="label">
                    ¿TIENES UNA FECHA LIMITE?
                    <input 
                    className="input" 
                    type="date"
                    value={plazo} 
                    onChange= {e => onChange(e, 'plazo')}
                    />
                </label>
                <label className="label">
                    ¿CUANTAS VECES HAZ COMPLETADO YA ESTA META?
                    <input 
                    className="input" 
                    type="number" 
                    value={completado}
                    onChange= {e => onChange(e, 'completado')}
                    />
                </label>
                <label className="label">
                    ESCOGE EL ICONO PARA LA META
                    <select 
                    className="input"
                    value={icono}
                    onChange= {e => onChange(e, 'icono')}
                    >
                        {emojis.map((opcion) => 
                        <option value={opcion}>
                            {opcion}
                        </option>)}
                    </select>
                </label>
            </form>
            <div className={estilos.botones}>
                {!id &&<button 
                className="boton boton--negro"
                onClick={crear}
                >Crear</button> }
                {id && <button 
                className="boton boton--negro"
                onClick={actualizar}
                >Actualizar</button> }
                {id && <button 
                className="boton boton--rojo"
                onClick={borrar}
                >Borrar</button> }
                <button  
                className="boton boton--gris"
                onClick={cancelar}
                >Cancelar</button>
            </div>
        </div>
    );
}


export default Detalles;