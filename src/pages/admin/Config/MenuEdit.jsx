import React, { useState, useEffect } from "react";
import { Button, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import MenuModal from "./MenuModal";
import { SERVER_URL } from "../../Config";
import MenuEditTpl from "./MenuEditTpl";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
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

    function deleteHandler(e) {
        if (window.confirm("정말 삭제하시겠습니까?")) { 
            if (e.target.dataset["length"] > 0) { 
                alert("하위 메뉴가 있는 상태로는 삭제할수 없습니다.");
                return;
            }

            const data = {menuCode : e.target.dataset["deletecode"]}

            axios.post(`${SERVER_URL}/api/admin/menu/menuDelete`, data).then((response) => {
                if (response.data.menuDeleteSuccess === false) {
                    alert("메뉴 삭제에 실패하였습니다.");
                } else {
                    setMenuList(response.data.menuList);
                }
            });
        }

    }

    const menuListComp =
        menuList &&
        menuList.map((menu, index) => {
            console.log(menu.menusubList.length);

            

            const headMenuSubComp = menu.menusubList && menu.menusubList.map((subHead, index) => {
                return (
                    <div className={`${adminMenuEditStyle.depth2}`} key={subHead.menuList.menu_id}>
                        <SubdirectoryArrowRightIcon className={`${adminMenuEditStyle.depth2_arrow_ico}`}/>
                        <MenuEditTpl
                            menuList={subHead.menuList}
                            MenuModalOpen={MenuModalOpen}
                            deleteHandler={deleteHandler}></MenuEditTpl>
                    </div>
                );
            });

            return (
                <React.Fragment key={menu.menuList.menu_id}>
                    <MenuEditTpl
                        menuList={menu.menuList}
                        MenuModalOpen={MenuModalOpen} deleteHandler={deleteHandler} length={ menu.menusubList.length}></MenuEditTpl>
                    {headMenuSubComp}
                </React.Fragment>
            );
        });
    
    function submitHandler() { 
        const data = new FormData(document.getElementById("form_act"));

        axios.post(`${SERVER_URL}/api/admin/menu/menuUpdate`,data).then((response) => {
             if (response.data.menuListSuccess === false) {
                alert("메뉴 업데이트에 실패하였습니다.");
             } else {
                 alert("메뉴 수정 완료");
                setMenuList(response.data.menuList);
            }
        });
    }

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
                    <form id="form_act">{menuListComp}</form>
                </div>
                <Button onClick={submitHandler}>확인</Button>
            </div>
                
            
        </div>
    );
}

export default MenuEdit;
