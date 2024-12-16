import Map from '@/components/contacts_page_components/map/Map';
import Address from './Address';
import Title from './Title';
import './styles/contacts.module.scss';

export default function ContactsContent() {
  return (
    <div className='main__container'>
      <div className='title'>
        <Title />
      </div>
      <div className='map'>
        <Map />
      </div>
      <div className='address'>
        <Address />
      </div>
    </div>
  );
}
