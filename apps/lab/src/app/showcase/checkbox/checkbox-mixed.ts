import { ControlledCheckbox } from './controlled-checkbox';

export class CheckboxMixed {
  controlledCheckboxes = [];

  keyCode: Readonly<{
    RETURN: number;
    SPACE: number;
  }>;

  constructor(public domNode: HTMLInputElement) {
    this.keyCode = Object.freeze({
      RETURN: 13,
      SPACE: 32,
    });
  }

  init() {
    this.domNode.tabIndex = 0;

    var ids = this.domNode.getAttribute('aria-controls').split(' ');

    for (var i = 0; i < ids.length; i++) {
      var node = document.querySelector<HTMLInputElement>(`#${ids[i]}`);
      var ccb = new ControlledCheckbox(node, this);
      ccb.init();
      this.controlledCheckboxes.push(ccb);
    }

    this.domNode.addEventListener('keydown', this.handleKeydown.bind(this));
    this.domNode.addEventListener('click', this.handleClick.bind(this));
    this.domNode.addEventListener('focus', this.handleFocus.bind(this));
    this.domNode.addEventListener('blur', this.handleBlur.bind(this));

    this.updateCheckboxMixed();
  }

  updateCheckboxMixed() {
    var count = 0;

    for (var i = 0; i < this.controlledCheckboxes.length; i++) {
      if (this.controlledCheckboxes[i].isChecked()) {
        count++;
      }
    }

    if (count === 0) {
      // this.domNode.setAttribute('aria-checked', 'false');
      this.domNode.setAttribute('indeterminate', 'true');
    } else {
      if (count === this.controlledCheckboxes.length) {
        // this.domNode.setAttribute('aria-checked', 'true');
        this.domNode.setAttribute('checked', 'true');
        this.domNode.setAttribute('indeterminate', 'false');
      } else {
        // this.domNode.setAttribute('aria-checked', 'mixed');
        this.domNode.setAttribute('indeterminate', 'false');
        this.domNode.setAttribute('checked', 'false');
        this.updateControlledStates();
      }
    }
  }

  updateControlledStates() {
    for (var i = 0; i < this.controlledCheckboxes.length; i++) {
      this.controlledCheckboxes[i].lastState = this.controlledCheckboxes[
        i
      ].isChecked();
    }
  }

  anyLastChecked() {
    var count = 0;

    for (var i = 0; i < this.controlledCheckboxes.length; i++) {
      if (this.controlledCheckboxes[i].lastState) {
        count++;
      }
    }

    return count > 0;
  }

  setControlledCheckboxes(value) {
    for (var i = 0; i < this.controlledCheckboxes.length; i++) {
      this.controlledCheckboxes[i].setChecked(value);
    }

    this.updateCheckboxMixed();
  }

  toggleCheckboxMixed() {
    var state = this.domNode.getAttribute('aria-checked');

    if (state === 'false') {
      if (this.anyLastChecked()) {
        this.setControlledCheckboxes('last');
      } else {
        this.setControlledCheckboxes('true');
      }
    } else {
      if (state === 'mixed') {
        this.setControlledCheckboxes('true');
      } else {
        this.setControlledCheckboxes('false');
      }
    }

    this.updateCheckboxMixed();
  }

  handleKeydown(event: KeyboardEvent) {
    var flag = false;

    switch (event.keyCode) {
      case this.keyCode.SPACE:
        this.toggleCheckboxMixed();
        flag = true;
        break;

      default:
        break;
    }

    if (flag) {
      event.stopPropagation();
      event.preventDefault();
    }
  }

  handleClick() {
    this.toggleCheckboxMixed();
  }

  handleFocus() {
    this.domNode.classList.add('focus');
  }

  handleBlur() {
    this.domNode.classList.remove('focus');
  }
}
