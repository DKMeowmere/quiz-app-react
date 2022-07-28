import React from "react"
import { useDispatch} from "react-redux"
import { selectCategory } from "../app/dataSlice"
export default function Category({ id, categoryName }) {
	const dispatch = useDispatch()
	return (
		<div className="category" onClick={e => dispatch(selectCategory({ id, e }))}>
			{categoryName}
		</div>
	)
}
