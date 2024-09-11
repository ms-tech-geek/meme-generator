import "./Memes.css";

const MemeTemplate = ({ meme }) => {
	return (
		<li key={meme.id} className="meme-template">
			<img src={meme.url} alt={meme.name}/>
			<p className="meme-template-name">{meme.name}</p>
		</li>
	);
};

export default MemeTemplate;
