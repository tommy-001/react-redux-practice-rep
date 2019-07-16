// JSXのタグはトランスパイルをするとReact.create.elementに変換されるので必ず必要
import React, {Component} from 'react';
// import propTypes from 'prop-types';

// 演習07でインポート
import { connect } from 'react-redux'
import { increment, decrement } from '../actions'

class EventsIndex extends Component {
  render() {
    const props = this.props

    return (
      <React.Fragment>
        <div>value: { props.value }</div>
        <button onClick={ props.increment }> +1 </button>
        <button onClick={ props.decrement }> -1 </button>
      </React.Fragment>
      )
  }
}

const mapStateToProps = state => ({ value: state.count.value })

const mapDispatchToProps = ({ increment, decrement })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
