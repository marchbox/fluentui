import { ElementViewTemplate, html } from '@microsoft/fast-element';
import type { TextArea } from './textarea.js';

/**
 * Generates a template for the TextInput component.
 *
 * @public
 */
export function textInputTemplate<T extends TextArea>(): ElementViewTemplate<T> {
  return html<T>`
    <template
      tabindex="0"
      @focus="${x => x.handleFocus()}"
      @blur="${x => x.handleBlur()}"
      @input="${x => x.handleInput()}"
      @paste="${(x, c) => x.handlePaste(c.event as ClipboardEvent)}"
      ><slot></slot
    ></template>
  `;
}

/**
 * @internal
 */
export const template: ElementViewTemplate<TextArea> = textInputTemplate();
