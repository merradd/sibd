import Image from 'next/image';
import './institute-managment.module.scss'
import Lyashenko from '@/../public/institute/Lyashenko.png'
import Rublevskaya from '@/../public/institute/Rublevskaya.png'

const InstituteManagment = () => {
    return <section className="managment-container banner w-full">
        <h2 className="font-semibold">РУКОВОДСТВО</h2>
        <div className="managment-item">
            <Image src={Lyashenko} className='managment-item-photo' alt='#' />
            <div className="managment-item-text">
                <h3 className="font-semibold">Ляшенко Людмила Сергеевна</h3>
                <p>Директор института<br/>Кандидат физико-математических наук, доцент</p>
                <span>+375 (17) 209-53-72</span><span>lyashenko@bsu.by</span>
            </div>
        </div>

        <div className="managment-item">
            <Image src={Rublevskaya} className='managment-item-photo' alt='#' />
            <div className="managment-item-text">
                <h3 className="font-semibold">Рублевская Ольга Николаевна</h3>
                <p>Ведущий специалист по обеспечению учебного процесса </p>
                <span>+375 (17) 209-53-73</span><span>rubleuskaya@bsu.by </span>
            </div>
        </div>
    </section>
}

export default InstituteManagment