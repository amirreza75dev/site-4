import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import './questions.css'

const QuestionItems = (props) => {
    const [icon,setIcon] = useState(false)
    const handleState=()=>{
        setIcon(!icon)
        console.log("hi");
    }
    return ( 
        <div className="question-items">
            <h2>{props.text}</h2>
            <div className="item-icon" >
                {icon ? <RemoveIcon onClick={handleState} />  : <AddIcon onClick={handleState} />}



            </div>
            {icon && <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti corrupti, laudantium consequuntur nemo obcaecati nihil ipsa nisi dolorem ab unde.</p>}

            

        </div>
     );
}
 
export default QuestionItems;