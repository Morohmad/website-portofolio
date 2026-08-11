export interface SkillCategory {
  category: string;
  items: string[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Programming Languages",
    items: ["Python", "SQL", "JavaScript"]
  },
  {
    category: "Data Science & AI",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Natural Language Processing (NLP)",
      "Feature Engineering",
      "Time Series Forecasting",
      "Statistical Analysis"
    ]
  },
  {
    category: "Frameworks & Libraries",
    items: ["Pandas", "NumPy", "Scikit-Learn", "TensorFlow", "PyTorch", "OpenCV", "Flask"]
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "Jupyter Notebook", "Tableau", "Linux", "Figma"]
  }
];