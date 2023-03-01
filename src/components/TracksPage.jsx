import React, { useState, useEffect } from 'react'
import Search from './Search'
import AddTrackForm from './AddTrackForm'
import TracksList from './TracksList'

function TracksPage() {
  const [tracks, setTracks] = useState([])
  const [search, setSearch] = useState("")


  useEffect(() => {
    fetch("http://localhost:8001/tracks")
      .then((r) => r.json())
      .then((data) => setTracks(data))
  },[])

  function addNewTrack(newTrack){
    setTracks([...tracks, newTrack])
  }

  function handleSearchChange(searchInput){
    setSearch(searchInput)
  }

  const tracksToDisplay = tracks.filter((track)=>{
    if(search === ""){
      return track
    }
    else{
      return (
        track.title.toLowerCase().includes(search.toLowerCase()) || track.artist.toLowerCase().includes(search.toLowerCase())
      )
    }
  })


  function deleteTrack(deletedTrack){
    const updatedList = tracks.filter((track)=>track.id !== deletedTrack.id)

    setTracks(updatedList)
  }


  return (
    <div>
      <Search handleSearchChange={handleSearchChange}/>
      <AddTrackForm addNewTrack={addNewTrack}/>
      <TracksList tracks={tracksToDisplay} deleteTrack={deleteTrack}/>
    </div>
  )
}

export default TracksPage