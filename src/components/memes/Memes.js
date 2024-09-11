import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { memeActions } from "../../store";
import MemeTemplate from "./MemeTemplate";
import "./Memes.css";

const Memes = () => {
	const dispatch = useDispatch();
	const memeTemplates = useSelector((state) => state.memes.memeTemplates);

	useEffect(() => {
		const fetchMemeData = async () => {
			const response = await fetch(`https://api.imgflip.com/get_memes`);
			const respData = await response.json();
			dispatch(memeActions.setMemeTemplates(respData.data.memes));
		};
		fetchMemeData();
	}, [dispatch]);

	return (
		<ul className="meme-templates-layout">
			{memeTemplates.map((meme) => (
				<MemeTemplate meme={meme} key={meme.id} />
			))}
		</ul>
	);
};

export default Memes;
