import React, {useContext} from 'react';

import QuizContext from '../context/QuizContext';


const Question = () => {
    const {state,} = useContext(QuizContext);
    const {currentQuestion, questions} = state;
    const question = questions[currentQuestion];

    return (
        <img src={require(`../images/${question.question}.png`) } style={{width:200}} />
        // <img src={require(`../images/${question.question}.png`) } style={{width:300, height:300}} />
        // <h1>{question.question}</h1>
    );
};

export default Question;