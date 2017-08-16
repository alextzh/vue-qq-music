import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'

export function getBanner() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/musicmall.fcg'
  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    loginUin: 0,
    hostUin: 0,
    needNewCode: 0,
    cmd: 'pc_index_new'
  })
  return jsonp(url, data, options)
}

