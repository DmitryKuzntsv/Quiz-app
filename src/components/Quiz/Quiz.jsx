import './Quiz.css';
import {React, useState} from 'react';

export const Quiz = ( ) => {

const questions = [
    {
    questionImage: '',
    questionText: '',
    answerOptions: [
        {answerText: '', isCorrect: false},
        {answerText: '', isCorrect: false},
        {answerText: '', isCorrect: false},
        {answerText: '', isCorrect: false},
    ]
},
{
    questionImage: '',
    questionText: '',
    answerOptions: [
        {answerText: '', isCorrect: false},
        {answerText: '', isCorrect: false},
        {answerText: '', isCorrect: false},
        {answerText: '', isCorrect: false},
        {answerText: '', isCorrect: false},
    ]
}
]

const [currentQuestion, setCurrentQuestion] = useState(0)
const [score, setScore] = setState(0)
const [showScore, setShowScore] = useState(false)
const handleAnswerOptionClick = (isCorrect) =>{
    if (isCorrect){
        setScore(score+1)
    }
    const nextQuestion = currentQuestion+1
    if (nextQuestion < questions.length){
        setCurrentQuestion(nextQuestion)
    } else {
        setShowScore(true)
    }
}

const refresh = () =>{
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
}

    return (
        <div className="Quiz">
            <div className='quiz'>
         {
         showScore?
         <div className='sectionScore'>
            <div>Правильных ответов {score} из {questions.lenght}</div>
            <button className='button' onClick={refresh}>Пройти тест заново</button>
         </div>
         :
    <div className='quiz'>

    </div>
     }
    </div>
    </div>
  );
}