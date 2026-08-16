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
    id: "exp-2",
    period: "2025",
    role: "Data Scientist / ML Developer",
    organization: "Yandex x Komdigi DTS Machine Learning Competition",
    description: [
      "Developed machine learning models to predict house prices based on property characteristics such as building size, number of rooms, land area, and supporting facilities.",
      "Performed data cleaning and exploratory data analysis (EDA) to understand the dataset, including handling missing values and outliers before modeling.",
      "Applied feature engineering and built Linear Regression and Random Forest Regression models to compare their predictive performance.",
      "Used Python, Pandas, NumPy, and Scikit-Learn for data processing, modeling, evaluation, and predictive solution development."
    ],
    skills: ["Python", "Pandas", "NumPy", "Scikit-Learn", "EDA", "Feature Engineering", "Regression"]
  },
  {
    id: "exp-3",
    period: "Sep 2024 – Dec 2024",
    role: "Data Science Track (MSIB Batch 7)",
    organization: "Startup Campus",
    description: [
      "Analyzed the relationship between economic growth, energy consumption, renewable energy adoption, and greenhouse gas (GHG) emissions across five countries using OECD datasets.",
      "Developed a Random Forest Regression model to predict GHG emissions, achieving a best MAPE of 6.60% through feature engineering and hyperparameter tuning.",
      "Forecasted Indonesia's future GHG emissions using Prophet to analyze long-term emission trends, achieving a MAPE of 2.21%.",
      "Built an interactive Tableau dashboard to visualize emission trends, energy consumption, and economic indicators across countries."
    ],
    skills: ["Python", "Random Forest", "Prophet", "Time Series Forecasting", "Feature Engineering", "Hyperparameter Tuning", "Tableau"]
  }
];