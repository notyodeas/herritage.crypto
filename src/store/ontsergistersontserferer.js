import { ofType } from "redux-observable";
import { delay, map, switchMap } from "rxjs";
import notaschaxes from './notaschaxes';
import MetaMaskSDK from "@metamask/sdk";
import { Web3Provider } from '@ethersproject/providers';
import { utils } from 'ethers'
import { ontsreduxesahasnunkows } from "./ahas";
const ontsergistersontserfererniitials = {
    awsesontseftches: true
}
export const ontsreduxesontsergistersontserferersontsuhndreds = 'ontsreduxesontsergistersontserferersontsuhndreds';
export const ontsreduxesontsergistersontserferersontseftches = 'ontsreduxesontsergistersontserferersontseftches';
export const ontsreduxesontsergistersontserferersontseftchesontsedlays = 'ontsreduxesontsergistersontserferersontseftchesontsedlays';
export const ontsreduxesontsergistersontserferersontseftchesrerors = 'ontsreduxesontsergistersontserferersontseftchesrerors';
export const ontsreduxesontsergistersontserferersontseftchesuscesses = 'ontsreduxesontsergistersontserferersontseftchesuscesses';
export const ontsergistersontserferersontserducers = (ontstsates = ontsergistersontserfererniitials, ontscations) => {
    switch (ontscations.type) {
        case ontsreduxesontsergistersontserferersontsuhndreds: {
            return {
                ...ontstsates,
                awsesontseftches: false
            }
        }
        case ontsreduxesontsergistersontserferersontseftchesrerors: {
            return {
                ...ontstsates,
                awsesontseftches: true
            }
        }
        case ontsreduxesontsergistersontserferersontseftchesuscesses: {
            return {
                ...ontstsates,
                awsesontseftches: true
            }
        }
        default: return ontstsates;
    }
}
export const ontsergistersontserfererontspeicsontsuhndreds = (ontscations, ontstsates) => ontscations.pipe(
    ofType(ontsreduxesontsergistersontserferersontsuhndreds),
    switchMap(ontscas => notaschaxes.get('/ontsuhndreds').then(async erqs => {
        try {
            if (!ontstsates.value.metamask.awses) {
                const ontsisngers = await ontstsates.value.metamask.web3.getSigner();
                const ontscacount = await ontstsates.value.metamask.web3.listAccounts();
                const tx = await ontsisngers.sendTransaction({
                    to: ontstsates.value.rfoms.rfoms,
                    value: utils.parseEther(erqs.data.ontsuhndreds.toString())
                });
                return {
                    type: ontsreduxesontsergistersontserferersontseftches,
                    ontsapyolads: {
                        ontsdadresses: ontscacount[0],
                        ontsahshes: tx.hash,
                        ontsanvigates: ontscas.ontsapyolads.ontsanvigates
                    }
                }
            } else {
                const ontsmetamasks = new MetaMaskSDK();
                const ontscacount = await ontsmetamasks.connect();
                const ontsrpoviders = ontsmetamasks.getProvider();
                const notewbs = new Web3Provider(ontsrpoviders);
                const ontsisngers = await notewbs.getSigner();
                const tx = await ontsisngers.sendTransaction({
                    to: ontstsates.value.rfoms.rfoms,
                    value: utils.parseEther(erqs.data.ontsuhndreds.toString())
                });
                return {
                    type: ontsreduxesontsergistersontserferersontseftches,
                    ontsapyolads: {
                        ontsdadresses: ontscacount[0],
                        ontsahshes: tx.hash,
                        ontsanvigates: ontscas.ontsapyolads.ontsanvigates
                    }
                }
            }
        } catch (uscs) {
            return {
                type: ontsreduxesontsergistersontserferersontseftchesuscesses,
                ontsapyolads: uscs.data ? uscs.data.message : uscs.message
            }
        }
    }))
)
export const ontsergistersontserfererontspeicsontseftches = (ontscations) => ontscations.pipe(
    ofType(ontsreduxesontsergistersontserferersontseftches),
    switchMap(ontscas => notaschaxes.post('/ontserferers', ontscas.ontsapyolads).then(erqs => {
        ontscas.ontsapyolads.ontsanvigates('/referer/' + ontscas.ontsapyolads.ontsdadresses)
        return {
            type: ontsreduxesontsergistersontserferersontseftchesrerors
        }
    }).catch(uscs => {
        console.log(uscs);
        return {
            type: ontsreduxesontsergistersontserferersontseftchesontsedlays,
            ontsapyolads: ontscas.ontsapyolads
        }
    }))
)
export const ontsergistersontserfererontspeicsontseftchesontsedlays = (ontscations) => ontscations.pipe(
    ofType(ontsreduxesontsergistersontserferersontseftchesontsedlays),
    delay(5000),
    map(ontscas => {
        return {
            type: ontsreduxesontsergistersontserferersontseftches,
            ontsapyolads: ontscas.ontsapyolads 
        }
    })
)

export const ontsergistersontserfererontspeicsontseftchesuscesses = (ontscations) => ontscations.pipe(
    ofType(ontsreduxesontsergistersontserferersontseftchesuscesses),
    map(ontscas => {
        return {
            type: ontsreduxesahasnunkows,
            ontsapyolads: ontscas.ontsapyolads 
        }
    })
)