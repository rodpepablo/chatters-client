
import {Component, tag, styles, props, observe} from 'Component'
import {html} from 'lit-html/lib/lit-extended'

import '../../../ui/fullscreen-form-view'
import style from './style'

@tag('chtr-user-action')
@styles(style)
@props({
  title: 'string',
  loading: 'boolean'
})
@observe(['loading'])
export default class ChtrUserAction extends Component {
  render () {
    console.log(this.is, this.loading)
    return html`
      <fullscreen-form-view loading=${this.loading}>
        <h2 slot="title">${this.title}</h2>
        <slot name="form" slot="form"></slot>
        <slot name="link" slot="link"></slot>
      </fullscreen-form-view>
    `
  }
}

