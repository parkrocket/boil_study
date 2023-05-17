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
} from "@chakra-ui/react";

function BoardLatest() {
    const [latestList, setLatestList] = useState([]);

    useEffect(() => {
        axios.get(`${SERVER_URL}/api/board/boards`).then((response) => {
            let data = [];

            Promise.all(
                response.data.boardsList.map((el, index) => {
                    axios
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
                <Box key={index}>
                    <Heading size="xs" textTransform="uppercase">
                        {boardList.subject}
                    </Heading>
                    <Text pt="2" fontSize="sm">
                        {boardList.content.replace(/<[^>]*>?/g, "")}
                    </Text>
                </Box>
            );
        });

        return (
            <React.Fragment>
                <Box key={index}>
                    <Card>
                        <CardHeader>
                            <Heading size="md">{list.board_name}</Heading>
                        </CardHeader>

                        <CardBody>
                            <Stack divider={<StackDivider />} spacing="4">
                                {boardListWrap}
                            </Stack>
                        </CardBody>
                    </Card>
                </Box>
                <Spacer></Spacer>
            </React.Fragment>
        );
    });

    return (
        <div>
            <Flex spacing="24px">{boardListPage.length !== 0 && boardListPage}</Flex>
        </div>
    );
}

export default BoardLatest;
