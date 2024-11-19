import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LessonCard from './LessonCard';

const LessonList = () => {
    const data = useLoaderData();
    return (
        <div>
            {
                data.map(item => <LessonCard item={item}></LessonCard>)
            }
        </div>
    );
};

export default LessonList;