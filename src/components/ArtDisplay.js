import { useParams } from "react-router-dom"
import styled from "styled-components"
import {Link} from  'react-router-dom'

const ArtDisplay = ({setArtworkId, artWorkInfo, nextId}) => {

    const {id} = useParams()
    setArtworkId(id)
    
   //const {isLoading, artWork } = useGetArtDisplay
    if (!artWorkInfo) {
        return <p>Please wait while our gallery curator fetches the artwork</p>
    } else {
    
    let colour 
    if (artWorkInfo.color) {
        colour = artWorkInfo.color 
    }
    else{
        //console.log("no colour!!")
         colour = {h: 0, s: 0, l:95}
        } 
    //console.log("Artwork info:", artWorkInfo)
    //console.log("colour:", colour, colour.h, colour.s, colour.l)
    const  styleString = `hsl(${colour.h} ${colour.s}% 95%)`
    const backgroundColorString = `hsl(${colour.h} ${colour.s}% 92%)`

    //console.log("artwork id:", id)
    const nextArtworkUrl = `/art/${nextId(true)}`
    const previousArtworkUrl = `/art/${nextId(false)}`

    const ArtBox = styled.article`
    display: flex;
    flex-direction: row;
    background-color: ${backgroundColorString};
    justify-content: space-around;
    align-items: center
    `

    const SideBar = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2em;
    align-items: center
    `
 
    const Label = styled.article`
    background-color: white;
    margin-top: 2em;
    margin-bottom: 2em;
    padding: 1em;
    box-shadow: 2px 2px 7px black;
    text-align: left
    `

    const Frame = styled.div`
    margin: 2em;
    max-width: 50em;
    height: 90%
    `

    const NavigationBox = styled.div`
    display: flex;
    width: 15rem;
    justify-content: space-between;
    `

    const Artwork = styled.img`
    object-fit: scale-down;
    object-position: left;
    `

    const Title = styled.p`
    font-size: 20px;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    font-weight: bold;
    `

    const Text = styled.p`
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    `

    return (
        <ArtBox>
            <Frame>
                <Artwork src={`https://www.artic.edu/iiif/2/${artWorkInfo.image_id}/full/843,/0/default.jpg`} height="680px"></Artwork>
            </Frame>
            <SideBar>
                <Label>
                    <Title>{artWorkInfo.title}</Title>
                    <Text>{artWorkInfo.artist_display}</Text>
                    <Text>({artWorkInfo.date_display})</Text>
                    <Text>{artWorkInfo.medium_display}</Text>
                </Label>
                <NavigationBox>
                    {(nextId(false)) ? <Link to={previousArtworkUrl}> previous artwork </Link> : null}
                    {(nextId(true)) ? <Link to={nextArtworkUrl}> next artwork </Link> : null}
                </NavigationBox>
            </SideBar>
        </ArtBox>
    );
    }
};

export default ArtDisplay;