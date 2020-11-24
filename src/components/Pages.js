import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Container,
  Col,
  Row,
  Input,
  FormGroup,
  Label,
  Form,
  FormFeedback,
  InputGroup,
  Progress,
  Spinner,
} from "reactstrap";
import logo from "../assets/img/modore.png";
import qr from "../assets/img/frame.png";
import productImg from "../assets/img/product.jpg";
import { Link, Redirect, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { randomNumber } from "../utils";
import { useHistory } from "react-router-dom";
import { products, orders } from "./../products";
const StartPage = (props) => {
  return (
    <div className=" d-flex flex-column  justify-content-center align-items-center page">
      <Col sm={4}>
        <img src={logo} width="100%" />
      </Col>

      <Link to="/yeu">
        <Button color="primary">INICIO</Button>
      </Link>
    </div>
  );
};

const AlreadyUserQuestion = () => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center primary page">
        <Row className="d-flex ">
          <Col md={6} className="d-flex justify-content-center">
            <Link to="/login">
              <Button color="secondary" className="m-4">
                ¿Ya eres usuario?{" "}
              </Button>
            </Link>
          </Col>
          <Col md={6} className="d-flex justify-content-center ">
            <Link to="/selectRegisterMode">
              <Button color="secondary" className="m-4">
                Registrate
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
    </>
  );
};

const AlreadyUser = () => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center primary page">
        <Row className="d-flex align-items-stretch">
          <Col md={6} className="d-flex justify-content-center">
            <Link to="/codeLogin">
              <Button color="secondary" className="m-4">
                Ingresar código personal{" "}
              </Button>
            </Link>
          </Col>

          <Col md={6} className="d-flex justify-content-center">
            <Link to="/QRLogin" className="d-flex justify-content-center">
              <Button color="secondary" className="m-4">
                Leer QR
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
    </>
  );
};

const CodeLogin = () => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center primary page">
        <Row className="d-flex  jutify-content-center">
          <Col
            sm={12}
            className="d-flex justify-content-center align-items-center"
          >
            <Input type="number" className="input-lg m-4" />
          </Col>

          <Col sm={12} className="d-flex justify-content-center">
            <Link>
              <Button color="secondary" className="m-4">
                Aceptar
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
    </>
  );
};

const QRLogin = () => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center primary page">
        <div className="h3 p-4 txt-secondary">
          Coloca el codigo freante a la camara
        </div>
        <div className="camera-square "> </div>
      </div>
    </>
  );
};

const SelectRegisterMode = () => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center primary page">
        <Row className="d-flex flex-column justify-content-center align-items-center">
          <Col className="d-flex align-items-stretch mb-4">
            <Link to="/register" className="d-flex align-items-stretch">
              <Button>Ingresar mis datos</Button>
            </Link>
          </Col>
          <Col>
            <Link>
              <Button>Registrarse con facebook</Button>
            </Link>
          </Col>
        </Row>
      </div>
    </>
  );
};

