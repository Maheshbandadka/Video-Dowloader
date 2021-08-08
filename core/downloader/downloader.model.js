import axios from 'axios'
import cheerio from 'cheerio'
import ytdl from 'ytdl-core'
import facebookGetLink from 'facebook-video-link'
import twitterGetUrl from 'twitter-url-direct'
import logger from '../../views/logger.js'
import httpProxy from 'http-proxy'
const proxy = httpProxy.createProxyServer({});


class DownloaderLis {

  /**
   * TODO To get downloadable url from Instagram.
   * @description get downloadable url from Instagram
   * @param  {string} url_media -User url
   * @return {object} - Return downloadable url
   */
  async getInstagramDownloadUrl(url_media) {
    return new Promise((resolve, reject) => {
      url_media = url_media.replace("reel", "p")
      axios.get(url_media, {
        // proxy: {
        //   host: process.env.host,
        //   port: process.env.PORT
        // }
      }).then(result => {
        logger.info(`element  ${result.data}`)

        let $ = cheerio.load(result.data), ig = []
        $('script[type="text/javascript"]').each(async (i, element) => {
          logger.info(`element  ${element}`)

          let cheerioElement = $(element)
          var contentScript = cheerioElement.html()
          if (contentScript.search("shortcode_media") != -1) {
            logger.info(`contentScript  ${contentScript}`)
            contentScript = contentScript.replace("window._sharedData = ", "")
            contentScript = contentScript.replace(";", "")
            var jsonScript = JSON.parse(contentScript)

            var mediaData = jsonScript.entry_data.PostPage[0].graphql.shortcode_media
            logger.info(`mediaData  ${JSON.stringify(mediaData)}`)

            if (!mediaData.edge_sidecar_to_children) {
              if (mediaData.is_video) ig.push(mediaData.video_url)
              else ig.push(mediaData.display_url)
            } else {
              for (var m of mediaData.edge_sidecar_to_children.edges) {
                var data = m.node
                if (data.is_video) ig.push(data.video_url)
                else ig.push(data.display_url)
              }
            }
          }
        })
        resolve({
          results_number: ig.length,
          url_list: ig
        })
      }).catch(err => {
        reject(err)
      })
    })
  }

  /**
   * TODO To get downloadable url from Youtube.
   * @description get downloadable url from Youtube
   * @param  {string} url_media -User url
   * @return {object} - Return downloadable url
   */
  async getYoutubeDownloadUrl(url_media) {
    return new Promise((resolve, reject) => {
      ytdl(url_media)
        .on('info', (info) => {
          resolve(info.player_response.streamingData)// the video title
        });
    })

    //  await ytdl.getInfo(url_media,{downloadURL: true},
    //   function(err, info) {
    //     if (err) throw err;
    //        var songTitle = info.title //you can store it here
    //        console.log(info);
    //   }
    // );
  }

  /**
   * TODO To get downloadable url from Facebook.
   * @description get downloadable url from Facebook
   * @param  {string} url_media -User url
   * @return {object} - Return downloadable url
   */
  async getFacebookDownloadUrl(url_media) {
    return new Promise((resolve, reject) => {
      facebookGetLink(url_media).then(response => {
        resolve(response)
      })
    })

    //  await ytdl.getInfo(url_media,{downloadURL: true},
    //   function(err, info) {
    //     if (err) throw err;
    //        var songTitle = info.title //you can store it here
    //        console.log(info);
    //   }
    // );
  }

  /**
   * TODO To get downloadable url from Twitter.
   * @description get downloadable url from Twitter
   * @param  {string} url_media -User url
   * @return {object} - Return downloadable url
   */
  async getTwitterDownloadUrl(url_media) {
    let response = await twitterGetUrl(url_media)
    return response

  }

}
export default new DownloaderLis()