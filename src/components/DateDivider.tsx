import { Flex, Heading ,Divider} from '@chakra-ui/react'

const DateDivider = ({date}:{date:string}) => {
  return (
    <Flex alignItems="center" gap={6}>
  <Heading as="h4" size="lg" sx={{ whiteSpace: "nowrap" }}>
    {date}
  </Heading>
  <Divider border="4px" borderRadius={"2xl"} />
</Flex>
  )
}

export default DateDivider