import Telegram from './telegram.png';
import Facebook from './facebook.png';
import Twitter from './twitter.png';  

export const Footer = () => {
    return (
        <footer>
            <span className="caption">
                Contact me on Telegram
                <img className="link" src={Telegram} alt="Telegram logo" />
            </span>
            <span className="caption">
                Like me on Facebook
                <img className="link" src={Facebook} alt="Facebook logo" />
            </span>
            <span className="caption">
                Follow me on X
                <img className="link" src={Twitter} alt="Twitter logo" />
            </span>
            <p>2030 Cinemate</p>
        </footer>
    );
};