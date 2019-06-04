import React from 'react'
import {css} from 'emotion'
import ReactMarkdown from 'react-markdown'

const input: string = Array(30).fill(0).reduce((acc: string, cur, i) => (
  acc += `
  # This is a header${i+1}

  This is a paragraph

  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet aut ea quam ipsum culpa illum recusandae sapiente hic iusto. Nesciunt adipisci officia atque omnis numquam unde eum aut, commodi eaque?
  `
), '')

interface Props {
  className?: string
  setChildHeight?: (height: number) => void
}

const baseStyle: string = css({})

class Base extends React.Component<Props> {
  private $el = React.createRef<HTMLDivElement>()

  componentDidMount() {
    const elm = this.$el.current

    if (elm && this.props.setChildHeight) {
      this.props.setChildHeight(elm.clientHeight)
    }
  }

  render() {
    return (
      <div ref={this.$el}>
        <ReactMarkdown
          source={input}
          className={css(
            baseStyle,
            this.props.className
          )}
        ></ReactMarkdown>
      </div>
    )
  }
}

export default Base
