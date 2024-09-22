import { useState } from 'react';
import { Box, Heading, Text, Container, Center, Image, UnorderedList, ListItem } from '@chakra-ui/react';
import { useSpring, animated } from '@react-spring/web';

const Academics = () => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped((prev) => !prev);
  };

  const springProps = useSpring({
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 800, friction: 80 },
  });

  const cardData = {
    frontImage: 'academic-2.png',
    backText: [
      'A-B Honor Roll',
      'National Junior Honor Society',
      'Bumpus Middle School "Best All-Around" (2 years in a row)',
    ],
  };

  return (
    <Box bg="#6B7280" minH="80vh" display="flex" flexDirection="column" alignItems="center" px={4} mt="100px">
      <Box textAlign="center" mb={10}>
        <Heading fontFamily="'Righteous', cursive" color="#F9FAFB" mb={10}>Academic Achievements</Heading>
        <Text fontFamily="'Righteous', cursive" color="#F9FAFB" fontSize="lg">(Click on the card to learn more)</Text>
      </Box>
      <Container maxW="container.lg" mt="10px">
        <Center>
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
                  border: '8px solid #800020',  
                  background: 'linear-gradient(white, white) padding-box, linear-gradient(45deg, #1E3A8A, #F9A8D4, #34D399, #E11D48) border-box', 
                }}
              >
                <Image
                  src={`/${cardData.frontImage}`}
                  alt={`Card front`}
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
                  border: '8px solid #800020', 
                  background: 'linear-gradient(white, white) padding-box, linear-gradient(45deg, #1E3A8A, #F9A8D4, #34D399, #E11D48) border-box', 
                }}
              >
                <UnorderedList styleType="disc" fontFamily="'Righteous', cursive" textAlign="center" mb={2}>
                  {cardData.backText.map((text, idx) => (
                    <ListItem key={idx}>{text}</ListItem>
                  ))}
                </UnorderedList>
              </animated.div>
            </animated.div>
          </Box>
        </Center>
      </Container>
    </Box>
  );
};

export default Academics;
