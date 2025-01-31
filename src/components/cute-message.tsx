import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";
import { Typography } from "@/components/ui/typography";

interface CuteMessageProps {
  message: string;
  className?: string;
}

export function CuteMessage({ message, className }: CuteMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={className}
    >
      <div className="flex items-center gap-2 text-primary">
        <HeartHandshake className="h-6 w-6" />
        <Typography.Large>{message}</Typography.Large>
      </div>
    </motion.div>
  );
}