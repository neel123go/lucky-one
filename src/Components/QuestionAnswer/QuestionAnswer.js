import React from 'react';
import './QuestionAnswer.css';

const QuestionAnswer = () => {
    return (
        <div className='question-answer-container'>
            <h2>What is the difference between props and state?</h2>
            <h6 className='mt-4 answer-text mb-5'>There are some differences between props and state. Props are read-only. On the other hand, State changes can be asynchronous. Props are immutable. But the state is mutable. Props allow us to pass data from one component to other components as an argument. On the other hand, State holds information about the components. Props make components reusable. But State cannot make components reusable.</h6>

            <h2>How useState() Works?</h2>
            <h6 className='mt-4 answer-text'>A Hook is a special function that lets us “hook into” React features. The useState() is a Hook that allows us to have state variables in functional components. State generally refers to data or properties that need to be tracking in an application. The useState() Hook is a special function that takes the initial state as an argument and returns an array of two entries. The first element is the initial state and the second one is a function that is used for updating the state. Example: const [state, setState] = useState(initialstate), const [count, setCount] = useState(0) etc.</h6>
        </div>
    );
};

export default QuestionAnswer;