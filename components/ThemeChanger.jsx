import { useEffect, useState } from 'react'
import styles from '@/styles/components/ThemeChanger.module.scss'

function ThemeChanger() {
  const [theme, setTheme] = useState('1')

  useEffect(() => {
    document.body.classList.toggle('theme1', theme === '1')
    document.body.classList.toggle('theme2', theme === '2')
    document.body.classList.toggle('theme3', theme === '3')
  }, [theme])

  return (
    <input
      className={styles.themeChanger}
      type='range'
      min='1'
      max='3'
      step='1'
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
    />
  )
}

export default ThemeChanger
