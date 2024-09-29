import { Flex, FlexProps } from 'theme-ui'

export const Center = ({ sx, ...rest }: FlexProps) => (
  <Flex
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
    sx={{ ...sx, justifyContent: 'center', alignItems: 'center' }}
  />
)
