import React from "react"
import Anwser from "./Anwser"
import { useSelector } from "react-redux/es/exports"
export default function AnwsersContainer() {
  const anwsers = useSelector(state => state.data.currentQuestion.anwsers)
  
	return (
    <section className="anwsers-container">
      <Anwser anwser={anwsers[0]}></Anwser>
      <Anwser anwser={anwsers[1]}></Anwser>
      <Anwser anwser={anwsers[2]}></Anwser>
      <Anwser anwser={anwsers[3]}></Anwser>
		</section>
	)
}
