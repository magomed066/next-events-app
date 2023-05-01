import React, { FC } from 'react'
import styles from './index.module.scss'
import DateIcon from '@/components/icons/date-icon'
import AddressIcon from '@/components/icons/address-icon'

interface Props {
  date: string
  location: string
}

const EventCredentials: FC<Props> = ({ date, location }) => {
  return (
    <div className={styles['credentials']}>
      <time className={styles['credentials__text']}>
        <DateIcon />
        {new Date(date).toLocaleDateString('en-US', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })}
      </time>
      <address className={styles['credentials__text']}>
        <AddressIcon />
        {location.replace(', ', '\n').length > 20
          ? location.replace(', ', '\n').slice(0, 20) + '...'
          : location.replace(', ', '\n')}
      </address>
    </div>
  )
}

export default EventCredentials
