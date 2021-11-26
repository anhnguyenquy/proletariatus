export interface ButtonConfig {
  type?: 'text' | 'contained' | 'outlined'
  text?: string
  onClick?: () => void
}