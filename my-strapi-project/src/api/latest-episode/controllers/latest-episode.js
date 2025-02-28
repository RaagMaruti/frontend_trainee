'use strict';

/**
 * latest-episode controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::latest-episode.latest-episode');
