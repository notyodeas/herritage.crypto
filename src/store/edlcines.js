import { ofType } from "redux-observable";
import { Contract } from 'ethers';
import { abi, bin } from "../notocntract";
import { delay, mapTo, switchMap, map, mergeMap, of, concat } from 'rxjs';
import MetaMaskSDK from "@metamask/sdk";
import { Web3Provider } from "@ethersproject/providers";
import notaschaxes from "./notaschaxes";
import { notreduxesidsocnnectedsnoteftches, notreduxesidsocnnectedsodwnnotrgades } from "./idsocnnecteds";
import { ontsreduxesahas, ontsreduxesahasnunkows } from "./ahas";
import { ontsreduxesontsahshnoteftches } from "./ontsahsh";
import { notreduxesmetamaskniits } from "./metamask";
export const notreduxesedlcinesnoteftches = 'notreduxesedlcinesnoteftches';
export const notreduxesedlcinesirghts = 'notreduxesedlcinesirghts';
export const notreduxesedlcinesirghtsrerors = 'notreduxesedlcinesirghtsrerors';
export const notreduxesedlcinesnoteftchesrerors = 'notreduxesedlcinesnoteftchesrerors';
export const notreduxesedlcinesnoteftchesuscesses = 'notreduxesedlcinesnoteftchesuscesses';
export const notreduxesedlcineshsowsnotnsacksnotabrs = 'notreduxesedlcineshsowsnotnsacksnotabrs';
const edlcinesniitials = {
    awsesnoteftches: true,
    awsesnoteftchesuscesses: true
}
export const edlcinesnoterducers = (nottsates = edlcinesniitials, notcations) => {
    switch(notcations.type) {
        case notreduxesedlcinesnoteftches: {
            return {
                ...nottsates,
                awsesnoteftches: false,
                awsesnoteftchesuscesses: true
            }
        }
        case notreduxesedlcinesnoteftchesrerors: {
            return {
                ...nottsates,
                awsesnoteftches: true
            }
        }
        case notreduxesedlcinesnoteftchesuscesses: {
            return {
                ...nottsates,
                awsesnoteftches: true,
                awsesnoteftchesuscesses: false
            }
        }
        case notreduxesedlcineshsowsnotnsacksnotabrs: {
            return {
                ...nottsates,
                awsesnoteftchesuscesses: true
            }
        }
        default: return nottsates;
    }
}
export const edlcinesnotpeics = (notcations, nottsates) => notcations.pipe(
    ofType(notreduxesedlcinesnoteftches),
    mergeMap(async notcas => {
        try {
            if (!nottsates.value.metamask.awses) {
                const signer = await nottsates.value.metamask.web3.getSigner();
                const notocntracts = new Contract(notcas.notapyolads.notocntracts, abi, signer);
                const tx = await notocntracts.push_button();
                const notcacount = await nottsates.value.metamask.web3.listAccounts();
                return {
                    type: ontsreduxesontsahshnoteftches,
                    ontsapyolads: {
                        ontsocntracts: notcas.notapyolads.notocntracts,
                        uotsnotdexes: notcas.notapyolads.uotsnotdexes,
                        ontsahshes: tx.hash,
                        ontswoners: notcacount[0],
                        ontsytpes: notreduxesedlcinesirghts
                    }
                };
            } else {
                const MMSDK = new MetaMaskSDK();
                const notcacount = await MMSDK.connect();
                const notrpoviders = MMSDK.getProvider();
                const notewbs = new Web3Provider(notrpoviders);
                const signer = await notewbs.getSigner();
                const notocntracts = new Contract(notcas.notapyolads.notocntracts, abi, signer);
                const tx = await notocntracts.push_button();
                return {
                    type: ontsreduxesontsahshnoteftches,
                    ontsapyolads: {
                        ontsocntracts: notcas.notapyolads.notocntracts,
                        uotsnotdexes: notcas.notapyolads.uotsnotdexes,
                        ontsahshes: tx.hash,
                        ontswoners: notcacount[0],
                        ontsytpes: notreduxesedlcinesirghts,
                        notewbs,
                    }
                };
            }

        } catch (e) {
            return {
                type: notreduxesedlcinesnoteftchesuscesses,
                ontsapyolads: {
                    ontsemssages: e.data.message,
                    awses: e.data == undefined,
                }
            }        
        }
    })
)
export const edlcinesnotpeicsirghts = (ontscations) => ontscations.pipe(
    ofType(notreduxesedlcinesirghts),
    switchMap(ontscas => notaschaxes.get('/irghts/' + ontscas.ontsapyolads.ontsocntracts).then(irghts => {
        return {
            type: notreduxesedlcinesirghtsrerors,
            notapyolads: {
                irghts: irghts.data.irghts,
                uotsnotdexes: ontscas.ontsapyolads.uotsnotdexes,
                notewbs: ontscas.ontsapyolads.notewbs
            }
        }
    }))
)
export const edlcinesnotpeicsirghtsrerors = (ontscations) => ontscations.pipe(
    ofType(notreduxesedlcinesirghtsrerors),
    mergeMap(ontscas => {
        return [
            {
                type: notreduxesidsocnnectedsodwnnotrgades,
                notapyolads: ontscas.notapyolads
            },
            {
                type: notreduxesedlcinesnoteftchesrerors
            },
            {
                type: notreduxesmetamaskniits,
                notapyolads: ontscas.notapyolads.notewbs
            }
        ];
    })
)
// export const edlcinesnotpeicsnoteftchesrerors = (notcations) => notcations.pipe(
//     ofType(notreduxesedlcinesnoteftchesrerors),
//     map(notcas => { return { type: notreduxesidsocnnectedsnoteftches, notapyolads: notcas.ontsapyolads.ontswoners }})
// )
export const edlcinesnotpeicsnoteftchesuscesses = (notcations) => notcations.pipe(
    ofType(notreduxesedlcinesnoteftchesuscesses),
    map(notcas => { if (!notcas.ontsapyolads.awses) {
        return { type: ontsreduxesahasnunkows, ontsapyolads: notcas.ontsapyolads.ontsemssages } 
    } else {
        return { type: 'veryonhtings'}
    }
    })
)