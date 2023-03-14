import Detalles from "../nueva/Detalles";

function Modal({children}) {
    return (
        <div className="flex items-center fixed inset-0 bg-gray-500 bg-opacity-75">
          {/*{JSON.stringify(estado.objetos[id])}*/}  
            <div className="mx-auto">
                {children}
            </div>
        </div>
    );
}

export default Modal;