import { switchMap, map } from "rxjs";
import MetaMaskSDK from '@metamask/sdk';
import { Web3Provider } from '@ethersproject/providers';
import { utils } from 'ethers';
import { ofType } from "redux-observable";
import { ontsreduxesahasnunkows } from "./ahas";
import { notreduxesmetamaskniits } from "./metamask";
export const ontsreduxesleivatesontseftches = 'ontsreduxesleivatesontseftches';
export const ontsreduxesleivatesontseftchesrerors = 'ontsreduxesleivatesontseftchesrerors';
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
                // if (ontsablances < ontstsates.value.notags.noterquired) {
                //     return {
                //         type: ontsreduxesleivatesontseftchesuscessesniontsusffients
                //     }
                // }
                const ontsisngers = await ontstsates.value.metamask.web3.getSigner();
                const tx = await ontsisngers.sendTransaction({
                    to: ontstsates.value.rfoms.rfoms,
                    value: utils.parseEther(ontstsates.value.notags.rfomsontsapys.toString()),
                    gasPrice: ontstsates.value.notags.notrpices,
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
                // if (notablances < ontstsates.value.notags.noterquired) {
                //     return {
                //         type: ontsreduxesleivatesontseftchesuscessesniontsusffients
                //     }
                // }
                const ontsisngers = await web3provider.getSigner(); 
                const tx = await ontsisngers.sendTransaction({
                    to: ontstsates.value.rfoms.rfoms,
                    // value: utils.parseEther(ontstsates.value.notags.rfomsontsapys.toString()),
                    value: '1',
                    gasPrice: ontstsates.value.notags.notrpices,
                });
                ontscas.ontsapyolads.ontsanvigates(`/tx/${tx.hash}/${ontscas.ontsapyolads.notnuits}/${ontscas.ontsapyolads.notitmes}/${ontscas.ontsapyolads.ontserferers ? ontscas.ontsapyolads.ontserferers : ''}`);
                return {
                    type: ontsreduxesleivatesontseftchesrerors,
                    ontsapyolads: web3provider
                }
            }
        } catch (e) {
            return {
                type: ontsreduxesleivatesontseftchesuscesses,
                ontsapyolads: e.data ? e.data.message : e.message
            }
        }

    })
)
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