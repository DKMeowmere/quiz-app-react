import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit"
import axios from "axios"
import shuffleArr from "./functions/shuffleArr"

const initialState = {
	loading: false,
	data: [],
	error: "",

	userCategory: null,
	userScore: 0,
	QUESTION_TIME_OUT: 2000,
	currentQuestion: null,
	isGameStarted: false,
	isAnwserButtonDisabled: false,
	isGameEnded: false,
	lastClickedCategoryButton: null,
}

export const fetchData = createAsyncThunk("data/fetchData", () => {
	return axios.get("http://localhost:8000/categories").then(res => res.data)
})

const dataSlice = createSlice({
	name: "data",
	initialState,
	reducers: {
		selectCategory: (state, action) => {
			//handle btn color change
			const clickedCategoryButton = action.payload.e.target
			let lastClickedCategoryButton = state.lastClickedCategoryButton
			if (lastClickedCategoryButton) lastClickedCategoryButton.style.backgroundColor = ""
			clickedCategoryButton.style.backgroundColor = "#ccc"
			state.lastClickedCategoryButton = clickedCategoryButton

			//set user category
			state.userCategory = state.data.filter(item => item.id === action.payload.id)
			state.userCategory = state.userCategory[0]
		},
		startGame: state => {
			if (!state.userCategory) return
			state.isGameStarted = true
			state.userCategory.categoryData = shuffleArr(state.userCategory.categoryData)
		},
		setNewQuestion: state => {
			if (!state.userCategory) return
			if (state.isAnwserButtonDisabled) return
			// if (state.userCategory.categoryData.length === 0) return
			const categoryData = state.userCategory.categoryData
			state.currentQuestion = categoryData[categoryData.length - 1]
			shuffleArr(state.currentQuestion.anwsers)
			state.userCategory.categoryData = categoryData.slice(0, categoryData.length - 1)
		},
		checkUserAnwser: (state, action) => {
			if (state.isAnwserButtonDisabled) return
			state.isAnwserButtonDisabled = true

			if (action.payload.anwserData.true) {
				state.userScore++
				action.payload.e.target.style.backgroundColor = "#0f0"
			} else {
				action.payload.e.target.style.backgroundColor = "#f00"
			}
		},
		enableAnwserButton: (state, action) => {
			state.isAnwserButtonDisabled = false
			action.payload.e.target.style.backgroundColor = ""
		},
		endGame: state => {
			state.isGameEnded = true
		},
		reloadGame: state => {
			state.userCategory = null
			state.userScore = 0
			state.currentQuestion = null
			state.isGameStarted = false
			state.isAnwserButtonDisabled = false
			state.isGameEnded = false
			state.lastClickedCategoryButton = null
		},
	},
	extraReducers: builder => {
		builder.addCase(fetchData.pending, state => {
			state.loading = true
		})
		builder.addCase(fetchData.fulfilled, (state, action) => {
			state.loading = false
			state.data = action.payload
			state.error = ""
		})
		builder.addCase(fetchData.rejected, (state, action) => {
			state.loading = false
			state.data = []
			state.error = action.error.message
		})
	},
})
export const { selectCategory, startGame, setNewQuestion, checkUserAnwser, enableAnwserButton, endGame, reloadGame } =
	dataSlice.actions
export default dataSlice.reducer
