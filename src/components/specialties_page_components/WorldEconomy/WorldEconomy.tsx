import Image from 'next/image';
import MechanicsModelingIcon from './WorldEconomyIcon.png';
import '../styles/forspec.module.scss';

const MechanicsModeling = () => {
  return (
    <div className='specialties-modeling-container'>
      <h1 className='specialties-title'>МИРОВАЯ ЭКОНОМИКА</h1>
      <div className='specialties-content'>
        <div className='specialties-icon'>
          <Image src={MechanicsModelingIcon} alt='World Economy Icon' />
        </div>
        <div className='specialties-description'>
          <p>
              Специальность «Мировая экономика» ориентирована на подготовку
            высококвалифицированных экономистов-международников, обладающих
            знаниями и компетенциями, востребованными для работы в сфере мировой
            экономики и международных экономических отношений. Студенты получают
            знания в области международной торговли, международных
            валютно-кредитных и финансовых отношений, международной банковской
            деятельности, международного экономического законодательства,
            деятельности международных экономических организаций и др.
          </p>
          <p>
              Данная специальность позволяет грамотно анализировать
            внешнеэкономическую деятельность предприятий и организаций,
            прогнозировать развитие ситуаций на мировых рынках, оценивать
            перспективы и последствия международных экономических сделок. Одной
            из важнейших особенностей выпускника по специальности "Мировая
            экономика" является владение двумя иностранными языками на
            профессиональном уровне.
          </p>
        </div>
      </div>
      <div className='specialties-buttons'>
        <button className='btn learn-more'>УЗНАТЬ ПОДРОБНЕЕ</button>
        <button className='btn passing-scores'>ПРОХОДНЫЕ БАЛЛЫ</button>
      </div>
    </div>
  );
};

export default MechanicsModeling;
