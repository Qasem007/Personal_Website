
import {CONTACT, SOCIAL_MEDIA_LINK} from './data';

const Contact =()=>{
 
    return (
      <section id="Contact">
        <div className="mx-auto max-w-6xl">
          <p className="my-10 text-center text-2xl lg:text-7xl">
            Interested in working Togehter
          </p>
          <p className="p-4 text-center text-xl ">{CONTACT.text}</p>
          <p className="my-4 text-center text-2xl font-medium text-lime-300 lg:pt-6 lg:text-5xl">
            {CONTACT.email}
          </p>
          <p className="my-4 text-center text-2xl font-medium text-lime-300 lg:pt-6 lg:text-5xl">
            {CONTACT.phone}
          </p>
        </div>
        <div className="mt-20 flex items-center justify-center gap-8 ">
            {SOCIAL_MEDIA_LINK.map((link ,index)=>(
                <a href={index.link} key={index} target="_blank" rel='noopener' className='cursor-pointer'>{link.icon}</a>
            ))}
        </div>
        <p className="my-8 text-center text-gray-400 ">&copy; compliTab . All fights reserved</p>
      </section>
    );
}

export default Contact