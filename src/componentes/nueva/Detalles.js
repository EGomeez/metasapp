import estilos from "./Detalles.module.css"

function Detalles() {
    const frecuencias = ["dia","semana","mes","año"]
    const emojis = ["⚽","🏐","🏋️‍♂️","🏊","🚵‍♂️","👨‍💻","🏃","🚗","💵","💈","📖"]

    return (
        <div className="tarjeta">
            <form className="p-4">
                <label className="label">
                    DESCRIBE TU META
                    <input className="input" placeholder="ej. 40 caminatas" />
                </label>
                <label className="label">
                    ¿CON QUE FRECUENCIA DESEAS CUMPLIR TU META? <span>(ej. 1 vez a la semana)</span>
                    <div className="flex mb-6">
                        <input className="input mr-6" type="number" />
                        <select className="input" >
                            {frecuencias.map(opcion => <option value={opcion}>{opcion}</option> )}
                        </select> 
                    </div>   
                </label>
                <label className="label">
                    ¿CUANTAS VECES DESEAS COMPLETAR ESTA META?
                    <input className="input" type="number" />
                </label>
                <label className="label">
                    ¿TIENES UNA FECHA LIMITE?
                    <input className="input" type="date" />
                </label>
                <label className="label">
                    ¿CUANTAS VECES HAZ COMPLEYADO YA ESTA META?
                    <input className="input" type="number" />
                </label>
                <label className="label">
                    ESCOGE EL ICONO PARA LA META
                    <select>
                        {emojis.map(opcion => <option value={opcion}>{opcion}</option>)}
                    </select>
                </label>
            </form>
            <div className={estilos.botones}>
                <button className="boton boton--negro">Crear</button>
                <button className="boton boton--gris">Cancelar</button>
            </div>
        </div>
    );
}


export default Detalles;