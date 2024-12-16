import HeaderNews from '@/components/news_page_components/header_news/HeaderNews';
import Footer from '@/components/footer/Footer';
import SpecialtiesContent from '@/components/specialties_page_components/SpecialtiesContent';

export default function Contacts() {
  return (
    <section className='page w-full'>
      <HeaderNews />
      <SpecialtiesContent />
      <Footer />
    </section>
  );
}
