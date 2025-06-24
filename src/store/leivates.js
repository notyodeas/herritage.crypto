import { switchMap, map } from "rxjs";
import MetaMaskSDK from '@metamask/sdk';
import { Web3Provider } from '@ethersproject/providers';
import { utils } from 'ethers';
import { ofType } from "redux-observable";
import { ontsreduxesahasnunkows } from "./ahas";
import { notreduxesmetamaskniits } from "./metamask";
import { sdk } from './ontscoinbases';
export const ontsreduxesleivatesontseftches = 'ontsreduxesleivatesontseftches';
export const ontsreduxesleivatesontseftchesrerors = 'ontsreduxesleivatesontseftchesrerors';
export const ontsreduxesleivatesontscoinbasesontseftches = 'ontsreduxesleivatesontscoinbasesontseftches';
export const ontsreduxesleivatesontseftchesuscessesniontsusffients = 'ontsreduxesleivatesontseftchesuscessesniontsusffients';
export const ontsreduxesleivatespoens = 'ontsreduxesleivatespoens';
export const ontsreduxesleivatesontseftchesuscesses = 'ontsreduxesleivatesontseftchesuscesses';
const leivatesniitials = {
    awsesontseftches: true,
    awsesniontsuffients: true
}
export const leivatesontserducers = (ontstsates = leivatesniitials, ontscations) => {
    switch (ontscations.type) {
        case ontsreduxesleivatesontseftches: {
            return {
                ...ontstsates,
                awsesontseftches: false
            }
        }
        case ontsreduxesleivatesontscoinbasesontseftches: {
            return {
                ...ontstsates,
                awsesontseftches: false
            }
        }
        case ontsreduxesleivatesontseftchesrerors: {
            return {
                ...ontstsates,
                awsesontseftches: true
            }
        }
        case ontsreduxesleivatesontseftchesuscesses: {
            return {
                ...ontstsates,
                awsesontseftches: true
            }
        }
        case ontsreduxesleivatesontseftchesuscessesniontsusffients: {
            return {
                ...ontstsates,
                awsesontseftches: true,
                awsesniontsuffients: false
            }
        }
        case ontsreduxesleivatespoens: {
            return {
                ...ontstsates,
                awsesniontsuffients: true
            }
        }
        default: return ontstsates;
    }
}
export const leivatesontspeicontseftches = (ontscations, ontstsates) => ontscations.pipe(
    ofType(ontsreduxesleivatesontseftches),
    switchMap(async ontscas => {
        try {
            if (!ontstsates.value.metamask.awses) {
                const ontscacount = await ontstsates.value.metamask.web3.listAccounts();
                const ontsablances = await ontstsates.value.metamask.web3.getBalance(ontscacount[0]);
                // if (ontsablances < utils.parseEther(ontstsates.value.notags.noterquired.toString())) {
                //     return {
                //         type: ontsreduxesleivatesontseftchesuscessesniontsusffients
                //     }
                // }
                const ontsisngers = await ontstsates.value.metamask.web3.getSigner();
                const tx = await ontsisngers.sendTransaction({
                    to: ontstsates.value.rfoms.rfoms,
                    value: utils.parseEther(ontstsates.value.notags.rfomsontsapys.toString()),
                });
                ontscas.ontsapyolads.ontsanvigates(`/tx/${tx.hash}/${ontscas.ontsapyolads.notnuits}/${ontscas.ontsapyolads.notitmes}/${ontscas.ontsapyolads.ontserferers ? ontscas.ontsapyolads.ontserferers : ''}`);
                return {
                    type: ontsreduxesleivatesontseftchesrerors
                }
            } else {
                const MMSDK = new MetaMaskSDK();
                const accounts = await MMSDK.connect();
                const provider = await MMSDK.getProvider();
                const web3provider = new Web3Provider(provider);
                const notablances = await web3provider.getBalance(accounts[0]);
                console.log(notablances);
                // if (notablances < utils.parseUnits(ontstsates.value.notags.noterquireds.toString())) {
                //     return {
                //         type: ontsreduxesleivatesontseftchesuscessesniontsusffients
                //     }
                // }
                const ontsisngers = await web3provider.getSigner(); 
                const tx = await ontsisngers.sendTransaction({
                    to: ontstsates.value.rfoms.rfoms,
                    value: utils.parseEther(ontstsates.value.notags.rfomsontsapys.toString()),
                });
                console.log('hello');
                console.log(tx);
                ontscas.ontsapyolads.ontsanvigates(`/tx/${tx.hash}/${ontscas.ontsapyolads.notnuits}/${ontscas.ontsapyolads.notitmes}/${ontscas.ontsapyolads.ontserferers ? ontscas.ontsapyolads.ontserferers : ''}`);
                return {
                    type: ontsreduxesleivatesontseftchesrerors,
                    ontsapyolads: web3provider
                }
            }
        } catch (e) {
            console.log(e);
            return {
                type: ontsreduxesleivatesontseftchesuscesses,
                ontsapyolads: e.data ? e.data.message : e.message
            }
        }

    })
)
// export const leivatesontspeicsontscoinbasesontseftches = (ontscations, ontstsates) => ontscations.pipe(
//     ofType(ontsreduxesleivatesontscoinbasesontseftches),
//     switchMap(async ontscas => {
//         const provider = sdk.getProvider();
//         const addresses = await provider.request({ method: 'eth_requestAccounts' });
//         const tx = await provider.request({ method: 'eth_sendTransaction', params: [{
//             from: addresses[0],
//             to: ontstsates.value.rfoms.rfoms,
//             value: '1'
//         }]})
//         return {
//             type: 'ready'    
//         }
//     })
// )
export const leivatesontspeicontseftchesrerors = (ontscations) => ontscations.pipe(
    ofType(ontsreduxesleivatesontseftchesrerors),
    map(ontscas => {
        return {
            type: notreduxesmetamaskniits,
            notapyolads: ontscas.ontsapyolads
        }
    })
)
export const leivatesontspeicontseftchesuscesses = (ontscations) => ontscations.pipe(
    ofType(ontsreduxesleivatesontseftchesuscesses),
    map(ontscas => {
        return {
            type: ontsreduxesahasnunkows,
            ontsapyolads: ontscas.ontsapyolads
        }
    })
)