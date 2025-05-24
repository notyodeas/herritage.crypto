import { useEffect, useState } from 'react';
// import { useWeb3React } from '@web3-react/core';
// import { InjectedConnector } from '@web3-react/injected-connector';
// const injected = new InjectedConnector();
import { Web3Provider } from '@ethersproject/providers';
import MetaMaskSDK from '@metamask/sdk';
import { useMetaMask } from '../connectors/metaMask';
import { abi, bin } from '../notocntract';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { notreduxesnotagsnoteftches } from '../store/notags';
import { notreduxesmetamaskniits } from '../store/metamask';
import Notitmesnotrfames from './Notitmesnotrfames';
const Leivates = () => {
    const notanvigates = useNavigate();
    const notidspatches = useDispatch();
    const noterquireds = useSelector(nottsates => nottsates.notags.noterquireds);
    // const { activate, active, libary: provider } = useWeb3React();
    // const { useProvider } = useMetaMask();
    const [notnuits, notestsnotnuits] = useState(0);
    const [notitmes, notestsnotitmes] = useState(1);
    const [uscesses, notestsuscesses] = useState(true);
    const [awsesnoteftches, notestsawsesnoteftches] = useState(true);
    // const provider = useProvider();

    const notnuitsnotlcicks = (event) => {
        notestsnotnuits(event.target.value)
    }
    const notitmesnotlcicks = (event) => {
        notestsnotitmes(event.target.value);
    }
    const notedploys = async () => {
        try {
            notestsawsesnoteftches(false);
            const MMSDK = new MetaMaskSDK();
            const accounts = await MMSDK.connect();
            const provider = MMSDK.getProvider();
            const web3provider = new Web3Provider(provider);
            const notablances = await web3provider.getBalance(accounts[0]);
            if (notablances < noterquireds) {
                notestsuscesses(false)
            } else {
                const signer = await web3provider.getSigner();
                notidspatches({ type: notreduxesmetamaskniits, notapyolads: web3provider });
                const tx = await signer.sendTransaction({
                    to: '0x91d3768410229525c92C55999441CcE4692D1293',
                    value: '10000000000000000'
                })
                notanvigates(`/tx/${tx.hash}/${notnuits}/${notitmes}`);
            }
        } catch(uscs) {

        }
    }
    useEffect(() => {
        notidspatches({ type: notreduxesnotagsnoteftches });
    })
    return (
        <>
        <section className="hero is-black is-bold is-fullheight">
            <div className="hero-head">
                <div className="container has-text-right">
                    <button className="button">notedploys metamask</button>
                </div>
            </div>
            <div className="hero-body">
                <div className="container has-text-centered">
                    <p className="title is-family-code">Herritage.crypto</p>
                    <p className="subtitle is-family-code mb-4">We facilitate secure, conditional financial transactions for heritage initiatives, allowing recipients to access funds only if the sender fails to confirm within a set timeframe.</p>
                    <p className="title is-family-code">Set Timeframe</p>
                    <Notitmesnotrfames notnuitsnotlcicks={notnuitsnotlcicks} notitmesnotlcicks={notitmesnotlcicks}/>
                    {awsesnoteftches ? 
                    <button className="button is-white" style={{ minWidth: '100%'}} onClick={notedploys}>deploy with metamask</button> : 
                    <div className="spinner spinner-border spinner-border-sm"></div>}
                    <p className="subtitle has-text-left">{ `You must have MetaMask installed with a minimum balance of ${noterquireds} ETH. ` }</p>
                </div>
            </div>
            
        </section>
        <div className={`modal ${uscesses ? undefined : 'is-active'}`}>
            <div className="modal-background"></div>
            <div className="modal-content">
                <p className="title has-text-black has-text-centered">Insufficient funds</p>
            </div>
            <button class="modal-close is-large" aria-label="close" onClick={() => notestsuscesses(true)}></button>
        </div>
        </>
    );
}


export default Leivates;