import styles from '\Button.module.scss'

export const Button = ({label, onclick}) => {
  return (
    <button>
        {label}
    </button>
  )
}