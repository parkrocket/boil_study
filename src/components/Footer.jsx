import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { configSet } from "../_actions/adminMenu_action";


function Footer() {
    const dispatch = useDispatch();
    const [bizName ,setBizName] = useState('');
    const [bizNumber, setBizNumber] = useState("");
    const [address, setAddress] = useState("");

    useEffect(() => {
        const data = { check: "adminadmin" };
        dispatch(configSet(data)).then((response) => {
            if (response.payload.configListSuccess === false) {
                alert("설정을 불러오는데 실패했습니다.");
            } else {
                setBizName(response.payload.config.biz_name);
                setBizNumber(response.payload.config.biz_number);
                setAddress(response.payload.config.address);
            }
        });
    }, [dispatch]);

    return (
        <div>
            <div id="footer">
                <div className="footer-inner">
                    <ul className="information_list">
                        <li>상호명 : <span>{bizName}</span></li>
                        <li>사업자등록번호 : <span>{bizNumber}</span></li>
                        <li>주소 : <span>{address}</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
