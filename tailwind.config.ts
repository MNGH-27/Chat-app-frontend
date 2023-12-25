import type { Config } from 'tailwindcss'

const config: Config = {
    corePlugins: {
        preflight: false
    },
    important: true,
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],

    theme: {
        extend: {
            colors: {
                brand: {
                    50: '#E8EDF2',
                    100: '#D1DBE6',
                    200: '#A0B5CA',
                    300: '#7291B1',
                    400: '#4E6E8D',
                    500: '#34495E',
                    600: '#2C3E50',
                    700: '#1F2B38',
                    800: '#141C24',
                    900: '#0B0F14',
                    950: '#05080A'
                },
                primary: {
                    DEFAULT: '#3980FD',
                    50: '#EBF2FF',
                    100: '#D7E5FF',
                    200: '#AECCFE',
                    300: '#86B2FE',
                    400: '#629BFD',
                    500: '#3980FD',
                    600: '#025CF7',
                    700: '#0244B6',
                    800: '#012D79',
                    900: '#01173D',
                    950: '#000B1E'
                }
            },
            fontFamily: {
                josefin: 'var(--font-josefin)',
                montserrat: 'var(--font-montserrat)',
                comfortaa: 'var(--font-comfortaa)'
            }
        }
    },
    plugins: []
}

export default config
