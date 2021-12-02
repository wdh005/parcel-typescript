import { AxiosResponse } from 'axios';
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import { apiClient } from '../../utils/apiHelper';

export interface Review {
    student_name: string;
    review: string;
    year_name: string;
    subject_view_name: string;
    reg_datetime: string;
}

export interface ReviewQuery {
    size: number;
    offset: number;
    subject: string;
    year: string;
}

export const reviewQuery = atom<ReviewQuery>({
    key: 'reviewQuery',
    default: { size: 1, offset: 5, subject: '', year: '' },
});

export const reviewData = selector<AxiosResponse>({
    key: 'review',
    get: async ({ get }) => {
        try {
            const { size, offset, subject, year } = get(reviewQuery);
            if (subject && year) {
                const res = await apiClient.get<Review[]>(
                    `?SIZE=${size}&OFFSET=${offset}&SUBJECT=${subject}&YEAR=${year}`,
                );
                return res.data;
            }
            if (subject) {
                const res = await apiClient.get<Review[]>(
                    `?SIZE=${size}&OFFSET=${offset}&SUBJECT=${subject}`,
                );
                return res.data;
            }
            if (year) {
                const res = await apiClient.get<Review[]>(
                    `?SIZE=${size}&OFFSET=${offset}&YEAR=${year}`,
                );
                return res.data;
            }
            const res = await apiClient.get(`?SIZE=${size}&OFFSET=${offset}`);
            return res.data;
        } catch (error) {
            throw error;
        }
    },
});

export const reviewDataTotal = selector<number>({
    key: 'reviewDataTotal',
    get: ({ get }) => {
        const reviewLists = get(reviewData);
        const reviewDataTotalNum = reviewLists.data.length;

        return reviewDataTotalNum;
    },
});
