/** @jsx h */

import { h } from '../../../helpers'

export const input = (
  <value>
    <block>one</block>
    <block>two</block>
  </value>
)

export const run = editor => {
  return Array.from(editor.entries())
}

export const output = [
  [
    <value>
      <block>one</block>
      <block>two</block>
    </value>,
    [],
  ],
  [<block>one</block>, [0]],
  [<text>one</text>, [0, 0]],
  [<block>two</block>, [1]],
  [<text>two</text>, [1, 0]],
]
