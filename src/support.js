import './support.css'
const Support = () => {
    return ( 
        <div className="support">
            <div className="support-detail">
                <h1>We support you in 5 <br/>
                different languages
                </h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi at accusamus, itaque reiciendis animi, suscipit ea consectetur perferendis necessitatibus veritatis aut cumque omnis maiores eveniet facilis quos, voluptatum eos alias!</p>
                <div className="avatars">
                    <img src="/img/avatar1.svg" alt="" className="avatar1"/>
                    <img src="/img/avatar2.svg" alt="" className="avatar2"/>
                    <img src="/img/avatar3.svg" alt="" className="avatar3"/>
                    <img src="/img/avatar4.svg" alt="" className="avatar4"/>
                    <img src="/img/avatar5.svg" alt="" className="avatar5"/>
                    <p> +25 </p>
                </div>

            </div>
            <img className="message" src="/img/conversation.svg" alt=""/>

            <img src="/img/bg_circles.svg" alt="" className="circle1"/>
            <img src="/img/bg_circles.svg" alt="" className="circle2"/>

        </div>
     );
}
 
export default Support;