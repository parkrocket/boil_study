import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SERVER_URL } from "../Config";
import BoardLatestList from './BoardLatestList_dana';
import {
    Box,
    Heading,
    Text,
    Flex
} from "@chakra-ui/react";
import boardLatestStyle from "../../Css/boardLatest.module.scss";


function BoardLatest_dana() {

    const [boardData, setBoradDate] = useState([]);

    useEffect(() => {
        axios.post(`${SERVER_URL}/api/board/boards`).then((response) => {
            // console.log(response.data.boardsList);
            setBoradDate(response.data.boardsList);
        });
    }, []);

    const content = boardData.map((cont, index) => {

        // const list = cont.list.map((listCont, index) => {
        
        //     return (
        //         <Text key={index}>{listCont.subject}</Text>
        //         );
        //  });
            
        //     return (
        //     
        //     <Box key={index} borderWidth='1px'>
        //         <Heading size='md'>{cont.boardName}</Heading>
        //         <Box>{list}</Box>
        //     </Box>
        // );

        return (<BoardLatestList cont={cont} key={index}/>)
    });

    return (
        <React.Fragment>
            <Flex spacing="24px" className={`${boardLatestStyle.board_latest_container}`}>
                {content}
            </Flex>
        </React.Fragment>
    )
}

export default BoardLatest_dana