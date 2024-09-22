import { useState } from 'react';
import { Box, Heading, Text, Container, VStack, SimpleGrid, Image } from '@chakra-ui/react';
import { useSpring, animated } from '@react-spring/web';

const createSpringProps = (flips, index) => {
  return flips.map(flip =>
    useSpring({
      transform: `perspective(600px) rotateY(${flip ? 180 : 0}deg)`,
      config: { mass: 5, tension: 800, friction: 80 },
    })
  )[index];
};

const Home = () => {
  const [flipped, setFlipped] = useState([false, false, false, false]);

  const handleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  const springProps = flipped.map((flip, index) => createSpringProps(flipped, index));

  const cardData = [
    {
      frontImage: 'action-1.png',
      backText: 'Position: Defenseman',
    },
    {
      frontImage: 'action-2.png',
      backText: '4 years AAA hockey experience',

    },
    {
      frontImage: 'action-3.png',
      backText: 'Participant in Nashville Jr. Predators P4 Leadership and Growth Mindset Training',
    },
    {
      frontImage: 'action-4.png',
      backText: 'Selected as defenseman for Southern Amateur Hockey Association Training Camp at Miami University in Oxford, Ohio.',
    }
  ];

  return (
    <Box bg="#6B7280" minH="80vh" display="flex" flexDirection="column" alignItems="center" px={4}>
      <Box mb={1} position="relative" overflow="hidden" width="100%" maxWidth="600px" display="flex" justifyContent="center" alignItems="center">
      </Box>
      <Box textAlign="center" mb={10}>
      </Box>
      <Container maxW="container.lg" mt="50px">
        <VStack spacing={8} textAlign="center" py={1}>
          <Heading mb={4} fontFamily="'Righteous', cursive" color="#F9FAFB">Player Cards</Heading>
          <Heading mb={4} fontFamily="'Righteous', cursive" color="#F9FAFB" fontSize="lg">(Click on each card to learn more)</Heading>
        </VStack>
        <SimpleGrid columns={[1, 2, 2]} spacing={10} width="100%" justifyItems="center">
            {cardData.map((card, index) => (
                <Box 
                key={index} 
                p={4} 
                width="100%" 
                maxWidth="400px" 
                cursor="pointer" 
                display="flex" 
                justifyContent="center"
                >
                <animated.div
                    style={{
                    transformStyle: 'preserve-3d',
                    transform: springProps[index]?.transform || 'none',
                    position: 'relative',
                    width: '100%',
                    height: '300px',
                    }}
                    onClick={() => handleFlip(index)}
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
                        border: '8px solid #1E3A8A',  
                        background: 'linear-gradient(white, white) padding-box, linear-gradient(45deg, #1E3A8A, #F9A8D4, #34D399, #E11D48) border-box', 
                    }}
                    >
                    <Image
                        src={`/${card.frontImage}`}
                        alt={`Card ${index + 1} front`}
                        borderRadius="25px" 
                        objectFit="cover"
                        width="100%"
                        height="100%"
                    />
                    <Text
                      position="absolute"
                      bottom="10px"
                      left="50%"
                      transform="translateX(-50%)"
                      fontFamily="'Faster One', cursive"
                      fontSize="16px"
                      color="red" 
                      whiteSpace="nowrap"
                    >
                      Charlie Harvey
                    </Text>
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
                        border: '8px solid #1E3A8A', 
                        background: 'linear-gradient(white, white) padding-box, linear-gradient(45deg, #1E3A8A, #F9A8D4, #34D399, #E11D48) border-box', 
                    }}
                    >
                    <Text fontFamily="'Righteous', cursive" textAlign="center" mb={2} fontWeight="bold">
                        {card.backText}
                    </Text>
                    </animated.div>
                </animated.div>
                </Box>
            ))}
            </SimpleGrid>
      </Container>
      <Box mb={2} width="100%" maxWidth="400px" display="flex" justifyContent="center" alignItems="center">
      {/* <Image
          src="/hockey-stick.png"
          alt="Hockey Stick"
          width="100%"
          height="auto"
        /> */}
      </Box>
    </Box>
  );
};

export default Home;
