import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ReferralForm } from "./ReferralForm";

export const metadata: Metadata = {
  title: "Referral Program",
  description: "Share the flavor and earn rewards. Refer friends to Alliyah & Geralda's Kitchen and both get rewarded.",
};

const steps = [
  { num: "01", title: "Share Your Link", desc: "Sign up and get a unique referral link to share with friends and family." },
  { num: "02", title: "Friend Orders", desc: "When your friend places their first order using your link, they get $5 off." },
  { num: "03", title: "You Get Rewarded", desc: "You earn a $5 credit toward your next order. Win-win!" },
];

export default function ReferralsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-navy text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-4 px-4 py-1.5 rounded-full bg-white/10 text-orange-light">
            Referral Program
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-6">
            Share the Flavor,<br />
            <span className="italic text-orange-light">Earn Rewards</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-lg mx-auto">
            Love our food? Share it with friends and you both save on your next order.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="How It Works" title="3 Simple Steps" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="text-center relative bg-cream rounded-2xl p-8">
                <span className="text-5xl font-heading font-bold text-cream-dark absolute top-4 right-6">{s.num}</span>
                <div className="w-14 h-14 bg-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="font-heading text-2xl font-bold text-orange">{s.num}</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-navy mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signup Form */}
      <section className="py-20 bg-cream">
        <div className="max-w-md mx-auto px-4">
          <SectionHeader label="Join Now" title="Get Your Referral Link" />
          <ReferralForm />
        </div>
      </section>

      {/* Terms */}
      <section className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h3 className="font-heading text-lg font-bold text-navy mb-3">Terms & Conditions</h3>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>Referral credit is applied after the referred friend completes their first order.</li>
            <li>Credits cannot be combined with other promotions.</li>
            <li>$5 credit is valid for 90 days from issue date.</li>
            <li>Alliyah &amp; Geralda&apos;s Kitchen reserves the right to modify the program at any time.</li>
          </ul>
        </div>
      </section>
    </>
  );
}
