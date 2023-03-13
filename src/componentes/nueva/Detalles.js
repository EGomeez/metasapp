function Detalles() {
    const frecuencias = ["dia","semana","mes","año"]
    const emojis = ["⚽","🏐","🏋️‍♂️","🏊","🚵‍♂️","👨‍💻","🏃","🚗","💵","💈","📖"]

    return (
        <div>
            <form>
                <label>
                    DESCRIBE TU META
                    <input placeholder="ej. 40 caminatas" />
                </label>
                <label>
                    ¿CON QUE FRECUENCIA DESEAS CUMPLIR TU META? <span>(ej. 1 vez a la semana)</span>
                    <div>
                        <input type="number" />
                        <select>
                            {frecuencias.map(opcion => <option value={opcion}>{opcion}</option> )}
                        </select> 
                    </div>   
                </label>
                <label>
                    ¿CUANTAS VECES DESEAS COMPLETAR ESTA META?
                    <input type="number" />
                </label>
                <label>
                    ¿TIENES UNA FECHA LIMITE?
                    <input type="date" />
                </label>
                <label>
                    ¿CUANTAS VECES HAZ COMPLEYADO YA ESTA META?
                    <input type="number" />
                </label>
                <label>
                    ESCOGE EL ICONO PARA LA META
                    <select>
                        {emojis.map(opcion => <option value={opcion}>{opcion}</option>)}
                    </select>
                </label>
            </form>
            <div>
                <button>Crear</button>
                <button>Cancelar</button>
            </div>
        </div>
    );
}


export default Detalles;