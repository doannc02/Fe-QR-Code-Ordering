import {
  BLACK,
  GRAY_SCALE,
  GREEN,
  ORANGE,
  GREY,
  RED,
  WHITE,
} from '@/helper/colors'
import {
  ButtonConfig,
  FontConfig,
  TableConfig,
  ThemeColorConfig,
  CurrentLogin,
  ListOrder,
  SignalRConnect,
} from '@/redux/type'

const themeColorDefaultConfig: ThemeColorConfig = {
  layout: 'layout1',
  theme: 'THEME_1',
  firstMainColor: ORANGE,
  secondMainColor: BLACK,
  thirdMainColor: '#E2E2E2',
  fourthMainColor: '#E2E2E2',
  successColor: GREEN,
  errorColor: RED,
  warningColor: ORANGE,
}

const fontDefaultConfig: FontConfig = {
  typeFont: 'Open Sans',

  h1Color: '#242424',
  h1Font: 'Open Sans',
  h1Size: 2.4,

  h2Color: '#242424',
  h2Font: 'Open Sans',
  h2Size: 2,

  h3Color: '#242424',
  h3Font: 'Open Sans',
  h3Size: 1.8,

  h4Color: '#242424',
  h4Font: 'Open Sans',
  h4Size: 1.4,

  h5Color: '#242424',
  h5Font: 'Open Sans',
  h5Size: 1.2,

  h6Color: '#242424',
  h6Font: 'Open Sans',
  h6Size: 1,

  subtitle1Color: '#242424',
  subtitle1Font: 'Open Sans',
  subtitle1Size: 0.8,

  subtitle2Color: '#242424',
  subtitle2Font: 'Open Sans',
  subtitle2Size: 0.75,

  body1Color: '#242424',
  body1Font: 'Open Sans',
  body1Size: 0.8,

  body2Color: '#242424',
  body2Font: 'Open Sans',
  body2Size: 0.75,

  captionColor: '#242424',
  captionFont: 'Open Sans',
  captionSize: 0.5,
}

const buttonDefaultConfig: ButtonConfig = {
  submitButton: {
    textColor: ORANGE,
    hoverTextColor: WHITE,
    backgroundColor: WHITE,
    backgroundHoverColor: ORANGE,
    borderColor: ORANGE,
    borderHoverColor: ORANGE,
  },
  draftButton: {
    textColor: GREY,
    hoverTextColor: GREY,
    backgroundColor: WHITE,
    backgroundHoverColor: WHITE,
    borderColor: GRAY_SCALE,
    borderHoverColor: GRAY_SCALE,
  },
  rejectButton: {
    textColor: RED,
    hoverTextColor: RED,
    backgroundColor: WHITE,
    backgroundHoverColor: WHITE,
    borderColor: RED,
    borderHoverColor: RED,
  },
  resetButton: {
    textColor: GREY,
    hoverTextColor: GREY,
    backgroundColor: WHITE,
    backgroundHoverColor: WHITE,
    borderColor: GRAY_SCALE,
    borderHoverColor: GRAY_SCALE,
  },
}

const tableConfig: TableConfig = []

const userLoginDefault: CurrentLogin = {
  id: null,
  name: '',
  email: '',
  fullname: '',
  avatar: '',
  tableId: null,
}

const listOrderDefault: ListOrder = []

const signalRConnectDefault: SignalRConnect = {
  connection: null,
  totalUserConnect: 0,
  messages: []
}

const defaultValue = {
  themeColorDefaultConfig,
  fontDefaultConfig,
  buttonDefaultConfig,
  tableConfig,
  userLoginDefault,
  listOrderDefault,
  signalRConnectDefault,
}

export default defaultValue
