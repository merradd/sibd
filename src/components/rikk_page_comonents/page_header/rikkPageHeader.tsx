import Image from 'next/image';
import '@/components/rikk_page_comonents/page_header/rikk-page-header.module.scss'
import RikkTitleImage from '../../../../public/rikk_images/rikk_title_image.png'

const RikkTitle = () => {
    return <div className='page-header banner w-full'>

            <Image src={RikkTitleImage} className='title_image' alt='#' />
        <div className="title_text-content">
            <h1 className="title font-black">РИКК</h1>
            <p className="subtitle font-semibold">ВДОХНОВЕНИЕ НАЧИНАЕТСЯ ЗДЕСЬ</p>
        </div>
    </div>
}

export default RikkTitle