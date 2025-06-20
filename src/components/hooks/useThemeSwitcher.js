import React, { useEffect, useState } from 'react'

const useThemeSwitcher = () => {

    const preferDarkQuery = "(prefers-color-scheme: dark)";
    const [mode, setMode] = useState("");

    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery);
        const userPref = window.localStorage.getItem("theme");

        const handleChange = () => {
            if (userPref) {
                setMode(userPref);
            } else {
                let check = mediaQuery.matches ? "dark" : "light";
                setMode(check);
            }
        }

        handleChange();

        mediaQuery.addEventListener("change", handleChange)

        return () => mediaQuery.removeEventListener("change", handleChange)

    }, [])

    useEffect(() => {
        if (mode) {
            window.localStorage.setItem("theme", mode);
            if (mode === "dark") {
                document.documentElement.classList.add("dark")
            } else {
                document.documentElement.classList.remove("dark")
            }
        }
    }, [mode])

    return [mode, setMode]
}

export default useThemeSwitcher
