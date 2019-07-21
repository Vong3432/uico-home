import React, { Component, useEffect,useState } from 'react'

function VideoGrid(){

    useEffect( ()=>{
        console.log('video grid mounting...')

        return ()=>console.log('video grid unmounting')
    },[])

    return (
        <div className="container px-sm-0 px-3">
            From videogrid
            <div className="video-grid">
                   
            </div>
        </div>
    )
        
}

export default VideoGrid
