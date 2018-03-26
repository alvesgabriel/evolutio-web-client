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