import { html } from '@microsoft/fast-element';
import type { Meta, Story, StoryArgs } from '../helpers.stories.js';
import { renderComponent } from '../helpers.stories.js';
import { TextArea as FluentTextArea } from './textarea.js';
import { TextAreaAppearance, TextAreaResize, TextAreaSize } from './textarea.options.js';

const storyTemplate = html<StoryArgs<FluentTextArea>>`
  <fluent-textarea-bar
    appearance="${x => x.appearance}"
    autocomplete="${x => x.autocomplete}"
    ?autofocus="${x => x.autofocus}"
    ?auto-resize="${x => x.autoResize}"
    ?block="${x => x.block}"
    dirname="${x => x.dirname}"
    ?disabled="${x => x.disabled}"
    ?display-shadow="${x => x.displayShadow}"
    form="${x => x.form}"
    maxlength="${x => x.maxLength}"
    minlength="${x => x.minLength}"
    name="${x => x.name}"
    placeholder="${x => x.placeholder}"
    ?readonly="${x => x.readOnly}"
    ?required="${x => x.required}"
    size="${x => x.size}"
    spellcheck="${x => x.spellcheck}"
    resize="${x => x.resize}"
    value="${x => x.value}"
  >${x => x.content ?? ''}</fluent-textarea-bar>
`;

