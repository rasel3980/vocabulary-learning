import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tutorials = () => {
    const Navigate = useNavigate();
    return (
        <div className='w-11/12 mx-auto'>
            <header>
                <h1 className='text-3xl font-bold text-center mt-5'>Spanish Vocabulary Tutorials</h1>
            </header>
            <div className='grid grid-cols-2 my-10 gap-8'>
                <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/lJw40ENfr2w?si=MuG-70HHsG9kk9hM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/SSjmWPgpphI?si=k3c2DTugJ1U7iuz4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/0Odnbvov9N0?si=NK1FyAMn9e3WJU1r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/0FigTJ-4g48?si=C7s7uoT7vw84PpNY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Q1oiuR5jI0Q?si=5TUILG7V9vuJ-OxV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/33CPlThehFk?si=l5haI74gwZPoTdAg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/wJsc6DuNgl0?si=fFRzd-iYxrsnTAbz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/BwCWVEyf6vs?si=YHxxLuUOy1hPVJlJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/dlazjKbt40Q?si=lIHAhjqjY-VKWrmO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/itBLs5igz6M?si=ieFQS6-lFc880ef-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            <div className='text-center pb-20'>
            <button onClick={()=>Navigate('/start learning')} className='btn bg-[#1abc9c] hover:bg-[#3498db] text-white font-bold text-xl '>Learn Vocabularies</button>
            </div>
        </div>
    );
};

export default Tutorials;