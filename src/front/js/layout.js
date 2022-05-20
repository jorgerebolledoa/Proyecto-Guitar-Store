import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Producto } from "./pages/producto";
import { Comparar } from "./pages/comparar";
import { X250page } from "./pages/X250";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { EditPostAdm } from "./component/Admin/EditPostAdm.jsx";
import { UploadAdm } from "./component/Admin/UploadAdm.jsx";
import { UsersViewAdm } from "./component/Admin/UsersViewAdm.jsx";
import { PanelDeControlAdm } from "./component/Admin/PanelDeControlAdm.jsx";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { CarroDeCompras } from "./pages/carroDeCompras.js";
import { CarroDeComprasVacio } from "./component/carroDeCompras/vistaCarroVacio.jsx";
import { FormularioDePago } from "./component/carroDeCompras/formularioDePago.jsx";
import { ErrorDePago } from "./component/carroDeCompras/errorDePago.jsx";
import { Page_login } from "./pages/login";
import { Page_register } from "./pages/register";
import { Page_forgot_password } from "./pages/forgot_password";
//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Page_login />
            </Route>
            <Route exact path="/register">
              <Page_register />
            </Route>
            <Route exact path="/forgot_password">
              <Page_forgot_password />
            </Route>
            <Route exact path="/Producto">
              <Producto />
            </Route>
            <Route exact path="/X250">
              <X250page />
            </Route>
            <Route exact path="/Comparar">
              <Comparar />
            </Route>
            <Route path="/carroDeCompras">
              <CarroDeCompras />
            </Route>
            <Route path="/carroDeComprasVacio">
              <CarroDeComprasVacio />
            </Route>
            <Route path="/errorDePago">
              <ErrorDePago />
            </Route>
            <Route exact path="/demo">
              <Demo />
            </Route>
            <Route path="/admin">
              <PanelDeControlAdm />
            </Route>
            <Route path="/upload">
              <UploadAdm />
            </Route>
            <Route path="/editpost">
              <EditPostAdm />
            </Route>
            <Route path="/usersview">
              <UsersViewAdm />
            </Route>
            <Route exact path="/single/:theid">
              <Single />
            </Route>
            <Route>
              <h1>Not found!</h1>
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
