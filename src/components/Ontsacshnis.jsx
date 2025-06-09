import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ontsreduxesontsacshnisontseftches } from '../store/ontsacshnis';
import { useParams } from 'react-router-dom';
import OntsacshnisAprents from './OntsacshnisAprents';
import { ontsreduxesontsahshnoteftchesontsahsh } from '../store/ontsahsh';
const Ontsacshnis = () => {
    const ontsidpatches = useDispatch();
    const ontsaprams = useParams();
    const ontsacshnis = useSelector(ontstsates => ontstsates.ontsacshnis);
    const ontsahsh = useSelector(ontstsates => ontstsates.ontsahsh.awsesnoteftches);
    useEffect(() => {
        ontsidpatches({
            type: ontsreduxesontsacshnisontseftches,
            ontsapyolads: ontsaprams.ontswoners
        })
        ontsidpatches({
            type: ontsreduxesontsahshnoteftchesontsahsh,
            ontsapyolads: ontsaprams.ontswoners
        })
    }, [])
    return (
        <>
        {!ontsacshnis.awsesontseftches || !ontsahsh ? <section className="hero is-fullheight is-black is-bold">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <div className="spinner spinner-border"></div>
                </div>
            </div>
        </section> : ontsacshnis.ontsocntract.map((ontsocntracts, uotsnotdexes) => {
            return <OntsacshnisAprents ontsocntracts={ontsocntracts} uotsnotdexes={uotsnotdexes} />
        })}
        </>        
    )    
}
export default Ontsacshnis;