// https://github.com/vuejs/rfcs/blob/master/active-rfcs/0015-remove-filters.md
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
