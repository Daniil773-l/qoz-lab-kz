import { ScrollMotion } from "./scroll-motion";

const Arrow = ({ diagonal = false }: { diagonal?: boolean }) => (
  <span aria-hidden="true" className={diagonal ? "arrow diagonal" : "arrow"}>
    ↗
  </span>
);

const Check = () => (
  <span aria-hidden="true" className="check">
    ✓
  </span>
);

const services = [
  {
    number: "01",
    label: "Продажи",
    title: "Не теряйте заявки",
    text: "Собираем обращения из сайта, форм и мессенджеров в один управляемый процесс.",
    tags: ["CRM", "Лиды", "Аналитика"],
  },
  {
    number: "02",
    label: "Операции",
    title: "Уберите ручную работу",
    text: "Автоматизируем повторяющиеся действия, уведомления, статусы и передачу задач.",
    tags: ["Процессы", "Интеграции", "Контроль"],
  },
  {
    number: "03",
    label: "AI",
    title: "Внедряйте с пользой",
    text: "Подключаем AI там, где он сокращает время, помогает сотрудникам и влияет на результат.",
    tags: ["Ассистенты", "База знаний", "Пилоты"],
  },
];

const steps = [
  {
    number: "01",
    title: "Диагностика",
    text: "Изучаем путь клиента и находим участок, где теряются деньги или время.",
    meta: "30 минут",
  },
  {
    number: "02",
    title: "Прототип",
    text: "Показываем решение до большой разработки и фиксируем критерий результата.",
    meta: "2–3 дня",
  },
  {
    number: "03",
    title: "Запуск",
    text: "Внедряем, обучаем команду и подключаем измеримые показатели.",
    meta: "7–14 дней",
  },
  {
    number: "04",
    title: "Рост",
    text: "Поддерживаем решение и масштабируем только то, что доказало пользу.",
    meta: "По данным",
  },
];

const audiences = [
  "Учебные центры",
  "Сервисные компании",
  "Рестораны и кофейни",
  "Интернет-магазины",
  "Локальный ритейл",
  "Команды продаж",
];

const faqs = [
  {
    q: "Нужно ли менять нашу CRM?",
    highlight: "менять",
    a: "Нет. Сначала мы проверяем текущие инструменты и по возможности строим решение вокруг них. Замена системы оправдана только тогда, когда это действительно выгоднее.",
  },
  {
    q: "Вы гарантируете рост продаж?",
    a: "Мы не обещаем неподтверждённые цифры. До старта фиксируем измеримую цель: скорость ответа, долю обработанных заявок, время ручной работы или прозрачность воронки.",
  },
  {
    q: "Можно начать с небольшого пилота?",
    a: "Да. Это основной формат: одна проблема, один процесс и понятный результат за 7–14 дней без перестройки всего бизнеса.",
  },
  {
    q: "Что происходит после запуска?",
    a: "Передаём инструкции, обучаем ответственных и предлагаем поддержку. Вы сохраняете контроль над процессом и данными.",
  },
];

