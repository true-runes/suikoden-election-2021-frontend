import React from 'react'

import { CheckVoteNotFoundNotice } from './CheckVoteNotFoundNotice'
import { CheckVoteFoundNotice } from './CheckVoteFoundNotice'

export const CheckVoteStatus = (props: any) => {
  const ShownComponent = () => {
    if (props.status === 'init') {
      return <span></span>
    } else if (props.status === 'found') {
      return (
        <CheckVoteFoundNotice
          numberOfFoundTweets={props.numberOfFoundTweets}
          searchedScreenName={props.searchedScreenName}
          searchedUsername={props.searchedUsername}
        />
      )
    } else if (props.status === 'notFound') {
      return <CheckVoteNotFoundNotice />
    }

    return <span></span>
  }

  return ShownComponent()
}
