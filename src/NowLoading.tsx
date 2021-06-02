import React from 'react'
import { Image } from '@chakra-ui/react'

import NowLoadingGif from './images/now_loading_bounce.gif'

export const NowLoading = () => {
  return (
    <div>
      <Image src={NowLoadingGif} boxSize="64px" />
    </div>
  )
}
