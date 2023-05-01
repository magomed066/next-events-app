import { Button, Events, Select } from '@/components'
import { getAllEvents } from '@/dummy-data'
import React, { useState } from 'react'
import styles from './index.module.scss'
import { monthSelect, yearSelect } from '@/constants'
import { useRouter } from 'next/router'

const EventsPage = () => {
  const router = useRouter()
  const events = getAllEvents()
  const [selectedYear, setSelectedYear] = useState<string>('')
  const [selectedMonth, setSelectedMonth] = useState<string>('')

  const handleFilter = (e: React.FormEvent) => {
    e.preventDefault()

    if (!selectedYear || !selectedMonth) {
      alert('Select all filters!')
      return
    }

    router.push(`/events/${selectedYear}/${selectedMonth}`)
  }

  return (
    <div className="container">
      <h1 className={styles['events__title']}>All events</h1>
      <div className={styles['events']}>
        <Events data={events} />

        <form className={styles['filters']} onSubmit={handleFilter}>
          <h4 className={styles['filters__title']}>Filters</h4>
          <Select onSelect={setSelectedYear} label="Year" data={yearSelect} />
          <Select
            onSelect={setSelectedMonth}
            label="Month"
            data={monthSelect}
          />

          <Button type="submit" className={styles['filters__btn']}>
            Find Events
          </Button>
        </form>
      </div>
    </div>
  )
}

export default EventsPage
