import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const InPageNavigation = ({ teams, children }) => {

    const [index, setIndex] = useState(0)
    const [style, setStyle] = useState()

    let referenceWidth = useRef()
    let btnRef = useRef()

    const toggleBtn = (btn, i) => {
        let { offsetWidth, offsetLeft } = btn;
        console.log(offsetLeft)
        referenceWidth.current.style.width = offsetWidth + "px";
        referenceWidth.current.style.left = offsetLeft + "px";

        setIndex(i);
        console.log(referenceWidth.current);

    };
    useEffect(() => {
        toggleBtn(btnRef.current, index)
        styleBorder()
        navBorder()

    }, [])

    function navBorder() {
        setStyle({ top: 98 })
    }
    function styleBorder() {
        setStyle({ top: 210 })
    }

    return (
        <>
            <div className={"flex w-full justify-between " + (teams.length <=    2 ? "h-[50px]" : "")}>
                {teams.length > 2 ?

                    teams.map(({ path, title }, i) => {
                        return (
                            <div className='' key={i}>
                                <Link to={path}>
                                    <button 
                                        ref={i === 0 ? btnRef : null} 
                                        key={i} 
                                        className={`font-bold focus:bg-gray-100/20 hover:bg-gray-100/20 text-white ml-[9px] lg:ml-1 lg:mx-1  px-8 lg:px-20 py-2 lg:py-4 ${index === i ? "text-black" : "text-gray-400"}`} 
                                        onClick={(e) => {
                                            toggleBtn(e.target, i)
                                        }} 
                                    >
                                        {title}
                                    </button>
                                </Link>
                            </div>
                        )
                    })
                    :
                    teams.map((singleTeamName, i) => {
                        return (
                            <div key={i} className='w-full'>
                                <button 
                                    ref={i === 0 ? btnRef : null} 
                                    key={i} 
                                    className={`font-bold   bg-gray-200/30 text-white px-[83px] mx-[2px] overflow-x-hidden lg:px-[170px]   py-2 ${index === i ? "text-black" : "text-gray-400"}`} 
                                    onClick={(e) => {
                                        toggleBtn(e.target, i)
                                        styleBorder()
                                    }} 
                                >
                                    {singleTeamName}
                                </button>
                            </div>
                        )
                    })}
                <hr style={style} ref={referenceWidth} className="border-white/70 border-2 absolute duration-500" />
            </div>
            {teams.length > 2 ? "" : children[index]}
        </>
    )
}

export default InPageNavigation
