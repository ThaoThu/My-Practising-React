import { Box } from "@material-ui/core";

type WelcomMsgProps = {
  position : string,
  country ?: string
}
export default function WelcomeMsg({position, country='VN'}: WelcomMsgProps) {
  return (
    <Box mb={1}>
      Welcome {position} from {country}
    </Box>
  )
}
