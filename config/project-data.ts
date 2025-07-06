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

const projectConfigs: Array<{
  base: {
    images: string[]
    technologies: string[]
    viewCodeUrl?: string
    viewLiveUrl?: string
  }
  translations: {
    en: {
      title: string
      description: string
      category: string
    }
    id: {
      title: string
      description: string
      category: string
    }
  }
}> = [
    // Project 1: FnB Web
    {
      base: {
        images: [
          "/image/p1/1.png",
          "/image/p1/2.png",
          "/image/p1/3.png",
          "/image/p1/4.png",
          "/image/p1/5.png",
          "/image/p1/6.png",
          "/image/p1/7.png",
          "/image/p1/8.png",
          "/image/p1/9.png",
        ],
        technologies: ["HTML", "CSS", "JavaScript", "PHP (Native)", "MySQL"],
        viewCodeUrl: "https://github.com/kholilapras/FnB_web",
        viewLiveUrl: "https://github.com/kholilapras/FnB_web",
      },
      translations: {
        en: {
          title: "FnB Web",
          description:
            "FnB Web is a landing page specifically designed to support Micro, Small, and Medium Enterprises (MSMEs) in the food and beverage sector in promoting their products digitally. This website is equipped with a Content Management System (CMS) that allows administrators to easily manage and update the content on the landing page. With a modern design and user-friendly navigation menu, it provides a pleasant experience for visitors and helps increase consumer appeal and reach.",
          category: "Web Development",
        },
        id: {
          title: "FnB Web",
          description:
            "FnB Web adalah landing page yang dirancang khusus untuk mendukung pelaku Usaha Mikro, Kecil, dan Menengah (UMKM) di sektor makanan dan minuman dalam mempromosikan produk mereka secara digital. Website ini dilengkapi dengan Content Management System (CMS) yang memungkinkan pengelola untuk mengatur dan memperbarui konten pada landing page secara mudah.  Dengan tampilan yang modern dan menu navigasi yang mudah, akan memberikan pengalaman yang nyaman bagi pengunjung serta membantu meningkatkan daya tarik dan jangkauan konsumen.",
          category: "Pengembangan Web",
        },
      },
    },

    // Project 2: TasksApp
    {
      base: {
        images: [
          "/placeholder.svg",
          "/placeholder.svg",
        ],
        technologies: ["Dart", "Flutter", "Supabase", "GetX"],
        viewCodeUrl: "#",
        viewLiveUrl: "#",
      },
      translations: {
        en: {
          title: "TasksApp",
          description:
            "-",
          category: "Mobile App",
        },
        id: {
          title: "TasksApp",
          description:
            "-",
          category: "Aplikasi Mobile",
        },
      },
    },

    // Project 3: POS
    {
      base: {
        images: [
          "/placeholder.svg",
          "/placeholder.svg",
        ],
        technologies: ["Laravel", "React", "Inertia JS", "Tailwind CSS", "MySQL"],
        viewCodeUrl: "#",
        viewLiveUrl: "#",
      },
      translations: {
        en: {
          title: "POS",
          description:
            "-",
          category: "Web Development",
        },
        id: {
          title: "POS",
          description:
            "-",
          category: "Web Development",
        },
      },
    },

    // Project 4: REPAKINET
    {
      base: {
        images: [
          "/placeholder.svg?height=360&width=640&text=TOPSIS+Analysis&bg=1e40af&color=ffffff",
          "/placeholder.svg?height=360&width=640&text=Results+Matrix&bg=991b1b&color=ffffff",
          "/placeholder.svg?height=360&width=640&text=Report+Generator&bg=365314&color=ffffff",
        ],
        technologies: ["HTML", "Bootstrap", "JavaScript (Vanilla)"],
        viewCodeUrl: "#",
        viewLiveUrl: "#",
      },
      translations: {
        en: {
          title: "REPAKIN-TOPSIS",
          description:
            "",
          category: "Web Development",
        },
        id: {
          title: "REPAKIN-TOPSIS",
          description:
            "",
          category: "Pengembangan Web",
        },
      },
    },

    // Project 5: Network Speed Live
    {
      base: {
        images: [
          "/placeholder.svg?height=360&width=640&text=Portfolio+Homepage&bg=8b5cf6&color=ffffff",
          "/placeholder.svg?height=360&width=640&text=Project+Gallery&bg=f59e0b&color=ffffff",
        ],
        technologies: ["Python", "TypeScript", "Tailwind CSS"],
        viewCodeUrl: "",
        viewLiveUrl: "",
      },
      translations: {
        en: {
          title: "Network Speed Live",
          description:
            "-",
          category: "Desktop",
        },
        id: {
          title: "Network Speed Live",
          description:
            "-",
          category: "Desktop",
        },
      },
    },
  ]

// Generate projects from configurations
export const projects: Record<"en" | "id", ProjectData[]> = {
  en: projectConfigs.map((config) => ({
    ...config.base,
    ...config.translations.en,
  })),
  id: projectConfigs.map((config) => ({
    ...config.base,
    ...config.translations.id,
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

// Helper function to add new project using the new structure
export function addProjectConfig(config: {
  base: {
    images: string[]
    technologies: string[]
    viewCodeUrl?: string
    viewLiveUrl?: string
  }
  translations: Record<"en" | "id", ProjectDataTranslated>
}) {
  projectConfigs.push(config)
  // Regenerate projects object
  return {
    en: projectConfigs.map((c) => ({ ...c.base, ...c.translations.en })),
    id: projectConfigs.map((c) => ({ ...c.base, ...c.translations.id })),
  }
}
