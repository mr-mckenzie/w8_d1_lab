import React, { useState } from 'react';
import ArtSearch from '../components/ArtSearch';
import SearchList from '../components/SearchList';
import ArtDisplay from '../components/ArtDisplay';

const ArtContainer = () => {

    const [art, setArt] = useState([])
    const [clickedArt, setClickArt] = useState(null)
    const [clickedArtInfo, setClickedArtInfo] = useState(null)
    const [page, setPage] = useState(1)
    const [query, setQuery] = useState("")
    const [category, setCategory] = useState("")
    


    const getArtWorkInfo = function (clickedArtUrl) {
        fetch(clickedArtUrl)
            .then(res => res.json())
            .then(artsData => setClickedArtInfo(artsData.data))
    }

    const clickedArtWork = (artWork) => {
        setClickArt(artWork);
        getArtWorkInfo(artWork.api_link)
    };

   
    const getArt = function (yourSearch, category, pageInput) {

        //setArt([])
        const url = `https://api.artic.edu/api/v1/artworks/search?${category}=${yourSearch}&page=${pageInput}&limit=15`
        console.log("url:", url)
        fetch(url)
            .then(res => res.json())
            .then(artData => setArt(artData.data))
    }

    const changePage = (plusMinus, page) => {

        let newPage = page

        if (plusMinus === true) {
            newPage++
        } else {
            newPage --
        }
        getArt(query, category, newPage)
        setPage(newPage)
    }


    return (
        <>
            <ArtSearch getArt={getArt} setPage={setPage} setQuery={setQuery} setCategory={setCategory} query={query} category={category}/>
            <SearchList arts={art} clickedArtWork={clickedArtWork} changePage={changePage} page={page}/>
            {clickedArt && clickedArtInfo ? <ArtDisplay artWork={clickedArt} artWorkInfo={clickedArtInfo} /> : null}

        </>
    );

};

export default ArtContainer;

 // `https://api.artic.edu/api/v1/artworks/search?q=${yourSearch}?page=1&limit=100`
    // https://api.artic.edu/api/v1/artworks/search?query[term][artist_title]=${yourSearch}&limit=100
    // const url = `https://api.artic.edu/api/v1/artworks/search?${category}=${yourSearch}&page=2&limit=10`