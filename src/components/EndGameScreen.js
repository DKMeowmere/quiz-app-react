import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { reloadGame } from "../app/dataSlice"
export default function EndGameScreen() {
  const userScore = useSelector(state => state.data.userScore)
  const dispatch = useDispatch()
	return (
		<div className="end-game-container">
			<h1>Koniec gry</h1>
			<h1>Twój wynik: {userScore}</h1>
      <div className="reload-btn" onClick={() => {
        dispatch(reloadGame())
      }}>
				Jeszcze raz?
			</div>
		</div>
	)
}
