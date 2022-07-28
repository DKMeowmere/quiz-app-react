import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { endGame } from "../app/dataSlice"

export default function QuizAdditionalFunctions() {
	const dispatch = useDispatch()
	const numOfQuestionRemain = useSelector(state => state.data.userCategory.categoryData.length + 1)
	return (
		<>
			<div className="numOfQuestionRemain">
				Zostało
				<span style={{ fontWeight: "900" }}> {numOfQuestionRemain} </span>
				pytań
			</div>
			<div className="end-game-btn" onClick={() => dispatch(endGame())}>Zakończ gre</div>
		</>
	)
}
