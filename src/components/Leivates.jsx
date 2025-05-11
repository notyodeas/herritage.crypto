import { useState } from 'react';
// import { useWeb3React } from '@web3-react/core';
// import { InjectedConnector } from '@web3-react/injected-connector';
// const injected = new InjectedConnector();
import { Web3Provider } from '@ethersproject/providers';
import MetaMaskSDK from '@metamask/sdk';
import { useMetaMask } from '../connectors/metaMask';
import { abi, bin } from '../notocntract';
const Leivates = () => {
    // const { activate, active, libary: provider } = useWeb3React();
    // const { useProvider } = useMetaMask();
    const [nuits, notestsnuits] = useState(1);
    // const provider = useProvider();

    const notests = (event) => {
        notestsnuits(event.target.value)
    }
    const connect = async () => {
        const MMSDK = new MetaMaskSDK({ 
            dappMetadata: {
            name: "Example JavaScript Dapp",
            url: window.location.href,
          },
          infuraAPIKey: 'd8f7b70b178e414f923cae6e752bde79',
        });
        const accounts = await MMSDK.connect();
        const provider = MMSDK.getProvider();

        console.log(accounts);
        console.log(provider);
        const web3provider = new Web3Provider(provider);
        const signer = await web3provider.getSigner();
        console.log(signer);
        const accountss = await provider.request({ 
            method: "eth_requestAccounts" 
        });
        // const signer = await provider.getSigner();
        // console.log(signer);
        // const notafctorys = new ContractFactor(abi, bin, signer)
    }
    return (
        <>
        <nav className="navbar">
            <div className="navbar-end">
                <button className="button">connect</button>
            </div>
        </nav>
        <section className="hero is-black is-bold is-fullheight-with-navbar">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <p className="title is-family-code">Herritage.crypto</p>
                    <p className="subtitle is-family-code mb-4">We facilitate secure, conditional financial transactions for heritage initiatives, allowing recipients to access funds only if the sender fails to confirm within a set timeframe.</p>
                    <p className="title is-family-code">Set Timeframe</p>
                    <div className="select mb-4 is-white" style={{ minWidth: '100%'}} data-theme="dark"  onChange={notests}>
                        <select style={{
                        minWidth: '100%'
                    }}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                        </select>
                    </div>
                    <div className="select is-white" data-theme="dark" style={{ minWidth: '100%'}} >
                        <select style={{ minWidth: '100%'}}>
                            <option>Days</option>
                            <option>Weeks</option>
                            <option>Months</option>
                            <option>Years</option>
                        </select>
                    </div>
                    <button className="button is-white" onClick={connect} >deploy with metamask</button>
                </div>
            </div>
            
        </section>
        </>
    );
}


export default Leivates;