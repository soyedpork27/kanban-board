import React, {useState} from 'react';

import { BoardWrap } from '../../styles/kanban';
import DragableBox from './DragableBox';

function Board({handleDragStart ,handleDragOver, boardType, addIssue ,issues, handleDrop}) {



  const [isOver, setIsOver] = useState(false);

  const handleZoneOver = (e) => {
    e.preventDefault();
    setIsOver(true);
    handleDragOver(boardType);
  }

  const handleZoneLeave = (e) => {
    e.preventDefault();
    setIsOver(false);
  }

  const handleZoneDrop = (e) => {
    e.preventDefault();
    setIsOver(false);
    handleDrop();
  }

  // 버튼 누르면 상위 setIssues를 호출해 배열에 값을 추가함
  const handleAddBtn = () => {
    addIssue(boardType);
  }

  return (
    <BoardWrap className='board_wrap'>
      <h4 className='board_title'>
        {boardType}
      </h4>

      <div className={`drop-zone ${boardType} ${isOver?'over_box':''}`} onDragOver={handleZoneOver} onDragLeave={handleZoneLeave} onDrop={handleZoneDrop} >

        {
          issues.map((i,idx) => <DragableBox key={boardType+idx} boardType={boardType} data={i} isOver={isOver} handleDragStart={handleDragStart}/>)
        }

      </div>

      <button type='button' className='addBtn' onClick={handleAddBtn}>추가</button>

    </BoardWrap>
  );
}

export default Board;