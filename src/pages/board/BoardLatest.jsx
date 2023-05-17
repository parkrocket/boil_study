import React, { useState, useEffect } from "react";
import axios from "axios";
import { SERVER_URL } from "../Config";
import moment from "moment";
import {
    Box,
    Card,
    CardHeader,
    CardBody,
    Heading,
    Stack,
    StackDivider,
    Text,
    Spacer,
    Flex,
    Avatar
} from "@chakra-ui/react";
import ChatIcon from '@mui/icons-material/Chat';
import boardLatestStyle from "../../Css/boardLatest.module.scss";

function BoardLatest() {
    const [latestList, setLatestList] = useState([]);

    useEffect(() => {
        axios.get(`${SERVER_URL}/api/board/boards`).then((response) => {
            let data = [];

            Promise.all(
                response.data.boardsList.map(async (el, index) => {
                    await axios
                        .post(`${SERVER_URL}/api/board/latest`, {
                            boardId: el.board_id,
                            count: 5,
                        })
                        .then((response2) => {
                            data.push({
                                board_id: el.board_id,
                                board_name: el.board_name,
                                list: response2.data.list,
                            });
                            return data;
                        });
                })
            ).then(() => {
                console.log(data);
                setLatestList(data);
            });
        });
    }, []);

    if (latestList.length !== 0) {
        console.log(latestList);
    }

    const boardListPage = latestList.map((list, index) => {
        /*
        const listDateTime = list.datetime
            ? moment(list.datetime).format("YYYY-MM-DD HH:mm:ss")
            : "";
            */
        const boardListWrap = list.list.map((boardList, index) => {
            return (
                <Box key={index} className={`${boardLatestStyle.content_inner}`}>
                    <Box className={`${boardLatestStyle.profile}`}>
                        <Avatar className={`${boardLatestStyle.img}`}></Avatar>
                        <Text className={`${boardLatestStyle.nickname}`}><span>nickName</span></Text>
                        <Text className={`${boardLatestStyle.time}`}><span>1분</span> 전</Text>
                    </Box>
                    <Heading size="xs" textTransform="uppercase" className={`${boardLatestStyle.tit}`}>
                        {boardList.subject}
                    </Heading>
                    <Text fontSize="sm" className={`${boardLatestStyle.txt}`}>
                        {boardList.content.replace(/<[^>]*>?/g, "")}
                    </Text>
                    <Box className={`${boardLatestStyle.count}`}>
                        <ChatIcon/><span>23</span>
                    </Box>
                </Box>
            );
        });

        return (
            <React.Fragment key={index}>
                <Box className={`${boardLatestStyle.wrapper}`}>
                    <Card className={`${boardLatestStyle.inner}`}>
                        <CardHeader className={`${boardLatestStyle.tit}`}>
                            <Heading size="md">{list.board_name}</Heading>
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

    return (
        <div>
            <Flex spacing="24px" className={`${boardLatestStyle.board_latest_container}`}>{boardListPage.length !== 0 && boardListPage}</Flex>
        </div>
    );
}

export default BoardLatest;
