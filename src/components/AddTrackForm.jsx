import React, { useState } from 'react'

function AddTrackForm({ addNewTrack }) {

  const [newTrackForm, setNewTrackForm] = useState({
    title: "",
    artist: "",
    BPM: 0,
    image: ""
  })

  function handleFormChange(event) {
    const key = event.target.name
    const value = event.target.value

    setNewTrackForm({
      ...newTrackForm,
      [key]: value
    })
  }

  function handleFormSubmit(event) {
    event.preventDefault()
    console.log(newTrackForm)

    fetch("http://localhost:8001/tracks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: newTrackForm.title,
        artist: newTrackForm.artist,
        BPM: parseInt(newTrackForm.BPM),
        image: newTrackForm.image
      })
    })
      .then((r) => r.json())
      .then((data) => addNewTrack(data))
  }




  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <input value={newTrackForm.image} type="text" name="image" placeholder="Image URL" onChange={handleFormChange} />
        <input value={newTrackForm.title} type="text" name="title" placeholder="title" onChange={handleFormChange} />
        <input value={newTrackForm.artist} type="text" name="artist" placeholder="Artist" onChange={handleFormChange} />
        <input value={newTrackForm.BPM} type="number" name="BPM" placeholder="BPM" step="1.00" onChange={handleFormChange} />
      </div>
      <input className="" type="submit" value="Add Track" />
    </form>
  )
}

export default AddTrackForm