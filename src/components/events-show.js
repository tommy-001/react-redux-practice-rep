import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

import { getEvents, deleteEvents, putEvent } from '../actions'

/*
イベント新規作成
*/
class EventsShow extends Component {
    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
        this.onDeleteClick = this.onDeleteClick.bind(this)
    }
    renderField(field) {
        const { input, label, type, meta: {touched, error} } = field

        return (
            <div>
                <input {...input} placeholder={label} type={type} />
                { touched && error && <span>{error}</span> }
            </div>
        )
    }

    async onDeleteClick() {
        const { id } = this.props.match.params
        await this.props.deleteEvents(id)
        this.props.history.push('/')
    }

    async onSubmit(values) {
        // await this.props.postEvents(values)
        this.props.history.push('/')
    }

    render() {
        // handleSubmitはrenderが実行された時に渡ってくる関数なのでここで拾っとく
        // pristine 何も入力されていない状態を示すもの。これを活用してサブミットボタンを制御する
        // submitting サブミットしたらTrueになる。これを使ってダブルクリックを許さない
        const { handleSubmit, pristine, submitting } = this.props
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <div>
                    <Field label="Title" name="title" type="text" component={this.renderField} />
                    <Field label="Body" name="body" type="text" component={this.renderField} />
                </div>

                <div>
                    <input type="submit" value="Submit" disabled={pristine || submitting} />
                    <Link to="/" >Cancel</Link>
                    <Link to="/" onClick={ this.onDeleteClick }>Delete</Link>
                </div>
            </form>
        )
    }
}

/*
入力がなかった場合エラーメッセージを表示
*/
const validate = values => {
    const errors = {}
  
    // タイトルが無かったらエラー
    if (!values.title) errors.title = "Enter a title, please."
  
    // ボディーが無かったらエラー
    if (!values.body) errors.body = "Enter a body, please."
  
    return errors
  }
  const mapDispatchToProps = { deleteEvents }

export default connect(null, mapDispatchToProps)(
    reduxForm({ validate, form: "eventShowForm" })(EventsShow)
    )