"use client";

import ReactLenis from "lenis/react";
import HeroCarouselLogo from "@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo";
import InlineImageSplitTextAbout from "@/components/sections/about/InlineImageSplitTextAbout";
import FeatureCardOne from "@/components/sections/feature/FeatureCardOne";
import FeatureCardNine from "@/components/sections/feature/FeatureCardNine";
import FeatureCardMedia from "@/components/sections/feature/FeatureCardMedia";
import TestimonialCardFive from "@/components/sections/testimonial/TestimonialCardFive";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterCard from "@/components/sections/footer/FooterCard";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Sparkles, Plane, Compass, Instagram, Facebook, Linkedin } from "lucide-react";

export default function LuxuryTravelAgencyTemplatePage() {
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
                    navItems={[
                        { name: "About", id: "about" },
                        { name: "Services", id: "services" },
                        { name: "Destinations", id: "destinations" },
                        { name: "Reviews", id: "reviews" },
                        { name: "Contact", id: "contact" },
                    ]}
                    brandName="Luxuria"
                    button={{ text: "Plan Your Trip", href: "#contact" }}
                />
                <HeroCarouselLogo
                    logoText="Luxuria"
                    description="Experience the world's most extraordinary destinations with our bespoke luxury travel experiences curated just for you."
                    buttons={[
                        { text: "Plan Your Journey", href: "#contact" },
                        { text: "Explore Destinations", href: "#destinations" },
                    ]}
                    slides={[
                        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/luxury-travel-agency/hero/hero1.webp", imageAlt: "Luxury resort" },
                        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/luxury-travel-agency/hero/hero2.webp", imageAlt: "Private yacht" },
                        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/luxury-travel-agency/hero/hero3.jpg", imageAlt: "Private yacht" },
                        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/luxury-travel-agency/hero/hero4.jpg", imageAlt: "Private yacht" },
                    ]}
                    showDimOverlay={true}
                />
                <InlineImageSplitTextAbout
                    className="pt-40"
                    heading={[
                        { type: "text", content: "We craft" },
                        { type: "image", src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/luxury-travel-agency/hero/hero3.jpg", alt: "Travel" },
                        { type: "text", content: "unforgettable journeys to the world's most" },
                        { type: "image", src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/luxury-travel-agency/hero/hero4.jpg", alt: "Destination" },
                        { type: "text", content: "exclusive destinations" },
                    ]}
                    buttons={[
                        { text: "Our Story", href: "#" },
                    ]}
                    useInvertedBackground={false}
                />
                <FeatureCardOne
                    tag="Services"
                    tagIcon={Sparkles}
                    title="Tailored Travel Experiences"
                    description="From private jets to secluded villas, we handle every detail of your journey"
                    textboxLayout="default"
                    animationType="slide-up"
                    gridVariant="uniform-all-items-equal"
                    uniformGridCustomHeightClasses="h-100 2xl:h-110"
                    useInvertedBackground={false}
                    features={[
                        {
                            title: "Private Aviation",
                            description: "Charter flights and private jet services to any destination worldwide.",
                            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/luxury-travel-agency/services/service5.webp",
                            imageAlt: "Private jet",
                        },
                        {
                            title: "Luxury Accommodations",
                            description: "Handpicked five-star hotels, villas, and exclusive resorts.",
                            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/luxury-travel-agency/services/service1.webp",
                            imageAlt: "Luxury hotel",
                        },
                        {
                            title: "Curated Experiences",
                            description: "Unique adventures and cultural immersions designed just for you.",
                            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/luxury-travel-agency/services/service4.webp",
                            imageAlt: "Experience",
                        },
                        {
                            title: "Fine Dining",
                            description: "Reservations at Michelin-starred restaurants and private chef services.",
                            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/luxury-travel-agency/services/service3.webp",
                            imageAlt: "Fine dining",
                        },
                        {
                            title: "Photography Tours",
                            description: "Professional photographers to capture your once-in-a-lifetime moments.",
                            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/luxury-travel-agency/services/service2.webp",
                            imageAlt: "Photography",
                        }
                    ]}
                />
                <FeatureCardNine
                    tag="How It Works"
                    tagIcon={Compass}
                    title="Your Journey Begins Here"
                    description="From initial consultation to your return home, we manage every detail"
                    textboxLayout="default"
                    showStepNumbers={true}
                    animationType="slide-up"
                    useInvertedBackground={false}
                    features={[
                        {
                            title: "Share Your Vision",
                            description: "Tell us about your dream destination and travel preferences.",
                            phoneOne: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/luxury-travel-agency/phone/phone5.webp", imageAlt: "Consultation" },
                            phoneTwo: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/luxury-travel-agency/phone/phone6.webp", imageAlt: "Planning" },
                        },
                        {
                            title: "Custom Itinerary",
                            description: "Receive a bespoke travel plan crafted by our expert advisors.",
                            phoneOne: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/luxury-travel-agency/phone/phone3.webp", imageAlt: "Itinerary" },
                            phoneTwo: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/luxury-travel-agency/phone/phone4.webp", imageAlt: "Details" },
                        },
                        {
                            title: "Seamless Experience",
                            description: "Enjoy your journey while we handle every detail behind the scenes.",
                            phoneOne: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/luxury-travel-agency/phone/phone1.webp", imageAlt: "Travel" },
                            phoneTwo: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/luxury-travel-agency/phone/phone2.webp", imageAlt: "Experience" },
                        },
                    ]}
                />
                <FeatureCardMedia
                    tag="Destinations"
                    tagIcon={Plane}
                    title="Extraordinary Destinations"
                    description="Explore handpicked locations that define luxury travel"
                    textboxLayout="default"
                    animationType="slide-up"
                    useInvertedBackground={false}
                    features={[
                        {
                            id: "1",
                            title: "Maldives Private Island",
                            description: "Exclusive overwater villas with direct lagoon access and private butler service.",
                            tag: "Asia",
                            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/luxury-travel-agency/destination/destination6.webp",
                            imageAlt: "Maldives",
                        },
                        {
                            id: "2",
                            title: "Swiss Alpine Retreat",
                            description: "Secluded mountain chalets with panoramic views and world-class skiing.",
                            tag: "Europe",
                            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/luxury-travel-agency/destination/destination5.webp",
                            imageAlt: "Switzerland",
                        },
                        {
                            id: "3",
                            title: "African Safari Lodge",
                            description: "Intimate wildlife encounters in the heart of the Serengeti.",
                            tag: "Africa",
                            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/luxury-travel-agency/destination/destination1.webp",
                            imageAlt: "Safari",
                        },
                        {
                            id: "4",
                            title: "Amalfi Coast Villa",
                            description: "Clifftop estates with Mediterranean views and private beach access.",
                            tag: "Europe",
                            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/luxury-travel-agency/destination/destination4.webp",
                            imageAlt: "Amalfi Coast",
                        },
                        {
                            id: "5",
                            title: "Kyoto Ryokan",
                            description: "Traditional Japanese inns with zen gardens and kaiseki dining.",
                            tag: "Asia",
                            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/luxury-travel-agency/destination/destination3.webp",
                            imageAlt: "Kyoto",
                        },
                        {
                            id: "6",
                            title: "Patagonia Eco Lodge",
                            description: "Remote wilderness retreats surrounded by glaciers and pristine nature.",
                            tag: "South America",
                            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/luxury-travel-agency/destination/destination2.webp",
                            imageAlt: "Patagonia",
                        },
                    ]}
                />
                <TestimonialCardFive
                    tag="Reviews"
                    tagIcon={Sparkles}
                    title="What Our Travelers Say"
                    description="Hear from guests who've experienced extraordinary journeys"
                    textboxLayout="default"
                    useInvertedBackground={false}
                    testimonials={[
                        {
                            id: "1",
                            name: "Victoria Sterling",
                            date: "December 2024",
                            title: "An absolutely flawless experience from start to finish",
                            quote: "Luxuria transformed our anniversary trip into something truly magical. Every detail was perfect, from the private transfers to the surprise sunset dinner on the beach. Their team anticipated our every need.",
                            tag: "Maldives",
                            avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/luxury-travel-agency/testimonial/testimonial1.webp",
                            avatarAlt: "Victoria Sterling",
                            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/luxury-travel-agency/testimonial/testimonial1.webp",
                            imageAlt: "Maldives trip",
                        },
                        {
                            id: "2",
                            name: "James & Elizabeth Moore",
                            date: "November 2024",
                            title: "Beyond our wildest expectations",
                            quote: "Our safari honeymoon was nothing short of extraordinary. The lodges were spectacular, the wildlife encounters unforgettable, and the attention to detail was impeccable throughout our journey.",
                            tag: "Tanzania",
                            avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/luxury-travel-agency/testimonial/testimonial2.webp",
                            avatarAlt: "James & Elizabeth Moore",
                            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/luxury-travel-agency/testimonial/testimonial2.webp",
                            imageAlt: "Safari experience",
                        },
                        {
                            id: "3",
                            name: "Roberta Chen",
                            date: "October 2024",
                            title: "The definition of luxury travel",
                            quote: "From the private jet charter to the exclusive vineyard tours, Luxuria curated an experience that exceeded all my expectations. Their network of contacts opened doors I never knew existed.",
                            tag: "France",
                            avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/luxury-travel-agency/testimonial/testimonial3.webp",
                            avatarAlt: "Roberta Chen",
                            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/luxury-travel-agency/testimonial/testimonial3.webp",
                            imageAlt: "France trip",
                        },
                    ]}
                />
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
                        { name: "destination", type: "text", placeholder: "Dream Destination" },
                    ]}
                    textarea={{
                        name: "message",
                        placeholder: "Tell us about your ideal travel experience...",
                        rows: 4,
                    }}
                />
                <FooterCard
                    logoText="Luxuria"
                    copyrightText="© 2025 Luxuria Travel | Luxury Journeys Worldwide"
                    socialLinks={[
                        { icon: Instagram, href: "#", ariaLabel: "Instagram" },
                        { icon: Facebook, href: "#", ariaLabel: "Facebook" },
                        { icon: Linkedin, href: "#", ariaLabel: "LinkedIn" },
                    ]}
                />
            </ReactLenis>
        </ThemeProvider>
    );
}
