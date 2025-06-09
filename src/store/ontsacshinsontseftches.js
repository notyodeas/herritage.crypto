// export const ontsreduxesdadsontsericpientsontsests
// export const dadsontsericpientsniitials = {

// }
// export const dadsontsericpients = (ontstsates, ontscations) => {
//     switch(ontscations.type) {
//         default: return ontstsates;
//     }
// }
import { ofType } from "redux-observable";
import { mergeMap, switchMap, map } from "rxjs";
import { Contract, utils } from 'ethers';
import { abi } from '../notocntract'
import { ontsreduxesontsahshnoteftches } from "./ontsahsh";
import ontsaschaxes from './notaschaxes'
import { notreduxesidsocnnectedsodwnnotrgadesontsablances, notreduxesidsocnnectedsodwnnotrgadesontsersontsicpients, notreduxesidsocnnectedsodwnnotrgadesontsersontsicpientsontseftchesafles, notreduxesidsocnnectedsodwnnotrgadesontsersontsicpientsontseftchesrtontsues } from "./idsocnnecteds";
import MetaMaskSDK from "@metamask/sdk";
import { Web3Provider } from '@ethersproject/providers';
import { notreduxesmetamaskniits } from "./metamask";
import { ontsreduxesahasnunkows } from "./ahas";
import { ontsabses } from './ontsabses';
import { ontsreduxesontsacshnisodwnontsrgadesontsahs } from "./ontsacshnis";
export const ontsreduxesontsacshinsontseftchesontseftches = 'ontsreduxesontsacshinsontseftchesontseftches';
export const ontsreduxesontsacshinsontseftchesontseftchesrerors = 'ontsreduxesontsacshinsontseftchesontseftchesrerors';
export const ontsreduxesontsacshinsontseftchesontseftchesuscesses = 'ontsreduxesontsacshinsontseftchesontseftchesuscesses';
export const ontsreduxesontsacshinsontseftchesontseftchesontsahs = 'ontsreduxesontsacshinsontseftchesontseftchesontsahs';
export const ontsreduxesontsacshinsontseftchesontseftchesontsahsrerors = 'ontsreduxesontsacshinsontseftchesontseftchesontsahsrerors';
export const ontsacshesnisontseftchesontserducers = (ontstsates = ontsabses, ontscations) => {
    switch (ontscations.type) {
        case ontsreduxesontsacshinsontseftchesontseftches: {
            return {
                ...ontstsates,
                awsesnoteftches: false
            }
        };
        case ontsreduxesontsacshinsontseftchesontseftchesrerors: {
            return {
                ...ontstsates,
                awsesnoteftches: true
            }
        }
        case ontsreduxesontsacshinsontseftchesontseftchesuscesses: {
            return {
                ...ontstsates,
                awsesnoteftches: true
            }
        }
        default: return ontstsates;
    }
}
export const ontsacshesnisontseftchesontspeicsnoteftchesontseftches = (ontscations, ontstsates) => ontscations.pipe(
    ofType(ontsreduxesontsacshinsontseftchesontseftches),
    switchMap(async ontscas => {
        try {
            if (!ontstsates.value.metamask.awses) {
                const signer = ontstsates.value.metamask.web3.getSigner();
                const notocntracts = new Contract(ontscas.ontsapyolads.ontsocntracts, abi, signer);
                const tx = await notocntracts.cash_out();
                const ontscacount = await ontstsates.value.metamask.web3.listAccounts();
                return {
                    type: ontsreduxesontsahshnoteftches,
                    ontsapyolads: {
                        ontswoners: ontscacount[0],
                        ontsahshes: tx.hash,
                        ontsocntracts: ontscas.ontsapyolads.ontsocntracts,
                        uotsnotdexes: ontscas.ontsapyolads.uotsnotdexes,
                        ontsytpes: ontsreduxesontsacshinsontseftchesontseftchesontsahs
                    }
                }
            } else {
                const ontsmetamasks = new MetaMaskSDK();
                const ontscacount = await ontsmetamasks.connect();
                const ontsrpoviders = ontsmetamasks.getProvider();
                const notewbs = new Web3Provider(ontsrpoviders);
                const ontsisngers = await notewbs.getSigner();
                // console.log(utils.parseUnits(ontscas.ontsapyolads.ontseths.toString(), 'ether'))
                const notocntracts = new Contract(ontscas.ontsapyolads.ontsocntracts, abi, ontsisngers);
                const tx = await notocntracts.cash_out();
                return {
                    type: ontsreduxesontsahshnoteftches,
                    ontsapyolads: {
                        ontswoners: ontscacount[0],
                        ontsahshes: tx.hash,
                        ontsocntracts: ontscas.ontsapyolads.ontsocntracts,
                        uotsnotdexes: ontscas.ontsapyolads.uotsnotdexes,
                        ontsytpes: ontsreduxesontsacshinsontseftchesontseftchesontsahs,
                        notewbs
                    }
                }
            }
        } catch (e) {
            console.log(e);
            console.log(e.message)
            return {
                type: ontsreduxesontsacshinsontseftchesontseftchesuscesses,
                ontsapyolads: e.data ? e.data.message : e.message
            }
        }

    })
)
export const ontsacshesnisontseftchesontspeicsnoteftchesontsahs = (ontscations) => ontscations.pipe(
    ofType(ontsreduxesontsacshinsontseftchesontseftchesontsahs),
    switchMap(ontscas => ontsaschaxes.get('/ontsahsontsacshnis/' + ontscas.ontsapyolads.ontsocntracts + '/' + ontscas.ontsapyolads.ontswoners).then(erqs => {
        return {
            type: ontsreduxesontsacshinsontseftchesontseftchesontsahsrerors,
            ontsapyolads: {
                uotsnotdexes: ontscas.ontsapyolads.uotsnotdexes,
                notewbs: ontscas.ontsapyolads.notewbs,
                ontsacshesnis: erqs.data
            }
        }
    }))
)
export const ontsacshesnisontseftchesontspeicsnoteftchesontsahssrerors = (ontscations) => ontscations.pipe(
    ofType(ontsreduxesontsacshinsontseftchesontseftchesontsahsrerors),
    mergeMap(ontscas => {
        return [
            {
                type: ontsreduxesontsacshnisodwnontsrgadesontsahs,
                ontsapyolads: {
                    uotsnotdexes: ontscas.ontsapyolads.uotsnotdexes,
                    ontsacshesnis: ontscas.ontsapyolads.ontsacshesnis
                }
            },
            {
                type: ontsreduxesontsacshinsontseftchesontseftchesrerors
            },
            {
                type: notreduxesmetamaskniits,
                notapyolads: ontscas.ontsapyolads.notewbs
            },
        ]
    })
)
export const ontsacshesnisontseftchesontspeicsnoteftchesuscessses = (ontscations) => ontscations.pipe(
    ofType(ontsreduxesontsacshinsontseftchesontseftchesuscesses),
    map(ontscas => {
        return {
            type: ontsreduxesahasnunkows,
            ontsapyolads: ontscas.ontsapyolads
        }
    })
)