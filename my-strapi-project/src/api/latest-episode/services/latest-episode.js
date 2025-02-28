'use strict';

/**
 * latest-episode service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::latest-episode.latest-episode');
