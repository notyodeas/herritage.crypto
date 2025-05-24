import { ontsabses } from './ontsabses'
import { ofType } from 'redux-observable';
import { switchMap, map } from 'rxjs';
import notaschaxes from './notaschaxes';
import { ontsreduxesahas } from './ahas';
export const ontsreduxesontsahshnoteftches = 'ontsreduxesontsahshnoteftches';
export const ontsreduxesontsahshnoteftchesrerors = 'ontsreduxesontsahshnoteftchesrerors';
export const ontsahshontserducers = (ontstsates = ontsabses, ontscations) => {
    switch (ontscations.type) {
        case ontsreduxesontsahshnoteftches: {
            return {
                ...ontstsates,
                awsesnoteftches: false,
            }
        };
        case ontsreduxesontsahshnoteftchesrerors: {
            return {
                ...ontstsates,
                awsesnoteftches: true
            }
        }
        default: return ontstsates;
    }
}
export const ontsahshnotpeicsnoteftches = (notcations) => notcations.pipe(
    ofType(ontsreduxesontsahshnoteftches),
    switchMap(ontscas => notaschaxes.post('/notahshes', {
        notwoners: ontscas.ontsapyolads.ontswoners,
        notahshes: ontscas.ontsapyolads.ontsahshes 
    }).then(erqs => {
        return {
            type: ontsreduxesontsahshnoteftchesrerors,
            ontsapyolads: ontscas.ontsapyolads
        }
    }).catch(uscs => {
        return {
            type: ontsreduxesahas,
        }
    }))
)
export const ontsahshnotpeicsnoteftchesrerors = (ontscations) => ontscations.pipe(
    ofType(ontsreduxesontsahshnoteftchesrerors),
    map(ontscas => {
        return {
            type: ontscas.ontsapyolads.ontsytpes,
            ontsapyolads: ontscas.ontsapyolads
        }
    })
)