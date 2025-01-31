import { useState } from "react";
import { Heart, Sparkles, Star } from "lucide-react";
import { motion } from "framer-motion";

import { ModeToggle } from "@/components/mode-toggle";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { PleaseCard } from "@/components/please-card";
import { CuteMessage } from "@/components/cute-message";
import { BenefitsCarousel } from "@/components/benefits-carousel";
import { AgreementDialog } from "@/components/agreement-dialog";

const benefits = [
  {
    title: "Творческая свобода 🎨",
    description: "Ты сможешь воплощать свои самые смелые идеи!",
  },
  {
    title: "Дружная команда 🤗",
    description: "Мы как одна большая семья, где каждый поддерживает друг друга!",
  },
  {
    title: "Интересные задачи 🚀",
    description: "Каждый день - это новые увлекательные вызовы и возможности!",
  },
  {
    title: "Гибкий график 🌅",
    description: "Работай так, как удобно именно тебе!",
  },
  {
    title: "Профессиональный рост 📈",
    description: "Развивайся и расти вместе с нами!",
  },
];

export function Home() {
  const [showExtra, setShowExtra] = useState(false);

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <header className="flex items-center justify-between mb-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <Sparkles className="h-6 w-6 text-primary" />
          <Typography.Large className="text-primary">
            Маша, пожалуйста!
          </Typography.Large>
        </motion.div>
        <ModeToggle />
      </header>

      <main className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Typography.H1 className="text-primary mb-4">
            Маша, ты нужна нашему проекту! 
            <Star className="inline-block ml-2 h-8 w-8" />
          </Typography.H1>
          <Typography.Lead>
            Мы создаём нечто особенное, и только ты можешь сделать это проект по-настоящему волшебным!
          </Typography.Lead>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <PleaseCard
            title="Ты - именно тот человек, который нам нужен!"
            description="Твой опыт, энтузиазм и креативность сделают наш проект невероятным!"
            onAgree={() => setShowExtra(true)}
          />
          <PleaseCard
            title="Вместе мы создадим что-то потрясающее!"
            description="У нас столько крутых идей, и мы очень хотим реализовать их вместе с тобой!"
            onAgree={() => setShowExtra(true)}
          />
        </div>

        {showExtra && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-12"
          >
            <CuteMessage
              message="Посмотри, сколько всего интересного тебя ждёт!"
              className="text-center mb-8"
            />

            <BenefitsCarousel benefits={benefits} />

            <div className="text-center">
              <AgreementDialog
                trigger={
                  <Button size="lg" className="animate-pulse">
                    <Heart className="mr-2 h-5 w-5" />
                    Хочу в команду!
                  </Button>
                }
              />
            </div>
          </motion.div>
        )}
      </main>

      <footer className="mt-16 text-center">
        <Typography.Small className="text-primary">
          Сделано с любовью и надеждой 💖
        </Typography.Small>
      </footer>
    </div>
  );
}