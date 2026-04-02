import type { Metadata } from "next";
import { MenuPageClient } from "./MenuPageClient";

export const metadata: Metadata = {
  title: "Weekend Menu",
  description:
    "This weekend's authentic Haitian food menu — oxtail, lasagna, soup joumou, fried plantain & more. Limited plates available. Pre-order now in Manchester, NH.",
};

export default function MenuPage() {
  return <MenuPageClient />;
}
