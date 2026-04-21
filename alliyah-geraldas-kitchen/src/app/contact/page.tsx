import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Alliyah & Geralda's Kitchen. Located at 560 Candia Rd, Manchester, NH. Open weekends 2-7 PM.",
};

const info = [
  {
    label: "Address",
    value: "560 Candia Rd\nManchester, NH",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />,
  },
  {
    label: "Weekend Hours",
    value: "Saturday & Sunday\n2:00 PM – 7:00 PM",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />,
  },
  {
    label: "Phone",
    value: "(603) 555-0123",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />,
  },
  {
    label: "Email",
    value: "info@alliyahandgeraldaskitchen.com",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Get in Touch"
            title="We'd Love to Hear from You"
            subtitle="Questions about our menu, catering, or just want to say hello? We're here."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info Cards */}
            <div className="space-y-4">
              {info.map((item) => (
                <div key={item.label} className="bg-cream rounded-xl p-5 flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange/10 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      {item.icon}
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">{item.label}</p>
                    <p className="text-navy font-medium whitespace-pre-line text-sm">{item.value}</p>
                  </div>
                </div>
              ))}

              <div className="bg-cream rounded-xl p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Delivery</p>
                <p className="text-navy font-medium text-sm">Available within 25 miles &middot; $25 minimum order</p>
              </div>

              {/* Map Embed Placeholder */}
              <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <svg className="w-10 h-10 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <p className="text-sm">Google Map Embed</p>
                  <p className="text-xs">560 Candia Rd, Manchester, NH</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
