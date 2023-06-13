import './Quiz.css';
import {React, useState} from 'react';

export const Quiz = ({questions, hideTest}) => {
 

const [currentQuestion, setCurrentQuestion] = useState(0)
const [score, setScore] = useState(0)
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
            {
                (score >= (0.6*questions.length))?
                <>
                    <h3>Молодец!</h3>
                    <img className='image' src='https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWJhMzEyZmVmODVkZjYwZWZlYTAwYmM1NGQzOGZhOTQzMjBiZmMyMSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/3oEduKoCblNVAgAbYI/giphy.gif'/>
                </>
                :
                <>
                    <h3>Давай заново!</h3>
                    <img className='image' src='https://media.tenor.com/z-gRUFYtH0sAAAAC/%D0%B1%D0%B5%D0%B7_%D0%BD%D0%B5%D0%B3%D0%B0%D1%82%D0%B8%D0%B2%D1%87%D0%B8%D0%BA%D0%B0_%D0%B3%D0%B0%D0%B9%D1%81.gif'/>
                </>
            }
            <div>Правильных ответов {score} из {questions.length}</div>
            <button className='button' onClick={ refresh }>Пройти тест заново</button>
            <button className='button' onClick={ hideTest }>Вернуться к выбору теста</button>
         </div>
         :
    <div className='quiz'>

        <div className='questionSection'>
            <img className='image' src= {questions[currentQuestion].questionImage} alt='Image'/>
            <div className='questionCount'>
                <span>Вопрос {currentQuestion +1}</span>/{questions.length}
            </div>
            <div className='questionText'>
                {questions[currentQuestion].questionText}
        </div>
        <div className='answerSection'>
            {questions[currentQuestion].answerOptions.map((item)=>(
                <button
                onClick={()=>handleAnswerOptionClick(item.isCorrect)}
                className={'button'}
                >{item.answerText}</button>
            ))}
    </div>
    </div>
        
    </div>
    
     } 
    </div>
    </div>
  );
}
