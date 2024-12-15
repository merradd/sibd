import Image from 'next/image';
import '@/components/rikk_page_comonents/page_header/rikk-page-header.module.scss'
import RikkTitleImage from '../../../../public/rikk_images/rikk_title_image.png'

const RikkTitle = () => {
    return <div className="page-header">
    <Image src={RikkTitleImage} alt='#' />
    <div className="page-header-text">
        <h1 className='font-black'>РИКК</h1>
        <p className='font-semibold'>ВДОХНОВЕНИЕ НАЧИНАЕТСЯ ЗДЕСЬ</p>
    </div>
</div>
}

export default RikkTitle