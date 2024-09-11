import { useRef } from "react";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { memeActions } from "../../store";

const SelectedMemeTemplate = ({ meme, isOpen, onClose }) => {
	const { url, name } = meme;
	const topRef = useRef("");
	const bottomRef = useRef("");
	const dispatch = useDispatch();

	const onSubmitHandler = (event) => {
		event.preventDefault();
		dispatch(
			memeActions.addCaptionsToSelectedTemplate({
				topText: topRef.current.value,
				bottomText: bottomRef.current.value,
			})
		);
		dispatch(memeActions.setMemeGenerationProgress("meme-preview"));
	};

	const addMemeTextHandler = (event) => {
		dispatch(
			memeActions.addCaptionsToSelectedTemplate({
				topText: topRef.current.value,
				bottomText: bottomRef.current.value,
			})
		);
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<div className="selected-meme-template">
				<h3>Selected Meme Template</h3>
				<div className="meme-preview">
					<h2 className="meme-text top-text">{topRef.current.value}</h2>
					<img src={url} alt={name} />
					<h2 className="meme-text bottom-text">{bottomRef.current.value}</h2>
				</div>
				<div>
					<form onSubmit={onSubmitHandler}>
						<input
							type="text"
							ref={topRef}
							onChange={addMemeTextHandler}
							placeholder="Add Top Text"
						/>
						<input
							type="text"
							ref={bottomRef}
							onChange={addMemeTextHandler}
							placeholder="Add Bottom Text"
						/>
						<button>Generate Meme</button>
					</form>
				</div>
			</div>
		</Modal>
	);
};

export default SelectedMemeTemplate;
