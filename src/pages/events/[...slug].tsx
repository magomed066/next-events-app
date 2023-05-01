import { Button, Events, ResultsTitle } from '@/components'
import { getFilteredEvents } from '@/dummy-data'
import { useRouter } from 'next/router'
import styles from './index.module.scss'

const FilteredEvents = () => {
  const router = useRouter()
  const filterData = router.query.slug

  if (!filterData) {
    return <p className="center">Loading...</p>
  }

  const filteredYear = filterData[0]
  const filteredMonth = filterData[1]

  const numMonth = +filteredMonth
  const numYear = +filteredYear

  if (
    isNaN(numMonth) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <div className="container">
        <Button asLink href="/events">
          Back
        </Button>
        <p className={styles['not-found']}>
          Invalid filter. Please, adjust your values!
        </p>
      </div>
    )
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  })

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <div className="container">
        <Button asLink href="/events">
          Back
        </Button>
        <p className={styles['not-found']}>
          No events found for the chosen filter!
        </p>
      </div>
    )
  }

  const date = new Date(numYear, numMonth - 1)

  return (
    <div className="container">
      <ResultsTitle date={date} />
      <Events data={filteredEvents} />
    </div>
  )
}

export default FilteredEvents
