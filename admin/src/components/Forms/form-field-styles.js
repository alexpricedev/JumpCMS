import {
  black,
  darkgreen,
  red,
  white,
} from '../../constants/styles';

export default `

.FormField {
  display: block;
  position: relative;
}

:global(.FormField:not(:last-of-type)) {
  margin: 0 0 20px;
}

.FormField--error {
  color: ${red()};
}

  .FormField__text {
    color: inherit;
    display: block;
    margin: 0 0 10px;
  }

    .FormField__required {
      font-size: 12px;
      opacity: 0.5;
      padding: 0 0 0 6px;
    }

  .FormField__input {
    background: ${white()};
    border-radius: 3px;
    border: 2px solid ${black(0.2)};
    display: block;
    font-size: 16px;
    opacity: 0.5;
    padding: 16px;
    transition: all 0.3s ease;
    width: 100%;
  }

  .FormField__input:hover:not(.FormField__input--error),
  .FormField__input:focus:not(.FormField__input--error) {
    border-color: ${darkgreen(0.6)};
    opacity: 1;
  }

  .FormField__input:focus:not(.FormField__input--error) {
    background: ${darkgreen(0.1)};
  }

  .FormField__input--small {
    max-width: 400px;
  }

  .FormField__input--error {
    border-color: ${red(0.6)};
    background: ${red(0.1)};
  }

  .FormField__helptext {
    display: block;
    font-size: 14px;
    line-height: 16px;
    opacity: 0.4;
    padding: 7px 0 0;
  }

  .FormField__error {
    background: ${red(0.7)};
    border-radius: 3px;
    color: ${white()};
    font-size: 12px;
    padding: 5px 12px;
    position: absolute;
    right: 0;
    top: 0;
  }
`;
