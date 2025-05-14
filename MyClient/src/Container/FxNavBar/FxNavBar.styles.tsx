import styled from 'styled-components'

export const FxContainer = styled.div`
  width: 100vw;
  height: 70px;

  color: #FFF;
  font-size: 16px;
  font-weight: bold;

  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    filter: brightness(0.7);
  }
`
