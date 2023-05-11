import React , {useState, useRef, useEffect} from "react";
import { Link } from "react-router-dom";
import HeadRight from "./HeadRight";
import HeadMenu from "./HeadMenu";

function Head() {
    //console.log(user.auth.isAuth);

    const [isClick, setIsClick] = useState(false);
    const [isScroll, setIsScroll] = useState(false);

    const handleScroll = () => {
        console.log(window.scrollY);
        if ( window.scrollY > 50 ) {
            setIsScroll(true);
        } else {
            setIsScroll(false);
        }
    };
    let scrollCheck = isScroll ? 'active' : '';
    useEffect( () => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div>
            <div id="header" className={scrollCheck}>
                <div className="header-inner">
                    <h1 className="logo fontf">
                        <Link to="/">kakao</Link>
                    </h1>
                    <HeadMenu isClick={isClick}></HeadMenu>
                    <HeadRight setIsClick={setIsClick} isClick={isClick}></HeadRight>
                </div>
            </div>
        </div>
    );
}

export default Head;