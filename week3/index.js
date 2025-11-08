import 'dotenv/config'
import axios from 'axios'

const API_KEY = process.env.YOUTUBE_API_KEY

function getPlaylistItems(playlistId) {
  const url = 'https://www.googleapis.com/youtube/v3/playlistItems'

  axios.get(url, {
    params: {
      part: 'snippet',
      maxResults: 50,
      playlistId,
      key: API_KEY
    }
  })
    .then(res => {
      console.log('\n=== Playlist 內容 ===\n')
      res.data.items.forEach(item => {
        console.log('標題:', item.snippet.title)
        console.log('影片ID:', item.snippet.resourceId.videoId)
        console.log('發布日期:', item.snippet.publishedAt)
        console.log('------------------------')
      })
    })
    .catch(err => {
      console.error('API 錯誤:', err.response?.data || err.message)
    })
}


function searchVideos(keyword) {
  const url = 'https://www.googleapis.com/youtube/v3/search'

  axios.get(url, {
    params: {
      part: 'snippet',
      maxResults: 10,
      q: keyword,          // 搜尋關鍵字
      type: 'video',       // 限定只找影片
      key: API_KEY
    }
  })
    .then(res => {
      console.log('\n=== 影片搜尋結果 ===\n')
      res.data.items.forEach(item => {
        console.log('標題:', item.snippet.title)
        console.log('頻道名稱:', item.snippet.channelTitle)
        console.log('發布時間:', item.snippet.publishedAt)
        console.log('------------------------')
      })
    })
    .catch(err => {
      console.error('API 錯誤:', err.response?.data || err.message)
    })
}
function getVideoStats(videoId) {
  const url = 'https://www.googleapis.com/youtube/v3/videos'

  axios.get(url, {
    params: {
      part: 'statistics',
      id: videoId,
      key: API_KEY
    }
  })
    .then(res => {
      console.log('\n=== 影片統計資訊 ===\n')
      const stats = res.data.items[0].statistics
      console.log('觀看次數:', stats.viewCount)
      console.log('按讚數:', stats.likeCount)
      console.log('留言數:', stats.commentCount)
      console.log('------------------------')
    })
    .catch(err => {
      console.error('API 錯誤:', err.response?.data || err.message)
    })
}

function getChannelInfo(channelId) {
  const url = 'https://www.googleapis.com/youtube/v3/channels'

  axios.get(url, {
    params: {
      part: 'snippet,statistics',
      id: channelId,
      key: API_KEY
    }
  })
    .then(res => {
      console.log('\n=== 頻道資訊 ===\n')
      const channel = res.data.items[0]
      console.log('頻道名稱:', channel.snippet.title)
      console.log('訂閱人數:', channel.statistics.subscriberCount)
      console.log('總影片數:', channel.statistics.videoCount)
      console.log('------------------------')
    })
    .catch(err => {
      console.error('API 錯誤:', err.response?.data || err.message)
    })
}
function getVideoComments(videoId) {
  const url = 'https://www.googleapis.com/youtube/v3/commentThreads'

  axios.get(url, {
    params: {
      part: 'snippet',
      videoId: videoId,
      maxResults: 20,   // 取前 20 則
      textFormat: 'plainText',
      key: API_KEY
    }
  })
    .then(res => {
      console.log('\n=== 影片留言 ===\n')
      res.data.items.forEach(item => {
        const topComment = item.snippet.topLevelComment.snippet
        console.log('留言者名稱:', topComment.authorDisplayName)
        console.log('留言內容:', topComment.textDisplay)
        console.log('按讚數:', topComment.likeCount)
        console.log('------------------------')
      })
    })
    .catch(err => {
      console.error('API 錯誤:', err.response?.data || err.message)
    })
}


getPlaylistItems('PLFOsu4AVSQgMsu7x8NxD1U8u7IgAUZ_Gj')

searchVideos('貓咪大戰爭')

getVideoStats('yF2esaflQHs')

getChannelInfo('UCfWfAM6Smiva8NatHCJxhIA')

getVideoComments('5OK0ycpKblU')