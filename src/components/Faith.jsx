import { useState } from 'react';
import { Box, Heading, Text, Container, VStack, SimpleGrid, Image, UnorderedList, ListItem, Image as ChakraImage } from '@chakra-ui/react';
import { useSpring, animated } from '@react-spring/web';

const Faith = () => {
  const [flipped, setFlipped] = useState(false);

  const springProps = useSpring({
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 800, friction: 80 },
  });

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <Box bg="#6B7280" minH="80vh" display="flex" flexDirection="column" alignItems="center" px={4}>
    <ChakraImage 
        src="/cross.png" 
        alt="Divider" 
        width="20%" 
        mt="10px" 
        mb="30px" 
        objectFit="contain"
      />
      <Box mb={1} position="relative" overflow="hidden" width="100%" maxWidth="600px" display="flex" justifyContent="center" alignItems="center">
      </Box>
      <Box textAlign="center" mb={10}>
      </Box>
      <Container maxW="container.lg" mt="50px">
        <VStack spacing={8} textAlign="center" py={1}>
          <Heading mb={4} fontFamily="'Righteous', cursive" color="#F9FAFB">Faith</Heading>
          <Heading mb={4} fontFamily="'Righteous', cursive" color="#F9FAFB" fontSize="lg">(Click on the card to learn more)</Heading>
        </VStack>
        <SimpleGrid columns={1} spacing={10} width="100%" justifyItems="center">
          <Box 
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
                transform: springProps.transform,
                position: 'relative',
                width: '100%',
                height: '300px',
              }}
              onClick={handleFlip}
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
                  border: '8px solid #6D28D9', // Deep Purple
                  background: 'linear-gradient(white, white) padding-box, linear-gradient(45deg, #6D28D9, #F9A8D4, #34D399, #E11D48) border-box', 
                }}
              >
                <Image
                  src={`/faith-image.png`}
                  alt={`Faith Card front`}
                  borderRadius="25px" 
                  objectFit="cover"
                  width="100%"
                  height="100%"
                />
                {/* <Text
                  position="absolute"
                  bottom="10px"
                  left="50%"
                  transform="translateX(-50%)"
                  fontFamily="'Faster One', cursive"
                  fontSize="14px"
                  color="#6D28D9" // Matching Deep Purple
                  whiteSpace="nowrap"
                >
                  Faith and Spirituality
                </Text> */}
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
                  border: '8px solid #6D28D9', // Deep Purple
                }}
              >
                <Text fontFamily="'Righteous', cursive" textAlign="center" mb={2} fontWeight="bold">
                  Key Aspects of Faith
                </Text>
                <UnorderedList textAlign="left">
                  <ListItem>Trust in a higher power</ListItem>
                  <ListItem>Practice of compassion and love</ListItem>
                  <ListItem>Belief in the unseen</ListItem>
                  <ListItem>Commitment to spiritual growth</ListItem>
                </UnorderedList>
              </animated.div>
            </animated.div>
          </Box>
        </SimpleGrid>
      </Container>
      <Box mb={2} width="100%" maxWidth="400px" display="flex" justifyContent="center" alignItems="center">
      </Box>
    </Box>
  );
};

export default Faith;
