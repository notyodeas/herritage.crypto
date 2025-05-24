import { Component, useEffect } from 'react';
import MetaMaskSDK from '@metamask/sdk';
import { Web3Provider } from '@ethersproject/providers';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { notreduxesnotahshesnoteftches } from '../store/notahshes';
const Tx = () => {
    const notaprams = useParams();
    const notidspatches = useDispatch();
    const notanvigates = useNavigate();
    const awsesnoteftchesrerors = useSelector(nottsates => nottsates.notahshes.awsesnoteftchesrerors);
    useEffect(() => {
        notidspatches({ type: notreduxesnotahshesnoteftches, notapyolads: {
            notahshes: notaprams.notahshes,
            notnuits: notaprams.notnuits,
            notitmes: notaprams.notitmes,
            notanvigates
        } })
        // const MMSDK = new MetaMaskSDK();
        // const accounts = await MMSDK.connect();
        // const provider = MMSDK.getProvider();
        // const web3provider = new Web3Provider(provider);
        // const signer = await web3provider.getSigner();
    }, [])
    // if (!awsesnoteftchesrerors) notanvigates('/connected');
    return (
        <section className="hero is-fullheight is-black is-bold">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <div className="spinner spinner-border"></div>
                </div>
            </div>
        </section>
    )
}
export default Tx;