/* eslint-disable react/prop-types */
import { Box, Flex, Heading, Spacer, Link, IconButton, useDisclosure, Divider, Text } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { CgMenuGridO } from 'react-icons/cg';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const Navbar = ({ scrollToSection, refs }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showCloseIcon, setShowCloseIcon] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShowCloseIcon(true), 200);
    } else {
      setShowCloseIcon(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const menuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.01,
        ease: 'easeInOut',
      },
    },
    exit: { opacity: 0, x: '100%' },
  };

  const bounceAnimation = {
    animate: { y: [0, -5, 0] },
    transition: { duration: 0.5, repeat: Infinity, repeatType: 'loop' }
  };

  return (
    <Box>
      <Flex align="center" h="120px" px="2rem" py="2.5rem" position="relative" mb="150px" id="navbar">
        <Heading as="h1" size="lg" fontFamily="'Righteous', cursive" fontSize="4xl">
          Charlie Harvey
        </Heading>
        <Spacer />
        <Flex display={['none', 'none', 'flex']} fontFamily="'Righteous', cursive" fontSize="lg" color="#FF0000">
          <Link mx={4} onClick={() => scrollToSection(refs.aboutRef)}>Player Bio</Link>
          <Link mx={4} onClick={() => scrollToSection(refs.projectsRef)}>Track and Field</Link>
          <Link mx={4} onClick={() => scrollToSection(refs.myExperienceRef)}>Cross Country</Link>
          <Link mx={4} onClick={() => scrollToSection(refs.myEducationRef)}>Hockey</Link>
          <Link mx={4} onClick={() => scrollToSection(refs.contactRef)}>Faith</Link>
        </Flex>

        <IconButton
          aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
          icon={
            showCloseIcon ? (
              <motion.div
                whileHover={{ scale: 1.1 }}
                {...bounceAnimation}
              >
                <CloseIcon />
              </motion.div>
            ) : (
              <motion.div
                whileHover={{ scale: 1.1 }}
                {...bounceAnimation}
              >
                <CgMenuGridO color="#FF0000" />
              </motion.div>
            )
          }
          display={['block', 'block', 'none']}
          onClick={isOpen ? onClose : onOpen}
          variant="unstyled"
          fontSize="30px"
          color="#FF0000"
          _hover={{ bg: 'none' }}
          _focus={{ boxShadow: 'none' }}
          mt="20px"
          mb="20px"
        />
      </Flex>

      {isOpen && (
        <motion.div initial="hidden" animate="visible" exit="exit" variants={menuVariants}>
          <Box
            ref={menuRef}
            position="fixed"
            top="0"
            right="0"
            width="70%"
            height="100vh"
            bg="#89CFF0"
            zIndex="overlay"
            color="#FF0000"
            borderTopLeftRadius="30px"
            borderBottomLeftRadius="30px"
            boxShadow="0 0 15px rgba(0, 0, 0, 0.8)"
            overflow="hidden"
            p={0}
            m={0}
            transform="translateX(0)"
          >
            <Flex alignItems="center" justifyContent="space-between" mb="1rem" p="20px" backgroundColor="#89CFF0">
              <Text fontSize="2xl" fontWeight="bold" fontFamily="'Righteous', cursive" mt="15px">
                Menu
              </Text>
              <IconButton
                aria-label="Close Menu"
                icon={<CloseIcon />}
                onClick={onClose}
                variant="unstyled"
                fontSize="24px"
                color="#FF0000"
                padding="10px"
                mb="15px"
              />
            </Flex>
            <Divider borderColor="#FF0000" />
            <Flex direction="column" alignItems="flex-start" h="80%" ml="20px" mt="20px">
              <Link fontSize="lg" my={2} onClick={() => { scrollToSection(refs.aboutRef); onClose(); }} fontFamily="'Righteous', cursive">
                Player Bio
              </Link>
              <Link fontSize="lg" my={2} onClick={() => { scrollToSection(refs.projectsRef); onClose(); }} fontFamily="'Righteous', cursive">
                Track and Field
              </Link>
              <Link fontSize="lg" my={2} onClick={() => { scrollToSection(refs.myExperienceRef); onClose(); }} fontFamily="'Righteous', cursive">
                Cross Country
              </Link>
              <Link fontSize="lg" my={2} onClick={() => { scrollToSection(refs.myEducationRef); onClose(); }} fontFamily="'Righteous', cursive">
                Hockey
              </Link>
              <Link fontSize="lg" my={2} onClick={() => { scrollToSection(refs.contactRef); onClose(); }} fontFamily="'Righteous', cursive">
                Faith
              </Link>
            </Flex>
          </Box>
        </motion.div>
      )}
    </Box>
  );
};

export default Navbar;