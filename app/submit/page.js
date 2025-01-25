export default async function Page({searchParams}) {
    const {search} = await searchParams;
    console.log(search);
    function replaceSpacesWithUnderscores(str) {
        return str.replace(/ /g, '_');
    }
    const FetchWikipediaData = async () => {
        const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${replaceSpacesWithUnderscores(search)}`;
        console.log("Fetching URL:", url);
        const response = await fetch(url, {
            'cache': 'no-store'
            
        });
        return await response.json();
    }
    const data = await FetchWikipediaData();
    const {extract} = data;
    const moreInfoSite = data.content_urls.desktop.page;
    return (
        <> 
            <h1> {search}</h1>
            <p> {extract} </p>
            <a href={moreInfoSite} target="_blank"> More Info</a>
        </>
    );
}