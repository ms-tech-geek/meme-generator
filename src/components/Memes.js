import { useEffect, useState } from "react";
import './Memes.css';

const MemeCard = ({meme}	) => {
	return (
		<li key={meme.id} className='meme-card'>
			<p className='meme-card-name'>{meme.name}</p>
			<img src={meme.url} />
		</li>
	);
};

const Memes = () => {
	const [memes, setMemes] = useState([]);

	useEffect(() => {
		const fetchMemeData = async () => {
			const response = await fetch(`https://api.imgflip.com/get_memes`);
			const respData = await response.json();
			setMemes(respData.data.memes);
		};
		fetchMemeData();
	}, []);

	return (
		<ul className="meme-card-layout">
			{memes.map((meme) => (
				<MemeCard meme={meme} key={meme.id} />
			))}
		</ul>
	);
};

export default Memes;
