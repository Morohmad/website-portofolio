export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  description: string[];
  skills: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "exp-1",
    period: "2025",
    role: "Machine Learning & AI Engineer",
    organization: "BI-OJK Hackathon 2025 (Hyperion Team)",
    description: [
      "Mengembangkan SATUKAN, prototipe sistem otentikasi bantuan sosial terintegrasi facial recognition dan validasi lokasi.",
      "Menerapkan model FaceNet dan DeepFace untuk ekstraksi fitur wajah serta verifikasi identitas real-time.",
      "Membangun pipeline otentikasi wajah menggunakan Python, TensorFlow, dan OpenCV."
    ],
    skills: ["Python", "TensorFlow", "OpenCV", "FaceNet", "DeepFace", "AI Authentication"]
  },
  {
    id: "exp-2",
    period: "2025",
    role: "Data Scientist / ML Developer",
    organization: "Yandex x Komdigi DTS Machine Learning Competition",
    description: [
      "Mengembangkan model machine learning untuk memprediksi harga rumah berdasarkan fitur properti dan fasilitas pendukung.",
      "Melakukan data cleaning, exploratory data analysis (EDA), feature engineering, serta penanganan outlier.",
      "Membangun dan membandingkan kinerja model Linear Regression dan Random Forest Regression."
    ],
    skills: ["Python", "Pandas", "NumPy", "Scikit-Learn", "EDA", "Regression"]
  },
  {
    id: "exp-3",
    period: "Sep 2024 – Dec 2024",
    role: "Data Science Track (MSIB Batch 7)",
    organization: "Startup Campus",
    description: [
      "Mengembangkan model prediksi emisi gas rumah kaca (GHG) menggunakan Random Forest Regression (MAPE 6.60%).",
      "Melakukan forecasting emisi GHG Indonesia masa depan menggunakan Prophet (MAPE 2.21%).",
      "Membangun dashboard interaktif Tableau untuk visualisasi tren emisi dan indikator ekonomi antar negara."
    ],
    skills: ["Random Forest", "Prophet", "Time Series", "Tableau", "Feature Engineering"]
  }
];