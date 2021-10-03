import Header from './Header'
import Screen from '@/components/Screen'
import Keypad from '@/components/Keypad'
import { useState } from 'react'
import styles from '@/styles/components/Calculator.module.scss'

function Calculator() {
  const [value, setValue] = useState('0')

  const onClick = (e) => {
    try {
      const clickedValue = e.target.attributes['data-code'].value
      switch (clickedValue) {
        case 'del':
          let val = '0'
          if (value !== '0' && isFinite(value)) {
            val = value.slice(0, -1)
            val = val !== '' ? val : '0'
          }
          setValue(val)
          break
        case 'C':
          setValue('0')
          break
        case '=':
          setValue(eval(value) + '')
          break
        default:
          setValue(value !== '0' ? value.concat(clickedValue) : clickedValue)
          break
      }
    } catch (err) {
      setValue('0')
    }
  }

  return (
    <main className={styles.calculator}>
      <Header />
      <Screen value={value} />
      <Keypad onClick={onClick} />
    </main>
  )
}

export default Calculator
