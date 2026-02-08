import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import {
  Check,
  ChevronRight,
  User,
  BookOpen,
  Send,
  ChevronLeft,
  CheckCircle,
  School,
  Briefcase,
  CreditCard,
  FileText,
  Upload,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
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
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Label } from "@/components/ui/label";

// Schema Definitions
const formSchema = z.object({
  // Step 1: Personal Details
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  gender: z.string().min(1, "Please select your gender"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  province: z.string().min(2, "Province is required"),
  city: z.string().min(2, "City is required"),

  // Step 2: Academic & Professional
  school: z.string().min(2, "School name is required"),
  gradYear: z.string().min(4, "Please enter a valid year"),
  description: z.string().min(1, "Please select an option"),
  isEmployed: z.string().min(1, "Please select an option"),
  latinHonorProof: z.any().optional(), // File inputs are tricky with Zod, keeping lenient for now
  isExistingSubscriber: z.string().min(1, "Please select an option"),
  existingSubscriberEmail: z.string().optional(),
  existingSubscriberProof: z.any().optional(),

  // Step 3: Exam & Review Info
  examType: z.string().min(1, "Please select an exam type"),
  targetDate: z.string().min(1, "Please select a target exam date"),
  takeOct2025: z.string().min(1, "Please select an option"),
  examineeType: z.string().min(1, "Please select an option"),
  otherReviewCenter: z.string().min(1, "Please select an option"),
  otherReviewCenterName: z.string().optional(),
  contactConsent: z.boolean().default(false),

  // Step 4: Payment & Verification
  paymentProof: z.any().optional(), // Make required in logic if needed
  preRegProof: z.any().optional(),
  remarks: z.string().optional(),
  agreedToTerms: z
    .boolean()
    .refine((val) => val === true, "You must agree to the terms"),
  hasPreRegistered: z.string().min(1, "Please select an option"),
  isLatinHonor: z.string().min(1, "Please select an option"),
});

type FormValues = z.infer<typeof formSchema>;

const steps = [
  { id: 0, name: "Pre-Check", icon: CheckCircle }, // New Step 0
  { id: 1, name: "Personal Details", icon: User },
  { id: 2, name: "Academic & Pro", icon: School },
  { id: 3, name: "Exam Details", icon: BookOpen },
  { id: 4, name: "Payment & Verify", icon: CreditCard },
];

const PreRegister = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0); // Start at Step 0
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      gender: "",
      email: "",
      phone: "",
      province: "",
      city: "",
      school: "",
      gradYear: "",
      description: "",
      isEmployed: "",
      isExistingSubscriber: "no",
      examType: "",
      targetDate: "",
      takeOct2025: "",
      examineeType: "",
      otherReviewCenter: "no",
      contactConsent: false,
      agreedToTerms: false,
      remarks: "",
      hasPreRegistered: "",
      isLatinHonor: "",
    },
    mode: "onChange",
  });

  const {
    formState: { errors, isValid },
    watch,
  } = form;

  const isExistingSubscriber = watch("isExistingSubscriber");
  const otherReviewCenter = watch("otherReviewCenter");
  const hasPreRegistered = watch("hasPreRegistered");
  const isLatinHonor = watch("isLatinHonor");

  const nextStep = async () => {
    let fieldsToValidate: (keyof FormValues)[] = [];
    if (currentStep === 0) {
      fieldsToValidate = ["hasPreRegistered", "isLatinHonor"];
    } else if (currentStep === 1) {
      fieldsToValidate = [
        "firstName",
        "lastName",
        "gender",
        "email",
        "phone",
        "province",
        "city",
      ];
    } else if (currentStep === 2) {
      fieldsToValidate = [
        "school",
        "gradYear",
        "description",
        "isEmployed",
        "isExistingSubscriber",
      ];
      // Add conditional validation if needed
    } else if (currentStep === 3) {
      fieldsToValidate = [
        "examType",
        "targetDate",
        "takeOct2025",
        "examineeType",
        "otherReviewCenter",
      ];
    }

    const isStepValid = await form.trigger(fieldsToValidate);
    if (isStepValid) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length));
    } else {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields to proceed.",
        variant: "destructive",
      });
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    setShowSuccessModal(true);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8 md:py-12 max-w-4xl mt-24">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            Registration
          </h1>
          <p className="text-muted-foreground">
            Join us to start your journey to success.
          </p>
        </div>

        {/* Stepper */}
        <div className="mb-8 relative">
          <div className="absolute top-5 left-0 w-full px-7">
            <div className="relative h-[2px] w-full bg-gray-200">
              <motion.div
                className="absolute top-0 left-0 h-full bg-green-500"
                initial={{ width: "0%" }}
                animate={{
                  width: `${(currentStep / (steps.length - 1)) * 100}%`,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

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
                        ? "bg-primary text-primary-foreground"
                        : isCompleted
                          ? "border-green-500 bg-green-500 text-white"
                          : "border-gray-200 bg-white text-muted-foreground"
                    }`}
                  >
                    {isCompleted ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <step.icon className="w-5 h-5" />
                    )}
                  </div>
                  <span
                    className={`mt-2 text-xs font-medium transition-colors duration-300 hidden sm:block ${
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
        </div>

        <Card className="border-border/50 shadow-lg">
          <CardContent className="p-6 md:p-8">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {/* Step 0: Pre-Check */}
                {currentStep === 0 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="bg-primary/5 border border-primary/20 p-6 rounded-lg text-center space-y-2">
                      <h2 className="text-xl font-semibold">
                        Welcome to BoardPrep Registration
                      </h2>
                      <p className="text-muted-foreground">
                        Please answer a few quick questions to get started.
                      </p>
                    </div>

                    <FormField
                      control={form.control}
                      name="hasPreRegistered"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">
                            Did you Pre-register?
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select option…" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="yes">Yes</SelectItem>
                              <SelectItem value="no">No</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="isLatinHonor"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">
                            Are you a clear candidate/graduate with Latin
                            Honors?
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Are you a Laude?…" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="yes">Yes</SelectItem>
                              <SelectItem value="no">No</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>
                )}

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
                              <Input placeholder="e.g. John" {...field} />
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
                              <Input placeholder="e.g. Doe" {...field} />
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
                          <FormLabel>
                            Email
                            <span className="text-xs text-destructive ml-2 font-bold uppercase tracking-wide">
                              (USE PERSONAL EMAIL ONLY. DO NOT USE SCHOOL
                              EMAIL.)
                            </span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="e.g. john.doe@example.com"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            You'll receive updates and calendar invites through
                            this email.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Contact Number</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g. 09123456789"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="gender"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Gender</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select gender…" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                                <SelectItem value="prefer-not-to-say">
                                  Prefer not to say
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="province"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Home Address (Province)</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g. Cavite" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Home Address (City/Town)</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g. Dasmarinas" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Academic & Professional */}
                {currentStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="school"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>University / College / School</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g. Univ of Philippines"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="gradYear"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Year Graduated / Graduating</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g. 2025" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Which of the following best describes you?
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select description…" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="undergraduate">
                                Undergraduate Student
                              </SelectItem>
                              <SelectItem value="graduate">
                                Recent Graduate
                              </SelectItem>
                              <SelectItem value="professional">
                                Working Professional
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="isEmployed"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Are you currently employed?</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select option…" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="yes">Yes</SelectItem>
                              <SelectItem value="no">No</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="p-4 bg-muted/30 rounded-lg border border-border/50">
                      <FormLabel className="mb-2 block">
                        Proof of Latin Honor{" "}
                        {isLatinHonor === "no" && "(Not Applicable)"}
                        {isLatinHonor === "yes" && (
                          <span className="text-muted-foreground font-normal ml-1">
                            (Optional)
                          </span>
                        )}
                      </FormLabel>
                      {isLatinHonor === "yes" ? (
                        <>
                          <FormDescription className="mb-3">
                            Upload picture of diploma, certificate, or any proof
                            to qualify for discounts. If you don't have it yet,
                            you can skip this for now.
                          </FormDescription>
                          <Input type="file" className="cursor-pointer" />
                        </>
                      ) : (
                        <p className="text-sm text-muted-foreground italic">
                          You selected "No" for Latin Honors in the pre-check
                          step. If this is incorrect, please go back and update
                          your selection.
                        </p>
                      )}
                    </div>

                    <div className="space-y-4 pt-4 border-t">
                      <FormField
                        control={form.control}
                        name="isExistingSubscriber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Are you an existing Board Prep subscriber?
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select option…" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="yes">Yes</SelectItem>
                                <SelectItem value="no">No</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {isExistingSubscriber === "yes" && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="space-y-4 pl-4 border-l-2 border-primary/20"
                        >
                          <FormField
                            control={form.control}
                            name="existingSubscriberEmail"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>
                                  Registered Email in Board Prep Platform
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="email@example.com"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <div className="space-y-2">
                            <Label>Proof of Existing Subscription</Label>
                            <FormDescription>
                              Screenshot of the expiration (Settings &gt;
                              Subscription Tab)
                            </FormDescription>
                            <Input type="file" />
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Exam Selection */}
                {currentStep === 3 && (
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
                                <SelectValue placeholder="Select an exam…" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="vet">
                                Veterinarian Medicine (VLE)
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                  <SelectValue placeholder="Select date…" />
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

                      <FormField
                        control={form.control}
                        name="takeOct2025"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Take Oct 2025 Exam? (If Applicable)
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select option…" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="yes">Yes</SelectItem>
                                <SelectItem value="no">No</SelectItem>
                                <SelectItem value="undecided">
                                  Undecided
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="examineeType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Type of Examinee</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select type…" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="first-timer">
                                First Timer
                              </SelectItem>
                              <SelectItem value="retaker">Retaker</SelectItem>
                              <SelectItem value="refresher">
                                Refresher
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="space-y-4 pt-4 border-t">
                      <FormField
                        control={form.control}
                        name="otherReviewCenter"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Are you enrolled in other Review Centers?
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select option…" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="yes">Yes</SelectItem>
                                <SelectItem value="no">No</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {otherReviewCenter === "yes" && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                        >
                          <FormField
                            control={form.control}
                            name="otherReviewCenterName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>
                                  Name of Review Center (Type NA if none)
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="e.g. ABC Review Center"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </motion.div>
                      )}
                    </div>

                    <FormField
                      control={form.control}
                      name="contactConsent"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              Do you want us to contact you in the future
                              regarding promotion of BoardPrep in your school?
                            </FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />
                  </motion.div>
                )}

                {/* Step 4: Payment & Verify */}
                {currentStep === 4 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg space-y-4">
                      <h3 className="font-semibold text-lg flex items-center gap-2">
                        <CreditCard className="text-foreground w-5 h-5" />{" "}
                        Payment Details
                      </h3>
                      <div className="text-sm space-y-4">
                        <div className="p-4 rounded-lg border bg-card text-card-foreground shadow-sm">
                          <p className="font-bold text-lg text-foreground mb-2">
                            Regular Price (Php 9,999.00)
                          </p>
                          <p className="text-muted-foreground leading-relaxed">
                            Bank:{" "}
                            <span className="text-foreground font-medium">
                              Union Bank
                            </span>
                            <br />
                            Name:{" "}
                            <span className="text-foreground font-medium">
                              Board Prep Solutions Incorporated
                            </span>
                            <br />
                            Account:{" "}
                            <span className="text-foreground font-bold">
                              0010 3002 0003
                            </span>
                          </p>
                        </div>
                        <div className="p-4 rounded-lg border bg-card text-card-foreground shadow-sm">
                          <p className="font-bold text-lg text-foreground mb-2">
                            50% Discount (Php 4,999.00)
                          </p>
                          <p className="text-muted-foreground leading-relaxed">
                            Bank:{" "}
                            <span className="text-foreground font-medium">
                              Union Bank
                            </span>
                            <br />
                            Name:{" "}
                            <span className="text-foreground font-medium">
                              Board Prep Solutions Incorporated
                            </span>
                            <br />
                            Account:{" "}
                            <span className="text-foreground font-bold">
                              0010 3002 0003
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Proof of Payment</Label>
                        <FormDescription>
                          Please take a screenshot as a proof of payment and
                          upload it here.
                        </FormDescription>
                        <Input type="file" />
                      </div>

                      {hasPreRegistered === "no" && (
                        <div className="space-y-2">
                          <Label>Pre-registration Proof of Payment</Label>
                          <FormDescription>
                            Upload this only if you have already registered and
                            paid the reservation fee.
                          </FormDescription>
                          <Input type="file" />
                        </div>
                      )}

                      <FormField
                        control={form.control}
                        name="remarks"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Remarks (Optional)</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Any additional notes…"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

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
                                  team regarding my application.
                                </FormLabel>
                                <FormDescription className="mt-1 text-xs">
                                  You will receive an email within 24 hours to
                                  confirm registration.
                                </FormDescription>
                                <FormMessage />
                              </div>
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-4 border-t mt-6">
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    size="sm"
                    className={
                      currentStep === 0 ? "invisible" : "visible rounded-full"
                    }
                  >
                    <ChevronLeft className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    {currentStep === steps.length ? "Back" : "Back"}
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
              Everything you need to know about registration and our review
              classes
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem
              value="item-1"
              className="border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                What is registration and how does it work?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Registration is an early enrollment period (January 24 -
                February 13, 2026) that allows you to reserve your slot in our
                2026 BoardPrep Online Review Classes with a ₱500 reservation
                fee. This fee is non-refundable and will be deducted from your
                total review fee upon enrollment. Registration ensures you
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
          </Accordion>
        </div>
      </main>

      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="flex flex-col items-center text-center space-y-4 pt-4">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-2">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <DialogTitle className="text-2xl font-bold text-center">
              Registration Successful!
            </DialogTitle>
            <DialogDescription className="text-center text-base">
              Thank you for registering with BoardPrep Solutions.
              <br />
              We have received your details.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 text-center text-sm text-muted-foreground">
            <p>
              Our team will review your information and reach out to you within
              1-2 business days regarding the next steps and payment
              instructions.
            </p>
          </div>
          <DialogFooter className="flex flex-col sm:flex-row gap-2 sm:justify-center w-full">
            <Button
              className="w-full sm:w-auto min-w-[140px]"
              variant="ghost"
              onClick={() => setShowSuccessModal(false)}
            >
              Close
            </Button>
            <Button
              className="w-full sm:w-auto min-w-[140px]"
              variant="hero"
              onClick={() => navigate("/")}
            >
              Back to Home
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default PreRegister;
