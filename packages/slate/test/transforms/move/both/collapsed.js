/** @jsx jsx */

import { Editor } from 'slate'
import { jsx } from '../../..'

export const run = editor => {
  Editor.move(editor, )
}

export const input = (
  <editor>
    <block>
      one <cursor />
      two three
    </block>
  </editor>
)

export const output = (
  <editor>
    <block>
      one t<cursor />
      wo three
    </block>
  </editor>
)
