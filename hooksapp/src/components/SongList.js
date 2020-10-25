import React , { useState } from 'react';

const SongList = () => {
	const  [songs , setSongs] = useState([
		{ title: 'almost home' , id: 1 },
		{ title: 'almost gosple' , id: 2 },
		{ title: 'almost wild darkness' , id: 3 },
	]);

	const addSong = () => {
		setSongs([...songs , {title: 'new song' , id: Math.random()}]);
	}

	return(
		<div className="song-list">
			<ul>
				{songs.map(song => {
					return ( <li key={song.id} >{song.title}</li> )
				})}
			</ul>
			<button onClick={addSong} >Add a song</button>
		</div>
	)
}

export default SongList;