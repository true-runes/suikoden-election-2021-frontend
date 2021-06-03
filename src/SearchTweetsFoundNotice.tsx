import React from 'react'
import { Box } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { Alert, AlertIcon } from '@chakra-ui/react' // import {
import { Text } from '@chakra-ui/react'

export const SearchTweetsFoundNotice = (props: any) => {
  return (
    <Container maxW="container.xl">
      <hr style={{ margin: '0 0 13px 0' }} />

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
            削除済みツイートがある場合には上記の数字が正しくないことがありますが、集計は正しく行われています。
          </Text>
        </Alert>
        <Box p={2}></Box>
        <Alert status="info">
          <AlertIcon />
          <Text align="left">
            ご自身のツイートの全てが表示されていない場合は
            <a
              href="https://twitter.com/gensosenkyo"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'underline' }}
            >
              主催宛DM
            </a>
            でご連絡下さい。
          </Text>
        </Alert>
      </Box>
    </Container>
  )
}
