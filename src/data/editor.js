import images from "./images";

// Editor in Chief. Fill in the social URLs (leave "" to hide an icon).
export const EDITOR = {
  name: "Mauduana A. Menyah",
  title: "Editor in Chief",
  image: images.mauduana,
  bio: [
    "Welcome to the Editor's Corner, the Foundation's home for newsletters, stories and updates from the Hulede scholarship family.",
    "Here we celebrate our scholars, share the work happening on and off campus, and keep our supporters close to the impact they make possible.",
  ],
  socials: {
    facebook: "",
    instagram: "",
    x: "",
    linkedin: "",
    email: "huledefoundation@gmail.com",
  },
};

export const MORE_STORIES_URL = "https://drive.google.com/drive/folders/1PBSNs1xkpw-8q_5Qj_bQ9vdLde8__tVQ";

const S = (f) => `/images/stories/${f}.jpg`;

// Scholar stories. Order = order on the Editor's Corner page
// (first = featured card, next 3 = side rows, the rest = "Past Editions" grid).
// body blocks: { p }, { quote }, { img: <index in images>, caption }
export const STORIES = [
  {
    slug: "when-the-teacher-was-away",
    title: "When the Teacher Was Away, a Scholar Stepped In",
    tag: "Community Service",
    name: "Ebenezer Koosmon",
    role: "Level 500 Doctor of Pharmacy, KNUST",
    summary: "Two weeks, three classes and a song to remember the first twenty chemical elements.",
    cover: "/images/COM_1.jpg",
    facts: [
      ["Programme", "Doctor of Pharmacy (Level 500)"],
      ["Service", "Integrated Science facilitator"],
      ["Where", "Mega Choice School, Ashongman Estate"],
      ["Duration", "Two weeks"],
    ],
    lede: "Some scholars step in to ensure learning never stops. This is one of those stories.",
    images: [
      { src: "/images/COM_1.jpg", alt: "A Hulede scholar guiding pupils during community service" },
      { src: S("ebenezer-1"), alt: "Ebenezer Koosmon during his community service" },
      { src: S("ebenezer-2"), alt: "Ebenezer Koosmon in his blue Hulede Scholar shirt" },
      { src: S("ebenezer-3"), alt: "Ebenezer Koosmon on a cleared footpath" },
      { src: S("ebenezer-4"), alt: "Ebenezer Koosmon working alongside a farmer" },
    ],
    body: [
      { p: "Meet Ebenezer Koosmon, a Level 500 Doctor of Pharmacy student at KNUST and a Hulede Foundation scholar. For his community service, he dedicated two weeks to Mega Choice School in Ashongman Estate, serving as an Integrated Science facilitator." },
      { p: "When the school's JHS Integrated Science teacher was unavailable, Ebenezer's timely intervention ensured continuity in the students' academic development. He was given the official timetable and assigned to teach JHS 1, JHS 2, and JHS 3, while also serving as the temporary class teacher for JHS 1." },
      { img: 0, caption: "Hulede scholars working hands-on with pupils during community service." },
      { p: "His approach was highly interactive. He used real-life scenarios to explain abstract concepts, created mnemonics, and even introduced songs to help students memorize the first twenty chemical elements." },
      { quote: "The students became highly engaged, their performance improved, and they even gave him a nickname within two days." },
      { p: "Ebenezer's story is a beautiful reminder that knowledge becomes more meaningful when it is shared. The Hulede Foundation is proud to celebrate him for his dedication." },
    ],
    gallery: [1, 2, 3, 4],
    href: "https://web.facebook.com/share/p/1A1Wuw7hzo/",
  },
  {
    slug: "potholes-and-classrooms",
    title: "From Classrooms to Potholes: Loyce's 85 Hours of Service",
    tag: "Community Service",
    name: "Loyce Kusi",
    role: "Real Estate student, KNUST",
    summary: "She taught two combined classes by day, then picked up a shovel to fix her street.",
    cover: S("loyce-1"),
    facts: [
      ["Programme", "Real Estate, KNUST"],
      ["Service", "Teaching and community road repair"],
      ["Where", "Sky Limit Educational Complex and surrounding community"],
      ["Duration", "85 hours"],
    ],
    lede: "Some scholars serve both inside and outside the classroom. This is one of those stories.",
    images: [
      { src: S("loyce-1"), alt: "Loyce Kusi with a shovel on the road she repaired" },
      { src: S("loyce-2"), alt: "Loyce Kusi next to a filled pothole" },
    ],
    body: [
      { p: "Meet Loyce Kusi, a Real Estate student at KNUST and a Hulede Foundation scholar. For her community service, she dedicated 85 hours to Sky Limit Educational Complex and the surrounding community." },
      { p: "Loyce spent her days teaching pupils, combining two classes and working closely with teachers to manage the classroom and make effective use of available materials." },
      { quote: "She noticed that her street had potholes that caused inconvenience. Loyce took it upon herself to fill them." },
      { p: "But she also took initiative outside the school walls. By filling the potholes herself, she improved road conditions and enhanced safety for pedestrians and motorists." },
      { img: 1, caption: "A filled pothole on the road Loyce repaired." },
      { p: "The impact of her service was felt by both the pupils, who became more active and confident in their lessons, and the community, which benefited from a safer road." },
      { p: "Loyce's story is a beautiful reminder that true service is about identifying needs and meeting them. The Hulede Foundation is proud to celebrate her." },
    ],
    gallery: [],
    href: "https://web.facebook.com/share/p/1GzZvAo4gd/",
  },
  {
    slug: "science-in-service",
    title: "Science in Service: Tracking Parasites in the Field",
    tag: "Research Service",
    name: "Jephthah Adangsua",
    role: "Biological Science student, KNUST",
    summary: "Over 40 hours alongside Noguchi Memorial Institute researchers in Navrongo.",
    cover: S("jephthah-1"),
    facts: [
      ["Programme", "Biological Science, KNUST"],
      ["Service", "Field research support"],
      ["Where", "Noguchi Memorial Institute for Medical Research, Navrongo"],
      ["Duration", "40+ hours, October to November 2025"],
    ],
    lede: "Some scholars use science to serve humanity. This is one of those stories.",
    images: [
      { src: S("jephthah-1"), alt: "Jephthah Adangsua preparing samples in the field" },
      { src: S("jephthah-2"), alt: "Jephthah Adangsua working in the lab" },
    ],
    body: [
      { p: "Meet Jephthah Adangsua, a Biological Science student at KNUST and a Hulede Foundation scholar. For his community service, he dedicated over 40 hours to supporting field research with the Noguchi Memorial Institute for Medical Research in Navrongo." },
      { p: "From October to November 2025, Jephthah worked with scientists researching schistosome parasites in cattle and humans. He collected urine and fecal samples from communities, prepared samples for testing, learned to use the microscope to identify parasites, and helped with field logistics." },
      { img: 0, caption: "Preparing samples in the field." },
      { p: "He faced challenges like basic working conditions, delicate sample handling, and long days. He overcame them by listening carefully, following instructions exactly, and working closely with the experienced research team." },
      { quote: "For Jephthah, it was a real classroom. He learned practical lab skills and gained a deeper respect for how science can solve health problems." },
      { p: "The impact was significant. His help meant samples could be processed faster, and the study could move forward." },
      { img: 1, caption: "Processing samples in the lab." },
      { p: "His story is a beautiful reminder that science and service work hand in hand. The Hulede Foundation is proud to celebrate him." },
    ],
    gallery: [],
    href: "https://web.facebook.com/share/p/1QQfqarYSV/",
  },
  {
    slug: "mentorship-that-changes-lives",
    title: "Mentorship That Changes Lives: A Week of Guidance in Hemang",
    tag: "Outreach",
    name: "Abeka Shadrack",
    role: "B.A. Publishing Studies student, KNUST",
    summary: "Daily moral and spiritual sessions for pupils in two Hemang schools.",
    cover: S("shadrack-2"),
    facts: [
      ["Programme", "B.A. Publishing Studies, KNUST"],
      ["Service", "Moral and Spiritual Development Outreach"],
      ["Where", "We Care School and Hemang R/C Primary School, Hemang"],
      ["Duration", "One week, December 10 to 17, 2025"],
    ],
    lede: "Some scholars serve the mind and the spirit. This is one of those stories.",
    images: [
      { src: S("shadrack-2"), alt: "Abeka Shadrack addressing pupils at Hemang R/C Primary School" },
      { src: S("shadrack-1"), alt: "Abeka Shadrack speaking to pupils in a classroom" },
    ],
    body: [
      { p: "Meet Abeka Shadrack, a B.A. Publishing Studies student at KNUST and a Hulede Foundation scholar. For his community service, he undertook a Moral and Spiritual Development Outreach in the Hemang Community of the Ashanti Region." },
      { p: "Over one week, from December 10 to 17, 2025, Shadrack held daily one-hour sessions at two basic schools: We Care School and Hemang R/C Primary School. He engaged upper primary and JHS pupils on topics including God's love for humanity, principles of moral and disciplined living, and the long-term consequences of immoral behaviour." },
      { img: 0, caption: "Pupils of Hemang R/C Primary School during a session." },
      { p: "His motivation was deeply personal. Shadrack faced circumstances that could have led to a wayward lifestyle, but through the guidance and mentorship of his brother-in-law, he was introduced to Christ and taught the importance of making quality life decisions. This experience inspired him to extend similar guidance to young people in his community." },
      { quote: "The outreach recorded a positive response, with active participation and thoughtful questions from pupils." },
      { img: 1, caption: "Shadrack in conversation with pupils at We Care School." },
      { p: "Shadrack's story is a powerful reminder that mentorship can change lives. The Hulede Foundation is proud to celebrate him." },
    ],
    gallery: [],
    href: "https://web.facebook.com/share/p/1Je1mZG94D/",
  },
];
