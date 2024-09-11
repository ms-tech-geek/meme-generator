import { useEffect, useState } from "react";
import MemeTemplate from "./MemeTemplate";
import './Memes.css';


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
		<ul className="meme-templates-layout">
			{memes.map((meme) => (
				<MemeTemplate meme={meme} key={meme.id} />
			))}
		</ul>
	);
};

export default Memes;
