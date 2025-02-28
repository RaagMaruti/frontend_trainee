'use strict';

/**
 * latest-episode router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::latest-episode.latest-episode');
