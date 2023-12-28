import React,{ useState } from 'react';

const TodoItem = ({ id, text, completed})=> {
    const [isChecked, setIsChecked] = useState(completed);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div>

        <h1> MY DAILY GOALS</h1>
            <input type="checkbox" checked = {isChecked} onChange= {handleCheckboxChange} />
            <span style={{ marginLeft: '10px' }}>{text}</span>
        </div>
    );
};

export default TodoItem;