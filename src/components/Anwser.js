import React from "react"
import { checkUserAnwser, enableAnwserButton, endGame, setNewQuestion } from "../app/dataSlice"
import { useDispatch, useSelector } from "react-redux"
export default function Anwser({ anwser: anwserData }) {
	const dispatch = useDispatch()
	const questionTimeOut = useSelector(state => state.data.QUESTION_TIME_OUT)
	const isAnwserButtonDisabled = useSelector(state => state.data.isAnwserButtonDisabled)
	const categoryData = useSelector(state => state.data.userCategory.categoryData)

	return (
		<div
			className="anwser"
			onClick={e => {
				if (isAnwserButtonDisabled) return
				dispatch(checkUserAnwser({ e, anwserData }))
				setTimeout(() => {
					if (categoryData.length === 0) {
						dispatch(endGame())
						return
					}
					dispatch(enableAnwserButton({ e, anwserData }))
					dispatch(setNewQuestion())
				}, questionTimeOut)
			}}
		>
			{anwserData.anwser}
		</div>
	)
}
