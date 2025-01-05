import { Box, Heading, Container, VStack, SimpleGrid } from '@chakra-ui/react';

const HockeyFilm = () => {
  const videoData = [
    {
      videoUrl: 'hockey-film-13.mov',
      description: 'Good F2 Pickup',
    },
    {
      videoUrl: 'hockey-film-20.mov',
      description: 'Good Backcheck',
    },
    {
      videoUrl: 'hockey-film-14.mov',
      description: 'Physical Defensive Play',
    },
    // {
    //   videoUrl: 'hockey-film-19.mov',
    //   description: 'Physical Defensive Play 2',
    // },
    // {
    //   videoUrl: 'hockey-film-17.mov',
    //   description: 'Good Zone Entry',
    // },
    // {
    //   videoUrl: 'hockey-film-16.mov',
    //   description: 'Good Puck Movement During Power Play',
    // },
    // {
    //   videoUrl: 'hockey-film-15.mov',
    //   description: 'Primary Assist',
    // },
    // {
    //   videoUrl: 'hockey-film-18.mov',
    //   description: 'Practice in Birmingham-Good Shot',
    // },
  ];

  return (
    <Box bg="#6B7280" minH="80vh" display="flex" flexDirection="column" alignItems="center" px={4}>
      <Box textAlign="center" mb={10}></Box>
      <Container maxW="container.lg" mt="50px">
        <VStack spacing={8} textAlign="center" py={1}>
          <Heading mb={2} fontFamily="'Righteous', cursive" color="#F9FAFB">Hockey Film</Heading>
          <Heading mb={2} fontFamily="'Righteous', cursive" color="#F9FAFB" fontSize="lg">Charlie Harvey #22</Heading>
          <Heading mb={2} fontFamily="'Righteous', cursive" color="#F9FAFB" fontSize="lg">(Click to watch Hockey Film)</Heading>
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
                backgroundImage="url('/video-film.png')" 
                backgroundSize="cover"
                backgroundPosition="center"
              >
                {/* Video Container */}
                <video
                  src={video.videoUrl}
                  controls
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '25px',
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
