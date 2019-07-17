import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'


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
        <TextField
            hintText={label}
            floatingLabelText={label}
            type={type}
            errorText={touched && error}
            {...input}
            fullWidth={true}
        />
        )
    }

    async onSubmit(values) {
        await this.props.postEvents(values)
        this.props.history.push('/')
    }

    render() {
        // handleSubmitはrenderが実行された時に渡ってくる関数なのでここで拾っとく
        // pristine 何も入力されていない状態を示すもの。これを活用してサブミットボタンを制御する
        // submitting サブミットしたらTrueになる。これを使ってダブルクリックを許さない
        const { handleSubmit, pristine, submitting, invalid } = this.props
        const style = { margin: 12 }

        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <div><Field label="Title" name="title" type="text" component={this.renderField} /></div>
                <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>
        
                {/* 以下のいずれかに該当する場合はSubmitボタンが非活性状態となります。 */}
                {/* - 初期値と同じ場合 */}
                {/* - 送信中の場合 */}
                {/* - バリデーションエラーが有る場合 */}
                <RaisedButton label="Submit" type="submit" style={style} disabled={pristine || submitting || invalid} />
                <RaisedButton label="Cancel" style={style} containerElement={<Link to="/" />}/>
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