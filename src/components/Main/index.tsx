import React from "react"
import { MainContainer } from "./style"

type MainProps = {
  children?: React.ReactNode
}

function Main ({children}: MainProps) {
  return (
    <MainContainer>
      {children}
    </MainContainer>
  )
}

export default Main