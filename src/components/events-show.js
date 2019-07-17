import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'


import { getEvents, deleteEvents, putEvent } from '../actions'

/*
IDを元にイベントを取得　更新　削除
*/
class EventsShow extends Component {
    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
        this.onDeleteClick = this.onDeleteClick.bind(this)
    }

    //直接IDを指定して叩かれた場合getEventで情報を抽出してレンダリング
    componentDidMount(){
        const {id} = this.props.match.params
        if(id) this.props.getEvents(id)
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

    // 削除
    async onDeleteClick() {
        const { id } = this.props.match.params
        await this.props.deleteEvents(id)
        this.props.history.push('/')
    }

    // 更新
    async onSubmit(values) {
        await this.props.putEvent(values)
        this.props.history.push('/')
    }

    render() {
        const { handleSubmit, pristine, submitting, invalid } = this.props
        const style = { margin: 12 }
        
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <div><Field label="Title" name="title" type="text" component={this.renderField} /></div>
                <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>
        
                <div>
                <RaisedButton label="Submit" type="submit" style={style} disabled={pristine || submitting || invalid} />
                <RaisedButton label="Cancel" style={style} containerElement={<Link to="/" />}/>
                <RaisedButton label="Delete" style={style} onClick={this.onDeleteClick}/>
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

  const mapStateToProps = (state, ownProps) => {
      const event = state.events[ownProps.match.params.id]
      return { initialValues: event, state }
  }

  const mapDispatchToProps = { deleteEvents, getEvents, putEvent }

  // enableReinitialize TrueにするとinitialValuesの値が変わるたびに初期化される
export default connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({ validate, form: "eventShowForm", enableReinitialize: true })(EventsShow)
    )