import './main.css'
const Main = () => {
    return ( 
        <div className="main">
            <div className="main-left-col">
                <h1>
                    Smart <br/>
                    banking for <br/>
                    freelancers
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt accusamus nam animi nostrum fugiat dicta quaerat odit, iusto dolorem. Blanditiis porro, commodi voluptate quidem recusandae officia. Obcaecati laudantium sed dicta.
                </p>
                <button>Register Now </button>

            </div>
            <div className="main-right-col">
                <img src="/img/phone.svg" alt="" className="mobile" />
                <img src="./img/ring_orange.svg" alt="" className="ring"/>
                <img src="./img/message_blue.svg" alt="" className="m-blue"/>
                <img src="./img/message_pink.svg" alt="" className="m-pink"/>

            </div>



        </div>
     );
}
 
export default Main;