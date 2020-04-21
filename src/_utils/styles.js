import {colors} from "./colors";

export const commonStyles = {
  mediumLogoImage: {
    height: "200px",
    width: "200px"
  },
  formButton: {
    fontSize: "350%",
    color: colors.primary,
    textShadow: `2px 2px ${colors.shadow}`,
    fontFamily: 'Denk One, sans-serif',
    marginBlockEnd: "0px",
    marginBlockStart: "0px",
    height: "65px",
    lineHeight: 0,
    minWidth: "330px",
    marginTop: "10px"
  },
  displayTitle: {
    fontSize: "220%",
    color: colors.primary,
    fontFamily: 'Denk One, sans-serif',
    textTransform: "none"
  },
  actionButton: {
    fontSize: "220%",
    color: colors.primary,
    fontFamily: 'Denk One, sans-serif',
    textTransform: "none"
  },
  surveyButton: {
    fontSize: "120%",
    color: colors.whiteLight,
    background: colors.primary,
    textTransform: "none"
  },
  standardText: {
    fontSize: "130%"
  },
}
