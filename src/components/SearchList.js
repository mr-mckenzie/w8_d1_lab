import ListItem from "./ListItem";
import React, { useState } from 'react';


const SearchList = ({ artResults, selectArtwork, changePage, page}) => {

    //console.log("arts:", arts)


    const listComponents = artResults.map((artwork) => {

        return (
            <ListItem key={artwork.id} artwork={artwork} selectArtwork={selectArtwork}/>
        );
    });

    
    return (
        <>
            <ul>
                {listComponents}
            </ul>
            { (artResults.length > 1) ? (
                <div>
            {  (page > 1) ? <button onClick={() => changePage(false, page)}>Previous</button> : null}
            <label>Page {page} </label>
            <button onClick={(event) => changePage(true, page)}>Next</button>
            </div>)
            :
            null}
        </>
    );
};

export default SearchList;