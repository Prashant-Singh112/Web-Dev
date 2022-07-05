import PropTypes from 'prop-types'
import Button from './Button'

const header = ({title}) => {
  
    const onClick=()=>{
        console.log('Click')
    }
  
    return (
    <header className='header'>
        <h1 style={headingstyle}>{title} </h1>
        <Button color='green' text='Hello' onClick={onClick}/>
    </header>
  )
}


header.defaultProps={
    title:'Task Tracker'
}

header.propTypes={
    title:PropTypes.string.isRequired
}

const headingstyle={
    color:'red',
    backgroundColor:'black' 
}
export default header