export default function Home() {
  return (
    <main>
      <ScrollMotion />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="QOS LAB — на главную">
          QOS<span>/</span>LAB
        </a>
        <nav aria-label="Основная навигация">
          <a href="#solutions">Решения</a>
          <a href="#approach">Подход</a>
          <a href="#product">Продукт</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a
          className="header-cta"
          href="https://t.me/Peopleiiop"
          target="_blank"
          rel="noreferrer"
        >
          Связаться <Arrow />
        </a>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">AI-автоматизация для бизнеса</p>
          <h1>
            Находим, где бизнес теряет клиентов.
            <span>Автоматизируем рост.</span>
          </h1>
          <p className="hero-lead">
            Превращаем заявки, ручные процессы и AI в понятную систему, которая
            экономит время и помогает бизнесу расти.
          </p>
          <div className="hero-actions">
            <a
              className="button button-primary"
              href="https://t.me/Peopleiiop"
              target="_blank"
              rel="noreferrer"
            >
              Получить бесплатный разбор <Arrow />
            </a>
            <p>
              Разбор за 30 минут
              <span>Без обязательств</span>
            </p>
          </div>
        </div>

        <div className="system-map" aria-label="Схема автоматизации заявки">
          <div className="map-status">
            <span className="live-dot" />
            Система роста / live
          </div>
          <div className="map-track track-a" />
          <div className="map-track track-b" />
          <div className="map-track track-c" />
          <div className="map-node node-lead">
            <span className="node-icon">↳</span>
            <p>
              <b>Заявка</b>
              <small>лид получен</small>
            </p>
            <i />
          </div>
          <div className="map-node node-score">
            <span className="node-icon">◇</span>
            <p>
              <b>Квалификация</b>
              <small>AI-оценка лида</small>
            </p>
            <i />
          </div>
          <div className="map-node node-deal">
            <span className="node-icon">↗</span>
            <p>
              <b>Сделка</b>
              <small>конверсия и рост</small>
            </p>
            <i />
          </div>
          <div className="map-core">
            <span />
          </div>
          <p className="map-integrations">
            Интеграции
            <span>CRM · MESSENGERS · EMAIL · ADS</span>
          </p>
        </div>
      </section>

      <section className="trust-strip" aria-label="Преимущества">
        <p>Казахстан / 2026</p>
        <ul>
          <li>
            <span>01</span> Быстрый пилот
          </li>
          <li>
            <span>02</span> Измеримый результат
          </li>
          <li>
            <span>03</span> Без лишней разработки
          </li>
        </ul>
      </section>

      <section className="section-shell problem-section">
        <p className="section-index" data-reveal>01 / Сигналы</p>
        <div className="section-heading split-heading" data-reveal>
          <h2>Технологии должны решать бизнес-задачу.</h2>
          <p>
            Если процесс нельзя измерить, им трудно управлять. Мы начинаем не с
            кода, а с места, где компания теряет деньги, клиента или время.
          </p>
        </div>
        <div className="signal-grid">
          <article data-reveal style={{ transitionDelay: "40ms" }}>
            <span>01</span>
            <h3>Заявки теряются в чатах</h3>
            <p>Нет единой картины и ответственного за следующий шаг.</p>
          </article>
          <article data-reveal style={{ transitionDelay: "90ms" }}>
            <span>02</span>
            <h3>Сотрудники делают одно и то же</h3>
            <p>Данные вручную переходят между таблицами и системами.</p>
          </article>
          <article data-reveal style={{ transitionDelay: "140ms" }}>
            <span>03</span>
            <h3>AI есть, результата нет</h3>
            <p>Инструмент внедрён ради тренда, но не связан с показателями.</p>
          </article>
          <article className="signal-accent" data-reveal style={{ transitionDelay: "190ms" }}>
            <span>04</span>
            <h3>Решение</h3>
            <p>Один процесс. Понятный пилот. Измеримый эффект.</p>
          </article>
        </div>
      </section>

      <section className="solutions" id="solutions">
        <div className="section-shell">
          <p className="section-index light" data-reveal>02 / Решения</p>
          <div className="section-heading split-heading light" data-reveal>
            <h2>Собираем систему вокруг вашего роста.</h2>
            <p>
              Начинаем с одного узкого участка. После результата развиваем
              решение без хаотичного усложнения.
            </p>
          </div>
          <div className="service-list">
            {services.map((service, index) => (
              <article
                key={service.number}
                className="service-row"
                data-reveal
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <p className="service-number">{service.number}</p>
                <p className="service-label">{service.label}</p>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
                <ul>
                  {service.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <Arrow diagonal />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell approach" id="approach">
        <p className="section-index" data-reveal>03 / Подход</p>
        <div className="section-heading" data-reveal>
          <h2>
            От первой гипотезы
            <br />до работающего процесса.
          </h2>
        </div>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <article
              key={step.number}
              data-reveal
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="step-top">
                <span>{step.number}</span>
                <small>{step.meta}</small>
              </div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="product" id="product">
        <div className="section-shell product-inner">
          <div className="product-copy reveal-left" data-reveal>
            <p className="section-index light">04 / Собственный продукт</p>
            <p className="product-kicker">QOS / EDUCATION</p>
            <h2>Операционная система для учебных центров.</h2>
            <p className="product-lead">
              Расписание, посещаемость, оплаты, заявки и учебный процесс в одном
              понятном пространстве.
            </p>
            <ul className="feature-list">
              <li>
                <Check /> Группы, преподаватели и расписание
              </li>
              <li>
                <Check /> Посещаемость и прогресс ученика
              </li>
              <li>
                <Check /> Оплаты и задолженности
              </li>
              <li>
                <Check /> CRM и контроль новых заявок
              </li>
            </ul>
            <a
              className="text-link"
              href="https://t.me/Peopleiiop"
              target="_blank"
              rel="noreferrer"
            >
              Стать партнёром пилота <Arrow />
            </a>
          </div>
          <div
            className="product-dashboard reveal-scale"
            aria-label="Пример панели учебного центра"
            data-reveal
          >
            <div className="dashboard-head">
              <span>QOS / EDU</span>
              <p>
                Astana <i />
              </p>
            </div>
            <div className="dashboard-grid">
              <article className="dash-card dash-primary">
                <small>Активные ученики</small>
                <strong>248</strong>
                <span>+18 за месяц</span>
              </article>
              <article className="dash-card">
                <small>Занятия сегодня</small>
                <strong>24</strong>
                <span>8 преподавателей</span>
              </article>
              <article className="dash-card dash-wide">
                <div>
                  <small>Заполнение групп</small>
                  <strong>82%</strong>
                </div>
                <div className="mini-chart">
                  {[35, 52, 47, 68, 61, 80, 76, 88, 82].map((height, index) => (
                    <i key={index} style={{ height: `${height}%` }} />
                  ))}
                </div>
              </article>
              <article className="dash-card dash-list">
                <small>Ближайшие занятия</small>
                <p>
                  <span>10:00</span> Frontend / Group 02
                </p>
                <p>
                  <span>12:30</span> English / B1
                </p>
                <p>
                  <span>15:00</span> Python / Teens
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell audience">
        <p className="section-index" data-reveal>05 / Для кого</p>
        <div className="section-heading split-heading" data-reveal>
          <h2>Работаем с бизнесом, который готов наводить порядок.</h2>
          <p>
            Особенно полезны там, где много обращений, повторяющихся действий и
            ручного контроля.
          </p>
        </div>
        <ul className="audience-list">
          {audiences.map((item, index) => (
            <li
              key={item}
              data-reveal
              style={{ transitionDelay: `${(index % 2) * 70}ms` }}
            >
              <span>0{index + 1}</span>
              {item}
              <Arrow />
            </li>
          ))}
        </ul>
      </section>

      <section className="section-shell principles">
        <p className="section-index" data-reveal>06 / Принципы</p>
        <div className="principle-grid">
          <div className="principle-statement reveal-left" data-reveal>
            <span className="big-mark">“</span>
            <h2>
              Не продаём часы разработки. Создаём управляемый результат.
            </h2>
          </div>
          <div className="principle-list" data-reveal>
            <p>
              <span>01</span>
              <b>Сначала данные</b>
              Оцениваем процесс до и после изменений.
            </p>
            <p>
              <span>02</span>
              <b>Человек контролирует AI</b>
              Критические решения не остаются без проверки.
            </p>
            <p>
              <span>03</span>
              <b>Без зависимости</b>
              Передаём инструкции, доступы и логику работы.
            </p>
          </div>
        </div>
      </section>

      <section className="faq" id="faq">
        <div className="section-shell">
          <p className="section-index" data-reveal>07 / FAQ</p>
          <div className="faq-layout">
            <h2 className="reveal-left" data-reveal>Коротко о главном.</h2>
            <div className="faq-list">
              {faqs.map((item, index) => (
                <details
                  key={item.q}
                  open={index === 0 ? true : undefined}
                  data-reveal
                  style={{ transitionDelay: `${index * 55}ms` }}
                >
                  <summary>
                    <span>0{index + 1}</span>
                    <span className="faq-question">
                      {item.highlight ? (
                        <>
                          {item.q.split(item.highlight)[0]}
                          <mark>{item.highlight}</mark>
                          {item.q.split(item.highlight)[1]}
                        </>
                      ) : (
                        item.q
                      )}
                    </span>
                    <i>+</i>
                  </summary>
                  <p className="faq-answer">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="section-shell">
          <p className="section-index" data-reveal>08 / Следующий шаг</p>
          <h2 data-reveal>
            Покажем, где ваш бизнес
            <span>может работать сильнее.</span>
          </h2>
          <div className="final-cta-bottom" data-reveal>
            <p>
              Бесплатно разберём один процесс и предложим конкретный первый шаг.
            </p>
            <a
              className="button button-dark"
              href="https://t.me/Peopleiiop"
              target="_blank"
              rel="noreferrer"
            >
              Обсудить задачу <Arrow />
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="section-shell footer-grid">
          <div>
            <a className="brand footer-brand" href="#top">
              QOS<span>/</span>LAB
            </a>
            <p>IT-решения для измеримого роста бизнеса.</p>
          </div>
          <div>
            <p className="footer-label">Навигация</p>
            <a href="#solutions">Решения</a>
            <a href="#approach">Подход</a>
            <a href="#product">Продукт</a>
          </div>
          <div>
            <p className="footer-label">Связаться</p>
            <a href="https://t.me/Peopleiiop" target="_blank" rel="noreferrer">
              Telegram <Arrow />
            </a>
          </div>
          <p className="copyright">© 2026 QOS LAB. Казахстан.</p>
        </div>
      </footer>
    </main>
  );
}
