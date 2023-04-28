import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoutes({user, children}) {

  if(!user) {
    return <Navigate to={"/"} />
  }

  return (
    children
  )
}
