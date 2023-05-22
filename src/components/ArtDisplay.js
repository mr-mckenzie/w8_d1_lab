
const ArtDisplay = ({ artWork, artWorkInfo }) => {

    // const getArtWorkData = function (artwork) {
    //     const url = artwork.api_link
    //     console.log(url)
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(artsData => setArts(artsData.data))
    // }


    return (
        <>
            <h1>{artWork.title}</h1>
            <h3>{artWorkInfo.medium_display}</h3>
            <h3>{artWorkInfo.artist_title}</h3>
            <img src={`https://www.artic.edu/iiif/2/${artWorkInfo.image_id}/full/843,/0/default.jpg`} />
        </>
    );
};

export default ArtDisplay;