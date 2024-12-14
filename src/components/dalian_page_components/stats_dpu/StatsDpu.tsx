import React from 'react'

import './stats-dpu.scss'

const StatsDpu = () => {
    return (
        <section className='stats bg-primary w-full max-w-[1920px]
        basic-text
        dpu_padding'>
            <div className="stats__wrapper text-white dpu_padding">
                <div className="count-institutes counts flex">
                    <div className="vertical-line"></div>
                    <div className="count-institutes__inner counts__inners">
                        <div className="count-institutes__inner-text flex flex-col">
                            <span className='inner-text--bigNum_stats'>24</span>
                            <span>института</span>
                        </div>
                        <div className="count-institutes__inner-number flex flex-col">
                            <span className='veryBIGBOX'>
                                <span className='inner-text--bigNum_stats'>
                                    &gt;40
                                </span>
                                <span>
                                    тыс
                                </span>
                            </span>
                            <span>
                                обучающихся
                            </span>
                        </div>
                    </div>
                </div>

                <div className="count-specialities counts flex">
                    <div className="vertical-line"></div>

                    <div className="count-specialities__inner counts__inners">
                        <div className="count-specialities__inner-text flex flex-col">
                            <span className='inner-text--bigNum_stats'>54</span>
                            <span>специальности</span>
                        </div>
                        <div className="count-specialities__inner-number flex flex-col">
                            <span className='veryBIGBOX'>
                                <span className='inner-text--bigNum_stats'>
                                    &gt;25
                                </span>
                                <span>
                                    тыс
                                </span>
                            </span>
                            <span className='mt-0 pt-0 gap-0'>
                                бакалавров
                            </span>
                        </div>
                    </div>
                </div>

                <div className="count-magistrants counts flex">
                    <div className="vertical-line"></div>
                    <div className="count-magistrants__inner counts__inners">
                        <div className="count-magistrants__inner-text flex flex-col">
                            <span className='inner-text--bigNum_stats'>147</span>
                            <span className='flex text-nowrap'>программ магистров</span>
                        </div>
                        <div className="count-magistrants__inner-number flex flex-col">
                            <span className='veryBIGBOX'>
                                <span className='inner-text--bigNum_stats'>
                                    &gt;11
                                </span>
                                <span>
                                    тыс
                                </span>
                            </span>
                            <span>
                                магистрантов
                            </span>
                        </div>
                    </div>
                </div>

                <div className="count-doctorants counts flex">
                    <div className="vertical-line"></div>
                    <div className="count-doctorants__inner counts__inners">
                        <div className="count-doctorants__inner-text flex flex-col">
                            <span className='inner-text--bigNum_stats'>107</span>
                            <span className='flex text-nowrap'>программ докторантов</span>
                        </div>
                        <div className="count-doctorants__inner-number flex flex-col">
                            <span className='veryBIGBOX'>
                                <span className='inner-text--bigNum_stats'>
                                    &gt;5
                                </span>
                                <span>
                                    тыс
                                </span>
                            </span>
                            <span>
                                докторантов
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default StatsDpu
