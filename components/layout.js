import React from "react";
import Head from "next/head";
// import Header from "./Header";

const Layout = ({ children }) => (
  <React.Fragment>
    <Head>
      <title>Events DB</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
      />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
    </Head>
    <main>{children}</main>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js" />
  </React.Fragment>
);

export default Layout;
