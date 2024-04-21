import React, { useState } from 'react';
import './index.css';


const questions = [
  "Вопрос 1: Какой ваш уровень удовлетворенности?",
  "Вопрос 2: Как вы оцениваете качество услуги?",
  "Вопрос 3: Насколько быстро был решен ваш вопрос?",
  "Вопрос 4: Оцените ваше общее впечатление?",
  "Вопрос 5: Какова вероятность, что вы порекомендуете нас друзьям?",
];

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [jsonOutput, setJsonOutput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <div className="container mx-auto max-w-md p-4">
      <h1 className="text-2xl font-bold mb-4">{questions[currentQuestionIndex]}</h1>
      <div className="mb-4">
        {[1, 2, 3, 4, 5].map((option) => (
          <button 
            key={option} 
            onClick={() => handleAnswer(option)}
            className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
          >
            {option}
          </button>
        ))}
      </div>
      {currentQuestionIndex === questions.length - 1 ? (
        <div className="mt-4 bg-gray-200 p-4">
          <p>Результаты:</p>
          <pre>{JSON.stringify(answers, null, 2)}</pre>
        </div>
      ) : (
        <button 
          onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Следующий вопрос
        </button>
      )}
    </div>
  );
};

export default App;
