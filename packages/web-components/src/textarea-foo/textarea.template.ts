import { ElementViewTemplate, html, ref } from '@microsoft/fast-element';
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
    >
      <div class="placeholder" part="placeholder" aria-hidden="true">${x => x.placeholder}</div>
      <div class="content" part="content"><slot></slot></div>
    </template>
  `;
}

/**
 * @internal
 */
export const template: ElementViewTemplate<TextArea> = textInputTemplate();
