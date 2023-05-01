import { IEvent } from '@/types'
import React, { FC } from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import DateIcon from '@/components/icons/date-icon'
import AddressIcon from '@/components/icons/address-icon'
import Badge from '@/components/badge'
import EventCredentials from '../event-credentials'

interface Props {
  data: IEvent
}

const Event: FC<Props> = ({ data }) => {
  const { id, image, title, category, date, location, description } = data

  return (
    <li className={styles.event}>
      <Image
        width={373}
        height={271}
        src={image}
        alt={title}
        className={styles['event__image']}
      />

      <div className={styles['event-info']}>
        <Badge text={category} />
        <h2 className={styles['event-info__title']}>
          {title.length > 20 ? title.slice(0, 20) + '...' : title}
        </h2>

        <EventCredentials date={date} location={location} />

        <p className={styles['event-info__description']}>
          {description.length > 120
            ? description.slice(0, 120) + '...'
            : description}
        </p>

        <Link href={`/events/${id}`} className={styles['event-info__link']}>
          Explore Event...
        </Link>
      </div>
    </li>
  )
}

export default Event
