import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { memeActions } from "../../store";
import MemeTemplate from "./MemeTemplate";
import "./Memes.css";
import SelectedMemeTemplate from "./SelectedMemeTemplate";
import MemePreview from "./MemePreview";

const Memes = () => {
	const dispatch = useDispatch();
	const memeTemplates = useSelector((state) => state.memes.memeTemplates);
	const selectedMemeTemplate = useSelector((state) => {
		return state.memes.selectedMemeTemplate;
	});

	const memeGenerationProgress = useSelector(
		(state) => state.memes.memeGenerationProgress
	);

	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	useEffect(() => {
		const fetchMemeData = async () => {
			const response = await fetch(`https://api.imgflip.com/get_memes`);
			const respData = await response.json();
			dispatch(memeActions.setMemeTemplates(respData.data.memes));
		};
		fetchMemeData();
	}, [dispatch]);

	return (
		<>
			{isModalOpen && memeGenerationProgress === "template-selected" && (
				<SelectedMemeTemplate
					meme={selectedMemeTemplate}
					isOpen={isModalOpen}
					onClose={closeModal}
				/>
			)}
			{isModalOpen && memeGenerationProgress === "meme-preview" && (
				<MemePreview
					meme={selectedMemeTemplate}
					isOpen={isModalOpen}
					onClose={closeModal}
				/>
			)}
			<ul className="meme-templates-layout">
				{memeTemplates.map((meme) => (
					<MemeTemplate meme={meme} key={meme.id} onOpen={openModal} />
				))}
			</ul>
		</>
	);
};

export default Memes;
