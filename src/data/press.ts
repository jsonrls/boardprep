export type PressContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type PressPost = {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  sourceUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  content: PressContentBlock[];
};

export const PRESS_POSTS: PressPost[] = [
  {
    id: "microcredentials-and-technology",
    title:
      "Microcredentials and Technology: The Urgency for Schools to Shape the Future of Learning",
    excerpt:
      "Work is changing faster than traditional curricula can keep up. Microcredentials can complement degrees with shorter, verifiable skill units, especially when powered by the right technology to track competencies and issue trusted credentials.",
    author: "BoardPrep Solutions",
    date: "February 2026",
    category: "EdTech",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2670&auto=format&fit=crop",
    readTime: "10 min read",
    content: [
      {
        type: "p",
        text: "A decade ago, there were no prompt engineers. Sustainability managers were uncommon. Cybersecurity experts were largely unknown in many companies. Currently, these roles are widespread - and they are already transforming into something different.",
      },
      {
        type: "p",
        text: "The situation confronting educators is this: by the time a curriculum update is finalized, the careers students are training for may have significantly altered.",
      },
      {
        type: "p",
        text: "This is now extended beyond just isolated tech positions. In every sector - healthcare, finance, manufacturing, and creative services - automation and digital transformation are altering the professional environment. The World Economic Forum currently recognizes skills shortages as a significant risk to worldwide economic stability. This is more than just an educational issue. An economic crisis is on the horizon.",
      },
      {
        type: "h2",
        text: "The strengths of traditional degrees - and their limitations",
      },
      {
        type: "p",
        text: "Academic programs continue to be important. They foster critical thinking, cultivate extensive subject knowledge, and create well-rounded practitioners. Their worth is not in doubt.",
      },
      {
        type: "p",
        text: "What they find difficult to do, however, is shift rapidly. A four-year program created in 2021 is now producing graduates for a job market that is vastly different from the initial expectations. By the time curriculum committees gather, assess, authorize, and execute modifications, the market has changed once more.",
      },
      {
        type: "p",
        text: "Today, employers are less concerned about whether a candidate possesses a degree. They are inquiring: Is this individual capable of performing the tasks we require at this moment?",
      },
      {
        type: "h2",
        text: "Microcredentials as a flexibility resource for institutions",
      },
      {
        type: "p",
        text: "Microcredentials are not designed to substitute degree programs. They are intended to enhance an institution's complete educational offerings to be more applicable and adaptable.",
      },
      {
        type: "p",
        text: "These targeted, brief learning units impart particular, measurable abilities. Learners can obtain them in a portion of the time. Employers can easily confirm them. Additionally, institutions can revise them as the market changes - without the need to wait years for a complete program overhaul.",
      },
      {
        type: "p",
        text: "When AI literacy is expected in the workplace, a microcredential can fulfill that need. When sustainable business practices become necessary, a specific module can be created. When local businesses indicate new skill requirements, educational institutions can react in months instead of years. Education transforms into an ongoing journey instead of being limited to just a four-year period.",
      },
      { type: "h2", text: "Reasons for immediate action in Philippine schools" },
      {
        type: "p",
        text: "The urgency is particularly evident in the context of the Philippines. EDCOM II research emphasizes ongoing issues: learning poverty, insufficient foundational skills, and a gap between basic education, TVET, and higher education.",
      },
      {
        type: "p",
        text: "The result is an expanding skills gap. An increasing number of students are completing their degrees, yet job prospects are not rising correspondingly. In numerous instances, education does not convert into opportunity.",
      },
      {
        type: "p",
        text: "Microcredentials provide a functional link - one that establishes defined, industry-relevant routes connecting current programs to real job criteria. They promote continuous education, which is essential in the current economy.",
      },
      {
        type: "p",
        text: "The policy framework is also prepared to encourage this transition. Republic Act No. 12313 now allows for stackable learning credentials that are in accordance with the Philippine Qualifications Framework. The base is established. The issue is whether institutions will act decisively enough to capitalize on it.",
      },
      { type: "h2", text: "Technology as the foundation of a scalable system" },
      {
        type: "p",
        text: "Microcredentials are effective at scale only when backed by appropriate technology. Lacking this, short courses with printed certificates stay merely that. Technology enables institutions to create a cohesive learning ecosystem.",
      },
      {
        type: "p",
        text: "An appropriate platform allows organizations to monitor true competency achievement instead of just attendance, utilize AI to detect skill deficiencies and customize learning journeys, produce immediate progress reports for students and employers alike, provide verifiable digital credentials that learners can maintain throughout their careers, and align educational programs directly with job market needs.",
      },
      {
        type: "p",
        text: "Technology unifies disjointed training into a comprehensive, dependable skills recognition system - one that both employers and learners can trust.",
      },
      {
        type: "p",
        text: "This is not about selecting between the old and the new.",
      },
      {
        type: "p",
        text: "Organizations can retain their degree offerings and maintain conventional education. The objective is to enhance schools' resilience, responsiveness, and connection to the realities students will encounter after graduation.",
      },
      {
        type: "p",
        text: "Microcredentials enhance current programs by swiftly addressing gaps, building employment pathways, and providing learners with relevant skills from the outset. They shape education to function as the current economy demands: consistently, adaptively, and with a strong emphasis on results.",
      },
      { type: "h2", text: "The real question: how fast can we adapt?" },
      {
        type: "p",
        text: "Risks related to skills are no longer just hypothetical. They are reflected in job statistics, in employer responses, and in the experiences of graduates who finish school without a defined direction.",
      },
      {
        type: "p",
        text: "Institutions need to consider not if microcredentials are essential. It is the speed of their implementation, the effectiveness of technology in making them available, and the ease with which they can be incorporated into existing structures.",
      },
      {
        type: "p",
        text: "As decisions are being considered, the job market continues to evolve - and students rely on their institutions to stay aligned.",
      },
      { type: "h2", text: "References" },
      {
        type: "ul",
        items: [
          "World Economic Forum. The Global Risks Report 2024. Skills and labor shortages are identified among the most significant near-term global risks affecting economic stability and growth.",
          "Second Congressional Commission on Education (EDCOM II). EDCOM II Final Report. Findings highlight high learning poverty, skills mismatch, and weak vertical pathways across basic education, TVET, and higher education in the Philippines.",
          "Republic Act No. 12313 (2025). Lifelong Learning Development Framework Act. The law institutionalizes lifelong learning, strengthens the Philippine Qualifications Framework, and supports flexible and stackable learning pathways, including microcredentials.",
        ],
      },
      { type: "h2", text: "Interested in exploring this for your institution?" },
      {
        type: "p",
        text: "Board Prep Solutions invites school administrators, academic leaders, and educators to start the conversation. Reach out to learn how the right platform can help your school build a more agile, future-ready learning ecosystem - one that works for your students and your community.",
      },
    ],
  },
  {
    id: "boardprep-lite-launch",
    title: "Meet BoardPrep Lite: The Smartest Way to Review Anywhere",
    excerpt:
      "BoardPrep introduces BoardPrep Lite, a flashcard-style mobile app available on the App Store and Google Play, designed to help students review smarter, faster, and anytime they need it.",
    author: "BoardPrep Solutions",
    date: "March 2026",
    category: "Product Launch",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2670&auto=format&fit=crop",
    readTime: "5 min read",
    appStoreUrl: "https://apps.apple.com/ca/app/boardprep-lite/id6756837074",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.boardprepsolutionsincorporated.boardpreprlite",
    content: [
      {
        type: "p",
        text: "Preparing for the board exam can sometimes feel overwhelming, especially when you are faced with long notes, thick textbooks, and limited time to study. To make review more accessible and engaging, BoardPrep introduces BoardPrep Lite, the newest addition to the BoardPrep review ecosystem. Available on both the App Store and Google Play, BoardPrep Lite is designed to help students review smarter, faster, and anytime they need it.",
      },
      { type: "h2", text: "A Simple and Interactive Way to Study" },
      {
        type: "p",
        text: "BoardPrep Lite uses a flashcard-style learning system that makes studying easy and interactive. When using the app, a question appears instantly on your screen and you can reveal the answer with a tap. After reviewing the answer, you simply swipe right if you answered correctly or swipe left if you got the question wrong. The app records your responses so you can monitor your progress and identify which topics need more practice.",
      },
      { type: "h2", text: "A Review Experience That Feels Familiar" },
      {
        type: "p",
        text: "One of the most engaging aspects of BoardPrep Lite is its intuitive swipe interface. The swiping action feels similar to how people interact with modern mobile apps, making the experience natural and easy to use. It may feel like you are casually scrolling through an app, but in reality, you are strengthening your memory and sharpening your test-taking skills for the board exam.",
      },
      { type: "h2", text: "Hundreds of Practice Questions — Free for Everyone" },
      {
        type: "p",
        text: "Currently, BoardPrep Lite is free to use, giving students access to hundreds of practice questions across several professional fields. The app already includes question sets for:",
      },
      {
        type: "ul",
        items: [
          "Veterinary Medicine",
          "Agriculture",
          "Fisheries",
          "Food Technology",
          "Psychology",
        ],
      },
      {
        type: "p",
        text: "This makes it a valuable study companion for students and professionals preparing for licensure examinations.",
      },
      { type: "h2", text: "Create Your Own Flashcards" },
      {
        type: "p",
        text: "Another powerful feature of BoardPrep Lite is the ability to create your own flashcards. Users can add their own questions and answers, allowing them to build personalized study decks based on their own review materials. This transforms the app into a personal review buddy that can support daily study habits, quick reviews, and focused preparation before exams.",
      },
      { type: "h2", text: "Part of the BoardPrep Review Ecosystem" },
      {
        type: "p",
        text: "BoardPrep Lite is part of BoardPrep's continuing effort to innovate how students prepare for licensure examinations. By offering a mobile-first learning tool focused on quick recall and continuous practice, BoardPrep helps students maximize their review time and build stronger mastery of key concepts.",
      },
      { type: "h2", text: "More Questions Coming Soon" },
      {
        type: "p",
        text: "While the app already provides a large set of free questions, additional content may become available through optional upgrades in the future. This will allow learners who want deeper practice to unlock more questions and expand their study materials as they prepare for their exams.",
      },
      { type: "h2", text: "Download BoardPrep Lite Today 🚀" },
      {
        type: "p",
        text: "BoardPrep Lite is now available for download on both the App Store and Google Play. With its simple design, engaging swipe-based interface, and growing library of questions, it offers a modern and practical way to review anytime and anywhere.",
      },
      {
        type: "p",
        text: "Sometimes, getting closer to passing the board exam can start with something as simple as a swipe. 🚀",
      },
    ],
  },
];

export function getPressPostById(id: string) {
  return PRESS_POSTS.find((p) => p.id === id);
}

