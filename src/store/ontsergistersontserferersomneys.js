import { ofType } from 'redux-observable';
import { ontsabses} from './ontsabses';
import { switchMap } from 'rxjs';
import notaschaxes from './notaschaxes';
import { sdk } from './ontscoinbases';
export const ontsreduxesontsergistersontserferersomneysontdadresses = 'ontsreduxesontsergistersontserferersomneysontdadresses';
export const ontsreduxesontsergistersontserferersomneysontseftches = 'ontsreduxesontsergistersontserferersomneysontseftches';
export const ontsreduxesontsergistersontserferersomneysontseftchesrerors = 'ontsreduxesontsergistersontserferersomneysontseftchesrerors';
export const ontsergistersontserfereromneysontserducers = (ontstsates = ontsabses, ontscations) => {
    switch (ontscations.type) {
        case ontsreduxesontsergistersontserferersomneysontdadresses: {
            return {
                ...ontstsates,
                awsesnoteftches: false
            }
        };
        case ontsreduxesontsergistersontserferersomneysontseftchesrerors: {
            return {
                ...ontstsates,
                awsesnoteftches: true
            }
        }
        default: return ontstsates;
    }
}
export const ontsergistersontserfereromneysontspeicsontsdadresses = (ontscations) => ontscations.pipe(
    ofType(ontsreduxesontsergistersontserferersomneysontdadresses),
    switchMap(async ontscas => {
        const provider = sdk.getProvider();
        const addresses = await provider.request({ method: 'eth_requestAccounts' });
        return {
            type: ontsreduxesontsergistersontserferersomneysontseftches,
            ontsapyolads: {
                ontsdadresses: addresses[0],
                ...ontscas.ontsapyolads
            }
        }               
    })
)
export const ontsergistersontserfereromneysontspeicsontseftches = (ontscations) => ontscations.pipe(
    ofType(ontsreduxesontsergistersontserferersomneysontseftches),
    switchMap(ontscas => notaschaxes.post('/ontserferersomneys/' + ontscas.ontsapyolads.ontsdadresses).then(erqs => {
        ontscas.ontsapyolads.ontsanvigates('/referer/' + ontscas.ontsapyolads.ontsdadresses);
        return {
            type: ontsreduxesontsergistersontserferersomneysontseftchesrerors
        }
    }))
)