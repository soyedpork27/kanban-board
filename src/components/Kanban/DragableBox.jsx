import React, { useState } from 'react';

function DragableBox({isOver ,boardType , data, handleDragStart}) {

  const handleListDragStart = (e) => {
    handleDragStart(boardType,data);
  }

  const handleClick = () => {

  }


  return (
    <article className={`issue ${boardType} ${isOver?'over_list':''}`} draggable onDragStart={handleListDragStart} onClick={handleClick} >
      <h5 className={`issue_title`}>
        {data.title}
        <span>
          {data.id}
        </span>
      </h5>
      <p className={`issue_content`}>
        {data.content}
      </p>
    </article>
  );
}

export default DragableBox;