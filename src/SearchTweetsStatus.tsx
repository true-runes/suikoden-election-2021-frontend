import React from 'react'

import { SearchTweetsNotFoundNotice } from './SearchTweetsNotFoundNotice'
import { SearchTweetsFoundNotice } from './SearchTweetsFoundNotice'

export const SearchTweetsStatus = (props: any) => {
  const ShownComponent = () => {
    if (props.status === 'init') {
      return <span></span>
    } else if (props.status === 'found') {
      return (
        <SearchTweetsFoundNotice
          numberOfFoundTweets={props.numberOfFoundTweets}
          searchedScreenName={props.searchedScreenName}
          searchedUsername={props.searchedUsername}
          tabIndex={props.tabIndex}
        />
      )
    } else if (props.status === 'notFound') {
      return <SearchTweetsNotFoundNotice />
    }

    return <span></span>
  }

  return ShownComponent()
}
