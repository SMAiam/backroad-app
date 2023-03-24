import Title from './Title'
import { tourData } from '../data'

const Tours = () => {
  return (
    <section class="section" id="tours">
      <Title title={'featured'} subTitles={'tours'} />

      <div class="section-center featured-center">
        {tourData.map((data) => {
          const { id, image, title, text, country, days, amount } = data
          return (
            <article key={id} class="tour-card">
              <div class="tour-img-container">
                <img src={image} class="tour-img" alt="" />
                <p class="tour-date">august 26th, 2020</p>
              </div>
              <div class="tour-info">
                <div class="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{text}</p>
                <div class="tour-footer">
                  <p>
                    <span>
                      <i class="fas fa-map"></i>
                    </span>{' '}
                    {country}
                  </p>
                  <p>{days}</p>
                  <p>{amount}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
export default Tours
