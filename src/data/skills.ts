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
      "Natural Language Processing (NLP)",
      "Feature Engineering",
      "Time Series Forecasting",
      "Computer Vision",
      "Statistical Analysis"
    ]
  },
  {
    category: "Frameworks & Libraries",
    items: ["Pandas", "NumPy", "Scikit-Learn", "TensorFlow", "PyTorch", "OpenCV", "Flask", "Streamlit"]
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "Jupyter Notebook", "Tableau", "draw.io", "Figma"]
  }
];