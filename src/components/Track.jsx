import React from 'react'
import defaultVinyl from '../assets/vinyl_PNG111.png'

function Track({trackData}) {
  
  return (
    <tr className="table-row">
        <td className="row-image">
            {/* you can use the default image if no image is given */}
            <img src={trackData.image} alt="title" />
        </td>
        <td className="row-title">{trackData.title}</td>
        <td>{trackData.artist}</td>
        <td>{trackData.BPM}</td>
    </tr>
  )
}

export default Track