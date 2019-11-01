export const SETTAB  = 'SETTAB';

interface SetTabAction {
    type: typeof SETTAB;
}

export interface TabPrame {
    title: string;
    key: string;
}

export const SetTabAction = (data: TabPrame) => (
    {
        type: typeof SETTAB,
        data
    }
);

