// import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './components/Home'
import NavigationBar from './components/NavigationBar'
import ArtContainer from "./containers/ArtContainer";
import ArtDisplay from './components/ArtDisplay';


function App() {

  //list of artworks from our search
  const [artResults, setArtResults] = useState([])
  //artwork id to fetch and set a single artwork
  const [artworkId, setArtworkId] = useState(null)
  //artwork object to display full art details
  const [artworkObj, setArtworkObj] = useState(null)
  //page number for query pagination
  const [page, setPage] = useState(1)
  //query string to add to api search
  const [query, setQuery] = useState("")
  //category used for api search
  const [category, setCategory] = useState("")
  //colour from artwork
  const [colour, setColour] = useState(null)

  //testing out use effect - runs when 'page' state changes
  useEffect(() => {
      console.log(`UseEffect Test: ART RESULTS  (${artResults}) has changed`)
  }, [artResults])
  useEffect(() => {
      console.log(`UseEffect Test: ARTWORK ID (${artworkId}) has changed`)
  }, [artworkId])
  useEffect(() => {
      console.log(`UseEffect Test: ARTWORK OBJ (${artworkObj}) has changed`)
  }, [artworkObj])
  useEffect(() => {
      console.log(`UseEffect Test: PAGE (${page}) has changed`)
  }, [page])
  useEffect(() => {
      console.log(`UseEffect Test: QUERY (${query}) has changed`)
  }, [query])
  useEffect(() => {
      console.log(`UseEffect Test: CATEGORY (${category}) has changed`)
  }, [category])
  // let styleString = "hsl(50 50% 50%)"
  // let complementaryColour = "hsl(25 25% 50%)"
  useEffect(() => {
      console.log(`UseEffect Test: COLOUR (${colour}) has changed`)
      // styleString = `hsl(${colour.h} ${colour.s}% ${colour.l}%)`
      // complementaryColour = `hsl(${colour.h+180} ${colour.s}% ${colour.l}%)`
  }, [colour])


  //when id changes run the getArtwork function
  useEffect(() => {
    //GET ARTWORK
    if (artworkId) {
      const url = `https://api.artic.edu/api/v1/artworks/${artworkId}`
      fetch(url)
        .then(response => response.json())
        .then(artworkData => setArtworkObj(artworkData.data))
    }
  }, [artworkId])

    //select an artwork(click on artwork link)
    const selectArtwork = (id) => {
        setArtworkId(id)
    }

    //GET ART
    const getArt = function (searchQuery, searchCategory, pagination) {
        const url = `https://api.artic.edu/api/v1/artworks/search?${searchCategory}=${searchQuery}&page=${pagination}&limit=20`
        console.log("url:", url)
        fetch(url)
            .then(res => res.json())
            .then(artData => setArtResults(artData.data))
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
    <div className="App">
      <Router>
        <NavigationBar colour={colour}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/search" element={<ArtContainer artResults={artResults} getArt={getArt} selectArtwork={selectArtwork} changePage={changePage} category={category} setCategory={setCategory} query={query} setQuery={setQuery} page={page} setPage={setPage}/>}/>
          <Route path="/art/:id" element={<ArtDisplay setArtworkId={setArtworkId} artWorkInfo={artworkObj} setColour={setColour}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
