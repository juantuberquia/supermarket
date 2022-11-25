import { React, useState } from "react";

const Form = () => {
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [number, setNumber] = useState();
  const [email, setEmail] = useState();
  const [email2, setEmail2] = useState();
  const [checkEmail, setCheckEmail] = useState(false);

  const sendData = (e) => {
    e.preventDefault();
  };

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleTel = (e) => {
    setNumber(e.target.value);
  };
  const handleEmail1 = (e) => {
    setEmail(e.target.value);
  };
  const handleEmail2 = (e) => {
    setEmail2(e.target.value);
    validateEmail(e.target.value);
  };

  const validateEmail = (valueEmail2) => {
    if (email === valueEmail2) {
      setCheckEmail(true);
    }
  };

  return (
    <div>
      <form action="" onSubmit={sendData}>
        <input
          type="text"
          placeholder="Nombre"
          name="nombre"
          onChange={handleName}
          value={name}
        />
        <input
          type="text"
          placeholder="Apellido"
          name="apellido"
          onChange={handleLastName}
          value={lastName}
        />
        <input
          type="tel"
          placeholder="telefono"
          name="telefono"
          onChange={handleTel}
          value={number}
        />
        <input
          type="email"
          placeholder="ingresar correo"
          name="correo"
          onChange={handleEmail1}
          value={email}
        />
        <input
          type="email"
          placeholder="ingresar correo"
          name="correo2"
          onChange={handleEmail2}
          value={email2}
        />
        {checkEmail ? <button>Realizar compra</button> : null}
      </form>
    </div>
  );
};

export default Form;
