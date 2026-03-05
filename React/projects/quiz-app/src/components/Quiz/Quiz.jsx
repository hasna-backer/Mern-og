import {useState} from 'react'
import './Quiz.css'
import {data} from '../../assets/data'
const Quiz = () => {

let [index,setIndex]=useState(0)
let [question,setQuestion]=useState(data[index])
console.log(typeof question);


  return (
	<>
	 <div className="container">
		
		<h1>Quiz App</h1>
		<h2>{index+1}.{question.question}</h2>
		<ul>
			{
				
			}
		</ul>
		<ul>
			<li>answer1</li>
			<li>answer2</li>
			<li>answer3</li>
			<li>answer4</li>
		</ul>
		<button>Next</button>
		<div className="index">1 of 5 questions</div>
	 </div>
	</>
  )
}

export default Quiz
