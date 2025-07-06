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
      "I am a Software Engineering student at Telkom University with interest in software development and digital solutions. My main focus is on designing and building responsive, efficient, and user-friendly applications and systems to effectively real problems.",
    projectsTitle: "Projects",
    contactTitle: "Contact",
    contact: {
      namePlaceholder: "Enter your name",
      emailPlaceholder: "Enter your email address",
      messagePlaceholder: "Write your message",
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
      "Saya adalah mahasiswa Rekayasa Perangkat Lunak di Universitas Telkom dengan minat dalam pengembangan perangkat lunak dan solusi digital. Fokus utama saya adalah merancang dan membangun aplikasi dan sistem yang responsif, efisien, dan mudah digunakan untuk mengatasi masalah nyata secara efektif.",
    projectsTitle: "Proyek",
    contactTitle: "Kontak",
    contact: {
      namePlaceholder: "Masukkan nama Anda",
      emailPlaceholder: "Masukkan alamat email Anda",
      messagePlaceholder: "Tuliskan pesan Anda",
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
