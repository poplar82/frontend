import qr from "./qr.svg";

function Footer() {
    return (
        <footer className="footer flex">
            <div className="container flex">
                <div>
                    Marcin Topolski &copy; All Right Reserved.
                </div>
                <div className="footer__contact">
                    <div className="footer__contact__text">
                        <p>I invite you to contact me:</p>
                        <p>e-mail: <a href="mailto:topoplskimarcin@gmail.com">topolskimarcin@gmail.com</a></p>
                    </div>
                    <img className="footer__contact__qr" src={qr} alt="kod qr"/>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
