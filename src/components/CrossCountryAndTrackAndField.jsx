/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import { Box, Heading, Text, Container, VStack, SimpleGrid, Image, UnorderedList, ListItem } from '@chakra-ui/react';
import { useSpring, animated } from '@react-spring/web';

const CrossCountryAndTrackAndField = () => {
  const [flipped, setFlipped] = useState([false, false, false, false]);

  const handleFlip = (index) => {
    setFlipped((prevFlipped) => {
      const newFlipped = [...prevFlipped];
      newFlipped[index] = !newFlipped[index];
      return newFlipped;
    });
  };

  const cards = [
    {
      frontImg: '/track-1.png',
      title: 'Track & Field',
      details: ['400 Meter 55.05', '800 Meter 2:10', '1600 Meter 4:58.69'],
    },
    {
      frontImg: '/track-2.png',
      title: 'Cross Country',
      details: ['2 Mile Varsity Cross Country 10:54.45'],
    },
    {
      frontImg: '/track-3.png',
      title: 'Cross Country',
      details: ['5K 17:39'],
    },
    {
      frontImg: '/track-4.png',
      title: '2024 Track & Field Male Character Award',
      details: [],
    },
  ];

  // Create an array of spring props for each card
  const springProps = cards.map((_, index) => 
    useSpring({
      transform: `perspective(600px) rotateY(${flipped[index] ? 180 : 0}deg)`,
      config: { mass: 5, tension: 800, friction: 80 },
    })
  );

  return (
    <Box bg="#6B7280" minH="80vh" display="flex" flexDirection="column" alignItems="center" px={4}>
      <Image
        src="/track.png"
        alt="Track Divider"
        width="50%"
        mt="10px"
        mb="30px"
        objectFit="contain"
      />

      <Container maxW="container.lg" mt="50px">
        <VStack spacing={8} textAlign="center" py={1}>
          <Heading mb={4} fontFamily="'Righteous', cursive" color="#F9FAFB">Cross Country and Track & Field</Heading>
          <Heading mb={4} fontFamily="'Righteous', cursive" color="#F9FAFB" fontSize="lg">(Click on a card to learn more)</Heading>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} width="100%" justifyItems="center">
          {cards.map((card, index) => (
            <Box
              key={index}
              p={4}
              width="100%"
              maxWidth="400px"
              cursor="pointer"
              display="flex"
              justifyContent="center"
              onClick={() => handleFlip(index)}
            >
              <animated.div
                style={{
                  transformStyle: 'preserve-3d',
                  position: 'relative',
                  width: '100%',
                  height: '300px',
                  ...springProps[index],
                }}
              >
                {/* Front of the Card */}
                <animated.div
                  style={{
                    backfaceVisibility: 'hidden',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    borderRadius: '35px',
                    boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.15)',
                    border: '8px solid #34D399',
                    background: 'linear-gradient(white, white) padding-box, linear-gradient(45deg, #34D399, #10B981) border-box',
                  }}
                >
                  <Image
                    src={card.frontImg}
                    alt={`Track & Field Front ${index + 1}`}
                    borderRadius="25px"
                    objectFit="cover"
                    width="100%"
                    height="100%"
                  />
                </animated.div>

                {/* Back of the Card */}
                <animated.div
                  style={{
                    position: 'absolute',
                    top: 0,
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    width: '100%',
                    height: '100%',
                    borderRadius: '35px',
                    boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.15)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#333333',
                    padding: '1rem',
                    backgroundColor: '#F9FAFB',
                    border: '8px solid #34D399',
                  }}
                >
                  <Text fontFamily="'Righteous', cursive" textAlign="center" mb={2} fontWeight="bold">
                    {card.title}
                  </Text>
                  <UnorderedList textAlign="left"  fontFamily="'Righteous', cursive">
                    {card.details.map((detail, i) => (
                      <ListItem key={i}>{detail}</ListItem>
                    ))}
                  </UnorderedList>
                </animated.div>
              </animated.div>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default CrossCountryAndTrackAndField;
