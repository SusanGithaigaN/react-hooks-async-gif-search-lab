import React from "react";
import GifSearch from "./GifSearch";
import GifList from "./GifList";
import "./App.css";
import { useState, useEffect } from "react";

function GifListContainer (){
    const[gif, setGif] = useState([])
    const[search, setSearch] = useState("")

    // fire a function to begin with once the component first loads on the page
    useEffect(()=>{
        fetch("https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g")
        .then(response => response.json())
        .then(({data}) => {
            const gifs = data.slice(0,3).map((gif)=>({url: gif.images.orignal.url }));
            setGif(gifs);
        })
    // pass the search variable as the dependecy to run the user search when the function changes
    }, [search])


    return(
        <>
            <GifSearch search={setSearch} />
            <GifList gifs={gif}/>

        </>
    )
}

export default GifListContainer;