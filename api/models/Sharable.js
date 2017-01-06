/**
 * Sharable.js
 *
 * @description :: A sharable entity. Anything that is meant to be shared among the users
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        type: {
            type: 'string',
            enum: ['verse', 'sermon', 'article', 'announcement']
        },
        body: {
            type: 'longtext',
        },
        source: {
            type: 'mediumtext'
        }
    }
};