/** @jsx jsx */

import { Editor } from 'slate'
import { jsx } from '../..'

export const input = (
  <editor>
    <block>one</block>
    <block>two</block>
  </editor>
)

export const run = editor => {
  return Editor.node(editor, {
    anchor: { path: [0, 0], offset: 1 },
    focus: { path: [1, 0], offset: 2 },
  })
}

export const output = [
  <editor>
    <block>one</block>
    <block>two</block>
  </editor>,
  [],
]
