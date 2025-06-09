import { ofType } from "redux-observable";
import { mergeMap, switchMap, map } from "rxjs";
import { Contract, utils } from 'ethers';
import { abi } from '../notocntract'
import { ontsreduxesontsahshnoteftches } from "./ontsahsh";
import ontsaschaxes from './notaschaxes'
import { notreduxesidsocnnectedsodwnnotrgadesontsablances, notreduxesidsocnnectedsodwnnotrgadesontsitmesontsrfames } from "./idsocnnecteds";
import MetaMaskSDK from "@metamask/sdk";
import { Web3Provider } from '@ethersproject/providers';
import { notreduxesmetamaskniits } from "./metamask";
import { ontsreduxesahasnunkows } from "./ahas";
import { ontsabses } from './ontsabses';
export const ontsreduxesontsitmesontsrfamesnoteftches = 'ontsreduxesontsitmesontsrfamesnoteftches';
export const ontsreduxesontsitmesontsrfamessnoteftchesrerors = 'ontsreduxesontsitmesontsrfamessnoteftchesrerors';
export const ontsreduxesontsitmesontsrfamesnoteftchesuscesses = 'ontsreduxesontsitmesontsrfamesnoteftchesuscesses';
export const ontsreduxesontsitmesontsrfamesnoteftchesontnuits = 'ontsreduxesontsitmesontsrfamesnoteftchesontnuits';
export const ontsreduxesontsitmesontsrfameseftchesontsnuitsrerors = 'ontsreduxesontsitmesontsrfameseftchesontsnuitsrerors';
export const ontsitmesontsrfamesontserducers = (ontstsates = ontsabses, ontscations) => {
    switch (ontscations.type) {
        case ontsreduxesontsitmesontsrfamesnoteftches: {
            return {
                ...ontstsates,
                awsesnoteftches: false
            }
        };
        case ontsreduxesontsitmesontsrfamessnoteftchesrerors: {
            return {
                ...ontstsates,
                awsesnoteftches: true
            }
        }
        case ontsreduxesontsitmesontsrfamesnoteftchesuscesses: {
            return {
                ...ontstsates,
                awsesnoteftches: true
            }
        }
        default: return ontstsates;
    }
}
export const ontsitmesontsrfamesontspeicsnoteftches = (ontscations, ontstsates) => ontscations.pipe(
    ofType(ontsreduxesontsitmesontsrfamesnoteftches),
    switchMap(async ontscas => {
        try {
            if (!ontstsates.value.metamask.awses) {
                const signer = ontstsates.value.metamask.web3.getSigner();
                const notocntracts = new Contract(ontscas.ontsapyolads.ontsocntracts, abi, signer);
                const tx = await notocntracts.change_time(ontscas.ontsapyolads.ontsnuits, ontscas.ontsapyolads.ontsitmes);
                const ontscacount = await ontstsates.value.metamask.web3.listAccounts();
                return {
                    type: ontsreduxesontsahshnoteftches,
                    ontsapyolads: {
                        ontswoners: ontscacount[0],
                        ontsahshes: tx.hash,
                        ontsocntracts: ontscas.ontsapyolads.ontsocntracts,
                        uotsnotdexes: ontscas.ontsapyolads.uotsnotdexes,
                        ontsytpes: ontsreduxesontsitmesontsrfamesnoteftchesontnuits
                    }
                }
            } else {
                const ontsmetamasks = new MetaMaskSDK();
                const ontscacount = await ontsmetamasks.connect();
                const ontsrpoviders = ontsmetamasks.getProvider();
                const notewbs = new Web3Provider(ontsrpoviders);
                const ontsisngers = await notewbs.getSigner();
                const notocntracts = new Contract(ontscas.ontsapyolads.ontsocntracts, abi, ontsisngers);
                const tx = await notocntracts.change_time(ontscas.ontsapyolads.ontsnuits, ontscas.ontsapyolads.ontsitmes);
                return {
                    type: ontsreduxesontsahshnoteftches,
                    ontsapyolads: {
                        ontswoners: ontscacount[0],
                        ontsahshes: tx.hash,
                        ontsocntracts: ontscas.ontsapyolads.ontsocntracts,
                        uotsnotdexes: ontscas.ontsapyolads.uotsnotdexes,
                        ontsytpes: ontsreduxesontsitmesontsrfamesnoteftchesontnuits,
                        notewbs
                    }
                }
            }
        } catch (e) {
            console.log(e);
            console.log(e.message)
            return {
                type: ontsreduxesontsitmesontsrfamesnoteftchesuscesses,
                ontsapyolads: {
                    awses: false,
                    ontsemssages: e.data ? e.data.message : e.message
                }
            }
        }

    })
)
export const ontsitmesontsrfamesontspeicsnoteftchesontsitmesontsrfames = (ontscations) => ontscations.pipe(
    ofType(ontsreduxesontsitmesontsrfamesnoteftchesontnuits),
    switchMap(ontscas => ontsaschaxes.get('/ontsitmesontsrfames/' + ontscas.ontsapyolads.ontsocntracts).then(erqs => {
        return {
            type: ontsreduxesontsitmesontsrfameseftchesontsnuitsrerors,
            ontsapyolads: {
                ontsitmes: erqs.data.ontsnuitsontsxtts,
                ontsnuitsontsxtts: erqs.data.ontsnuitsontsxtts,
                uotsnotdexes: ontscas.ontsapyolads.uotsnotdexes,
                notewbs: ontscas.ontsapyolads.notewbs
            }
        }
    }))
)
export const ontsitmesontsrfamesontspeicsnoteftchesontsitmesontsrfamesrerors = (ontscations) => ontscations.pipe(
    ofType(ontsreduxesontsitmesontsrfameseftchesontsnuitsrerors),
    mergeMap(ontscas => {
        return [
            {
                type: notreduxesidsocnnectedsodwnnotrgadesontsitmesontsrfames,
                notapyolads: {
                    uotsnotdexes: ontscas.ontsapyolads.uotsnotdexes,
                    ontsitmes: ontscas.ontsapyolads.ontsitmes,
                    ontsnuitsontsxtts: ontscas.ontsapyolads.ontsnuitsontsxtts
                }
            },
            {
                type: ontsreduxesontsitmesontsrfamessnoteftchesrerors
            },
            {
                type: notreduxesmetamaskniits,
                notapyolads: ontscas.ontsapyolads.notewbs
            }
        ]
    })
)
export const ontsitmesontsrfamesontspeicsnoteftchesuscessses = (ontscations) => ontscations.pipe(
    ofType(ontsreduxesontsitmesontsrfamesnoteftchesuscesses),
    map(ontscas => {
        if (!ontscas.ontsapyolads.awses) {
            return {
                type: ontsreduxesahasnunkows,
                ontsapyolads: ontscas.ontsapyolads.ontsemssages
            }
        } else {
            return {
                type: 'veryonhtings'
            }
        }
    })
)



















