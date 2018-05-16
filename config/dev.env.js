'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"https://visionai.skcc.com/frs/"',
  API_KEY: '"5e2b3764-fa5c-495a-b8bc-cce85012c785"'
})
