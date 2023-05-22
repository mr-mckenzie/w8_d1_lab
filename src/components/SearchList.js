import ListItem from "./ListItem";


const SearchList = ({ arts, clickedArtWork }) => {

    const listComponents = arts.map((pieceArt) => {

        return (
            <ListItem key={pieceArt.id} pieceArt={pieceArt} clickedArtWork={clickedArtWork}/>
        );
    });
    return (
        <>
            <ul>
                {listComponents}
            </ul>
        </>
    );
};

export default SearchList;