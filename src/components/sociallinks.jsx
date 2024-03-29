
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
export const Sociallinks=()=>{
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: "https://linkedin.com",
            style: "rounded-tr-md",
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
            href: "https://github.com/theyashpatel",
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: "mailto:foo@gmail.com",
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: "/resume.pdf",
            style: "rounded-br-md",
            download: true,
        },
    ];
    return(
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
            <ul>
                {links.map(({id,child,style,download,href})=>(
                    <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px]
                        hover:ml-[-10px] hover:rounded-md duration-300`+" "+ style}
                >
                        <a href={href}
                           download={download}
                           target='_blank'
                           className='flex justify-between items-center w-full text-white'>
                            {/*Linkdine <FaLinkedin  size={30}/>*/}
                            {child}
                            {/*rel=`noreferrer`*/}
                        </a>
                    </li>

                    ))}

            </ul>
        </div>
    )
}