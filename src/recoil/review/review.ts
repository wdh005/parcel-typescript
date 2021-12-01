import { AxiosResponseHeaders } from 'axios';
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
    subject?: string;
    year?: string;
}

export const reviewQuery = atom<ReviewQuery>({
    key: 'reviewQuery',
    default: { size: 1, offset: 5 },
});

export const reviewData = selector({
    key: 'review',
    get: async ({ get }) => {
        const { size, offset, subject, year } = get(reviewQuery);
        if (subject && year) {
            const res = await apiClient.get(
                `?SIZE=${size}&OFFSET=${offset}&SUBJECT=${subject}&YEAR=${year}`,
            );
            return res.data;
        }
        if (subject) {
            const res = await apiClient.get(`?SIZE=${size}&OFFSET=${offset}&SUBJECT=${subject}`);
            return res.data;
        }
        if (year) {
            const res = await apiClient.get(`?SIZE=${size}&OFFSET=${offset}&YEAR=${year}`);
            return res.data;
        }
        const res = await apiClient.get(`?SIZE=${size}&OFFSET=${offset}`);
        return res.data;
    },
});
