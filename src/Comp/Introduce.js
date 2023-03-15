import React from "react";
import { Box, Center, Badge, Image } from "@chakra-ui/react";

import Gora from "../img/gora.jpg";

export const Introduce = () => {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    name: "박성현",
    age: 36,
    sex: "남자",
    title:
      "다들 중도포기하지 말고 최선을 다해서 끝까지 완주했으면 합니다. 다들 화이팅!",
    reviewCount: 34,
    rating: 4,
  };

  const property2 = {
    imageUrl: "",
    imageAlt: "",
    name: "배효원",
    age: 31,
    sex: "남자",
    title: "열심히 하겠습니다!",
    reviewCount: 34,
    rating: 4,
  };

  const property3 = {
    imageUrl: "",
    imageAlt: "",
    name: "강소라",
    age: 29,
    sex: "여자",
    title: "포기하지 않겠습니다..!",
    reviewCount: 34,
    rating: 4,
  };

  return (
    <>
      {[property, property2, property3].map((el) => (
        <Center>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={Gora} alt={el.imageAlt} />
            <Box p="6">
              <Box display="flex" alignItems="baseline">
                <Badge
                  borderRadius="full"
                  px="2"
                  colorScheme="teal"
                  fontWeight="semibold"
                >
                  {el.name}
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  {el.age} 살 &bull; {el.sex}
                </Box>
              </Box>
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={1}
              ></Box>
              {/* 여기까지 */}

              <Box display="flex" mt="2" alignItems="center">
                <Box
                  as="span"
                  ml="2"
                  color="gray.600"
                  fontSize="sm"
                  fontWeight="semibold"
                >
                  {el.title}
                </Box>
              </Box>
            </Box>
          </Box>
        </Center>
      ))}
    </>
  );
};
