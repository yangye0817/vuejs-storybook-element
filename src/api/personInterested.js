/**
 * person Interested
 */
import request from './request'

export function info (id) {
  return request({
    url: 'investigation/all-concern-person',
    method: 'get'
  })
}

export function list () {
  return request({
    url: 'investigation/all-concern-person',
    method: 'get'
  })
}
