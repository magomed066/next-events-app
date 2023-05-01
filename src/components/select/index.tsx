import React, { FC, useEffect, useRef, useState } from 'react'
import styles from './index.module.scss'
import css from 'classnames'
import DropdownIcon from '../icons/dropdown-icon'

interface Props {
  label?: string
  data?: {
    label: string
    value: string | number
  }[]
  onSelect?: (val: string) => void
}

const Select: FC<Props> = ({ label, data = [], onSelect }) => {
  const [selectedTitle, setSelectedTitle] = useState<string>('Select value')
  const [active, setActive] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)

  const handleSelect = (val: string | number, label: string) => {
    setSelectedTitle(label)
    onSelect?.(String(val))
  }
  const toggleList = () => setActive((prev) => !prev)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as HTMLElement

      if (ref.current && !ref.current.contains(target)) {
        setActive(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])

  return (
    <div className={styles.textfield} ref={ref}>
      {label ? <label>{label}</label> : null}

      <div className={styles['select']} onClick={toggleList}>
        <h3
          className={css(styles['select__title'], {
            [styles['active']]: active,
          })}
        >
          {selectedTitle}
          <DropdownIcon />
        </h3>

        <ul
          className={css(styles['select-list'], { [styles['active']]: active })}
        >
          {data.map((item) => (
            <li
              key={item.value}
              onClick={() => handleSelect(item.value, item.label)}
              className={css(styles['select-list__item'], {
                [styles['active']]: item.label === selectedTitle,
              })}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Select
