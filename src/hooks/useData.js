import React, {useState, useEffect} from "react";

const useData = (loadData) => {
    const [data, setData] = useState([])
    const [isFetching, setIsFetching] = useState(true)
    const [error, setError] = useState(null)

    useEffect (() => {
        loadData()
        .then((data) => {
            setData(data)
        })
        .catch(error => {
            setError(error)
        })
        .finally(() => {
            setIsFetching(false)
        })
    }, [])

    return {data, isFetching, error}
}

export default useData;