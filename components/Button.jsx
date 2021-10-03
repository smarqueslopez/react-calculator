import classNames from 'classnames'
import styles from '@/styles/components/Button.module.scss'

function Button({ type, value, code, onClick }) {
  return (
    <a
      role='button'
      data-code={code}
      className={classNames({
        [styles.button]: styles.button,
        [styles.delete]: ['delete'].includes(type),
        [styles.reset]: ['reset'].includes(type),
        [styles.equal]: ['equal'].includes(type),
        [styles['big-button']]: ['reset', 'equal'].includes(type)
      })}
      onClick={onClick}
    >
      {value}
    </a>
  )
}

export default Button
