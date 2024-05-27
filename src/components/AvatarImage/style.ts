import styled from "styled-components";
import theme from "../../global/styles/theme";

export const AvatarPictureContainer = styled.img`
  border-radius: 50%;
  border: 3px solid ${(theme.colors.MAIN_BLUE)};
  width: 45px;
  height: 44px;

  @media (min-width: 980px) {
    width: 60px;
    height: 60px;
  }
`