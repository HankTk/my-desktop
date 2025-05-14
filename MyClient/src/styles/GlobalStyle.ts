import styled, {createGlobalStyle, keyframes} from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: #E1E1E6;
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

export const FxFullContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #FFFFFF;
  color: #666666;
  display: flex;
  flex-direction: column;
`

export const FxContent = styled.div`
  width: 100%;
  height: 100%;
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

export const FxImage = styled.img`
  width: 240px;
  animation: ${rotate} 15s linear infinite;
`

export const FxText = styled.p`
  font-size: 18px;
`

export const FxTitlePage = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  align-items: flex-start;
  height: 60px;
  padding: 8px;
  border-bottom: 1px solid #EAEAEA;
  margin-bottom: 16px;
`

export const FxLinkButtonPrimary = styled.div`
  color: #FFFFFF;
  border: solid 1px #1976d2;
  border-radius: 4px;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  font-weight: 600;
  background-color: #eff6ff;
`

export const FxLinkButtonSecondary = styled.div`
  color: #666666;
  border: solid 2px #444444;
  border-radius: 4px;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  font-weight: 600;
  background-color: #dedede;
`

export const FxVBoxMenu = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 16px;
  margin-right: 16px;
  padding-right: 16px;
  border-right: 1px solid #EAEAEA;
`
