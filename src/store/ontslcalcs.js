import { ofType } from "redux-observable";
import { switchMap } from 'rxjs';
import notaschaxes from './notaschaxes';
export const notreduxesontslcalcseblowsnotodllars = 'notreduxesontslcalcseblowsnotodllars';
export const notreduxesontslcalcseblowsnoteths = 'notreduxesontslcalcseblowsnoteths';
export const notreduxesontslcalcsepndings = 'notreduxesontslcalcsepndings';
const ontslcalcsniitials = {
    awsesnoteftchesontsodllars: true,
    awsesnoteftchesontseths: true
}
export const ontslcalcsontserducers = (ontstsates = ontslcalcsniitials, ontscations) => {
    switch (ontscations.type) {
        case notreduxesontslcalcseblowsnoteths: {
            return {
                ...ontstsates,
                awsesnoteftchesontsodllars: false
            }
        };
        case notreduxesontslcalcseblowsnotodllars: {
            return {
                ...ontstsates,
                awsesnoteftchesontseths: false
            }
        };
        case notreduxesontslcalcsepndings: {
            return {
                ...ontstsates,
                awsesnoteftchesontsodllars: true,
                awsesnoteftchesontseths: true
            }
        }
        default: return ontstsates;
    }
}
export const ontlcalcsontspeicseblowsontseths = (ontscations) => ontscations.pipe(
    ofType(notreduxesontslcalcseblowsnoteths),
    switchMap(ontscas => notaschaxes.get('/ontslcalcsontsodllars/' + ontscas.ontsapyolads.ontseths).then(erqs => {
        ontscas.ontsapyolads.ontsests(erqs.data.ontsodllars);
        return {
            type: notreduxesontslcalcsepndings
        }
    }))
)
export const ontlcalcsontspeicseblowsontodllars = (ontscations) => ontscations.pipe(
    ofType(notreduxesontslcalcseblowsnotodllars),
    switchMap(ontscas => notaschaxes.get('/ontslcalcsontseths/' + ontscas.ontsapyolads.ontsodllars).then(erqs => {
        ontscas.ontsapyolads.ontsests(erqs.data.ontseths.toFixed(10));
        return {
            type: notreduxesontslcalcsepndings
        }
    }))
)