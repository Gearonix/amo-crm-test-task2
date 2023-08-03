import { logo, telegram, viber, whatsapp } from '@/assets'
import s from './header.module.scss'

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header_left_section}>
        <div className={s.logo_wrapper}>
          <img src={logo} className={s.logo} />
          <h6 className={s.logo_description}>
            крупный интегратор CRM в Росcии и ещё 8 странах
          </h6>
        </div>
        <nav className={s.nav}>
          <a className={s.nav_link}>Услуги</a>
          <a className={s.nav_link}>Виджеты</a>
          <a className={s.nav_link}>Интеграции</a>
          <a className={s.nav_link}>Кейсы</a>
          <a className={s.nav_link}>Сертификаты</a>
        </nav>
      </div>
      <div className={s.nav_right_section}>
        <span className={s.phone}>+7 555 555-55-55</span>
        <div className={s.icons}>
          <img className={s.icon} src={telegram} />
          <img className={s.icon} src={viber} />
          <img className={s.icon} src={whatsapp} />
        </div>
      </div>
    </header>
  )
}
