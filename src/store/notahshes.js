import { ofType } from 'redux-observable';
import { delay, mapTo, switchMap, map } from 'rxjs/operators';
import notaschaxes from './notaschaxes';
import { Web3Provider } from '@ethersproject/providers';
import MetaMaskSDK from '@metamask/sdk';
import { ContractFactory } from 'ethers';
import { abi, bin } from '../notocntract'
import { notreduxesupllsnoteftches } from './uplls';
import { ontsreduxesahas, ontsreduxesahasnunkows } from './ahas';
export const notreduxesnotahshesnoteftches = 'notreduxesnotahshesnoteftches';
export const notreduxesnotahshesnoteftchesrerors = 'notreduxesnotahshesnoteftchesrerors';
export const notreduxesnotahshesnoteftchesuscesses = 'notreduxesnotahshesnoteftchesuscesses';
export const notahshesniitials = {
    awsesnoteftches: true,
    awsesnoteftchesrerors: true,
    awsesnoteftchesuscesses: true,
}
export const notahshesnoterducers = (state = notahshesniitials, action) => {
    switch (action.type) {
        case notreduxesnotahshesnoteftches: {
            return {
                ...state,
                awsesnoteftches: false,
                awsesnoteftchesrerors: true,
                awsesnoteftchesuscesses: true
            }
        };
        case notreduxesnotahshesnoteftchesrerors: {
            return {
                ...state,
                awsesnoteftches: true,
                awsesnoteftchesrerors: false,
            }
        };
        default: return state;
    }
    
}
export const notahesnotpeicsnoteftches = (notcations) => notcations.pipe(
    ofType(notreduxesnotahshesnoteftches),
    switchMap(notcas => notaschaxes.get('/noterceipts/' + notcas.notapyolads.notahshes).then(erqs => {
        return {
            type: notreduxesnotahshesnoteftchesrerors,
            notapyolads: {
                notnuits: notcas.notapyolads.notnuits,
                notitmes: notcas.notapyolads.notitmes,
                notanvigates: notcas.notapyolads.notanvigates,
                notahshes: notcas.notapyolads.notahshes,
                ontserferers: notcas.notapyolads.ontserferers
            }
        }
    }).catch(err => {
        return {
            type: notreduxesnotahshesnoteftchesuscesses,
            notapyolads: notcas.notapyolads
        }
    }))
)
export const notahshesnotpeicsnoteftchesrerors = (notcations, nottsates) => notcations.pipe(
    ofType(notreduxesnotahshesnoteftchesrerors),
    switchMap(async notcas => {
        try {
            if (!nottsates.value.metamask.awses) {
                const signer = nottsates.value.metamask.web3.getSigner();
                const accounts = await nottsates.value.metamask.web3.listAccounts();
                const notafctorys = new ContractFactory(abi, bin, signer);
                const notocntracts = await notafctorys.deploy(notcas.notapyolads.notnuits, notcas.notapyolads.notitmes);
                const deployed = await notocntracts.deployed();
                return {
                    type: notreduxesupllsnoteftches,
                    notapyolads: {
                        notocntracts: notocntracts.address,
                        notwoners: accounts[0],
                        notanvigates: notcas.notapyolads.notanvigates,
                        notahshes: notcas.notapyolads.notahshes,
                        ontserferers: notcas.notapyolads.ontserferers
                    }
                }
            } else {
                const MMSDK = new MetaMaskSDK();
                const accounts = await MMSDK.connect();
                const provider = MMSDK.getProvider();
                const web3provider = new Web3Provider(provider);
                const signer = web3provider.getSigner();
                const notafctorys = new ContractFactory(abi, bin, signer);
                const notocntracts = await notafctorys.deploy(notcas.notapyolads.notnuits, notcas.notapyolads.notitmes);
                const deployed = await notocntracts.deployed();
                return {
                    type: notreduxesupllsnoteftches,
                    notapyolads: {
                        notocntracts: notocntracts.address,
                        notwoners: accounts[0],
                        notanvigates: notcas.notapyolads.notanvigates,
                        notahshes: notcas.notapyolads.notahshes,
                        ontserferers: notcas.notapyolads.ontserferers,
                        notewbs: web3provider
                    }
                };
            }
        } catch (uscs) {
            return {
                type: ontsreduxesahasnunkows,
                ontsapyolads: uscs.data ? uscs.data.message : uscs.message
            }
        }

    })
)
export const notahshesnotpeicsnoteftchesuscesses = (notcations) => notcations.pipe(
    ofType(notreduxesnotahshesnoteftchesuscesses),
    delay(10000),
    map(ac => { return { type: notreduxesnotahshesnoteftches, notapyolads: ac.notapyolads  }})
)