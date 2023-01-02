export interface badgeOutline {
  background: string
  color: string
}

export interface badgeThemeInterface {
  variant: {
    solid: badgeOutline
    danger: badgeOutline
    success: badgeOutline
    warning: badgeOutline
  }
}
