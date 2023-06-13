import './App.css';
import { Quiz } from './components/Quiz/Quiz';
import { QuizPanel } from './components/QuizPanel/QuizPanel';
import {React, useState} from 'react';
import { Header } from './components/Header/Header';
import { Register } from './components/Register/Register';
import { Main } from './components/Main/Main';
import {Routes, Route} from 'react-router-dom';

function App() {
const  quizArr = [{
  quizImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW_80qC5-H2vTGaQVHDv1DzLGZXi3W_7PMvA&usqp=CAU',
  quizName: 'Тест на реального сигму', 
questions: [
  {
  questionImage: 'https://storage.yandexcloud.net/imagesspletnikru/p/phvgfLTaSG/fit=contain,width=1011,height=700,dpr=2.webp',
  questionText: 'Лучший фильм с Райном Гослингом',
  answerOptions: [
      {answerText: 'Драйв', isCorrect: false},
      {answerText: 'Бегущий по лезвию 2049', isCorrect: false},
      {answerText: 'Барби', isCorrect: true},
      {answerText: 'Игра на понижение', isCorrect: false},
  ]
},
{
  questionImage: 'https://stihi.ru/pics/2016/07/17/1627.jpg',
  questionText: 'Небо...',
  answerOptions: [
      {answerText: 'Голубое', isCorrect: false},
      {answerText: 'Ясное', isCorrect: false},
      {answerText: 'Как кофе', isCorrect: true},
      {answerText: 'Июльское', isCorrect: false},
  ]
},
{
  questionImage: 'https://media.tenor.com/kzwbaa-Gg2QAAAAd/women-hahaha-women-memes.gif',
  questionText: 'Женщина?',
  answerOptions: [
      {answerText: 'Что это?', isCorrect: false},
      {answerText: 'Никогда не слышал о таком', isCorrect: true},
      {answerText: 'Да.', isCorrect: false},
      {answerText: 'Нет.', isCorrect: false},
  ]
},
]
},
{
  quizImage: 'https://memepedia.ru/wp-content/uploads/2022/10/memy-s-dubom-28.jpg',
  quizName: 'Тест на мудрый дуб', 
questions: [
  {
  questionImage: 'https://memepedia.ru/wp-content/uploads/2022/10/memy-pro-dub.jpg',
  questionText: 'Что это?',
  answerOptions: [
      {answerText: 'Друид', isCorrect: false},
      {answerText: 'Энт', isCorrect: false},
      {answerText: 'Мудрое дерево дуба', isCorrect: true},
  ]
},
{
  questionImage: 'https://memepedia.ru/wp-content/uploads/2022/10/memy-s-dubom-18.jpg',
  questionText: 'Кто это?',
  answerOptions: [
      {answerText: 'Дмитрий Дубиев', isCorrect: true},
      {answerText: 'Дай пж 2 рубля', isCorrect: false},
      {answerText: 'Купи симку МТС', isCorrect: false},
  ]
},
{
  questionImage: 'https://memepedia.ru/wp-content/uploads/2022/10/memy-s-dubom-17.jpg',
  questionText: 'Кто победит?',
  answerOptions: [
      {answerText: 'Сигма', isCorrect: false},
      {answerText: 'Дубъ', isCorrect: true},
  ]
},
{
  questionImage: 'https://memepedia.ru/wp-content/uploads/2022/10/memy-s-dubom-1.jpg',
  questionText: 'Что это за фильм?',
  answerOptions: [
      {answerText: 'Бегущий по лезвию 2049', isCorrect: false},
      {answerText: 'Биография Райана Гослинга', isCorrect: true},
      {answerText: 'Мечтают ли нейросети об электродубах?', isCorrect: false},
  ]
},
{
  questionImage: 'https://memepedia.ru/wp-content/uploads/2022/10/memy-s-dubom-27.jpg',
  questionText: 'Что с ним сделать?',
  answerOptions: [
      {answerText: 'Дать леща', isCorrect: false},
      {answerText: 'Сломать колени', isCorrect: true},
      {answerText: 'Вырвать', isCorrect: false},
      {answerText: 'Оставить как есть и стать пятикантропом', isCorrect: true},
  ]
},
{
  questionImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOZu9gQBlJ0wJxMOkI3JZuO15b53wOm5xPPf1-5v1Q3h9-cElw4c7wrrmVbOT2ONo9rZA&usqp=CAU',
  questionText: '?',
  answerOptions: [
      {answerText: '*_*', isCorrect: false},
      {answerText: '@_@', isCorrect: true},
      {answerText: 'O_O', isCorrect: false},
  ]
},
{
  questionImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMba3pOSc2xUr2w9so3GWcshRrJe_DBoG8wxPKNvnGRYkkolU3tfL6QMvwZs5I5dfdYcE&usqp=CAU',
  questionText: '?',
  answerOptions: [
      {answerText: 'Волтер, убери свою ветку', isCorrect: true},
      {answerText: 'Майк Дубмантраут', isCorrect: false},
      {answerText: 'waltuh', isCorrect: false},
      {answerText: 'Jesse, jesse, JESSE!'}
  ]
},
]
},
]
  const [quizVisibility, setQuizVisibility] = useState(false)
  const [tTest, setTTest] = useState([])
  const showTest = (elem) =>{
    setQuizVisibility(true)
    setTTest(elem.questions)
  }
  const hideTest = () =>{
    setQuizVisibility(false)
     
  }

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/test' element= { <>
      
      {quizVisibility?
        <Quiz questions={tTest} hideTest = {hideTest}/>
        :
        <div className='panel'>
          {quizArr.map((elem) =>
             <QuizPanel
              image = {elem.quizImage}
              name = {elem.quizName}
              showTest = {() => showTest(elem)}
            />
            )}
          </div>
        }</>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/' element={<Main/>}/>
      </Routes>
    </div>
  );
}


export default App;
