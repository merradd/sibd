import HeaderNews from "@/components/news_page_components/header_news/HeaderNews";
import BannerArea from "@/components/news_page_components/banner_area/BannerArea";
import NewsFeed from "@/components/news_page_components/news_feed/NewsFeed";
import Footer from "@/components/footer/Footer";

export default function News() {
    return (
        <section className="page w-full">
            <HeaderNews />
            <BannerArea />
            <NewsFeed />
            <Footer />
        </section>
    );
}