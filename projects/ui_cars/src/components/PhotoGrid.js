import React, {Component, useState, useEffect} from 'react'

function PhotoGrid(){   
   
    /*
    Basic useEffect
    =========================

    useEffect(() => {
        //Call this after every render, by default
        console.log('photogrid component is rendered!')

        //componentWillUnmount by using return
        //called everytime before effect run to cleap up from the last run
        return () => console.log('photogrid is unmounting')
        
    });

    */

    /* 
    Second use 
    - run effect less often by providing second argument
    - wont run effect if the dependencies are not updated or changed.
    ==========================   

    const [value, setValue] = useState('initial')

    useEffect(()=>{
        console.log(value)
    }, [value])  // pass `value` as dependency

    */      
   
   
    //Fetch data with useEffect 
    //===========================================
    const [images, setImages] = useState([]);
    const [loaded, setIsLoaded] = useState(false);

    //axios
    const axios = require('axios');
    const InfiniteScroll = require('react-infinite-scroll-component')

    // Fetch 10 random images
    const fetchImages = (count=5) => {        
        const apiRoot = "https://api.unsplash.com";
        const accessKey = "5fbf07c1afcd73c6f79f4da852e50eaef0fe9f1f8c2be699a15959fbf1ac5c69"

        axios
        .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}&query=sportcar`)        
        .then( res => {
            setImages([...images,...res.data]);
            setIsLoaded(true);
        });
        
        console.log(images)
    };

    // fetchImage run if any updated or modified happened
    useEffect(()=>{
        fetchImages();
    },[]);
    
    return (
        <div className="container px-sm-0 px-3">
            Here from photogrid
           
                <InfiniteScroll
                    className="d-flex flex-column "
                    dataLength={images}
                    next={()=>fetchImages(5)}
                    hasMore={true}
                    loader={
                        <img     
                            className="mx-auto"                        
                            style={{maxWidth:"100%",width:"100%",height:"250px",objectFit:"cover",borderRadius:"0%"}}
                            src="https://media0.giphy.com/media/CucLuajPnjJkY/giphy.gif"
                            alt="loading"
                        />
                    }
                >
                    <div className="photo-grid">
                        {loaded?
                            images.map((image, index)=>(
                                <UnsplashImage username={image.user.name} url={image.urls.regular} key={index} />
                            ))
                            : ""
                        }
                    </div>
                </InfiniteScroll>
    
        </div>
    )
     
}

const UnsplashImage = ({username,url, key}) =>(
    <div className="image-item" key={key}>
        <img src={url} />
        <small>{username}</small>
    </div>
)

export default PhotoGrid
