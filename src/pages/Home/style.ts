import styled from "styled-components";
import theme from "../../global/styles/theme";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(theme.colors.DARKER_GRAY)};
  
`

export const CreateNewTopicContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  padding: 20px 10px;
  width: 90%;

  & > h2 {
    color: ${(theme.colors.BLACK)};
  }
`

export const NewTopicForm = styled.form`
  border-radius: 8px;
  padding: 10px 0;
`

export const NewTopicTitle = styled.input`
  border: none;
  width: 90%;
  border-bottom: 1px solid ${(theme.colors.LIGHTER_GRAY)};
  font-size: 1rem;
  outline: none;
  border-radius: 5px;
  padding: 8px;
  margin-bottom: 10px;
`
export const NewTopicContent = styled.textarea`
  border: 1px solid ${(theme.colors.LIGHTER_GRAY)};
  resize: none;
  width: 90%;
  height: 200px;
  font-size: 1rem;
  margin-bottom: 10px;
  border-radius: 10px;
  padding: 8px;
`

export const NewTopicButton = styled.button`
  border-radius: 10px;
  border: none;
  background-color: ${(theme.colors.MAIN_BLUE)};
  color: ${(theme.colors.WHITE)};
  font-family: ${(theme.fonts.MAIN_FONT_BEBAS_NEUE)};
  font-size: 1.1rem;
  text-align: center;
  padding: 5px 10px;
  cursor: pointer;
`

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  align-items: center;

  & > h2 {
    font-size: 28px;
    text-decoration: underline;

    @media (min-width: 980px) {
      font-size: 33px;
    }
  }

  & > button{
    border-radius: 10px;
    border: 1px solid  ${(theme.colors.BLACK)};
    background-color: ${(theme.colors.MAIN_BLUE)};
    color: ${(theme.colors.WHITE)};
    font-family: ${(theme.fonts.MAIN_FONT_BEBAS_NEUE)};
    font-size: 1rem;
    text-align: center;
    padding: 10px;
    margin-left: 10px;
    cursor: pointer;
    transition: background-color 0.3s, background-color 0.3s;

    &:hover {
      background-color: ${(theme.colors.MAIN_BLUE)};
      color: ${(theme.colors.WHITE)};
    }

    @media (min-width: 980px) {
      padding: 15px 20px;
      color: ${(theme.colors.BLACK)};
      background-color: ${(theme.colors.WHITE)};
    }
  }
`

export const GroupCardContainer = styled.div`
  padding: 15px 10px;
  background-color: ${(theme.colors.WHITE)};
  margin: 20px 0;
  border-radius: 10px;
`

export const GroupCardList = styled.div`
  & > div {
    margin-top: 10px;
  }
`