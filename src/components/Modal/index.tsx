import { CenteredContainer, DarkBackground, ModalContainer } from "./style"

type ModalProps = {
  children?: React.ReactNode,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function Modal({children, setIsOpen}: ModalProps) {
  return (
    <>
      <DarkBackground onClick={() => { setIsOpen(false) }}/>
      <CenteredContainer>
        <ModalContainer>
          {children}
        </ModalContainer>
      </CenteredContainer>
    </>
  )
}
export default Modal