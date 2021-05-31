import React, { useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import axios from 'axios'
import { Tweet } from 'react-twitter-widgets'
import { BrowserRouter, Link } from 'react-router-dom'

import logo from './images/header.jpg'
import './App.css'

// TODO: .eslintrc.json で無理矢理 OFF にしたものは ON で通るようにする
// "@typescript-eslint/no-explicit-any": "off",
// "@typescript-eslint/explicit-module-boundary-types": "off"
function App() {
  const [resultArray, setResultArray] = useState([
    {
      id: '10',
      tweetId: '1396432867352809725',
      username: 'ああああ',
      screenName: 'foobar',
      fullText: '@gensosenkyo ほげ\n#幻水総選挙推し台詞\n#幻水総選挙2021',
      isRetweet: 'false',
      url: 'https://twitter.com/foobar/status/1396432867352809725',
      tweetedAt: '2021/05/23(日) 12:54:32',
      mediaExists: 'false',
      isPublic: 'true',
      isMentionedToGssAdmin: 'true',
    },
  ])
  const [isNowLoading, setIsNowLoading] = useState(false)
  const [nowLoadingText, setNowLoadingText] = useState('')
  const [submitValue, setSubmitValue] = useState('')
  const [searchedUsername, setSearchedUsername] = useState('初期名前')
  const [searchedScreenName, setSearchedScreenName] =
    useState('hyper_shangrila')

  const changeSubmitValue = (event: any) => {
    setSubmitValue(event.target.value)
  }

  // FIXME: 命名の変更
  const letsSearch = (event: any) => {
    setIsNowLoading(true)
    setNowLoadingText('ローディング中です...')

    const apiUri: any = process.env.REACT_APP_API_URI
    axios
      .get(apiUri, {
        params: {
          screen_name: submitValue,
        },
      })
      .then((response) => {
        setResultArray(response.data)
        setIsNowLoading(false)
        console.log(response.data)
        setSearchedUsername(response.data[0].username)
        setSearchedScreenName(response.data[0].screenName)
        if (!isNowLoading) {
          // ここで GIF アニメを出し分ければいい
          setNowLoadingText('Loading is completed.')
        }
      })

    event.preventDefault()

    // FIXME: react-router
    // location.href = 'http://localhost:3000/?FOO=BAR'
  }

  return (
    <div className="App">
      <img className="ui fluid image" src={logo}></img>
      {nowLoadingText}
      {/* 画面が一度 top に戻るのはあんまイケてない気もする */}
      <form onSubmit={letsSearch}>
        <label>
          推し台詞: アカウント名(@hoge, @は省略可能)を入れてください。
          <input type="text" value={submitValue} onChange={changeSubmitValue} />
        </label>
        <input type="submit" value="Submit" />{' '}
      </form>
      結果: {searchedUsername} さん (@{searchedScreenName})
      <br />
      {resultArray.map((e) => {
        return (
          <div key={e.id}>
            <Tweet tweetId={e.tweetId} />
          </div>
        )
      })}
      <BrowserRouter>
        <Link to="/">Back To Top</Link>{' '}
      </BrowserRouter>
    </div>
  )
}

export default App
