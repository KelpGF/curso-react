import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Button from './Button.jsx'

import './TaskDetails.css';

const TaskDetails = () => {
    const params = useParams();

    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    };


    return ( 
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>
                    Voltar
                </Button>
            </div>
            <div className="task-details-container">
                <h1>{params.taskTitle}</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur qui eaque iusto minima omnis hic sit nemo non unde delectus, fugit illo voluptatibus doloribus temporibus aspernatur rerum doloremque quaerat at.
                </p>
            </div>
        </>
    );
}

export default TaskDetails;