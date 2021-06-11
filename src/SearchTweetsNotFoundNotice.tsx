import React from 'react'
import { Container } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Alert, AlertIcon } from '@chakra-ui/react' // import {

export const SearchTweetsNotFoundNotice = () => {
  return (
    <Container maxW="container.xl">
      <hr style={{ margin: '0 0 13px 0' }} />

      <Box p={2}>
        <Alert status="error">
          <AlertIcon />
          <Box p={2} align="left">
            <div>ツイートが見つかりませんでした。</div>
            <div>
              ご自身がなされたツイートが見つからない場合には、
              <a
                href="https://twitter.com/gensosenkyo"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: 'underline' }}
              >
                主催宛DM
              </a>
              で該当ツイートをお送り下さい。
            </div>
          </Box>
        </Alert>
      </Box>
    </Container>
  )
}
