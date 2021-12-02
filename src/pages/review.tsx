import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValueLoadable, useRecoilValue } from 'recoil';
import { reviewData, reviewQuery, Review, ReviewQuery } from '../recoil/review/review';
import ErrorBoundary from '../components/ErrorBoundary ';
import { filterData } from '../models/filterData';

const ReviewPage = () => {
    const [size, setSize] = useState(1);
    const [offset, setOffset] = useState(5);
    const [subject, setSubject] = useState(``);
    const [year, setYear] = useState(``);

    const reviewList = useRecoilValue(reviewData);
    const [Query, setQuery] = useRecoilState(reviewQuery);

    const onClickYearFilterBtn = (title: string) => {
        setYear(title);
    };

    const onClickSubjectFilterBtn = (title: string) => {
        setSubject(title);
    };

    useEffect(() => {
        setQuery({ size, offset, subject, year });
    }, [size, offset, subject, year]);

    console.log(reviewList);
    console.log(Query);
    console.log(subject);
    console.log(year);
    return (
        <>
            <div className="header">
                <span>꾸며지지 않은 리얼 후기가 궁금해 ?!</span>
                <span>
                    똑같이 고민하고 미리 경험해본
                    <span>실제 수강생</span>의 후기로 확인하세요 !
                </span>
            </div>
            <div className="filter">
                <div className="year__filter">
                    <span>학년</span>
                    {filterData.year.map((f) => (
                        <div key={f.index} onClick={() => onClickYearFilterBtn(f.query)}>
                            {f.title}
                        </div>
                    ))}
                </div>
                <div className="subject__filter">
                    <span>과목</span>
                    {filterData.subject.map((f) => (
                        <div key={f.index} onClick={() => onClickSubjectFilterBtn(f.query)}>
                            {f.title}
                        </div>
                    ))}
                </div>
            </div>
            <div>
                {reviewList.data.length !==0 ? reviewList.data.map((review: Review) => (
                    <ul
                        key={
                            review.student_name +
                            review.review +
                            review.year_name +
                            review.subject_view_name
                        }
                    >
                        <li>{review.student_name}</li>
                        <li>{review.review}</li>
                        <li>{review.subject_view_name}</li>
                        <li>{review.year_name}</li>
                        <li>{review.reg_datetime}</li>
                    </ul>
                )) : <span>값이 없습니다.</span>}
            </div>
        </>
    );
};

const Review = (): JSX.Element => {
    return (
        <ErrorBoundary>
            <React.Suspense fallback={<div>...Loading</div>}>
                <ReviewPage />
            </React.Suspense>
        </ErrorBoundary>
    );
};

export default Review;
