import './chart.css'
const Chart = () => {
    return ( 
        <div className="chart">
            <div className="chart-left-col">
                <div className="balance">
                    <p>Balance</p>
                    <h2>$250</h2>
                </div>
                <div className="transaction">
                    <p>Last Transaction</p>
                    <h2>$1000</h2>
                </div>
                <img src="/img/chart.svg" alt=""/>
            </div>
            <div className="chart-right-col">
                <h1>Manage your finances <br/>
                like a pro in no time</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, facere quia maxime error cum, nisi illum earum, reprehenderit dolorem atque ratione a id laborum accusantium obcaecati. Incidunt consequuntur facilis mollitia.</p>
                <div className="chart-btn"> <button>Learn More </button> <img src="/img/arrow.svg" alt=""/> <img src="/img/blob_bottom.svg" alt="" className="blob-b"/> <img src="/img/blob_top.svg" alt="" className="blob-t"/></div>
           </div>

        </div>
     );
}
 
export default Chart;