import React from 'react'
import { Container } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Alert, AlertIcon } from '@chakra-ui/react' // import {

export const CheckVoteNotFoundNotice = () => {
  return (
    <Container maxW="container.xl">
      <hr style={{ margin: '0 0 13px 0' }} />

      <Box p={2}>
        <Alert status="error">
          <AlertIcon />
          <Box p={2} align="left">
            <div>ツイートが見つかりませんでした。以下の点をご確認下さい。</div>
          </Box>
        </Alert>
      </Box>
      <Box p={2}>
        <Alert status="info">
          <AlertIcon />
          <Box p={2} align="left">
            <div>DM による投票はこのページでチェックすることはできません。</div>
          </Box>
        </Alert>
      </Box>
      <Box p={2}>
        <Alert status="info">
          <AlertIcon />
          <Box p={2} align="left">
            <div>
              ツイートを削除したりアカウントに鍵を付けたりした場合には、チェック結果へ反映されない場合があります。
            </div>
          </Box>
        </Alert>
      </Box>
      <Box p={2}>
        <Alert status="info">
          <AlertIcon />
          <Box p={2} align="left">
            <div>
              ツイートが見つからなかった場合は集計に反映されない可能性があります。時間をおいて再度チェックし、それでも見つからない場合は
              <a
                href="https://twitter.com/gensosenkyo"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: 'underline' }}
              >
                主催宛DM
              </a>
              にご連絡下さい。
            </div>
          </Box>
        </Alert>
      </Box>
    </Container>
  )
}
