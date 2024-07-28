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
      <label part="label" for="control" class="label" ${ref('labelEl')}>
        <slot
          ${slotted({
            property: 'slottedLabels',
            filter: whitespaceFilter,
          })}
        ></slot>
      </label>
      <textarea
        ${ref('controlEl')}
        id="control"
        class="control"
        ?autofocus="${x => x.autofocus}"
        ?required="${x => x.required}"
        ?disabled="${x => x.disabled}"
        ?readonly="${x => x.readOnly}"
        dirname="${x => x.dirName}"
        maxlength="${x => x.maxLength}"
        minlength="${x => x.minLength}"
        placeholder="${x => x.placeholder}"
        @change="${x => x.handleChangeEvent()}"
        @select="${x => x.handleSelect()}"
        @input="${x => x.handleInput()}"
      ></textarea>
    </template>
  `;
}

/**
 * @internal
 */
export const template: ElementViewTemplate<TextArea> = textInputTemplate();
