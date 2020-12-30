import Typed from 'typed.js'
import React, { Component } from 'react';
import styled from 'styled-components'

const Element = styled.span`
  text-align: center;
`

const words = [
    '<br class="sm:hidden" />start saurish.life<br />' +
    '&gt;<span class="text-green-400">$</span>&nbsp;<span class="font-bold">education</span>: sophomore @ <br class="sm:hidden" /><a class="underline" href="evhs.schoolloop.com">evergreen valley high school</a><br />' +
    '&gt;<span class="text-green-400">$</span>&nbsp;<span class="font-bold">hobbies</span>: debate, hiking, <br class="sm:hidden" />volleyball, programming, &amp; <br class="sm:hidden" />photography<br />' +
    '&gt;<span class="text-green-400">$</span>&nbsp;<span class="font-bold">relevant coursework</span>: <br class="sm:hidden" />ap calc ab &amp; bc, ap physics 1, <br class="sm:hidden" />ap biology<br />' +
    '&gt;<span class="text-green-400">$</span>&nbsp;<span class="font-bold">clubs</span>: biomedical <br class="sm:hidden" />engineering, speech and <br class="sm:hidden" />debate, synthetic <br />biology, programming, <br class="sm:hidden" />volleyball <br />' +
    '&gt;<span class="text-green-400">$</span>',
  ]

  class Typing extends React.Component {
  componentDidMount() {
    const options = {
      strings: words,
      typeSpeed: 45,
      backSpeed: 50,
      loop: false,
      showCursor: true,
      cursorChar: '|',
    }
    this.typed = new Typed(this.el, options)
  }

  componentWillUnmount() {
    this.typed.destroy()
  }

  render() {
    return (
      <>
        <Element
          style={{whiteSpace: 'pre'}}
          ref={el => {
            this.el = el
          }}
        />
      </>
    )
  }
}

export default Typing
