interface Props {
    count: number;//전체갯수
    page: number;//현재 페이지
    size:number;
    onPageChange: (page: number) => void; //page 이동 함수
    disabled?: boolean;
    siblingCount?: number; //현재 페이지 앞 뒤에 표시되는 페이지 수
    boundaryCount?: number; //시작과 끝에 표시되는 페이지 수 
}

const usePagination = ({count,page,size,onPageChange,disabled,siblingCount,boundaryCount}:Props) => {
    const range = (start:number,end:number) => {
        const length = end - start +1
        return Array.from({ length }).map((_, index) => index + start);
    }

    const startPage = 1
    const endPage = Math.ceil(count / size)

    
};
