import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";

interface Benefit {
  title: string;
  description: string;
}

interface BenefitsCarouselProps {
  benefits: Benefit[];
}

export function BenefitsCarousel({ benefits }: BenefitsCarouselProps) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-sm mx-auto"
    >
      <CarouselContent>
        {benefits.map((benefit, index) => (
          <CarouselItem key={index}>
            <Card className="border-primary/20">
              <CardContent className="flex flex-col gap-4 p-6">
                <Typography.H4 className="text-primary">
                  {benefit.title}
                </Typography.H4>
                <Typography.P>{benefit.description}</Typography.P>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-primary" />
      <CarouselNext className="text-primary" />
    </Carousel>
  );
}