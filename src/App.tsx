import React, { useState } from 'react'
import axios from 'axios'
import { Tweet } from 'react-twitter-widgets'
import { BrowserRouter, Link } from 'react-router-dom'
import { NowLoading } from './NowLoading'

import logo from './images/header.jpg'
import './App.css'

// TODO: .eslintrc.json で無理矢理 OFF にしたものは ON で通るようにする
// "@typescript-eslint/no-explicit-any": "off",
// "@typescript-eslint/explicit-module-boundary-types": "off"
function App() {
  const [resultArray, setResultArray] = useState([
    {
      id: 1,
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
  const [submitValue, setSubmitValue] = useState('')
  const [isShownNowLoading, setIsShowNowLoading] = useState(false)
  const [searchedUsername, setSearchedUsername] = useState('')
  const [searchedScreenName, setSearchedScreenName] = useState('')
  const [waitingTweetIsShownText, setWaitingTweetIsShownText] = useState(false)

  const changeSubmitValue = (event: any) => {
    setSubmitValue(event.target.value)
  }
  const changeSubmitValue2 = (event: any) => {
    setSubmitValue2(event.target.value)
  }

  // FIXME: 命名の変更
  const letsSearch = (event: any) => {
    setIsShowNowLoading(true)
    setSearchedUsername('')
    setSearchedScreenName('')

    const apiUri: any = process.env.REACT_APP_API_URI
    axios
      .get(apiUri, {
        params: {
          screen_name: submitValue,
        },
      })
      .then((response) => {
        setWaitingTweetIsShownText(true)
        setResultArray(response.data)

        if (response.data[0]) {
          setSearchedUsername(response.data[0].username)
          setSearchedScreenName(response.data[0].screenName)
        }

        setIsShowNowLoading(false)
      })

    event.preventDefault()

    // FIXME: react-router
    // location.href = 'http://localhost:3000/?FOO=BAR'
  }

  const [resultArray2, setResultArray2] = useState([
    {
      id: 1,
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
  const [submitValue2, setSubmitValue2] = useState('')
  const [isShownNowLoading2, setIsShowNowLoading2] = useState(false)
  const [searchedUsername2, setSearchedUsername2] = useState('')
  const [searchedScreenName2, setSearchedScreenName2] = useState('')
  const [waitingTweetIsShownText2, setWaitingTweetIsShownText2] =
    useState(false)

  const letsSearch2 = (event: any) => {
    setIsShowNowLoading2(true)
    setSearchedUsername2('')
    setSearchedScreenName2('')

    const apiUri: any = process.env.REACT_APP_API_URI2
    axios
      .get(apiUri, {
        params: {
          screen_name: submitValue2,
        },
      })
      .then((response) => {
        setWaitingTweetIsShownText2(true)
        setResultArray2(response.data)

        if (response.data[0]) {
          setSearchedUsername2(response.data[0].username)
          setSearchedScreenName2(response.data[0].screenName)
        }

        setIsShowNowLoading2(false)
      })

    event.preventDefault()

    // FIXME: react-router
    // location.href = 'http://localhost:3000/?FOO=BAR'
  }

  return (
    <div className="App">
      <div className="ui menu">
        <div className="header item">Our Company</div>
        <a className="item active">About Us</a>
        <a className="item">Jobs</a>
        <a className="item">Locations</a>
      </div>{' '}
      <img className="ui fluid image" src={logo}></img>
      <form onSubmit={letsSearch}>
        <label>
          推し台詞: アカウント名(@hoge, @は省略可能)を入れてください。
          <br />
          <br />
          <input type="text" value={submitValue} onChange={changeSubmitValue} />
        </label>
        <input type="submit" value="Submit" />{' '}
      </form>
      結果: {searchedUsername} さん (@{searchedScreenName})
      <br />
      {isShownNowLoading ? <NowLoading /> : ''}
      {isShownNowLoading
        ? ''
        : resultArray.map((e) => {
            return (
              <div key={e.id}>
                <div>{waitingTweetIsShownText}</div>
                {waitingTweetIsShownText ? <NowLoading /> : ''}
                <Tweet
                  tweetId={e.tweetId}
                  onLoad={() => setWaitingTweetIsShownText(false)}
                />
              </div>
            )
          })}
      <form onSubmit={letsSearch2}>
        <label>
          お題小説: アカウント名(@hoge, @は省略可能)を入れてください。
          <br />
          <br />
          <input
            type="text"
            value={submitValue2}
            onChange={changeSubmitValue2}
          />
        </label>
        <input type="submit" value="Submit" />{' '}
      </form>
      結果: {searchedUsername2} さん (@{searchedScreenName2})
      {isShownNowLoading2 ? <NowLoading /> : ''}
      {isShownNowLoading2
        ? ''
        : resultArray2.map((e) => {
            return (
              <div key={e.id}>
                <div>{waitingTweetIsShownText2}</div>
                {waitingTweetIsShownText2 ? <NowLoading /> : ''}
                <Tweet
                  tweetId={e.tweetId}
                  onLoad={() => setWaitingTweetIsShownText2(false)}
                />
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
