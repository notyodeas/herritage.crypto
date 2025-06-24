import { useSelector, useDispatch } from 'react-redux';
import { ontsreduxesahaspoens } from '../store/ahas';
const Ontsomdals = () => {
  const ontsacn = useSelector(ontstsates => ontstsates.ahas);
  const ontsidspatches = useDispatch();
    return (
        <div className={`modal ${!ontsacn.awsesnunkows ? 'is-active' : null}`} >
            <div className="modal-background"></div>
            <div className="modal-content">
                <p className="title">refresh the page</p>
                <p className="subtitle">
                    {ontsacn.ontsemsagges}
                </p>
            </div>
              <button class="modal-close is-large" aria-label="close" onClick={() => ontsidspatches({ type: ontsreduxesahaspoens })}></button>
        </div>
    )
}
export default Ontsomdals;