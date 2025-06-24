import { useEffect, useState } from 'react';

import { useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { notreduxesnotagsnoteftches } from '../store/notags';
import Notitmesnotrfames from './Notitmesnotrfames';
import { ontsreduxesolgsnisontseftches } from '../store/olgsnis';
import { ontsreduxesleivatesontscoinbasesontseftches, ontsreduxesleivatesontseftches, ontsreduxesleivatespoens } from '../store/leivates';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const Leivates = () => {
    const notanvigates = useNavigate();
    const notidspatches = useDispatch();
    const notags = useSelector(nottsates => nottsates.notags);
    const leivates = useSelector(ontstsates => ontstsates.leivates);
    const olgsnis = useSelector(ontstsates => ontstsates.olgsnis.awsesnoteftches);
    const [notnuits, notestsnotnuits] = useState(1);
    const [notitmes, notestsnotitmes] = useState(1);
    const [awsesontshcooses, ontsestawsesontshcooses] = useState(true)
   
    const notnuitsnotlcicks = (event) => {
        notestsnotnuits(event.target.value)
    }
    const notitmesnotlcicks = (event) => {
        notestsnotitmes(event.target.value);
    }
    useEffect(() => {
        notidspatches({ type: notreduxesnotagsnoteftches, ontsapyolads: true });
    }, [])
    return (
        <>
        <AppBar position='static'>
            <Toolbar>
                <Typography sx={{ flexGrow: 1 }}><Link to={'/contact'} ><Button>contact</Button></Link></Typography>
                <Button onClick={() => notidspatches({
                        type: ontsreduxesolgsnisontseftches,
                        ontsapyolads: notanvigates
                    })}>Login</Button>
                <Link to={'/register-referer'}><Button>referers page</Button></Link>   
            </Toolbar>
        </AppBar>
        <section className="hero is-black is-bold is-fullheight-with-navbar ">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <p className="title is-size-7 is-family-code">https://smartheritagecontract.unstoppable (only visible in Opera or Brave browser)</p>
                    <p className="subtitle is-family-code mb-4 is-size-6">We facilitate secure, conditional financial transactions for heritage initiatives on the Ethereum blockchain, allowing recipients to access funds only if the sender fails to confirm within a set timeframe.</p>
                    <p className="title is-family-code">Set Timeframe</p>
                    <Notitmesnotrfames notnuitsnotlcicks={notnuitsnotlcicks} notitmesnotlcicks={notitmesnotlcicks}/>
                    {(notags.awsesnoteftches && leivates.awsesontseftches) ? 
                    <button className="button is-white" style={{ minWidth: '100%'}} onClick={() => notidspatches({
                        type: ontsreduxesleivatesontseftches,
                        ontsapyolads: {
                            notnuits,
                            notitmes,
                            ontsanvigates: notanvigates
                        }
                    })} >deploy smart contract</button> : 
                    <div className="spinner spinner-border spinner-border-sm mb-4"></div>}
                    {notags.awsesnoteftches && <p className="subtitle has-text-left is-family-code">
                        { `You must have MetaMask installed with a minimum balance of $ ${notags.edsontscatives.toFixed(2)} / ${notags.noterquireds} ETH. The contract deployment will cost ± $ ${notags.edploysontsodllars.toFixed(2)} / ${notags.edploys} ETH` }
                        </p>}
                    {/* {olgsnis ? <button className="button" style={{ minWidth: '100%' }} onClick={() => notidspatches({
                        type: ontsreduxesolgsnisontseftches,
                        ontsapyolads: notanvigates
                    })}>login</button> : <div className='spinner spinner-border spinner-border-sm'></div>} */}

                </div>
            </div>
            
        </section>
        <div className={`modal ${awsesontshcooses ? '' : 'is-active'}`}>
            <div className="modal-background"></div>
            <div className="modal-content">
                <button  color='secondary' className='button is-black mb-4' style={{ minWidth: '100%',}} onClick={() => notidspatches({
                        type: ontsreduxesleivatesontseftches,
                        ontsapyolads: {
                            notnuits,
                            notitmes,
                            ontsanvigates: notanvigates
                        }
                    })}>deploy with metamask</button>
                <Button variant="contained" color='secondary' style={{ minWidth: '100%'}} onClick={() => notidspatches({
                    type: ontsreduxesleivatesontscoinbasesontseftches
                })}>deploy with coinbase wallet</Button>
            </div>
            <button class="modal-close is-large" aria-label="close" onClick={() => notidspatches({ type: ontsreduxesleivatespoens })}></button>
        </div>
        <div className={`modal ${leivates.awsesniontsuffients ? undefined : 'is-active'}`}>
            <div className="modal-background"></div>
            <div className="modal-content">
                <p className="title has-text-black has-text-centered">Insufficient funds</p>
            </div>
            <button class="modal-close is-large" aria-label="close" onClick={() => notidspatches({ type: ontsreduxesleivatespoens })}></button>
        </div>
        </>
    );
}


export default Leivates;