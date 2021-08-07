/** Express router providing dowloader routes
 * @module Router
 * @type {import('express')}
 */
import Router from 'express';

/**
 * Express router to mount report mail routes.
 * @type {import('express').Router}
 * @const
 * @namespace router
 */
const router = Router();

/**
 * @typedef {import('./downloader.controller.js')}
 */
import VideoDownloaderController from './downloader.controller.js'

/**
 * TODO To get downloadable url from instagram
 * @description To get downloadable url from instagram.
 * @name post/get-instagram-download-url
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 * @return {string} Returns downnloadable url from instagram.
 */
router.post('/get-instagram-download-url', VideoDownloaderController.getInstagramDownloadUrl)

/**
 * TODO To get downloadable url from youTube
 * @description To get downloadable url from youTube.
 * @name post/get-instagram-download-url
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 * @return {string} Returns downnloadable url from youTube.
 */
router.post('/get-youtube-download-url', VideoDownloaderController.getYoutubeDownloadUrl)

/**
 * TODO To get downloadable url from facebook
 * @description To get downloadable url from facebook.
 * @name post/get-instagram-download-url
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 * @return {string} Returns downnloadable url from facebook.
 */
router.post('/get-facebook-download-url', VideoDownloaderController.getFacebookDownloadUrl)


/**
 * TODO To get downloadable url from twitter
 * @description To get downloadable url from twitter.
 * @name post/get-instagram-download-url
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 * @return {string} Returns downnloadable url from twitter.
 */
router.post('/get-twitter-download-url', VideoDownloaderController.getTwitterDownloadUrl)

export default router