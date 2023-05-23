import React, { useState, useEffect } from "react";
import { Button, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import MenuModal from "./MenuModal";
import { SERVER_URL } from "../../Config";
import MenuEditTpl from "./MenuEditTpl";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import adminStyle from "../../../Css/admin.module.scss";
import adminMenuEditStyle from "../../../Css/adminMenuEdit.module.scss";

function MenuEdit() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [menuList, setMenuList] = useState([]);
    const [menuCode, setMenuCode] = useState(0);

    function MenuModalOpen(e) {
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
                return (
                    <MenuEditTpl
                        menuList={subHead.menuList}
                        MenuModalOpen={MenuModalOpen}
                        key={subHead.menuList.menu_id}></MenuEditTpl>
                );
            });

            return (
                <React.Fragment key={menu.menuList.menu_id}>
                    <MenuEditTpl
                        menuList={menu.menuList}
                        MenuModalOpen={MenuModalOpen}></MenuEditTpl>
                    {headMenuSubComp}
                </React.Fragment>
            );
        });

    return (
        <div className={`${adminStyle.admin_outer}`}>
            <div className={`${adminStyle.container} ${adminMenuEditStyle.container}`}>
                <div className={`${adminStyle.tit_box}`}>
                    <h2 className={`${adminStyle.tit}`}><MenuBookIcon/>메뉴 관리</h2>
                </div>

                <button onClick={onOpen} className={`${adminMenuEditStyle.add_btn}`}><AddCircleOutlineIcon/>메뉴추가</button>

                <MenuModal 
                    isOpen={isOpen}
                    onClose={onClose}
                    setMenuList={setMenuList}
                    menuCode={menuCode}></MenuModal>
                <div className={`${adminMenuEditStyle.menu_edit_list}`}>
                    <li className={`${adminMenuEditStyle.list_head}`}>
                        <p>메뉴</p>
                        <p>링크</p>
                        <p>순서</p>
                        <p>관리</p>
                    </li>
                    {menuListComp}
                </div>
            </div>
        </div>
    );
}

export default MenuEdit;
