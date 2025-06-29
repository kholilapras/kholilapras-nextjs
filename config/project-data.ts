export interface ProjectDataBase {
  images: string[]
  technologies: string[]
  viewCodeUrl?: string
  viewLiveUrl?: string
}

export interface ProjectDataTranslated {
  title: string
  description: string
  category: string
}

export interface ProjectData extends ProjectDataBase, ProjectDataTranslated { }

// Base project data (language-independent)
const projectsBase: ProjectDataBase[] = [
  {
    images: [
      "/image/1.jpg",
      "/placeholder.svg?height=360&width=640&text=Menu+Catalog&bg=16a34a&color=ffffff",
      "/placeholder.svg?height=360&width=640&text=Order+Management&bg=dc2626&color=ffffff",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP (Native)", "MySQL"],
    viewCodeUrl: "#",
    viewLiveUrl: "#",
  },
  {
    images: [
      "/placeholder.svg?height=360&width=640&text=POS+Homepage&bg=7c3aed&color=ffffff",
      "/placeholder.svg?height=360&width=640&text=Product+Grid&bg=ea580c&color=ffffff",
      "/placeholder.svg?height=360&width=640&text=Shopping+Cart&bg=0891b2&color=ffffff",
      "/placeholder.svg?height=360&width=640&text=Admin+Panel&bg=be123c&color=ffffff",
    ],
    technologies: ["React", "Redux", "Node.js", "MongoDB"],
    viewCodeUrl: "#",
    viewLiveUrl: "#",
  },
  {
    images: [
      "/placeholder.svg?height=360&width=640&text=Task+Dashboard&bg=059669&color=ffffff",
      "/placeholder.svg?height=360&width=640&text=Calendar+View&bg=7c2d12&color=ffffff",
    ],
    technologies: ["Dart", "Flutter", "Supabase", "GetX"],
    viewCodeUrl: "#",
    viewLiveUrl: "#",
  },
  {
    images: [
      "/placeholder.svg?height=360&width=640&text=TOPSIS+Analysis&bg=1e40af&color=ffffff",
      "/placeholder.svg?height=360&width=640&text=Results+Matrix&bg=991b1b&color=ffffff",
      "/placeholder.svg?height=360&width=640&text=Report+Generator&bg=365314&color=ffffff",
    ],
    technologies: ["HTML", "Bootstrap", "JavaScript (Vanilla)"],
    viewCodeUrl: "#",
    viewLiveUrl: "#",
  },
]

// Translated content (language-dependent)
const projectsTranslations: Record<"en" | "id", ProjectDataTranslated[]> = {
  en: [
    {
      title: "FnB Web",
      description:
        "FnB Web is a digital platform designed to support Micro, Small, and Medium Enterprises (MSMEs) in the food and beverage sector in promoting their products. Featuring a user-friendly interface and comprehensive tools such as a menu catalog, online ordering guide, and business information, this website empowers MSMEs to compete in the digital era.",
      category: "Web Development",
    },
    {
      title: "POSting",
      description:
        "Online store application with cart, checkout, and product management features. Built with React and Node.js for modern e-commerce solutions.",
      category: "Web Development",
    },
    {
      title: "Tasks App",
      description:
        "Daily task management app with drag & drop, categories, and reminder features. Built with Flutter for cross-platform mobile experience.",
      category: "Mobile App",
    },
    {
      title: "REPAKIN-TOPSIS",
      description:
        "Decision support system using TOPSIS method for repair shop recommendation analysis. Helps users make informed decisions based on multiple criteria evaluation.",
      category: "Web Development",
    },
  ],
  id: [
    {
      title: "FnB Web",
      description:
        "FnB Web adalah platform digital yang dirancang untuk mendukung pelaku Usaha Mikro, Kecil, dan Menengah (UMKM) di sektor makanan dan minuman dalam mempromosikan produk mereka. Dengan tampilan yang ramah pengguna serta fitur lengkap seperti katalog menu, panduan pemesanan online, dan informasi usaha, website ini hadir untuk membantu UMKM bersaing di era digital.",
      category: "Pengembangan Web",
    },
    {
      title: "POSting",
      description:
        "Aplikasi toko online dengan fitur keranjang, checkout, dan manajemen produk. Dibangun dengan React dan Node.js untuk solusi e-commerce modern.",
      category: "Pengembangan Web",
    },
    {
      title: "Tasks App",
      description:
        "Aplikasi untuk mengelola tugas harian dengan fitur drag & drop, kategori, dan reminder. Dibangun dengan Flutter untuk pengalaman mobile lintas platform.",
      category: "Aplikasi Mobile",
    },
    {
      title: "REPAKIN-TOPSIS",
      description:
        "Sistem pendukung keputusan menggunakan metode TOPSIS untuk analisis rekomendasi bengkel. Membantu pengguna membuat keputusan berdasarkan evaluasi multi-kriteria.",
      category: "Pengembangan Web",
    },
  ],
}

// Combine base data with translations
export const projects: Record<"en" | "id", ProjectData[]> = {
  en: projectsBase.map((base, index) => ({
    ...base,
    ...projectsTranslations.en[index],
  })),
  id: projectsBase.map((base, index) => ({
    ...base,
    ...projectsTranslations.id[index],
  })),
}

// Helper function to get project by index (useful for direct access)
export function getProject(language: "en" | "id", index: number): ProjectData | undefined {
  return projects[language][index]
}

// Helper function to get all projects for a language
export function getProjects(language: "en" | "id"): ProjectData[] {
  return projects[language]
}

// Helper function to add new project (for future use)
export function createProject(
  baseData: ProjectDataBase,
  translations: Record<"en" | "id", ProjectDataTranslated>,
): Record<"en" | "id", ProjectData> {
  return {
    en: { ...baseData, ...translations.en },
    id: { ...baseData, ...translations.id },
  }
}
