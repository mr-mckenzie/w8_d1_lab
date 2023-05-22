import { useState } from "react"

const ArtSearch = ({ getArt, setPage, page }) => {

    const [query, setQuery] = useState("");

    const [category, setCategory] = useState("")

    const handleSelectChange = (event) => {
        setCategory(event.target.value)
    }

    const handleQueryChange = (event) => {
        setQuery(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // newSearch(query);
        setPage(1)
        if (query && category) {
            getArt(query.toLowerCase(), category, page)
            // setPage(1)
        }

        // setQuery("");
    };



    return (
        <>
            <h2>Search for an art work</h2>
            <form onSubmit={handleSubmit}>
            <label>
                Choose a category:
            </label>
            <select onChange={handleSelectChange} required>
                <option hidden value="">Categories</option>
                <option value="q">Any</option>
                <option value="query[term][artist_title]">Artist</option>
                <option value="query[term][subject_titles]">Subject</option>
                <option value="query[term][title]">Title</option>
            </select>
                <label>
                    Enter a subject:
                    <input type="text" value={query} onChange={handleQueryChange} required/>
                </label>
                <input type="submit" value="search" />
            </form>
        </>
    );
};

export default ArtSearch;