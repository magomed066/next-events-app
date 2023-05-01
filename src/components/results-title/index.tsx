import Link from 'next/link'
import React, { FC } from 'react'
import styles from './index.module.scss'
import Button from '../button'

interface Props {
  date: Date
}

const ResultsTitle: FC<Props> = ({ date }) => {
  const readableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  })

  return (
    <section className={styles['section']}>
      <h1 className={styles['section__title']}>Events in {readableDate}</h1>
      <Button asLink href="/events">
        Show all events
      </Button>
    </section>
  )
}

export default ResultsTitle
