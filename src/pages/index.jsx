import React, {useEffect} from "react";

export default function Index() {
    useEffect(() => {
        window.location.replace('/wiki')
    }, [])

    return <div/>
}