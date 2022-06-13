import QuestionItems from './questionItems'
import './questions.css'
const Questions = () => {
    return ( 
        <div className="questions">
            <div className="question-header">
                <h1>Frequenntly <span> asked questions </span></h1>
                <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, non sint fuga accusamus velit illo aspernatur nostrum, quis quo eum numquam officia? Sapiente illo dolores modi minima! Incidunt, pariatur omnis!</small>
            </div>
            <img src="/img/lines.svg" alt=""/>
            <div className="question-box">
                <QuestionItems text = "how can open a draft account?" />
                <QuestionItems text = "what if i withdraw money abroad?" />
                <QuestionItems text = "what happens when my subscription ends?" />
                <QuestionItems text = "is this service better than Youbay?" />
                <QuestionItems text = "what happens if i withdraw more than #250?" />
                

            </div>

        </div>
     );
}
 
export default Questions;