import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ontsreduxesontsergistersontserferersontsuhndreds } from '../store/ontsergistersontserferer';
import { ontsreduxesolginsontserferersontseftches } from '../store/olginsontserferers';
const Ontsergistersontserferer = () => {
    const ontsidpatches = useDispatch();
    const ontsanvigates = useNavigate();
    const awsesontseftchesontsergisters = useSelector(ontstsates => ontstsates.ontsergistersontserferers.awsesontseftches);
    const awsesontseftchesontsolgins = useSelector(ontstsates => ontstsates.olginsontserferers.awsesnoteftches)
    return (
        <>
                <AppBar position='static'>
                    <Toolbar>
                        <Link to={'/'}>
                        <IconButton >
                            <ArrowBackIcon />
                            </IconButton>
                        </Link>    
                        <Typography sx={{ flexGrow: 1 }}></Typography>
                    {awsesontseftchesontsolgins ? <Button  onClick={() => ontsidpatches({
                            type: ontsreduxesolginsontserferersontseftches,
                            ontsapyolads: { ontsanvigates }
                        })}>Login</Button> : <div className="spinner spinner-border spinner-border-sm"></div>}
                    </Toolbar>
                </AppBar>
            <section className="hero is-fullheight-with-navbar is-black is-bold">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <p className="title is-family-code">Become a referer</p>
                        <p className="subtitle is-family-code">Sell smartheritagecontract at a 50% discount for 0.5 ETH and earn ± $ 75 / 0.03 ETH for each customer. To ensure you're not only seeking the discount, a registration fee of ± $200 / 0.1 ETH is required.</p>
                        {awsesontseftchesontsergisters ? <button className="button" style={{ minWidth: '100%'}} onClick={() => ontsidpatches({
                            type: ontsreduxesontsergistersontserferersontsuhndreds,
                            ontsapyolads: {
                                ontsanvigates
                            }
                        })}>register</button> : <div className="spinner spinner-border spinner-border-sm"></div> }
                        <p className="subtitle is-size-6 has-text-left">You must have coinbase wallet installed</p>
                    </div>
                </div>
            </section>

        </>
    )
}
export default Ontsergistersontserferer;