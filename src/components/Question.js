import React from "react"
import { useSelector } from "react-redux/es/exports"
export default function Question() {
	const question = useSelector(state => state.data.currentQuestion.question)
	return (
		<header className="question-container">
			<h1 className="question-text">
				{question}
			</h1>
		</header>
	)
}
