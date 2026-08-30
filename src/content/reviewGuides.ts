export type ReviewGuideFaq = {
  question: string;
  answer: string;
};

export type ReviewGuideSection = {
  id: string;
  label: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ReviewGuideStory = {
  quote: string;
  name: string;
  role: string;
};

export type ReviewProgramGuide = {
  profession: string;
  introTitle: string;
  intro: string[];
  sections: ReviewGuideSection[];
  storiesTitle: string;
  storiesIntro: string;
  stories: ReviewGuideStory[];
  enrollmentTitle: string;
  enrollmentIntro: string;
  enrollmentPath: string;
  enrollmentSteps: Array<{ title: string; description: string }>;
  price: number;
  pricingCopy: string;
  included: string[];
  faqs: ReviewGuideFaq[];
  officialSourceUrl: string;
  officialSourceLabel: string;
};

export const veterinaryReviewGuide: ReviewProgramGuide = {
  profession: "Veterinary Medicine",
  introTitle: "A focused online veterinary board exam review for future veterinarians",
  intro: [
    "The Veterinarian Licensure Examination asks candidates to connect foundational science, clinical judgment, public health, animal production, and professional responsibility. BoardPrep’s online veterinary board exam review in the Philippines turns that wide scope into a clear study sequence. DVM graduates move from concept review to question analysis, timed practice, and final exam simulation without losing sight of how the nine subjects relate to real veterinary decisions.",
  ],
  sections: [
    {
      id: "vle-overview",
      label: "Board exam overview",
      title: "Understand the structure of the Veterinarian Licensure Examination",
      paragraphs: [
        "The PRC’s current enhanced specifications organize the VMLE into Veterinary Anatomy, Veterinary Physiology, Zootechnics, Veterinary Pathology, Veterinary Pharmacology, Veterinary Medicine, Veterinary Microbiology and Public Health, Veterinary Parasitology, and Veterinary Surgery. Graduates comparing a VLE review center need all nine areas, not a narrow question bank. Examinees must distinguish similar diseases, interpret clinical clues, connect pathology with treatment, and recognize the public-health consequences of animal disease.",
      ],
    },
    {
      id: "vle-curriculum",
      label: "Course curriculum",
      title: "Build clinical reasoning across all nine veterinary subjects",
      paragraphs: [
        "The veterinary medicine review curriculum follows a systems-based path. Anatomy and physiology establish normal structure and function. Pathology, microbiology, parasitology, and pharmacology explain what changes during disease and how interventions work. Medicine and surgery bring those concepts into cases, while zootechnics connects health with nutrition, genetics, behavior, production, and environmental management.",
      ],
    },
    {
      id: "vle-requirements-schedule",
      label: "Requirements and 2026 schedule",
      title: "Prepare your PRC documents before the Veterinary filing deadline",
      paragraphs: [
        "The current PRC checklist for Veterinary Medicine identifies a PSA birth certificate, a PSA marriage certificate when applicable, a Transcript of Records with scanned photograph and the remark “For Board Examination Purposes,” and a valid NBI clearance for first-time and repeat applicants. Republic Act No. 9268 governs admission to veterinary practice, while PRC and LERIS control the current filing workflow. Confirm your qualifying Doctor of Veterinary Medicine credentials and any case-specific documents directly with PRC before paying or traveling.",
        "For 2026, PRC lists the Veterinarians Licensure Examination for November 4–6, with applications opening August 6 and closing October 5. Testing centers, room assignments, permitted items, and even published dates can be amended, so treat this as planning information and recheck the official 2026 schedule and your Notice of Admission before exam week.",
      ],
    },
    {
      id: "vle-timeline-careers",
      label: "Timeline and careers",
      title: "Use a fourteen-week clinical review plan and connect it to veterinary practice",
      paragraphs: [
        "A practical fourteen-week VLE timeline can devote the first four weeks to anatomy and physiology, the next four to pathology, microbiology, parasitology, and pharmacology, and the next three to medicine, surgery, and zootechnics. Reserve the final three weeks for mixed question drills, timed mock exams, a compact error log, and lighter recall. Case-based practice should always ask for the signalment, system, most likely mechanism, defensible intervention, and public-health implication before checking the choices.",
        "Passing can support careers in companion- and large-animal practice, livestock and poultry health, diagnostic laboratories, animal disease control and quarantine, food safety and public health, research, academe, government service, and veterinary enterprise. Philippine practice remains subject to the Veterinary Medicine Act, professional ethics, animal-welfare duties, biosecurity rules, and other current technical standards; a review course prepares for the examination but does not guarantee a license or job.",
      ],
    },
    {
      id: "vle-instructors",
      label: "Expert instructors",
      title: "Learn how licensed veterinarians and topnotchers approach difficult cases",
      paragraphs: [
        "BoardPrep instructors include licensed veterinarians, experienced lecturers, and board topnotchers who can explain why one option is defensible and the others are not. Sessions focus on diagnostic reasoning, useful recall patterns, common distractors, and the level of detail expected in a Philippine veterinary board exam review.",
      ],
    },
    {
      id: "vle-drills",
      label: "Question drills",
      title: "Practice veterinary questions with explanations that teach",
      paragraphs: [
        "Veterinary board exam question drills are arranged by subject and mixed into cumulative sets. Topic drills reveal gaps while the material is still fresh. Mixed drills train you to shift between anatomy, herd health, therapeutics, surgery, and public health, which is closer to the mental work required across a multi-day licensure exam.",
      ],
    },
    {
      id: "vle-mocks",
      label: "Mock exams",
      title: "Rehearse the pressure, pacing, and subject switching of the VMLE",
      paragraphs: [
        "TOS-based veterinary mock exams measure more than recall. Timed sets test endurance, pacing, decision-making, and the ability to leave one difficult item without losing the rest of the session. After each simulation, reviewees examine subject scores and question-level errors before choosing the next repair block.",
      ],
    },
    {
      id: "vle-ai",
      label: "AI-powered learning",
      title: "Use performance signals to decide what to study next",
      paragraphs: [
        "BoardPrep’s AI-powered analytics and decision-support tools use drill performance to help identify stronger and weaker subject areas. Instead of relying only on how confident you feel, you can compare accuracy patterns across topics and see where repeated errors deserve attention. This is especially useful when nine broad subjects compete for limited review time.",
      ],
    },
    {
      id: "vle-materials",
      label: "Study materials",
      title: "Keep a practical veterinary review library in one place",
      paragraphs: [
        "The program brings together guided review notes, recorded lectures, subject outlines, practice quizzes, answer rationales, and mock assessments. Downloadable or self-paced materials help you review offline when needed, while the learning platform keeps scheduled work and progress organized.",
      ],
    },
  ],
  storiesTitle: "How BoardPrep supported licensed veterinarians",
  storiesIntro:
    "Licensed veterinarians point to focused rationalization, instructor guidance, and responsive support.",
  stories: [
    {
      quote:
        "BoardPrep is the only review center I enrolled in. It helped me develop critical thinking skills and strategies for eliminating choices. The topnotchers who taught us, along with their question rationalizations, helped me narrow down which concepts to focus on.",
      name: "Ivanne Jairoh Melendez",
      role: "Licensed Veterinarian, Central Mindanao University",
    },
    {
      quote: "If you want to ace the board exam, choose My Board Prep!",
      name: "Kenneth James Torres II",
      role: "Licensed Veterinarian, Isabela State University",
    },
  ],
  enrollmentTitle: "How to enroll in the online veterinary review class",
  enrollmentIntro:
    "Enrollment is completed online. Before paying, review the current intake details, class access period, inclusions, and any published eligibility rules for discounts.",
  enrollmentPath: "/enroll?exam=vet",
  enrollmentSteps: [
    { title: "Open the VLE form", description: "Select Enroll and confirm Veterinary Medicine as your review program." },
    { title: "Submit your details", description: "Provide the contact, academic, and examination information requested in the secure form." },
    { title: "Review the fee", description: "Check the displayed regular fee and any current, documented discount before payment." },
    { title: "Receive access instructions", description: "Follow the confirmation steps for your BoardPrep Classroom account and review schedule." },
  ],
  price: 10999,
  pricingCopy:
    "The regular Veterinary Medicine review program fee is ₱10,999. The page and enrollment form show the payable amount before registration is completed. Any active promotion, reservation credit, or qualified discount should appear in the enrollment flow; confirm the final amount there before sending payment.",
  included: [
    "Live and recorded veterinary review sessions",
    "Guided notes and subject-based study materials",
    "Veterinary question drills with rationales",
    "TOS-based mock exams and performance feedback",
    "BoardPrep Classroom access for the stated program period",
  ],
  faqs: [
    {
      question: "What subjects are covered in the veterinary board exam review?",
      answer:
        "The program covers the nine current VMLE subject areas: Anatomy, Physiology, Zootechnics, Pathology, Pharmacology, Medicine, Microbiology and Public Health, Parasitology, and Surgery.",
    },
    {
      question: "Is the VLE review class fully online?",
      answer:
        "Yes. The program combines online live sessions, recorded lessons, self-paced materials, question drills, and scheduled assessments through the BoardPrep learning platform.",
    },
    {
      question: "Are veterinary mock exams and answer rationales included?",
      answer:
        "Yes. Reviewees receive topic drills, mixed practice, answer explanations, and TOS-based mock examinations designed to build pacing and clinical reasoning.",
    },
    {
      question: "How much is the BoardPrep veterinary review class?",
      answer:
        "The regular program fee is ₱10,999. Check the enrollment form for the final payable amount and any currently available, documented discount.",
    },
    {
      question: "When should I begin preparing for the VLE?",
      answer:
        "Start early enough to complete one full subject cycle, diagnose weak areas, and take multiple timed simulations. Your personal start date should reflect your baseline and the official PRC schedule.",
    },
  ],
  officialSourceUrl:
    "https://www.prc.gov.ph/index.php/article/adjustments-order-subjects-be-administered-starting-october-2025-vmle",
  officialSourceLabel: "PRC veterinary examination subject information",
};

export const fisheriesReviewGuide: ReviewProgramGuide = {
  profession: "Fisheries",
  introTitle: "An online Fisheries board exam review grounded in aquatic systems",
  intro: [
    "The Fisheries Professional Licensure Examination measures how well a graduate can connect aquatic ecology, production, harvesting, and post-harvest handling. BoardPrep’s online Fisheries board exam review in the Philippines gives each field its own study path, then brings the topics together through applied questions. That matters because decisions about stocking, gear, habitats, water quality, processing, and resource governance rarely exist in isolation.",
    "Candidates looking for an FPLE review center can use recorded lessons, guided materials, question drills, mock exams, and performance analytics from any location with platform access. The structure suits new BS Fisheries graduates, repeat examinees, and working learners who need a clear plan for a broad, technical examination.",
  ],
  sections: [
    {
      id: "fple-overview",
      label: "Board exam overview",
      title: "Know the four fields of the Fisheries Professional Licensure Examination",
      paragraphs: [
        "Under the Philippine Fisheries Profession Act and the PRC’s enhanced specifications, the FPLE covers Aquatic Resources and Ecology, Aquaculture, Capture Fisheries, and Post-Harvest Fisheries. Each field tests scientific knowledge and its application to Philippine waters, communities, production systems, food quality, and sustainable resource use.",
      ],
    },
    {
      id: "fple-curriculum",
      label: "Course curriculum",
      title: "Move from aquatic ecology to safe, market-ready fisheries products",
      paragraphs: [
        "Aquatic Resources and Ecology reviews limnology, oceanography, aquatic biodiversity, population concepts, habitat assessment, conservation, and fisheries governance. Aquaculture covers species biology, hatchery operations, feeds and nutrition, water-quality management, culture systems, aquatic animal health, and farm planning. These subjects explain how ecosystems and managed production respond to human decisions.",
        "Capture Fisheries examines fishing gears, vessels, navigation, fishing methods, stock assessment, and responsible harvest. Post-Harvest Fisheries follows the catch through handling, spoilage control, processing, preservation, quality assurance, food safety, packaging, and utilization. The curriculum links these four areas so reviewees can solve questions that cross the shoreline, farm, vessel, laboratory, and processing floor.",
      ],
    },
    {
      id: "fple-requirements-schedule",
      label: "Requirements and 2026 schedule",
      title: "Match your Fisheries degree records to the PRC application checklist",
      paragraphs: [
        "The current PRC requirements identify a BS degree in a Fisheries field with curriculum coverage in Aquaculture, Capture Fisheries, Post-Harvest Fisheries, and Aquatic Resources and Ecology. The checklist also includes PSA civil-registry documents, a TOR with scanned photograph and the remark “For Board Examination Purposes,” and two certificates of good moral character from accepted sources. Applicants with a different graduate fisheries qualification or foreign records should ask PRC whether additional Board evaluation or CHED documentation applies.",
        "The 2026 PRC schedule places the Fisheries Professionals Licensure Examination on October 1–2. Applications are listed to open July 3 and close September 1. Use those dates to work backward, but verify later resolutions, testing-center changes, room assignments, and examination-day instructions on the PRC site and in LERIS rather than relying on a saved screenshot.",
      ],
    },
    {
      id: "fple-timeline-careers",
      label: "Timeline and careers",
      title: "Build a ten-week four-field plan for Philippine fisheries practice",
      paragraphs: [
        "A ten-week Fisheries review timeline can use two weeks each for aquatic resources and ecology, aquaculture, capture fisheries, and post-harvest fisheries. The final two weeks should integrate the four fields through mixed sets and full mock exams. Maintain a comparison sheet for species, systems, gears, water-quality responses, preservation methods, hazards, and governing principles; then turn every missed question into a short field or processing decision you can explain without seeing the choices.",
        "Licensed Fisheries professionals work across hatcheries and aquaculture farms, capture operations, post-harvest processing and quality assurance, coastal and inland resource management, conservation, research, local government, DA-BFAR programs, education, consulting, and fisheries enterprises. Republic Act No. 11398 regulates the profession, and responsible work must reflect Philippine fisheries law, food-safety requirements, environmental rules, and sustainable-resource standards.",
      ],
    },
    {
      id: "fple-instructors",
      label: "Expert instructors",
      title: "Study with fisheries professionals who can connect theory to field practice",
      paragraphs: [
        "Licensed fisheries professionals and board topnotchers lead discussions with examples drawn from aquaculture operations, capture systems, aquatic resource work, and post-harvest practice. They explain technical language, show where closely related concepts diverge, and demonstrate how to read questions that contain more information than you need.",
      ],
    },
    {
      id: "fple-drills",
      label: "Question drills",
      title: "Turn fisheries concepts into accurate exam decisions",
      paragraphs: [
        "FPLE question drills begin with focused sets for aquaculture, capture fisheries, post-harvest, and aquatic resources. Later sets mix the four fields so you must identify the real issue before selecting an answer. Questions may ask you to interpret water-quality conditions, choose a culture response, evaluate fishing gear, or protect product quality after harvest.",
      ],
    },
    {
      id: "fple-mocks",
      label: "Mock exams",
      title: "Test endurance across science, operations, and resource management",
      paragraphs: [
        "TOS-based Fisheries mock exams reproduce the need to move between ecological principles, farm management, harvesting technology, and food handling. Timed practice shows whether you are spending too long on computations or changing correct answers without evidence. It also reveals which field loses accuracy as the session progresses.",
      ],
    },
    {
      id: "fple-ai",
      label: "AI-powered learning",
      title: "Let performance analytics expose uneven preparation",
      paragraphs: [
        "BoardPrep’s AI-powered analytics can organize drill results into useful performance signals. A reviewee who feels comfortable with aquaculture may discover that water-quality items are strong while feeds, disease management, or hatchery questions remain inconsistent. Similar patterns can appear within capture, ecology, and post-harvest work.",
        "These signals help you decide what to review and give instructors better context for feedback. They do not replace professional judgment or the official TOS. The practical value is prioritization: use limited study hours on demonstrated gaps, then collect fresh evidence through another focused drill.",
      ],
    },
    {
      id: "fple-materials",
      label: "Study materials",
      title: "Create a usable fisheries reference set for daily review",
      paragraphs: [
        "BoardPrep combines recorded lectures, topic notes, review outlines, practice questions, rationales, and mock assessments. Materials are organized around the four examination fields, which makes it easier to plan a weekly rotation without abandoning cumulative recall.",
      ],
    },
  ],
  storiesTitle: "A licensed Fisheries professional’s experience",
  storiesIntro:
    "For Fisheries examinees, useful practice must be technically equipped and relevant to the profession. One BoardPrep reviewee highlighted exactly that after earning a professional license.",
  stories: [
    {
      quote: "Very helpful with well-equipped questionnaires! I highly recommend this platform.",
      name: "Mhegly Burato",
      role: "Licensed Fisheries Professional, Bohol Island State University",
    },
  ],
  enrollmentTitle: "How to enroll in the Fisheries review class",
  enrollmentIntro:
    "The registration path is online and specific to the Fisheries program. Read the current program details before submitting payment so the schedule and access period fit your preparation plan.",
  enrollmentPath: "/enroll?exam=fisheries",
  enrollmentSteps: [
    { title: "Choose Fisheries", description: "Open the enrollment form with the Fisheries examination option selected." },
    { title: "Complete the form", description: "Enter the required contact, school, graduation, and examination information." },
    { title: "Confirm the ₱999 fee", description: "Review the stated program price and payment instructions before continuing." },
    { title: "Activate your access", description: "Use the confirmation instructions to enter the learning platform and begin orientation." },
  ],
  price: 999,
  pricingCopy:
    "The Fisheries Professional Licensure Examination review program is priced at ₱999. The fee shown here matches the regular amount displayed in the enrollment flow. Before paying, confirm the active class schedule, access period, inclusions, and final amount on the registration form.",
  included: [
    "Recorded Fisheries review lectures",
    "Study materials for all four FPLE fields",
    "Topic and mixed Fisheries question drills",
    "Answer rationales and performance analytics",
    "TOS-based mock examinations",
  ],
  faqs: [
    {
      question: "What subjects are included in the Fisheries board exam review?",
      answer:
        "The course covers Aquatic Resources and Ecology, Aquaculture, Capture Fisheries, and Post-Harvest Fisheries, the four fields identified in the profession law and PRC specifications.",
    },
    {
      question: "Does the FPLE review include computations and applied questions?",
      answer:
        "Yes. Lessons and drills address quantitative work, process decisions, field situations, and concept questions across production, harvesting, ecology, and post-harvest handling.",
    },
    {
      question: "Can working graduates take the Fisheries review online?",
      answer:
        "Yes. Recorded lessons and self-paced materials support flexible study, while scheduled activities and mock exams provide structure and accountability.",
    },
    {
      question: "How much is the online Fisheries board exam review?",
      answer:
        "The listed program fee is ₱999. Confirm the current schedule, access period, payment instructions, and final amount in the enrollment form before paying.",
    },
    {
      question: "Where should I confirm official FPLE dates and requirements?",
      answer:
        "Use the Professional Regulation Commission website for the current examination schedule, application deadlines, testing centers, and documentary requirements.",
    },
  ],
  officialSourceUrl:
    "https://www.prc.gov.ph/sites/default/files/2024-01%20published-%20Enhanced%20TOS%20Fisheries%20Professionals.pdf",
  officialSourceLabel: "PRC enhanced Fisheries examination specifications",
};

export const agricultureReviewGuide: ReviewProgramGuide = {
  profession: "Agriculture",
  introTitle: "A practical online Agriculturists Licensure Exam review",
  intro: [
    "The Agriculturists Licensure Examination covers a food and farming system from several angles: plants, pests, animals, soils, markets, and rural communities. BoardPrep’s online agriculture board exam review in the Philippines organizes those areas into manageable study blocks, then reconnects them through applied questions. Reviewees learn to move from scientific principles to production choices, calculations, economic decisions, and extension work.",
  ],
  sections: [
    {
      id: "agle-overview",
      label: "Board exam overview",
      title: "Prepare for the six connected areas of the Agriculture board exam",
      paragraphs: [
        "The current scope includes Crop Science, Crop Protection, Animal Science, Soil Science, Agricultural Economics and Marketing, and Agricultural Extension and Communication. A useful AgLE review center must cover all six areas and the PRC’s expected cognitive levels. Examinees therefore need factual recall, calculation skill, interpretation, and the ability to apply principles to a production or community setting.",
      ],
    },
    {
      id: "agle-curriculum",
      label: "Course curriculum",
      title: "Cover production science, farm decisions, and agricultural communication",
      paragraphs: [
        "Crop Science moves from plant growth and crop classification to production, seed systems, improvement, biotechnology, and sustainability. Crop Protection addresses entomology, plant pathology, weed science, integrated pest management, pesticide use, and invasive species. Soil Science covers formation, physical and chemical properties, fertility, conservation, classification, biology, and fertilizer computation.",
        "Animal Science includes anatomy, physiology, genetics, breeding, nutrition, health, and major livestock and poultry systems. Agricultural Economics and Marketing develops demand, supply, production, costs, market structures, policy, development, agribusiness, and entrepreneurship. Extension completes the curriculum through communication, adult learning, technology adoption, program planning, evaluation, and community organizing.",
      ],
    },
    {
      id: "agle-requirements-schedule",
      label: "Requirements and 2026 schedule",
      title: "Confirm degree coverage and current Agriculturists filing documents",
      paragraphs: [
        "The PRC checklist accepts a BS Agriculture degree or a related recognized baccalaureate program with the required foundation coursework: two Crop Science subjects, two Crop Protection subjects, two Animal Science subjects, and one subject each in Soil Science, Agricultural Economics and Marketing, and Agricultural Extension and Communication, or their equivalents. Current documentary items include PSA civil-registry records, a TOR marked “For Board Examination Purposes,” a valid government ID, and two certificates of good moral character. Foreign-study equivalency and special cases should be confirmed with PRC and CHED.",
        "PRC lists the 2026 Agriculturists Licensure Examination for December 1–3, with filing from September 2 through November 3. Republic Act No. 12215, the Philippine Agriculturists Act enacted in 2025, now supplies the profession’s statutory framework. Candidates should still check implementing rules, later PRC resolutions, testing-center notices, room assignments, and allowed examination items before relying on any fixed date or checklist.",
      ],
    },
    {
      id: "agle-timeline-careers",
      label: "Timeline and careers",
      title: "Use a twelve-week six-subject plan that reflects Philippine agriculture",
      paragraphs: [
        "A twelve-week AgLE timeline can give roughly one focused week to each subject, then repeat the cycle at a higher level with computations, situational questions, and mixed sets. Crop and soil topics should be linked through nutrient and production decisions; animal science through health, nutrition, and enterprise; economics through costs and markets; and extension through communication and adoption. Reserve the final two weeks for full mocks, error classification, formula recall, and a realistic exam-day routine.",
        "Registered agriculturists may work in crop and livestock production, soil and crop-protection services, agribusiness and marketing, agricultural extension, research, education, government programs, rural development, food and input enterprises, consulting, and entrepreneurship. RA 12215 emphasizes competent, ethical practice, continuing professional development, climate resilience, food and nutrition security, and responsible management of land, water, and biodiversity—useful standards for interpreting both exam questions and career decisions.",
      ],
    },
    {
      id: "agle-instructors",
      label: "Expert instructors",
      title: "Learn from licensed agriculturists who can explain the whole system",
      paragraphs: [
        "Agriculture review instructors include licensed professionals and board topnotchers with knowledge across research, production, economics, and extension. They break down long problem stems, demonstrate calculations, and show how a principle changes when the crop, animal, soil, market, or audience changes.",
      ],
    },
    {
      id: "agle-drills",
      label: "Question drills",
      title: "Practice the calculations and judgment expected from an agriculturist",
      paragraphs: [
        "Agriculturist board exam question drills combine direct concepts, computations, data interpretation, and farm or community situations. Focused sets help you isolate soil fertility, crop protection, animal nutrition, marketing, or extension gaps. Mixed sets force you to recognize which discipline should guide the decision.",
      ],
    },
    {
      id: "agle-mocks",
      label: "Mock exams",
      title: "Simulate a broad exam without letting one subject dominate",
      paragraphs: [
        "TOS-aligned Agriculture mock exams distribute work across the six subject areas and challenge you to maintain accuracy while changing modes of thinking. One group of items may require biological reasoning, the next a computation, and the next a communication or market judgment. Timed practice trains that mental transition.",
      ],
    },
    {
      id: "agle-ai",
      label: "AI-powered learning",
      title: "Use analytics to balance six very different subjects",
      paragraphs: [
        "BoardPrep’s AI-powered performance analytics help organize results across the Agriculture question bank. The system can make an uneven profile easier to see, such as strong crop production recall paired with weak fertilizer calculations, or sound animal science knowledge paired with inconsistent economics answers.",
      ],
    },
    {
      id: "agle-materials",
      label: "Study materials",
      title: "Turn a wide agriculture syllabus into a compact working system",
      paragraphs: [
        "The online AgLE review includes guided notes, lecture recordings, topic outlines, practice quizzes, rationales, and mock assessments. Materials are grouped by the six examination areas, while cumulative activities keep older topics active as the course progresses.",
      ],
    },
  ],
  storiesTitle: "What successful Agriculture reviewees found useful",
  storiesIntro:
    "Licensed agriculturists point to question quality, rationalization, and focused review.",
  stories: [
    {
      quote:
        "BoardPrep questions were all comprehensive. I was able to rationalize many questions from the app and apply them during the actual board exam. I’m truly grateful.",
      name: "Brian Calpito",
      role: "Registered Agriculturist, University of Southern Mindanao",
    },
    {
      quote: "I truly used it as my refresher, and it was a huge help to me.",
      name: "Dominic Millo",
      role: "Registered Agriculturist, Central Luzon State University",
    },
  ],
  enrollmentTitle: "How to enroll in the Agriculture review class",
  enrollmentIntro:
    "Start through the Agriculture-specific registration form. Check the published class dates, access period, fee conditions, and required details before completing your payment.",
  enrollmentPath: "/enroll?exam=agri",
  enrollmentSteps: [
    { title: "Select the AgLE program", description: "Open enrollment with Agriculture selected as the intended licensure examination." },
    { title: "Provide your information", description: "Complete the contact, education, examination, and registration fields requested." },
    { title: "Choose the applicable fee", description: "Confirm whether the regular rate or another documented registration condition applies." },
    { title: "Follow the confirmation", description: "Complete payment instructions and use the issued details to access the online class." },
  ],
  price: 6999,
  pricingCopy:
    "The regular Agriculture review class fee is ₱6,999. The enrollment flow may show a documented pre-registration balance or another eligible rate when applicable. Review the selected fee, inclusions, and payment instructions carefully; the final amount displayed for your registration should match the condition you selected.",
  included: [
    "Live and recorded Agriculture review lessons",
    "Guided notes for all six AgLE areas",
    "Concept, calculation, and situational question drills",
    "Answer rationales and performance tracking",
    "TOS-aligned mock exams and final coaching",
  ],
  faqs: [
    {
      question: "What subjects does the Agriculture board exam review cover?",
      answer:
        "It covers Crop Science, Crop Protection, Animal Science, Soil Science, Agricultural Economics and Marketing, and Agricultural Extension and Communication.",
    },
    {
      question: "Are calculations included in the AgLE review?",
      answer:
        "Yes. Lessons and practice include relevant soil fertility, pesticide, production, economics, and other quantitative work alongside concept and situational questions.",
    },
    {
      question: "Are the Agriculture mock exams aligned with the PRC TOS?",
      answer:
        "The program uses TOS-aligned mock assessments to distribute practice across the examination areas and expected levels of thinking.",
    },
    {
      question: "How much is the BoardPrep Agriculture review class?",
      answer:
        "The regular fee is ₱6,999. If another documented registration condition applies, confirm the selected rate and final payable amount in the enrollment form.",
    },
    {
      question: "Can I take the Agriculturists Licensure Exam review online?",
      answer:
        "Yes. BoardPrep combines online lessons, recorded access, guided materials, question drills, analytics, and scheduled mock examinations.",
    },
  ],
  officialSourceUrl:
    "https://www.prc.gov.ph/sites/default/files/2024-04%20published%20with%20annexes_Agriculture_0.pdf",
  officialSourceLabel: "PRC enhanced Agriculturists examination specifications",
};
