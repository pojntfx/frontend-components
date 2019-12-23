interface ISearch {
    source: any;
    query: string;
}

interface ISearchProps {
    query: string;
    source: any;
    placeholder: string;
    linkComponent: JSX.Element;
}

interface ISearchResult {
    link: string;
    imgSrc: string;
}

export {ISearch, ISearchProps, ISearchResult};

