import { Heading } from "@chakra-ui/react";
import { GmaeQuery } from "../App";

interface Props {
  gameQuery: GmaeQuery;
}

const GamgeHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return <Heading as="h1">{heading}</Heading>;
};

export default GamgeHeading;
