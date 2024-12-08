import HeaderNews from '@/components/news_page_components/header_news/HeaderNews';
import Footer from '@/components/footer/Footer';
import Map from '@/components/map/Map';
import './styles/contacts.module.scss';

export default function Contacts() {
  return (
    <section className='page w-full'>
      <HeaderNews />

      <div className='main__container'>
        <div className='main__text_h1'>
          <h1>Контакты</h1>
        </div>
        <br />
        <Map />
        <br />
        <span>Адрес:</span> <br />
        <span>220030 г. Минск, ул. Бобруйская 5 (физический факультет), к. 413</span> <br />
        <span>Телефон:</span> <br />
        <span>+375-(17)-209-53-73 (приемная)</span>
      </div>

      <Footer />
    </section>
  );
}
