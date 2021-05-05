import React from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";
import ErrorBody from "../error-body/error-body";

const ErrorScreen = () => {
  return <React.Fragment>
    <Header />

    <ErrorBody />

    <Footer />
  </React.Fragment>;
};

export default ErrorScreen;
