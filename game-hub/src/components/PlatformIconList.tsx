import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import Platform from "../entities/Platform";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms: platform }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    android: FaAndroid,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <>
      <HStack marginY={"1px"}>
        {platform.map((platform) => (
          <Icon
            key={platform.id}
            color="gray.500"
            as={iconMap[platform.slug]}
          />
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconList;
