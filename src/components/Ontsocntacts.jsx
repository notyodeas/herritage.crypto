import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

const Ontsocntacts = () => {
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
            <section className="hero is-black is-bold is-fullheight-with-navbar">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <p className="title is-size-7">smartheritagecontract@proton.me</p>
                </div>
            </div>
        </section>
        </>

    )
}
export default Ontsocntacts;