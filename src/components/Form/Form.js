import { addDoc, serverTimestamp } from "firebase/firestore";
import { React, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { collection } from "firebase/firestore";
import { dataBase } from "../../services/firebaseConfig";

const Form = () => {
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [number, setNumber] = useState();
  const [email, setEmail] = useState();
  const [email2, setEmail2] = useState();
  const [checkEmail, setCheckEmail] = useState(false);

  const { productCart, totalPrice, idNewOrder } = useContext(CartContext);

  const sendData = (e) => {
    e.preventDefault();

    let informationOrder = {
      infoUser: {
        name,
        lastName,
        email2,
      },
      items: productCart,
      TotalPrice: totalPrice,
      date: serverTimestamp(),
    };

    const collectionOrder = collection(dataBase, "order");

    addDoc(collectionOrder, informationOrder)
      .then((res) => {
        idNewOrder(res.id);
      })
      .catch((error) => {
        console.log(error);
      });
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
      <form action="" onSubmit={sendData} className="w-a mx-auto">
        <div class="form-group">
          <label for="exampleInputEmail1" className="d-block">
            Ingresa tu nombre
          </label>
          <input
            type="text"
            placeholder="Nombre"
            name="nombre"
            onChange={handleName}
            value={name}
            className="ml-3"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1" className="d-block">
            Ingresa tu apellido
          </label>
          <input
            placeholder="Apellido"
            name="apellido"
            onChange={handleLastName}
            value={lastName}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1" className="d-block">
            Ingresa tu telefono
          </label>
          <input
            type="tel"
            placeholder="telefono"
            name="telefono"
            onChange={handleTel}
            value={number}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1" className="d-block">
            Ingresa tu correo
          </label>
          <input
            type="email"
            placeholder="ingresar correo"
            name="correo"
            onChange={handleEmail1}
            value={email}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1" className="d-block">
            Ingresa tu correo
          </label>
          <input
            type="email"
            placeholder="ingresar correo"
            name="correo2"
            onChange={handleEmail2}
            value={email2}
          />
        </div>

        {/* <input
          type="text"
          placeholder="Nombre"
          name="nombre"
          onChange={handleName}
          value={name}
        /> */}
        {/* <input
          type="text"
          placeholder="Apellido"
          name="apellido"
          onChange={handleLastName}
          value={lastName}
        /> */}
        {/* <input
          type="tel"
          placeholder="telefono"
          name="telefono"
          onChange={handleTel}
          value={number}
        /> */}
        {/* <input
          type="email"
          placeholder="ingresar correo"
          name="correo"
          onChange={handleEmail1}
          value={email}
        /> */}
        {/* <input
          type="email"
          placeholder="ingresar correo"
          name="correo2"
          onChange={handleEmail2}
          value={email2}
        /> */}
        {checkEmail ? <button>Realizar compra</button> : null}
        <small id="emailHelp" class="form-text text-muted">
          Nunca compartas tu email con otra persona.
        </small>
      </form>
    </div>
  );
};

export default Form;
