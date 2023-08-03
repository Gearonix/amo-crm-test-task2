import { telegram, viber, whatsapp } from '@/assets'
import s from './footer.module.scss'

const Footer = () => {
  return (
    <>
      <footer className={s.footer}>
        <div className={s.footer_left_section}>
          <div className={s.about_company}>
            <h4 className={s.footer_title}>О компании</h4>
            <a className={s.footer_link}>Партнёрская программа</a>
            <a className={s.footer_link}>Вакансии</a>
          </div>
          <div className={s.menu}>
            <h4 className={s.footer_title}>Меню</h4>
            <div className={s.menu_block}>
              <div>
                <a className={s.footer_link}>Расчёт стоимости</a>
                <a className={s.footer_link}>Услуги</a>
                <a className={s.footer_link}>Виджеты</a>
                <a className={s.footer_link}>Интеграции</a>
                <a className={s.footer_link}>Наши клиенты</a>
              </div>
              <div>
                <a className={s.footer_link}>Кейсы</a>
                <a className={s.footer_link}>Благодарственные письма</a>
                <a className={s.footer_link}>Сертификаты</a>
                <a className={s.footer_link}>Блог на Youtube</a>
                <a className={s.footer_link}>Вопрос / Ответ</a>
              </div>
            </div>
          </div>
        </div>
        <div className={s.contacts}>
          <h4 className={s.footer_title}>Контакты</h4>
          <a className={s.footer_link}>+7 555-55-55</a>
          <div className={s.icons}>
            <img className={s.icon} src={telegram} />
            <img className={s.icon} src={viber} />
            <img className={s.icon} src={whatsapp} />
          </div>
          <a className={s.footer_link}>Москва, Путевой проезд 3с1, к 902</a>
        </div>
      </footer>
      <div className={s.bottom_footer}>
        <div className={s.all_rights_reserved}>
          <h5>©WELBEX 2022. Все права защищены.</h5>
          <h5>Политика конфиденциальности</h5>
        </div>
      </div>
    </>
  )
}

export default Footer
