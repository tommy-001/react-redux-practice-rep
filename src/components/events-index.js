import React, {Component} from 'react';

import { connect } from 'react-redux'
import { readEvents } from '../actions'
import _ from 'lodash'

/*
イベント一覧
コンポーネントにはマウント時実行されるコールバックがあるのでそれを使う
イベント一覧の初期マウント時に外部APIに対して全イベント取得する処理を実装
*/
class EventsIndex extends Component {
    componentDidMount() {
        this.props.readEvents()
    }

    renderEvents() {
        return _.map(this.props.events, event => (
            <tr key={event.id}>
                <td>{event.id}</td>
                <td>{event.title}</td>
                <td>{event.body}</td>
            </tr>
        ))
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>

                <tbody>
                    {this.renderEvents()}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = state => ({ events: state.events })
const mapDispatchToProps = { readEvents }

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)