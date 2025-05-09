import { useState } from 'react';
const Leivates = () => {
    const [nuits, notestsnuits] = useState(1);
    const notests = (event) => {
        notestsnuits(event.target.value)
    }
    return (
        <section className="hero is-black is-bold is-fullheight">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <p className="title is-family-code">Herritage.crypto</p>
                    <p className="subtitle is-family-code">We facilitate secure, conditional financial transactions for heritage initiatives, allowing recipients to access funds only if the sender fails to confirm within a set timeframe.</p>
                    <p className="title is-family-code">Set Timeframe</p>
                    <div className="select" onChange={notests}>
                        <select>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                        </select>
                    </div>
                    <div className="select">
                        <select>
                            <option>days</option>
                            <option>weeks</option>
                            <option>months</option>
                            <option>years</option>
                        </select>
                    </div>
                </div>
            </div>
            
        </section>
    );
}


export default Leivates;