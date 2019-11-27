/** @jsx jsx */

import { Editor } from 'slate'
import { jsx } from '../../..'

export const run = editor => {
  Editor.delete(editor, )
}

export const input = (
  <editor>
    <block>
      <anchor />
      one
    </block>
    <block void>
      <focus />
      two
    </block>
    <block>three</block>
  </editor>
)

export const output = (
  <editor>
    <block>
      <cursor />
    </block>
    <block>three</block>
  </editor>
)
