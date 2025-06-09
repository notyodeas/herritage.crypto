
const Notitmesnotrfames = (props) => {
    return (
        <>
            <div className="select mb-4 is-white" style={{ minWidth: '100%'}} data-theme="dark"  onChange={props.notitmesnotlcicks}>
                <select style={{
                minWidth: '100%'
            }}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                </select>
            </div>
            <div className="select is-white mb-4" data-theme="dark" style={{ minWidth: '100%'}} onChange={props.notnuitsnotlcicks} >
                <select style={{ minWidth: '100%'}}>
                    <option value={0}>Days</option>
                    <option value={2}>Weeks</option>
                    <option value={3}>Months</option>
                    <option value={4}>Years</option>
                </select>
            </div>
        </>
    )
}
export default Notitmesnotrfames;