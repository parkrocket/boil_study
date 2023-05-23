import React from "react";
import { Button, Input } from "@chakra-ui/react";
import adminMenuEditStyle from "../../../Css/adminMenuEdit.module.scss";

function MenuEditTpl(props) {

    

    return (
        <li key={props.menuList.menu_id}>
            <input type="hidden" name="menu_code[]" defaultValue={props.menuList.menu_code}></input>
            <Input  name="menu_name[]" defaultValue={props.menuList.menu_name}></Input>
            <Input name="menu_link[]" defaultValue={props.menuList.menu_link}></Input>
            <Input name="menu_order[]" defaultValue={props.menuList.menu_order}></Input>
            <div>
                <Button className={`${adminMenuEditStyle.add_btn}`} onClick={props.MenuModalOpen} data-menucode={props.menuList.menu_code}>
                    메뉴추가
                </Button>
                <Button className={`${adminMenuEditStyle.delete_btn}`} onClick={props.deleteHandler} data-deletecode={props.menuList.menu_code} data-length={ props.length}>삭제</Button>
            </div>
        </li>
    );
}

export default MenuEditTpl;
