import React, { useEffect, useState, useRef } from "react";
import { Input } from "@chakra-ui/react";
import axios from "axios";
import { SERVER_URL } from "../../Config";
import { useSelector } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import adminStyle from "../../../Css/admin.module.scss";
import adminConfigListStyle from "../../../Css/adminConfigList.module.scss";

function ConfigList() {
    const [title, setTitle] = useState("");
    const [bizName, setBizName] = useState("");
    const [bizNumber, setBizNumber] = useState("");
    const [address, setAddress] = useState("");
    const [logoImgUrl, setLogoImgUrl] = useState("");
    const [, setFileImg] = useState("");

    const config = useSelector((state) => state.configSet.config.config);

    const imgRef = useRef();

    useEffect(() => {
        setTitle(config.title);
        setBizName(config.biz_name);
        setLogoImgUrl(config.logo_image);
        setAddress(config.biz_address);
        setBizNumber(config.biz_number);
    }, [config]);

    function titleChangeHandler(e) {
        setTitle(e.target.value);
    }

    function businessNameChangeHandler(e) {
        setBizName(e.target.value);
    }

    function businessNumberChangeHandler(e) {
        setBizNumber(e.target.value);
    }
    function addressChangeHandler(e) {
        setAddress(e.target.value);
    }

    function onSubmitHandler(e) {
        console.log(e);

        const formData = new FormData();

        formData.append("title", title);
        formData.append("bizName", bizName);
        formData.append("bizAddress", address);
        formData.append("bizNumber", bizNumber);

        formData.append("logo_image", e.target.logo_image.files[0]);
        console.log(e.target.logo_image.files[0]);

        axios.post(`${SERVER_URL}/api/admin/stats/configUpdate`, formData).then((response) => {
            if (response.data.configUpdateSuccess === false) {
                alert("설정을 저장하는데 실패했습니다.");
            }

            setTitle(response.data.config.title);
            setBizName(response.data.config.biz_name);
            setBizNumber(response.data.config.biz_number);
            setAddress(response.data.config.biz_address);
            setLogoImgUrl(response.data.config.logo_image);
            alert("수정이 완료되었습니다.");
        });

        e.preventDefault();
    }

    function fileChange(e) {
        const file = imgRef.current.files[0];

        const fileReader = new FileReader();

        fileReader.readAsDataURL(file);

        fileReader.onload = (e) => {
            setFileImg(fileReader.result);
            //setImages(file);
            document.getElementById("image_url").src = fileReader.result;
        };
    }

    return (
        <div className={`${adminStyle.admin_outer}`}>
            <div className={`${adminStyle.container} ${adminConfigListStyle.container}`}>
                <div className={`${adminStyle.tit_box}`}>
                    <h2 className={`${adminStyle.tit}`}>
                        <EditIcon />
                        사이트 관리
                    </h2>
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
                                placeholder="상호명"
                                onChange={businessNameChangeHandler}
                                defaultValue={bizName}></Input>
                        </div>
                        <div className={`${adminConfigListStyle.form_box}`}>
                            <h4>사업자등록번호</h4>
                            <Input
                                placeholder="사업자등록번호"
                                onChange={businessNumberChangeHandler}
                                defaultValue={bizNumber}></Input>
                        </div>
                        <div className={`${adminConfigListStyle.form_box}`}>
                            <h4>주소</h4>
                            <Input
                                placeholder="주소"
                                onChange={addressChangeHandler}
                                defaultValue={address}></Input>
                        </div>
                        <div className={`${adminConfigListStyle.form_box}`}>
                            <h4>로고 이미지</h4>
                            <label>
                                <div className={`${adminConfigListStyle.img_box}`}>
                                    <img
                                        src={`${SERVER_URL}/${logoImgUrl}`}
                                        alt=""
                                        id="image_url"
                                    />
                                </div>
                                <input
                                    style={{ display: "none" }}
                                    type="file"
                                    name="logo_image"
                                    onChange={fileChange}
                                    ref={imgRef}
                                />
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
