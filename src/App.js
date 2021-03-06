import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import {
  StartPage,
  AlreadyUser,
  AlreadyUserQuestion,
  CodeLogin,
  QRLogin,
  SelectRegisterMode,
  RegisterForm, Login, UserProfile, QROrden, DispenseProduct, ProductList, ProductDetails, PayPage, OrderDetail
} from "./components/Pages";
import { useState } from "react";
import Help from "./components/Help";

function App() {

  return (
    <>
      <div className="d-flex flex-column justify-content-between height-100">
        <BrowserRouter  >
          {/* Top bar*/}
          <div className=" height-10">
              <NavBar>

              </NavBar>
          </div>

          {/* Content*/}
          <div className="height-90 pos-rel">
            <Route
              exact
              path="/"
              render={(props) => {
                return <StartPage />;
              }}
            />
            <Route
              exact
              path="/yeu"
              component={(props) => <AlreadyUserQuestion />}
            />
            <Route
              exact
              path="/userVerify"
              component={(props) => <AlreadyUser />}
            />
            <Route
              exact
              path="/codeLogin"
              component={(props) => <CodeLogin />}
            />
            <Route exact path="/QRLogin" component={(props) => <QRLogin />} />
            <Route exact path="/QROrden" component={(props) => <QROrden />} />
            <Route exact path="/selectRegisterMode" component={(props) => <SelectRegisterMode />} />
            <Route exact path="/register" component={(props) => <RegisterForm />} />
            <Route exact path="/login" component={(props) => <Login />} />
            <Route exact path="/user" component={(props) => <UserProfile />} />
            <Route exact path="/user/:userID" component={(props) => <UserProfile />} />
            <Route exact path="/dispense/:product_id" component={(props) => <DispenseProduct />} />
            <Route exact path="/products" component={(props) => <ProductList />} />
            <Route exact path="/product/:productID" component={(props) => <ProductDetails />} />
            <Route exact path="/payment/:product_id" component={(props) => <PayPage />} />
            <Route exact path="/dispense_order/:orderID" component={(props) => <OrderDetail />} />

          </div>
        </BrowserRouter>
          <Help/>
      </div>
    </>
  );
}

export default App;
