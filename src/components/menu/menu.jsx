import './menu.scss'
const Menu = ({menuOpen, setMenuOpen}) => {
    const handleClose = (e) =>{
        if(e.target = document.getElementsByName('a')){
            setMenuOpen(false)
        }
    }
    return (
        <div className={'menu '+ (menuOpen && 'active' )}>
            <ul onClick={e=> handleClose(e)}>
                <li><a href="#intro">Home</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
        </div>
    );
};

export default Menu;
