import './skills.scss'


const Skills = () => {

    const skills =[
        {
            id:1,
            title: 'HTML5',
            img: 'assets/HTML.svg'
        },

        {
            id:2,
            title: 'CSS3',
            img: 'assets/CSS3.svg'
        },

        {
            id:3,
            title: 'Sass',
            img: 'assets/SaSS.svg'
        },

        {
            id:4,
            title: 'JavaScript',
            img: 'assets/JavaScript.svg'
        },

        {
            id:5,
            title: 'TypeScript',
            img: 'assets/typeScript.svg'
        },

        {
            id:6,
            title: 'React',
            img: 'assets/react.svg'
        },

        {
            id: 7,
            title: 'Redux',
            img: 'assets/redux.svg'
        },

        {
            id: 8,
            title: 'Bootstrap',
            img: 'assets/Bootstrap_logo.svg'
        },

        {
            id: 9,
            title: 'Ant Design',
            img: 'assets/ant.svg'
        },

        {
            id: 10,
            title:'GitHub',
            img: 'assets/gitHub.svg'
        }
    ]
    const half = Math.ceil(skills.length / 2);

    const firstHalf = skills.splice(0, half)
    const secondHalf = skills.splice(-half)




    return (
        <div className='skillsSection'>
            <h1>Skills</h1>
        <div className='skills' id="skills">
            <ul>
                {firstHalf.map((d)=>(
                    <li key={d.id}>
                        <figure>
                            <img src={d.img} alt={d.title}/>
                            <figcaption>{d.title}</figcaption>
                        </figure>
                    </li>
                ))}
            </ul>
            <ul>
                {secondHalf.map((d)=>(
                    <li key={d.id}>
                        <figure>
                            <img src={d.img} alt={d.title}/>
                            <figcaption>{d.title}</figcaption>
                        </figure>
                    </li>
                ))}
            </ul>
        </div>
        </div>
    );
};

export default Skills;
