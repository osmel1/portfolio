import Head from "next/head";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Fotter";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    
    <React.Fragment>
      <Head>
        <meta name="theme-color" content="#3c1742" />
        <title>Elhachimi Oussama</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </React.Fragment>
  );
}

export default MyApp;