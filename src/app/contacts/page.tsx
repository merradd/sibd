import HeaderNews from '@/components/news_page_components/header_news/HeaderNews';
import Footer from '@/components/footer/Footer';
import ContactsContent from '@/components/contacts_page_components/ContactsContent';

export default function Contacts() {
  return (
    <section className='page w-full'>
      <HeaderNews />
      <ContactsContent />
      <Footer />
    </section>
  );
}
