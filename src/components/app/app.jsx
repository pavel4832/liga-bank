import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {AppRoute} from '../../const';
import ConverterScreen from "../converter-screen/converter-screen";
import ErrorScreen from "../error-page/error-page";

const App = () => {
  return (
    <Switch>
      <Route
        exact
        path={AppRoute.ROOT}
        render={() => <ConverterScreen />}
      />
      <Route
        exact
        path={AppRoute.SERVICES}
        render={() => <ErrorScreen />}
      />
      <Route
        exact
        path={AppRoute.LOAN}
        render={() => <ErrorScreen />}
      />
      <Route
        exact
        path={AppRoute.CONVERTER}
        render={() => <ConverterScreen />}
      />
      <Route
        exact
        path={AppRoute.CONTACT}
        render={() => <ErrorScreen />}
      />
      <Route
        exact
        path={AppRoute.QUESTIONS}
        render={() => <ErrorScreen />}
      />
      <Route>
        <ErrorScreen />
      </Route>
    </Switch>
  );
};

export default App;
