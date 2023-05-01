import { Events } from '@/components'
import { getFeaturedEvents } from '@/dummy-data'

const Home = () => {
  const events = getFeaturedEvents()

  return (
    <div className="container">
      <Events data={events} />
    </div>
  )
}

export default Home
