export const SETTAB  = 'SETTAB';
export const PULLREFRESH  = 'PULLREFRESH';

export interface TabPrame {
    title: string;
    key: string;
}

export const SetTabAction = (data: TabPrame) => (
    {
        type: SETTAB,
        data
    }
);

export const PullRefresh = (data: boolean) => (
    {
        type: PULLREFRESH,
        data
    }
);

