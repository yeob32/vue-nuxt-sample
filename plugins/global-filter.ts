// https://github.com/vuejs/rfcs/blob/master/active-rfcs/0015-remove-filters.md
// 3.0 에서 제외 예정 -> export function toCurrency(value) -> import { toCurrency } from './helper/filter'
import Vue from 'vue'

Vue.filter('toCurrency', function (value: number | string): string {
  if (typeof value !== 'number' && typeof value !== 'string') {
    return value
  }

  if (typeof value === 'string') {
    const intValue = parseInt(value)
    if (isNaN(intValue)) {
      return value
    }

    return new Intl.NumberFormat('ko-KR').format(intValue)
  }

  return new Intl.NumberFormat('ko-KR').format(value)
})
