import { useCallback, useState } from 'react';
import QUESTIONS from '../questions';
import quizCompleteImg from '../assets/quiz-complete.png'
import QuestionTimer from './QuestionTimer';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const currentQuestionIndex = userAnswers.length;
  
  
  const quizIsComplete = userAnswers.length === QUESTIONS.length;
  
  if (quizIsComplete) {
    return <div id="summary">
      <img src={quizCompleteImg} alt="trophy icon" />
      <h2>quiz completed!</h2>
    </div>
  }
  
  const shuffledAnswers = [...QUESTIONS[currentQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
      setUserAnswers((prevState) => {
        return [...prevState, selectedAnswer]
      })
    }, [])

  const handleSelectSkip = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer 
        key={currentQuestionIndex} 
        timeout={10000} 
        onTimeout={handleSelectSkip}/>
        <h2>{QUESTIONS[currentQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => {
            return <li key={answer} className='answer'>
              <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
            </li>
          })}
        </ul>
      </div>
    </div>
  );
}