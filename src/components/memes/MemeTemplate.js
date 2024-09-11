import { useDispatch } from "react-redux";
import { memeActions } from "../../store";
import "./Memes.css";

const MemeTemplate = ({ meme, onOpen }) => {
	const dispatch = useDispatch();

	const selectMemeTemplateHandler = () => {
		dispatch(
			memeActions.onSelectMemeTemplate({
				id: meme.id,
				name: meme.name,
				url: meme.url,
			})
		);
		dispatch(memeActions.setMemeGenerationProgress('template-selected'))
		onOpen()
	};

	return (
		<li
			className="meme-template"
			onClick={selectMemeTemplateHandler}
		>
			<img src={meme.url} alt={meme.name} />
			<p className="meme-template-name">{meme.name}</p>
		</li>
	);
};

export default MemeTemplate;
