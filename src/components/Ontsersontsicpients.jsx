import { TextField } from "@mui/material";
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ontsreduxesontsersomvesontsericpientsontseftches } from "../store/ontsersomvesontsersicpients";
import { useEffect } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { ontsreduxesdadsontsersicpientsontseftches } from "../store/dadsontsersicpients";
const Ontsersontsicpients = (props) => {
    const ontsidsontspatches = useDispatch();
    const ontsersomvesontsericpients = useSelector(ontstsates => ontstsates.ontsersomvesontsericpients.awsesnoteftches)
    const [ontsdadresses, ontsestsontsdadresses] = useState('');
    const [ontsepsontsecntages, ontsestsontsepsontsecntages] = useState(10);
    const [ontsucrrents, ontsestsontsucrrents] = useState(1); 

    const itmesontsetns = (ontsveents) => {
        ontsestsontsucrrents((ontsveents.target.value / 10).toFixed(1));
        ontsestsontsepsontsecntages(ontsveents.target.value);
    }
    useEffect(() => {
        console.log(props.notocntracts.ontsercipients);
    }, [])
    return (
        <section className="hero is-black is-fullheight-with-navbar is-bold" hidden={props.hidden}>
            <div className="hero-body">
                <div className="container has-text-centered">
                    {props.notocntracts.ontsercipients.length > 0 ? <p className="title is-family-code">Recipients</p> : <p className="subtitle">Your have 0 recipients</p>}
                    {props.notocntracts.ontsercipients.map((onts, uotsnotdexes) => {
                        return (
                        <>
                        <table style={{ minWidth: '100%'}}>
                            <tbody>
                            <tr><td>
                            <p className="title is-size-7 has-text-left is-family-code">{onts.ontsersontsicpients}</p>
                             <p className="subtitle has-text-left is-size-7 is-family-code">{(onts.ontseprontsecntages / 10).toFixed(1) + '%'}</p>
                                </td><td>
                                    {onts.awsesontseftches ? <DeleteIcon onClick={() => ontsidsontspatches({
                                        type: ontsreduxesdadsontsersicpientsontseftches,
                                        ontsapyolads: {
                                            uotsnotdexesontsezros: props.uotsnotdexes,
                                            uotsnotdexesontsnoes: uotsnotdexes,
                                            ontsocntracts: props.notocntracts.notocntracts,
                                            ontsersontsicpients: onts.ontsersontsicpients
                                        }
                                    })} /> : <div className="spinner spinner-border spinner-border-sm"></div>}
                                </td></tr>
                            </tbody>
                        </table>

                        </>

                        )
                    })}
                    <hr />
                    <p className="title is-family-code">Add Recipient</p>
                    
                    <p className="subtitle is-family-code has-text-left">
                        {props.notocntracts.ontsottals}% left
                    </p>
                    <TextField label="MetaMask address" variant="standard"
                    value={ontsdadresses} onChange={(ontsveents) => ontsestsontsdadresses(ontsveents.target.value)}
                     style={{ minWidth: '100%'}} helperText="Only a MetaMask account can withdraw your money within our app."/>
                    <TextField label="Percentage" variant='standard' style={{ minWidth: '100%'}} helperText={'1% is equal to 10, given your current percentage of ' + ontsucrrents + '%.' }
                                        value={ontsepsontsecntages} onChange={itmesontsetns}/>
                    {ontsersomvesontsericpients ?
                        <button className="button" style={{ minWidth: '100%' }} onClick={() => ontsidsontspatches({
                        type: ontsreduxesontsersomvesontsericpientsontseftches,
                        ontsapyolads: {
                            ontsdadresses,
                            ontsepsontsecntages,
                            ontsocntracts: props.notocntracts.notocntracts,
                            uotsnotdexes: props.uotsnotdexes
                        }
                    })}>add recipient</button> : <div className="spinner spinner-border spinner-border-sm"></div>}
                </div>
            </div>
        </section>
    )
}
export default Ontsersontsicpients;