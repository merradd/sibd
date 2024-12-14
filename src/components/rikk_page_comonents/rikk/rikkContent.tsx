import '@/components/rikk_page_comonents/rikk/rikk-content.module.scss'
import Image from 'next/image';
import Arrow from '@/../public/icons/right_arrow.svg'
import RikkImage from '@/../public/rikk_images/rikk.png'

const RikkContent = () => {
    return <section className='rikk-container'>
        <div className="subtitle-container">
            <h2 className='font-semibold'>Сотрудничество</h2>
            <p>Совместный институт БГУ-ДПУ осуществляет тесное взаимодействие 
с Республиканским институтом китаеведения имени Конфуция БГУ (РИКК) 
по следующим направлениям: </p>
        </div>

        <ul className="benefits">
            <li className="benefits-item">
                <Image src={Arrow} alt='#' />
                <p>обучение студентов СИБД китайскому языку 
с привлечением лучших специалистов РИКК, 
включая преподавателей из Китая </p>
            </li>

            <li className="benefits-item">
                <Image src={Arrow} alt='#' />
                
<p>проведение лекций для студентов СИБД 
по вопросам истории, культуры и тенденциях 
экономического развития КНР</p>
            </li>

            <li className="benefits-item">
                <Image src={Arrow} alt='#' />
                <p>предоставление студентам СИБД возможности 
использования библиотеки Китая РИКК в ходе 
осуществления своей учебной деятельности 
и выполнения научной работы </p>
            </li>

            <li className="benefits-item">
                <Image src={Arrow} alt='#' />
                <p>участие студентов СИБД в совместных с РИКК 
                культурно-образовательных мероприятиях. </p>
            </li>
        </ul>

        <div className="">
            <Image src={RikkImage} alt='#' />
        </div>

        <div className="subtitle-container">
            <h2 className='font-semibold'>Подробнее</h2>
            <p>Республиканский институт китаеведения имени Конфуция 
Белорусского государственного университета был создан в 
соответствии с Соглашением между Госканцелярией КНР по 
распространению китайского языка за рубежом (Ханьбань) 
и Белорусским государственным университетом, которое было 
подписано 5 июля 2006 года. С этого дня и начинается история Института.

С 2009 года партнером БГУ по обеспечению деятельности и 
развитию Института является Даляньский политехнический университет КНР.</p>
        </div>
    </section>
}

export default RikkContent