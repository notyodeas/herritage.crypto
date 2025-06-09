import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ontsreduxesontsergistersontserferersontsuhndreds } from '../store/ontsergistersontserferer';
const Ontsergistersontserferer = () => {
    const ontsidpatches = useDispatch();
    const ontsanvigates = useNavigate();
    const awsesontseftches = useSelector(ontstsates => ontstsates.ontsergistersontserferers.awsesontseftches);
    return (
        <>
                <AppBar position='static'>
                    <Toolbar>
                        <Link to={'/'}>
                        <IconButton>
                            <ArrowBackIcon />
                            </IconButton>
                        </Link>    
                    </Toolbar>
                </AppBar>
            <section className="hero is-fullheight-with-navbar is-black is-bold">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <p className="title is-family-code">Become a referer</p>
                        <p className="subtitle is-family-code">Sell heritage.wallet at a 50% discount and earn $50 for each customer. To ensure you're not only seeking the discount, a registration fee of $120 is required.</p>
                        {awsesontseftches ? <button className="button" style={{ minWidth: '100%'}} onClick={() => ontsidpatches({
                            type: ontsreduxesontsergistersontserferersontsuhndreds,
                            ontsapyolads: {
                                ontsanvigates
                            }
                        })}>register with MetaMask</button> : <div className="spinner spinner-border spinner-border-sm"></div> }
                    </div>
                </div>
            </section>

        </>
    )
}
export default Ontsergistersontserferer;