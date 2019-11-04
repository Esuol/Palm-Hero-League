// route => page
import NewsPage from './news';
import AllyPage from './ally';
import RecordPage from './record';
import ShopPage from './shop';
import TvPage from './tv';

export const components = {
    news: NewsPage,
    ally: AllyPage,
    record: RecordPage,
    shop: ShopPage,
    tv: TvPage,
};

export const pages = [
    {page: 'news'},
    {page: 'ally'},
    {page: 'record'},
    {page: 'shop'},
    {page: 'tv'},
];





