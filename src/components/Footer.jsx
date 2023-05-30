import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { configSet } from "../_actions/adminMenu_action";


function Footer() {
    const dispatch = useDispatch();
    const [businessName ,setBusinessName] = useState('');

    useEffect(() => {
        const data = { check: "adminadmin" };
        dispatch(configSet(data)).then((response) => {
            if (response.payload.configListSuccess === false) {
                alert("설정을 불러오는데 실패했습니다.");
            } else {
                setBusinessName(response.payload.config.businessName);
            }
        });
    }, [dispatch]);

    return (
        <div>
            <div id="footer">
                <div className="footer-inner">
                    <ul className="information_list">
                        <li>상호 : <span>{businessName}</span></li>
                        <li>사업자등록 : <span>1234-5678</span></li>
                        <li>주소 : <span>서울특별시</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
