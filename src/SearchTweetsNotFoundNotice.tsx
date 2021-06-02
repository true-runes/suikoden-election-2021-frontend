import React from 'react'
import { Box } from '@chakra-ui/react'
import { Alert, AlertIcon } from '@chakra-ui/react' // import {

export const SearchTweetsNotFoundNotice = () => {
  return (
    <Box p={2}>
      <Alert status="error">
        <AlertIcon />
        <Box p={2} align="left">
          <p>ツイートが見つかりませんでした。</p>
          <br />
          <p>
            投稿したにも関わらずこのメッセージが出る場合には、
            <a
              href="https://twitter.com/gensosenkyo"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'underline' }}
            >
              主催までご連絡下さい
            </a>
            。
          </p>
        </Box>
      </Alert>
    </Box>
  )
}
