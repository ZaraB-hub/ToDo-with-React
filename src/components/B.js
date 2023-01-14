import React from 'react'



const B = (props) => {
    
    return (
        <button onClick={props.onClick} style={{backgroundColor:props.color}}className='btn'>{props.text}</button>

    )
}

B.defaultProps={
    color :'pink',
    text:"Add"
}


export default B