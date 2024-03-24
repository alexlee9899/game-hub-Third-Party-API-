import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const criticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 65 ? "yellow" : "";
  return (
    <Badge
      colorScheme={color}
      fontSize="14px"
      paddingX="5px"
      borderRadius="4px"
    >
      {score}
    </Badge>
  );
};

export default criticScore;
