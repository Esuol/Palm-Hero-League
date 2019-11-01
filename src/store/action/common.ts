export const SETTAB  = 'SETTAB';

interface SetTabAction {
    type: typeof SETTAB;
}

export interface TabPrame {
    title: string;
    type: string;
}

export const SetTabAction = (data: TabPrame) => (
    {
        type: typeof SETTAB,
        data
    }
);

