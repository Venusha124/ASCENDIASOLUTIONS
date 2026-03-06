import PageWrapper from "@/components/PageWrapper";
import PageHeader from "@/components/PageHeader";
import About from "@/components/About";
import AboutVision from "@/components/AboutVision";
import AboutValues from "@/components/AboutValues";
import Leadership from "@/components/Leadership";

export default function AboutPage() {
    return (
        <PageWrapper>
            <PageHeader
                accent="Our Story"
                title="Boutique Digital Elite Architecture"
                subtitle="ASCENDIA was founded on the principle that digital experiences should be as refined as the luxury brands they represent."
                backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            />
            <About hideHeader={true} />
            <AboutVision />
            <AboutValues />
            <Leadership />
        </PageWrapper>
    );
}
