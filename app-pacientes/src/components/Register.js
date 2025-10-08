import React, { useState, useEffect } from "react";
import FormRegister from "./FormRegister";
import db from "../database/firebase";
import { ref, push, set, onValue, remove } from "firebase/database";

const Register = () => {
    const [patientData, setPatientData] = useState({});
    const [currentId, setCurrentId] = useState('');

    // 🔹 Carregar dados
    useEffect(() => {
        const pacientesRef = ref(db, 'pacientes');
        onValue(pacientesRef, (snapshot) => {
            const data = snapshot.val();
            if (data) setPatientData(data);
            else setPatientData({});
        });
    }, []);

    // 🔹 Adicionar ou editar paciente
    const addEedit = async (obj) => {
        try {
            if (currentId === '') {
                const pacientesRef = ref(db, "pacientes");
                const newPacienteRef = push(pacientesRef);
                await set(newPacienteRef, obj);
            } else {
                await set(ref(db, `pacientes/${currentId}`), obj);
            }
        } catch (error) {
            console.error("Erro ao adicionar ou editar paciente:", error);
        }
    };

    // 🔹 Remover paciente
    const deletePatient = async (key) => {
        if (window.confirm('Deseja realmente deletar esse cadastro?')) {
            try {
                await remove(ref(db, `pacientes/${key}`));
            } catch (err) {
                console.error("Erro ao remover paciente:", err);
            }
        }
    };

    return (
        <div className="container-fluid p-0">
            <div className="bg-body-secondary p-5 rounded-3 shadow-sm mb-4">
                <h1 className="display-5">Cadastro de pacientes</h1>
                <p className="lead">Consultório Mº Luiza (Fiona)</p>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <FormRegister {...({ addEedit, currentId, patientData })} />
                    </div>

                    <div className="col-md-7">
                        <table className="table table-borderless table-striped">
                            <thead className="thead-light">
                                <tr>
                                    <th>Nome Completo</th>
                                    <th>Telefone</th>
                                    <th>E-mail</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(patientData).map((id) => (
                                    <tr key={id}>
                                        <td>{patientData[id].fullName}</td>
                                        <td>{patientData[id].telephone}</td>
                                        <td>{patientData[id].email}</td>
                                        <td>
                                            <button
                                                className="btn btn-dark me-2"
                                                onClick={() => setCurrentId(id)}
                                            >
                                                <i className="fas fa-pencil-alt"></i>
                                            </button>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => deletePatient(id)}
                                            >
                                                <i className="far fa-trash-alt"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
