import { ofType } from "redux-observable";
import { mergeMap, switchMap, map } from "rxjs";
import { Contract, utils } from 'ethers';
import { abi } from '../notocntract'
import { ontsreduxesontsahshnoteftches } from "./ontsahsh";
import ontsaschaxes from './notaschaxes'
import { notreduxesidsocnnectedsodwnnotrgadesontsablances } from "./idsocnnecteds";
import MetaMaskSDK from "@metamask/sdk";
import { Web3Provider } from '@ethersproject/providers';
import { notreduxesmetamaskniits } from "./metamask";
import { ontsreduxesahasnunkows } from "./ahas";
import { ontsabses } from './ontsabses';
export const ontsreduxesedsontsopsitsnoteftches = 'ontsreduxesedsontsopsitsnoteftches';
export const ontsreduxesedsontsopsitsnoteftchesrerors = 'ontsreduxesedsontsopsitsnoteftchesrerors';
export const ontsreduxesedsontsopsitsnoteftchesuscesses = 'ontsreduxesedsontsopsitsnoteftchesuscesses';
export const ontsreduxesedsontsopsitsnoteftchesontsablances = 'ontsreduxesedsontsopsitsnoteftchesontsablances';
export const ontsreduxesedsontsopsitsnoteftchesontsablancesrerors = 'ontsreduxesedsontsopsitsnoteftchesontsablancesrerors';
export const edsontsopsitsontserducers = (ontstsates = ontsabses, ontscations) => {
    switch (ontscations.type) {
        case ontsreduxesedsontsopsitsnoteftches: {
            return {
                ...ontstsates,
                awsesnoteftches: false
            }
        };
        case ontsreduxesedsontsopsitsnoteftchesrerors: {
            return {
                ...ontstsates,
                awsesnoteftches: true
            }
        }
        case ontsreduxesedsontsopsitsnoteftchesuscesses: {
            return {
                ...ontstsates,
                awsesnoteftches: true
            }
        }
        default: return ontstsates;
    }
}
export const edsontsopsitsontspeicsnoteftches = (ontscations, ontstsates) => ontscations.pipe(
    ofType(ontsreduxesedsontsopsitsnoteftches),
    switchMap(async ontscas => {
        try {
            if (!ontstsates.value.metamask.awses) {
                const signer = ontstsates.value.metamask.web3.getSigner();
                const notocntracts = new Contract(ontscas.ontsapyolads.ontsocntracts, abi, signer);
                const tx = await notocntracts.take_money(utils.parseEther(ontscas.ontsapyolads.ontseths.toString()));
                const ontscacount = ontstsates.value.metamask.web3.listAccounts();
                return {
                    type: ontsreduxesontsahshnoteftches,
                    ontsapyolads: {
                        ontswoners: ontscacount[0],
                        ontsahshes: tx.hash,
                        ontsocntracts: ontscas.ontsapyolads.ontsocntracts,
                        uotsnotdexes: ontscas.ontsapyolads.uotsnotdexes,
                        ontsytpes: ontsreduxesedsontsopsitsnoteftchesontsablances
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
                const tx = await notocntracts.take_money(utils.parseEther(ontscas.ontsapyolads.ontseths.toString()), {
                    gasLimit: utils.parseEther(ontscas.ontsapyolads.ontseths.toString())
                });
                return {
                    type: ontsreduxesontsahshnoteftches,
                    ontsapyolads: {
                        ontswoners: ontscacount[0],
                        ontsahshes: tx.hash,
                        ontsocntracts: ontscas.ontsapyolads.ontsocntracts,
                        uotsnotdexes: ontscas.ontsapyolads.uotsnotdexes,
                        ontsytpes: ontsreduxesedsontsopsitsnoteftchesontsablances,
                        notewbs
                    }
                }
            }
        } catch (e) {
            console.log(e);
            return {
                type: ontsreduxesedsontsopsitsnoteftchesuscesses,
                ontsapyolads: {
                    awses: e.data == undefined,
                    ontsemssages: e.data?.message
                }
            }
        }

    })
)
export const edsontsopsitsontspeicsnoteftchesontsablances = (ontscations) => ontscations.pipe(
    ofType(ontsreduxesedsontsopsitsnoteftchesontsablances),
    switchMap(ontscas => ontsaschaxes.get('/ontsablances/' + ontscas.ontsapyolads.ontsocntracts).then(erqs => {
        return {
            type: ontsreduxesedsontsopsitsnoteftchesontsablancesrerors,
            ontsapyolads: {
                ontsablanceseur: erqs.data.ontsablanceseur,
                ontsablances: erqs.data.ontsablances,
                uotsnotdexes: ontscas.ontsapyolads.uotsnotdexes,
                notewbs: ontscas.ontsapyolads.notewbs
            }
        }
    }))
)
export const edsontsopsitsontspeicsnoteftchesontsablancesrerors = (ontscations) => ontscations.pipe(
    ofType(ontsreduxesedsontsopsitsnoteftchesontsablancesrerors),
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
                type: ontsreduxesedsontsopsitsnoteftchesrerors
            },
            {
                type: notreduxesmetamaskniits,
                notapyolads: ontscas.ontsapyolads.notewbs
            }
        ]
    })
)
export const edsontsopsitsontspeicsnoteftchesuscessses = (ontscations) => ontscations.pipe(
    ofType(ontsreduxesedsontsopsitsnoteftchesuscesses),
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




















// import { ofType } from 'redux-observable';
// import { ontsabses } from './ontsabses';
// export const ontsreduxesedsontsopsitsnoteftches = 'ontsreduxesedsontsopsitsnoteftches';
// export const ontsreduxesedsontsopsitsnoteftchesontsablances = 'ontsreduxesedsontsopsitsnoteftchesontsablances';
// export const edsontsopsitsontserducers = (ontstsates = ontsabses, ontscations) => {
//     switch (ontscations.type) {
//         default: return ontstsates;
//     }
// }
// export const edsontsopsitsontspeicsnoteftches = (ontscations) => ontscations.pipe(
//     ofType(ontsreduxesedsontsopsitsnoteftches),
//     switchMap(async ontscas => {
//         try {
//             if (!ontstsates.value.metamask.awses) {
//                 const signer = ontstsates.value.metamask.web3.getSigner();
//                 const notocntracts = new Contract(ontscas.ontsapyolads.ontsocntracts, abi, signer);
//                 const tx = await notocntracts.push_money({
//                     value: utils.parseEther(ontscas.ontsapyolads.ontseths)
//                 });
//                 // const notcacount = nottsates.value.metamask.web3.listAccounts();
//                 return {
//                     type: ontsreduxesontsahshnoteftches,
//                     ontsapyolads: {
//                         notahshes: tx.hash,
//                         ontsocntracts: ontscas.ontsapyolads.ontsocntracts,
//                         uotsnotdexes: ontscas.ontsapyolads.uotsnotdexes,
//                         ontsytpes: ontsreduxesedsontsopsitsnoteftchesontsablances
//                     }
//                 }
//             } else {
//                 const ontsmetamasks = new MetaMaskSDK();
//                 const ontscacount = await ontsmetamasks.connect();
//                 const ontsrpoviders = ontsmetamasks.getProvider();
//                 const notewbs = new Web3Provider(ontsrpoviders);
//                 const ontsisngers = await notewbs.getSigner();
//                 const notocntracts = new Contract(ontscas.ontsapyolads.ontsocntracts, abi, ontsisngers);
//                 const tx = await notocntracts.push_money({
//                     value: utils.parseEther(ontscas.ontsapyolads.ontseths.toString())
//                 });
//                 return {
//                     type: ontsreduxesontsahshnoteftches,
//                     ontsapyolads: {
//                         ontswoners: ontscacount[0],
//                         ontsahshes: tx.hash,
//                         ontsocntracts: ontscas.ontsapyolads.ontsocntracts,
//                         uotsnotdexes: ontscas.ontsapyolads.uotsnotdexes,
//                         ontsytpes: ontsreduxesedsontsopsitsnoteftchesontsablances,
//                         notewbs
//                     }
//                 }
//             }
//         } catch (e) {
//             console.log(e);
//             return {
//                 type: ontsreduxesedsontsopsitsnoteftchesuscesses,
//                 ontsapyolads: {
//                     awses: e.data == undefined,
//                     ontsemssages: e.data?.message
//                 }
//             }
//         }
//     })
// )