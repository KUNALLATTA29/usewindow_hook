import React from 'react'
import { useState, useEffect } from 'react'

export default function useWindowsize() {
    const [windowssize, setwindowssize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    useEffect(()=>{
        const handlechange =()=>{
            setwindowssize({
                width: window.innerWidth,
                height:window.innerHeight
            })
        }
        window.addEventListener('resize', handlechange);
        return ()=>{
            window.removeEventListener('resize',handlechange);
        }
    },[])
  return windowssize;
}
