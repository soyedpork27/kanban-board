import React, {useState} from 'react';
import Board from './Board';
import ContentModal from '../ContentModal';

function Kanban(props) {

  const status = [
    {
      type : 'undo',
    },
    {
      type : 'progress',
    },
    {
      type : 'done',
    }
  ];

  const [issues, setIssues] = useState({
    undo : [
      {
        id : 'undo-1',
        title : '첫 번째 이슈입니다.',
        content : '임의로 적은 내용입니다. 언제든 삭제 가능합니다.'
      },
      {
        id : 'undo-2',
        title : '두 번째 이슈입니다.',
        content : '임의로 적은 내용입니다. 언제든 삭제 가능합니다.'
      }
    ],
    progress : [
    
    ],
    done : [

    ]
  });

  const [dragged, setDragged] = useState({
    title: '',
    content : ''
  });

  const [leave, setLeave] = useState('');

  // 드래그 시작될때 이벤트 함수 몇 번째 값인지도 알아야함
  const handleDragStart = (type, issue) => {
    setLeave(type);
    setDragged({...issue});
  }
  

  // 드래그 오버 시 결정되며, 드롭 시 해당 스테이트로 값을 추가해야한다.
  const [dropZone, setDropZone] = useState('');

  const handleDragOver = (type) => {
    console.log(type + '오버됨');

    // 드롭 위치 타입을 정하면 됨
    setDropZone(type);
  }

  // 드래그 드롭 시 위치를 변환하는 함수
  const handleDrop = () => {
    if(dropZone === leave){
      // alert('같은곳 드롭 setIssues 실행 안해야함');
      return ;
    }
    setIssues((prev) => {
      const reviseIssue = {...dragged};
      const removedArr = [...prev[`${leave}`]].filter((i) => (i.id!==reviseIssue.id)).map((i,idx) => ({...i,id:leave+'-'+parseInt(idx+1)}));
      const addedArr = [...prev[`${dropZone}`]];

      reviseIssue.id = dropZone+'-'+parseInt(issues[`${dropZone}`].length+1);

      addedArr.push(reviseIssue);

      return {...prev, [leave] : removedArr, [dropZone] : addedArr}
    });

  }

  const addIssue = (type) => {
    setIssues((prev) => {
      const data = {
        id : type+'-'+parseInt(prev[`${type}`].length+1),
        title : '제목을 작성해주세요',
        content : '내용을 작성해주세요'
      };

      const addedArr = [...prev[`${type}`], {...data}];

      return {...prev, [type] : addedArr};

    });
  }


  const [modalData,setModalData] = useState({
    isShow : false,
    data : {
      title : '두 번째 이슈입니다.',
      content : '임의로 적은 내용입니다. 언제든 삭제 가능합니다.'
    }
  });

  return (
    <>
      <h2>
        칸반보드
      </h2>

      <section className='kanban_wrap'>
        {/* <h3 className='hide'>칸반보드 섹션</h3> */}
        {/* 여기서부터 칸반보드를 이루는 박스 3개 */}

        {status.map((i,idx) => (<Board key={i.type+idx} handleDragStart={handleDragStart} handleDragOver={handleDragOver} boardType={i.type} issues={issues[`${i.type}`]} handleDrop={handleDrop} addIssue={addIssue} />))}

      </section>

      {dropZone}

      <ContentModal modalData={modalData} />
      <button onClick={()=>setModalData(prev=>({...prev,isShow : !prev.isShow}))}>모달</button>
    </>
  );
}

export default Kanban;