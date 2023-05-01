import React, { useEffect, useRef } from 'react'
import styles from './index.module.scss'
import Link from 'next/link'

let timeout: any
let scroll = 0

const Header = () => {
  const ref = useRef<HTMLHeadElement>(null)

  useEffect(() => {
    window.onscroll = () => {
      if (timeout) {
        clearTimeout(timeout)
      }

      timeout = setTimeout(() => {
        if (scroll >= 30 && window.scrollY > 30) {
          ref.current?.classList.add(styles['glass'])
        }

        if (scroll <= 30 && window.scrollY < 30) {
          ref.current?.classList.remove(styles['glass'])
        }

        scroll = window.scrollY
      }, 10)
    }
  }, [])

  return (
    <header ref={ref} className={styles.header}>
      <div className="container">
        <div className={styles['header-wrapper']}>
          <Link href="/" className={styles.logo}>
            <span>Next</span>
            Events
          </Link>

          <nav className={styles['nav']}>
            <ul className={styles['nav-list']}>
              <li className={styles['nav-list__item']}>
                <Link className={styles['nav-list__link']} href="/events">
                  All Events
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
