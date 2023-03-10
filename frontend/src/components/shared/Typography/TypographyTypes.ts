export enum TypographyVariant {
  H2 = 'H2',
  BASIC_TEXT = 'BASIC_TEXT',
  BASIC_BOLD_TEXT = 'BASIC_BOLD_TEXT',
  SMALL_TEXT = 'SMALL_TEXT',
}

export enum TypographyColor {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  DANGER = 'DANGER',
}

export interface ITypographyStateProps {
  title: string
  variant: TypographyVariant
  color?: TypographyColor
  className?: string
}

export interface ITypographyDispatchProps {}

export interface ITypographyProps
  extends ITypographyStateProps,
    ITypographyDispatchProps {}
