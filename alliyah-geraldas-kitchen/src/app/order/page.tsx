import type { Metadata } from "next";
import { OrderPageClient } from "./OrderPageClient";

export const metadata: Metadata = {
  title: "Order Now",
  description:
    "Order authentic Haitian food for pickup or delivery in Manchester, NH. Oxtail, lasagna, soup joumou & more. Limited plates — reserve yours now.",
};

export default function OrderPage() {
  return <OrderPageClient />;
}
