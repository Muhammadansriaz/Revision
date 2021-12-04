import React from 'react'
import PropTypes from 'prop-types';


const Parents = (props) => {
    return (
        <div>
            <h1>hello {props.name}</h1>
        </div>
    )
}
Parents.propTypes = {
    name: PropTypes.number
  }
export default Parents
