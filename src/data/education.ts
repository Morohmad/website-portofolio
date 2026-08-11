export interface EducationItem {
  id: string;
  period: string;
  degree: string;
  institution: string;
  gpa: string;
  thesisTitle: string;
  courses: string[];
}

export const educationData: EducationItem = {
  id: "edu-1",
  period: "2022 – 2026",
  degree: "Bachelor of Computer Science in Informatics Engineering",
  institution: "Sriwijaya University (Universitas Sriwijaya)",
  gpa: "3.92 / 4.00",
  thesisTitle: "Airport Clustering in Indonesia Based on Domestic Air Transportation Traffic Using the K-Means Algorithm",
  courses: [
    "Machine Learning",
    "Deep Learning",
    "Data Science",
    "Artificial Intelligence",
    "Computer Vision"
  ]
};