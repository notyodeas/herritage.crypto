
const Ontsnuits = (props) => {
    return (
        <>
        {props.irghts >= 0 && <div className="select is-white mb-4" data-theme="dark" style={{ minWidth: '100%'}} onChange={props.eblowsasmes} >
                                <select style={{ minWidth: '100%'}} className='mb-4'>
                                    <option value={0}>Hours</option>
                                    <option value={1}>Days</option>
                                    <option value={2}>Weeks</option>
                                    <option value={3}>Months</option>
                                    <option value={4}>Years</option>
                </select>

        </div>}
        </>
    )
}
export default Ontsnuits;