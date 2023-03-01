import React from 'react'
import defaultVinyl from '../assets/vinyl_PNG111.png'

function Track({ trackData, deleteTrack }) {

  function handleDelete() {
    fetch(`http://localhost:8001/tracks/${trackData.id}`, {
      method: "DELETE"
    })

    deleteTrack(trackData)

  }


  return (
    <tr className="table-row" style={{ textAlign: "center", verticalAlign: "middle" }}>
      <td className="row-image" onClick={handleDelete}>
        <img src={trackData.image} alt="title" />
      </td>
      <td className="row-title">{trackData.title}</td>
      <td>{trackData.artist}</td>
      <td>{trackData.BPM}</td>
    </tr>

  )
}

export default Track