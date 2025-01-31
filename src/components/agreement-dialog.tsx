import Confetti from "react-confetti";
import { useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface AgreementDialogProps {
  trigger: React.ReactNode;
}

export function AgreementDialog({ trigger }: AgreementDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleAgree = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
      setIsOpen(false);
    }, 3000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-primary">
            Маша, ты самая лучшая! ❤️
          </DialogTitle>
          <DialogDescription>
            Твое участие сделает этот проект особенным. Мы будем создавать что-то
            невероятное вместе!
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <Button
            variant="default"
            className="w-full sm:w-auto"
            onClick={handleAgree}
          >
            <Heart className="mr-2" />
            Согласна!
          </Button>
        </DialogFooter>
      </DialogContent>
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={200}
          colors={["#ff69b4", "#ffb6c1", "#ffc0cb"]}
        />
      )}
    </Dialog>
  );
}