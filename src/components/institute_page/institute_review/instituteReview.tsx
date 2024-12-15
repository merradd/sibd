import Image from 'next/image';
import './institute-review.module.scss'
import studentReview from '@/../public/institute/studentReview.png'

const InstituteReview = () => {
    return <section className='review-container'>
        <h2 className="font-semibold">ОБРАТНАЯ СВЯЗЬ</h2>
       <div className="review-content">
        {/* <div className="quote-top">“</div> */}
       <div className="review-content-text">
            <p>Меня зовут Александр Исайкин и на данный 
момент я готовлюсь продолжить своё обучение на 2 курсе 
Совместного института БГУ-ДПУ по специальности 
«Мировая экономика». За целый год учёбы я открыл для себя 
множество новых вещей и испытал не меньше 
положительных эмоций в качестве студента Cовместного 
института, которыми теперь хотел бы поделиться с Вами.
</p>
<p>
Лично для меня главным стимулом выбора специальности 
является её уникальность, ведь только у её студентов есть 
привилегия изучать один из самых востребованных языков 
сегодня – китайский. Кроме того, отличным бонусом 
по окончании института является получение сразу двух 
дипломов. А это само по себе придаёт больше уверенности 
в себе и даёт больше возможностей в будущем. Обобщая 
свои впечатления, я могу сказать, что первый год обучения 
был мне в радость и я с нетерпением жду продолжения.</p>
        </div>
        {/* <div className="quote-bottom">“</div> */}
        <div className="img-content">
            <Image src={studentReview} alt='#' className='student-photo' />
            <p>Исайкин Александр Владимирович<br />Студент 2 курса Совместного института БГУ-ДПУ<br />Специальность «Мировая экономика»</p>
        </div>
       </div>
    </section>
}

export default InstituteReview