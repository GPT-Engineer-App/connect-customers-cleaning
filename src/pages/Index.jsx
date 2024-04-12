import React, { useState } from "react";
import { Box, Flex, Heading, Text, Button, Image, Avatar, Input, IconButton, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, VStack, HStack } from "@chakra-ui/react";
import { FaPlus, FaSearch } from "react-icons/fa";

const Index = () => {
  const [selectedManager, setSelectedManager] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const managers = [
    { id: 1, name: "John Doe", img: "https://images.unsplash.com/photo-1697634203747-5282f52a8585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwbWFufGVufDB8fHx8MTcxMjk1Nzc5Mnww&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 2, name: "Jane Smith", img: "https://images.unsplash.com/photo-1487054119077-25d803b1aec6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwd29tYW58ZW58MHx8fHwxNzEyOTU3NzkyfDA&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 3, name: "Mike Johnson", img: "https://images.unsplash.com/photo-1699266699785-d527c33c037e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxwb3J0cmFpdCUyMG9mJTIwbWFufGVufDB8fHx8MTcxMjk1Nzc5Mnww&ixlib=rb-4.0.3&q=80&w=1080" },
  ];

  const handleManagerClick = (manager) => {
    setSelectedManager(manager);
    onOpen();
  };

  return (
    <Box p={8}>
      <Flex justify="space-between" align="center" mb={8}>
        <Heading as="h1" size="xl">
          Cleaning Platform Dashboard
        </Heading>
        <Button leftIcon={<FaPlus />} colorScheme="blue">
          New Request
        </Button>
      </Flex>

      <Flex mb={8}>
        <Input placeholder="Search managers..." mr={4} />
        <IconButton icon={<FaSearch />} aria-label="Search" />
      </Flex>

      <Heading as="h2" size="lg" mb={4}>
        Available Managers
      </Heading>

      <Flex wrap="wrap">
        {managers.map((manager) => (
          <Box key={manager.id} borderWidth={1} borderRadius="lg" p={4} m={2} cursor="pointer" onClick={() => handleManagerClick(manager)}>
            <Avatar src={manager.img} size="xl" mb={4} />
            <Text fontWeight="bold">{manager.name}</Text>
          </Box>
        ))}
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Manager Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedManager && (
              <VStack align="stretch" spacing={4}>
                <Image src={selectedManager.img} borderRadius="full" />
                <Heading as="h3" size="md">
                  {selectedManager.name}
                </Heading>
                <Text>Some details about the manager...</Text>
              </VStack>
            )}
          </ModalBody>
          <ModalFooter>
            <HStack spacing={4}>
              <Button onClick={onClose}>Close</Button>
              <Button colorScheme="blue">Request Cleaning</Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Index;
