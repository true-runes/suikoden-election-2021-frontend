import React from 'react'
import { Box } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { Alert, AlertIcon } from '@chakra-ui/react' // import {
import { Text } from '@chakra-ui/react'

export const CheckVoteFoundNotice = (props: any) => {
  return (
    <Container maxW="container.xl">
      <hr style={{ margin: '0 0 13px 0' }} />

      <Box p={2}>
        <Alert status="success">
          <AlertIcon />
          <Text align="left">
            {props.searchedUsername} (@{props.searchedScreenName})
            さんの投票ツイートは以下の通りです。
          </Text>
        </Alert>
      </Box>
    </Container>
  )
}
