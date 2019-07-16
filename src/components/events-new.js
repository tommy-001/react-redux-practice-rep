import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

import { postEvents } from '../actions'

/*
イベント新規作成
*/
class EventsNew extends Component {
    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
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

    async onSubmit(values) {
        await this.props.postEvents(values)
        this.props.history.push('/')
    }

    render() {
        // handleSubmitはrenderが実行された時に渡ってくる関数なのでここで拾っとく
        const { handleSubmit } = this.props
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <div>
                    <Field label="Title" name="title" type="text" component={this.renderField} />
                    <Field label="Body" name="body" type="text" component={this.renderField} />
                </div>

                <div>
                    <input type="submit" value="Submit" disabled={false} />
                    <Link to="/" >Cancel</Link>
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
const mapDispatchToProps = { postEvents }

export default connect(null, mapDispatchToProps)(
    reduxForm({ validate, form: "eventNewForm" })(EventsNew)
    )