import { useParams } from "react-router-dom";
import { useState } from "react";

const ArtDisplay = ({setArtworkId, artWorkInfo, setColour}) => {

    const {id} = useParams()
    setArtworkId(id)
    
   //const {isLoading, artWork } = useGetArtDisplay

    if (!artWorkInfo) {
        return <p>Please wait while our gallery curator fetches the artwork</p>
    } else {
    
    let colour 
    if (artWorkInfo.color) {
        colour = artWorkInfo.color }
    else{
        console.log("no colour!!")
         colour = {h: 0, s: 0, l:95}
        } 
    console.log("Artwork info:", artWorkInfo)
    console.log("colour:", colour, colour.h, colour.s, colour.l)
    const  styleString = `hsl(${colour.h} ${colour.s}% ${colour.l}%)`
    const complementaryColour = `hsl(${colour.h+180} ${colour.s}% ${colour.l}%)`

    setColour(colour)

    return (
        <article className="art-box" style={{backgroundColor: styleString}}>
            <h2>{artWorkInfo.title}</h2>
            <h3>{artWorkInfo.artist_title}</h3>
            <p>Medium: {artWorkInfo.medium_display}</p>
            <p>Date: {artWorkInfo.date_display}</p>
            <p>Place of Origin: {artWorkInfo.place_of_origin}</p>
            {artWorkInfo.style_title ? <p>Style: {artWorkInfo.style_titles.join(", ")}</p> : null}
            <img src={`https://www.artic.edu/iiif/2/${artWorkInfo.image_id}/full/843,/0/default.jpg`} />
        </article>
    );
    }
};

export default ArtDisplay;