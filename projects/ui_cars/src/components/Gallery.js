import React from 'react'
import PhotoGrid from './PhotoGrid.js'
import VideoGrid from './VideoGrid.js'

function Gallery(props) {

    let { grid } = props.match.params;
    
    let displayGrid = (grid="photo-grid") => {
        //console.log(grid)
        return grid === "photo-grid" ? <PhotoGrid /> : <VideoGrid />; 
    }
    
    return (
        <>
            {displayGrid(grid)}
        </>
    )
}

export default Gallery
