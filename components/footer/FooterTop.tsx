import { Clock, Mail, MapPin, Phone } from "lucide-react";
import React from "react";
interface ContactItemData {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}
const data: ContactItemData[] = [
  {
    title: "Visit Us",
    subtitle: "New Orlean, USA",
    icon: (
      <MapPin className="w-6 h-6 text-gray-600 group-hover:text-primary transition-colors" />
    ),
  },
  {
    title: "Call Us",
    subtitle: "+12 958 648 597",
    icon: (
      <Phone className="w-6 h-6 text-gray-600 group-hover:text-primary transition-colors" />
    ),
  },
  {
    title: "Working Hours",
    subtitle: "Mon - Sat: 10:00 AM - 7:00 PM",
    icon: (
      <Clock className="w-6 h-6 text-gray-600 group-hover:text-primary transition-colors" />
    ),
  },
  {
    title: "Email Us",
    subtitle: "Shoptop@gmail.com",
    icon: (
      <Mail className="w-6 h-6 text-gray-600 group-hover:text-primary transition-colors" />
    ),
  },
];

const FooterTop = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-b border-t border-gray-200 ">
      {data?.map((Item, index) => (
        <div
          key={index}
          className="flex items-center gap-3 group hover:bg-gray-50 transition-colors py-2 hoverEffect"
        >
          {Item.icon}
          <div>
            <h3 className="font-semibold text-gray-900 group-hover:text-black transition-colors">
              {Item.title}
            </h3>
            <p className="text-gray-600 text-sm group-hover:text-gray-900 hoverEffect">
              {Item.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterTop;
