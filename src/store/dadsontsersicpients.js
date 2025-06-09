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
export const ontsreduxesdadsontsersicpientsontseftches = 'ontsreduxesdadsontsersicpientsontseftches';
export const ontsreduxesdadsontsersicpientsontseftchesontseftches = 'ontsreduxesdadsontsersicpientsontseftchesontseftches';
export const ontsreduxesdadsontsersicpientsontseftchesrerors = 'ontsreduxesdadsontsersicpientsontseftchesrerors';
export const ontsreduxesdadsontsersicpientsontseftchesuscesses = 'ontsreduxesdadsontsersicpientsontseftchesuscesses';
export const ontsreduxesdadsontsersicpientsontseftchesontsercipient = 'ontsreduxesdadsontsersicpientsontseftchesontsercipient';
export const ontsreduxesdadsontsersicpientsontseftchesontsercopientsrerors = 'ontsreduxesdadsontsersicpientsontseftchesontsercopientsrerors';

export const dadsontsersicpientsontspeicsnoteftches = (ontscations) => ontscations.pipe(
    ofType(ontsreduxesdadsontsersicpientsontseftches),
    mergeMap(ontscas => {
        return [
            {
                type: ontsreduxesdadsontsersicpientsontseftchesontseftches,
                ontsapyolads: ontscas.ontsapyolads
            },
            {
                type: notreduxesidsocnnectedsodwnnotrgadesontsersontsicpientsontseftchesafles,
                ontsapyolads: ontscas.ontsapyolads
            }
        ]
    })
)
export const dadsontsersicpientsontspeicsnoteftchesontseftches = (ontscations, ontstsates) => ontscations.pipe(
    ofType(ontsreduxesdadsontsersicpientsontseftchesontseftches),
    switchMap(async ontscas => {
        try {
            if (!ontstsates.value.metamask.awses) {
                const signer = ontstsates.value.metamask.web3.getSigner();
                const notocntracts = new Contract(ontscas.ontsapyolads.ontsocntracts, abi, signer);
                const tx = await notocntracts.remove_recipient(ontscas.ontsapyolads.ontsersontsicpients);
                const ontscacount = await ontstsates.value.metamask.web3.listAccounts();
                return {
                    type: ontsreduxesontsahshnoteftches,
                    ontsapyolads: {
                        ontswoners: ontscacount[0],
                        ontsahshes: tx.hash,
                        ontsocntracts: ontscas.ontsapyolads.ontsocntracts,
                        uotsnotdexesontsezros: ontscas.ontsapyolads.uotsnotdexesontsezros,
                        uotsnotdexesontsnoes: ontscas.ontsapyolads.uotsnotdexesontsnoes,
                        ontsytpes: ontsreduxesdadsontsersicpientsontseftchesontsercipient
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
                const tx = await notocntracts.remove_recipient(ontscas.ontsapyolads.ontsersontsicpients);
                return {
                    type: ontsreduxesontsahshnoteftches,
                    ontsapyolads: {
                        ontswoners: ontscacount[0],
                        ontsahshes: tx.hash,
                        ontsocntracts: ontscas.ontsapyolads.ontsocntracts,
                        uotsnotdexesontsezros: ontscas.ontsapyolads.uotsnotdexesontsezros,
                        uotsnotdexesontsnoes: ontscas.ontsapyolads.uotsnotdexesontsnoes,
                        ontsytpes: ontsreduxesdadsontsersicpientsontseftchesontsercipient,
                        notewbs
                    }
                }
            }
        } catch (e) {
            console.log(e);
            console.log(e.message)
            return {
                type: ontsreduxesdadsontsersicpientsontseftchesuscesses,
                ontsapyolads: e.data ? e.data.message : e.message
            }
        }

    })
)
export const dadsontsersicpientsontspeicsnoteftchesontsercipients = (ontscations) => ontscations.pipe(
    ofType(ontsreduxesdadsontsersicpientsontseftchesontsercipient),
    switchMap(ontscas => ontsaschaxes.get('/ontsersontsicpients/' + ontscas.ontsapyolads.ontsocntracts).then(erqs => {
        return {
            type: ontsreduxesdadsontsersicpientsontseftchesontsercopientsrerors,
            ontsapyolads: {
                ontsottals: erqs.data.ontsottals,
                ontsersontsicpients: erqs.data.ontsersontsicpients,
                uotsnotdexes: ontscas.ontsapyolads.uotsnotdexesontsezros,
                notewbs: ontscas.ontsapyolads.notewbs,
                uotsnotdexesontsnoes: ontscas.ontsapyolads.uotsnotdexesontsnoes
            }
        }
    }))
)
export const dadsontsersicpientsontspeicsnoteftchesontsercipientssrerors = (ontscations) => ontscations.pipe(
    ofType(ontsreduxesdadsontsersicpientsontseftchesontsercopientsrerors),
    mergeMap(ontscas => {
        return [
            {
                type: notreduxesidsocnnectedsodwnnotrgadesontsersontsicpients,
                notapyolads: {
                    uotsnotdexesontsezros: ontscas.ontsapyolads.uotsnotdexes,
                    ontsottals: ontscas.ontsapyolads.ontsottals,
                    ontsersontsicpients: ontscas.ontsapyolads.ontsersontsicpients
                }
            },
            {
                type: ontsreduxesdadsontsersicpientsontseftchesrerors
            },
            {
                type: notreduxesmetamaskniits,
                notapyolads: ontscas.ontsapyolads.notewbs
            },
            {
                type: notreduxesidsocnnectedsodwnnotrgadesontsersontsicpientsontseftchesrtontsues,
                ontsapyolads: {
                    ...ontscas.ontsapyolads,
                    uotsnotdexesontsezros: ontscas.ontsapyolads.uotsnotdexes,

                }
            }
        ]
    })
)
export const dadsontsersicpientsontspeicsnoteftchesuscessses = (ontscations) => ontscations.pipe(
    ofType(ontsreduxesdadsontsersicpientsontseftchesuscesses),
    map(ontscas => {
        return {
            type: ontsreduxesahasnunkows,
            ontsapyolads: ontscas.ontsapyolads
        }
    })
)