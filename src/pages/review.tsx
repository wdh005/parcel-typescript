
import React, {useEffect, useState} from 'react'
import { useRecoilState, useRecoilValueLoadable } from 'recoil'
import { reviewData,reviewQuery, Review } from '../recoil/review/review'

const Review : React.FunctionComponent = ()  =>  {
    const [isLoading, setIsLoading] = useState(false)
    const [size, setSize] = useState()
    const [offset, setOffset] = useState()
    const [subject, setSubject] = useState(``)
    const [year, setYear] = useState(``)

    const reviewList = useRecoilValueLoadable(reviewData)
    const [Query, setQuery ]= useRecoilState(reviewQuery)
        
    
    useEffect(() => {
        if(reviewList.state === 'loading') {
            setIsLoading(true)
        }else{
            setIsLoading(false)
        }
    }, [reviewList])
    console.log(reviewList.contents.data)
    if(isLoading) return <div>.....Loading</div>
    return (
        <div>
            {reviewList.state === 'hasValue' && reviewList.contents.data.map((review : Review) => 
                <ul key={review.student_name+review.year_name+review.subject_view_name}>
                    <li>{review.student_name}</li>
                    <li>{review.review}</li>
                    <li>{review.subject_view_name}</li>
                    <li>{review.year_name}</li>
                    <li>{review.reg_datetime}</li>
                </ul>
            )}
        </div>
    )
}

export default Review
