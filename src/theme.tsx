import { DefaultTheme } from 'styled-components'

// interface
import { accordionThemeInterface } from './components/accordion/accordion.theme.interface'
import { anchorThemeInterface } from './components/anchor/anchor.theme.interface'
import { avatarThemeInterface } from './components/avatar/avatar.theme.interface'
import { badgeThemeInterface } from './components/badge/badge.theme.interface'
import { buttonThemeInterface } from './components/button/button.theme.interface'
import { checkboxThemeInterface } from './components/checkbox/checkbox.theme.interface'
import { dropdownThemeInterface } from './components/dropdown/dropdown.theme.interface'
import { inputThemeInterface } from './components/input/input.theme.interface'
import { radioThemeInterface } from './components/radio/radio.theme.interface'
import { spinnerThemeInterface } from './components/spinner/spinner.theme.interface'
import { tagThemeInterface } from './components/tag/tag.theme.interface'
import { textareaThemeInterface } from './components/textarea/textarea.theme.interface'

// theme compnents
import { accordionTheme } from './components/accordion/accordion.theme'
import { anchorTheme } from './components/anchor/anchor.theme'
import { avatarTheme } from './components/avatar/avatar.theme'
import { badgeTheme } from './components/badge/badge.theme'
import { buttonTheme } from './components/button/button.theme'
import { checkboxTheme } from './components/checkbox/checkbox.theme'
import { dropdownTheme } from './components/dropdown/dropdown.theme'
import { inputTheme } from './components/input/input.theme'
import { radioTheme } from './components/radio/radio.theme'
import { spinnerTheme } from './components/spinner/spinner.theme'
import { tagTheme } from './components/tag/tag.theme'
import { textareaTheme } from './components/textarea/textarea.theme'

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string
    accordion: accordionThemeInterface
    anchor: anchorThemeInterface
    avatar: avatarThemeInterface
    badge: badgeThemeInterface
    button: buttonThemeInterface
    checkbox: checkboxThemeInterface
    dropdown: dropdownThemeInterface
    input: inputThemeInterface
    radio: radioThemeInterface
    spinner: spinnerThemeInterface
    tag: tagThemeInterface
    textarea: textareaThemeInterface
  }
}

export const Theme: DefaultTheme = {
  name: 'default',
  accordion: { ...accordionTheme },
  anchor: { ...anchorTheme },
  avatar: { ...avatarTheme },
  badge: { ...badgeTheme },
  button: { ...buttonTheme },
  checkbox: { ...checkboxTheme },
  dropdown: { ...dropdownTheme },
  input: { ...inputTheme },
  radio: { ...radioTheme },
  spinner: { ...spinnerTheme },
  tag: { ...tagTheme },
  textarea: { ...textareaTheme },
}
