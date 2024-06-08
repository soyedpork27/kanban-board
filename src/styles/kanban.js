import styled from "styled-components";

export const BoardWrap = styled.div`

  width : calc((100% - 32px) / 3);
  border : 1px solid #000;
  border-radius : 10px;
  box-sizing : border-box;
  padding : 16px;
  
  position : relative;

  background-color : #020408;

  >.board_title{
    margin-bottom : 8px;
  }

  >.drop-zone{
    width : 100%;
    min-height : 200px;
    height : calc(100% - 72px);
    board : 1px solid #000;
    box-sizing : border-box;
    border-radius : 10px;
    padding : 8px;
  }

  .drop-zone::after{
    display : block;
    content : '';
    width : 100%;
    height : 40px;
  }

  >.drop-zone.over_box {
    background-color : #383D46;
  }

  .addBtn {
    width : calc(100% - 16px);
    height : 40px;
    position : absolute;
    left : 8px;
    bottom : 8px;
    border : none;
    background : none;
    background-color : #efefef;
    border-radius : 10px;
    color : #000;

    cursor : pointer;
  }

  .issue {
    border-radius : 10px;
    box-sizing : border-box;
    padding : 20px 8px;

    margin-bottom : 8px;

    background-color : #161C22;
    color : #fff;

    cursor : pointer;
    box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.3);
    -webkit-box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.3);
    -moz-box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.3);


    .issue_title{
      text-indent : 8px;
      font-size : 20px;
      margin-bottom : 12px;
    }

    .issue_content {
      font-size : 12px;
    }

    /* 이슈 끝 */
  }

`;

