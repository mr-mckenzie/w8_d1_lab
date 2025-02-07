const ArtSearch = ({getArt, setPage, page, setQuery, setCategory, query, category}) => {

    const handleSelectChange = (event) => {
        setCategory((event.target.value).toLowerCase())
    }

    const handleQueryChange = (event) => {
        setQuery((event.target.value).toLowerCase())
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (page !== 1){
            setPage(1)
        }
        if (query && category) {
            getArt(query, category, page)
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="category">
                    Choose a category:
                    <select id ="category" onChange={handleSelectChange} required>
                        <option value="q">Any</option>
                        <option value="query[term][artist_title]">Artist</option>
                        <option value="query[term][subject_titles]">Subject</option>
                        <option value="query[term][title]">Title</option>
                        <option value="query[term][style_titles]">Style</option>
                        <option value="query[term][theme_titles]">Theme</option>
                    </select>
                </label>
                <label>Enter your search query:
                    <input id="search" type="text" value={query} onChange={handleQueryChange} required/>
                </label>
                <input type="submit" value="Search" />
            </form>
        </>
    );

};

export default ArtSearch;