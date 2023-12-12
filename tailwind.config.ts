import type { Config } from 'tailwindcss'

const config: Config = {
    important: true,
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        fontFamily: {
            josefin: 'var(--font-josefin)',
            montserrat: 'var(--font-montserrat)',
            comfortaa: 'var(--font-comfortaa)'
        }
    },
    plugins: []
}

export default config
