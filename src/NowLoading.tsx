import React from 'react'
import { Image } from 'semantic-ui-react'

import NowLoadingGif from './images/now_loading.gif'

export const NowLoading = () => {
  return (
    <div>
      <Image src={NowLoadingGif} size="mini" />
    </div>
  )
}
