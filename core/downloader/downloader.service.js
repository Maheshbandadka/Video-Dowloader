import { CatchResponse, SuccessResponse, ValidateErrorResponse } from "../../common/response.shared.js";
import Validator from './downloader.validate.js'
import downloderModel from './downloader.model.js'
import logger from "../../views/logger.js";
class downloderService {

    /**
     * TODO To get downloadable url from Instagram
     * @description To get downloadable url from Instagram.
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     * @return {string} Returns downnloadable url from Instagram.
     */
    async getInstagramDownloadUrl(req, res) {
        try {
            await this.urlValidation(res, req.query.url)
            logger.info(`Instagram Url ${req.query.url}`)
            let data = await downloderModel.getInstagramDownloadUrl(req.query.url)
            logger.info(`Instagram response ${JSON.stringify(data)}`)
            return SuccessResponse(res, data)
        } catch (error) {
            logger.info(`Instagram Url error ${error}`)
            return CatchResponse(res, error.message);
        }
    }

    /**
     * TODO To get downloadable url from Youtube
     * @description To get downloadable url from Youtube.
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     * @return {string} Returns downnloadable url from Youtube.
     */
    async getYoutubeDownloadUrl(req, res, next) {
        try {
            await this.urlValidation(res, req.query.url)
            logger.info(`Youtube Url ${req.query.url}`)
            let data = await downloderModel.getYoutubeDownloadUrl(req.query.url)
            logger.info(`Youtube response ${JSON.stringify(data)}`)
            return SuccessResponse(res, data)
        } catch (error) {
            logger.info(`Instagram Url error ${error}`)
            return CatchResponse(res, error.message);
        }
    }

    /**
     * TODO To get downloadable url from Facebook
     * @description To get downloadable url from Facebook.
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     * @return {string} Returns downnloadable url from Facebook.
     */
    async getFacebookDownloadUrl(req, res, next) {
        try {
            await this.urlValidation(res, req.query.url)
            logger.info(`Facebook Url ${req.query.url}`)
            let data = await downloderModel.getFacebookDownloadUrl(req.query.url)
            logger.info(`Facebook response ${JSON.stringify(data)}`)
            return SuccessResponse(res, data)
        } catch (error) {
            logger.info(`Facebook Url error ${error}`)
            return CatchResponse(res, error.message);
        }
    }

    /**
     * TODO To get downloadable url from Twitter
     * @description To get downloadable url from Twitter.
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     * @return {string} Returns downnloadable url from Twitter.
     */
    async getTwitterDownloadUrl(req, res, next) {
        try {
            await this.urlValidation(res, req.query.url)
            logger.info(`Twitter Url ${req.query.url}`)
            let url = await downloderModel.getTwitterDownloadUrl(req.query.url)
            logger.info(`Twitter response ${JSON.stringify(data)}`)
            return SuccessResponse(res, url)
        } catch (error) {
            logger.info(`Twitter Url error ${error}`)
            return CatchResponse(res, error.message);
        }
    }

    /**
     * TODO To validate the url
     * @description To validate the url
     * @param {import('express').Response} res
     * @param {string} url -Url.
     */
    async urlValidation(res, url) {
        const { error } = Validator.validateUrl({ url });
        if (error) return ValidateErrorResponse(res, error.details[0].message);
    }
}
export default new downloderService()