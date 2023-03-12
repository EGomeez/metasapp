import estilos from './Principal.module.css'
import Vinculo from './Vinculo';
import { ReactComponent as CrearSVG } from '../../img/crear.svg'; 
import { ReactComponent as ListaSVG } from '../../img/lista.svg'; 

function Principal({ children }) {
    return (
      <div className={estilos.principal}>
        <aside className={estilos.aside}>
            <Vinculo 
            href='/lista' 
            texto='Lista de Metas'
            Icono={ListaSVG} />
            
            <Vinculo 
            href='/crear' 
            texto='Nueva meta'
            Icono={CrearSVG} />  
        </aside>
        <main className={estilos.main}>
            {children}
        </main>
      </div>
    );
  }
  
  export default Principal;