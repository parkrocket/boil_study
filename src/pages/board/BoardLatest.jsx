import React, { useState, useEffect } from "react";
import axios from "axios";
import { SERVER_URL } from "../Config";
import moment from "moment";
import { Link } from "react-router-dom";
import "moment/locale/ko";
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

function BoardLatest() {
    const [latestList, setLatestList] = useState([]);

    useEffect(() => {
        axios.post(`${SERVER_URL}/api/board/allLatest`, { count: 5 }).then((response) => {
            setLatestList(response.data.bd);
        });
    }, []);

    if (latestList.length !== 0) {
        console.log(latestList);
    }

    const boardListPage = latestList.map((list, index) => {
        let listDateTime = "";

        const boardListWrap = list.list.map((boardList, index) => {
            listDateTime = elapsedTime(boardList.datetime);
            console.log(boardList.comment);
            return (
                <Link to={`/board/${list.boardId}/${boardList.wr_no}`} key={index}>
                    <Box className={`${boardLatestStyle.content_inner}`}>
                        <Box className={`${boardLatestStyle.profile}`}>
                            <Avatar
                                className={`${boardLatestStyle.img}`}
                                src={boardList.user_image}></Avatar>
                            <Text className={`${boardLatestStyle.nickname}`}>
                                <span>{boardList.user_nickname}</span>
                            </Text>
                            <Text className={`${boardLatestStyle.time}`}>{listDateTime}</Text>
                        </Box>
                        <Heading
                            size="xs"
                            textTransform="uppercase"
                            className={`${boardLatestStyle.tit}`}>
                            {boardList.subject}
                        </Heading>
                        <Text fontSize="sm" className={`${boardLatestStyle.txt}`}>
                            {boardList.content.replace(/<[^>]*>?/g, "")}
                        </Text>
                        {boardList.comment !== 0 && (
                            <Box className={`${boardLatestStyle.count}`}>
                                <ChatIcon />
                                <span>{boardList.comment}</span>
                            </Box>
                        )}
                    </Box>
                </Link>
            );
        });

        return (
            <React.Fragment key={index}>
                <Box className={`${boardLatestStyle.wrapper}`}>
                    <Card className={`${boardLatestStyle.inner}`}>
                        <CardHeader className={`${boardLatestStyle.tit}`}>
                            <Heading size="md">{list.boardName}</Heading>
                        </CardHeader>

                        <CardBody className={`${boardLatestStyle.content}`}>
                            <Stack divider={<StackDivider />} spacing="4">
                                {boardListWrap}
                            </Stack>
                        </CardBody>
                    </Card>
                </Box>
                {/* <Spacer></Spacer> */}
            </React.Fragment>
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
        <div>
            <Flex spacing="24px" className={`${boardLatestStyle.board_latest_container}`}>
                {boardListPage.length !== 0 && boardListPage}
            </Flex>
        </div>
    );
}

export default BoardLatest;
