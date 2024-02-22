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

  //input 태그에 입력한 값을 저장하고 있는 state 변수 (input 태그는 문자열로 받기때문에 빈문자'' 초기화)
  let[newTitle, setNewTitle] = useState('') 

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
                <List key={i} setTitle={setTitle} title={title} likeCnt={likeCnt} idx={i} setLikeCnt={setLikeCnt} setIsShow={setIsShow}/>
              );
          })
      }

      <div>
        <input type='text' onChange={(e)=>{
          //  input 태그에 입력한 값을 출력
            //console.log(e.target.value)
          newTitle = setNewTitle(e.target.value)
        }}/>
        <input type='button' value={'저장'} onClick={(i)=>{
          let copyTitle =[...title];
          //copyTitle.push(newTitle)
          //unshift: 맨위에뜨기
          copyTitle.unshift(newTitle)
          setTitle(copyTitle);
          
        }}/>
      </div>  
      
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
        }}>{props.title[props.idx]}</span>

          {/* <span onClick={()=>{
            let copyLikeCnt =[...props.likeCnt];
            copyLikeCnt[props.idx]++;
            props.setLikeCnt(copyLikeCnt);

          }}>👍</span>{props.likeCnt[props.idx]} */}
          </h4>
        <p>2024-02-19 작성</p>
        <button type='button' onClick={(e) =>{
            let copyTitle=[...props.title]
            copyTitle.splice(props.idx,1)
            props.setTitle(copyTitle)
            
        }}>삭제</button>
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
