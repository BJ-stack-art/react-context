import React , { useState } from 'react';
import NewSongForm from './NewSongForm.js';

const SongList = () => {
	const  [songs , setSongs] = useState([
		{ title: 'almost home' , id: 1 },
		{ title: 'almost gosple' , id: 2 },
		{ title: 'almost wild darkness' , id: 3 },
	]);

	const addSong = (title) => {
		setSongs([...songs , {title , id: Math.random()}]);
	}

	return(
		<div className="song-list">
			<ul>
				{songs.map(song => {
					return ( <li key={song.id} >{song.title}</li> )
				})}
			</ul>
			<NewSongForm  addSong={addSong} />
		</div>
	)
}

export default SongList;