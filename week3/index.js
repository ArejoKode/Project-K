require('dotenv').config()
const axios = require('axios')

// ✅ 你的 API Key
const API_KEY = process.env.YOUTUBE_API_KEY

// ✅ 要查的播放清單 ID（這是官方的範例清單）
const PLAYLIST_ID = 'PLBCF2DAC6FFB574DE'

// ✅ YouTube PlaylistItems API endpoint
const BASE_URL = 'https://www.googleapis.com/youtube/v3/playlistItems'

async function getPlaylistItems() {
  try {
    const res = await axios.get(BASE_URL, {
      params: {
        part: 'snippet',
        playlistId: PLAYLIST_ID,
        maxResults: 5, // 先抓前 5 筆練習
        key: API_KEY,
      },
    })

    const items = res.data.items

    items.forEach((item, index) => {
      console.log(`\n第 ${index + 1} 部影片：`)
      console.log('標題：', item.snippet.title)
      console.log('影片ID：', item.snippet.resourceId.videoId)
      console.log('發布日期：', item.snippet.publishedAt)
    })
  } catch (err) {
    console.error('抓取錯誤：', err.response?.data || err.message)
  }
}

getPlaylistItems()
