import ArtSearch from '../components/ArtSearch';
import SearchList from '../components/SearchList';

const ArtContainer = ({artResults, getArt, selectArtwork, changePage, category, setCategory, query, setQuery, page, setPage,}) => {

            // const [art, setArt] = useState([])
            // const [clickedArt, setClickArt] = useState(null)
            // const [clickedArtInfo, setClickedArtInfo] = useState(null)
            // const [page, setPage] = useState(1)
            // const [query, setQuery] = useState("")
            // const [category, setCategory] = useState("")
            // const [colour, setColour] = useState("grey")

            // //testing out use effect - runs when 'page' state changes
            // useEffect(() => {
            //     console.log(`Page (${page}) has changed`)
            // }, [page])
            
            // useEffect(() => {
            //     console.log(`Query (${query}) has changed`)
            // }, [query])

            // useEffect(() => {
            //     console.log(`Category (${category}) has changed`)
            // }, [category])


            // const getArtWorkInfo = function (clickedArtUrl) {
            //     fetch(clickedArtUrl)
            //         .then(res => res.json())
            //         .then(artsData => setClickedArtInfo(artsData.data))
            // }

            // const runFetch = (artworkId) => {
            //     const url = `https://api.artic.edu/api/v1/artworks/${artworkId}`
            //     console.log(url)
            //     getArtWorkInfo(url)
            // }

            // const clickedArtWork = (artWork) => {
            //     setClickArt(artWork)
            //     getArtWorkInfo(artWork.api_link)
            // }

        
            // const getArt = function (yourSearch, category, pageInput) {

            //     const url = `https://api.artic.edu/api/v1/artworks/search?${category}=${yourSearch}&page=${pageInput}&limit=15`
            //     console.log("url:", url)
            //     fetch(url)
            //         .then(res => res.json())
            //         .then(artData => setArt(artData.data))
            // }

            // const changePage = (plusMinus, page) => {

            //     let newPage = page

            //     if (plusMinus === true) {
            //         newPage++
            //     } else {
            //         newPage --
            //     }
            //     getArt(query, category, newPage)
            //     setPage(newPage)
            // }

            // // const colourBoxes = colourArray.map((element) => {
            // //     return (
            // //         element
            // //     )
            // // })


    return (
        <main>
            <div className='flex-box'>
                <ArtSearch getArt={getArt} page={page} setPage={setPage} query={query} setQuery={setQuery} category={category} setCategory={setCategory}/>
                <SearchList artResults={artResults} selectArtwork={selectArtwork} changePage={changePage} page={page}/>
            </div>
        </main>
    );

};

export default ArtContainer;