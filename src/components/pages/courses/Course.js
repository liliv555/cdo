import React from 'react';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Course(props) {

  return (
    <div onClick={props.onClick} className={"course-card col-md"} id={props.id} >
       <img
                src={props.image}
                className='course-img'
                // onClick={props.onClick}
                // height="250"
                // className="logo d-inline-block align-center"
                // alt="Club CDO logo"
                // style={{backgroundImage: `url(${props.image})`}}
              />
      <FontAwesomeIcon icon={faArrowDown} className='arrow-down' />
    </div>
    )
}

export default Course
