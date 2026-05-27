"use client";

import ReactLenis from "lenis/react";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterCard from "@/components/sections/footer/FooterCard";
import { Instagram, Facebook, Linkedin } from "lucide-react";

export default function ContactPage() {
    const navItems = [
        { name: "About", id: "about" },
        { name: "Services", id: "services" },
        { name: "Destinations", id: "destinations" },
        { name: "Reviews", id: "reviews" },
        { name: "Contact", id: "/contact" }
    ];

    const navbarButton = { text: "Plan Your Trip", href: "/contact" };

    return (
        <ThemeProvider
            defaultButtonVariant="icon-arrow"
            defaultTextAnimation="entrance-slide"
            borderRadius="rounded"
            contentWidth="medium"
            sizing="medium"
            background="none"
            cardStyle="solid"
            primaryButtonStyle="shadow"
            secondaryButtonStyle="solid"
            headingFontWeight="medium"
        >
            <ReactLenis root>
                <NavbarLayoutFloatingInline
                    navItems={navItems}
                    brandName="Luxuria"
                    button={navbarButton}
                />
                <div id="contact" data-section="contact">
                    <ContactSplitForm
                        title="Plan Your Journey"
                        description="Let us create your perfect luxury travel experience"
                        useInvertedBackground={false}
                        imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/luxury-travel-agency/contact/contact1.webp"
                        imageAlt="Luxury travel"
                        mediaPosition="right"
                        mediaAnimation="slide-up"
                        buttonText="Start Planning"
                        inputs={[
                            { name: "name", type: "text", placeholder: "Full Name", required: true },
                            { name: "email", type: "email", placeholder: "Email Address", required: true },
                            { name: "phone", type: "tel", placeholder: "Phone Number" },
                            { name: "destination", type: "text", placeholder: "Dream Destination" }
                        ]}
                        textarea={{
                            name: "message",                            placeholder: "Tell us about your ideal travel experience...",                            rows: 4
                        }}
                    />
                </div>
                <FooterCard
                    logoText="Luxuria"
                    copyrightText="© 2025 Luxuria Travel | Luxury Journeys Worldwide"
                    socialLinks={[
                        { icon: Instagram, href: "#", ariaLabel: "Instagram" },
                        { icon: Facebook, href: "#", ariaLabel: "Facebook" },
                        { icon: Linkedin, href: "#", ariaLabel: "LinkedIn" }
                    ]}
                />
            </ReactLenis>
        </ThemeProvider>
    );
}