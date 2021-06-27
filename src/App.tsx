import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { Container } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Grid } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import { Link as ChakraLink } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'
import { Menu, MenuButton } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
} from '@chakra-ui/react'
import MaterialTable from 'material-table'
import { finalResult } from './result_data/finalResult'

import { ExternalLinkIcon, HamburgerIcon } from '@chakra-ui/icons'
import { FaTwitter } from 'react-icons/fa'
import { CgWebsite } from 'react-icons/cg'

import './App.scss'
import logo from './images/header.jpg'
import { Localization } from 'material-table'

// TODO: .eslintrc.json で無理矢理 OFF にしたものは ON で通るようにする
// "@typescript-eslint/no-explicit-any": "off",
// "@typescript-eslint/explicit-module-boundary-types": "off"

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const localizationJapanese: Localization = {
    error: 'エラー',
    body: {
      emptyDataSourceMessage: '表示するレコードがありません。',
      filterRow: {
        filterPlaceHolder: '',
        filterTooltip: 'フィルター',
      },
      editRow: {
        saveTooltip: '保存',
        cancelTooltip: 'キャンセル',
        deleteText: 'この行を削除しますか？',
      },
      addTooltip: '追加',
      deleteTooltip: '削除',
      editTooltip: '編集',
    },
    header: {
      actions: 'アクション',
    },
    grouping: {
      groupedBy: 'グループ化:',
      placeholder: 'ヘッダーをドラッグ ...',
    },
    pagination: {
      firstTooltip: '最初のページ',
      firstAriaLabel: '最初のページ',
      previousTooltip: '前のページ',
      previousAriaLabel: '前のページ',
      nextTooltip: '次のページ',
      nextAriaLabel: '次のページ',
      labelDisplayedRows: '{from}-{to} 全{count}件',
      labelRowsPerPage: 'ページあたりの行数:',
      lastTooltip: '最後のページ',
      lastAriaLabel: '最後のページ',
      labelRowsSelect: '行',
    },
    toolbar: {
      addRemoveColumns: '列の追加、削除',
      nRowsSelected: '{0} 行選択',
      showColumnsTitle: '列の表示',
      showColumnsAriaLabel: '列の表示',
      exportTitle: '出力',
      exportAriaLabel: '出力',
      exportCSVName: 'CSV出力',
      exportPDFName: 'PDF出力',
      searchTooltip: '検索',
      searchPlaceholder: '検索',
      searchAriaLabel: '検索',
      clearSearchAriaLabel: 'クリア',
    },
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
            <Box p={4}>
              <Box p={2}>
                <Grid>
                  <Heading as="h3" size="lg">
                    投票データ
                  </Heading>
                </Grid>
              </Box>{' '}
              <Box p={2}>
                <Grid>
                  <Text fontSize="2xl">総投票人数</Text>
                  <Text fontSize="xl">2,357人</Text>
                  <Text fontSize="sm">（ツイート 2,157人・DM 200人）</Text>
                </Grid>
              </Box>{' '}
              <Box p={2}>
                <Grid>
                  <Text fontSize="2xl">総投票数</Text>
                  <Text fontSize="xl">6,395票</Text>
                  <Text fontSize="sm">（ツイート 5,790票・DM 605票）</Text>
                </Grid>
              </Box>{' '}
              <Box p={2}>
                <Grid>
                  <Text fontSize="xl">ご参加ありがとうございました！</Text>
                </Grid>
              </Box>{' '}
            </Box>
          </Stack>
        </Box>
        <Box p={2}>
          <Stack shadow="md" borderWidth="1px">
            <Box p={2}>
              <Grid>
                <Heading as="h3" size="lg">
                  開票ツイートまとめ
                </Heading>
              </Grid>
            </Box>
            <Box p={2}>
              <ChakraLink href="https://min.togetter.com/AN0aHbB" isExternal>
                投票開始～終了・開票ツイート (min.t){' '}
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
                  ハッシュタグ 検索リンク
                </Heading>
              </Grid>
            </Box>
            <Box p={2}>
              <p>
                <ChakraLink
                  href="https://twitter.com/search?q=%23%E5%B9%BB%E6%B0%B4%E7%B7%8F%E9%81%B8%E6%8C%992021&f=live"
                  isExternal
                >
                  #幻水総選挙2021 <ExternalLinkIcon mx="2px" />
                </ChakraLink>
              </p>
              <p>
                <ChakraLink
                  href="https://twitter.com/search?q=%23%E5%B9%BB%E6%B0%B4%E7%B7%8F%E9%81%B8%E6%8C%99%E9%81%8B%E5%8B%95&f=live"
                  isExternal
                >
                  #幻水総選挙運動 <ExternalLinkIcon mx="2px" />
                </ChakraLink>
              </p>
              <p>
                <ChakraLink
                  href="https://twitter.com/search?q=%23%E5%B9%BB%E6%B0%B4%E7%B7%8F%E9%81%B8%E6%8C%99%E3%81%8A%E9%A1%8C%E5%B0%8F%E8%AA%AC&f=live"
                  isExternal
                >
                  #幻水総選挙お題小説 <ExternalLinkIcon mx="2px" />
                </ChakraLink>
              </p>
              <p>
                <ChakraLink
                  href="https://twitter.com/search?q=%23%E5%B9%BB%E6%B0%B4%E7%B7%8F%E9%81%B8%E6%8C%99%E6%8E%A8%E3%81%97%E5%8F%B0%E8%A9%9E&f=live"
                  isExternal
                >
                  #幻水総選挙推し台詞 <ExternalLinkIcon mx="2px" />
                </ChakraLink>
              </p>
              <p>
                <ChakraLink
                  href="https://twitter.com/search?q=%23%E5%B9%BB%E6%B0%B4%E7%B7%8F%E9%81%B8%E6%8C%99%E9%96%8B%E7%A5%A8%E4%B8%AD&f=live"
                  isExternal
                >
                  #幻水総選挙開票中 <ExternalLinkIcon mx="2px" />
                </ChakraLink>
              </p>
              <p>
                <ChakraLink
                  href="https://twitter.com/search?q=%23%E5%B9%BB%E6%B0%B4%E7%B7%8F%E9%81%B8%E6%8C%99%E5%BE%8C%E5%A4%9C%E7%A5%AD&f=live"
                  isExternal
                >
                  #幻水総選挙後夜祭 <ExternalLinkIcon mx="2px" />
                </ChakraLink>
              </p>
              <p>
                <ChakraLink
                  href="https://twitter.com/search?q=%23%E5%B9%BB%E6%B0%B4%E3%83%8D%E3%83%83%E3%83%88%E3%83%97%E3%83%AA%E3%83%B3%E3%83%88&f=live"
                  isExternal
                >
                  #幻水ネットプリント <ExternalLinkIcon mx="2px" />
                </ChakraLink>
              </p>
            </Box>{' '}
          </Stack>
        </Box>
        <Box p={2}>
          <Stack shadow="md" borderWidth="1px">
            <Box p={4}>
              <Box p={2}>
                <Grid>
                  <Heading as="h3" size="lg">
                    最終順位
                  </Heading>
                </Grid>
              </Box>{' '}
              <MaterialTable
                columns={[
                  {
                    title: '順位',
                    field: 'rank',
                    filtering: false,
                  },
                  { title: 'キャラ名', field: 'characterName' },
                  { title: '票数', field: 'sumOfVotes', filtering: false },
                ]}
                data={finalResult()}
                title=""
                localization={localizationJapanese}
                options={{
                  pageSize: 361,
                  paging: false,
                  search: true,
                  filtering: false,
                  sorting: true,
                  headerStyle: {
                    backgroundColor: '#f0f8ff',
                  },
                }}
              />
            </Box>
          </Stack>
        </Box>
        <Box p={2}>
          <Stack shadow="md" borderWidth="1px">
            <Box p={2}>
              <Grid>
                <Heading as="h3" size="lg">
                  幻水総選挙2021について
                </Heading>
              </Grid>
            </Box>
            <Box p={2}>
              <ChakraLink href="https://min.togetter.com/e75K0EY" isExternal>
                幻水総選挙2021について (min.t) <ExternalLinkIcon mx="2px" />
              </ChakraLink>{' '}
            </Box>{' '}
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
