import { ReactNode } from 'react'
import { purpleBall, redBall, redBallSmall } from '@/assets'
import s from './background.module.scss'

interface BackgroundProps {
  children: ReactNode
}

const Background = ({ children }: BackgroundProps) => {
  return (
    <>
      {children}
      <div className={s.red_shadow_cover} />
      <div className={s.purple_shadow_cover} />
      <img src={redBallSmall} className={s.red_ball_small} />
      <img className={s.purple_ball} src={purpleBall} />
      <img className={s.red_ball} src={redBall} />
    </>
  )
}

export default Background
