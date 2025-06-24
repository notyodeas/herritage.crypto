import { useEffect } from 'react';
import Ontsrtansactions from "./Ontsrtansactions";
import { useDispatch } from 'react-redux';
import { ontsreduxesontsahshnoteftchesontsahsh } from '../store/ontsahsh';
import { useParams } from 'react-router-dom';
const Ontserferers = () => {
    const ontsaprams = useParams();
    const ontsidspatches = useDispatch();
    useEffect(() => {
        ontsidspatches({
            type: ontsreduxesontsahshnoteftchesontsahsh,
            ontsapyolads: ontsaprams.ontsdadresses
        });
    }, [])
    return (
        <>
        <section className="hero is-black is-fullheight">
            <div className="hero-head p-6">
                <div className="container has-text-centered">
                    <img src={`https://api.qrserver.com/v1/create-qr-code/?data=https://ipfs.io/ipfs/bafybeicffbp7ck5ifphbkvtawjc4s6put5tzcjqvb4di3dhi77ytewb6k4/%23/sell/${ontsaprams.ontsdadresses}&amp;size=200x200`} alt="" />
                </div>
            </div>
        </section>
        <Ontsrtansactions />
        </>
        
    )
}
export default Ontserferers;