import { useQuery } from "@tanstack/react-query";
import { Award, Star } from "lucide-react";
import { apiGet } from "@/lib/api";

type SpeakerItem = {
  id: string;
  name: string;
  title: string;
  profession?: string | null;
  bio?: string | null;
  imageUrl?: string | null;
};

type SpeakersResponse = { items: SpeakerItem[] };

type Props = {
  profession?: string;
  description?: string;
  sectionClassName?: string;
};

const initialsFromName = (name: string) =>
  name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("") || "BP";

export default function SpeakersGrid({ profession, description, sectionClassName }: Props) {
  const { data } = useQuery({
    queryKey: ["public-speakers"],
    queryFn: () => apiGet<SpeakersResponse>("/public/speakers"),
    staleTime: 60_000,
  });

  const allSpeakers = data?.items ?? [];
  const speakers = profession
    ? allSpeakers.filter(
        (s) => s.profession?.toLowerCase() === profession.toLowerCase()
      )
    : allSpeakers;

  if (speakers.length === 0) return null;

  const grid = (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
      {speakers.map((speaker, index) => (
        <div
          key={speaker.id}
          className={`animate-fade-up delay-${(index + 3) * 100} bg-card rounded-sm p-8 shadow-soft hover-lift border border-border/50 text-center`}
        >
          <div className="relative inline-block mb-4">
            {speaker.imageUrl ? (
              <img
                src={speaker.imageUrl}
                alt={speaker.name}
                className="w-32 h-32 rounded-full mx-auto border-4 border-accent/20 object-cover"
              />
            ) : (
              <div className="w-32 h-32 rounded-full mx-auto border-4 border-accent/20 bg-accent/10 flex items-center justify-center">
                <span className="text-3xl font-bold text-accent">
                  {initialsFromName(speaker.name)}
                </span>
              </div>
            )}
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-accent rounded-full flex items-center justify-center">
              <Star className="w-5 h-5 text-white fill-white" />
            </div>
          </div>
          <h3 className="font-display text-xl text-foreground mb-2">
            {speaker.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-3">{speaker.title}</p>
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-3 py-1">
            <Award className="w-3 h-3 text-secondary" />
            <span className="text-xs font-medium text-secondary">
              {speaker.bio?.trim() ? speaker.bio : "Instructor"}
            </span>
          </div>
        </div>
      ))}
    </div>
  );

  if (description) {
    return (
      <section className={sectionClassName ?? "py-28 lg:py-36 bg-background"}>
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="animate-fade-up text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Expert Instructors
            </p>
            <h2 className="animate-fade-up delay-100 font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
              Learn from the <em className="not-italic text-accent">best!</em>
            </h2>
            <p className="animate-fade-up delay-200 text-muted-foreground text-lg leading-relaxed font-sans">
              {description}
            </p>
          </div>
          {grid}
        </div>
      </section>
    );
  }

  return grid;
}

