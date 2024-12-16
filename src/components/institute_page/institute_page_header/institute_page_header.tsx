import './institute_page_header.module.scss'
import Image from 'next/image';
import PageHeaderBg from '@/../public/institute/page-header.png'

const InstitutePageHeader = () => {
    return <div className="page-header">
        <Image src={PageHeaderBg} alt='#' />
        <div className="page-header-text">
            <h1 className='font-black'>ИНСТИТУТ</h1>
            <p className='font-semibold'>ВДОХНОВЕНИЕ НАЧИНАЕТСЯ ЗДЕСЬ</p>
        </div>
    </div>
}

export default InstitutePageHeader