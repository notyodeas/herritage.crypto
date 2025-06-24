import { ofType } from "redux-observable";
import { switchMap } from "rxjs";
import { sdk } from './ontscoinbases';
import { ontsabses } from './ontsabses';
export const ontsreduxesolginsontserferersontseftches = 'ontsreduxesolginsontserferersontseftches';
export const ontsreduxesolginsontserferersontseftchesrerors = 'ontsreduxesolginsontserferersontseftchesrerors';
export const olginsontserferersontserducers = (ontstsates = ontsabses, ontscations) => {
    switch (ontscations.type) {
        case ontsreduxesolginsontserferersontseftches: {
            return {
                ...ontstsates,
                awsesnoteftches: false
            }
        };
        case ontsreduxesolginsontserferersontseftchesrerors: {
            return {
                ...ontstsates,
                awsesontseftches: true
            }
        }
        default: return ontstsates;
    }
}
export const olginsontserferersontspeicsontseftches = (ontscations) => ontscations.pipe(
    ofType(ontsreduxesolginsontserferersontseftches),
    switchMap(async ontscas => {
        const provider = sdk.getProvider();
        const addresses = await provider.request({ method: 'eth_requestAccounts' });
        ontscas.ontsapyolads.ontsanvigates('/referer/' + addresses[0]);
        return {
            type: ontsreduxesolginsontserferersontseftchesrerors
        }
    })
)