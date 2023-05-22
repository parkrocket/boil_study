import React from "react";
import { Button, Input } from "@chakra-ui/react";

function MenuEditTpl(props) {
    return (
        <li key={props.menuList.menu_id}>
            <input type="hidden" defaultValue={props.menuList.menu_code}></input>
            <Input defaultValue={props.menuList.menu_name}></Input>
            <Input defaultValue={props.menuList.menu_link}></Input>
            <Input defaultValue={props.menuList.menu_order}></Input>
            <Button onClick={props.MenuModalOpen} data-menucode={props.menuList.menu_code}>
                메뉴추가
            </Button>
        </li>
    );
}

export default MenuEditTpl;
