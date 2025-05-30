import { MARQUEE_TEXT } from "./data";
import {motion} from 'framer-motion';

const Marquee=()=>{


    return(
        <div className=" mt-0.5 w-full bg-lime-400 text-black lg:py-4">
            <div className="flex overflow-hidden whitespace-nowrap">
                {[...Array(2)].map((_,i)=>(
                    <motion.h1
                    initial={{x:"-100%"}}
                    animate={{x:"0"}}
                    transition={{repeat:Infinity, ease:"linear", duration:30}}
                    key={i} className="py-2 text-2xl font-bold leading-none tracking-tighter lg:text-3xl">
                        {MARQUEE_TEXT}
                    </motion.h1>
                ))}

            </div>
        </div>
    )
}

export default Marquee