import { useState } from 'react';
import { Box, Heading, Text, Container, SimpleGrid, Image, UnorderedList, ListItem } from '@chakra-ui/react';
import { useSpring, animated } from '@react-spring/web';

const createSpringProps = (flips, index) => {
  return flips.map(flip =>
    useSpring({
      transform: `perspective(600px) rotateY(${flip ? 180 : 0}deg)`,
      config: { mass: 5, tension: 800, friction: 80 },
    })
  )[index];
};

const Academics = () => {
  const [flipped, setFlipped] = useState([false, false]);

  const handleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  const springProps = flipped.map((flip, index) => createSpringProps(flipped, index));

  const cardData = [
    {
      frontImage: 'academic-1.png',
      backText: [
        'Graduated with Honors',
        'Dean’s List 4 semesters',
        'Student Government Representative',
        'Captain of Debate Team',
      ],
    },
    {
      frontImage: 'academic-2.png',
      backText: [
        'Recipient of Academic Excellence Award',
        'Published in University Journal',
        'Teaching Assistant for 2 semesters',
        'Graduated Summa Cum Laude',
      ],
    },
  ];

  return (
    <Box bg="#6B7280" minH="80vh" display="flex" flexDirection="column" alignItems="center" px={4} mt="100px">
      <Box textAlign="center" mb={10}>
        <Heading fontFamily="'Righteous', cursive" color="#F9FAFB" mb={10}>Academic Achievements</Heading>
        <Text fontFamily="'Righteous', cursive" color="#F9FAFB" fontSize="lg">(Click on each card to learn more)</Text>
      </Box>
      <Container maxW="container.lg" mt="10px">
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
                    border: '8px solid #800020',  
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
                    {card.backText.map((text, idx) => (
                      <ListItem key={idx}>{text}</ListItem>
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

export default Academics;
