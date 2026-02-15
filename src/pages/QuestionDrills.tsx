import Header from "@/components/Header";
import Footer from "@/components/Footer";

const QuestionDrills = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
          Question Drills
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl font-sans">
          Practice with our comprehensive question bank designed to simulate
          board exam conditions.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default QuestionDrills;
