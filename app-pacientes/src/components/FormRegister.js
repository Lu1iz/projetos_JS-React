import React, {useState, useEffect} from "react";

const FormRegister = (props) => {
    //Variaveis de captura de dado
    const initialValueArea = {
        fullName: '',
        telephone: '',
        email: '',
        adress: ''
    }

    let [values, setValues] = useState(initialValueArea);

    useEffect( () => {
        if(props.currentId === '')
            setValues({
                ...initialValueArea
            })
        else
            setValues({
                ...props.patientData[props.currentId]
             })
    }, [props.currentId, props.patientData]);

    const handleChange = e => {
        let {name, value} = e.target;

        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.addEedit(values);
        setValues(initialValueArea);
    }

    return (
        <form autoComplete="off" onSubmit={handleSubmit}>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>

                <input className="form-control" placeholder="Nome Completo" name="fullName" value={values.fullName} onChange={handleChange}/>
            </div>

            <div className="row">
                <div className="col-md-6 my-3">
                    <div className="form-group input-group mb-3">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-mobile-alt"></i>
                            </div>
                        </div>
                        <input className="form-control" placeholder="Telefone" name="telephone" value={values.telephone} onChange={handleChange}/>
                    </div>
                </div>

                <div className="col-md-6 my-3">
                    <div className="form-group input-group mb-3">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-envelope"></i>
                            </div>
                        </div>
                        <input className="form-control" placeholder="Email" name="email" value={values.email} onChange={handleChange}/>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <textarea className="form-control" placeholder="Endereço" name="adress" value={values.adress} onChange={handleChange}/>
            </div>

            <div className="form-group">
                <input className="btn btn-dark w-100 w-sm-auto" type="submit" value={props.currentId === '' ? 'Save' : 'Edit'} />
            </div>
        </form>
    )
}

export default FormRegister;