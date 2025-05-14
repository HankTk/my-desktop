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
  width: 100%;
  height: 100%;
  background-color: #FFFFFF;
  color: #666666;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`

export const FxContent = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 300px 1fr;
`

export const FxVBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const FxHBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

export const Image = styled.img`
  width: 240px;
  animation: ${rotate} 15s linear infinite;
`

export const Text = styled.p`
  font-size: 18px;
`
