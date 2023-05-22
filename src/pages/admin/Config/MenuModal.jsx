import React, { useState } from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
} from "@chakra-ui/react";

import axios from "axios";
import { SERVER_URL } from "../../Config";

function MenuModal(props) {
    const [menuName, setMenuName] = useState("");
    const [menuLink, setMenuLink] = useState("");

    function menuNameHandler(e) {
        setMenuName(e.target.value);
    }

    function menuLinkHandler(e) {
        setMenuLink(e.target.value);
    }

    function submitHandler() {
        const data = { menuName, menuLink };

        axios.post(`${SERVER_URL}/api/admin/menu/menuInsert`, data).then((response) => {
            props.setMenuList(response.data.menuList);
            props.onClose();
        });
    }

    return (
        <>
            <Modal isOpen={props.isOpen} onClose={props.onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>메뉴 추가하기</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel>메뉴 이름</FormLabel>
                            <Input placeholder="메뉴 이름" onChange={menuNameHandler} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>메뉴 링크</FormLabel>
                            <Input placeholder="메뉴 링크" onChange={menuLinkHandler} />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" onClick={submitHandler}>
                            추가하기
                        </Button>
                        <Button colorScheme="blue" variant="ghost" mr={3} onClick={props.onClose}>
                            취소
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default MenuModal;
