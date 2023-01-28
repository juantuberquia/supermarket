import { addDoc, serverTimestamp } from "firebase/firestore";
import { React, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { collection } from "firebase/firestore";
import { dataBase } from "../../services/firebaseConfig";
import "./form.css";

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
    <>
      <form
        action=""
        onSubmit={sendData}
        className="d-flex flex-column gap-2 form-checkout"
      >
        <div class="form-group">
          <label for="exampleInputEmail1" className="d-block label-form">
            Ingresa tu nombre:
          </label>
          <input
            type="text"
            placeholder="Nombre"
            name="nombre"
            onChange={handleName}
            value={name}
            className="ml-3 inputs-form"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1" className="d-block label-form">
            Ingresa tu apellido:
          </label>
          <input
            placeholder="Apellido"
            name="apellido"
            onChange={handleLastName}
            value={lastName}
            className="inputs-form"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1" className="d-block label-form">
            Ingresa tu telefono:
          </label>
          <input
            type="tel"
            placeholder="telefono"
            name="telefono"
            onChange={handleTel}
            value={number}
            className="inputs-form"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1" className="d-block label-form">
            Ingresa tu correo:
          </label>
          <input
            type="email"
            placeholder="ingresar correo"
            name="correo"
            onChange={handleEmail1}
            value={email}
            className="inputs-form"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1" className="d-block label-form">
            Ingresa tu correo:
          </label>
          <input
            type="email"
            placeholder="ingresar correo"
            name="correo2"
            onChange={handleEmail2}
            value={email2}
            className="inputs-form"
          />
        </div>
        {checkEmail ? (
          <button className="button-link">Realizar compra</button>
        ) : null}
        <small id="emailHelp" class="form-text text-muted">
          Nunca compartas tu email con otra persona.
        </small>
      </form>
    </>
  );
};

export default Form;
