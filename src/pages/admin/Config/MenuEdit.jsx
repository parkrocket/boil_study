import React, { useState, useEffect } from "react";
import { Button, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import MenuModal from "./MenuModal";
import { SERVER_URL } from "../../Config";
import MenuEditTpl from "./MenuEditTpl";

function MenuEdit() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [menuList, setMenuList] = useState([]);
    const [menuCode, setMenuCode] = useState(0);

    function MenuModalOpen(e) {
        console.log(e.target.dataset["menucode"].length);

        if (e.target.dataset["menucode"].length > 3) {
            alert("메뉴의 댑스는 현재 2번을 넘을수 없습니다.");
        } else {
            setMenuCode(e.target.dataset["menucode"]);

            onOpen();
        }
    }

    useEffect(() => {
        axios.post(`${SERVER_URL}/api/admin/menu/menuList`).then((response) => {
            if (response.data.menuListSuccess === false) {
                alert("메뉴 리스트 로딩에 실패하였습니다.");
            } else {
                setMenuList(response.data.menuList);
            }
        });
    }, []);

    const menuListComp =
        menuList &&
        menuList.map((menu, index) => {
            const headMenuSubComp = menu.menusubList.map((subHead, index) => {
                console.log(subHead.menuList.menu_link);
                return (
                    <MenuEditTpl
                        menuList={subHead.menuList}
                        MenuModalOpen={MenuModalOpen}></MenuEditTpl>
                );
            });

            return (
                <React.Fragment>
                    <MenuEditTpl
                        menuList={menu.menuList}
                        MenuModalOpen={MenuModalOpen}></MenuEditTpl>
                    {headMenuSubComp}
                </React.Fragment>
            );
        });

    return (
        <>
            <Button onClick={onOpen}>메뉴추가</Button>

            <MenuModal
                isOpen={isOpen}
                onClose={onClose}
                setMenuList={setMenuList}
                menuCode={menuCode}></MenuModal>
            <div>{menuListComp}</div>
        </>
    );
}

export default MenuEdit;
