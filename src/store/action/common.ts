export const SETTAB  = 'SETTAB';
export const PULLREFRESH  = 'PULLREFRESH';
export const SELECTAREA  = 'SELECTAREA';

export interface TabPrame {
    title: string;
    key: string;
}
// 全局tab
export const SetTabAction = (data: TabPrame) => (
    {
        type: SETTAB,
        data
    }
);
// 全局下拉刷新状态
export const PullRefresh = (data: boolean) => (
    {
        type: PULLREFRESH,
        data
    }
);
// 筛选我的大区
export const SelectArea = (data: boolean) => (
    {
        type: SELECTAREA,
        data
    }
);


