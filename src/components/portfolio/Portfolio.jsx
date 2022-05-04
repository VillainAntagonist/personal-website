import './portfolio.scss'
import {ArrowBack} from '@material-ui/icons'
import {webPortfolio} from "../../data";
import {useState} from "react";

const Portfolio = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const handleClick=(way)=>{
        const quantityOfProjects = webPortfolio.length
        way === 'left' ? setCurrentSlide(currentSlide> 0 ?currentSlide-1: quantityOfProjects-1) :
            setCurrentSlide(currentSlide<quantityOfProjects -1 ?currentSlide+1 : 0 )
    }
    let touchstartX = 0
    let touchendX = 0
    function handleGesture() {
        if (touchendX < touchstartX) handleClick('left')
        if (touchendX > touchstartX) handleClick('right')
    }


    return (
        <div className='works' id='portfolio'>
            <h1>Portfolio</h1>
            <div className="slider"
                 style={{transform: `translateX(-${currentSlide * 100}vw)`}}
                 onTouchStart={(e)=>touchstartX = e.changedTouches[0].screenX}
                 onTouchEnd={(e) => {
                     touchendX = e.changedTouches[0].screenX
                     handleGesture()
                 }}
            >
                {webPortfolio.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imageContainer">
                                        {d.icon}
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.description}</p>
                                    <span><a href={d.link} target="_blank">Project</a></span>
                                </div>
                            </div>
                            <div className="right">
                                <img src={d.img} alt={d.title}/>
                            </div>
                        </div>
                    </div>))}
            </div>
            <ArrowBack className='arrow left' onClick={() => handleClick('left')}/>
            <ArrowBack className='arrow right' onClick={() => handleClick('right')}/>
        </div>
    );
};

export default Portfolio;
