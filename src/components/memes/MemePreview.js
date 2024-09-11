import Modal from "../ui/Modal";

const MemePreview = ({ meme, isOpen, onClose }) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<h3>Meme Preview</h3>
			<div className="meme-preview">
				<img src={meme.url} alt={meme.name} />
				<h2 className="meme-text top-text">{meme.userInputs.topText}</h2>
				<h2 className="meme-text bottom-text">{meme.userInputs.bottomText}</h2>
			</div>
		</Modal>
	);
};

export default MemePreview;
