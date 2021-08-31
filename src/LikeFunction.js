import { useState } from 'react';
import './LikeFunction.css';


function LikeFunction() {
    const [count, setCount] = useState(0);
    return (
        <button className="like-button"  onClick={() => {setCount(prev => prev + 1)}}>Like {count}</button>
    );
}

export default LikeFunction;