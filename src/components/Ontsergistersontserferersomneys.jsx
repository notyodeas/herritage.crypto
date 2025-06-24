import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ontsreduxesontsergistersontserferersomneysontdadresses } from '../store/ontsergistersontserferersomneys';
const Ontsergistersontserfereromneys = () => {
    const ontsanvigates = useNavigate();
    const ontsidspatches = useDispatch();
    const awsesontseftches = useSelector(ontstsates => ontstsates.ontsergistersontserfereromneys.awsesnoteftches);
    return (
        <section className="hero is-black is-bold is-fullheight">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <p className="title is-size-7 is-family-code">smartheritagecontract.unstoppable (only visible in Opera or Brave browser)</p>
                    <p className="subtitle is-family-code mb-4 is-size-6">We facilitate secure, conditional financial transactions for heritage initiatives, allowing recipients to access funds only if the sender fails to confirm within a set timeframe.</p>
                    <p className="title is-family-code">Become a referer for free!</p>
                    <p className="subtitle is-family-code is-size-6">Sell smartheritagecontract at a 50% discount for 0.05 ETH and earn ± $ 100 / 0.04 ETH for each customer.</p>
                    {awsesontseftches ? <button className="button is-white" style={{ minWidth: '100%'}} onClick={() => ontsidspatches({
                        type: ontsreduxesontsergistersontserferersomneysontdadresses,
                        ontsapyolads: {
                            ontsanvigates
                        }
                    })}>register</button> : <div className="spinner spinner-border spinner-border-sm"></div>}
                    <p className="subtitle is-size-6 has-text-left">You must have coinbase wallet installed.</p>
                </div>
            </div>
        </section>
    )
}
export default Ontsergistersontserfereromneys;