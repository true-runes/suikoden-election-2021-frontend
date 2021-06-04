import React from 'react'
import { Box } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { Alert, AlertIcon } from '@chakra-ui/react' // import {
import { Text } from '@chakra-ui/react'

export const SearchTweetsFoundNotice = (props: any) => {
  // ハードコーディングになっているのは良くない
  const tabNamesByTabIndex = ['推し台詞', 'お題小説']

  return (
    <Container maxW="container.xl">
      <hr style={{ margin: '0 0 13px 0' }} />

      <Box p={2}>
        <Alert status="success">
          <AlertIcon />
          <Text align="left">
            {props.searchedUsername} (@{props.searchedScreenName})
            さんの受理された{tabNamesByTabIndex[props.tabIndex]}
            は下記の通りです。
          </Text>
        </Alert>
        <Box p={2}></Box>
        <Alert status="info">
          <AlertIcon />
          <Text align="left">
            投稿した{tabNamesByTabIndex[props.tabIndex]}
            のうち、表示されないツイートがある場合は、
            <a
              href="https://twitter.com/gensosenkyo"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'underline' }}
            >
              主催宛DM
            </a>
            で該当ツイートをお送り下さい。
          </Text>
        </Alert>
      </Box>
    </Container>
  )
}
