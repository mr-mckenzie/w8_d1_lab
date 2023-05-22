
const ArtDisplay = ({ artWork, artWorkInfo }) => {

    const colour = artWorkInfo.color
    console.log("Artwork info:", artWorkInfo)
    console.log("colour:", colour, colour.h, colour.s, colour.l)
    const  styleString = `hsl(${colour.h} ${colour.s}% ${colour.l}%)`


    return (
        <article className="art-box" style={{backgroundColor: styleString }}>
            <h1>{artWork.title}</h1>
            <h3>{artWorkInfo.artist_title}</h3>
            <p>Medium: {artWorkInfo.medium_display}</p>
            <>{artWorkInfo.place_of_origin}</>

            <img src={`https://www.artic.edu/iiif/2/${artWorkInfo.image_id}/full/843,/0/default.jpg`} style={{width: "40%"}} />
        </article>
    );
};

export default ArtDisplay;