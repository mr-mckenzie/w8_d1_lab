import React, { useState } from 'react';
import ArtSearch from '../components/ArtSearch';
import SearchList from '../components/SearchList';
import ArtDisplay from '../components/ArtDisplay';

const ArtContainer = () => {

    const [arts, setArts] = useState([])
    const [clickedArt, setClickArt] = useState(null)
    const [clickedArtInfo, setClickedArtInfo] = useState(null)
    // let [yourSearch, setYourSearch] = useState("")

    // const newSearch = (searchQuery) => {
    //     // setYourSearch(searchQuery)
    //     // console.log(yourSearch)
    //     // getArt(yourSearch)
    //     // if (yourSearch !== "") {
    //     //     
    //     // };
    // };


    // useEffect(() => {
    //     if (clickedArt) {
    //         getArtWorkInfo(clickedArt.api_link);
    //     }
    // }, [clickedArtInfo]);

    const getArtWorkInfo = function (clickedArtUrl) {
        fetch(clickedArtUrl)
            .then(res => res.json())
            .then(artsData => setClickedArtInfo(artsData.data))
    }


    const clickedArtWork = (artWork) => {
        setClickArt(artWork);
        getArtWorkInfo(artWork.api_link)
    };
    // `https://api.artic.edu/api/v1/artworks/search?q=${yourSearch}?page=1&limit=100`
    // `https://api.artic.edu/api/v1/artworks/search?q=title=${yourSearch}?page=1&limit=100`
    const getArt = function (yourSearch) {
        setArts([])
        const url = `https://api.artic.edu/api/v1/artworks/search?query[term][artist_title]=${yourSearch}&limit=100`
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(artsData => setArts(artsData.data))
    }

    return (
        <>
            <ArtSearch getArt={getArt} />
            {/* <p>{arts}</p> */}
            {/* {console.log(arts)} */}
            {/* {console.log(yourSearch)} */}
            <SearchList arts={arts} clickedArtWork={clickedArtWork} />
            {clickedArt && clickedArtInfo ? <ArtDisplay artWork={clickedArt} artWorkInfo={clickedArtInfo}/> : null}
        </>
    );

};

export default ArtContainer;
