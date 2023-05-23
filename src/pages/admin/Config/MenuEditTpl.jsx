import React from "react";
import { Button, Input } from "@chakra-ui/react";
import adminMenuEditStyle from "../../../Css/adminMenuEdit.module.scss";

function MenuEditTpl(props) {
    return (
        <li key={props.menuList.menu_id}>
            <input type="hidden" defaultValue={props.menuList.menu_code}></input>
            <Input defaultValue={props.menuList.menu_name}></Input>
            <Input defaultValue={props.menuList.menu_link}></Input>
            <Input defaultValue={props.menuList.menu_order}></Input>
            <div>
                <Button onClick={props.MenuModalOpen} data-menucode={props.menuList.menu_code}>
                    메뉴추가
                </Button>
                <Button>삭제</Button>
            </div>
        </li>
    );
}

export default MenuEditTpl;
