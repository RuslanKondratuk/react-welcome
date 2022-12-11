import React, {useState, useEffect} from "react";

const useWindowSize = () => {

    const [size, setSize] = useState({
                                    width: window.innerWidth,
                                    heigth: window.innerHeight
                                    })
    const resizeHendler = () => {
        setSize({
            width: window.innerWidth,
            heigth: window.innerHeight
        })
    };

    useEffect (() => {
        window.addEventListener('resize', resizeHendler)
        return () => {
            window.removeEventListener('resize', resizeHendler)
        }
    }, [])

    return {size}

}

export default useWindowSize;