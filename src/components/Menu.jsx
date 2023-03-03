import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Button,
  useDisclosure,
  VStack,
  HStack,
  Input,
} from "@chakra-ui/react";

import logo from "../assests/logo.svg";
import { Link } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <div className="first">
        <ChakraProvider>
          <Box>
            <Button
              ref={btnRef}
              colorScheme="white"
              color={"black"}
              fontSize={"37px"}
              marginRight={"0px"}
              onClick={onOpen}
            >
              <BiMenuAltRight />
            </Button>

            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>
                  <div className="nike-logo">
                    <Link to={"/"}>
                      <img src={""} width="40vw" alt="nike" />
                    </Link>
                  </div>
                </DrawerHeader>

                <DrawerBody>
                  <VStack>
                    <Button
                      w={"full"}
                      variant={"ghost"}
                      colorScheme={"blue"}
                      color={"Black"}
                    >
                      {" "}
                      <Link to={"/men"} color={"Black"}>
                        Men
                      </Link>
                    </Button>
                    <Button
                      w={"full"}
                      variant={"ghost"}
                      colorScheme={"pink"}
                      color={"Black"}
                    >
                      {" "}
                      <Link to={"women"}>Women</Link>
                    </Button>
                    <Button
                      w={"full"}
                      variant={"ghost"}
                      colorScheme={"green"}
                      color={"Black"}
                    >
                      {" "}
                      <Link to={"/kids"}>Kids</Link>
                    </Button>
                    <Button
                      w={"full"}
                      variant={"ghost"}
                      colorScheme={"orange"}
                      color={"Black"}
                    >
                      {" "}
                      <Link to={"/cart"}>Cart</Link>
                    </Button>
                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Box>
        </ChakraProvider>
      </div>
    </>
  );
};

export default Menu;
