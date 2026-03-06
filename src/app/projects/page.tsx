import PageWrapper from "@/components/PageWrapper";
import PageHeader from "@/components/PageHeader";
import Projects from "@/components/Projects";

export default function ProjectsPage() {
    return (
        <PageWrapper>
            <PageHeader
                accent="Portfolio"
                title="Featured Refined Selected Work"
                subtitle="A masterwork of digital architecture crafted for the most discerning elite brand."
                backgroundImage="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
            />
            <Projects hideHeader={true} />
        </PageWrapper>
    );
}
