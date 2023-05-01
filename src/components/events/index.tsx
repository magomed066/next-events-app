import { IEvent } from '@/types'
import { FC } from 'react'
import Event from './event'
import styles from './index.module.scss'

interface Props {
  data: IEvent[]
}

const Events: FC<Props> = ({ data }) => {
  return (
    <ul className={styles.list}>
      {data.map((item) => (
        <Event key={item.id} data={item} />
      ))}
    </ul>
  )
}

export default Events
