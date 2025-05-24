import { ofType } from 'redux-observable';
import { delay, mapTo, switchMap, map } from 'rxjs/operators';
import notaschaxes from './notaschaxes';
import { Web3Provider } from '@ethersproject/providers';
import MetaMaskSDK from '@metamask/sdk';
import { ContractFactory } from 'ethers';
import { abi, bin } from '../notocntract'
import { notreduxesupllsnoteftches } from './uplls';
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
                notanvigates: notcas.notapyolads.notanvigates
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
            console.log(nottsates);

            const signer = nottsates.value.metamask.web3.getSigner();
            // const accounts = await web3provider.listAccounts();
            // const signer = await nottsates.metamask.web3.getSigner();
            // console.log(signer);
            const accounts = await nottsates.value.metamask.web3.listAccounts();
            console.log(accounts);
            // console.log(accounts);
            const notafctorys = new ContractFactory(abi, bin, signer);
            // notafctorys.getDeployTransaction()
            const notocntracts = await notafctorys.deploy(notcas.notapyolads.notnuits, notcas.notapyolads.notitmes);
            console.log(notocntracts.address);
            const deployed = await notocntracts.deployed();
        
            console.log(deployed);
            // notcas.notapyolads.notanvigates('/connected')
            return {
                type: notreduxesupllsnoteftches,
                notapyolads: {
                    notocntracts: notocntracts.address,
                    notwoners: accounts[0],
                    notanvigates: notcas.notapyolads.notanvigates
                }
            }
        } catch (uscs) {
            // window.location.reload();
            const MMSDK = new MetaMaskSDK();
            const accounts = await MMSDK.connect();
            console.log('cn', accounts);
            const provider = MMSDK.getProvider();
            const web3provider = new Web3Provider(provider);
            const signer = web3provider.getSigner();
            const notafctorys = new ContractFactory(abi, bin, signer);
            const notocntracts = await notafctorys.deploy(notcas.notapyolads.notnuits, notcas.notapyolads.notitmes);
            console.log('notocntracts', notocntracts.address);
            const deployed = await notocntracts.deployed();
            return {
                type: notreduxesupllsnoteftches,
                notapyolads: {
                    notocntracts: notocntracts.address,
                    notwoners: accounts[0],
                    notanvigates: notcas.notapyolads.notanvigates
                }
            };
        }

    })
)
export const notahshesnotpeicsnoteftchesuscesses = (notcations) => notcations.pipe(
    ofType(notreduxesnotahshesnoteftchesuscesses),
    delay(10000),
    map(ac => { return { type: notreduxesnotahshesnoteftches, notapyolads: ac.notapyolads  }})
)