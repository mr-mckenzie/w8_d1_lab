
const ArtDisplay = ({ artWork, artWorkInfo, setColour}) => {

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

    setColour(complementaryColour)

    return (
        <article className="art-box" style={{backgroundColor: styleString}}>
            <h2>{artWork.title}</h2>
            <h3>{artWorkInfo.artist_title}</h3>
            <p>Medium: {artWorkInfo.medium_display}</p>
            <p>Date: {artWorkInfo.date_display}</p>
            <p>Place of Origin: {artWorkInfo.place_of_origin}</p>
            {artWorkInfo.style_title ? <p>Style: {artWorkInfo.style_titles.join(", ")}</p> : null}
            <img src={`https://www.artic.edu/iiif/2/${artWorkInfo.image_id}/full/843,/0/default.jpg`} style={{width: "40%"}} />
        </article>
    );
};

export default ArtDisplay;