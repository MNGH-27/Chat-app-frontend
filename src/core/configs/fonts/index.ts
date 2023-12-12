import localFont from 'next/font/local'

const josefin = localFont({
    src: [
        {
            path: './../../../../public/fonts/Josefin_Sans/static/JosefinSans-Thin.ttf',
            weight: '100',
            style: 'normal'
        },
        {
            path: './../../../../public/fonts/Josefin_Sans/static/JosefinSans-ExtraLight.ttf',
            weight: '200',
            style: 'normal'
        },
        {
            path: './../../../../public/fonts/Josefin_Sans/static/JosefinSans-Light.ttf',
            weight: '300',
            style: 'normal'
        },
        {
            path: './../../../../public/fonts/Josefin_Sans/static/JosefinSans-Regular.ttf',
            weight: '400',
            style: 'normal'
        },
        {
            path: './../../../../public/fonts/Josefin_Sans/static/JosefinSans-Medium.ttf',
            weight: '500',
            style: 'normal'
        },
        {
            path: './../../../../public/fonts/Josefin_Sans/static/JosefinSans-SemiBold.ttf',
            weight: '600',
            style: 'normal'
        },
        {
            path: './../../../../public/fonts/Josefin_Sans/static/JosefinSans-Bold.ttf',
            weight: '700',
            style: 'normal'
        }
    ],
    variable: '--font-josefin'
})

const montserrat = localFont({
    src: [
        {
            path: './../../../../public/fonts/Montserrat_Alternates/MontserratAlternates-Thin.ttf',
            weight: '100',
            style: 'normal'
        },
        {
            path: './../../../../public/fonts/Montserrat_Alternates/MontserratAlternates-ExtraLight.ttf',
            weight: '200',
            style: 'normal'
        },
        {
            path: './../../../../public/fonts/Montserrat_Alternates/MontserratAlternates-Light.ttf',
            weight: '300',
            style: 'normal'
        },
        {
            path: './../../../../public/fonts/Montserrat_Alternates/MontserratAlternates-Regular.ttf',
            weight: '400',
            style: 'normal'
        },
        {
            path: './../../../../public/fonts/Montserrat_Alternates/MontserratAlternates-Medium.ttf',
            weight: '500',
            style: 'normal'
        },
        {
            path: './../../../../public/fonts/Montserrat_Alternates/MontserratAlternates-SemiBold.ttf',
            weight: '600',
            style: 'normal'
        },
        {
            path: './../../../../public/fonts/Montserrat_Alternates/MontserratAlternates-Bold.ttf',
            weight: '700',
            style: 'normal'
        },
        {
            path: './../../../../public/fonts/Montserrat_Alternates/MontserratAlternates-ExtraBold.ttf',
            weight: '800',
            style: 'normal'
        },
        {
            path: './../../../../public/fonts/Montserrat_Alternates/MontserratAlternates-Black.ttf',
            weight: '900',
            style: 'normal'
        }
    ],
    variable: '--font-montserrat'
})

const comfortaa = localFont({
    src: [
        {
            path: './../../../../public/fonts/Comfortaa/static/Comfortaa-Light.ttf',
            weight: '300',
            style: 'normal'
        },
        {
            path: './../../../../public/fonts/Comfortaa/static/Comfortaa-Regular.ttf',
            weight: '400',
            style: 'normal'
        },
        {
            path: './../../../../public/fonts/Comfortaa/static/Comfortaa-Medium.ttf',
            weight: '500',
            style: 'normal'
        },
        {
            path: './../../../../public/fonts/Comfortaa/static/Comfortaa-SemiBold.ttf',
            weight: '600',
            style: 'normal'
        },
        {
            path: './../../../../public/fonts/Comfortaa/static/Comfortaa-Bold.ttf',
            weight: '700',
            style: 'normal'
        }
    ],
    variable: '--font-comfortaa'
})

export { josefin, montserrat, comfortaa }
