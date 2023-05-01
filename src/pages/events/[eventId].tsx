import { Button, EventDetailsComponent } from '@/components'
import { getEventById } from '@/dummy-data'
import { useRouter } from 'next/router'
import styles from './index.module.scss'

const EventDetails = () => {
  const router = useRouter()

  const eventId = router.query.eventId as string
  const event = getEventById(eventId)

  if (!event) {
    return (
      <div className="container">
        <Button asLink href="/events">
          Back
        </Button>
        <p className={styles['not-found']}>No events found!</p>
      </div>
    )
  }

  return (
    <main className={styles['details']}>
      <EventDetailsComponent data={event} />
    </main>
  )
}

export default EventDetails
