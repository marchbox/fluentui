import { ElementViewTemplate, html, ref, slotted } from '@microsoft/fast-element';
import { whitespaceFilter } from '../utils/index.js';
import type { TextArea } from './textarea.js';

/**
 * Generates a template for the TextInput component.
 *
 * @public
 */
export function textInputTemplate<T extends TextArea>(): ElementViewTemplate<T> {
  return html<T>`
    <template>
      <textarea
        ${ref('controlEl')}
        id="control"
        class="control"
        ?autofocus="${x => x.autofocus}"
        ?required="${x => x.required}"
        ?disabled="${x => x.disabled}"
        ?readonly="${x => x.readOnly}"
        spellcheck="${x => x.spellcheck}"
        autocomplete="${x => x.autocomplete}"
        dirname="${x => x.dirName}"
        maxlength="${x => x.maxLength}"
        minlength="${x => x.minLength}"
        placeholder="${x => x.placeholder}"
        @change="${x => x.handleControlChange()}"
        @select="${x => x.handleControlSelect()}"
        @input="${x => x.handleControlInput()}"
      ></textarea>
    </template>
  `;
}

/**
 * @internal
 */
export const template: ElementViewTemplate<TextArea> = textInputTemplate();
