import React, { useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import axios from 'axios'

import logo from './images/header.jpg'
import './App.css'

// TODO: .eslintrc.json で無理矢理 OFF にしたものは ON で通るようにする
// "@typescript-eslint/no-explicit-any": "off",
// "@typescript-eslint/explicit-module-boundary-types": "off"
function App() {
  const [resultArray, setResultArray] = useState([
    {
      id: 12345,
      screenName: 'hogehoge',
      tweetId: '987654',
      tweetUrl: 'https://www.google.co.jp/',
    },
  ])
  const [isNowLoading, setIsNowLoading] = useState(false)
  const [nowLoadingText, setNowLoadingText] = useState('NowLoading...')
  const [submitValue, setSubmitValue] = useState('')

  const changeSubmitValue = (event: any) => {
    setSubmitValue(event.target.value)
  }

  // FIXME: 命名の変更
  const letsSearch = (event: any) => {
    setIsNowLoading(true)

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
      <form onSubmit={letsSearch}>
        <label>
          アカウント名(@hoge, @は省略可能)を入れてください。
          <input type="text" value={submitValue} onChange={changeSubmitValue} />
        </label>
        <input type="submit" value="Submit" />{' '}
      </form>
      {resultArray.map((e) => {
        return `結果: @${e.screenName} さん / tweetId: ${e.tweetId}`
      })}
    </div>
  )
}

export default App
