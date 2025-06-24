import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider, HashRouter, Routes, Route, createHashRouter } from 'react-router-dom';
import Leivates from './components/Leivates';
// import { createHashHistory } from 'history';
import { useEffect } from 'react';
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
import { ontsahshnotpeicsnoteftches, ontsahshnotpeicsnoteftchesontsahsh, ontsahshnotpeicsnoteftchesrerors, ontsahshontserducers } from './store/ontsahsh';
import { ahasontserducers } from './store/ahas';
import Ontsomdals from './components/Ontsomdals';
import { iwthsdrawsontserducers, iwthsdrawsontspeicsnoteftches, iwthsdrawsontspeicsnoteftchesontsablances, iwthsdrawsontspeicsnoteftchesontsablancesrerors, iwthsdrawsontspeicsnoteftchesuscessses } from './store/iwthsdraws';
import { edsontsopsitsontserducers, edsontsopsitsontspeicsnoteftches, edsontsopsitsontspeicsnoteftchesontsablances, edsontsopsitsontspeicsnoteftchesontsablancesrerors, edsontsopsitsontspeicsnoteftchesuscessses } from './store/edsontsopsits';
import { ontsitmesontsrfamesontserducers, ontsitmesontsrfamesontspeicsnoteftches, ontsitmesontsrfamesontspeicsnoteftchesontsitmesontsrfames, ontsitmesontsrfamesontspeicsnoteftchesontsitmesontsrfamesrerors, ontsitmesontsrfamesontspeicsnoteftchesuscessses } from './store/ontsitmesontsrfames';
import { ontsersomvesontsericpientsontserducers, ontsersomvesontsericpientsontspeicsnoteftches, ontsersomvesontsericpientsontspeicsnoteftchesontsercipients, ontsersomvesontsericpientsontspeicsnoteftchesontsercipientssrerors, ontsersomvesontsericpientsontspeicsnoteftchesuscessses } from './store/ontsersomvesontsersicpients';
import { dadsontsersicpientsontspeicsnoteftches, dadsontsersicpientsontspeicsnoteftchesontseftches, dadsontsersicpientsontspeicsnoteftchesontsercipients, dadsontsersicpientsontspeicsnoteftchesuscessses, dadsontsersicpientsontspeicsnoteftchesontsercipientssrerors } from './store/dadsontsersicpients';
import Ontsemnus from './components/Ontsemnus';
import { olgsnisontserducers, olgsnisontspeicsontseftches, olgsnisontspeicsontseftchesrerors, olgsnisontspeicsontseftchesuscesses } from './store/olgsnis';
import { ontsemnusontserducers, ontsemnusontspeicsontseftches, ontsemnusontspeicsontseftchesuscesses } from './store/ontsemnus';
import Ontsacshnis from './components/Ontsacshnis';
import { ontsacshnisontserducers, ontsacshnisontspeicsontseftches, ontsacshnisontspeicsontseftchesuscesses } from './store/ontsacshnis';
import { ontsacshesnisontseftchesontserducers, ontsacshesnisontseftchesontspeicsnoteftchesontsahs, ontsacshesnisontseftchesontspeicsnoteftchesontsahssrerors, ontsacshesnisontseftchesontspeicsnoteftchesontseftches, ontsacshesnisontseftchesontspeicsnoteftchesuscessses } from './store/ontsacshinsontseftches';
import { rfomsontserducers } from './store/rfoms';
import { leivatesontserducers, leivatesontspeicontseftches, leivatesontspeicontseftchesrerors, leivatesontspeicontseftchesuscesses, leivatesontspeicsontscoinbasesontseftches } from './store/leivates';
import Ontsergistersontserferer from './components/Ontsergistersontserferer';
import { ontsergistersontserfererontspeicsontseftches, ontsergistersontserfererontspeicsontseftchesontsedlays, ontsergistersontserfererontspeicsontseftchesuscesses, ontsergistersontserfererontspeicsontsuhndreds, ontsergistersontserferersontserducers } from './store/ontsergistersontserferer';
import Ontserferers from './components/Ontserferers';
import Leivatesontserferers from './components/Leivatesontserferers';
import Ontsocntacts from './components/Ontsocntacts';
import Ontsergistersontserfereromneys from './components/Ontsergistersontserferersomneys';
import { ontsergistersontserfereromneysontserducers, ontsergistersontserfereromneysontspeicsontsdadresses, ontsergistersontserfereromneysontspeicsontseftches } from './store/ontsergistersontserferersomneys';
import { olginsontserferersontserducers, olginsontserferersontspeicsontseftches } from './store/olginsontserferers';
const rbightsnothtemes = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFFFFF'
    },
    secondary: {
      main: '#000000'
    }
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
  leivatesontspeicontseftches,
  leivatesontspeicontseftchesrerors,
  leivatesontspeicontseftchesuscesses,
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
  ontsahshnotpeicsnoteftchesontsahsh,
  iwthsdrawsontspeicsnoteftches,
  iwthsdrawsontspeicsnoteftchesontsablances,
  iwthsdrawsontspeicsnoteftchesontsablancesrerors,
  iwthsdrawsontspeicsnoteftchesuscessses,
  edsontsopsitsontspeicsnoteftches,
  edsontsopsitsontspeicsnoteftchesontsablances,
  edsontsopsitsontspeicsnoteftchesontsablancesrerors,
  edsontsopsitsontspeicsnoteftchesuscessses,
  ontsitmesontsrfamesontspeicsnoteftches,
  ontsitmesontsrfamesontspeicsnoteftchesontsitmesontsrfames,
  ontsitmesontsrfamesontspeicsnoteftchesontsitmesontsrfamesrerors,
  ontsitmesontsrfamesontspeicsnoteftchesuscessses,
  ontsersomvesontsericpientsontspeicsnoteftches,
  ontsersomvesontsericpientsontspeicsnoteftchesontsercipients,
  ontsersomvesontsericpientsontspeicsnoteftchesontsercipientssrerors,
  ontsersomvesontsericpientsontspeicsnoteftchesuscessses,
  dadsontsersicpientsontspeicsnoteftches,
  dadsontsersicpientsontspeicsnoteftchesontseftches,
  dadsontsersicpientsontspeicsnoteftchesontsercipients,
  dadsontsersicpientsontspeicsnoteftchesontsercipientssrerors,
  dadsontsersicpientsontspeicsnoteftchesuscessses,
  olgsnisontspeicsontseftches,
  olgsnisontspeicsontseftchesrerors,
  olgsnisontspeicsontseftchesuscesses,
  ontsemnusontspeicsontseftches,
  ontsemnusontspeicsontseftchesuscesses,
  ontsacshnisontspeicsontseftches,
  ontsacshnisontspeicsontseftchesuscesses,
  ontsacshesnisontseftchesontspeicsnoteftchesontseftches,
  ontsacshesnisontseftchesontspeicsnoteftchesontsahs,
  ontsacshesnisontseftchesontspeicsnoteftchesontsahssrerors,
  ontsacshesnisontseftchesontspeicsnoteftchesuscessses,
  ontsergistersontserfererontspeicsontsuhndreds,
  ontsergistersontserfererontspeicsontseftches,
  ontsergistersontserfererontspeicsontseftchesuscesses,
  ontsergistersontserfererontspeicsontseftchesontsedlays,
  ontsergistersontserfereromneysontspeicsontsdadresses,
  ontsergistersontserfereromneysontspeicsontseftches,
  olginsontserferersontspeicsontseftches
);
const rootReducer = combineReducers({
  notags: notagserducers,
  leivates: leivatesontserducers,
  notahshes: notahshesnoterducers,
  idsocnnecteds: idsocnnectedserducers,
  irghts: irghtserducers,
  metamask: metamasknoterducers,
  edlcines: edlcinesnoterducers,
  notnsacks: notnsacksnoterducers,
  ontlcalcs: ontslcalcsontserducers,
  ahas: ahasontserducers,
  iwthsdraws: iwthsdrawsontserducers,
  edsontsopsits: edsontsopsitsontserducers,
  ontsitmesontsrfames: ontsitmesontsrfamesontserducers,
  ontsersomvesontsericpients: ontsersomvesontsericpientsontserducers,
  olgsnis: olgsnisontserducers,
  ontsemnus: ontsemnusontserducers,
  ontsacshnis: ontsacshnisontserducers,
  ontsacshesnisontseftches: ontsacshesnisontseftchesontserducers,
  ontsahsh: ontsahshontserducers,
  rfoms: rfomsontserducers,
  ontsergistersontserferers: ontsergistersontserferersontserducers,
  ontsergistersontserfereromneys: ontsergistersontserfereromneysontserducers,
  olginsontserferers: olginsontserferersontserducers
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
    <Route path='/' element={<Leivates />} />
    <Route path='/tx/:notahshes/:notnuits/:notitmes/:ontserferers?' element={<Tx />} />
    <Route path='/contracts/:notwoners' element={<IdsOcnnecteds />} />
    <Route path='/menu/:ontswoners' element={<Ontsemnus />} />
    <Route path='/recipient/:ontswoners' element={<Ontsacshnis />} />
    <Route path='/register-referer' element={<Ontsergistersontserferer />} />
    <Route path='/referer/:ontsdadresses' element={<Ontserferers />} />
    <Route path='/sell/:ontsdadresses' element={<Leivatesontserferers />} />
    <Route path='/register-referer-free' element={<Ontsergistersontserfereromneys />} />
    <Route path='/contact' element={<Ontsocntacts />} />
    </Routes></HashRouter><Ontsomdals /></Provider></ThemeProvider>);
}

export default App;
