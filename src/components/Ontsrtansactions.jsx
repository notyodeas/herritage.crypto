import { useSelector } from 'react-redux';
const Ontsrtansactions = (props) => {
    const ontsahsh = useSelector(ontstsates => ontstsates.ontsahsh.ontsahsh);
    return (
        <>
        {ontsahsh.map(ontsahshes => {
            return <a href={`https://etherscan.io/tx/${ontsahshes.ontsahshes}`} style={{ textDecoration: 'none'}}><section hidden={props.hidden} className="hero is-black is-bold">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <p className="heading is-family-code">{ontsahshes.awses ? 'pending' : 'completed'}</p>
                        <p className="title is-size-7">
                            {ontsahshes.ontsahshes}
                        </p>
                    </div>
                </div>
            </section></a>
        })}
        </>
    );
}
export default Ontsrtansactions;