import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const board_list=[
    {
      'boardNo':1,
      'title':'1번 글',
      'content': '1번글 내용',
      'writer': '김자바',
      'regDate':'2024-02-01'
    },
    {
      'boardNo':2,
      'title':'2번 글',
      'content': '2번글 내용',
      'writer': '홍길동',
      'regDate':'2024-02-02'
    },
    {
      'boardNo':3,
      'title':'3번 글',
      'content': '3번글 내용',
      'writer': '임꺽정',
      'regDate':'2024-02-03'
    },
    {
      'boardNo':4,
      'title':'4번 글',
      'content': '4번글 내용',
      'writer': '유관솬',
      'regDate':'2024-02-04'
    },
    {
      'boardNo':5,
      'title':'5번 글',
      'content': '5번글 내용',
      'writer': '세종대왕',
      'regDate':'2024-02-05'
    }
  ];

let [index_1, setIndex_1]= useState(0);
let [isShow, setIsShow]= useState(false);
  return (
    <div className="App">
      <div className='blue-header'>
        <h3>게시글</h3>
      </div>

      
      <table className='blue-table'>
        <thead>
        <tr>
          <td>글번호</td>
          <td>제목</td>
          <td>작성자</td>
          <td>작성일</td>
        </tr>
        </thead>
        <tbody>
        {
          board_list.map((board,i)=>{
            return(
              <tr>
                <td>{board.boardNo}</td>
                <td>
                  <span onClick={()=>{
                      setIndex_1(i);
                      setIsShow(true);
                    }}>{board.title}
                  </span>
                </td>
                <td>{board.writer}</td>
                <td>{board.regDate}</td>              
              </tr>
            );
          })
          
        }
        </tbody>
        
      </table>
      {
        isShow?<Detail board_list={board_list} index_1={index_1}/>:''
      }
    
     </div>
   
  );
}

// 상세 정보 컴포넌트
function Detail(props){
  
  return(
    <div> 
      <p><span>글번호:</span>{props.board_list[props.index_1].boardNo}</p>
      <p><span>제목:</span>{props.board_list[props.index_1].title}</p>
      <p><span>글내용:</span>{props.board_list[props.index_1].content}</p>
      <p><span>작성자:</span>{props.board_list[props.index_1].writer}</p>
      <p><span>작성일:</span>{props.board_list[props.index_1].regDate}</p>
    </div> 
  );
}

 
export default App;
