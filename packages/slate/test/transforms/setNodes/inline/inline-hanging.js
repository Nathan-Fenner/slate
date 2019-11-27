/** @jsx jsx */

import { Editor } from 'slate'
import { jsx } from '../../..'

export const run = editor => {
  Editor.setNodes(editor, { key: true }, { match: 'inline' })
}

export const input = (
  <editor>
    <block>
      <text />
      <inline>
        <anchor />
        word
      </inline>
      <focus />
    </block>
  </editor>
)

export const output = (
  <editor>
    <block>
      <text />
      <inline key>
        <anchor />
        word
      </inline>
      <focus />
    </block>
  </editor>
)
