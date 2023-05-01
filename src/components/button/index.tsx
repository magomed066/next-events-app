import React, { FC, ReactNode } from 'react'
import styles from './index.module.scss'
import css from 'classnames'
import classNames from 'classnames'
import Link from 'next/link'

interface Props {
  children?: JSX.Element | ReactNode
  type?: 'submit' | 'button'
  onClick?: () => void
  className?: string
  asLink?: boolean
  href?: string
}

const Button: FC<Props> = ({
  children,
  type,
  onClick,
  className,
  asLink,
  href,
}) => {
  if (asLink && href) {
    return (
      <Link className={css(styles.link, className)} href={href}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type || 'button'}
      onClick={onClick}
      className={css(styles.button, className)}
    >
      {children}
    </button>
  )
}

export default Button
