import { Heart, Sparkles } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";

interface PleaseCardProps {
  title: string;
  description: string;
  onAgree?: () => void;
}

export function PleaseCard({ title, description, onAgree }: PleaseCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute right-4 top-4"
        >
          <Sparkles className="h-6 w-6 text-primary animate-pulse" />
        </motion.div>
      )}
      <CardHeader>
        <Typography.H3 className="text-primary">{title}</Typography.H3>
      </CardHeader>
      <CardContent>
        <Typography.P>{description}</Typography.P>
      </CardContent>
      <CardFooter className="flex justify-between gap-4">
        <Button
          variant="ghost"
          className="text-primary hover:text-primary"
          onClick={onAgree}
        >
          <Heart className="mr-2" />
          Да, конечно!
        </Button>
      </CardFooter>
    </Card>
  );
}