import { CheckboxMixed } from './checkbox-mixed';

export class ControlledCheckbox {
  lastState: boolean = false;

  constructor(
    public domNode: HTMLInputElement,
    public controller: CheckboxMixed
  ) {}

  init = function () {
    this.lastState = this.isChecked();

    this.domNode.addEventListener('change', this.handleChange.bind(this));

    this.domNode.addEventListener('keydown', this.handleKeyup.bind(this), true);
    this.domNode.addEventListener('click', this.handleClick.bind(this), true);
  };

  isChecked() {
    if (typeof this.domNode.checked === 'boolean') {
      return this.domNode.checked;
    }

    return this.domNode.getAttribute('aria-checked') === 'true';
  }

  setChecked(value: 'true' | 'false' | 'last') {
    // if standard input[type=checkbox]
    if (typeof this.domNode.checked === 'boolean') {
      switch (value) {
        case 'true':
          this.domNode.checked = true;
          break;

        case 'false':
          this.domNode.checked = false;
          break;

        case 'last':
          this.domNode.checked = this.lastState;
          break;

        default:
          break;
      }
    }

    // If ARIA checkbox widget
    if (typeof this.domNode.getAttribute('aria-checked') === 'string') {
      switch (value) {
        case 'true':
        case 'false':
          this.domNode.setAttribute('aria-checked', value);
          break;

        case 'last':
          if (this.lastState) {
            this.domNode.setAttribute('aria-checked', 'true');
          } else {
            this.domNode.setAttribute('aria-checked', 'false');
          }
          break;

        default:
          break;
      }
    }
  }

  handleChange() {
    this.controller.updateCheckboxMixed();
  }

  handleKeyup() {
    this.lastState = this.isChecked();
  }

  handleClick() {
    this.lastState = this.isChecked();
  }
}
