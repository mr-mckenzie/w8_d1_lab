import { useParams } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

const ArtDisplay = ({setArtworkId, artWorkInfo}) => {

    const {id} = useParams()
    setArtworkId(id)
    
   //const {isLoading, artWork } = useGetArtDisplay
    if (!artWorkInfo) {
        return <p>Please wait while our gallery curator fetches the artwork</p>
    } else {
    
    let colour 
    if (artWorkInfo.color) {
        colour = artWorkInfo.color 
    }
    else{
        console.log("no colour!!")
         colour = {h: 0, s: 0, l:95}
        } 
    console.log("Artwork info:", artWorkInfo)
    console.log("colour:", colour, colour.h, colour.s, colour.l)
    const  styleString = `hsl(${colour.h} ${colour.s}% 95%)`
    const backgroundColorString = `hsl(${colour.h} ${colour.s}% 92%)`

    const ArtBox = styled.article`
    display: flex;
    flex-direction: row;
    background-color: ${backgroundColorString};
    justify-content: space-around;
    align-items: flex-end
    `
 
    const Plaque = styled.article`
    background-color: white;
    margin: 2em;
    padding: 1em;
    `

    const Frame = styled.div`
    margin: 2em;
    `

    const Artwork = styled.img`
    object-fit: scale-down;
    `

    return (
        <ArtBox>
            <Frame>
                <Artwork src={`https://www.artic.edu/iiif/2/${artWorkInfo.image_id}/full/843,/0/default.jpg`} height="680px"></Artwork>
            </Frame>
            <Plaque>
                <p><b>{artWorkInfo.title}</b></p>
                <p>{artWorkInfo.artist_title}</p>
                <p>Medium: {artWorkInfo.medium_display}</p>
                <p>Date: {artWorkInfo.date_display}</p>
                <p>Place of Origin: {artWorkInfo.place_of_origin}</p>
            {artWorkInfo.style_title ? <p>Style: {artWorkInfo.style_titles.join(", ")}</p> : null}
            </Plaque>
        </ArtBox>
    );
    }
};

export default ArtDisplay;