import { useQuery } from "@tanstack/react-query";
import { Award, Star } from "lucide-react";
import { apiGet } from "@/lib/api";

type SpeakerItem = {
  id: string;
  name: string;
  title: string;
  bio?: string | null;
  imageUrl?: string | null;
};

type SpeakersResponse = { items: SpeakerItem[] };

const initialsFromName = (name: string) =>
  name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("") || "BP";

export default function SpeakersGrid() {
  const { data } = useQuery({
    queryKey: ["public-speakers"],
    queryFn: () => apiGet<SpeakersResponse>("/public/speakers"),
    staleTime: 60_000,
  });

  const speakers = data?.items ?? [];

  return (
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
      {speakers.length === 0 && (
        <div className="col-span-full text-center text-muted-foreground">
          No speakers yet.
        </div>
      )}
    </div>
  );
}

