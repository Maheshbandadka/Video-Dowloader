import Joi from 'joi';

/**
 * DownLoaderValidate class
 * Base class for downloader routes input validation
 */
class DownLoaderValidate {

  /**
   * TODO Validate url entered by user
   * This function validate url entered by user
   * @param {string} url - Url from  user
   * @return {boolean} Returns the inputs are valid or not based on rules
   */
  validateUrl(data) {
    const JoiSchema = Joi.object({
      url: Joi.string().uri().required().messages({ 'any.required': 'Url is required', 'string.uri': 'Url must be a valid url' })
    }).options({ abortEarly: false });
    return JoiSchema.validate(data);
  }
}
export default new DownLoaderValidate();