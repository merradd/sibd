import React from 'react';

const VideoDpu = () => {
    return (
        <div className="yt-video-dpu flex flex-col items-center justify-center">
            <iframe
                className='video-dpu w-full 
                max-w-[1150px]
                h-[200px] min-[480px]:h-[250px]
                min-[640px]:h-[300px]
                min-[768px]:h-[400px]
                min-[1200px]:h-[500px]
                '
                src="https://www.youtube.com/embed/_SdvYRwIURg?si=f-HSkenEvtbVwPQ9"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>

            </iframe>
        </div>
    );
};

export default VideoDpu;