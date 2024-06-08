import styled from "styled-components";

export const Header = styled.header`

  display : flex;
  height : 60px;
  align-items : center;


  >.h1 {
    font-size : 22px;
  }
  
  >.gnb {
    margin-left : 80px;
    display : flex;

    >li {
      margin-right : 30px;
    }
  }

  .one_depth {
    font-size : 18px;
    font-weight : bold;
    line-height : 60px;
  }

  .one_depth:hover {
    color : #f00
  }

`;