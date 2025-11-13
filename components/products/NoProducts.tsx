import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "motion/react";
import { Loader2 } from "lucide-react";

const NoProducts = ({
  selectedTab,
  className,
}: {
  selectedTab?: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-10 min-h-80 text-center bg-gray-100 rounded-lg mt-10 w-full space-y-2",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 5 }}
      >
        <h2 className="font-bold text-2xl text-gray-800">
          No Product Available
        </h2>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 5 }}
        className="text-gray-600"
      >
        We are sorry, but there are no products matching on
        <span className="text-base font-semibold text-darkColor px-1">
          {selectedTab}
        </span>
        criteria at the moment.
      </motion.p>
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="flex items-center space-x-2 text-shop_dark_green"
      >
        <Loader2 className="w-5 h-5 animate-spin" />
        <span>we are restocking shortly</span>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-sm text-gray-500"
      >
        please check back later or explore other categories.
      </motion.p>
    </div>
  );
};

export default NoProducts;
