import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import {AppRoute, TIME_FORMAT} from '../../const';
import ConverterScreen from "../converter-screen/converter-screen";
import ErrorScreen from "../error-page/error-page";
import LoadingScreen from '../preloader/preloader';
import {fetchRates} from "../../store/api-actions";

const App = () => {
  const {isDataLoaded, currentDay} = useSelector((state) => state.DATA);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isDataLoaded) {
      dispatch(fetchRates(currentDay.format(TIME_FORMAT.REQUEST)));
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }
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
