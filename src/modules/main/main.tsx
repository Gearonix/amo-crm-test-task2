import s from './main.module.scss'

export const Main = () => {
  return (
    <div className={s.main}>
      <div className={s.title_section}>
        <h1 className={s.title}>
          Зарабатывайте <br />
          больше <br />с <em>WELBEX</em>
        </h1>
        <h3 className={s.subtitle}>Развиваем и контролируем продажи за вас</h3>
      </div>
      <div className={s.consultation_section}>
        <h4 className={s.consultation_title}>
          Вместе с <em>бесплатной консультацией</em> мы дарим:
        </h4>
        <div className={s.consultation_block}>
          <div className={s.consultation_item}>
            <h3>Виджеты</h3>
            <p>30 готовых решений</p>
          </div>
          <div className={s.consultation_item}>
            <h3>Dashboard</h3>
            <p>с показателями вашего бизнеса</p>
          </div>
          <div className={s.consultation_item}>
            <h3>Skype Аудит</h3>
            <p>отдела продаж и CRM системы</p>
          </div>
          <div className={s.consultation_item}>
            <h3>35 дней</h3>
            <p>использования CRM</p>
          </div>
        </div>
        <button className={s.consultation_button}>Получить консультацию</button>
      </div>
    </div>
  )
}