export default {
  title: 'Components/TextArea Bar',
  argTypes: {
    appearance: {
      description: 'Sets the visual appearance of the control',
      table: {
        defaultValue: { summary: `${TextAreaAppearance.outline}` },
      },
      control: 'select',
      options: Object.values(TextAreaAppearance),
    },
    autocomplete: {
      description: "The element's autocomplete state.",
      control: 'text',
    },
    autofocus: {
      description: 'Whether this element should get focus after the page finishes loading.',
      control: 'boolean',
    },
    autoResize: {
      description: 'Whether the element’s height should be automatically changed based on the content.',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
    block: {
      description: 'Whether the element should be a block-level element.',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
    dirname: {
      description: 'Sets the directionality of the element to be submitted with form data.',
      control: 'text',
    },
    disabled: {
      description: 'Sets the disabled state',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
    displayShadow: {
      description: 'Whether the element displays a visual box shadow',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
    form: {
      description: 'The id of a form to associate the element to.',
      control: 'text',
    },
    maxLength: {
      description: 'Sets the maximum number of characters allowed in the input',
      control: 'number',
    },
    minLength: {
      description: 'Sets the minimum number of characters allowed in the input',
      control: 'number',
    },
    name: {
      description: 'Sets the name of the input',
      control: 'text',
    },
    placeholder: {
      description: 'Sets the placeholder text',
      control: 'text',
    },
    readOnly: {
      description: 'Sets the readonly state',
      control: 'boolean',
    },
    required: {
      description: 'Sets the required state',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
    resize: {
      description: 'Whether and how a user can resize the element.',
      control: 'select',
      options: Object.values(TextAreaResize),
    },
    size: {
      description: 'Sets the size of the control',
      control: 'select',
      options: Object.values(TextAreaSize),
    },
    spellcheck: {
      description: 'Controls whether to enable spell checking for the content.',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
  },
} as Meta<FluentTextArea>;

export const TextArea: Story<FluentTextArea> = renderComponent(storyTemplate).bind({});

export const Placeholder: Story<FluentTextArea> = renderComponent(html<StoryArgs<FluentTextArea>>` ${storyTemplate} `);
Placeholder.args = {
  placeholder: 'This is a placeholder',
};

export const Appearance: Story<FluentTextArea> = renderComponent(html<StoryArgs<FluentTextArea>>`
  <div>
    <p>Outlined (default)</p>
    <div style="padding: 1rem; width: fit-content;">
      <fluent-textarea-bar></fluent-textarea-bar>
    </div>
    <p>Filled darker</p>
    <div style="padding: 1rem; width: fit-content; background-color: #fff;">
      <fluent-textarea-bar appearance="filled-darker"></fluent-textarea-bar>
    </div>
    <p>Filled darker with shadow</p>
    <div style="padding: 1rem; width: fit-content; background-color: #fff;">
      <fluent-textarea-bar appearance="filled-darker" display-shadow></fluent-textarea-bar>
    </div>
    <p>Filled lighter</p>
    <div style="padding: 1rem; width: fit-content; background-color: #f5f5f5;">
      <fluent-textarea-bar appearance="filled-lighter"></fluent-textarea-bar>
    </div>
    <p>Filled lighter with shadow</p>
    <div style="padding: 1rem; width: fit-content; background-color: #f5f5f5;">
      <fluent-textarea-bar appearance="filled-lighter" display-shadow></fluent-textarea-bar>
    </div>
  </div>
`);

export const Block: Story<FluentTextArea> = renderComponent(html<StoryArgs<FluentTextArea>>`
  <div style="display: flex; flex-direction: column; gap: 1rem;">
    <div>
      <p>Non-block (default)</p>
      <fluent-textarea-bar></fluent-textarea-bar>
    </div>
    <div>
      <p>Block</p>
      <fluent-textarea-bar block></fluent-textarea-bar>
    </div>
  </div>
`);

export const Size: Story<FluentTextArea> = renderComponent(html<StoryArgs<FluentTextArea>>`
  <div style="display: flex; flex-direction: column; gap: 1rem;">
    <div>
      <p>Medium (default)</p>
      <fluent-textarea-bar></fluent-textarea-bar>
    </div>
    <div>
      <p>Small</p>
      <fluent-textarea-bar size="small"></fluent-textarea-bar>
    </div>
    <div>
      <p>Large</p>
      <fluent-textarea-bar size="large"></fluent-textarea-bar>
    </div>
  </div>
`);

export const AutoResize: Story<FluentTextArea> = renderComponent(html<StoryArgs<FluentTextArea>>`
  <fluent-textarea-bar auto-resize></fluent-textarea-bar>
`);

export const Resize: Story<FluentTextArea> = renderComponent(html<StoryArgs<FluentTextArea>>`
  <div style="display: flex; flex-direction: column; gap: 1rem;">
    <div>
      <p>None (default)</p>
      <fluent-textarea-bar resize="none"></fluent-textarea-bar>
    </div>
    <div>
      <p>Horizontal</p>
      <fluent-textarea-bar resize="horizontal"></fluent-textarea-bar>
    </div>
    <div>
      <p>Vertical</p>
      <fluent-textarea-bar resize="vertical"></fluent-textarea-bar>
    </div>
    <div>
      <p>Both</p>
      <fluent-textarea-bar resize="both"></fluent-textarea-bar>
    </div>
  </div>
`);

export const RTL: Story<FluentTextArea> = renderComponent(html<StoryArgs<FluentTextArea>>`
  <div style="display: flex; flex-direction: column; gap: 1rem;" dir="rtl">
    <div>
      <p>None (default)</p>
      <fluent-textarea-bar resize="none"></fluent-textarea-bar>
    </div>
    <div>
      <p>Horizontal</p>
      <fluent-textarea-bar resize="horizontal"></fluent-textarea-bar>
    </div>
    <div>
      <p>Vertical</p>
      <fluent-textarea-bar resize="vertical"></fluent-textarea-bar>
    </div>
    <div>
      <p>Both</p>
      <fluent-textarea-bar resize="both"></fluent-textarea-bar>
    </div>
  </div>
`);

export const Disabled: Story<FluentTextArea> = renderComponent(html<StoryArgs<FluentTextArea>>` ${storyTemplate} `);
Disabled.args = {
  disabled: true,
  resize: TextAreaResize.both,
};

export const Required: Story<FluentTextArea> = renderComponent(html<StoryArgs<FluentTextArea>>`
  <form id="required-form" action="#">
    <fluent-field>
      <label slot="label">Required Input</label>
      <fluent-textarea-bar slot="input" name="required-input" required></fluent-textarea-bar>
    </fluent-field>
    <div><button type="submit">Submit</button></div>
  </form>
`);

export const ReadOnly: Story<FluentTextArea> = renderComponent(html<StoryArgs<FluentTextArea>>` ${storyTemplate} `);
ReadOnly.args = {
  readOnly: true,
  resize: TextAreaResize.both,
  content: 'Some content',
};

export const WithHTMLCode: Story<FluentTextArea> = renderComponent(html<StoryArgs<FluentTextArea>>`
  <fluent-textarea-bar style="inline-size: 300px; min-block-size: 200px;" auto-resize resize="both" size="large">
    <p>This text should show up as plain text.</p>
    <img src="logo.svg" alt="" />
    <script>
      alert(1);
    </script>
    <fluent-text>hello</fluent-text>
  </fluent-textarea-bar>
`);
