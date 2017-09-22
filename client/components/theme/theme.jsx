import { indigo500, indigo700, blue500, grey100, grey300, grey400, grey500, white, darkBlack, fullBlack, pink500 } from 'material-ui/styles/colors'
import { fade } from 'material-ui/utils/colorManipulator'
import spacing from 'material-ui/styles/spacing'

/**
 *  Light Theme is the default theme used in material-ui. It is guaranteed to
 *  have all theme variables needed for every component. Variables not defined
 *  in a custom theme will default to these values.
 */
export const PersonaTheme = {
    spacing: spacing,
    fontFamily: 'Roboto, sans-serif',
    borderRadius: 2,
    palette: {
        primary1Color: indigo500,
        primary2Color: indigo700,
        primary3Color: grey400,
        accent1Color: blue500,
        accent2Color: pink500,
        accent3Color: grey500,
        textColor: darkBlack,
        secondaryTextColor: fade(darkBlack, 0.54),
        alternateTextColor: white,
        canvasColor: white,
        borderColor: grey300,
        disabledColor: fade(darkBlack, 0.3),
        pickerHeaderColor: indigo500,
        clockCircleColor: fade(darkBlack, 0.07),
        shadowColor: fullBlack
    }
}
