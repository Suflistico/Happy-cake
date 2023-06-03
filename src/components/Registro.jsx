


const Registro = () => {
    return (
    <>        
            <div className="mb-3">                
                <label htmlFor="exampleFormControlInput1" className="form-label">
                    <strong>Correo Electronico</strong>
                </label>
                <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                />
            </div>
            <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
            <strong>Descripcion</strong>
            </label>
            <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
            ></textarea>
            <button type="button" class="btn btn-success">Enviar</button>

            </div>        

    </>

    );
};
export default Registro;