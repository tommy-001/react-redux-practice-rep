import _ from 'lodash'
import {
  READ_EVENTS,
  CREATE_EVENT,
  DELETE_EVENTS,
  READ_EVENT,
  UPDATE_EVENT
} from '../actions'

export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
        return _.mapKeys(action.response.data, 'id')
    case CREATE_EVENT:
    case UPDATE_EVENT:
    case READ_EVENT:
        const data = action.response.data
        return { ...events, [data.id]: data}
    case DELETE_EVENTS:
        // メモリにあるイベント情報がイベントオブジェクトから削除
        delete events[action.id]
        // 新しいメモリ空間に削除されたイベントオブジェクトを返す
        return { ...events}
    default:
        return events
  }
}