const RegisterForm = () => {
  const { errors, register, handleSubmit, setValue } = useForm();
  const history = useHistory();

  function onSubmit(data) {
    const user = {
      id: randomNumber(5),
      ...data,
    };
    var db = localStorage.getItem("modore-db");
    console.log(db);
    if (db) {
      db = JSON.parse(db);
      db.users.push(user);
      localStorage.setItem("modore-db", JSON.stringify(db));
    } else {
      db = {
        users: [],
      };
      db.users.push(user);
      localStorage.setItem("modore-db", JSON.stringify(db));
    }
    console.log(user);
    history.push("/login");
  }
  function onError(data) {
    console.log(data);
  }

  register({ name: "genero" }, { required: true });
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center primary page">
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
          <Row className="m-2 ">
            <Col
              className="d-flex align-items-stretch justify-content-center"
              md={4}
            >
              <FormGroup>
                <Label className="txt-secondary h5">Nombre</Label>
                <Input
                  invalid={errors.nombre}
                  name="nombre"
                  type="text"
                  className="input-lg"
                  placeholder="Nombre"
                  innerRef={register({ required: true })}
                />
                <FormFeedback>Campo requerido</FormFeedback>
              </FormGroup>
            </Col>
            <Col
              className="d-flex align-items-stretch justify-content-center"
              md={4}
            >
              <FormGroup>
                <Label className="txt-secondary h5">Apellido paterno</Label>
                <Input
                  invalid={errors.apellidoPaterno}
                  name="apellidoPaterno"
                  type="text"
                  className="input-lg"
                  placeholder="Apellido paterno"
                  innerRef={register({ required: true })}
                />
                <FormFeedback>Campo requerido</FormFeedback>
              </FormGroup>
            </Col>
            <Col
              className="d-flex align-items-stretch justify-content-center"
              md={4}
            >
              <FormGroup>
                <Label className="txt-secondary h5">Apellido materno</Label>
                <Input
                  invalid={errors.apellidoMaterno}
                  name="apellidoMaterno"
                  innerRef={register({ required: true })}
                  type="text"
                  className="input-lg"
                  placeholder="Apellido materno"
                />
                <FormFeedback>Campo requerido</FormFeedback>
              </FormGroup>
            </Col>
          </Row>
          <Row className="m-2">
            <Col
              className="d-flex align-items-stretch justify-content-center"
              md={4}
            >
              <FormGroup>
                <Label className="txt-secondary h5">Fecha de nacimiento</Label>
                <Input
                  invalid={errors.fechaNacimiento}
                  name="fechaNacimiento"
                  innerRef={register({ required: true })}
                  type="date"
                  className="input-lg"
                  placeholder="Fecha de nacimiento"
                />
                <FormFeedback>Campo requerido</FormFeedback>
              </FormGroup>
            </Col>
            <Col
              className="d-flex align-items-stretch justify-content-center"
              md={4}
            >
              <FormGroup>
                <Label className="txt-secondary h5">Género</Label>
                <Input
                  type="select"
                  className="input-lg"
                  placeholder="Género"
                  invalid={errors.genero}
                  onChange={(e) =>
                    setValue("genero", e.target.value, {
                      shouldValidate: true,
                      shouldDirty: true,
                    })
                  }
                >
                  <option value="">Genero</option>
                  <option value="Femenino">Femenino</option>
                  <option value="Masculino">Masculino</option>
                </Input>
                <FormFeedback>Campo requerido</FormFeedback>
              </FormGroup>
            </Col>
            <Col
              className="d-flex align-items-stretch justify-content-center"
              md={4}
            >
              <FormGroup>
                <Label className="txt-secondary h5">Celular</Label>
                <Input
                  type="tel"
                  className="input-lg"
                  placeholder="Celular"
                  name="celular"
                  invalid={errors.celular}
                  innerRef={register({ required: true })}
                />
                <FormFeedback>Campo requerido</FormFeedback>
              </FormGroup>
            </Col>
          </Row>
          <Row className="m-2">
            <Col className="d-flex justify-content-center " md={4}>
              <FormGroup>
                <Label className="txt-secondary h5">E-mail</Label>
                <Input
                  type="text"
                  className="input-lg"
                  placeholder="E-mail"
                  name="email"
                  invalid={errors.email}
                  innerRef={register({ required: true })}
                />
                <FormFeedback>Campo requerido</FormFeedback>
              </FormGroup>
            </Col>
            <Col className="d-flex justify-content-center " md={4}>
              <FormGroup>
                <Label className="txt-secondary h5">Contraseña</Label>
                <Input
                  name="password"
                  invalid={errors.password}
                  innerRef={register({ required: true })}
                  type="password"
                  className="input-lg"
                  placeholder="Contraseña"
                />
                <FormFeedback>Campo requerido</FormFeedback>
              </FormGroup>
            </Col>
            {/* <Col className="d-flex" md={4}>
            <FormGroup>
            <Label>Contraseña</Label>
            <Input type="text" className="input-lg" placeholder="Contraseña" />
            </FormGroup>
          </Col> */}
          </Row>
          <Row className="m-2 d-flex justify-content-center">
            <Col md={4} className="d-flex justify-content-center">
              <Button type="submit">Aceptar</Button>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};

