import React from 'react';
import { StyledModal } from '../styles/modalStyle';

  const modalMove = {
    right : '-70%'
  }

function ContentModal({modalData}) {

  return (
    <>
      <StyledModal style={modalData.isShow?
        {}
        :modalMove} >
          <h3 className='modal_title'>{modalData.data.title}</h3>

          <p className='modal_content'>{modalData.data.content}</p>

    </StyledModal>
    </>
  );
}

export default ContentModal;