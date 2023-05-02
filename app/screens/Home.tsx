/**
 * @description Home screen
 */

import { Box, Heading, Text, HStack, Icon, Avatar, Button } from "native-base";
import { Feather } from "@expo/vector-icons";

const ScreenHome = (): JSX.Element => {
  return (
    <Box px="4" py="8" bg={"background"} flexGrow="1">
      <Heading size="2xl" color="secondary.base">
        Hola, bienvenido
      </Heading>
      <Text fontSize={"md"} color="secondaryAlt.base" fontWeight={"medium"}>
        Continua aprendiendo a desarrollar apps
      </Text>
      <Box rounded={"md"} bg="white" px="4" py="6" my={"6"} shadow={2}>
        <Heading color={"secondary.base"} fontWeight="semibold" size={"md"}>
          Desarrollo de Aplicaciones Android mediante B4A
        </Heading>
        <HStack alignItems={"center"} mt={4} space={4}>
          <HStack alignItems={"center"}>
            <Icon
              as={Feather}
              name="book"
              color={"secondaryAlt.base"}
              size={"md"}
              mr={1}
            />
            <Text
              color={"secondaryAlt.base"}
              fontWeight="medium"
              fontSize={"md"}
            >
              41 Capítulos
            </Text>
          </HStack>
          <HStack alignItems={"center"}>
            <Icon
              as={Feather}
              name="clock"
              color={"secondaryAlt.base"}
              size={"md"}
              mr={1}
            />
            <Text
              color={"secondaryAlt.base"}
              fontWeight="medium"
              fontSize={"md"}
            >
              10h 24min
            </Text>
          </HStack>
        </HStack>
        <HStack mt={4} alignItems={"center"}>
          <Avatar
            size={"xs"}
            source={require("../assets/images/avatars/3.jpg")}
          >
            Maam España Madrid
          </Avatar>
          <Avatar
            ml={-2}
            size={"xs"}
            source={require("../assets/images/avatars/4.jpg")}
          >
            Yvan Acosta
          </Avatar>
          <Avatar
            ml={-2}
            size={"xs"}
            source={require("../assets/images/avatars/2.jpg")}
          >
            David Rojas
          </Avatar>
          <Avatar
            ml={-2}
            size={"xs"}
            source={require("../assets/images/avatars/1.jpg")}
          >
            Jaderson Viana Gramoso
          </Avatar>
          <Text
            color={"secondaryAlt.base"}
            fontWeight="medium"
            fontSize={"md"}
            ml={4}
          >
            +100 Inscritos
          </Text>
        </HStack>
        <HStack mt={4} justifyContent="space-between">
          <Button
            colorScheme={"primary"}
            flexGrow={1}
            variant={"default"}
            leftIcon={
              <Icon as={Feather} name="play" color={"white"} size={"sm"} />
            }
          >
            Continuar
          </Button>
          <Button
            ml={4}
            rounded={12}
            colorScheme={"primary"}
            variant={"outline"}
            rightIcon={
              <Icon
                as={Feather}
                name="share-2"
                color={"primary.base"}
                size={"sm"}
                mr={1}
              />
            }
          ></Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default ScreenHome;
