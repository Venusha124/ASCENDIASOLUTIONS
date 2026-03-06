import PageWrapper from "@/components/PageWrapper";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";

export default function ContactPage() {
    return (
        <PageWrapper>
            <PageHeader
                accent="Inquiry"
                title="Ready to Ascend to Digital Elite"
                subtitle="Whether you're launching a new brand or elevating an existing one, our studio is ready to deliver digital perfection."
                backgroundImage="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop"
            />
            <Contact />
        </PageWrapper>
    );
}
