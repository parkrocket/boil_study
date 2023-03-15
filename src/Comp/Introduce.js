import React from 'react';
import { Box, Center, Badge, Image } from '@chakra-ui/react';

import Gora from '../img/gora.jpg';

export const Introduce = () => {
    const property = {
        imageUrl: 'https://bit.ly/2Z4KKcF',
        imageAlt: 'Rear view of modern home with pool',
        name: '박성현',
        age: 36,
        sex: '남자',
        title: '다들 중도포기하지 말고 최선을 다해서 끝까지 완주했으면 합니다. 다들 화이팅!',
        reviewCount: 34,
        rating: 4,
    };

    return (
        <Center>
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image src={Gora} alt={property.imageAlt} />
                <Box p="6">
                    <Box display="flex" alignItems="baseline">
                        <Badge borderRadius="full" px="2" colorScheme="teal" fontWeight="semibold">
                            {property.name}
                        </Badge>
                        <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2">
                            {property.age} 살 &bull; {property.sex}
                        </Box>
                    </Box>

                    <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" noOfLines={1}></Box>

                    <Box display="flex" mt="2" alignItems="center">
                        <Box as="span" ml="2" color="gray.600" fontSize="sm" fontWeight="semibold">
                            {property.title}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Center>
    );
};
