import styled from "styled-components";

export const StyledModal = styled.article`
  width : 70%;
  height : calc(100% - 60px);
  position : fixed;
  right : 0;
  top : 60px;
  background-color : #fff;
  border-radius : 20px 0 0 20px;
  transition : .3s;

  >.modal_title {
    color : #000;
  }

  >.modal_content {
    color : #000;
  }

`