// import HeaderBase from "@/components/header_base/HeaderBase";
import AboutDpu from "@/components/dalian_page_components/about_dpu/AboutDpu";
import HistoryDpu from "@/components/dalian_page_components/history_dpu/HistoryDpu";
import StatsDpu from "@/components/dalian_page_components/stats_dpu/StatsDpu";
import Footer from "@/components/footer/Footer";
import HeaderPhoto from "@/components/header_photo/HeaderPhoto";

export default function Dalian() {
    return (
        <section className="w-full flex flex-col justify-center items-center">
            <HeaderPhoto headline="Мы и далянь" urlPhoto="dalian_header_photo.png" />
            <AboutDpu />
            <StatsDpu />
            <HistoryDpu />
            <Footer />
        </section>
    );
}