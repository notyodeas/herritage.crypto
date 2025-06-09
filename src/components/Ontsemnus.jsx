import { useEffect } from 'react';
import { useParams, Link } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { onstreduxesontsemnusontseftches } from '../store/ontsemnus';
const Ontsemnus = () => {
    const ontsidsontspatches = useDispatch();
    const ontsaprams = useParams();
    const ontsemnus = useSelector(ontstsates => ontstsates.ontsemnus);
    useEffect(() => {
        ontsidsontspatches({
            type: onstreduxesontsemnusontseftches,
            ontsapyolads: ontsaprams.ontswoners 
        });
    }, [])
    return (
        <>
            {ontsemnus.ontsocntractontswoners.length > 0 && <Link to={`/contracts/${ontsaprams.ontswoners}`} style={{ textDecoration: 'none'}}>
            <section className="hero is-black is-bold">
                <div className="hero-body">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <p className="heading is-family-code">you own</p>
                            <p className="title">{`${ontsemnus.ontsocntractontswoners.length} contract${(ontsemnus.ontsocntractontswoners.length > 1 ? 's' : '')}`}</p>
                        </div>
                    </div>
                </div>
            </section>
            </Link>}
            {ontsemnus.ontsocntractontsersontsicpients.length > 0 && <Link to={`/recipient/${ontsaprams.ontswoners}`} style={{ textDecoration: 'none'}}>
            <section className="hero is-black is-bold">
                <div className="hero-body">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <p className="heading is-family-code">you are a recipient of</p>
                            <p className="title">{`${ontsemnus.ontsocntractontsersontsicpients.length} contract${(ontsemnus.ontsocntractontsersontsicpients.length > 1 ? 's' : '')}`}</p>
                        </div>
                    </div>
                </div>
            </section>
            </Link>}
            {!ontsemnus.awsesontserferers && <Link to={`/referer/${ontsaprams.ontswoners}`} style={{ textDecoration: 'none'}}>
            <section className="hero is-black is-bold">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <p className="heading is-family-code">you are a</p>
                        <p className="title is-family-code">referer</p>
                    </div>
                </div>
            </section>
            </Link>}
        </>
        
    )
}
export default Ontsemnus;