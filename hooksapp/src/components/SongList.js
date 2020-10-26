import React , { useState , useEffect } from 'react';
import NewSongForm from './NewSongForm.js';

const SongList = () => {
	const  [songs , setSongs] = useState([
		{ title: 'almost home' , id: 1 },
		{ title: 'almost gosple' , id: 2 },
		{ title: 'almost wild darkness' , id: 3 },
	]);
	const [age , setAge] = useState(20);

	const addSong = (title) => {
		setSongs([...songs , {title , id: Math.random()}]);
	}

	useEffect(() => {
		console.log('useeffect hooks ran' , songs);
	} , [songs])

	useEffect(() => {
		console.log('useeffect hooks ran' , age);
	} , [age])

	return(
		<div className="song-list">
			<ul>
				{songs.map(song => {
					return ( <li key={song.id} >{song.title}</li> )
				})}
			</ul>
			<NewSongForm  addSong={addSong} />
			<button onClick={() => setAge(age + 1) } >Add 1 to age : {age} </button>
		</div>
	)
}

export default SongList;