const Login = (props) => {
  const { register, errors, handleSubmit, setError } = useForm();
  const history = useHistory();
  const [loginError, setLoginError] = useState(false);

  function onSubmit(data) {
    let db = localStorage.getItem("modore-db");
    console.log(db);
    if (db) {
      db = JSON.parse(db);
      const user = db.users.find(
        (u) => u.email == data.email && u.password == data.password
      );
      if (user) {
        history.push(`/user/${user.id}`);
      } else {
        setError("email", { type: "manual" });
        setError("password", { type: "manual" });
        setLoginError(true);
      }
    } else {
      setError("email", { type: "manual" });
      setError("password", { type: "manual" });
      setLoginError(true);
    }
  }

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center primary page">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className="d-flex justify-content-center ">
            <Col sm={12} className="d-flex justify-content-center">
              <FormGroup>
                <Label className="h4 txt-secondary">Email</Label>
                <Input
                  onChange={(e) => setLoginError(false)}
                  className="input-lg"
                  type="text"
                  placeholder="Email"
                  invalid={errors.email}
                  name="email"
                  innerRef={register({ required: true })}
                >
                  <FormFeedback>Ingrese su Email</FormFeedback>
                </Input>
              </FormGroup>
            </Col>
            <Col sm={12} className="d-flex justify-content-center">
              <FormGroup>
                <Label className="h4 txt-secondary">Contraseña</Label>
                <Input
                  onChange={(e) => setLoginError(false)}
                  type="password"
                  name="password"
                  innerRef={register({ required: true })}
                  invalid={errors.password}
                  className="input-lg"
                  placeholder="Contraseña"
                >
                  <FormFeedback>Ingrese su Contraseña</FormFeedback>
                </Input>
              </FormGroup>
            </Col>
            <Col sm={12} className="d-flex justify-content-center">
              <Button type="submit">Ingresar</Button>
            </Col>
            <Col className="my-2" sm={12}>
              <hr className="hr-sm"></hr>
            </Col>
            <Col sm={12} className="d-flex justify-content-center mb-3">
              <div className="txt-secondary h5">Inicia sesión con</div>
            </Col>
            <Col sm={12} className="d-flex justify-content-center">
              <button className="btn-facebook" type="button">
                <i class="fab fa-facebook-square mr-2"></i>
                Facebook
              </button>
            </Col>
            <Col
              sm={12}
              className="d-flex justify-content-center mt-4 h6 text-danger"
            >
              <div hidden={!loginError}>Email o contraseña incorrectos</div>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};
const QROrden = () => {
  const [valid, setValid] = useState(false);
  const [orderID, setOrderID] = useState("");
  const history = useHistory();
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center primary page">
        <div className="h3 p-4 txt-secondary">
          Coloque el código QR frente a la camara o ingrese el número de orden
        </div>
        <div className="camera-square "> </div>
        <div>
          <FormGroup>
            <Input
              value={orderID}
              onChange={(e) => {
                const orderid = e.target.value;
                setOrderID(orderid);
                const order = orders.find((or) => or.id == orderid);
                if (order) {
                  setValid(true);
                } else {
                  setValid(false);
                }
              }}
              valid={valid}
              className="input-lg mt-2"
            ></Input>
            <FormFeedback>Numero de orden no válido</FormFeedback>
          </FormGroup>
        </div>
        <div className="mt-2">
          <Button
            onClick={(e) => {
              const order = orders.find((or) => or.id == orderID);
              if (order) {
                setValid(true);
                history.push(`/dispense/${order.id}`);
              } else {
                setValid(false);
              }
            }}
          >
            Aceptar
          </Button>
        </div>
      </div>
    </>
  );
};

