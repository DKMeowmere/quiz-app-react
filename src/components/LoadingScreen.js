import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { useState } from "react"
export default function LoadingScreen() {
	const loading = useSelector(state => state.data.loading)
	const [loadingMessage, setLoadingMessage] = useState("Ładowanie")
	const [dotsNumber, setdotsNumber] = useState(0)
	
	useEffect(() => {
		const loadingAnimation = () => {
			setTimeout(() => {
				if (!loading) return
				if (dotsNumber >= 3) {
					setdotsNumber(0)
					setLoadingMessage("Ładowanie")
				} else {
					setdotsNumber(dotsNumber + 1)
					setLoadingMessage(loadingMessage + ".")
				}
				loadingAnimation()
			}, 1000)
		}
		loadingAnimation()
	})

	return <h1>{loadingMessage}</h1>
}
