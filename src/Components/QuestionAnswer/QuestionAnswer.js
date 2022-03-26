import React from 'react';
import './QuestionAnswer.css';

const QuestionAnswer = () => {
    return (
        <div className='question-answer-container'>
            <h2>What is the difference between props and state?</h2>
            <h6 className='mt-4 answer-text mb-5'>There are some differences between props and state. Props are read-only. On the other hand, State changes can be asynchronous. Props are immutable. But the state is mutable. Props allow us to pass data from one component to other components as an argument. On the other hand, State holds information about the components. Props make components reusable. But State cannot make components reusable.</h6>

            <h2>How useState() Works?</h2>
            <h6 className='mt-4 answer-text'>The useState() is a Hook that allows us to add React state to functional components. The useState() hook takes the initial state as an argument and returns an array with two items. The first item is the current state value and the second item is a function that lets us update it. React useState() hook works asynchronously. React keeps track of these state variables and confirms they stay up-to-date on next re-renders of the component. Example: const [ state, setState ] = useState(initialstate), const [ count, setCount ] = useState(0) etc.</h6>
        </div>
    );
};

export default QuestionAnswer;