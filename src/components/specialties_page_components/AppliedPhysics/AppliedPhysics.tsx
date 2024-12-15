import Image from 'next/image';
import MechanicsModelingIcon from './AppliedPhysicsIcon.png';
import '../styles/forspec.module.scss';

const MechanicsModeling = () => {
  return (
    <div className='specialties-modeling-container'>
      <h1 className='specialties-title'>ПРИКЛАДНАЯ ФИЗИКА</h1>
      <div className='specialties-content'>
        <div className='specialties-icon'>
          <Image src={MechanicsModelingIcon} alt='Applied Physics Icon' />
        </div>
        <div className='specialties-description'>
          <p>
            Специальность "Прикладная физика"  Подготовка студентов включает в
            себя основы научно-исследовательской деятельности с прикладной
            направленностью и упором на внедрение научных разработок в
            производство. Студенты углубленно изучают английский язык и основы
            китайского языка. 
          </p>
          <p>
            Студенты учатся проводить научные исследования, направленные на
            дальнейшее практическое использование, а также изучают значимые
            достижения современной науки и техники в таких актуальных областях
            как оптика, материаловедение и энергетика.
          </p>
          <p>
            Специальность "Прикладная физика относится к категории наиболее
            востребованных экономикой. Победители (дипломы I, II и III степени)
            третьего (областного, Минского городского) этапа республиканской
            олимпиады и выпускники с золотой (серебряной) медалью зачисляются на
            эту специальность без вступительных испытаний (без сертификатов ЦТ и
            ЦЭ).
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
