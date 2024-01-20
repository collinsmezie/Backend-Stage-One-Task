const joi = require('joi');


const validateBookMiddleware = async (req, res, next) => {
    const book = req.body;
    try {
        await bookSchema.validateAsync(book);
        next();
    } catch (error) {
        res.status(406).send(error.details[0].message);
    }
}

    

const bookSchema = joi.object({
    title: joi.string()
                .min(4)
                .max(30)
              .required(),

    author: joi.string()
              .required(),

    category: joi.string()
              .required(),    

    current_chapter: joi.string()
              .required(),

    progress: joi.number()
              .required()
});


module.exports = validateBookMiddleware;