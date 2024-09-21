import { Box, Heading, Container, VStack, SimpleGrid } from '@chakra-ui/react';

const HockeyFilm = () => {
  const videoData = [
    {
      videoUrl: 'hockey-film-1.mov', 
      description: 'Charlie Harvey - Game Highlights 1',
    },
    {
      videoUrl: 'hockey-film-2.mov',
      description: 'Charlie Harvey - Game Highlights 2',
    },
    {
      videoUrl: 'hockey-film-3.mov',
      description: 'Charlie Harvey - Skills Training Session',
    },
    {
      videoUrl: 'hockey-film-4.mov',
      description: 'Charlie Harvey - Defensive Tactics in Game',
    },
    {
      videoUrl: 'hockey-film-5.mov',
      description: 'Charlie Harvey - Defensive Tactics in Game',
    },
    {
      videoUrl: 'hockey-film-6.MOV',
      description: 'Charlie Harvey - Defensive Tactics in Game',
    },
  ];

  return (
    <Box bg="#6B7280" minH="80vh" display="flex" flexDirection="column" alignItems="center" px={4}>
      <Box textAlign="center" mb={10}>
      </Box>
      <Container maxW="container.lg" mt="50px">
        <VStack spacing={8} textAlign="center" py={1}>
          <Heading mb={4} fontFamily="'Righteous', cursive" color="#F9FAFB">Hockey Film</Heading>
          <Heading mb={4} fontFamily="'Righteous', cursive" color="#F9FAFB" fontSize="lg">(Watch game highlights and training videos)</Heading>
        </VStack>
        <SimpleGrid columns={[1, 2, 2]} spacing={10} width="100%" justifyItems="center">
          {videoData.map((video, index) => (
            <Box
              key={index}
              p={4}
              width="100%"
              maxWidth="400px"
              cursor="pointer"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Box
                position="relative"
                width="100%"
                height="300px"
                borderRadius="35px"
                overflow="hidden"
                border="8px solid white"
                boxShadow="0px 6px 12px rgba(0, 0, 0, 0.15)"
                background="linear-gradient(white, white) padding-box, linear-gradient(45deg, white, #F9A8D4, #34D399, #E11D48) border-box"
              >
                {/* Video Container */}
                <video
                  src={video.videoUrl}
                  controls
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '25px'
                  }}
                />
              </Box>
              <Heading
                mt={4}
                fontFamily="'Righteous', cursive"
                fontSize="lg"
                color="#F9FAFB"
                textAlign="center"
              >
                {video.description}
              </Heading>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default HockeyFilm;
