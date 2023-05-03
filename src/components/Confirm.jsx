import React from "react";
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
} from "@chakra-ui/react";

function Confirm(props) {
    function changeConfirmTrue() {
        props.okConfirm();
    }
    return (
        <>
            <AlertDialog
                isOpen={props.isOpen}
                leastDestructiveRef={props.cancelRef}
                onClose={props.onClose}>
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            {props.content.subject}
                        </AlertDialogHeader>

                        <AlertDialogBody>{props.content.content}</AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={props.cancelRef} onClick={props.onClose}>
                                {props.content.leftButton}
                            </Button>
                            <Button colorScheme="red" onClick={changeConfirmTrue} ml={3}>
                                {props.content.rightButton}
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    );
}

export default Confirm;
