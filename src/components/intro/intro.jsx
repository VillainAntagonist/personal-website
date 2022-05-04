import './intro.scss'
import {KeyboardArrowDown} from '@material-ui/icons'
import {init} from 'ityped'
import {useEffect, useRef} from "react";
const Intro = () => {
    const textRef = useRef()

    useEffect(()=>{
        init(textRef.current, {
            showCursor: false,
            backDelay: 1500,
            backSpeed: 60,
            strings: ['Frontend','Technical']
        })
    },[])

    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src='assets/myPhoto1.png' alt='Photo of me'/>
                </div>
            </div>
            <div className="right">
                    <div className="wrapper">
                        <h2>Hi There, I'm</h2>
                        <h1>Danyl Ovcharov</h1>
                        <h3><span ref={textRef}></span> Engineer</h3>
                    </div>
                <a href='#skills'>
                    <KeyboardArrowDown fontSize='inherit'/>
                </a>
            </div>
        </div>
    );
};

export default Intro;
