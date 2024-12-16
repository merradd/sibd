import Image from 'next/image';
import MechanicsModelingIcon from './MechanicsModelingIcon.png';
import '../styles/forspec.module.scss';

const MechanicsModeling = () => {
  return (
    <div className="specialties-modeling-container">
      <h1 className="specialties-title">МЕХАНИКА И МАТЕМАТИЧЕСКОЕ МОДЕЛИРОВАНИЕ</h1>
      <div className="specialties-content">
        <div className="specialties-icon">
          <Image src={MechanicsModelingIcon} alt="Mechanics Modeling Icon" />
        </div>
        <div className="specialties-description">
          <p>
            Специальность «Механика и математическое моделирование» дает
            фундаментальную подготовку по основным разделам современной механики
            с глубокими знаниями основ прикладной математики, а также подготовку
            в областях экспериментальных, расчетных, инженерных и компьютерных
            исследований применительно к актуальным задачам механики, что
            обеспечивает получение квалификации «Механик. Прикладной
            математик».
          </p>
          <p>
            Таким образом, специалист, получивший данную квалификацию, вооружен
            глубокими фундаментальными знаниями законов механики, методами
            математического моделирования сложных механических процессов,
            приемами их компьютерной и экспериментальной обработки. Студенты
            углубленно изучают английский язык и основы китайского языка.
          </p>
        </div>
      </div>
      <div className="specialties-buttons">
        <button className="btn learn-more">УЗНАТЬ ПОДРОБНЕЕ</button>
        <button className="btn passing-scores">ПРОХОДНЫЕ БАЛЛЫ</button>
      </div>
    </div>
  );
};

export default MechanicsModeling;
