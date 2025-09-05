module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
module.exports = {
    theme: {
        extend: {
            colors: {
                navy: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#0ea5e9',
                    600: '#0284c7',
                    700: '#0369a1',
                    800: '#075985',
                    900: '#0c4a6e',
                }
            }
        }
    }
}
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./src/components/**/*.{js,jsx,ts,tsx}" // Ajoutez ce chemin
    ],
    theme: {
        extend: {

            keyframes: {

                fadeIn: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
                pill: {
                    'to': { transform: 'scale(1)', opacity: '1' }
                },
                particle: {
                    '0%': {
                        transform: 'rotate(0deg) translate(var(--start-x), var(--start-y))',
                        opacity: '1'
                    },
                    '70%': {
                        transform: 'rotate(calc(var(--rotate) * 0.5)) translate(calc(var(--end-x) * 1.2), calc(var(--end-y) * 1.2))',
                        opacity: '1'
                    },
                    '85%': {
                        transform: 'rotate(calc(var(--rotate) * 0.66)) translate(var(--end-x), var(--end-y))',
                        opacity: '1'
                    },
                    '100%': {
                        transform: 'rotate(calc(var(--rotate) * 1.2)) translate(calc(var(--end-x) * 0.5), calc(var(--end-y) * 0.5))',
                        opacity: '1'
                    }
                },
                point: {
                    '0%': { transform: 'scale(0)', opacity: '0' },
                    '25%': { transform: 'scale(calc(var(--scale) * 0.25))' },
                    '38%': { opacity: '1' },
                    '65%': { transform: 'scale(var(--scale))', opacity: '1' },
                    '85%': { transform: 'scale(var(--scale))', opacity: '1' },
                    '100%': { transform: 'scale(0)', opacity: '0' }
                }
            },
            animation: {
                fadeIn: 'fadeIn 1s ease-in-out',
                pill: 'pill 0.3s ease both',
                particle: 'particle calc(var(--time)) ease 1 -350ms',
                point: 'point calc(var(--time)) ease 1 -350ms'
            }
        },
    },
    plugins: [],
}