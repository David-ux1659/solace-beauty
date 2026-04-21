"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import menuData from "@/content/menu/current-week.json";

type OrderItem = { id: string; name: string; price: number; qty: number; image?: string };
type FulfillmentType = "pickup" | "delivery";

const allItems = [
  ...menuData.combos.map((i) => ({ ...i, category: "Combos" })),
  ...menuData.mains.map((i) => ({ ...i, category: "Mains" })),
  ...menuData.sides.map((i) => ({ ...i, category: "Sides" })),
  ...menuData.drinks.map((i) => ({ ...i, category: "Drinks", image: "" })),
];

const timeSlots = [
  "Saturday 2:00 PM", "Saturday 3:00 PM", "Saturday 4:00 PM", "Saturday 5:00 PM", "Saturday 6:00 PM",
  "Sunday 2:00 PM", "Sunday 3:00 PM", "Sunday 4:00 PM", "Sunday 5:00 PM", "Sunday 6:00 PM",
];

export function OrderPageClient() {
  const [step, setStep] = useState(1);
  const [cart, setCart] = useState<OrderItem[]>([]);
  const [fulfillment, setFulfillment] = useState<FulfillmentType>("pickup");
  const [timeSlot, setTimeSlot] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState({ name: "", phone: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const deliveryFee = fulfillment === "delivery" ? 5 : 0;

  function updateQty(id: string, name: string, price: number, image: string, delta: number) {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === id);
      if (existing) {
        const newQty = existing.qty + delta;
        if (newQty <= 0) return prev.filter((i) => i.id !== id);
        return prev.map((i) => (i.id === id ? { ...i, qty: newQty } : i));
      }
      if (delta > 0) return [...prev, { id, name, price, qty: 1, image }];
      return prev;
    });
  }

  function getQty(id: string) {
    return cart.find((i) => i.id === id)?.qty || 0;
  }

  const canProceedStep1 = cart.length > 0;
  const canProceedStep2 = fulfillment === "pickup" ? !!timeSlot : !!address && !!timeSlot;
  const canProceedStep3 = contact.name && contact.phone && contact.email;

  function handleSubmit() {
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="py-20 min-h-[60vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto text-center bg-white rounded-2xl shadow-lg p-10"
        >
          <div className="w-20 h-20 mx-auto mb-6 bg-green/10 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-heading text-3xl font-bold text-navy mb-3">Order Confirmed!</h2>
          <p className="text-gray-500 mb-2">Thank you, {contact.name}. Your order has been received.</p>
          <p className="text-gray-500 mb-6">We&apos;ll text you at {contact.phone} with pickup details.</p>
          <div className="bg-cream rounded-xl p-4 text-left text-sm space-y-1 mb-6">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>{item.qty}x {item.name}</span>
                <span className="font-semibold">${(item.price * item.qty).toFixed(2)}</span>
              </div>
            ))}
            {deliveryFee > 0 && (
              <div className="flex justify-between pt-2 border-t border-gray-200">
                <span>Delivery fee</span>
                <span className="font-semibold">${deliveryFee.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between pt-2 border-t border-gray-200 font-bold text-navy">
              <span>Total</span>
              <span>${(total + deliveryFee).toFixed(2)}</span>
            </div>
          </div>
          <a href="/" className="inline-flex bg-orange text-white font-bold px-8 py-3 rounded-xl cursor-pointer">
            Back to Home
          </a>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-12 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-8 text-center">
          Reserve Your Plate
        </h1>

        {/* Progress Bar */}
        <div className="flex items-center justify-center gap-2 mb-12 max-w-md mx-auto">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center gap-2 flex-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                step >= s ? "bg-orange text-white" : "bg-gray-200 text-gray-400"
              }`}>
                {s}
              </div>
              {s < 4 && (
                <div className={`flex-1 h-1 rounded-full transition-colors ${
                  step > s ? "bg-orange" : "bg-gray-200"
                }`} />
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form Area */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {/* Step 1: Select Items */}
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h2 className="font-heading text-2xl font-bold text-navy mb-6">Choose Your Meals</h2>
                  {["Combos", "Mains", "Sides", "Drinks"].map((cat) => {
                    const items = allItems.filter((i) => i.category === cat && !i.soldOut);
                    if (!items.length) return null;
                    return (
                      <div key={cat} className="mb-8">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-orange mb-4">{cat}</h3>
                        <div className="space-y-3">
                          {items.map((item) => (
                            <div key={item.id} className="bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm">
                              {"image" in item && item.image && (
                                <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0">
                                  <Image src={item.image as string} alt={item.name} fill className="object-cover" sizes="64px" />
                                </div>
                              )}
                              <div className="flex-1 min-w-0">
                                <p className="font-semibold text-navy truncate">{item.name}</p>
                                <p className="text-orange font-heading font-bold">
                                  {item.price === 0 ? "FREE" : `$${item.price % 1 === 0 ? item.price : item.price.toFixed(2)}`}
                                </p>
                              </div>
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => updateQty(item.id, item.name, item.price, ("image" in item ? item.image : "") as string, -1)}
                                  className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-lg font-bold text-gray-500 transition-colors cursor-pointer"
                                  aria-label={`Remove one ${item.name}`}
                                >
                                  &minus;
                                </button>
                                <span className="w-8 text-center font-bold text-navy">{getQty(item.id)}</span>
                                <button
                                  onClick={() => updateQty(item.id, item.name, item.price, ("image" in item ? item.image : "") as string, 1)}
                                  className="w-9 h-9 rounded-full bg-orange/10 hover:bg-orange/20 flex items-center justify-center text-lg font-bold text-orange transition-colors cursor-pointer"
                                  aria-label={`Add one ${item.name}`}
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                  <button
                    onClick={() => setStep(2)}
                    disabled={!canProceedStep1}
                    className="w-full bg-orange hover:bg-orange-dark disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-colors cursor-pointer mt-4"
                  >
                    Continue to Fulfillment
                  </button>
                </motion.div>
              )}

              {/* Step 2: Fulfillment */}
              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h2 className="font-heading text-2xl font-bold text-navy mb-6">Pickup or Delivery?</h2>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {(["pickup", "delivery"] as FulfillmentType[]).map((type) => (
                      <button
                        key={type}
                        onClick={() => setFulfillment(type)}
                        className={`p-6 rounded-xl border-2 text-center transition-all cursor-pointer ${
                          fulfillment === type
                            ? "border-orange bg-orange/5"
                            : "border-gray-200 hover:border-orange/50"
                        }`}
                      >
                        <p className="font-heading text-xl font-bold text-navy capitalize mb-1">{type}</p>
                        <p className="text-sm text-gray-500">
                          {type === "pickup" ? "560 Candia Rd, Manchester" : "Within 25 miles ($5 fee)"}
                        </p>
                      </button>
                    ))}
                  </div>

                  {fulfillment === "delivery" && (
                    <div className="mb-6">
                      <label htmlFor="address" className="block text-sm font-semibold text-navy mb-2">Delivery Address</label>
                      <input
                        id="address"
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Enter your full address"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20"
                        required
                      />
                      <p className="text-xs text-gray-400 mt-1">$25 minimum order for delivery</p>
                    </div>
                  )}

                  <div className="mb-8">
                    <label htmlFor="timeslot" className="block text-sm font-semibold text-navy mb-2">Select Time Slot</label>
                    <select
                      id="timeslot"
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20 bg-white"
                      required
                    >
                      <option value="">Choose a time...</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex gap-4">
                    <button onClick={() => setStep(1)} className="flex-1 py-4 rounded-xl border-2 border-gray-200 font-semibold text-gray-500 hover:border-orange hover:text-orange transition-colors cursor-pointer">
                      Back
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      disabled={!canProceedStep2}
                      className="flex-1 bg-orange hover:bg-orange-dark disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-colors cursor-pointer"
                    >
                      Continue
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Contact Info */}
              {step === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h2 className="font-heading text-2xl font-bold text-navy mb-6">Your Info</h2>
                  <div className="space-y-4 mb-8">
                    {[
                      { id: "name", label: "Full Name", type: "text", value: contact.name, placeholder: "Your name" },
                      { id: "phone", label: "Phone Number", type: "tel", value: contact.phone, placeholder: "(603) 555-0123" },
                      { id: "email", label: "Email", type: "email", value: contact.email, placeholder: "you@email.com" },
                    ].map((field) => (
                      <div key={field.id}>
                        <label htmlFor={field.id} className="block text-sm font-semibold text-navy mb-2">{field.label}</label>
                        <input
                          id={field.id}
                          type={field.type}
                          value={field.value}
                          onChange={(e) => setContact((c) => ({ ...c, [field.id]: e.target.value }))}
                          placeholder={field.placeholder}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20"
                          required
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <button onClick={() => setStep(2)} className="flex-1 py-4 rounded-xl border-2 border-gray-200 font-semibold text-gray-500 hover:border-orange hover:text-orange transition-colors cursor-pointer">
                      Back
                    </button>
                    <button
                      onClick={() => setStep(4)}
                      disabled={!canProceedStep3}
                      className="flex-1 bg-orange hover:bg-orange-dark disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-colors cursor-pointer"
                    >
                      Review Order
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Review */}
              {step === 4 && (
                <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h2 className="font-heading text-2xl font-bold text-navy mb-6">Review Your Order</h2>
                  <div className="bg-white rounded-xl p-6 shadow-sm space-y-4 mb-8">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Contact</p>
                      <p className="text-navy font-semibold">{contact.name}</p>
                      <p className="text-gray-500 text-sm">{contact.phone} &middot; {contact.email}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                        {fulfillment === "pickup" ? "Pickup" : "Delivery"}
                      </p>
                      <p className="text-navy font-semibold">
                        {fulfillment === "pickup" ? "560 Candia Rd, Manchester, NH" : address}
                      </p>
                      <p className="text-gray-500 text-sm">{timeSlot}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button onClick={() => setStep(3)} className="flex-1 py-4 rounded-xl border-2 border-gray-200 font-semibold text-gray-500 hover:border-orange hover:text-orange transition-colors cursor-pointer">
                      Back
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="flex-1 bg-orange hover:bg-orange-dark text-white font-bold py-4 rounded-xl transition-colors cursor-pointer"
                    >
                      Submit Order
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Order Sidebar */}
          <div className="hidden lg:block">
            <div className="sticky top-24 bg-white rounded-2xl shadow-md p-6">
              <h3 className="font-heading text-lg font-bold text-navy mb-4">Your Order</h3>
              {cart.length === 0 ? (
                <p className="text-gray-400 text-sm">No items yet — add some plates!</p>
              ) : (
                <div className="space-y-3 mb-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-gray-600">{item.qty}x {item.name}</span>
                      <span className="font-semibold text-navy">${(item.price * item.qty).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              )}
              {deliveryFee > 0 && (
                <div className="flex justify-between text-sm border-t border-gray-100 pt-3 mb-3">
                  <span className="text-gray-500">Delivery fee</span>
                  <span className="font-semibold text-navy">${deliveryFee.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between border-t border-gray-100 pt-3">
                <span className="font-bold text-navy">Total</span>
                <span className="font-heading text-2xl font-bold text-orange">
                  ${(total + deliveryFee).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
