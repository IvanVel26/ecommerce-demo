import { Mouse, Keyboard, Headphones, Monitor, Package } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const productIconByName: Record<string, LucideIcon> = {
  "Mouse inalámbrico": Mouse,
  "Teclado mecánico": Keyboard,
  "Auriculares Bluetooth": Headphones,
  "Monitor 24 pulgadas": Monitor,
  "Webcam Full HD": Package,
  "Parlante portátil": Headphones,
};

const categoryIconByName: Record<string, LucideIcon> = {
  Accesorios: Mouse,
  Audio: Headphones,
  Monitores: Monitor,
};

export function getProductIcon(name: string): LucideIcon {
  return productIconByName[name] ?? Package;
}

export function getCategoryIcon(category: string): LucideIcon {
  return categoryIconByName[category] ?? Package;
}
