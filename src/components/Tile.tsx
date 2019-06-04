import React from 'react'
import Base from './Base'

interface Props {
  className?: string
}

interface State {
  height: number
  childHeight: number
}

class Tile extends React.Component<Props, State> {
  private container = React.createRef<HTMLDivElement>()

  constructor(props: any) {
    super(props)
    this.state = {
      height: 0,
      childHeight: 0,
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const currentPositionPercent = window.pageYOffset / (document.body.clientHeight - window.innerHeight)

      if (this.container.current !== null) {
        this.container.current.scrollTop = (this.state.childHeight - this.container.current.clientHeight) * currentPositionPercent
      }
    })
  }

  setChildHeight(height: number) {
    this.setState({
      childHeight: height,
    })
  }

  render() {
    return (
      <div className={this.props.className} ref={this.container}>
        <Base
          setChildHeight={this.setChildHeight.bind(this)}
        ></Base>
      </div>
    )
  }
}

export default Tile
