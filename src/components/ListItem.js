
const ListItem = ({ pieceArt, clickedArtWork }) => {
    const handleOnClick =() =>{
        clickedArtWork(pieceArt)
    }
    return (
        <>
            <li onClick={handleOnClick}>{pieceArt.title}</li>
        </>
    );
};

export default ListItem;