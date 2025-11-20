export const siteConfig = {
  name: "李佳華",
  title: "NYCU Management Science Student | Data Analysis & PM",
  description: "結合管理科學邏輯與資料分析技術。專注於金融數據分析、Python 自動化與專案管理。擁有 GPA 3.8 的學術基礎與豐富的活動企劃執行力。",
  accentColor: "#ea580c", // 這個橘色很有活力，適合 PM/活動企劃形象，保留即可
  social: {
    email: "zz52835283@gmail.com",
    // 請記得把這裡換成你剛剛註冊的 GitHub 帳號
    github: "https://github.com/Jiahua-0627/First, 
    // 如果還沒有 LinkedIn，強烈建議大二就去辦一個，把這份內容貼上去
    linkedin: "https://linkedin.com/in/你的帳號ID", 
  },
  aboutMe:
    "我是國立陽明交通大學管理科學系的大二學生。我不滿足於傳統商管教育的框架，因此主動跨入資料科學領域，致力於用數據解決商業與金融問題。\n\n目前專注於 Python 金融數據分析（ETL、視覺化、量化指標），同時具備扎實的統計學與經濟學基礎（GPA 3.8）。\n\n除了硬實力，我也熱衷於專案管理與活動企劃，善於在團隊中擔任溝通協調的角色，將複雜的目標拆解為可執行的行動方案。",
  
  // 這裡改成你會的，以及管科系的核心技能
  skills: [
    "Python (Pandas/Matplotlib)", 
    "Financial Analysis", 
    "Data Visualization", 
    "Project Management", 
    "Excel (VBA/Pivot)", 
    "Event Planning"
  ],
  
  projects: [
    {
      name: "Multi-Asset Portfolio Analysis (Python)",
      description:
        "建構自動化金融數據分析工具。透過 Python 串接 Yahoo Finance API，針對美股(NVDA)、加密貨幣(BTC)、大宗商品(Gold)進行相關係數分析、夏普值(Sharpe Ratio)計算與風險評估視覺化。",
      // 這裡放你剛剛上傳的 GitHub 網址
      link: "https://github.com/你的帳號/Financial-Portfolio-Analysis", 
      skills: ["Python", "Pandas", "Seaborn", "yfinance"],
    },
    {
      name: "PTT Stock Market Sentiment Crawler (Work in Progress)",
      description:
        "規劃中的輿情分析專案。預計使用 Python 爬蟲技術抓取 PTT Stock 版標題，製作文字雲並分析散戶情緒與股價波動之關聯性。",
      link: "#", // 還沒做完可以先放 # 或者不放連結
      skills: ["Python", "Web Crawler", "NLP Concept"],
    },
    {
      name: "Campus Event / Exhibition Planning",
      description:
        "（這裡請填寫你提到的社會活動或展覽）。例如：擔任 XX 展覽總召，帶領 15 人團隊，控管 5 萬元預算，成功吸引 500+ 人次參與，並解決現場突發狀況。",
      link: "#", // 如果有活動粉專或照片集可以放
      skills: ["Leadership", "Budgeting", "Communication"],
    },
  ],
  
  // 經驗部分：因為你是大二，這裡可以放「社團幹部」、「實習」或是「系學會經驗」
  // 如果目前空白，可以先寫社團經驗
  experience: [
    {
      company: "NYCU Department of Management Science",
      title: "Active Student / Team Leader",
      dateRange: "Sep 2023 - Present",
      bullets: [
        "Maintained a GPA of 3.8/4.3 in Freshman year (Top tier in class).",
        "Self-learning Python for Financial Engineering and Data Analysis.",
        "Active participant in department events and academic workshops.",
      ],
    },
    {
      // 這裡填寫你的活動企劃經驗
      company: "某某社團 / 某某活動籌備團隊",
      title: "Activity Planner / Project Manager",
      dateRange: "Dates...",
      bullets: [
        "Coordinated cross-functional teams to execute [Event Name].",
        "Managed project timeline and budget distribution.",
        "Resolved conflicts and optimized workflow efficiency.",
      ],
    },
  ],
  
  education: [
    {
      school: "National Yang Ming Chiao Tung University (NYCU)",
      degree: "B.S. in Management Science",
      dateRange: "2023 - 2027 (Expected)",
      achievements: [
        "Current GPA: 3.8 / 4.3",
        "Core Courses: Statistics, Economics, Accounting, Calculus",
        "Relevant Self-study: Python for Finance, Data Analysis",
      ],
    },
  ],
};
