import { useEffect } from "react"

const detectDevice = (userAgent) => {
    console.log(userAgent)
    const isAndroid = () => Boolean(userAgent.match(/Android/i))
    const isIos = () => Boolean(userAgent.match(/iPhone|iPad|iPod/i))
    const isOpera = () => Boolean(userAgent.match(/Opera Mini/i))
    const isWindows = () => Boolean(userAgent.match(/IEMobile/i))
    const isSSR = () => Boolean(userAgent.match(/SSR/i))
    const isMobile = () => Boolean(isAndroid() || isIos() || isOpera() || isWindows())
    const isDesktop = () => Boolean(!isMobile() && !isSSR())

    return {
        isMobile,
        isDesktop,
        isAndroid,
        isIos,
        isSSR,
    }
}

const useDevice = () => {
    useEffect(() => {}, [])
    const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent
    return detectDevice(userAgent)
}

export default useDevice;
