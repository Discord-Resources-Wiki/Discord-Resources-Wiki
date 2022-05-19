/*
import {useEffect, useState} from "react";
import useFixedThemeContext from "@docusaurus/theme-common";


This is a thin wrapper around useThemeContext that fixes a display bug in some browsers
It basically triggers all components to re-render directly after the page as rendered for the first time


export default function useFixedThemeContext() {
    const [themeContext, setThemContext] = useState({});

    const realThemeContext = useThemeContext();

    useEffect(() => {
        setThemContext(realThemeContext)
    }, [realThemeContext])

    return themeContext;
}
*/