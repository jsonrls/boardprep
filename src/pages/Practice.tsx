import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BadgeDollarSign,
  BookOpenCheck,
  Building2,
  Check,
  GraduationCap,
  Sparkles,
  User,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PRODUCT_LINKS } from "@/config/brand";

const practiceFormSchema = z
  .object({
    name: z.string().trim().min(2, "Please enter your name."),
    email: z
      .string()
      .trim()
      .email("Please enter a valid email address."),
    school: z.string().trim().min(2, "Please enter your school."),
    enrollmentStatus: z.enum(["enrolled", "not-enrolled"], {
      required_error: "Please select your current enrollment status.",
    }),
    reviewCenter: z.string().trim().optional(),
    reviewBudget: z.string().optional(),
  })
  .superRefine((data, context) => {
    if (data.enrollmentStatus === "enrolled" && !data.reviewCenter) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please enter your current review center.",
        path: ["reviewCenter"],
      });
    }

    if (data.enrollmentStatus === "not-enrolled" && !data.reviewBudget) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please select your review-center budget.",
        path: ["reviewBudget"],
      });
    }
  });

type PracticeFormValues = z.infer<typeof practiceFormSchema>;

type PracticeSubmissionResponse = {
  ok?: boolean;
  invitationEmailSent?: boolean;
  error?: string;
};

const budgetOptions = [
  { value: "below-3000", label: "Below ₱3,000" },
  { value: "3000-5000", label: "₱3,000 – ₱5,000" },
  { value: "5001-8000", label: "₱5,001 – ₱8,000" },
  { value: "above-8000", label: "Above ₱8,000" },
] as const;

