import VideoDownloaderService from './downloader.service.js'

class VideoDownloaderController {

    /**
     * TODO To get downloadable url from Instagram.
     * @description To get downloadable url from Instagram.
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     * @param {import('express').NextFunction} next
     * @return {string} Returns downnloadable url from Instagram.
     */
    async getInstagramDownloadUrl(req, res, next) {
        /* 	#swagger.tags = ['Video Downloader']
            #swagger.description = 'To get downloadable link from url' */
        /*	#swagger.parameters['url'] = {
            in: 'query',
            required:true
        }*/
        return await VideoDownloaderService.getInstagramDownloadUrl(req, res, next)

    }

    /**
     * TODO To get downloadable url from Youtube
     * @description To get downloadable url from Youtube.
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     * @param {import('express').NextFunction} next
     * @return {string} Returns downnloadable url from Youtube.
     */
    async getYoutubeDownloadUrl(req, res, next) {
        /* 	#swagger.tags = ['Video Downloader']
            #swagger.description = 'To get downloadable link from url' */
        /*	#swagger.parameters['url'] = {
            in: 'query',
            required:true
        }*/
        return await VideoDownloaderService.getYoutubeDownloadUrl(req, res, next)

    }

    /**
     * TODO To get downloadable url from Facebook
     * @description To get downloadable url from Facebook.
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     * @param {import('express').NextFunction} next
     * @return {string} Returns downnloadable url from Facebook.
     */
    async getFacebookDownloadUrl(req, res, next) {
        /* 	#swagger.tags = ['Video Downloader']
            #swagger.description = 'To get downloadable link from url' */
        /*	#swagger.parameters['url'] = {
            in: 'query',
            required:true
        }*/
        return await VideoDownloaderService.getFacebookDownloadUrl(req, res, next)

    }

    /**
     * TODO To get downloadable url from Twitter
     * @description To get downloadable url from Twitter.
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     * @param {import('express').NextFunction} next
     * @return {string} Returns downnloadable url from Twitter.
     */
    async getTwitterDownloadUrl(req, res, next) {
        /* 	#swagger.tags = ['Video Downloader']
            #swagger.description = 'To get downloadable link from url' */
        /*	#swagger.parameters['url'] = {
            in: 'query',
            required:true
        }*/
        return await VideoDownloaderService.getTwitterDownloadUrl(req, res, next)

    }
}

export default new VideoDownloaderController()