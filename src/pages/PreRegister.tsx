import { useEffect, useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
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
  Loader2,
  Copy,
  Stethoscope,
  Fish,
  Sparkles,
  Award,
} from "lucide-react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import qrCode from "@/assets/qr-code.png";
import qrCodePreregister from "@/assets/qr-code-preregister.png";
import qrCodeLatinHonor from "@/assets/qr-code-latin-honor.png";
import qrCodeLatinHonorPrereg from "@/assets/qr-code-latin-honor-prereg.png";
import mayaQr9499 from "@/assets/maya-qr-9499.png";
import mayaQr4499 from "@/assets/maya-qr-4499.png";
import mayaQr9999 from "@/assets/maya-qr-9999.png";
import mayaQr4999 from "@/assets/maya-qr-4999.png";
import gcashQr9499 from "@/assets/gcash-qr-9499.png";
import gcashQr4499 from "@/assets/gcash-qr-4499.png";
import gcashQr9999 from "@/assets/gcash-qr-9999.png";
import gcashQr4999 from "@/assets/gcash-qr-4999.png";
import gcashIcon from "@/assets/gcash-icon.svg";
import mayaIcon from "@/assets/maya-icon.svg";
import bpiIcon from "@/assets/bpi-icon.svg";
import ubIcon from "@/assets/ub-icon.svg";
import unionbankQr4499 from "@/assets/qr/4499.png";
import unionbankQr4999 from "@/assets/qr/4999.png";
import unionbankQr9499 from "@/assets/qr/9499.png";
import unionbankQr9999 from "@/assets/qr/9999.png";
import fisheriesQrMaya from "@/assets/payment/fisheries_qr_maya.png";
import fisheriesQrBpi from "@/assets/payment/fisheries_qr_bpi.png";
import fisheriesQrUnionbank from "@/assets/payment/fisheries_qr_unionbank.png";

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
  retypeEmail: z.string().min(1, "Please re-enter your email"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  province: z.string().min(2, "Province is required"),
  city: z.string().min(2, "City is required"),

  // Step 2: Academic & Professional
  school: z.string().min(1, "Please enter your school"),
  gradYear: z.string().min(4, "Please enter a valid year"),
  description: z.string().min(1, "Please select an option"),
  isEmployed: z.string().min(1, "Please select an option"),
  employmentType: z.string().optional(),
  latinHonorProof: z.any().optional(), // File inputs are tricky with Zod, keeping lenient for now
  isExistingSubscriber: z.string().min(1, "Please select an option"),
  existingSubscriberEmail: z.string().optional(),

  // Step 3: Exam & Review Info
  examType: z.string().min(1, "Please select an exam type"),
  targetDate: z.string().min(1, "Please select a target exam date"),
  takeOct2025: z.string().min(1, "Please select an option"),
  examineeType: z.string().min(1, "Please select an option"),
  otherReviewCenter: z.string().min(1, "Please select an option"),
  otherReviewCenterName: z.string().optional(),
  contactConsent: z.boolean().default(false),

  // Step 4: Payment & Verification
  paymentMethod: z.string().min(1, "Please choose a payment method"),
  walletType: z.string().min(1, "Please choose a QR wallet"),
  paymentProof: z
    .any()
    .refine((val) => val != null && val instanceof File, "Please upload proof of payment"),
  preRegProof: z.any().optional(),
  remarks: z.string().min(1, "Remarks is required"),
  agreedToTerms: z
    .boolean()
    .refine((val) => val === true, "You must agree to the terms"),
  hasPreRegistered: z.string().min(1, "Please select an option"),
  isLatinHonor: z.string().min(1, "Please select an option"),
})
  .refine((data) => data.retypeEmail === data.email, {
    message: "Emails do not match",
    path: ["retypeEmail"],
  })
  .refine((data) => {
    if (data.examType === "vet" || data.examType === "fisheries") {
      return !!(data.school && data.school.trim().length > 0);
    }
    return true;
  }, { message: "Please enter your school", path: ["school"] })
  .refine(
    (data) =>
      data.examType === "fisheries" ||
      data.isEmployed !== "yes" ||
      (data.employmentType && data.employmentType.length > 0),
    { message: "Please select your employment type", path: ["employmentType"] }
  )
  .refine(
    (data) =>
      data.otherReviewCenter !== "yes" ||
      (data.otherReviewCenterName && data.otherReviewCenterName.trim().length > 0),
    { message: "Please enter the review center name", path: ["otherReviewCenterName"] }
  )
  .refine(
    (data) =>
      data.isExistingSubscriber !== "yes" ||
      (data.existingSubscriberEmail && data.existingSubscriberEmail.trim().length > 0),
    {
      message: "Please enter your registered subscriber email",
      path: ["existingSubscriberEmail"],
    }
  )
  .refine(
    (data) =>
      data.hasPreRegistered !== "yes" ||
      (data.preRegProof != null && data.preRegProof instanceof File),
    { message: "Please upload your pre-registration proof", path: ["preRegProof"] }
  )
  .refine(
    (data) =>
      data.isLatinHonor !== "yes" ||
      (data.latinHonorProof != null && data.latinHonorProof instanceof File),
    { message: "Please upload your Latin honor proof", path: ["latinHonorProof"] }
  );

type FormValues = z.infer<typeof formSchema>;

const steps = [
  { id: 0, name: "Pre-Check", icon: CheckCircle },
  { id: 1, name: "Personal Details", icon: User },
  { id: 2, name: "Academic & Pro", icon: School },
  { id: 3, name: "Exam Details", icon: BookOpen },
  { id: 4, name: "Payment & Verify", icon: CreditCard },
];

