import QuizContainer from "./components/QuizContainer"
import { useDispatch } from "react-redux"
import { fetchData } from "./app/dataSlice"
import { useEffect } from "react"

function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchData())
	})

	return (
		<main>
			<div className="container">
				<QuizContainer></QuizContainer>
			</div>
		</main>
	)
}

export default App
