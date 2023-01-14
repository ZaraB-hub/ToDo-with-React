import PropTypes from 'prop-types'
import B from './B'


const Header = (props) => {

    return (
    
    <header className='header'>
        <h1 >{props.title}</h1>
        <B text={props.showAdd ? "Close" : "Add"} color={props.showAdd ? "blue" : "pink"} onClick={props.onAdd} />
        
    </header>
    )
}

Header.defaultProps={
    title :'Task Tracker'
}
//CSS in JS
// const headingStyle={
//     color:"red",
//     backgroundColor:"yellow"
// }

Header.prototype={
    title:PropTypes.string.isRequired,
}
export default Header