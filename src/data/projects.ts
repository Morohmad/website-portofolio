export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  metrics?: string;
  githubUrl?: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "proj-1",
    title: "SATUKAN - Social Assistance Authentication System",
    subtitle: "BI-OJK Hackathon 2025",
    description: "Sistem verifikasi penerima bantuan sosial menggunakan integrasi pengenalan wajah (FaceNet/DeepFace) dan validasi geolokasi untuk mencegah duplikasi dan kecurangan.",
    techStack: ["Python", "TensorFlow", "OpenCV", "FaceNet", "DeepFace"],
    metrics: "Real-time Identity Verification",
    githubUrl: "https://github.com/Morohmad"
  },
  {
    id: "proj-2",
    title: "Indonesia Airport Clustering",
    subtitle: "Undergraduate Thesis Project",
    description: "Analisis dan pengelompokan bandara di Indonesia berdasarkan dinamika lalu lintas angkutan udara domestik memanfaatkan algoritma K-Means.",
    techStack: ["Python", "K-Means", "Scikit-Learn", "Pandas", "EDA"],
    metrics: "Domestic Air Traffic Dataset",
    githubUrl: "https://github.com/Morohmad"
  },
  {
    id: "proj-3",
    title: "GHG Emission Prediction & Forecasting",
    subtitle: "MSIB Startup Campus Final Project",
    description: "Pemodelan prediktif emisi gas rumah kaca berbasis Random Forest Regression dan analisis tren masa depan emisi Indonesia menggunakan algoritma Prophet.",
    techStack: ["Random Forest", "Prophet", "Tableau", "Scikit-Learn"],
    metrics: "Prophet MAPE: 2.21% | RF MAPE: 6.60%",
    githubUrl: "https://github.com/Morohmad"
  }
];