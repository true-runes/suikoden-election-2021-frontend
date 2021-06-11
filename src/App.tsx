import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { Container } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { Alert, AlertIcon } from '@chakra-ui/react' // import {
import { Box } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { FormControl, FormLabel } from '@chakra-ui/react'
import { Grid } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import { Link as ChakraLink } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'
import { Menu, MenuButton } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
} from '@chakra-ui/react'

import { ExternalLinkIcon, HamburgerIcon } from '@chakra-ui/icons'
import { FaTwitter } from 'react-icons/fa'
import { CgWebsite } from 'react-icons/cg'

import axios from 'axios'
import { Tweet } from 'react-twitter-widgets'
import Countdown, { zeroPad } from 'react-countdown'

import './App.scss'
import logo from './images/header.jpg'
import { NowLoading } from './NowLoading'
import { SearchTweetsStatus } from './SearchTweetsStatus'
import { CheckVoteStatus } from './CheckVoteStatus'

// TODO: .eslintrc.json で無理矢理 OFF にしたものは ON で通るようにする
// "@typescript-eslint/no-explicit-any": "off",
// "@typescript-eslint/explicit-module-boundary-types": "off"

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [apiResponses, setApiResponses] = useState([
    {
      id: 0,
      tweetId: '',
      username: '',
      screenName: '',
      fullText: '',
      isRetweet: false,
      url: '',
      tweetedAt: '',
      mediaExists: '',
      isPublic: false,
      isMentionedToGssAdmin: false,
    },
  ])

  const [voteApiResponses, setVoteApiResponses] = useState([
    {
      id: 0,
      tweetId: '',
      username: '',
      screenName: '',
      fullText: '',
      isRetweet: false,
      url: '',
      tweetedAt: '',
      mediaExists: '',
      isPublic: false,
      isMentionedToGssAdmin: false,
    },
  ])

  const [alreadyFetchedApi, setAlreadyFetchedApi] = useState(false)
  const [voteAlreadyFetchedApi, setVoteAlreadyFetchedApi] = useState(false)
  const [searchResultStatus, setSearchResultStatus] = useState('init')
  const [voteSearchResultStatus, setVoteSearchResultStatus] = useState('init')
  const [numberOfFoundTweets, setNumberOfFoundTweets] = useState(0)
  const [voteNumberOfFoundTweets, setVoteNumberOfFoundTweets] = useState(0)
  const [submittedScreenName, setSubmittedScreenName] = useState('')
  const [voteSubmittedScreenName, setVoteSubmittedScreenName] = useState('')
  const [isShownNowLoadingGifIcon, setIsShowNowLoadingGifIcon] = useState(false)
  const [voteIsShownNowLoadingGifIcon, setVoteIsShowNowLoadingGifIcon] =
    useState(false)
  const [searchedScreenName, setSearchedScreenName] = useState('')
  const [voteSearchedScreenName, setVoteSearchedScreenName] = useState('')
  const [searchedUsername, setSearchedUsername] = useState('')
  const [voteSearchedUsername, setVoteSearchedUsername] = useState('')
  const [waitingTweetIsShownText, setWaitingTweetIsShownText] = useState(false)
  const [voteWaitingTweetIsShownText, setVoteWaitingTweetIsShownText] =
    useState(false)

  // 0 が推し台詞、1 がお題小説yarn
  const [tabIndex, setTabIndex] = useState(0)

  const changeSubmittedScreenName = (event: any) => {
    setSubmittedScreenName(event.target.value)
  }

  const changeVoteSubmittedScreenName = (event: any) => {
    setVoteSubmittedScreenName(event.target.value)
  }

  const voteSearchTweets = (event: any) => {
    // 必要に応じて各種の値を初期化する
    setVoteAlreadyFetchedApi(true)
    setVoteSearchResultStatus('init')
    setVoteNumberOfFoundTweets(0)
    setVoteIsShowNowLoadingGifIcon(true)
    setVoteSearchedScreenName('')
    setVoteSearchedUsername('')

    const apiUri: any = process.env.REACT_APP_API_URI_CHECK_VOTE

    axios
      .get(apiUri, {
        params: {
          screen_name: voteSubmittedScreenName,
        },
      })
      .then((response) => {
        setVoteWaitingTweetIsShownText(true)
        setVoteApiResponses(response.data)

        if (response.data[0]) {
          setVoteSearchResultStatus('found')
          setVoteNumberOfFoundTweets(response.data.length)
          setVoteSearchedScreenName(response.data[0].screenName)
          setVoteSearchedUsername(response.data[0].username)
        } else {
          setVoteSearchResultStatus('notFound')
        }

        setVoteIsShowNowLoadingGifIcon(false)
      })

    event.preventDefault()
  }

  const searchTweets = (event: any) => {
    // 必要に応じて各種の値を初期化する
    setAlreadyFetchedApi(true)
    setSearchResultStatus('init')
    setNumberOfFoundTweets(0)
    setIsShowNowLoadingGifIcon(true)
    setSearchedScreenName('')
    setSearchedUsername('')

    let apiUri: any
    // ハードコーディングは避ける
    if (tabIndex === 0) {
      apiUri = process.env.REACT_APP_API_URI_THEME_NOVELS
    } else {
      apiUri = process.env.REACT_APP_API_URI_RECOMMENDED_QUOTES
    }

    axios
      .get(apiUri, {
        params: {
          screen_name: submittedScreenName,
        },
      })
      .then((response) => {
        setWaitingTweetIsShownText(true)
        setApiResponses(response.data)

        if (response.data[0]) {
          setSearchResultStatus('found')
          setNumberOfFoundTweets(response.data.length)
          setSearchedScreenName(response.data[0].screenName)
          setSearchedUsername(response.data[0].username)
        } else {
          setSearchResultStatus('notFound')
        }

        setIsShowNowLoadingGifIcon(false)
      })

    event.preventDefault()
  }

  return (
    <div className="App">
      <Flex bg="#242222" style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
        <Box p={2}>
          <Menu>
            <MenuButton
              color="white"
              _active={{
                color: 'white',
              }}
              _hover={{
                color: 'white',
                stroke: 'white',
              }}
              onClick={onOpen}
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
              borderStyle="solid"
            />
          </Menu>
        </Box>
        <Box p={4}>
          <Text color="#FFFFFF">
            <BrowserRouter>
              <ChakraLink href="/" style={{ textDecoration: 'none' }}>
                幻水総選挙2021
              </ChakraLink>
            </BrowserRouter>
          </Text>
        </Box>
      </Flex>
      <Drawer
        autoFocus={false}
        placement="left"
        onClose={onClose}
        isOpen={isOpen}
        returnFocusOnClose={false}
      >
        <DrawerOverlay />
        <DrawerContent style={{ zIndex: 1001, backgroundColor: '#f4f7f9' }}>
          <DrawerHeader borderBottomWidth="2px">
            <Box p={2}>幻水総選挙2021</Box>
          </DrawerHeader>
          <DrawerBody>
            <Box p={2}>
              <Icon
                as={FaTwitter}
                style={{ margin: '0 10px 0 0' }}
                color="#1da1f2"
              />
              <ChakraLink href="https://twitter.com/gensosenkyo" isExternal>
                幻水総選挙アカウント (@gensosenkyo)
                <ExternalLinkIcon mx="2px" />
              </ChakraLink>
            </Box>
            <hr style={{ margin: '10px 0' }} />
            <Box p={2}>
              <Heading as="h5" size="sm">
                過去の総選挙
              </Heading>
            </Box>
            <Box p={2}>
              <ChakraLink
                href="https://election-2020.suikoden.info/"
                isExternal
              >
                <Icon
                  as={CgWebsite}
                  style={{ margin: '0 10px 0 0' }}
                  color="#1E90FF"
                />
                幻水総選挙2020
                <ExternalLinkIcon mx="2px" />
              </ChakraLink>
            </Box>
            <Box p={2}>
              <ChakraLink
                href="https://election-2019.suikoden.info/"
                isExternal
              >
                <Icon
                  as={CgWebsite}
                  style={{ margin: '0 10px 0 0' }}
                  color="#1E90FF"
                />
                幻水総選挙2019
                <ExternalLinkIcon mx="2px" />
              </ChakraLink>
            </Box>
            <Box p={2}>
              <ChakraLink
                href="https://election-2018.suikoden.info/"
                isExternal
              >
                <Icon
                  as={CgWebsite}
                  style={{ margin: '0 10px 0 0' }}
                  color="#1E90FF"
                />
                幻水総選挙2018
                <ExternalLinkIcon mx="2px" />
              </ChakraLink>
            </Box>
            <Box p={2}>
              <ChakraLink
                href="https://election-2017.suikoden.info/"
                isExternal
              >
                <Icon
                  as={CgWebsite}
                  style={{ margin: '0 10px 0 0' }}
                  color="#1E90FF"
                />
                幻水総選挙2017
                <ExternalLinkIcon mx="2px" />
              </ChakraLink>
            </Box>
            <Box p={2}>
              <ChakraLink
                href="https://election-2016.suikoden.info/"
                isExternal
              >
                <Icon
                  as={CgWebsite}
                  style={{ margin: '0 10px 0 0' }}
                  color="#1E90FF"
                />
                幻水総選挙2016
                <ExternalLinkIcon mx="2px" />
              </ChakraLink>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <img className="ui fluid image" src={logo}></img>
      <Container maxW="container.xl">
        <Box p={1}></Box>
        <Box p={2}>
          <Stack shadow="md" borderWidth="1px">
            <Box p={4}>
              <Text align="left">
                ※<span style={{ fontWeight: 'bold' }}>幻水総選挙</span>
                は、ファンによる非公式の企画です。公式ならびに既存の企業様とは一切関係ありません。
              </Text>{' '}
            </Box>
          </Stack>
        </Box>
        <Box p={2}>
          <Stack shadow="md" borderWidth="1px">
            <Box p={2}>
              <Grid>
                <Heading as="h3" size="lg">
                  投票期間
                </Heading>
              </Grid>
            </Box>
            <Box p={2}>
              <Grid>2021年6月11日（金）夜 21:00 から</Grid>
              <Grid>2021年6月13日（日）昼 12:00 まで</Grid>
              <Grid>（日本時間）</Grid>
            </Box>{' '}
            <Box p={2}>
              投票開始まであと{' '}
              <Countdown
                date="2021-06-11T21:00:00+09:00"
                intervalDelay={0}
                precision={3}
                renderer={(props) => (
                  <span>
                    {props.days} 日 と {zeroPad(props.hours)}:
                    {zeroPad(props.minutes)}:{zeroPad(props.seconds)}
                  </span>
                )}
              />
            </Box>
          </Stack>
        </Box>
        <Box p={2}>
          <Stack shadow="md" borderWidth="1px">
            <Box p={2}>
              <Grid>
                <Heading as="h3" size="lg">
                  投票方法など
                </Heading>
              </Grid>
            </Box>
            <Box p={2}>
              <ChakraLink href="https://min.togetter.com/e75K0EY" isExternal>
                幻水総選挙2021について (min.t のまとめ){' '}
                <ExternalLinkIcon mx="2px" />
              </ChakraLink>{' '}
            </Box>{' '}
          </Stack>
        </Box>
        <Box p={2}>
          <Stack shadow="md" borderWidth="1px">
            <Box p={2}>
              <Grid>
                <Heading as="h3" size="lg">
                  投票チェック
                </Heading>
              </Grid>
            </Box>
            <form onSubmit={voteSearchTweets}>
              <Container maxW="container.xl" style={{ margin: '-15px 0 0 0' }}>
                <FormControl id="email">
                  <FormLabel>
                    <Box p={2}>
                      投票ツイートのチェックをしたいユーザー名を入れてください（@は省略可能）。
                    </Box>
                  </FormLabel>
                  <Box p={2}>
                    <Input
                      type="text"
                      value={voteSubmittedScreenName}
                      onChange={changeVoteSubmittedScreenName}
                      placeholder="@gensosenkyo（@は省略可能）"
                    />
                  </Box>
                  <Box p={2}>
                    <Button type="submit" value="Submit">
                      チェックする
                    </Button>
                  </Box>
                  <Box p={2} style={{ margin: '0 0 5px 0' }}>
                    <Alert status="error">
                      <AlertIcon />
                      <Text align="left">
                        <div>
                          ツイートが検索結果に反映されるまで、最大で20分程度かかることがあります。
                        </div>
                      </Text>
                    </Alert>
                  </Box>
                  <Box p={2} style={{ margin: '0 0 5px 0' }}>
                    <Alert status="info">
                      <AlertIcon />
                      <Text align="left">
                        <div>
                          <p>
                            検索できるのは公開アカウントのツイートのみです。
                          </p>
                        </div>
                      </Text>
                    </Alert>
                  </Box>
                </FormControl>
              </Container>
            </form>
            {voteSearchResultStatus === 'init' ? (
              ''
            ) : (
              <CheckVoteStatus
                status={voteSearchResultStatus}
                numberOfFoundTweets={voteNumberOfFoundTweets}
                searchedScreenName={voteSearchedScreenName}
                searchedUsername={voteSearchedUsername}
              />
            )}
            {voteIsShownNowLoadingGifIcon ? (
              <NowLoading area="isFoundArea" />
            ) : (
              ''
            )}
            {voteIsShownNowLoadingGifIcon || !voteAlreadyFetchedApi
              ? ''
              : voteApiResponses.map((e) => {
                  return (
                    <div key={e.id}>
                      <Container>
                        <div>{voteWaitingTweetIsShownText}</div>
                        {voteWaitingTweetIsShownText ? (
                          <NowLoading area="tweetsArea" />
                        ) : (
                          ''
                        )}
                        <Tweet
                          tweetId={e.tweetId}
                          onLoad={() => setVoteWaitingTweetIsShownText(false)}
                        />
                      </Container>
                    </div>
                  )
                })}{' '}
          </Stack>
        </Box>
        <Box p={2}>
          <Stack shadow="md" borderWidth="1px">
            <Box p={2}>
              <Grid>
                <Heading as="h3" size="lg">
                  応募チェック
                  <br />
                  （お題小説・推し台詞）
                </Heading>
              </Grid>
            </Box>
            <Box p={2}>
              <Tabs
                isFitted
                variant="line"
                onChange={(index) => setTabIndex(index)}
              >
                <TabList mb="0.3em">
                  <Tab
                    _selected={{
                      color: 'white',
                      bg: 'blue.500',
                    }}
                  >
                    お題小説
                  </Tab>
                  <Tab
                    _selected={{
                      color: 'white',
                      bg: 'blue.500',
                    }}
                  >
                    推し台詞
                  </Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <Heading as="h4" size="md">
                      お題小説 応募チェック
                    </Heading>
                    <Box p={1}>（#幻水総選挙お題小説）</Box>
                  </TabPanel>
                  <TabPanel>
                    <Heading as="h4" size="md">
                      推し台詞 応募チェック
                    </Heading>
                    <Box p={1}>（#幻水総選挙推し台詞）</Box>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
            <form onSubmit={searchTweets}>
              <Container maxW="container.xl" style={{ margin: '-15px 0 0 0' }}>
                <FormControl id="email">
                  <FormLabel>
                    <Box p={2}>
                      ツイートのチェックをしたいユーザー名を入れてください（@は省略可能）。
                    </Box>
                  </FormLabel>
                  <Box p={2}>
                    <Input
                      type="text"
                      value={submittedScreenName}
                      onChange={changeSubmittedScreenName}
                      placeholder="@gensosenkyo（@は省略可能）"
                    />
                  </Box>
                  <Box p={2}>
                    <Button type="submit" value="Submit">
                      検索する
                    </Button>
                  </Box>
                  <Box p={2} style={{ margin: '0 0 5px 0' }}>
                    <Alert status="info">
                      <AlertIcon />
                      <Text align="left">
                        <div>
                          検索できるのは公開アカウントのツイートのみです。
                        </div>
                      </Text>
                    </Alert>
                  </Box>
                </FormControl>
              </Container>
            </form>
            {searchResultStatus === 'init' ? (
              ''
            ) : (
              <SearchTweetsStatus
                status={searchResultStatus}
                numberOfFoundTweets={numberOfFoundTweets}
                searchedScreenName={searchedScreenName}
                searchedUsername={searchedUsername}
                tabIndex={tabIndex}
              />
            )}
            {isShownNowLoadingGifIcon ? <NowLoading area="isFoundArea" /> : ''}
            {isShownNowLoadingGifIcon || !alreadyFetchedApi
              ? ''
              : apiResponses.map((e) => {
                  return (
                    <div key={e.id}>
                      <Container>
                        <div>{waitingTweetIsShownText}</div>
                        {waitingTweetIsShownText ? (
                          <NowLoading area="tweetsArea" />
                        ) : (
                          ''
                        )}
                        <Tweet
                          tweetId={e.tweetId}
                          onLoad={() => setWaitingTweetIsShownText(false)}
                        />
                      </Container>
                    </div>
                  )
                })}
          </Stack>
        </Box>
        <Box p={2}>
          <hr></hr>
        </Box>
        <Box p={2}>
          <ChakraLink href="https://twitter.com/gensosenkyo" isExternal>
            幻水総選挙2021 (@gensosenkyo)
            <ExternalLinkIcon mx="2px" />
          </ChakraLink>
        </Box>{' '}
        <Box p={2}></Box>
      </Container>{' '}
    </div>
  )
}

export default App
