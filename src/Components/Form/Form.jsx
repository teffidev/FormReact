import React, { useState } from "react";

const Form = () => {
    //Se crea un estado para cada input del form
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    //Se crea un manejador de eventos para cada uno de    los input
    const onChangeUserName = (e) => setUserName(e.target.value);
    const onChangePassword = (e) => setPassword(e.target.value);

    //Se crea el manejador para el evento onSubmit
    const onSubmitForm = (e) => {
    //evitamos que se recargue la pagina, previniendo el comportamiento por defecto
        e.preventDefault();

    //Por ahora solo mostramos el nombre del usuario
        alert(`Bienvenido: ${userName}`);
    };

    return (
        <div>
            <h3>Iniciar Sesión</h3>
            <form onSubmit={onSubmitForm}>
                <input
                type="text"
                placeholder="Nombre de usuario"
                value={userName}
                onChange={onChangeUserName}
                />
                <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={onChangePassword}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;
