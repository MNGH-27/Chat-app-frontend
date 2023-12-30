'use client'

import { useEffect, useState } from 'react'

//define type of returned field of this hook
interface IUseCountDownReturnType {
    time: {
        hours: number
        minutes: number
        seconds: number
    }
    reset: () => void
}

const useCountDown = (initialSeconds: number, callBackFn?: () => void): IUseCountDownReturnType => {
    const [time, setTime] = useState({
        hours: Math.floor(initialSeconds / 3600),
        minutes: Math.floor((initialSeconds % 3600) / 60),
        seconds: Math.floor(initialSeconds % 60)
    })

    useEffect(() => {
        const totalSeconds = time.hours * 3600 + time.minutes * 60 + time.seconds

        if (totalSeconds <= 0) {
            if (callBackFn) callBackFn()
            return
        }

        const customInterval = setInterval(() => {
            setTime((prevTime) => {
                const remainingSeconds = prevTime.hours * 3600 + prevTime.minutes * 60 + prevTime.seconds - 1

                return {
                    hours: Math.floor(remainingSeconds / 3600),
                    minutes: Math.floor((remainingSeconds % 3600) / 60),
                    seconds: Math.floor(remainingSeconds % 60)
                }
            })
        }, 1000)

        return () => {
            clearInterval(customInterval)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [time])

    const reset = () => {
        setTime({
            hours: Math.floor(initialSeconds / 3600),
            minutes: Math.floor((initialSeconds % 3600) / 60),
            seconds: Math.floor(initialSeconds % 60)
        })
    }

    return { time, reset }
}

export default useCountDown
