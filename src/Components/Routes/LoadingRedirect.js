import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

function LoadingRedirect() {
    const [count, setCount] = useState(5);
    let history = useHistory();
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((currentCount) => --currentCount);
        }, 1000)
        count === 0 && history.push('/')
        return () => clearInterval(interval)
    }, [count]);

    return (
        <div className="red__container">
            <h1>Redirecting you in {count} seconds</h1>
        </div>
    )
}

export default LoadingRedirect
