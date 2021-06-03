import React from 'react'
import { Image } from '@chakra-ui/react'
import { Center } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

import NowLoadingFlipGif from './images/now_loading_flip_h.gif'
import NowLoadingBounceGif from './images/now_loading_bounce.gif'

export const NowLoading = (props: any) => {
  return (
    <Box p={2} style={{ margin: '0 0 20px 0' }}>
      <Center>
        <Image
          src={
            props.area === 'isFoundArea'
              ? NowLoadingFlipGif
              : NowLoadingBounceGif
          }
          boxSize="64px"
        />
      </Center>
    </Box>
  )
}
