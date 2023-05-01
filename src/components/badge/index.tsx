import React, { FC } from 'react'
import styles from './index.module.scss'

interface Props {
  text: string
}

const Badge: FC<Props> = ({ text }) => {
  return <span className={styles.badge}>{text}</span>
}

export default Badge