const DispenseProduct = () => {
  const [busy, setBusy] = useState("f");
  const history = useHistory();
  const [counter, setCounter] = useState();
  var i = 20
  function countDown() {

    i -= 1
    setCounter(i)
    if (i > 0) {
      console.log(i)
      setTimeout((e) => countDown(), 1000);
    }
    else
      history.push("/")
  }

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center primary page">
        <div className="h1 p-4 txt-secondary">Orden Confirmada</div>
        <div className="h2 p-4 txt-secondary">
          Coloque el recipiente debajo de la llave expendedora
        </div>
        <div className="m-4">
          {busy == "t" ? (
            <div className="text-center txt-secondary h3 d-flex flex-column align-items-center">
              Dispensando...
              <Spinner
                animated
                value={100}
                color=""
                style={{ width: "4rem", height: "4rem", marginTop: "20px" }}
              />
            </div>
          ) : busy == "f" ? (
            <Button
              onClick={(e) => {
                setBusy("t");
                setTimeout(() => {
                  setBusy("d");
                  countDown()
                }, 10000);
              }}
            >
              Dispensar producto
            </Button>
          ) : (
            <div className="txt-secondary h3 d-flex flex-column align-items-center"  >
              
              <i className="fa fa-check" style={{ fontSize: "4rem" }}></i>
              producto dispensado exitosamente{" "}
              <Button className="mt-4" onClick={(e) => history.push("/")}>
                Ir al inicio
              </Button>
              <div className ="mt-4">

                volviendo automaticamente en  {counter} segundos

              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const ProductList = () => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center primary page">
        <Row>
          {products.map((p) => {
            return (
              <Col md={4}>
                <Link to={`/product/${p.id}`}>
                  <img height="200px" src={p.img}></img>
                  <div className="txt-secondary h4">{p.name}</div>
                  <div className=" h5">{p.price} $</div>
                </Link>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};

const ProductDetails = () => {
  const { productID } = useParams();
  const product = products.find((p) => p.id == productID);
  const [quantity, setQuantity] = useState(1);

  if (!productID) return <Redirect to="/"></Redirect>;

  return (
    <>
      <div className="d-flex flex-column justify-content-center  primary page">
        <Row className="d-flex flex-row justify-content-between">
          <Col md={4}>
            <img src={product.img} width="100%" />
          </Col>
          <Col md={8} className="txt-secondary h2">
            <Row>
              <div className="h1 txt-secondary">{product.name}</div>
            </Row>
            <Row>
              <div c>{product.price} $</div>
            </Row>
            <Row>
              <div className="mr-3">Cantidad: </div>
              <select
                type="select"
                onChange={(e) => setQuantity(e.target.value)}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
              </select>
            </Row>
            <Row>
              <div className="mr-2">Total</div>
              <div>{quantity * product.price} $</div>
            </Row>
          </Col>
        </Row>
        <Row className="d-flex flex-row justify-content-end align-items-end">
          <Link to="/payment">
            <Button>Pagar</Button>
          </Link>
        </Row>
      </div>
    </>
  );
};

const UserProfile = () => {
  var db = localStorage.getItem("modore-db");
  db = JSON.parse(db);
  const { userID } = useParams();
  const user = db.users.find((u) => u.id == userID);
  const history = useHistory();

  if (!user) return <Redirect to="/"></Redirect>;

  return (
    <div className="d-flex flex-row justify-content-center align-items-center primary page">
      <Row>
        <Col
          sm={6}
          className="d-flex flex-column justify-content-center align-items-center mb-4 "
        >
          <Link to="/products">
            <Button className="m-2">Orden Nueva</Button>
          </Link>

          <Link to="/QROrden">
            <Button className="m-2">Ya tengo una orden iniciada</Button>
          </Link>
          <Link to="/">
            <Button>
              <i class="fas fa-sign-out-alt"> </i> Salir
            </Button>
          </Link>
        </Col>
        <Col sm={1}></Col>
        <Col sm={5} className="d-flex flex-column align-items-center">
          <div className="txt-secondary h3">Código de cliente</div>
          <img src={qr} width="180px" />
          <div className=" h4">{user.id}</div>
        </Col>
      </Row>
    </div>
  );
};

const PayPage = () => {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      history.replace("/dispense");
    }, 10000);
  });
  return (
    <div className="d-flex flex-column justify-content-center align-items-center primary page">
      <div className="h1 txt-secondary">Proceso de pago</div>
      <div className="h2 txt-secondary mb-4">
        Recibiras un Whatsapp / SMS / mail con el enlace para realizar tu pago
      </div>
      <div className="text-center txt-secondary h3">
        <Spinner
          animated
          value={100}
          color=""
          style={{ width: "4rem", height: "4rem", marginTop: "20px" }}
        />
      </div>
      {/* <Link to="/dispense">
        <Button>Aceptar</Button>
      </Link> */}
    </div>
  );
};

const OrderDetail = () => {
  const { orderID } = useParams();
  const order = orders.find((o) => o.id == orderID);
  const product = order.product;

  if (!orderID) return <Redirect to="/"></Redirect>;

  return (
    <>
      <div className="d-flex flex-column justify-content-center  primary page">
        <Row className="d-flex flex-row justify-content-between">
          <Col md={4}>
            <img src={product.img} width="100%" />
          </Col>
          <Col md={8} className="txt-secondary h2">
            <Row>
              <div className="h1 txt-secondary">{product.name}</div>
            </Row>
            <Row>
              <div c>{product.price} $</div>
            </Row>
            <Row>
              <div className="mr-3">Cantidad: </div>
              <div> {product.quantity}</div>
            </Row>
            <Row>
              <div className="mr-2">Total</div>
              <div> {(product.quantity * product.price).toFixed(2)} $</div>
            </Row>
          </Col>
        </Row>
        <Row className="d-flex flex-row justify-content-end align-items-end">
          <Link to="/dispense">
            <Button>Dispensar</Button>
          </Link>
        </Row>
      </div>
    </>
  );
};

export {
  PayPage,
  StartPage,
  AlreadyUserQuestion,
  AlreadyUser,
  CodeLogin,
  QRLogin,
  SelectRegisterMode,
  RegisterForm,
  Login,
  UserProfile,
  QROrden,
  DispenseProduct,
  ProductList,
  ProductDetails,
  OrderDetail,
};
