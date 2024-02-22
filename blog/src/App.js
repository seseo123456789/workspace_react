import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  //let title = '첫번째 글';

  let arr = [1,2];
  let num1 =arr[0];
  let num2 =arr[1];

  let [a,b]=[5,2];
  
  console.log(a); // -> 5 출력
  console.log(b);


  // state 변수
  //useState로 사용한 것만 변경됨
  let [title, setTitle] = useState(['리액트학습', '울산 맛집', '겨울 코트추천']); 
  let [likeCnt, setLikeCnt]= useState([0,0,0]);
  let [isShow, setIsShow]= useState(false);
  // let title ='첫번째 글'
 

  //  function aaa(){
  //    let aa=[1,2]
  //   return aa;
  //  }

  //  let [a,b] = aaa();
  //  = let [a,b] = [1,2]

  //()=> {console.log(1)} = function(){}

 
//[...title] 배열 그대로 복사
  return (
    <div className="App">
      <div className='black-nav'>
        <h4>블로그</h4>
      </div>

      <button type='button' onClick={() =>{
          let title2= [...title]; 
          title2[0]='남자 코트 추천';
          setTitle(title2);
      }}>글 변경</button>

      
     
      
      {
          title.map((e,i)=>{
              return(
                <List key={i} title={e} likeCnt={likeCnt} idx={i} setLikeCnt={setLikeCnt} setIsShow={setIsShow}/>
              );
          })
      }
    
    {
      isShow?<Detail/> : ''
    }


    </div>
  );
}
// title.map((e,i)=>{}); = title.foreach(funciton(e,i){}); title에 있는 자료들을 하나씩 뺀게 e
// 블로그 글 하나하나를 표현하는 컴포넌트
function List(props){
  return(
    <div className='list'>
        <h4><span onClick={()=>{
          
          props.setIsShow(true);
        }}>{props.title}</span>

          <span onClick={()=>{
            let copyLikeCnt =[...props.likeCnt];
            copyLikeCnt[props.idx]++;
            props.setLikeCnt(copyLikeCnt);

          }}>👍</span>{props.likeCnt[props.idx]}</h4>
        <p>2024-02-19 작성</p>
      </div>
  );
}

// 상세정보를 표현하는 컴포넌트
function Detail(){
  return(
    <div className='detail'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  );
}

export default App;
