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
    const [colour, setColour] = useState("white")


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

    // const colourBoxes = colourArray.map((element) => {
    //     return (
    //         element
    //     )
    // })


    return (
        <main style={{backgroundColor: colour}}>
            <h1>Find a Masterpiece</h1>
            <div className='flex-box'>
                <div>
                <ArtSearch getArt={getArt} setPage={setPage} setQuery={setQuery} setCategory={setCategory} query={query} category={category}/>
                <SearchList arts={art} clickedArtWork={clickedArtWork} changePage={changePage} page={page}/>
                </div>
            {clickedArt && clickedArtInfo ? <ArtDisplay artWork={clickedArt} artWorkInfo={clickedArtInfo} setColour={setColour}/> : null}
            {/* <div className='colour-square-container'>{colourBoxes}</div> */}
            </div>
        </main>
    );

};

export default ArtContainer;