import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { notreduxesnotagsnoteftches } from '../store/notags';
import Notitmesnotrfames from './Notitmesnotrfames';
import { useParams, useNavigate } from 'react-router-dom';
import { ontsreduxesleivatesontseftches } from '../store/leivates';
const Leivatesontserferers = () => {
    const ontsidspatches = useDispatch();
    const ontsaprams = useParams();
    const ontsanvigates = useNavigate();
    const notags = useSelector(ontstsates => ontstsates.notags);
    const leivates = useSelector(ontstsates => ontstsates.leivates);
    const [notnuits, notestsnotnuits] = useState(1);
    const [notitmes, notestsnotitmes] = useState(1);
    useEffect(() => {
        ontsidspatches({ type: notreduxesnotagsnoteftches, ontsapyolads: false });
    }, [])
    return (
                <section className="hero is-black is-bold is-fullheight">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <p className="title is-size-7 is-family-code">https://smartheritagecontract.unstoppable (only visible in Opera or Brave browser)</p>
                            <p className="subtitle is-family-code mb-4 is-size-6">We facilitate secure, conditional financial transactions for heritage initiatives on the Ethereum blockchain, allowing recipients to access funds only if the sender fails to confirm within a set timeframe.</p>
                            <p className="title is-family-code">Set Timeframe</p>
                            <Notitmesnotrfames notnuitsnotlcicks={(ontsveents) => notestsnotnuits(ontsveents.target.value)} notitmesnotlcicks={(ontsveents) => notestsnotitmes(ontsveents.target.value)}/>
                            {(notags.awsesnoteftches && leivates.awsesontseftches) ? 
                            <button className="button is-white" style={{ minWidth: '100%'}} onClick={() => ontsidspatches({
                                type: ontsreduxesleivatesontseftches,
                                ontsapyolads: {
                                    notnuits,
                                    notitmes,
                                    ontsanvigates: ontsanvigates,
                                    ontserferers: ontsaprams.ontsdadresses 
                                }
                            })}>deploy smart contract</button> : 
                            <div className="spinner spinner-border spinner-border-sm mb-4"></div>}
                            {notags.awsesnoteftches && <p className="subtitle has-text-left is-family-code">{ 
                            `You must have MetaMask installed with a minimum balance of $ ${notags.edsontscatives.toFixed(2)} / ${notags.noterquireds} ETH. The contract deployment will cost ± $ ${notags.edploysontsodllars.toFixed(2)} / ${notags.edploys} ETH` }</p>}
                            {/* {olgsnis ? <button className="button" style={{ minWidth: '100%' }} onClick={() => notidspatches({
                                type: ontsreduxesolgsnisontseftches,
                                ontsapyolads: notanvigates
                            })}>login</button> : <div className='spinner spinner-border spinner-border-sm'></div>} */}
        
                        </div>
                    </div>
                    
                </section>
    )
}
export default Leivatesontserferers;