module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            height: {
                bg: '40rem',
                bgLg: '44rem'
            },
            width: {
                w308: '30.8rem'
            },
            fontSize: {
                12: '12px',
                14: '14px',
                16: '16px'
            },
            padding: {
                pdr: '36rem',
            },
            fontFamily: {
                'OpenSans-Lt': ['Open Sans Lt'],
                'OpenSans-Rg': ['Open Sans Rg'],
            },
            colors: {
                primary: '#2F80ED',
                custom: '#494F66',
                custom2: '#8D93AB',
                custom3: '#C5CBE0',
                custom4: '#F0F2FA',
                custom5: '#939DFF',
                green: {
                    primary: '#83CC5E'
                }
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
