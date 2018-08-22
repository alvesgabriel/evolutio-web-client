import Vue from 'vue'
import moment from 'moment'

Vue.filter('fromnow', value => {
  if (!value) return
  return moment(value).fromNow()
})

Vue.filter('datetime', value => {
  if (!value) return
  return moment(value).format('DD/MM/YYYY HH:mm')
})

Vue.filter('seconds2minutes', value => {
  return parseInt(parseInt(value)/60)
})

Vue.filter('trim', (text, size, breakWord = false) => {
  if (!text) {
    return ''
  }
  let shortText = ''
  if (breakWord) {
    shortText = text.substring(0, size)
  } else {
    const words = text.split(/\s+/g)
    shortText = words.splice(0, 1)
    if (shortText > size) {
      shortText = text.substring(0, size)
    } else {
      words.forEach(word => {
        if (word.length + shortText.length < size) {
          shortText += ' ' + word
        }
      })
    }
  }
  if (text.length > size) {
    shortText += '...'
  }
  return shortText
})

Vue.filter('reais', value => {
  if (value === undefined || value === null) return
  const signal = value < 0 ? '- ' : ''
  const currency = 'R$'
  let values = Number(Math.abs(value)).toFixed(2).split('.')
  const currencyValue = [values[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.'), values[1]].filter(Boolean).join()
  return `${signal}${currency} ${currencyValue}`
})