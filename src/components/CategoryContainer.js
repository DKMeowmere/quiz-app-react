import React from "react"
import { useSelector, useDispatch } from "react-redux"
import Category from "./Category"
import { startGame, setNewQuestion } from "../app/dataSlice"
export default function CategoryContainer() {
	const dispatch = useDispatch()
	const data = useSelector(state => state.data.data)
	const userCategory = useSelector(state => state.data.userCategory)
	return (
		<div className="start-game">
			<h1>Wybierz kategorie:</h1>
			<div className="category-container">
				{data.map(item => (
					<Category key={item.id} id={item.id} categoryName={item.name} />
				))}
			</div>
			<div
				className="start-game-btn"
				style={{ cursor: userCategory ? "pointer" : "not-allowed" }}
				onClick={() => {
					dispatch(startGame())
					dispatch(setNewQuestion())
				}}
			>
				Zacznij gre
			</div>
		</div>
	)
}
