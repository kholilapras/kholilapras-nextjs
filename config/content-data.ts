export interface ContentData {
  name: string
  description: string
  projectsTitle: string
  contactTitle: string
  contact: {
    namePlaceholder: string
    emailPlaceholder: string
    messagePlaceholder: string
    submitButton: string
  }
  buttons: {
    viewCode: string
    viewLive: string
  }
  modal: {
    downloadAlt: string
    closeAlt: string
    previousImage: string
    nextImage: string
    imageCounter: string
  }
}

export const content: Record<"en" | "id", ContentData> = {
  en: {
    name: "Kholil Abdi Prasetiyo",
    description:
      "I am a web developer focused on developing modern UI with the latest technologies. Experienced in building responsive and user-friendly web applications.",
    projectsTitle: "Projects",
    contactTitle: "Send Message",
    contact: {
      namePlaceholder: "Enter your name",
      emailPlaceholder: "user.name@example.com",
      messagePlaceholder: "What would you like to say?",
      submitButton: "Submit Message",
    },
    buttons: {
      viewCode: "View Code",
      viewLive: "View Live",
    },
    modal: {
      downloadAlt: "Download image",
      closeAlt: "Close modal",
      previousImage: "Previous image",
      nextImage: "Next image",
      imageCounter: "Image {current} of {total}",
    },
  },
  id: {
    name: "Kholil Abdi Prasetiyo",
    description:
      "Saya adalah seorang web developer yang fokus pada pengembangan UI modern dengan teknologi terbaru. Berpengalaman dalam membangun aplikasi web yang responsif dan user-friendly.",
    projectsTitle: "Proyek",
    contactTitle: "Kirim Pesan",
    contact: {
      namePlaceholder: "Masukkan nama Anda",
      emailPlaceholder: "user.name@example.com",
      messagePlaceholder: "Tulis pesan Anda di sini",
      submitButton: "Kirim Pesan",
    },
    buttons: {
      viewCode: "Lihat Kode",
      viewLive: "Lihat Demo",
    },
    modal: {
      downloadAlt: "Unduh gambar",
      closeAlt: "Tutup modal",
      previousImage: "Gambar sebelumnya",
      nextImage: "Gambar selanjutnya",
      imageCounter: "Gambar {current} dari {total}",
    },
  },
}
