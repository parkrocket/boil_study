import React, { useEffect } from "react";
import { Box, Center, Badge, Image } from "@chakra-ui/react";

import Gora from "../img/gora.jpg";
import Lija from "../img/lija.jpg";
import Dos from "../img/dos.png";
import Head from "../components/Head";
import { SERVER_URL } from "./Config";
import axios from "axios";

function Introduce(props) {
    /*
    if (props.user.isAuth !== props.option) {
        if (props.option !== null) {
            return;
        }
    }
    */

    useEffect(() => {}, []);
    const img = { Gora, Lija, Dos };

    const property = {
        imageUrl: img.Dos,
        imageAlt: "Rear view of modern home with pool",
        name: "박성현",
        age: 36,
        sex: "남자",
        title: "다들 중도포기하지 말고 최선을 다해서 끝까지 완주했으면 합니다. 다들 화이팅!",
        reviewCount: 34,
        rating: 4,
    };

    const property_ino = {
        imageUrl: img.Gora,
        imageAlt: "매직샵",
        name: "조인호",
        age: 44,
        sex: "남자",
        title: "리액트는 리액트일뿐.",
        reviewCount: 34,
        rating: 4,
    };

    const property_dy = {
        imageUrl: img.Lija,
        imageAlt: "매직샵",
        name: "다연",
        age: 28,
        sex: "여자",
        title: "우앙",
        reviewCount: 34,
        rating: 4,
    };

    function Handler() {
        axios.post(`${SERVER_URL}/api/test/law`).then((response) => {
            console.log(response);
        });
    }

    return (
        <>
            <Head></Head>
            <Center mt={100}>
                <button onClick={Handler}>버튼</button>
                {[property, property_ino, property_dy].map((el, index) => (
                    <Box
                        maxW="sm"
                        borderWidth="1px"
                        borderRadius="lg"
                        overflow="hidden"
                        key={index}
                        h={550}
                        w={400}
                        mr={5}
                        mt={5}>
                        <Image src={el.imageUrl} alt={el.imageAlt} />
                        <Box p="6">
                            <Box display="flex" alignItems="baseline">
                                <Badge
                                    borderRadius="full"
                                    px="2"
                                    colorScheme="teal"
                                    fontWeight="semibold">
                                    {el.name}
                                </Badge>
                                <Box
                                    color="gray.500"
                                    fontWeight="semibold"
                                    letterSpacing="wide"
                                    fontSize="xs"
                                    textTransform="uppercase"
                                    ml="2">
                                    {el.age} age &bull; {el.sex}
                                </Box>
                            </Box>
                            <Box
                                mt="1"
                                fontWeight="semibold"
                                as="h4"
                                lineHeight="tight"
                                noOfLines={1}></Box>

                            <Box display="flex" mt="2" alignItems="center">
                                <Box
                                    as="span"
                                    ml="2"
                                    color="gray.600"
                                    fontSize="sm"
                                    fontWeight="semibold">
                                    {el.title}
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Center>
        </>
    );
}

export default Introduce;
