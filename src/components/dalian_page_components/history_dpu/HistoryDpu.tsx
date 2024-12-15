import React from 'react'

import Image from 'next/image'

import Rock from '../../../../public/pics/rock.png'

import './history-dpu.module.scss'

const HistoryDpu = () => {
    return (
        <section className='history-dpu w-full'>
            <div className="history-dpu__wrapper w-full basic-text
                            mt-[30px] sm:mt-[50px]
                            xl:mt-[70px] 2xl:mt-[100px]">
                <h2 className='uppercase font-semibold'>История ДПУ</h2>
                <div className="history-dpu__inner w-full font-light
                mt-[40px] max-md:mt-[20px]">
                    <div className="history-dpu__inner-img">
                        <Image
                            className='inner-img-of-rock'
                            src={Rock}
                            width={735}
                            height={1061}
                            alt=''
                        />
                    </div>
                    <div className="history-dpu__inner-text">
                        <div className="history-dpu__paragraph font-normal">
                            <p>
                                Исторически открытие университета состоялось в
                                апреле 1949 года. В июле 1950 года из него был выделен
                                Даляньский технический институт. В октябре 1987 года
                                из ДПУ выделился Медицинский институт и
                                Педагогический институт и на их базе был образован Даляньский университет. Современное название университет получил в 1988 г.
                            </p>
                            <p>
                                На сегодняшний день университет является ведущим
                                технологическим ВУЗом в Китае. Университет активно
                                участвует в проектах по реализации Стратегии возрождения старопромышленных баз Северо-восточного Китая.
                            </p>
                        </div>
                        <div className="history-dpu__dates
                        mt-[30px] lg:mt-[40px] xl:mt-[60px]">
                            <div className="history-dpu__date">
                                <p className='history-dpu__date__inner'>
                                    <span className='history-dpu__date__inner-num font-light'>1939</span>
                                    <span className='font-normal'>открытие университета</span>
                                </p>
                                <hr className="border-t-[1px] border-black
                                mt-[10px]
                                md:mt-[15px]
                                md:mt-[25px]" />

                            </div>
                            <div className="history-dpu__date">
                                <p className='history-dpu__date__inner'>
                                    <span className='history-dpu__date__inner-num font-light'>1950</span>
                                    <span className='font-normal'>выделен Даляньский технический университет</span>
                                </p>
                                <hr className="border-t-[1px] border-black
                                mt-[10px]
                                md:mt-[15px]
                                lg:mt-[25px]" />

                            </div>
                            <div className="history-dpu__date">
                                <p className='history-dpu__date__inner'>
                                    <span className='history-dpu__date__inner-num font-light'>1987</span>
                                    <span className='font-normal'>образование Даляньского университета</span>
                                </p>
                                <hr className="border-t-[1px] border-black
                                mt-[10px]
                                md:mt-[15px]
                                md:mt-[25px]" />
                            </div>
                            <div className="history-dpu__date">
                                <p className='history-dpu__date__inner'>
                                    <span className='history-dpu__date__inner-num font-light'>1988</span>
                                    <span className='font-normal'>получил современное название</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HistoryDpu
