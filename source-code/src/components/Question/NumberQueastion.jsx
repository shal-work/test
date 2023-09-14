import React from 'react';
import s from './Question.module.css';

const NumberQueastion = (props) => {
    return (
        <div className={s.mainQuestion__quantity}>
            Вопрос 
            <span className="current">&ensp;{props.index}</span> 
            <span> из </span>
            <span className="total">{props.getQuantity()}</span>
        </div>
    )
}

export default NumberQueastion;