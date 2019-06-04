import React from 'react'
// import {css} from 'emotion'
import Tile from './components/Tile'
import Base from './components/Base'
import { css } from 'emotion'

const tileBaseStyle = css({
  position: 'fixed',
  overflow: 'hidden',
  zIndex: 2,
})

class App extends React.Component {
  render() {
    return (
      <main>
        <Base
          className={css({
            visibility: 'hidden',
          })}
        ></Base>

        <Tile
          className={css(
            tileBaseStyle,
            {
              width: '75vw',
              height: '30vh',
              left: '0',
              top: '0',
              borderBottom: '1px solid #000',
            }
          )}
        ></Tile>

        <Tile
          className={css(
            tileBaseStyle,
            {
              width: '25vw',
              height: '100vh',
              left: '75vw',
              top: '0vh',
              borderLeft: '1px solid #000',
            }
          )}
        ></Tile>

        <Tile
          className={css(
            tileBaseStyle,
            {
              width: '20vw',
              height: '70vh',
              left: '0vw',
              top: '30vh',
              borderRight: '1px solid #000',
            }
          )}
        ></Tile>

        <Tile
          className={css(
            tileBaseStyle,
            {
              width: '55vw',
              height: '70vh',
              left: '20vw',
              top: '30vh',
            }
          )}
        ></Tile>
      </main>
    )
  }
}

export default App
