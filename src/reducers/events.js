import _ from 'lodash'
import {
  READ_EVENTS,
  DELETE_EVENTS
} from '../actions'

export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
        return _.mapKeys(action.response.data, 'id')
    case DELETE_EVENTS:
        // メモリにあるイベント情報がイベントオブジェクトから削除
        delete events[action.id]
        // 新しいメモリ空間に削除されたイベントオブジェクトを返す
        return { ...events}
    default:
        return events
  }
}