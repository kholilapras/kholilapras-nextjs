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
          "/p1/1.png",
          "/p1/2.png",
          "/p1/3.png",
          "/p1/4.png",
          "/p1/5.png",
          "/p1/6.png",
          "/p1/7.png",
          "/p1/8.png",
          "/p1/9.png",
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
          "/p2/1.png",
          "/p2/2.png",
        ],
        technologies: ["Dart", "Flutter", "Supabase", "GetX", "Postman"],
        viewCodeUrl: "https://github.com/kholilapras/NoteTask",
        viewLiveUrl: "https://drive.google.com/file/d/1hO3rwgRZD-CIptZGQZT2MDiWFHY0YRUH/view?usp=sharing",
      },
      translations: {
        en: {
          title: "NoteTask",
          description:
            "NoteTask is a task and note management application that helps users easily record, organize, and prioritize their daily activities in one place. Featuring automatic Google authentication, task list and detail management, important task marking, and theme options (Dark/Light), NoteTask is designed to enhance productivity with a clean and simple interface.",
          category: "Mobile App",
        },
        id: {
          title: "NoteTask",
          description:
            "NoteTask adalah aplikasi manajemen catatan dan tugas yang memudahkan pengguna mencatat, mengatur, dan memprioritaskan aktivitas harian dalam satu tempat. Dengan fitur autentikasi otomatis Google, manajemen daftar dan detail tugas, penandaan tugas penting, serta pilihan tema (Gelap/Terang), NoteTask dirancang untuk menunjang produktivitas dengan antarmuka yang sederhana.",
          category: "Aplikasi Mobile",
        },
      },
    },

    // Project 3: PlainCashier
    {
      base: {
        images: [
          "/p3/1.png",
          "/p3/2.png",
          "/p3/3.png",
          "/p3/4.png",
          "/p3/5.png",
          "/p3/6.png",
          "/p3/7.png",
          "/p3/8.png",
          "/p3/9.png",
          "/p3/10.png",
          "/p3/11.png",
          "/p3/12.png",
          "/p3/13.png",
          "/p3/14.png",
          "/p3/15.png",
          "/p3/16.png",
          "/p3/17.png",
        ],
        technologies: ["Laravel", "TypeScript", "React", "Inertia JS", "Tailwind CSS", "MySQL", "Vite", "Electron"],
        viewCodeUrl: "https://github.com/kholilapras/PlainCashier",
        viewLiveUrl: "https://github.com/kholilapras/PlainCashier",
      },
      translations: {
        en: {
          title: "PlainCashier",
          description:
            "PlainCashier is a point-of-sale application built using the Laravel framework that can be run on the web or as a desktop application using Electron. This application is designed to simplify sales transactions with features such as a user-friendly cashier interface, product management (name, price, and stock), automatic stock calculation, total purchase summary, and payment processing. In addition, users can add products manually or import them via CSV files.",
          category: "Web & Desktop App",
        },
        id: {
          title: "PlainCashier",
          description:
            "PlainCashier adalah aplikasi kasir menggunakan framework Laravel yang dapat dijalankan melalui web maupun sebagai aplikasi desktop menggunakan Electron. Aplikasi ini dirancang untuk mempermudah proses transaksi penjualan dengan fitur antarmuka kasir yang sederhana, manajemen produk (nama, harga, dan stok), perhitungan otomatis stok, total belanja serta pembayaran. Selain itu, pengguna dapat menambahkan produk secara manual maupun melalui impor file CSV.",
          category: "Web & Desktop App",
        },
      },
    },

    // Project 4: REPAKINET
    {
      base: {
        images: [
          "/p4/2.png",
          "/p4/1.png",
        ],
        technologies: ["JavaScript (Vanilla)", "HTML", "Bootstrap"],
        viewCodeUrl: "https://github.com/kholilapras/REPAKINET",
        viewLiveUrl: "https://repakinet.vercel.app/",
      },
      translations: {
        en: {
          title: "REPAKINET",
          description:
            "REPAKINET is a web application that helps users choose the most efficient internet data package using the TOPSIS method (Technique for Order Preference by Similarity to Ideal Solution). Users can input package details such as data quota (GB), price (Rp), validity period (days), and an description.",
          category: "Web Development",
        },
        id: {
          title: "REPAKINET",
          description:
            "REPAKINET adalah aplikasi web yang membantu pengguna memilih paket internet terbaik berdasarkan metode perhitungan TOPSIS (Technique for Order Preference by Similarity to Ideal Solution). Pengguna dapat memasukkan data paket seperti kuota (GB), harga (Rp), masa aktif (hari), dan keterangan.",
          category: "Pengembangan Web",
        },
      },
    },

    // Project 5: Network Speed Live
    {
      base: {
        images: [
          "/p5/1.png",
        ],
        technologies: ["Python"],
        viewCodeUrl: "https://github.com/kholilapras/NetworkSpeedLive",
        viewLiveUrl: "https://github.com/kholilapras/NetworkSpeedLive/releases",
      },
      translations: {
        en: {
          title: "Network Speed Live",
          description:
            "Network Speed Live is a lightweight desktop application for monitoring internet speed in real time. It displays download and upload speeds through a small, transparent overlay on the screen. The app includes a system tray icon for quick access and can run automatically when the computer starts. Network Speed Live is available as a (.exe) file and is specifically designed as a real-time network speed overlay for Windows 11.",
          category: "Desktop",
        },
        id: {
          title: "Network Speed Live",
          description:
            "Network Speed Live adalah aplikasi desktop ringan untuk memantau kecepatan internet secara langsung. Aplikasi ini menampilkan kecepatan unduh dan unggah melalui tampilan kecil yang transparan di layar. Dilengkapi dengan ikon di system tray untuk akses cepat, serta bisa berjalan otomatis saat komputer dinyalakan. Network Speed Live hadir dalam bentuk file (.exe) dan dirancang khusus sebagai overlay kecepatan jaringan real-time untuk Windows 11.",
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
