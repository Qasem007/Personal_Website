import {ABOUT} from './data';

 const About=()=>{

    return(
        <section id='about'>
        <h2 className='my-10 text-center text-3xl lg:text-7xl'>About me</h2>
        <div className="flex items-center justify-center">
            <p className='m-8 max-w-6xl text-2xl lg:text-4xl'> {ABOUT}</p>
        </div>
        </section>
    )
}
export default About