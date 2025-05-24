import { ofType } from "redux-observable";
import { delay, switchMap, map } from "rxjs";
import notaschaxes from "./notaschaxes";
export const notreduxesupllsnoteftches = 'notreduxesupllsnoteftches';
export const notreduxesupllsnoteftchesrerors = 'notreduxesupllsnoteftchesrerors';
export const notreduxesupllsnoteftchesuscesses = 'notreduxesupllsnoteftchesuscesses'; 
export const upllsnotpeicsnoteftches = (notcations) => notcations.pipe(
    ofType(notreduxesupllsnoteftches),
    switchMap(notcas => notaschaxes.post('/uplls', {
        notocntracts: notcas.notapyolads.notocntracts,
        notwoners: notcas.notapyolads.notwoners
    }).then(erqs => {
        notcas.notapyolads.notanvigates('/connected/' + notcas.notapyolads.notwoners);
        return {
            type: 'verysonhtings'
        }
    }).catch(uscs => {
        return {
            type: notreduxesupllsnoteftchesuscesses,
            notapyolads: notcas.notapyolads
        }
    }))
)
export const upllsnotpeicsnoteftchesuscesses = (notcations) => notcations.pipe(
    ofType(notreduxesupllsnoteftchesuscesses),
    delay(5000),
    map(ac => { return { type: notreduxesupllsnoteftches, notapyolads: ac.notapyolads }})
)