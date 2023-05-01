import React, { FC } from 'react'
import styles from './index.module.scss'
import { IEvent } from '@/types'
import Badge from '@/components/badge'
import Image from 'next/image'
import EventCredentials from '../event-credentials'
import Link from 'next/link'

interface Props {
  data: IEvent
}

const EventDetailsComponent: FC<Props> = ({ data }) => {
  const { image, title, category, date, location, description } = data

  return (
    <div className={styles['event']}>
      <div className={styles['image-wrapper']}>
        <Image
          width={432}
          height={432}
          src={image}
          alt={title}
          className={styles['event__image']}
        />
      </div>
      <div className={styles['event-info']}>
        <Badge text={category} />

        <h1 className={styles['event__title']}>{title}</h1>

        <EventCredentials date={date} location={location} />

        <p className={styles['event-info__text']}>{description}</p>

        <Link className={styles['event-info__link']} href={'/events'}>
          Back
        </Link>
      </div>
    </div>
  )
}

export default EventDetailsComponent