const Practice = () => {
  const [isComplete, setIsComplete] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");

  const form = useForm<PracticeFormValues>({
    resolver: zodResolver(practiceFormSchema),
    defaultValues: {
      name: "",
      email: "",
      school: "",
      reviewCenter: "",
      reviewBudget: "",
    },
    mode: "onTouched",
  });

  const enrollmentStatus = form.watch("enrollmentStatus");

  const handleEnrollmentChange = (
    value: PracticeFormValues["enrollmentStatus"],
  ) => {
    form.setValue("enrollmentStatus", value, {
      shouldDirty: true,
      shouldValidate: true,
    });

    if (value === "enrolled") {
      form.setValue("reviewBudget", "");
      form.clearErrors("reviewBudget");
    } else {
      form.setValue("reviewCenter", "");
      form.clearErrors("reviewCenter");
    }
  };

  const onSubmit = async (values: PracticeFormValues) => {
    setIsSubmitting(true);
    setSubmissionError("");

    try {
      window.localStorage.setItem(
        "boardprep-practice-profile",
        JSON.stringify(values),
      );
    } catch {
      // The practice flow can continue when browser storage is unavailable.
    }

    try {
      const googleScriptUrl =
        import.meta.env.VITE_PRACTICE_GOOGLE_SCRIPT_URL?.trim();

      if (!googleScriptUrl) {
        if (import.meta.env.PROD) {
          throw new Error("The response endpoint is not configured.");
        }

        console.warn(
          "VITE_PRACTICE_GOOGLE_SCRIPT_URL is not configured. The response was saved locally only.",
        );
      } else {
        const submissionResponse = await fetch(googleScriptUrl, {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=UTF-8",
          },
          body: JSON.stringify({
            submittedAt: new Date().toISOString(),
            name: values.name,
            email: values.email,
            school: values.school,
            enrollmentStatus: values.enrollmentStatus,
            reviewCenter:
              values.enrollmentStatus === "enrolled"
                ? values.reviewCenter || ""
                : "",
            reviewBudget:
              values.enrollmentStatus === "not-enrolled"
                ? values.reviewBudget || ""
                : "",
            source: "BoardPrep Practice Page",
          }),
        });

        if (!submissionResponse.ok) {
          throw new Error(
            `The response endpoint returned HTTP ${submissionResponse.status}.`,
          );
        }

        const result =
          (await submissionResponse.json()) as PracticeSubmissionResponse;

        if (!result.ok || !result.invitationEmailSent) {
          throw new Error(
            result.error || "The invitation email could not be sent.",
          );
        }
      }

      setIsComplete(true);
    } catch (error) {
      console.error("Unable to save the practice response:", error);
      setSubmissionError(
        "We couldn't save your response or send your invitation email. Please try again. If the problem continues, contact acewithboardprep@gmail.com.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#f7f8fb]">
      <SEO
        title="Start Practice Drills"
        description="Tell BoardPrep a little about your review setup before starting your practice drills."
        url="/practice"
        noindex
      />
      <Header />

      <main className="relative flex-1 overflow-hidden pb-10 pt-24 sm:pt-24 lg:pb-12 lg:pt-24">
        <div
          className="pointer-events-none absolute -right-28 top-20 h-96 w-96 rounded-full bg-accent/25 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-40 bottom-12 h-96 w-96 rounded-full bg-secondary/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="container relative mx-auto px-5 sm:px-6 lg:px-12">
          <div className="mx-auto mb-4 max-w-3xl text-center">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-secondary/15 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-secondary shadow-sm">
              <Sparkles className="h-4 w-4 text-[#f7a928]" aria-hidden="true" />
              Quick learner profile
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl">
              Let&apos;s set up your{" "}
              <span className="relative whitespace-nowrap text-secondary">
                practice
                <span
                  className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-accent/60 -z-10"
                  aria-hidden="true"
                />
              </span>
            </h1>
            <p className="mx-auto mt-1 max-w-2xl text-base leading-6 text-muted-foreground sm:text-lg">
              Share a few details before you begin. It only takes a minute.
            </p>
          </div>

          <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-card shadow-elegant">
            <div className="grid lg:grid-cols-[0.95fr_1.65fr]">
              <aside className="relative overflow-hidden bg-secondary p-6 text-white sm:p-7">
                <div
                  className="absolute -right-24 -top-24 h-64 w-64 rounded-full border-[48px] border-white/[0.05]"
                  aria-hidden="true"
                />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-[#173a6a]">
                    <BookOpenCheck className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/60">
                    Before your first drill
                  </p>
                  <h2 className="mt-2 max-w-sm font-display text-xl font-bold leading-tight">
                    A little context goes a long way.
                  </h2>
                  <p className="mt-3 max-w-sm text-xs leading-5 text-white/65">
                    Your answers help prepare a smoother practice experience
                    based on where you are in your review journey.
                  </p>

                  <ul className="mt-5 space-y-2">
                    {[
                      { icon: User, label: "Name & email", number: "01" },
                      { icon: GraduationCap, label: "Your school", number: "02" },
                      {
                        icon: Building2,
                        label: "Review-center status",
                        number: "03",
                      },
                      {
                        icon: BadgeDollarSign,
                        label: "Review budget",
                        number: "04",
                      },
                    ].map((item) => (
                      <li
                        key={item.number}
                        className="flex items-center gap-3 text-sm text-white/75"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] text-accent">
                          <item.icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span>{item.label}</span>
                        <span className="ml-auto text-xs text-white/35">
                          {item.number}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-4 border-t border-white/15 pt-4 text-xs text-white/45">
                    Your answers are saved only in this browser.
                  </p>
                </div>
              </aside>

              <section className="p-7 sm:p-8 lg:p-9">
                <AnimatePresence mode="wait">
                  {isComplete ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex min-h-[360px] flex-col items-center justify-center text-center"
                    >
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent text-[#173a6a] shadow-glow">
                        <Check className="h-8 w-8" strokeWidth={2.5} aria-hidden="true" />
                      </div>
                      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                        Profile saved
                      </p>
                      <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
                        You&apos;re ready to practice.
                      </h2>
                      <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
                        Your learner profile is set. Head to BoardPrep Drills and
                        start building your board-exam confidence.
                      </p>
                      <Button variant="hero" size="lg" className="mt-6" asChild>
                        <a
                          href={PRODUCT_LINKS.drills}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Continue to Practice Drills
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </a>
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                        Step 1 of 1
                      </p>
                      <h2 className="mt-2 font-display text-3xl font-bold text-foreground">
                        Tell us about yourself
                      </h2>
                      <p className="mt-2 text-sm text-muted-foreground">
                        All fields are required.
                      </p>

                      <Form {...form}>
                        <form
                          onSubmit={form.handleSubmit(onSubmit)}
                          className="mt-6 space-y-4"
                        >
                          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            <FormField
                              control={form.control}
                              name="name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Full name</FormLabel>
                                  <FormControl>
                                    <Input
                                      autoComplete="name"
                                      placeholder="Juan Dela Cruz"
                                      className="h-12 rounded-xl bg-[#fbfcfe] px-4"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Email</FormLabel>
                                  <FormControl>
                                    <Input
                                      type="email"
                                      inputMode="email"
                                      autoComplete="email"
                                      placeholder="you@example.com"
                                      className="h-12 rounded-xl bg-[#fbfcfe] px-4"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="school"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>School</FormLabel>
                                  <FormControl>
                                    <Input
                                      autoComplete="organization"
                                      placeholder="Name of your school"
                                      className="h-12 rounded-xl bg-[#fbfcfe] px-4"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <FormField
                            control={form.control}
                            name="enrollmentStatus"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>
                                  Are you currently enrolled in a review center?
                                </FormLabel>
                                <FormControl>
                                  <RadioGroup
                                    onValueChange={handleEnrollmentChange}
                                    value={field.value}
                                    className="grid gap-4 sm:grid-cols-2"
                                  >
                                    {[
                                      {
                                        value: "enrolled",
                                        label: "Yes, I am enrolled",
                                        detail: "I have a current review center",
                                      },
                                      {
                                        value: "not-enrolled",
                                        label: "Not yet enrolled",
                                        detail: "I am still exploring options",
                                      },
                                    ].map((option) => (
                                      <label
                                        key={option.value}
                                        className="flex min-h-20 cursor-pointer items-center gap-4 rounded-2xl border border-border bg-[#fbfcfe] p-3 transition-colors hover:border-secondary/40 has-[[data-state=checked]]:border-secondary has-[[data-state=checked]]:bg-secondary/5"
                                      >
                                        <RadioGroupItem value={option.value} />
                                        <span>
                                          <span className="block text-sm font-semibold text-foreground">
                                            {option.label}
                                          </span>
                                          <span className="mt-1 block text-xs text-muted-foreground">
                                            {option.detail}
                                          </span>
                                        </span>
                                      </label>
                                    ))}
                                  </RadioGroup>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <AnimatePresence mode="wait" initial={false}>
                            {enrollmentStatus === "enrolled" && (
                              <motion.div
                                key="review-center"
                                initial={{ opacity: 0, height: 0, y: -6 }}
                                animate={{ opacity: 1, height: "auto", y: 0 }}
                                exit={{ opacity: 0, height: 0, y: -6 }}
                              >
                                <FormField
                                  control={form.control}
                                  name="reviewCenter"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>
                                        Current review center
                                      </FormLabel>
                                      <FormControl>
                                        <Input
                                          placeholder="Enter review center name"
                                          className="h-12 rounded-xl bg-[#fbfcfe] px-4"
                                          {...field}
                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </motion.div>
                            )}

                            {enrollmentStatus === "not-enrolled" && (
                              <motion.div
                                key="review-budget"
                                initial={{ opacity: 0, height: 0, y: -6 }}
                                animate={{ opacity: 1, height: "auto", y: 0 }}
                                exit={{ opacity: 0, height: 0, y: -6 }}
                              >
                                <FormField
                                  control={form.control}
                                  name="reviewBudget"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Review-center budget</FormLabel>
                                      <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                      >
                                        <FormControl>
                                          <SelectTrigger className="h-12 rounded-xl bg-[#fbfcfe] px-4">
                                            <SelectValue placeholder="Select your budget range" />
                                          </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                          {budgetOptions.map((option) => (
                                            <SelectItem
                                              key={option.value}
                                              value={option.value}
                                            >
                                              {option.label}
                                            </SelectItem>
                                          ))}
                                        </SelectContent>
                                      </Select>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </motion.div>
                            )}
                          </AnimatePresence>

                          <div className="border-t border-border pt-5">
                            {submissionError && (
                              <p
                                className="mb-3 text-sm text-destructive"
                                role="alert"
                              >
                                {submissionError}
                              </p>
                            )}
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                              <p className="max-w-xs text-xs leading-5 text-muted-foreground">
                                You can update these answers before continuing
                                to your drills.
                              </p>
                            <Button
                              type="submit"
                              variant="hero"
                              size="lg"
                              className="w-full sm:w-auto"
                              disabled={isSubmitting}
                            >
                              {isSubmitting ? "Saving..." : "Save & Continue"}
                              <ArrowRight className="h-4 w-4" aria-hidden="true" />
                            </Button>
                            </div>
                          </div>
                        </form>
                      </Form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </section>
            </div>
          </div>

          <p className="mt-5 text-center text-sm text-muted-foreground">
            Changed your mind?{" "}
            <Link
              to="/"
              className="font-medium text-secondary underline-offset-4 hover:underline"
            >
              Return to home
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Practice;
