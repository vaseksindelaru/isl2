import Head from "next/head";
import Layount from "../components/Layount";

/*export default function Login(){
    return(
        <Layount>
            <Head>
                <title>login</title>
            </Head>
            <h1>Login</h1>
        </Layount>
    )
}*/
import React, { useState } from 'react';

export default function LoginForm() {
  // Utiliza el estado de React para almacenar la información de inicio de sesión del usuario
  const [loginInfo, setLoginInfo] = useState({
    username: '',
    password: ''
  });

  // Función manejadora del evento de envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();

    // Aquí puedes verificar la información de inicio de sesión del usuario
    // por ejemplo, puedes hacer una solicitud HTTP a tu servidor para verificar
    // la información de inicio de sesión

    // Si la información de inicio de sesión es válida, puedes redirigir al usuario
    // a una página protegida utilizando la función `history.push` de React Router
    // history.push('/protected');

    // Si la información de inicio de sesión es inválida, puedes mostrar un mensaje de error
    // utilizando un componente de mensaje de error que hayas creado previamente
    // setErrorMessage('Nombre de usuario o contraseña incorrectos');
  }

  // Función manejadora de cambios de entrada
   const handleChange  = (event) => {
    setLoginInfo({
      ...loginInfo,
      [event.target.name]: event.target.value
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre de usuario:
        <input
          type="text"
          name="username"
          value={loginInfo.username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Contraseña:
        <input
          type="password"
          name="password"
          value={loginInfo.password}
          onChange={handleChange}
        />
      </label>
      </form>)
}