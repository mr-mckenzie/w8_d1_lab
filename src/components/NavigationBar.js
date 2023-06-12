import {Link} from  'react-router-dom' 
import styled from 'styled-components'

const NavigationBar = ({colour}) => {

    const NavBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 3em;
    align-items: center;
    `

    console.log("NAV BAR COLOUR: ", colour)
    let navBarColour = {...colour}
    if (!navBarColour) {
         navBarColour = {h: 0, s: 0, l:80}
        } 
    //console.log("navBarColour:", navBarColour, navBarColour.h, navBarColour.s, navBarColour.l)
    const styleString = `hsl(${navBarColour.h} ${navBarColour.s}% ${navBarColour.l}%)`
    //const complementaryColour = `hsl(${navBarColour.h+180} ${navBarColour.s}% ${navBarColour.l}%)`


    return (
        <NavBar>
            <p>Virtual Gallery</p>
            <Link to="/"> Home </Link>
            <Link to="../search"> Search </Link>
            {/* TODO save favourite art... */}
            {/* Favourite Art... */}
        </NavBar>
    )
}

export default NavigationBar