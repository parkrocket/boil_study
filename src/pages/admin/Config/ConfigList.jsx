import React, { useEffect, useState } from "react";
import { Input, Button } from "@chakra-ui/react";
import axios from "axios";
import { SERVER_URL } from "../../Config";
import { useSelector } from "react-redux";
import EditIcon from '@mui/icons-material/Edit';
import adminStyle from "../../../Css/admin.module.scss";
import adminConfigListStyle from "../../../Css/adminConfigList.module.scss";

function ConfigList() {
    const [title, setTitle] = useState("");
    const [businessName ,setBusinessName] = useState('');


    const config = useSelector((state) => state.configSet.config.config);

    useEffect(() => {
        setTitle(config.title);
    }, [config]);

    function titleChangeHandler(e) {
        setTitle(e.target.value);
    }

    

    function businessNameChangeHandler(e) {
        setBusinessName(e.target.value);
    }

    function onSubmitHandler (e) {
        console.log(e);

        const formData = new FormData();
        
        formData.append("title", title);
        formData.append("businessName", businessName);

        formData.append("logo_image", e.target.logo_image.files[0]);
        console.log(e.target.logo_image.files[0]);

        axios.post(`${SERVER_URL}/api/admin/stats/configUpdate`, formData).then((response) => {
            if (response.data.configUpdateSuccess === false) {
                alert("설정을 저장하는데 실패했습니다.");
            }

            console.log(response.data);

            setTitle(response.data.config.title);
            setBusinessName(response.data.config.businessName);
            alert("수정이 완료되었습니다.");
        });

        e.preventDefault();


    }

    return (
        <div className={`${adminStyle.admin_outer}`}>
            <div className={`${adminStyle.container} ${adminConfigListStyle.container}`}>
                <div className={`${adminStyle.tit_box}`}>
                    <h2 className={`${adminStyle.tit}`}><EditIcon/>사이트 관리</h2>
                </div>
                <form action="" onSubmit={onSubmitHandler}>
                    <fieldset>
                        <div className={`${adminConfigListStyle.form_box}`}>
                            <h4>타이틀</h4>
                            <Input
                                placeholder="사이트제목"
                                onChange={titleChangeHandler}
                                defaultValue={title}></Input>
                            
                        </div>
                        <div className={`${adminConfigListStyle.form_box}`}>
                            <h4>상호명</h4>
                            <Input
                                placeholder="푸터 상호명"
                                onChange={businessNameChangeHandler}
                                defaultValue={businessName}></Input>
                        </div>
                        <div className={`${adminConfigListStyle.form_box}`}>
                            <h4>로고 이미지</h4>
                            <label>
                                <input type="file" name="logo_image" />
                            </label>
                        </div>
                        <button>수정</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
}

export default ConfigList;
