import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import  profileImg from './pic.jpg';
import  postImg from './post.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ArrowRight, Envelope, HandThumbsUp, ChatLeftText, Share } from 'react-bootstrap-icons';

import {Stack , Button} from 'react-bootstrap';


function Hi() {
  return <div>
    <Stack direction="horizontal" gap={2}>
  <Button as="a" variant="primary">
    <ArrowRight/>
    Button as link
  </Button>
  <Button as="a" variant="success">
    <Envelope/> Button as link
  </Button>
</Stack>;
    <Button>click me </Button>
       <div class="header">
        <img src={profileImg} width={200} className='img' height={250} alt=''/>
    <div class="name">Qazi Muhammad Abdullah Khan</div>
    <div class="contact">Phone: 03142135944 | Email: qabdullah245@gmail.com</div>
  </div>

  <div class="summary">
   <q> Dedicated web developer with a passion for creating user-friendly 
    <br/>and innovative web experiences. Skilled in HTML, CSS, JavaScript,<br/> 
    and modern frameworks.</q>
  </div>

  <div class="section1">
    <div class="section-title1">Skills</div>
    <div class="section-content1">
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>Firebase</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>Mongodb</li>
        <li>React</li>

      </ul>
    </div>
  </div>

  <div class="section2">
    <div class="section-title2">Education</div>
    <div class="section-content2">
    (Intermediate Pre Medical) from 5/L college North Karachi.<br/>
    Matriculation (Science) from Sindh Board of secondary Education Karachi.(2020)<br/>
    Hifzul Quran Wafaqul Madaris Alarbia Pakistan.(2019)
    </div>
     

  
    
  </div>

  </div>;
}

function Post (props) {
  return (
    <div className='post'>
      <div className='posthead'> 
        <img src={props.profileImg} width={65} height={65} alt='' />
        <div>
        <h1> {props.name} </h1>
        <div className = 'date'> {props.date} </div>
      </div>
      </div>
        <p> {props.text}</p>
        <img src={props.postImg} className='postimage' alt='' />
      <div className='postfooter'>
        <div className='button' >
          <HandThumbsUp/>like
          </div> 
          <div className='button'>
          <ChatLeftText/>comment 
          </div> 
          <div className='button'>
          <Share/>share
          </div> 
        
        
        </div>   
          
    </div>
  )
}

ReactDOM.render(
  <div>
    <Post 
  profileImg={profileImg}
  name = "ABDULLAH"
  date = "30-August-2023 5:30pm"
  text = "kuscccjklvjngrfjkvjkgjvkjnlkjvkfvndfvjvnlkfsnjsflvfdvnkfldvjfvj"
  postImg = {postImg}
    />

<Post 
  profileImg={profileImg}
  name = "ABDULLAH"
  date = "30-August-2023 5:30pm"
  text = "kuscccjklvjngrfjkvjkgjvkjnlkjvkfvndfvjvnlkfsnjsflvfdvnkfldvjfvj"
  postImg = {postImg}
   />

<Post 
  profileImg={profileImg}
  name = "ABDULLAH"
  date = "30-August-2023 5:30pm"
  text = "kuscccjklvjngrfjkvjkgjvkjnlkjvkfvndfvjvnlkfsnjsflvfdvnkfldvjfvj"
  postImg = {postImg}
   />

   </div>
,
    document.querySelector('#root'));