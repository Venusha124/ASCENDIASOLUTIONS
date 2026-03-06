import PageWrapper from "@/components/PageWrapper";
import PageHeader from "@/components/PageHeader";
import Services from "@/components/Services";
import ServiceHighlights from "@/components/ServiceHighlights";
import ServiceAudit from "@/components/ServiceAudit";

export default function ServicesPage() {
    return (
        <PageWrapper>
            <PageHeader
                accent="Expertise & ROI"
                title="Crafting Digital Artifacts that Drive Success"
                subtitle="Transforming visionary ideas into high-performance digital experiences that transcend boundaries and deliver measurable impact for elite brands."
                backgroundImage="https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2070&auto=format&fit=crop"
            />
            <Services />
            <ServiceHighlights />
            <ServiceAudit />
        </PageWrapper>
    );
}
