import Key from '@/components/Button'
import buttonList from '@/utils/buttonList'
import styles from '@/styles/components/Keypad.module.scss'

function Keypad({onClick}) {

  return (
    <section className={styles.keypad}>
      {buttonList.map(({ type, code, value }) => {
        return (
          <Key
            type={type}
            code={code}
            value={value}
            key={value}
            onClick={onClick}
          />
        )
      })}
    </section>
  )
}

export default Keypad
