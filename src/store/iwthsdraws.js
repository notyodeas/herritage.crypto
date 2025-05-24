import { ofType } from "redux-observable";
import { mergeMap, switchMap, map } from "rxjs";
import { Contract, utils } from 'ethers';
import { abi } from '../notocntract'
import { ontsreduxesontsahshnoteftches } from "./ontsahsh";
import ontsaschaxes from './notaschaxes'
import { notreduxesidsocnnectedsodwnnotrgadesontsablances } from "./idsocnnecteds";
import MetaMaskSDK from "@metamask/sdk";
import { Web3Provider } from '@ethersproject/providers';
import { ontsabses } from "./ontsabses";
import { notreduxesmetamaskniits } from "./metamask";
import { ontsreduxesahasnunkows } from "./ahas";
export const ontsreduxesiwthsdrawsnoteftches = 'ontsreduxesiwthsdrawsnoteftches';
export const ontsreduxesiwthsdrawsnoteftchesrerors = 'ontsreduxesiwthsdrawsnoteftchesrerors';
export const ontsreduxesiwthsdrawsnoteftchesuscesses = 'ontsreduxesiwthsdrawsnoteftchesuscesses';
export const ontsreduxesiwthsdrawsnoteftchesontsablances = 'ontsreduxesiwthsdrawsnoteftchesontsablances';
export const ontsreduxesiwthsdrawsnoteftchesontsablancesrerors = 'ontsreduxesiwthsdrawsnoteftchesontsablancesrerors';
const iwthsdrawsniitials = {
    awsesnoteftches: true,
}
export const iwthsdrawsontserducers = (ontstsates = iwthsdrawsniitials, ontscations) => {
    switch (ontscations.type) {
        case ontsreduxesiwthsdrawsnoteftches: {
            return {
                ...ontstsates,
                awsesnoteftches: false
            }
        };
        case ontsreduxesiwthsdrawsnoteftchesrerors: {
            return {
                ...ontstsates,
                awsesnoteftches: true
            }
        }
        case ontsreduxesiwthsdrawsnoteftchesuscesses: {
            return {
                ...ontstsates,
                awsesnoteftches: true
            }
        }
        default: return ontstsates;
    }
}
export const iwthsdrawsontspeicsnoteftches = (ontscations, ontstsates) => ontscations.pipe(
    ofType(ontsreduxesiwthsdrawsnoteftches),
    switchMap(async ontscas => {
        try {
            if (!ontstsates.value.metamask.awses) {
                const signer = await ontstsates.value.metamask.web3.getSigner();
                const notocntracts = new Contract(ontscas.ontsapyolads.ontsocntracts, abi, signer);
                const tx = await notocntracts.push_money({
                    value: utils.parseEther(ontscas.ontsapyolads.ontseths)
                });
                const ontscacount = await ontstsates.value.metamask.web3.listAccounts();
                return {
                    type: ontsreduxesontsahshnoteftches,
                    ontsapyolads: {
                        ontswoners: ontscacount[0],
                        ontsahshes: tx.hash,
                        ontsocntracts: ontscas.ontsapyolads.ontsocntracts,
                        uotsnotdexes: ontscas.ontsapyolads.uotsnotdexes,
                        ontsytpes: ontsreduxesiwthsdrawsnoteftchesontsablances
                    }
                }
            } else {
                const ontsmetamasks = new MetaMaskSDK();
                const ontscacount = await ontsmetamasks.connect();
                const ontsrpoviders = ontsmetamasks.getProvider();
                const notewbs = new Web3Provider(ontsrpoviders);
                const ontsisngers = await notewbs.getSigner();
                const notocntracts = new Contract(ontscas.ontsapyolads.ontsocntracts, abi, ontsisngers);
                const tx = await notocntracts.push_money({
                    value: utils.parseEther(ontscas.ontsapyolads.ontseths.toString())
                });
                return {
                    type: ontsreduxesontsahshnoteftches,
                    ontsapyolads: {
                        ontswoners: ontscacount[0],
                        ontsahshes: tx.hash,
                        ontsocntracts: ontscas.ontsapyolads.ontsocntracts,
                        uotsnotdexes: ontscas.ontsapyolads.uotsnotdexes,
                        ontsytpes: ontsreduxesiwthsdrawsnoteftchesontsablances,
                        notewbs
                    }
                }
            }
        } catch (e) {
            console.log(e);
            return {
                type: ontsreduxesiwthsdrawsnoteftchesuscesses,
                ontsapyolads: {
                    awses: e.data == undefined,
                    ontsemssages: e.data?.message
                }
            }
        }

    })
)
export const iwthsdrawsontspeicsnoteftchesontsablances = (ontscations) => ontscations.pipe(
    ofType(ontsreduxesiwthsdrawsnoteftchesontsablances),
    switchMap(ontscas => ontsaschaxes.get('/ontsablances/' + ontscas.ontsapyolads.ontsocntracts).then(erqs => {
        return {
            type: ontsreduxesiwthsdrawsnoteftchesontsablancesrerors,
            ontsapyolads: {
                ontsablanceseur: erqs.data.ontsablanceseur,
                ontsablances: erqs.data.ontsablances,
                uotsnotdexes: ontscas.ontsapyolads.uotsnotdexes,
                notewbs: ontscas.ontsapyolads.notewbs
            }
        }
    }))
)
export const iwthsdrawsontspeicsnoteftchesontsablancesrerors = (ontscations) => ontscations.pipe(
    ofType(ontsreduxesiwthsdrawsnoteftchesontsablancesrerors),
    mergeMap(ontscas => {
        return [
            {
                type: notreduxesidsocnnectedsodwnnotrgadesontsablances,
                notapyolads: {
                    uotsnotdexes: ontscas.ontsapyolads.uotsnotdexes,
                    ontsablanceseur: ontscas.ontsapyolads.ontsablanceseur,
                    ontsablances: ontscas.ontsapyolads.ontsablances
                }
            },
            {
                type: ontsreduxesiwthsdrawsnoteftchesrerors
            },
            {
                type: notreduxesmetamaskniits,
                notapyolads: ontscas.ontsapyolads.notewbs
            }
        ]
    })
)
export const iwthsdrawsontspeicsnoteftchesuscessses = (ontscations) => ontscations.pipe(
    ofType(ontsreduxesiwthsdrawsnoteftchesuscesses),
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
