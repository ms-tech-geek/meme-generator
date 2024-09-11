import Modal from "../ui/Modal";
import MemeTemplate from "./MemeTemplate";

const SelectedMemeTemplate = ({ meme, isOpen, onClose }) => {
	return (
	  <Modal isOpen={isOpen} onClose={onClose}>
		<div className="selected-meme-template">
		<h4>Selected Meme Template</h4>
		  <div
			className="selected-meme-template"
		>
			<img src={meme.url} alt={meme.name} />
		</div>
		  {/* Add your input fields and generate button here */}
		</div>
	  </Modal>
	);
  };

export default SelectedMemeTemplate;
