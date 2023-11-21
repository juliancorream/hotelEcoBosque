import './Formulario.css'

export function Formulario(){
    return(
        <>
            <form>
                <div className="row">
                    <div className="col-6">
                        <div class="mb-3">
                            <label class="form-label">Entrada:</label>
                            <input type="date" class="form-control"/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div class="mb-3">
                            <label class="form-label">Salida:</label>
                            <input type="date" class="form-control"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                    <div class="mb-3">
                            <label class="form-label">Numero de Personas:</label>
                            <input type="number" class="form-control" min='1' />
                        </div>
                    </div>
                    <div className="col-6">
                    <div class="mb-3">
                            <label class="form-label">Nombre Quien Reserva::</label>
                            <input type="text" class="form-control"/>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}