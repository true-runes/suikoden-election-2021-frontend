import React from 'react'
import { Box } from '@chakra-ui/react'
import { Alert, AlertIcon } from '@chakra-ui/react' // import {
import { Text } from '@chakra-ui/react'

export const SearchTweetsFoundNotice = (props: any) => {
  return (
    <Box p={2}>
      <Alert status="success">
        <AlertIcon />
        <Text align="left">
          {props.searchedUsername} (@{props.searchedScreenName})
          さんのツイートが {props.numberOfFoundTweets}件 見つかりました。
        </Text>
      </Alert>
      <Box p={2}></Box>
      <Alert status="info">
        <AlertIcon />
        <Text align="left">
          検索結果にツイートが表示されれば、応募は完了しています。
        </Text>
      </Alert>
      <Box p={2}></Box>
      <Alert status="info">
        <AlertIcon />
        <Text align="left">
          削除済みツイートがある場合には上記の数字が正しくないことがありますが、集計は正しく行われています。
        </Text>
      </Alert>{' '}
    </Box>
  )
}
