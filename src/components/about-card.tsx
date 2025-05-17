import { Card, CardContent } from "@/components/ui/card";

interface AboutCardProps {
  logo: string;
  title: string;
  subtitle: string;
  duration: string;
}

export const AboutCard = ({
  logo,
  title,
  subtitle,
  duration,
}: AboutCardProps) => {
  return (
    <Card className="p-4 border border-red-200 rounded-lg transition-all duration-300 ease-in-out mb-4 hover:shadow-[0_5px_10px_rgba(240,128,128,0.15)] hover:border-red-300">
      <CardContent className="flex items-center p-2">
        <div className="flex-shrink-0 self-center mr-3">
          <img
            src={logo}
            alt={`${subtitle}-logo`}
            className="w-12 h-12 border rounded-full"
          />
        </div>
        <div className="flex-grow">
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm font-light text-gray-500">{subtitle}</p>
          <span className="text-sm font-light text-gray-500 block sm:hidden mt-1">
            {duration}
          </span>
        </div>
        <div className="hidden sm:block">
          <span className="text-sm font-light text-gray-500">{duration}</span>
        </div>
      </CardContent>
    </Card>
  );
};
