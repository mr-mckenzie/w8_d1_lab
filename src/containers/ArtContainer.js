import ArtSearch from '../components/ArtSearch';
import SearchList from '../components/SearchList';

const ArtContainer = ({artResults, getArt, selectArtwork, changePage, category, setCategory, query, setQuery, page, setPage,}) => {

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