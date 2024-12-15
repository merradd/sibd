import Footer from "@/components/footer/Footer";
import InstituteAbout from "@/components/institute_page/institute_about/instituteAbout";
import InstituteManagment from "@/components/institute_page/institute_managment/instituteManagment";
import InstitutePageHeader from "@/components/institute_page/institute_page_header/institute_page_header";
import InstituteReview from "@/components/institute_page/institute_review/instituteReview";

export default function Institute() {
    return (
        <section className="page w-full">
            <InstitutePageHeader />
            <InstituteAbout />
            <InstituteManagment />
            <InstituteReview />
            <Footer />
        </section>
    );
}