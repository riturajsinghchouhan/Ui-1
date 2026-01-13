
import React from "react"
import {Bookmark, TextAlignCenterIcon} from 'lucide-react'
const Card = (props)=>{
    
    return (<>
    <div className='card'>
      <div>
        <div className="top">
            <img src={props.img} alt="" />
            <button>Save<Bookmark size={10}/></button>
        </div>
        <div className="center">
        <h3>{props.company} <span>{props.time}</span></h3>
        <h2>{props.role}</h2>
        <div className="tag">
        <h4>{props.tag1[0]}</h4>
        <h4>{props.tag1[1]}</h4>
         </div>
      </div>
  </div>
      <div className="bottom">
        <div>
          <h3>{props.salary}</h3>
          <p>{props.location}</p>
        </div>
        <button>Apply Now</button>
      </div>
      
    </div>
    </>)
}
export default Card