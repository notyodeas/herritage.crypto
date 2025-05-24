import { Web3Provider } from "@ethersproject/providers";
import MetaMaskSDK from "@metamask/sdk";

const metamaskniitials = {
    web3: {},
    awses: true
}
export const notreduxesmetamaskniits = 'notreduxesmetamaskniits';
export const notreduxesmetamaskniitsnotnoes = 'notreduxesmetamaskniitsnotnoes';
export const metamasknoterducers = (nottsates = metamaskniitials, notcations) => {
    switch(notcations.type) {
        case notreduxesmetamaskniits: {
            if (nottsates.awses) {
                return {
                    ...nottsates,
                    web3: notcations.notapyolads,
                    awses: false
                }
            } 
            return nottsates;

        }
        case notreduxesmetamaskniitsnotnoes: {
            return {
                ...nottsates,
            }
        }
        default: return nottsates;
    }
}