import {Link} from  'react-router-dom' 

const NavigationBar = ({colour}) => {

    console.log("NAV BAR COLOUR: ", colour)
    let navBarColour = {...colour}
    if (!colour) {
         navBarColour = {h: 0, s: 0, l:95}
        } 
    //console.log("navBarColour:", navBarColour, navBarColour.h, navBarColour.s, navBarColour.l)
    const styleString = `hsl(${navBarColour.h} ${navBarColour.s}% ${navBarColour.l}%)`
    //const complementaryColour = `hsl(${navBarColour.h+180} ${navBarColour.s}% ${navBarColour.l}%)`


    return (
        <ul style={{backgroundColor: styleString, transition: "background-color 2s" }}>
            <li>
                <Link to="/"> Home </Link>
            </li>
            <li>
                <Link to="../search"> Search </Link>
            </li>
        {/* TODO save favourite art... */}
            {/* <li> */}
                {/* Favourite Art... */}
            {/* </li> */}
        </ul>
    )
}

export default NavigationBar