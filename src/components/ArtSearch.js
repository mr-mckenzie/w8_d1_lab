import { useState } from "react"

const ArtSearch = ({getArt}) => {

    const [query, setQuery] = useState("");

    const handleQueryChange = (event) => {
        setQuery(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // newSearch(query);
        getArt(query.toLowerCase())
        // setQuery("");
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter a subject:
                    <input type="text" value={query} onChange={handleQueryChange}/>
                </label>
                <input type="submit" value="search"/>
            </form>
        </>
    );
};

export default ArtSearch;