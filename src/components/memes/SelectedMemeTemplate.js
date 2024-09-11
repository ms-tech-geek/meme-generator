import { useRef } from "react";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { memeActions } from "../../store";


const SelectedMemeTemplate = ({ meme, isOpen, onClose }) => {
	const { url, name } = meme;
	const topRef =  useRef();
	const bottomRef =  useRef();
	const dispatch = useDispatch();
	
	const onSubmitHandler = (event) => {
		event.preventDefault();
		dispatch(memeActions.addCaptionsToSelectedTemplate({
			topText : topRef.current.value,
			bottomText: bottomRef.current.value
		}))
	}

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<div className="selected-meme-template">
				<h3>Selected Meme Template</h3>
				<div>
					<form onSubmit={onSubmitHandler}>
						<input type="text" ref={topRef} placeholder="Add Top Text" />
						<img src={url} alt={name} />
						<input type="text" ref={bottomRef} placeholder="Add Bottom Text" />
						<button>Generate Meme</button>
					</form>
				</div>
			</div>
		</Modal>
	);
};

export default SelectedMemeTemplate;
