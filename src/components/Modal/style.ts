import styled from "styled-components";

export const DarkBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
  z-index: 0;
  top: 0;
  position: absolute;
`
export const CenteredContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const ModalContainer = styled.div`
  background: white;
  color: white;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90vw;

  @media (min-width: 980px) {
    width: auto;
  }
`