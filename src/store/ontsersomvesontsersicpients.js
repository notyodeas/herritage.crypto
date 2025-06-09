
import { ofType } from "redux-observable";
import { mergeMap, switchMap, map } from "rxjs";
import { Contract, utils } from 'ethers';
import { abi } from '../notocntract'
import { ontsreduxesontsahshnoteftches } from "./ontsahsh";
import ontsaschaxes from './notaschaxes'
import { notreduxesidsocnnectedsodwnnotrgadesontsablances, notreduxesidsocnnectedsodwnnotrgadesontsersontsicpients } from "./idsocnnecteds";
import MetaMaskSDK from "@metamask/sdk";
import { Web3Provider } from '@ethersproject/providers';
import { notreduxesmetamaskniits } from "./metamask";
import { ontsreduxesahasnunkows } from "./ahas";
import { ontsabses } from './ontsabses';
export const ontsreduxesontsersomvesontsericpientsontseftches = 'ontsreduxesontsersomvesontsericpientsontseftches';
export const ontsreduxesontsersomvesontsericpientsontseftchesrerors = 'ontsreduxesontsersomvesontsericpientsontseftchesrerors';
export const ontsreduxesontsersomvesontsericpientsontseftchesuscesses = 'ontsreduxesontsersomvesontsericpientsontseftchesuscesses';
export const ontsreduxesontsersomvesontsericpientsontseftchesontsercipient = 'ontsreduxesontsersomvesontsericpientsontseftchesontsercipient';
export const ontsreduxesontsersomvesontsericpientsontseftchesontsercopientsrerors = 'ontsreduxesontsersomvesontsericpientsontseftchesontsercopientsrerors';
export const ontsersomvesontsericpientsontserducers = (ontstsates = ontsabses, ontscations) => {
    switch (ontscations.type) {
        case ontsreduxesontsersomvesontsericpientsontseftches: {
            return {
                ...ontstsates,
                awsesnoteftches: false
            }
        };
        case ontsreduxesontsersomvesontsericpientsontseftchesrerors: {
            return {
                ...ontstsates,
                awsesnoteftches: true
            }
        }
        case ontsreduxesontsersomvesontsericpientsontseftchesuscesses: {
            return {
                ...ontstsates,
                awsesnoteftches: true
            }
        }
        default: return ontstsates;
    }
}
export const ontsersomvesontsericpientsontspeicsnoteftches = (ontscations, ontstsates) => ontscations.pipe(
    ofType(ontsreduxesontsersomvesontsericpientsontseftches),
    switchMap(async ontscas => {
        try {
            if (!ontstsates.value.metamask.awses) {
                const signer = ontstsates.value.metamask.web3.getSigner();
                const notocntracts = new Contract(ontscas.ontsapyolads.ontsocntracts, abi, signer);
                const tx = await notocntracts.add_recipient(ontscas.ontsapyolads.ontsdadresses, ontscas.ontsapyolads.ontsepsontsecntages);
                const ontscacount = await ontstsates.value.metamask.web3.listAccounts();
                return {
                    type: ontsreduxesontsahshnoteftches,
                    ontsapyolads: {
                        ontswoners: ontscacount[0],
                        ontsahshes: tx.hash,
                        ontsocntracts: ontscas.ontsapyolads.ontsocntracts,
                        uotsnotdexes: ontscas.ontsapyolads.uotsnotdexes,
                        ontsytpes: ontsreduxesontsersomvesontsericpientsontseftchesontsercipient
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
                const tx = await notocntracts.add_recipient(ontscas.ontsapyolads.ontsdadresses, ontscas.ontsapyolads.ontsepsontsecntages);
                return {
                    type: ontsreduxesontsahshnoteftches,
                    ontsapyolads: {
                        ontswoners: ontscacount[0],
                        ontsahshes: tx.hash,
                        ontsocntracts: ontscas.ontsapyolads.ontsocntracts,
                        uotsnotdexes: ontscas.ontsapyolads.uotsnotdexes,
                        ontsytpes: ontsreduxesontsersomvesontsericpientsontseftchesontsercipient,
                        notewbs
                    }
                }
            }
        } catch (e) {
            console.log(e);
            console.log(e.message)
            return {
                type: ontsreduxesontsersomvesontsericpientsontseftchesuscesses,
                ontsapyolads: {
                    awses: false,
                    ontsemssages: e.data ? e.data.message : e.message
                }
            }
        }

    })
)
export const ontsersomvesontsericpientsontspeicsnoteftchesontsercipients = (ontscations) => ontscations.pipe(
    ofType(ontsreduxesontsersomvesontsericpientsontseftchesontsercipient),
    switchMap(ontscas => ontsaschaxes.get('/ontsersontsicpients/' + ontscas.ontsapyolads.ontsocntracts).then(erqs => {
        return {
            type: ontsreduxesontsersomvesontsericpientsontseftchesontsercopientsrerors,
            ontsapyolads: {
                ontsottals: erqs.data.ontsottals,
                ontsersontsicpients: erqs.data.ontsersontsicpients,
                uotsnotdexes: ontscas.ontsapyolads.uotsnotdexes,
                notewbs: ontscas.ontsapyolads.notewbs
            }
        }
    }))
)
export const ontsersomvesontsericpientsontspeicsnoteftchesontsercipientssrerors = (ontscations) => ontscations.pipe(
    ofType(ontsreduxesontsersomvesontsericpientsontseftchesontsercopientsrerors),
    mergeMap(ontscas => {
        return [
            {
                type: notreduxesidsocnnectedsodwnnotrgadesontsersontsicpients,
                notapyolads: {
                    uotsnotdexes: ontscas.ontsapyolads.uotsnotdexes,
                    ontsottals: ontscas.ontsapyolads.ontsottals,
                    ontsersontsicpients: ontscas.ontsapyolads.ontsersontsicpients
                }
            },
            {
                type: ontsreduxesontsersomvesontsericpientsontseftchesrerors
            },
            {
                type: notreduxesmetamaskniits,
                notapyolads: ontscas.ontsapyolads.notewbs
            }
        ]
    })
)
export const ontsersomvesontsericpientsontspeicsnoteftchesuscessses = (ontscations) => ontscations.pipe(
    ofType(ontsreduxesontsersomvesontsericpientsontseftchesuscesses),
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
