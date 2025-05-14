import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const FxContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #FFFFFF;
  color: #666666;
  display: flex;
  flex-direction: column;
`

export const FxContent = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
`

export const FxHBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

