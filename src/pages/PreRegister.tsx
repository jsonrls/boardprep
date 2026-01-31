import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Check, ChevronRight, User, BookOpen, Send, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Schema Definitions
const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  examType: z.string().min(1, "Please select an exam type"),
  targetDate: z.string().min(1, "Please select a target exam date"),
  agreedToTerms: z
    .boolean()
    .refine((val) => val === true, "You must agree to the terms"),
});

type FormValues = z.infer<typeof formSchema>;

const steps = [
  { id: 1, name: "Personal Details", icon: User },
  { id: 2, name: "Exam Selection", icon: BookOpen },
  { id: 3, name: "Review & Submit", icon: Send },
];

const PreRegister = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      examType: "",
      targetDate: "",
      agreedToTerms: false,
    },
    mode: "onChange",
  });

  const {
    formState: { errors, isValid },
  } = form;

  const nextStep = async () => {
    let fieldsToValidate: (keyof FormValues)[] = [];
    if (currentStep === 1) {
      fieldsToValidate = ["firstName", "lastName", "email", "phone"];
    } else if (currentStep === 2) {
      fieldsToValidate = ["examType", "targetDate"];
    }

    const isStepValid = await form.trigger(fieldsToValidate);
    if (isStepValid) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    toast({
      title: "Registration Submitted!",
      description:
        "We've received your details. Someone will reach out shortly.",
    });
    // Here you would typically send data to an API
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8 md:py-12 max-w-3xl mt-24">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            Pre-Registration
          </h1>
          <p className="text-muted-foreground">
            Join us to start your journey to success.
          </p>
        </div>

        {/* Stepper */}
        <div className="mb-8 relative">
          <div className="flex justify-between items-center relative z-10">
            {steps.map((step) => {
              const isActive = step.id === currentStep;
              const isCompleted = step.id < currentStep;

              return (
                <div
                  key={step.id}
                  className={`flex flex-col items-center ${isCompleted ? "cursor-pointer" : ""}`}
                  onClick={() => isCompleted && setCurrentStep(step.id)}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors duration-300 ${
                      isActive
                        ? "border-primary bg-primary text-primary-foreground"
                        : isCompleted
                          ? "border-accent bg-accent text-white"
                          : "border-muted-foreground/30 bg-background text-muted-foreground"
                    }`}
                  >
                    {isCompleted ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <step.icon className="w-5 h-5" />
                    )}
                  </div>
                  <span
                    className={`mt-2 text-xs font-medium transition-colors duration-300 ${
                      isActive || isCompleted
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {step.name}
                  </span>
                </div>
              );
            })}
          </div>
          {/* Progress Bar Background */}
          <div className="absolute top-5 left-0 w-full h-[2px] bg-muted -z-10" />
          {/* Active Progress Bar */}
          <motion.div
            className="absolute top-5 left-0 h-[2px] bg-primary -z-10"
            initial={{ width: "0%" }}
            animate={{
              width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <Card className="border-border/50 shadow-lg">
          <CardContent className="p-6 md:p-8">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {/* Step 1: Personal Details */}
                {currentStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="john.doe@example.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+1234567890" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>
                )}

                {/* Step 2: Exam Selection */}
                {currentStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <FormField
                      control={form.control}
                      name="examType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Licensure Exam</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select an exam" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="vet">
                                Veterinary Medicine (VLE)
                              </SelectItem>
                              <SelectItem value="ftle">
                                Food Technology Licensure Exam (FTLE)
                              </SelectItem>
                              <SelectItem value="fisheries">
                                Fisheries Professional (FPLE)
                              </SelectItem>
                              <SelectItem value="abe">
                                Agricultural and Biosystems Engineers (ABE)
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="targetDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Target Exam Date</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="When are you planning to take the exam?" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="august-2025">
                                August 2025
                              </SelectItem>
                              <SelectItem value="february-2026">
                                February 2026
                              </SelectItem>
                              <SelectItem value="august-2026">
                                August 2026
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>
                )}

                {/* Step 3: Review */}
                {currentStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="bg-muted/30 p-4 rounded-lg space-y-4">
                      <h3 className="font-semibold text-lg border-b pb-2">
                        Review Your Details
                      </h3>

                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <h4 className="text-sm font-medium text-muted-foreground">
                            Personal Information
                          </h4>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setCurrentStep(1)}
                            type="button"
                            className="h-auto p-0 text-primary hover:text-primary/80"
                          >
                            Edit
                          </Button>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-sm pl-2 border-l-2 border-muted">
                          <span className="text-muted-foreground">
                            Full Name:
                          </span>
                          <span className="font-medium text-right">
                            {form.getValues("firstName")}{" "}
                            {form.getValues("lastName")}
                          </span>

                          <span className="text-muted-foreground">Email:</span>
                          <span className="font-medium text-right">
                            {form.getValues("email")}
                          </span>

                          <span className="text-muted-foreground">Phone:</span>
                          <span className="font-medium text-right">
                            {form.getValues("phone")}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <h4 className="text-sm font-medium text-muted-foreground">
                            Exam Details
                          </h4>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setCurrentStep(2)}
                            type="button"
                            className="h-auto p-0 text-primary hover:text-primary/80"
                          >
                            Edit
                          </Button>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-sm pl-2 border-l-2 border-muted">
                          <span className="text-muted-foreground">Exam:</span>
                          <span className="font-medium text-right uppercase">
                            {form.getValues("examType")}
                          </span>

                          <span className="text-muted-foreground">Date:</span>
                          <span className="font-medium text-right capitalize">
                            {form.getValues("targetDate")?.replace("-", " ")}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm bg-yellow-500/10 border-yellow-500/20">
                      <FormField
                        control={form.control}
                        name="agreedToTerms"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                I agree to be contacted by BoardPrep Solutions
                                team.
                              </FormLabel>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>
                  </motion.div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-4 border-t mt-6">
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    size="sm"
                    className={
                      currentStep === 1 ? "invisible" : "visible rounded-full"
                    }
                  >
                    <ChevronLeft className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    {currentStep === steps.length ? "Back to Edit" : "Back"}
                  </Button>

                  {currentStep < steps.length ? (
                    <Button
                      type="button"
                      onClick={nextStep}
                      variant="hero"
                      className="group"
                      size="sm"
                    >
                      Next{" "}
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  ) : (
                    <Button type="submit" variant="hero" size="sm">
                      Submit Registration
                    </Button>
                  )}
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>

        {/* Decorative Divider */}
        <div className="relative my-16">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gradient-to-r from-transparent via-border to-transparent"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-background px-6 py-3 rounded-full border border-border shadow-soft">
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse"></div>
                <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse delay-75"></div>
                <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse delay-150"></div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Everything you need to know about pre-registration and our review
              classes
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem
              value="item-1"
              className="border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                What is pre-registration and how does it work?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Pre-registration is an early enrollment period (January 24 -
                February 13, 2026) that allows you to reserve your slot in our
                2026 BoardPrep Online Review Classes with a ₱500 reservation
                fee. This fee is non-refundable and will be deducted from your
                total review fee upon enrollment. Pre-registration ensures you
                secure your spot before the early bird registration period
                begins.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                What review classes are available for 2026?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We offer comprehensive online review classes for:
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>
                    <strong>Veterinarians</strong> - June 22 to August 28, 2026
                  </li>
                  <li>
                    <strong>Food Technologists</strong> - May 4 to June 5, 2026
                  </li>
                  <li>
                    <strong>Fisheries Professionals</strong> - July 6 to August
                    7, 2026
                  </li>
                  <li>
                    <strong>Agricultural and Biosystems Engineers</strong> -
                    September to October 2026
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                What are the review fees and registration periods?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <div className="space-y-3">
                  <div>
                    <strong>Veterinarians:</strong>
                    <ul className="list-disc list-inside ml-4">
                      <li>Early Bird: ₱9,999 (March 1-31, 2026)</li>
                      <li>Late Registration: ₱10,999</li>
                      <li>50% discount for Latin honors graduates</li>
                    </ul>
                  </div>
                  <div>
                    <strong>Food Technologists:</strong>
                    <ul className="list-disc list-inside ml-4">
                      <li>Early Bird: ₱4,999 (March 1-31, 2026)</li>
                      <li>Late Registration: ₱5,999</li>
                      <li>50% discount for Latin honors graduates</li>
                    </ul>
                  </div>
                  <div>
                    <strong>Fisheries Professionals:</strong>
                    <ul className="list-disc list-inside ml-4">
                      <li>Early Bird: ₱3,999 (March 1-31, 2026)</li>
                      <li>Late Registration: ₱4,999</li>
                      <li>50% discount for Latin honors graduates</li>
                    </ul>
                  </div>
                  <div>
                    <strong>Agricultural and Biosystems Engineers:</strong>
                    <ul className="list-disc list-inside ml-4">
                      <li>Early Bird: ₱4,999 (March 1-31, 2026)</li>
                      <li>Late Registration: ₱5,999</li>
                      <li>50% discount for Latin honors graduates</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                What features are included in the review classes?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                All our review classes include:
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Board Topnotcher Speakers</li>
                  <li>Learning Management System (LMS) access</li>
                  <li>Updated Question Drills</li>
                  <li>Comprehensive Review Notes</li>
                  <li>Mock Exams & Post-assessments</li>
                  <li>Recorded Q and A sessions</li>
                  <li>Final Coaching</li>
                  <li>Vet Flash Cards (for Veterinary review - New!)</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                How do I qualify for the 50% discount?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Students who graduated with Latin honors (Cum Laude, Magna Cum
                Laude, or Summa Cum Laude) are eligible for a 50% discount on
                the review fee. You will need to provide proof of your Latin
                honors status during the enrollment process, such as a copy of
                your diploma or transcript of records.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-6"
              className="border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                What happens after I submit my pre-registration?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                After submitting your pre-registration form, our team will
                contact you within 1-2 business days via email or phone to
                confirm your reservation and provide payment instructions for
                the ₱500 reservation fee. Once payment is confirmed, your slot
                will be officially reserved for the selected review class.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PreRegister;
