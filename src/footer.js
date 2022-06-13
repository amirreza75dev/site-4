import './footer.css'
const Footer = () => {
    return ( 
        <div className="container-footer">
        <div className="footer">
            <div className="left-col">
                <img src="/img/logo.svg" alt=""/>
                <small>CopyRight @ {new Date().getFullYear()}</small>
                <small>All rights reserved</small>
            </div>
            <div className="right-col">
                <p>Team</p>
                <p>services</p>
                <p>Terms of use</p>
                <p>press</p>
                <p>Projects</p>
                <p>Privacy Policy</p>
                <p>Fees</p>
                <p>Affiliate</p>
                <p>Contact us</p>
            </div>
        </div>
        </div>
     );
}
 
export default Footer;