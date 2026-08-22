export type Project = {
  slug: string;
  title: string;
  role: string;
  category: string;
  period: string;
  image: string;
  featuredDetailImage?: string;
  detailImages?: string[];
  summary: string;
  details: string[];
};

export const projects: Project[] = [
  {
    slug: "morphing-nose-cone",
    title: "高超音速空天飞行器变体头锥技术研究",
    role: "第一技术负责人",
    category: "国家重点研发计划",
    period: "2022.01–2024.12",
    image: "/project-1.png",
    featuredDetailImage: "/project-1-concept.png",
    detailImages: [
      "/project-1-prototype-1.png",
      "/project-1-prototype-2.png",
      "/project-1-cad-1.png",
      "/project-1-cad-2.png",
      "/project-1-contour.png",
      "/project-1-demo.png"
    ],
    summary: "面向高超声速飞行器，开展具备实时自锁能力的仿生变体头锥机构设计、控制与气动热性能分析。",
    details: [
      "基于仿生学、机构学和机器人学理论，设计并研制基于蜜蜂腹部变形机理的、具备实时自锁功能的三自由度变体头锥机构。",
      "完成机构构型综合、运动学、动力学、工作空间、奇异位形分析及轨迹规划；融合仿蜂窝承载结构，开发刚柔耦合变体机构与节点动态感知技术。",
      "提出变体头锥与柔性蒙皮协同变形的变拓扑控制策略，利用 CFD 数值仿真分析构型变化对阻力、热流等载荷的影响。",
      "开发材料—结构—表界面一体化设计界面，完成复杂串并联机构的设计、研制、控制与功能验证。相关工作发表一区 Top 论文 2 篇，授权发明专利 4 项。"
    ]
  },
  {
    slug: "morphing-structure-skin",
    title: "空天飞行器仿生变体结构及其柔性蒙皮的设计与集成",
    role: "第一技术负责人",
    category: "国家 173 重点项目",
    period: "2021.04–2024.04",
    image: "/project-2.png",
    detailImages: ["/project-2.png", "/project-2-diagram.png"],
    summary: "开展可展变体结构、柔性蒙皮与智能闭环控制研究，支撑飞行器多工况下的构型自适应调节。",
    details: [
      "开展可展结构运动机理分析、多构型变形方案设计、运动学/动力学建模及关键结构参数优化。",
      "结合 CFD 与有限元仿真，分析不同变体构型下的气动载荷、热流分布和结构响应。",
      "融合智能材料驱动、温度感知与闭环控制方法，设计面向多飞行工况的构型自适应变形控制算法。",
      "负责原理样机设计、加工装配、测试验证和项目技术文档编写；相关工作发表一区 Top 论文 2 篇，授权发明专利 3 项。"
    ]
  },
  {
    slug: "robocon-quadruped",
    title: "第十八届全国大学生机器人大赛 Robocon",
    role: "机械组负责人",
    category: "全国大学生机器人大赛（首届四足机器人）",
    period: "2017.12–2019.12",
    image: "/project-3.png",
    summary: "负责轮式与四足机器人机械方案设计、加工装配、赛场联调及机械组协调推进。",
    details: [
      "作为机械组负责人，完成一台轮式机器人和一台四足机器人的结构设计、加工装配，完成两周现场联调和比赛。",
      "围绕令牌传递、障碍通过、兽骨投掷和四足越障等赛题任务，完成机器人机械方案设计与关键执行机构开发。",
      "参与轮式底盘、抓取传递机构、投掷机构和四足腿部机构的设计迭代，负责装配调试与现场故障排查。",
      "项目获得全国大学生机器人大赛 Robocon 二等奖，形成了机器人机构设计、样机装配、系统调试与工程落地经验。"
    ]
  },
  {
    slug: "dam-inspection-robot",
    title: "基于一体化关节的堤坝巡检仿生机器人研究",
    role: "核心成员",
    category: "水利部重大科技项目",
    period: "2023.01–2025.12",
    image: "/project-4.png",
    summary: "围绕堤坝非结构化环境巡检，开展四足机器人机械本体、运动控制、视觉感知与整机验证研究。",
    details: [
      "完成四足机器人机械本体设计、运动控制策略设计与仿真验证，建立传动系统非线性动力学模型并分析多齿啮合与扭矩传递特性。",
      "结合强化学习、PPO 算法和机器人动力学模型，开展不同地形条件下的步态控制、越障运动和姿态稳定性分析。",
      "参与机器人图像采集系统、堤坝裂缝识别方法和整机测试流程，结合机器视觉、图像分割和深度学习算法实现病害区域识别。",
      "承担机器人机械结构成型装配、控制系统联调、性能测试和技术文档编写，积累一体化关节开发、腿部机构设计和样机验证经验。"
    ]
  }
];
