import './topbar.scss'
import {Person,Mail,LinkedIn} from '@material-ui/icons';
const TopBar = ({menuOpen, setMenuOpen,}) => {
    return (
        <div className={'topBar ' + (menuOpen && 'active')}>
            <div className="wrapper">
                <div className="left">
                    <a href='#intro' className='logo'>Welcome!</a>
                      <div className="itemContainer">
                        <Person className='icon'/>
                        <span>+48 571 080 899</span>
                    </div>
                    <div className='itemContainer'>
                        <Mail className='icon'/>
                            <span><a href='mailto:danylovcharov@gmail.com'>
                                danylovcharov@gmail.com
                            </a></span>
                    </div>
                    <div className="itemContainer">
                        <span>
                            <a href='https://www.linkedin.com/in/danylovcharov/' target='_blank'>
                                <LinkedIn  fontSize='large'/>
                            </a>
                        </span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
