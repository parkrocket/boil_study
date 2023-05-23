import React, { useEffect, useState } from "react";
import { Input, Button } from "@chakra-ui/react";
import axios from "axios";
import { SERVER_URL } from "../../Config";
import { useSelector } from "react-redux";

function ConfigList() {
    const [title, setTitle] = useState("");

    const config = useSelector((state) => state.configSet.config.config);

    //console.log(config);
    useEffect(() => {
        setTitle(config.title);
    }, [config]);

    function titleChangeHandler(e) {
        setTitle(e.target.value);
    }

    function titleSubmitHandler(e) {
        const data = { title: title };

        axios.post(`${SERVER_URL}/api/admin/stats/configUpdate`, data).then((response) => {
            if (response.data.configUpdateSuccess === false) {
                alert("설정을 저장하는데 실패했습니다.");
            }

            setTitle(response.data.config.title);
            alert("수정이 완료되었습니다.");
        });
    }

    return (
        <div>
            타이틀
            <Input
                placeholder="사이트제목"
                onChange={titleChangeHandler}
                defaultValue={title}></Input>
            <Button onClick={titleSubmitHandler}>수정</Button>
        </div>
    );
}

export default ConfigList;
