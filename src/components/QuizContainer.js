import React from "react"
import AnwsersContainer from "./AnwsersContainer"
import Question from "./Question"
// import QuizImage from "./QuizImage"
import { useSelector } from "react-redux"
import LoadingScreen from "./LoadingScreen"
import ErrorScreen from "./ErrorScreen"
import CategoryContainer from "./CategoryContainer"
import QuizAdditionalFunctions from "./QuizAdditionalFunctions"
import EndGameScreen from "./EndGameScreen"
export default function QuizContainer() {
	const isLoading = useSelector(state => state.data.loading)
	const error = useSelector(state => state.data.error)
	const isGameStarted = useSelector(state => state.data.isGameStarted)
	const isGameEnded = useSelector(state => state.data.isGameEnded)
	return (
		<>
			{isLoading && <LoadingScreen />}
			{!isLoading && !error && !isGameStarted && <CategoryContainer />}
			{!isLoading && !error && isGameStarted && !isGameEnded && (
				<div className="quiz-container">
					<Question />
					{/* <QuizImage />  */}
					<AnwsersContainer />
					<QuizAdditionalFunctions />
				</div>
			)}
			{!isLoading && !error && isGameEnded && <EndGameScreen />}
			{error && <ErrorScreen />}
		</>
	)
}
