export const SETTAB  = 'SETTAB';

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

