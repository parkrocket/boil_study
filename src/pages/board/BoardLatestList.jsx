import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SERVER_URL } from "../Config";
import { Link } from "react-router-dom";
import {
    Box,
    Card,
    CardHeader,
    CardBody,
    Heading,
    Stack,
    StackDivider,
    Text,
    Flex,
    Avatar,
} from "@chakra-ui/react";
import ChatIcon from "@mui/icons-material/Chat";
import boardLatestStyle from "../../Css/boardLatest.module.scss";


function BoardLatestList_dana(props) {

    console.log(props.cont);
    // console.log(props.cont.board_name);

    const [detail, setDetail] = useState([]);

    let boardName = props.cont.board_name;
    let id = props.cont.board_id;

    const ob = { boardId : id, count : 5 };


    useEffect (() => {
        axios.post(`${SERVER_URL}/api/board/latestList`, ob ).then((response) => {
            if( response.data.LatestListSuccess === false ){
                alert('게시글을 불러올 수 없습니다.');
            }
            console.log(response.data.LatestList);
            setDetail(response.data.LatestList);
        })
    }, []);

    // console.log(detail);
    const boardContainer = detail.map((cont, index) => {

        let listDateTime = "";
        listDateTime = elapsedTime(cont.datetime);

        return (
            <Link to={`/board/${props.cont.board_id}/${cont.wr_no}`} key={index}>
                <Box className={`${boardLatestStyle.content_inner}`}>
                    <Box className={`${boardLatestStyle.profile}`}>
                        <Avatar
                            className={`${boardLatestStyle.img}`}
                            src={cont.user_image}>
                        </Avatar>
                        <Text className={`${boardLatestStyle.nickname}`}>
                            <span>{cont.user_id}</span>
                        </Text>
                        <Text className={`${boardLatestStyle.time}`}>{listDateTime}</Text>
                    </Box>
                    <Heading
                        size="xs"
                        textTransform="uppercase"
                        className={`${boardLatestStyle.tit}`}>
                        {cont.subject}
                    </Heading>
                    <Text fontSize="sm" className={`${boardLatestStyle.txt}`}>
                        {cont.content.replace(/<[^>]*>?/g, "")}
                    </Text>
                    {cont.comment !== 0 && (
                        <Box className={`${boardLatestStyle.count}`}>
                            <ChatIcon />
                            <span>{cont.comment}</span>
                        </Box>
                    )}
                </Box>
            </Link>
        );
    });

    function elapsedTime(date) {
        const start = new Date(date);
        const end = new Date();

        const diff = (end - start) / 1000;

        const times = [
            { name: "년", milliSeconds: 60 * 60 * 24 * 365 },
            { name: "개월", milliSeconds: 60 * 60 * 24 * 30 },
            { name: "일", milliSeconds: 60 * 60 * 24 },
            { name: "시간", milliSeconds: 60 * 60 },
            { name: "분", milliSeconds: 60 },
        ];

        for (const value of times) {
            const betweenTime = Math.floor(diff / value.milliSeconds);

            if (betweenTime > 0) {
                return `${betweenTime}${value.name} 전`;
            }
        }
        return "방금 전";
    }

  return (
    <React.Fragment>
        <Box className={`${boardLatestStyle.wrapper}`}>
            <Card className={`${boardLatestStyle.inner}`}>
                <CardHeader className={`${boardLatestStyle.tit}`}>
                    <Heading size="md">{boardName}</Heading>
                </CardHeader>

                <CardBody className={`${boardLatestStyle.content}`}>
                    <Stack divider={<StackDivider />} spacing="2">
                        {boardContainer}
                    </Stack>
                </CardBody>
            </Card>
        </Box>
    </React.Fragment>
  )
}

export default BoardLatestList_dana
