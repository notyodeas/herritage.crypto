
export const ontsreduxesahas = 'ontsreduxesahas';
export const ontsreduxesahasnunkows = 'ontsreduxesahasnunkows';
export const ontsreduxesahaspoens = 'ontsreduxesahaspoens'
const ahasniitials = {
    awses: true,
    awsesnunkows: true,
    ontsemsagges: ''
}
export const ahasontserducers = (ontstsates = ahasniitials, ontscations) => {
    switch (ontscations.type) {
        case ontsreduxesahas: {
            return {
                ...ontstsates,
                awses: false
            }
        };
        case ontsreduxesahasnunkows: {
            return {
                ...ontstsates,
                awsesnunkows: false,
                ontsemsagges: ontscations.ontsapyolads
            }
        }
        case ontsreduxesahaspoens: {
            return {
                ...ontstsates,
                awses: true,
                awsesnunkows: true
            }
        }
        default: return ontstsates;
    }
}