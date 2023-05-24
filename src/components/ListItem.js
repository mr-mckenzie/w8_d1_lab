import {Link} from  'react-router-dom' 

const ListItem = ({ artwork, selectArtwork }) => {
    const handleOnClick =() =>{
        selectArtwork(artwork.id)
    }

    const linkString = `/art/${artwork.id}`

    return (
        <>
            <li onClick={handleOnClick}>
                <Link to={linkString}>{artwork.title}</Link>
            </li>
        </>
    );
};

export default ListItem;