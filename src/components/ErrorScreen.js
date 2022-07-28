import React from 'react'
import { useSelector } from 'react-redux'
export default function ErrorScreen() {
  const error = useSelector(state => state.data.error)

  return (
    <h1>ERROR:{error}</h1>
  )
}