const PreRegister = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0); 
  const [showFeeModal, setShowFeeModal] = useState(false);
  const [showExamChoiceModal, setShowExamChoiceModal] = useState(true);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      gender: "",
      email: "",
      retypeEmail: "",
      phone: "",
      province: "",
      city: "",
      school: "",
      gradYear: "",
      description: "",
      isEmployed: "",
      employmentType: "",
      isExistingSubscriber: "no",
      examType: "",
      targetDate: "",
      takeOct2025: "",
      examineeType: "",
      otherReviewCenter: "no",
      contactConsent: false,
      paymentMethod: "qr",
      walletType: "",
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
    setValue,
  } = form;

  const isExistingSubscriber = watch("isExistingSubscriber");
  const isEmployed = watch("isEmployed");
  const otherReviewCenter = watch("otherReviewCenter");
  const hasPreRegistered = watch("hasPreRegistered");
  const isLatinHonor = watch("isLatinHonor");
  const examType = watch("examType");
  const [searchParams, setSearchParams] = useSearchParams();

  const filteredSteps = useMemo(() => {
    if (examType === "fisheries") {
      return steps.filter((s) => s.id !== 0);
    }
    return steps;
  }, [examType]);

  // Handle initial URL state
  useEffect(() => {
    const examParam = searchParams.get("exam");
    if (examParam === "fisheries" || examParam === "vet") {
      setValue("examType", examParam);
      setShowExamChoiceModal(false);
      if (examParam === "fisheries") {
        setValue("hasPreRegistered", "no");
        setValue("isLatinHonor", "no");
        if (currentStep === 0) {
          setCurrentStep(1);
        }
      }
    }
  }, [searchParams, setValue]);

  // Sync examType with URL search params
  useEffect(() => {
    if (examType) {
      setSearchParams((prev) => {
        const next = new URLSearchParams(prev);
        next.set("exam", examType);
        return next;
      }, { replace: true });
    }
  }, [examType, setSearchParams]);

  const walletType = watch("walletType");
  useEffect(() => {
    if (
      examType === "fisheries" &&
      walletType !== "maya" &&
      walletType !== "bpi" &&
      walletType !== "unionbank"
    ) {
      setValue("walletType", "maya", { shouldValidate: true });
    }
  }, [examType, walletType, setValue]);
  const email = watch("email");
  const retypeEmail = watch("retypeEmail");
  const emailsMatch =
    email && retypeEmail && email.trim().toLowerCase() === retypeEmail.trim().toLowerCase();
  const emailsMismatch =
    email && retypeEmail && email.trim().toLowerCase() !== retypeEmail.trim().toLowerCase();

  const pricing: Record<string, { regular: string; discounted: string }> = {
    vet: {
      regular: "9,999",
      discounted: "4,999",
    },
    ftle: {
      regular: "4,999",
      discounted: "2,499",
    },
    fisheries: {
      regular: "999",
      discounted: "999",
    },
    abe: {
      regular: "4,999",
      discounted: "2,499",
    },
  };

  const examSchedules: Record<
    string,
    { value: string; label: string }
  > = {
    vet: {
      value: "vle-nov-4-6-2026",
      label: "November 4–6, 2026",
    },
    ftle: {
      value: "ftle-aug-12-13-2026",
      label: "August 12–13, 2026",
    },
    fisheries: {
      value: "fple-oct-1-2-2026",
      label: "October 1–2, 2026",
    },
    abe: {
      value: "abele-nov-19-20-2026",
      label: "November 19–20, 2026",
    },
  };

  const qrWalletImages: Record<string, string> = {
    maya: qrCode,
    bpi: qrCode,
    gcash: qrCode,
    unionbank: qrCode,
  };

  const qrWalletImagesPrereg: Record<string, string> = {
    maya: qrCodePreregister,
    bpi: qrCodePreregister,
    gcash: qrCodePreregister,
    unionbank: qrCodePreregister,
  };

  const qrWalletImagesLatinHonor: Record<string, string> = {
    maya: qrCodeLatinHonor,
    bpi: qrCodeLatinHonor,
    gcash: qrCodeLatinHonor,
    unionbank: qrCodeLatinHonor,
  };

  const qrWalletImagesLatinHonorPrereg: Record<string, string> = {
    maya: qrCodeLatinHonorPrereg,
    bpi: qrCodeLatinHonorPrereg,
    gcash: qrCodeLatinHonorPrereg,
    unionbank: qrCodeLatinHonorPrereg,
  };

  const activeQrImages =
    hasPreRegistered === "yes" && isLatinHonor === "yes"
      ? qrWalletImagesLatinHonorPrereg
      : hasPreRegistered === "yes"
        ? qrWalletImagesPrereg
        : isLatinHonor === "yes"
          ? qrWalletImagesLatinHonor
          : qrWalletImages;

  const mayaQrImagesByAmount: Record<number, string> = {
    9499: mayaQr9499,
    4499: mayaQr4499,
    9999: mayaQr9999,
    4999: mayaQr4999,
  };

  const gcashQrImagesByAmount: Record<number, string> = {
    9499: gcashQr9499,
    4499: gcashQr4499,
    9999: gcashQr9999,
    4999: gcashQr4999,
  };

  const unionbankQrImagesByAmount: Record<number, string> = {
    9499: unionbankQr9499,
    4499: unionbankQr4499,
    9999: unionbankQr9999,
    4999: unionbankQr4999,
  };

  const getActiveQrImageForWallet = () => {
    if (examType === "fisheries") {
      if (walletType === "bpi") {
        return fisheriesQrBpi;
      }
      if (walletType === "unionbank") {
        return fisheriesQrUnionbank;
      }
      return fisheriesQrMaya;
    }

    if (walletType === "maya") {
      const mayaImage = mayaQrImagesByAmount[getFinalAmount()];
      if (mayaImage) {
        return mayaImage;
      }
    }

    if (walletType === "gcash") {
      const gcashImage = gcashQrImagesByAmount[getFinalAmount()];
      if (gcashImage) {
        return gcashImage;
      }
    }

    if (walletType === "unionbank") {
      const unionbankImage = unionbankQrImagesByAmount[getFinalAmount()];
      if (unionbankImage) {
        return unionbankImage;
      }
    }

    return activeQrImages[
      (walletType || "maya") as keyof typeof activeQrImages
    ];
  };

  useEffect(() => {
    const schedule = examSchedules[examType as keyof typeof examSchedules];

    if (schedule) {
      setValue("targetDate", schedule.value, { shouldValidate: true });
    } else {
      setValue("targetDate", "", { shouldValidate: true });
    }
  }, [examType, setValue]);

  const getFinalAmount = () => {
    const baseRegularStr =
      pricing[examType as keyof typeof pricing]?.regular || "0";
    let amount = parseInt(baseRegularStr.replace(/,/g, ""), 10);
    if (Number.isNaN(amount)) amount = 0;

    // For Fisheries, it's a flat rate of 999
    if (examType === "fisheries") {
      return 999;
    }

    if (hasPreRegistered === "yes" && isLatinHonor === "yes") {
      amount = Math.floor(amount / 2) - 500;
    } else {
      if (hasPreRegistered === "yes") amount -= 500;
      if (isLatinHonor === "yes") amount = Math.floor(amount / 2);
    }
    return amount;
  };

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
        "retypeEmail",
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
      if (examType !== "fisheries" && form.getValues("isEmployed") === "yes") {
        fieldsToValidate.push("employmentType");
      }
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

    if (currentStep === 0 && isStepValid) {
      const values = form.getValues();
      let hasError = false;

      if (values.hasPreRegistered === "yes" && !values.preRegProof) {
        form.setError("preRegProof", {
          type: "manual",
          message: "Proof is required if you enrolled.",
        });
        hasError = true;
      }

      if (values.isLatinHonor === "yes" && !values.latinHonorProof) {
        form.setError("latinHonorProof", {
          type: "manual",
          message:
            "Proof is required if you are a Latin Honor candidate/graduate.",
        });
        hasError = true;
      }

      if (hasError) {
        toast({
          title: "Missing Information",
          description: "Please upload the required proofs.",
          variant: "destructive",
        });
        return;
      }
    }

    if (isStepValid) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    } else {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields to proceed.",
        variant: "destructive",
      });
    }
  };

  const prevStep = () => {
    if (examType === "fisheries" && currentStep === 1) {
      setShowExamChoiceModal(true);
      return;
    }
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  // Google Apps Script URL
  // const GOOGLE_SCRIPT_URL =
  //   "https://script.google.com/macros/s/AKfycbwbjkhkHWuI3no_XMbNi9n65M6ZJPeEYc2kWEnHTQLNSiJfDh5n7R5Njf_rlpYeV96Taw/exec";

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyVX4O-u-9E0T8un8EpIwboXF8uvQ0bLlsfjtg_mScyPKOuDnpNeo1IvOscMSaTuN9fkg/exec";

  const fileToBase64 = (
    file: File,
  ): Promise<{ data: string; mimeType: string; name: string }> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const result = reader.result as string;
        const base64String = result.split(",")[1];
        resolve({
          data: base64String,
          mimeType: file.type,
          name: file.name,
        });
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const handleFinalSubmit = async () => {
    const data = form.getValues();
    setShowConfirmModal(false);
    setIsSubmitting(true);
    try {
      const latinHonorFile =
        data.latinHonorProof instanceof File
          ? await fileToBase64(data.latinHonorProof)
          : null;
      const paymentProofFile =
        data.paymentProof instanceof File
          ? await fileToBase64(data.paymentProof)
          : null;
      const preRegProofFile =
        data.preRegProof instanceof File
          ? await fileToBase64(data.preRegProof)
          : null;
      const existingSubFile = null;

      // Map form data to Google Sheet headers
      const sheetData = {
        Timestamp: new Date().toLocaleString("en-PH", { timeZone: "Asia/Manila" }),
        "Exam Type": data.examType || "",
        "Licensure Exam":
          data.examType === "fisheries"
            ? "Fisheries Professionals Licensure Exam (FPLE)"
            : "Veterinarian Licensure Exam (VLE)",
        "Email Address": data.email,
        "Name (First Name)": data.firstName,
        "Name (Last Name)": data.lastName,
        Gender: data.gender,
        "Home Address (Province)": data.province,
        "Home Address (City or Town)": data.city,
        "Important: Email Address (Main Communication Channel)": data.email,
        "Please Re-type Your Email Address": data.email,
        "Contact Number": data.phone,
        "University / College / School": data.school,
        "Year Graduated / Graduating": data.gradYear,
        "Will You Take the October 2025 Veterinarian Licensure Exam":
          data.takeOct2025 || "N/A",
        "Type of Examinee": data.examineeType || "N/A",
        "Currently Employed": data.isEmployed,
        "Employment Type (if employed)":
          data.isEmployed === "yes" ? data.employmentType || "N/A" : "N/A",
        "Enrolled in Other Review Centers": data.otherReviewCenter,
        "Name of Current Review Center (if applicable)":
          data.otherReviewCenterName || "N/A",
        "Consent to Be Contacted for BoardPrep Promotion": data.agreedToTerms
          ? "Yes"
          : "No",
        "Category / Description of Applicant": data.description,
        "Proof of Latin Honor":
          latinHonorFile ||
          (data.isLatinHonor === "yes" ? "File Missing" : "N/A"),
        "Proof of Registration":
          preRegProofFile ||
          (data.hasPreRegistered === "yes" ? "File Missing" : "N/A"),
        "Proof of Payment": paymentProofFile || "File Missing",
        "Registered Email in BoardPrep Platform":
          data.existingSubscriberEmail || "N/A",
        "Proof of Existing BoardPrep Subscription": "N/A",
        Remarks: data.remarks || "",
        // Mapped fields based on user provided columns
      };

      console.log("Submitting to Google Sheets with files...");

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain",
        },
        body: JSON.stringify(sheetData),
      });

      // With no-cors, we can't check response.ok.
      // We assume if it didn't throw network error, it went through.
      console.log("Form submitted to Google Sheets (no-cors mode)");

      // Since mode is no-cors, we assume success if no network error thrown
      console.log("Form submitted successfully to Google Sheets");
      setShowSuccessModal(true);
      form.reset();
      setCurrentStep(0);
    } catch (error) {
      console.error("Error submitting to Google Sheets:", error);
      toast({
        title: "Submission Error",
        description:
          "There was a problem submitting your registration. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const onSubmit = (data: FormValues) => {
    setShowConfirmModal(true);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8 md:py-12 max-w-4xl mt-24">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-display font-bold tracking-tight mb-2">
            Registration
          </h1>
          <p className="text-muted-foreground font-sans text-wrap: balance">
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
                  width: `${(filteredSteps.findIndex(s => s.id === currentStep) / (filteredSteps.length - 1)) * 100}%`,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          <div className="flex justify-between items-center relative z-10">
            {filteredSteps.map((step, index) => {
              const isActive = step.id === currentStep;
              const isCompleted = step.id < currentStep;

              return (
                <div
                  key={step.id}
                  className={`flex flex-col items-center ${isCompleted ? "cursor-pointer" : ""}`}
                  onClick={() => isCompleted && setCurrentStep(step.id)}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors duration-300 ${isActive
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
                    className={`mt-2 text-xs font-medium transition-colors duration-300 hidden sm:block font-sans ${isActive || isCompleted
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
                      <h2 className="text-xl font-semibold font-display">
                        Welcome to BoardPrep Registration
                      </h2>
                      <p className="text-muted-foreground font-sans">
                        Please answer a few quick questions to get started.
                      </p>
                    </div>

                    <FormField
                      control={form.control}
                      name="hasPreRegistered"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-sans">
                            Did you pre-register?
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="font-sans">
                                <SelectValue placeholder="Select option…" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="font-sans">
                              <SelectItem value="yes">Yes</SelectItem>
                              <SelectItem value="no">No</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {hasPreRegistered === "yes" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="space-y-2 pl-4 border-l-2 border-primary/20"
                      >
                        <Label>Pre-registration Proof of Payment/Email Confirmation</Label>
                        <FormDescription>
                          Upload only if you have already registered and
                          paid the reservation fee.
                        </FormDescription>
                        <FormField
                          control={form.control}
                          name="preRegProof"
                          render={({ field: { onChange, value, ...rest } }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  type="file"
                                  accept="image/*,.pdf,.jpg,.jpeg,.png"
                                  onChange={(e) => {
                                    onChange(
                                      e.target.files ? e.target.files[0] : null,
                                    );
                                  }}
                                  {...rest}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>
                    )}

                    <FormField
                      control={form.control}
                      name="isLatinHonor"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-sans">
                            Are you a clear candidate/graduate with Latin
                            Honors?
                          </FormLabel>
                          <FormDescription>
                            If proof is not yet available, please select “No” and proceed with the full fee.<br />Contact us later to request a refund, which will be processed once proof is submitted and verified.
                          </FormDescription>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="font-sans">
                                <SelectValue placeholder="Are you a Latin Honor?…" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="font-sans">
                              <SelectItem value="yes">Yes</SelectItem>
                              <SelectItem value="no">No</SelectItem>
                            </SelectContent>
                          </Select>

                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {isLatinHonor === "yes" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="space-y-2 pl-4 border-l-2 border-primary/20"
                      >
                        <Label>Proof of Latin Honor</Label>
                        <FormDescription>
                          Upload picture of diploma, certificate, or any proof
                          to qualify for discounts.
                        </FormDescription>
                        <FormField
                          control={form.control}
                          name="latinHonorProof"
                          render={({ field: { onChange, value, ...rest } }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  type="file"
                                  className="cursor-pointer"
                                  accept="image/*,.pdf"
                                  onChange={(e) => {
                                    onChange(
                                      e.target.files ? e.target.files[0] : null,
                                    );
                                  }}
                                  {...rest}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>
                    )}
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
                            <FormLabel className="font-sans">
                              First Name
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g. John"
                                {...field}
                                className="font-sans"
                              />
                            </FormControl>
                            <FormMessage className="font-sans" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-sans">
                              Last Name
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g. Doe"
                                {...field}
                                className="font-sans"
                              />
                            </FormControl>
                            <FormMessage className="font-sans" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex flex-wrap items-center gap-x-2">
                              Email
                              <span className="text-[10px] text-destructive font-bold uppercase tracking-tight bg-destructive/5 px-1.5 py-0.5 rounded border border-destructive/10">
                                Personal Email Only
                              </span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="e.g. john.doe@example.com"
                                {...field}
                                spellCheck={false}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="retypeEmail"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Re-type Email</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="Re-enter email address"
                                {...field}
                                spellCheck={false}
                                className={
                                  emailsMismatch
                                    ? "border-destructive focus-visible:ring-destructive"
                                    : emailsMatch
                                      ? "border-green-500 focus-visible:ring-green-500"
                                      : ""
                                }
                              />
                            </FormControl>
                            {emailsMatch && (
                              <FormDescription className="text-green-600 flex items-center gap-1.5 text-[11px] h-4 mt-1">
                                <Check className="h-3 w-3 shrink-0" />
                                Emails match
                              </FormDescription>
                            )}
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-sans">
                              Contact Number
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g. 09123456789"
                                {...field}
                                className="font-sans"
                              />
                            </FormControl>
                            <FormMessage className="font-sans" />
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
                            <FormLabel className="font-sans">
                              Home Address (Province)
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g. Cavite"
                                {...field}
                                className="font-sans"
                              />
                            </FormControl>
                            <FormMessage className="font-sans" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-sans">
                              Home Address (City/Town)
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g. Dasmarinas"
                                {...field}
                                className="font-sans"
                              />
                            </FormControl>
                            <FormMessage className="font-sans" />
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="school"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-sans">
                              University
                            </FormLabel>
                            {examType === "fisheries" ? (
                              <FormControl>
                                <Input
                                  placeholder="Enter your school name"
                                  {...field}
                                  className="font-sans"
                                  spellCheck={false}
                                />
                              </FormControl>
                            ) : (
                              <Select onValueChange={field.onChange} value={field.value ?? ""}>
                                <FormControl>
                                  <SelectTrigger className="font-sans">
                                    <SelectValue placeholder="Select university…" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="font-sans">
                                  <SelectItem value="ASU">ASU</SelectItem>
                                  <SelectItem value="BASC">BASC</SelectItem>
                                  <SelectItem value="BSU">BSU</SelectItem>
                                  <SelectItem value="CapSU">CapSU</SelectItem>
                                  <SelectItem value="CBSUA">CBSUA</SelectItem>
                                  <SelectItem value="CLSU">CLSU</SelectItem>
                                  <SelectItem value="CMU">CMU</SelectItem>
                                  <SelectItem value="CSU">CSU</SelectItem>
                                  <SelectItem value="CTU">CTU</SelectItem>
                                  <SelectItem value="CvSU">CvSU</SelectItem>
                                  <SelectItem value="DLSAU">DLSAU</SelectItem>
                                  <SelectItem value="DMMMSU">DMMMSU</SelectItem>
                                  <SelectItem value="ISU">ISU</SelectItem>
                                  <SelectItem value="NVSU">NVSU</SelectItem>
                                  <SelectItem value="PSAU">PSAU</SelectItem>
                                  <SelectItem value="SWU">SWU</SelectItem>
                                  <SelectItem value="TAU">TAU</SelectItem>
                                  <SelectItem value="UEP">UEP</SelectItem>
                                  <SelectItem value="UPLB">UPLB</SelectItem>
                                  <SelectItem value="USM">USM</SelectItem>
                                  <SelectItem value="VMUF">VMUF</SelectItem>
                                  <SelectItem value="VSU">VSU</SelectItem>
                                  <SelectItem value="Others">Others</SelectItem>
                                </SelectContent>
                              </Select>
                            )}
                            <FormMessage className="font-sans" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="gradYear"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-sans">
                              Year Graduated/To Graduate
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g. 2025"
                                {...field}
                                className="font-sans"
                              />
                            </FormControl>
                            <FormMessage className="font-sans" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                              value={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select description…" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="graduating">
                                  Graduating This Year
                                </SelectItem>
                                <SelectItem value="graduated">
                                  Already Graduated
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
                              onValueChange={(val) => {
                                field.onChange(val);
                                if (val === "no")
                                  form.setValue("employmentType", "");
                              }}
                              value={field.value}
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
                    </div>

                    {isEmployed === "yes" && examType !== "fisheries" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="space-y-4 pl-4 border-l-2 border-primary/20"
                      >
                        <FormField
                          control={form.control}
                          name="employmentType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Employment type</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                value={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select employment type…" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="Livestock & Poultry">
                                    Livestock & Poultry
                                  </SelectItem>
                                  <SelectItem value="Companion Animal">
                                    Companion Animal
                                  </SelectItem>
                                  <SelectItem value="Government Service">
                                    Government Service
                                  </SelectItem>
                                  <SelectItem value="Sales">Sales</SelectItem>
                                  <SelectItem value="Others">Others</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>
                    )}

                    <div className="pt-4 border-t">
                      <FormField
                        control={form.control}
                        name="isExistingSubscriber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Are you an existing BoardPrep Question Drills subscriber?
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
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
                          className="mt-4 pl-4 border-l-2 border-primary/20"
                        >
                          <FormField
                            control={form.control}
                            name="existingSubscriberEmail"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>
                                  Registered Email in BoardPrep Platform
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="email@example.com"
                                    {...field}
                                    spellCheck={false}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
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
                              <SelectTrigger
                                className="pointer-events-none cursor-default opacity-100"
                                aria-disabled
                              >
                                <SelectValue placeholder="Select an exam…" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="vet">
                                Veterinarian Licensure Exam (VLE)
                              </SelectItem>
                              <SelectItem value="fisheries">
                                Fisheries Professionals Licensure Exam (FPLE)
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
                        render={({ field }) => {
                          const schedule =
                            examSchedules[examType as keyof typeof examSchedules];

                          return (
                            <FormItem>
                              <FormLabel>Exam Date</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                value={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger
                                    className={
                                      schedule
                                        ? "pointer-events-none cursor-default opacity-100"
                                        : ""
                                    }
                                    aria-disabled={!!schedule}
                                  >
                                    <SelectValue
                                      placeholder={
                                        schedule
                                          ? "Select exam date…"
                                          : "Select licensure exam first…"
                                      }
                                    />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {schedule && (
                                    <SelectItem value={schedule.value}>
                                      {schedule.label}
                                    </SelectItem>
                                  )}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />

                      <FormField
                        control={form.control}
                        name="takeOct2025"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Will you take the {examType === "fisheries" ? "FPLE" : "VLE"} this year?
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="otherReviewCenter"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Other Review Centers?</FormLabel>
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
                    </div>

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
                                Name of Review Center
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="e.g. ABC Review Center"
                                  {...field}
                                  spellCheck={false}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>
                    )}
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
                    <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg space-y-5">
                      <h3 className="font-semibold text-lg flex items-center gap-2">
                        <CreditCard className="text-foreground w-5 h-5" />{" "}
                        Payment Options
                      </h3>
                      <div className="flex flex-col gap-1 text-sm">
                        <p className="text-xs uppercase tracking-wide text-muted-foreground">
                          Amount to pay
                        </p>
                        <div className="inline-flex items-center gap-2">
                          <p className="inline-flex items-baseline gap-1 text-base font-semibold text-foreground font-variant-numeric: tabular-nums">
                            <span className="text-sm font-medium text-muted-foreground">
                              ₱ 
                            </span>
                            <span className="text-2xl font-extrabold tabular-nums">
                              {getFinalAmount().toLocaleString()}
                              .00
                            </span>
                          </p>
                          <button
                            type="button"
                            onClick={() => {
                              const amountText = `${getFinalAmount().toLocaleString()}.00`;
                              navigator.clipboard
                                ?.writeText(amountText)
                                .then(() => {
                                  toast({
                                    title: "Amount copied",
                                    description:
                                      "The total amount to pay has been copied.",
                                  });
                                })
                                .catch(() => undefined);
                            }}
                            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
                            aria-label="Copy amount to clipboard"
                          >
                            <Copy className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <FormField
                          control={form.control}
                          name="walletType"
                          render={({ field }) => (
                            <FormItem className="space-y-2">
                              <FormLabel className="text-sm font-medium">
                                Choose QR wallet
                              </FormLabel>
                              <div className="flex flex-wrap gap-3">
                                {[
                                  { id: "maya", label: "Maya" },
                                  { id: "bpi", label: "BPI" },
                                  { id: "unionbank", label: "UnionBank" },
                                ]
                                  .filter((wallet) =>
                                    examType === "fisheries"
                                      ? wallet.id === "maya" ||
                                        wallet.id === "bpi" ||
                                        wallet.id === "unionbank"
                                      : true
                                  )
                                  .map((wallet) => {
                                  const isActive = field.value === wallet.id;
                                  const walletIcon =
                                    wallet.id === "gcash"
                                      ? gcashIcon
                                      : wallet.id === "maya"
                                        ? mayaIcon
                                        : wallet.id === "bpi"
                                          ? bpiIcon
                                          : ubIcon;
                                  return (
                                    <button
                                      key={wallet.id}
                                      type="button"
                                      onClick={() => field.onChange(wallet.id)}
                                      className={`group relative min-w-[100px] overflow-hidden rounded-xl px-4 py-3 text-xs font-semibold border-2 transition-all duration-300 flex flex-col items-center gap-2 ${isActive
                                          ? "border-primary bg-primary/10 text-foreground ring-2 ring-primary/20 ring-offset-2"
                                          : "border-border bg-background hover:bg-accent/40 hover:border-border/80"
                                        } active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40`}
                                    >
                                      {isActive && (
                                        <motion.div
                                          layoutId="active-wallet-bg"
                                          className="absolute inset-0 bg-primary/5 -z-10"
                                          initial={false}
                                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                      )}
                                      <img
                                        src={walletIcon}
                                        alt={`${wallet.label} logo`}
                                        className="h-7 w-7 object-contain group-hover:scale-110 transition-transform"
                                      />
                                      <span>{wallet.label}</span>
                                    </button>
                                  );
                                })}
                              </div>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="border rounded-lg px-4 py-4 bg-card">
                          <p className="font-semibold mb-2">
                            Scan QR code to pay
                          </p>
                          <p className="text-sm text-muted-foreground mb-4">
                            Open your mobile banking app, scan the QR code, and pay the full amount.
                            Please include your full name in the reference or
                            notes section.
                          </p>
                          <div className="flex flex-col items-center justify-center">
                            <img
                              src={getActiveQrImageForWallet()}
                              alt="Payment QR Code"
                              className="w-full max-w-sm h-auto object-contain rounded-md"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Proof of Payment <span className="text-destructive">*</span></Label>
                        <FormDescription>
                          Please take a screenshot as a proof of payment and
                          upload it here.
                        </FormDescription>
                        <FormField
                          control={form.control}
                          name="paymentProof"
                          render={({ field: { onChange, value, ...rest } }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  type="file"
                                  accept="image/*,.pdf,.jpg,.jpeg,.png"
                                  onChange={(e) => {
                                    onChange(
                                      e.target.files ? e.target.files[0] : null,
                                    );
                                  }}
                                  {...rest}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="remarks"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-sans">
                              Remarks (Optional)
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Any additional notes…"
                                {...field}
                                className="font-sans"
                              />
                            </FormControl>
                            <FormMessage className="font-sans" />
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
                                  className="border-foreground/50 bg-background data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>
                                  I agree to be contacted by BoardPrep Solutions
                                  team regarding my application.
                                </FormLabel>
                                <FormDescription className="mt-1 text-xs">
                                  You will receive an email within 48 hours to
                                  confirm registration.
                                </FormDescription>
                                <FormDescription className="mt-1 text-xs">
                                  Classroom invitations will be sent to your email address after confirmation.
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
                      className={`${currentStep === 0 ? "invisible" : "visible"} group rounded-full px-5 shadow-sm hover:shadow-md transition-all active:scale-95`}
                    >
                      <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                      Back
                    </Button>

                    {currentStep < steps.length - 1 ? (
                      <Button
                        key="next-btn"
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          nextStep();
                        }}
                        variant="hero"
                        className="group rounded-full px-6 shadow-md hover:shadow-lg transition-all active:scale-95"
                        size="sm"
                      >
                        Next{" "}
                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    ) : (
                      <Button
                        key="submit-btn"
                        type="submit"
                        variant="hero"
                        size="sm"
                        className="rounded-full px-8 shadow-md hover:shadow-lg transition-all active:scale-95 font-bold"
                        disabled={isSubmitting}
                      >
                        Submit Registration
                      </Button>
                    )}
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>

        {/* Loading Overlay */}
        {isSubmitting && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center">
            <Loader2 className="h-16 w-16 animate-spin text-yellow-500 mb-4" />
            <h2 className="text-2xl font-bold font-display">
              Submitting Registration…
            </h2>
            <p className="text-muted-foreground mt-2 text-wrap: balance text-center">
              Please wait while we process your details.
            </p>
          </div>
        )}

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
            <h2 className="text-3xl font-bold tracking-tight mb-2 font-display text-wrap: balance">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground font-sans">
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
                Until when is the Early Bird Promo?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                The Early Bird Promo runs from March 1–31, 2026.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                How much is the {examType === "fisheries" ? "Fisheries" : "Vet"} Review Class?
              </AccordionTrigger>
               <AccordionContent className="text-muted-foreground">
                During the Early Bird Promo (March 1–31, 2026), the {examType === "fisheries" ? "Fisheries" : "Vet"} Review
                Class fee is{" "}
                <span className="font-semibold">₱  {pricing[examType || 'vet']?.regular}.00</span>
                {examType !== "fisheries" && (
                  <>
                    {" "}(or{" "}
                    <span className="font-semibold">₱  {pricing[examType || 'vet']?.discounted}</span> for qualified
                    Latin honor candidates/graduates).
                    <br /><br />
                    If you have already pre-registered with a{" "}
                    <span className="font-semibold">₱  500</span> reservation fee,
                    your remaining balance during the Early Bird period is{" "}
                    <span className="font-semibold">₱  9,499</span> (or{" "}
                    <span className="font-semibold">₱  4,499</span> for qualified
                    Latin honor candidates/graduates).
                  </>
                )}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                What is the duration of the {examType === "fisheries" ? "Fisheries" : "Vet"} Review Class?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                The {examType === "fisheries" ? "Fisheries" : "Vet"} Review Class will run from {examType === "fisheries" ? "June 25 to August 28, 2026" : "June 22 to August 29, 2026"}.
                <br /><br />
                Schedule: Weekdays, 9:00 AM – {examType === "fisheries" ? "4:00 PM" : "12:00 PM"}.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                Will the lectures be recorded?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes. All live Zoom sessions will be recorded and made available
                within the same day after the session.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                Are the materials downloadable?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                The Review Notes are downloadable and can be accessed offline.
                Recorded lectures, however, are for online streaming only.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-6"
              className="border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                Can I access the classroom on multiple devices?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes. However, each user account can be active on only one device at a time. If you log in on another device, you will be automatically logged out from the previous one.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>

      <Dialog open={showFeeModal}>
        <DialogContent 
          onPointerDownOutside={(e) => e.preventDefault()}
          onEscapeKeyDown={(e) => e.preventDefault()}
          className="sm:max-w-2xl border-none bg-transparent p-4 shadow-none [&>button]:hidden text-foreground"
        >
          <div className="rounded-2xl border bg-card p-5 shadow-xl sm:p-7">
            <DialogHeader className="space-y-3 text-left">
              <div className="flex items-center gap-2">
                <span className="w-fit rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary uppercase tracking-wider">
                  Important Notice
                </span>
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              </div>
              <DialogTitle className="w-full text-center font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-wrap: balance">
                Registration Fees
              </DialogTitle>
              <DialogDescription className="w-full text-center font-sans text-sm text-muted-foreground">
                Please review the rates before proceeding.
              </DialogDescription>
            </DialogHeader>

            <div className="my-5 border-t border-border" />

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-muted/30 p-0 shadow overflow-hidden">
                {/* Ticket notch effect */}
                <div className="relative">
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-6">
                    <svg width="48" height="24" viewBox="0 0 48 24" fill="none" className="block">
                      <circle cx="24" cy="24" r="12" fill="#FAFAFA" className="dark:fill-muted/30" />
                    </svg>
                  </div>
                </div>
                <div className="p-4 pt-6">
                  <p className="text-lg font-semibold text-foreground mb-0.5">Review Fee</p>
                  <dl className="text-sm text-foreground tabular-nums">
                    {examType === "fisheries" ? (
                      <div className="flex items-start justify-between gap-3 py-1.5 rounded-md bg-primary/5 border border-primary/10">
                        <dt className="font-medium">Regular</dt>
                        <dd className="font-bold">
                          <span>₱ </span>
                          <span>999.00</span>
                        </dd>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-start justify-between gap-3 py-1.5 rounded-md">
                          <dt className="font-medium">Regular</dt>
                          <dd className="font-bold">₱  9,999.00</dd>
                        </div>
                        <div className="flex items-start justify-between gap-3 py-1.5 rounded-md">
                          <dt className="font-medium">Latin Honor</dt>
                          <dd className="font-bold">₱  4,999.00</dd>
                        </div>
                        <div className="flex items-start justify-between gap-3 py-1.5 rounded-md">
                          <dt className="font-medium">Pre-registered</dt>
                          <dd className="font-bold">₱  9,499.00</dd>
                        </div>
                        <div className="flex items-start justify-between gap-3 py-1.5 rounded-md bg-primary/5 border border-primary/10">
                          <dt className="font-medium">Pre-reg + Latin Honor</dt>
                          <dd className="flex flex-col font-bold text-primary">
                            <span>₱ </span>
                            <span>4,499.00</span>
                          </dd>
                        </div>
                      </>
                    )}
                  </dl>
                </div>
              </div>

                  <div className="rounded-xl border border-border bg-muted/30 p-4">
                <p className="text-lg font-semibold text-foreground">Review Details</p>
                <div className="space-y-2 text-sm mt-2">
                  <p className="text-muted-foreground ">
                    {examType === "fisheries" 
                      ? (
                        <>
                          <span className="font-bold">Asynchronous review class.</span> You will gain immediate access to all review materials once your payment has been verified.
                        </>
                      )
                      : (
                        <div>
                          <div className="font-bold mb-1">Vet Review Class (VLE)</div>
                          <div className="mb-1">
                            <span className="font-semibold">Duration:</span> June 22 to August 29, 2026
                          </div>
                          <div className="mb-1">
                            <span className="font-semibold">Schedule:</span> Weekdays, 9:00 AM - 12:00 PM
                          </div>
                          <div>
                            Recorded lectures are available for same-day replay.
                          </div>
                        </div>
                      )}
                  </p>
                </div>
              </div>
            </div>

            <DialogFooter className="mt-6 sm:justify-center">
              <Button
                variant="hero"
                onClick={() => {
                  setShowFeeModal(false);
                  if (examType === "fisheries" && currentStep === 0) {
                    setCurrentStep(1);
                  }
                }}
                className="rounded-full px-8 font-sans"
              >
                Continue to Registration
              </Button>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="flex flex-col items-center text-center space-y-4 pt-4">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-2">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <DialogTitle className="w-full text-center text-2xl font-bold font-display text-wrap: balance">
              Registration Successful!
            </DialogTitle>
            <DialogDescription className="text-center text-base font-sans text-wrap: balance">
              
              Thank you for registering with BoardPrep.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 text-center text-sm text-muted-foreground space-y-3">
            <p>
              Your registration has been received. Please allow 24-48 hours for payment verification and account confirmation.
            </p>
            <p>
              Once approved, we will send your official BoardPrep Classroom invitation by email. If you do not receive it on time, contact us at{" "}
              <a
                href="mailto:acewithboardprep@gmail.com"
                className="underline underline-offset-2"
              >
                acewithboardprep@gmail.com
              </a>
              .
            </p>
            <p>Thank you for choosing BoardPrep. Together, let's ace the test!</p>
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

      <Dialog open={showConfirmModal} onOpenChange={setShowConfirmModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display text-xl font-bold text-wrap: balance">
              Confirm Registration
            </DialogTitle>
            <DialogDescription className="font-sans text-wrap: balance">
              Are you sure you want to submit your registration details? Please
              double-check your information before proceeding.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex gap-2 sm:justify-end">
            <Button
              variant="outline"
              onClick={() => setShowConfirmModal(false)}
              className="font-sans"
            >
              Cancel
            </Button>
            <Button
              variant="hero"
              onClick={handleFinalSubmit}
              className="font-sans"
            >
              Confirm & Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={showExamChoiceModal}>
        <DialogContent 
          onPointerDownOutside={(e) => e.preventDefault()}
          onEscapeKeyDown={(e) => e.preventDefault()}
          className="sm:max-w-2xl border-none bg-transparent p-4 shadow-none [&>button]:hidden"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.97, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/95 p-6 shadow-2xl backdrop-blur sm:p-8"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-primary/10 to-transparent" />
            <div className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-secondary/10 blur-3xl" />

            <div className="mb-8 text-center">
              <motion.div 
                initial={{ y: -4, opacity: 0.8, scale: 0.95 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="relative mb-3 inline-flex items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 p-4"
              >
                <BookOpen className="h-12 w-12 text-secondary" />
              </motion.div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground text-wrap: balance">
                Choose Board Exam
              </h2>
              <p className="mx-auto mt-2 max-w-[520px] font-sans text-sm text-muted-foreground text-wrap: balance">
                Select the licensure exam you are preparing for to tailor your registration experience.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  form.setValue("examType", "vet");
                  setShowExamChoiceModal(false);
                  setShowFeeModal(true);
                }}
                className="group relative flex min-h-[168px] flex-col justify-between rounded-2xl border border-border bg-background/70 p-5 text-left transition-colors hover:border-secondary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/30"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="rounded-xl border border-border bg-muted/60 p-3 transition-colors group-hover:border-secondary/20 group-hover:bg-secondary/10">
                    <Stethoscope className="h-6 w-6 text-foreground transition-colors group-hover:text-secondary" />
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors group-hover:border-secondary/30 group-hover:text-secondary">
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
                <div className="mt-5">
                  <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-secondary">Veterinary Medicine</h3>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    For VLE 2026 Review Class
                  </p>
                  <div>
                    <p className="mt-3 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary">
                      Popular Program
                    </p>
                  </div>
                </div>
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  form.setValue("examType", "fisheries");
                  form.setValue("hasPreRegistered", "no");
                  form.setValue("isLatinHonor", "no");
                  setShowExamChoiceModal(false);
                  setShowFeeModal(true);
                }}
                className="group relative flex min-h-[168px] flex-col justify-between rounded-2xl border border-border bg-background/70 p-5 text-left transition-colors hover:border-secondary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/30"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="rounded-xl border border-border bg-muted/60 p-3 transition-colors group-hover:border-secondary/20 group-hover:bg-secondary/10">
                    <Fish className="h-6 w-6 text-foreground transition-colors group-hover:text-secondary" />
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors group-hover:border-secondary/30 group-hover:text-secondary">
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
                <div className="mt-5">
                  <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-secondary">Fisheries</h3>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    For FPLE 2026 Review Class
                  </p>
                  <div>
                    <p className="mt-3 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary">
                      Asynchronous Track
                    </p>
                  </div>
                </div>
              </motion.button>

            </div>

            <div className="mt-7 border-t border-border/80 pt-5 text-center">
              <p className="mx-auto max-w-[460px] text-xs font-sans text-muted-foreground">
                Your choice will customize your review path and scheduling requirements.
              </p>
            </div>
          </motion.div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default PreRegister;
