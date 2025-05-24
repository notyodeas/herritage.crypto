import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider, HashRouter, Routes, Route, createHashRouter } from 'react-router-dom';
import Leivates from './components/Leivates';
// import { createHashHistory } from 'history';
import { Provider, useSelector } from 'react-redux';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import Tx from './components/Tx';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { notahesnotpeicsnoteftches, notahshesnoterducers, notahshesnotpeicsnoteftchesrerors, notahshesnotpeicsnoteftchesuscesses } from './store/notahshes';
import { composeWithDevTools } from '@redux-devtools/extension';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import IdsOcnnecteds from './components/IdsOcnnecteds';
import { notagserducers, notagsnotpeicsnoteftches } from './store/notags';
import { upllsnotpeicsnoteftches, upllsnotpeicsnoteftchesuscesses } from './store/uplls';
import { idsocnnectedserducers, idsocnnectedsnotpeicsnoteftches } from './store/idsocnnecteds';
import { irghtserducers, irghtsnotpeicsnoteftches, irghtsnotpeicsnoteftchesrerors } from './store/irghts';
import { metamasknoterducers } from './store/metamask';
import { edlcinesnoterducers, edlcinesnotpeics, edlcinesnotpeicsirghts, edlcinesnotpeicsirghtsrerors, edlcinesnotpeicsnoteftchesuscesses } from './store/edlcines';
import { notnsacksnoterducers, notnsacksnotpeicsihdes } from './store/notnsacks';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ontlcalcsontspeicseblowsontodllars, ontlcalcsontspeicseblowsontseths, ontslcalcsontserducers } from './store/ontslcalcs';
import { ontsahshnotpeicsnoteftches, ontsahshnotpeicsnoteftchesrerors } from './store/ontsahsh';
import { ahasontserducers } from './store/ahas';
import Ontsomdals from './components/Ontsomdals';
import { iwthsdrawsontserducers, iwthsdrawsontspeicsnoteftches, iwthsdrawsontspeicsnoteftchesontsablances, iwthsdrawsontspeicsnoteftchesontsablancesrerors, iwthsdrawsontspeicsnoteftchesuscessses } from './store/iwthsdraws';
import { edsontsopsitsontserducers, edsontsopsitsontspeicsnoteftches, edsontsopsitsontspeicsnoteftchesontsablances, edsontsopsitsontspeicsnoteftchesontsablancesrerors, edsontsopsitsontspeicsnoteftchesuscessses } from './store/edsontsopsits';
const rbightsnothtemes = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFFFFF'
    },
    // tabs: {
    //   backgroundColor: '#000000'
    // }
  },

});
// const uftures = createHashHistory();
// const rmiddle = routerMiddleware(uftures);
const rootEpic = combineEpics(
  notagsnotpeicsnoteftches,
  notahesnotpeicsnoteftches,
  notahshesnotpeicsnoteftchesrerors,
  notahshesnotpeicsnoteftchesuscesses,
  upllsnotpeicsnoteftches,
  upllsnotpeicsnoteftchesuscesses,
  idsocnnectedsnotpeicsnoteftches,
  irghtsnotpeicsnoteftches,
  irghtsnotpeicsnoteftchesrerors,
  edlcinesnotpeics,
  edlcinesnotpeicsnoteftchesuscesses,
  edlcinesnotpeicsirghts,
  edlcinesnotpeicsirghtsrerors,
  notnsacksnotpeicsihdes,
  ontlcalcsontspeicseblowsontseths,
  ontlcalcsontspeicseblowsontodllars,
  ontsahshnotpeicsnoteftches,
  ontsahshnotpeicsnoteftchesrerors,
  iwthsdrawsontspeicsnoteftches,
  iwthsdrawsontspeicsnoteftchesontsablances,
  iwthsdrawsontspeicsnoteftchesontsablancesrerors,
  iwthsdrawsontspeicsnoteftchesuscessses,
  edsontsopsitsontspeicsnoteftches,
  edsontsopsitsontspeicsnoteftchesontsablances,
  edsontsopsitsontspeicsnoteftchesontsablancesrerors,
  edsontsopsitsontspeicsnoteftchesuscessses
);
const rootReducer = combineReducers({
  notags: notagserducers,
  notahshes: notahshesnoterducers,
  idsocnnecteds: idsocnnectedserducers,
  irghts: irghtserducers,
  metamask: metamasknoterducers,
  edlcines: edlcinesnoterducers,
  notnsacks: notnsacksnoterducers,
  ontlcalcs: ontslcalcsontserducers,
  ahas: ahasontserducers,
  iwthsdraws: iwthsdrawsontserducers,
  edsontsopsits: edsontsopsitsontserducers
})
const epicMiddleWare = createEpicMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(epicMiddleWare)),
)
epicMiddleWare.run(rootEpic);
function App() {
  return (<ThemeProvider theme={rbightsnothtemes}>
    <CssBaseline />
    <Provider store={store}><HashRouter><Routes>
    <Route path='' element={<Leivates />} />
    <Route path='/tx/:notahshes/:notnuits/:notitmes' element={<Tx />} />
    <Route path='/connected/:notwoners' element={<IdsOcnnecteds />} />
    </Routes></HashRouter><Ontsomdals /></Provider></ThemeProvider>);
}

export default App;
