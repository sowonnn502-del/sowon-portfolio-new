"use client"

import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  BrainCircuit,
  DatabaseZap,
  Download,
  Github,
  Layers3,
  Mail,
  Map,
  Menu,
  Music2,
  Network,
  PanelsTopLeft,
  Radar,
  Sparkles,
  Waves,
  X,
} from "lucide-react"
import { useEffect, useState } from "react"

const navItems = [
  { label: "项目 Projects", href: "#projects" },
  { label: "探索 Explorations", href: "#explorations" },
  { label: "关于 About", href: "#about" },
  { label: "简历 Resume", href: "#resume" },
  { label: "联系 Contact", href: "#contact" },
]

const philosophyKeywords = [
  "Human Perception",
  "Spatial Cognition",
  "Workflow Intelligence",
  "Multimodal Interaction",
]

const projectSkills = [
  "AI Product Design",
  "Workflow Systems",
  "Multimodal Interaction",
  "Spatial Intelligence",
  "Research Prototyping",
  "Data Product Thinking",
  "Human-AI Collaboration",
]

const projects = [
  {
    number: "Project 01",
    title: "华润万象生活智慧运营平台",
    subtitle: "AI Assistant R&D Design",
    role: "AI 产品研发实习 / 多模态 AI 助手产品设计 / RAG 与 Workflow 设计",
    tags: ["Multimodal AI", "RAG Workflow", "SOP Reasoning", "Work Order"],
    description:
      "面向物业运营场景设计的多模态 AI 助手，将图片识别、自然语言交互、SOP 推理与 RAG 知识检索结合，支持一线员工在保洁、工程、客服、秩序、车场等业务中的问题查询、场景识别与工单协同。",
    impact: ["覆盖 30 个试点项目", "服务 1,500+ 活跃用户", "产生 1,900+ 次会话", "车场照片稽核准确率达到 98%", "人工复核工作量减少 35%"],
    visual: "assistant",
  },
  {
    number: "Project 02",
    title: "HearSpace",
    subtitle: "AI 空间记忆平台",
    role: "个人主导项目 / 产品定位 / 交互设计 / MVP 上线",
    tags: ["Spatial Memory", "Qwen-VL", "Music Recommendation", "Emotion Card"],
    description:
      "围绕“空间情绪”打造的 AI 内容产品，通过图片、音乐与情绪文案生成，帮助用户记录日常场景中的氛围感与音乐记忆。基于 Qwen-VL 实现场景理解、视觉要素识别、情绪文案生成与音乐推荐。",
    impact: ["图片上传", "空间情绪识别", "音乐记忆推荐", "分享卡片生成", "移动端体验优化"],
    visual: "hearspace",
  },
  {
    number: "Project 03",
    title: "点点升学",
    subtitle: "ToC AI College Planning Agent",
    role: "AI 产品助理 / 用户画像 / 推荐逻辑 / 原型设计",
    tags: ["AI Agent", "User Profiling", "Radar Evaluation", "Decision Workflow"],
    description:
      "面向升学规划场景设计的 AI Agent，通过用户画像、六维学业评估、推荐逻辑与报告生成机制，降低家长与学生的信息理解成本，形成“用户输入—AI 分析—个性化报告输出”的决策闭环。",
    impact: ["用户画像建模", "六维学业评估", "推荐逻辑设计", "报告生成机制", "交互原型迭代"],
    visual: "college",
  },
  {
    number: "Project 04",
    title: "多模态生理感知计算研究",
    subtitle: "Multisensory Restoration Research",
    role: "个人科研项目 / 实验设计 / 多模态数据分析 / 空间感知研究",
    tags: ["EEG", "EDA", "VR", "Spatial Perception", "Restoration"],
    description:
      "围绕视觉景观与音乐感官一致性，设计多感官体验实验，结合 EEG、EDA、VR 与情绪评分，探索城市公园环境中视觉—音乐匹配对恢复性体验的影响机制。",
    impact: ["多感官实验设计", "EEG / EDA 数据采集", "VR 环境体验", "情绪评分分析", "恢复性机制探索"],
    visual: "research",
  },
]

const explorations = [
  {
    number: "Exploration 01",
    year: "2026",
    title: "策划运营 Rural Music Festival",
    subtitle: "Rural Event / Cultural Activation / Scenario Operation",
    tags: ["Research Systems", "Signal", "Perception"],
    description:
      "清远三坑镇“禾上链音”稻田音乐节乡村振兴项目，围绕乡村产业、音乐活动与场景运营，探索文化事件如何激活地方空间。",
  },
  {
    number: "Exploration 02",
    year: "2025",
    title: "AIGC辅助的空间设计 AI x Space Design",
    subtitle: "Rhino GH / Slime Mold Algorithm / AIGC",
    tags: ["AI Space Design", "AIGC", "Algorithmic Workflow"],
    description:
      "基于 AI 的华侨城创意文化园未来共生设计，搭建 Rhino/GH 黏菌算法 + AIGC 协同工作流，探索 AI 如何辅助空间设计决策与方案生成。",
  },
  {
    number: "Exploration 03",
    year: "2025",
    title: "滨水空间商业策划运营 Commercial Planning and Operations",
    subtitle: "GIS / Emotion Perception / Cultural Tourism",
    tags: ["GIS Mapping", "Emotion Heatmap", "Cultural Tourism"],
    description:
      "聚焦苏州古城运河滨水空间，通过点位采集、情绪感知分析与 GIS 可视化，构建空间情绪热力图，并提出文旅活化策略。",
  },
  {
    number: "Exploration 04",
    year: "2023",
    title: "学生通学满意度调研 Commuting Satisfaction Survey",
    subtitle: "Urban Observation / Spatial Experience / Mobility Research",
    tags: ["Field Research", "Spatial Perception", "Urban Mobility"],
    description:
      "聚焦游客与居民出行冲突场景，通过实地勘察、深度访谈、问卷调查与 SPSS 量化分析，研究历史街区中小学通学环境与公共空间体验问题，提出家校景三方联动优化方案，并形成完整调研报告，项目获国际竞赛二等奖并纳入南京市秦淮区旧城改造试点研究。",
  },
]

const experiences = [
  {
    number: "Experience 01",
    organization: "华润万象生活 x 中科院深圳先进院",
    role: "智慧运营平台 - AI 产品研发实习",
    time: "2026.03 - 2026.07",
    summary: "参与多模态 AI 助手、RAG 知识库、物业业务场景与车场 AI 稽核等产品工作，连接业务、算法与工程团队。",
    responsibilities: ["多模态 AI 助手需求设计", "RAG 知识库与 SOP 推理流程", "车场照片稽核产品方案", "跨团队协作与试点反馈闭环"],
    impact: "覆盖 30 个试点项目，服务 1,500+ 活跃用户，车场照片稽核准确率达到 98%。",
    keywords: ["AI Assistant", "RAG", "Property Operation", "Workflow"],
  },
  {
    number: "Experience 02",
    organization: "深圳市凡可为科技有限公司",
    role: "AI 产品助理实习",
    time: "2025.12 - 2026.01",
    summary: "围绕 ToC 升学规划场景，参与 AI Agent 工具的用户画像、推荐逻辑、六维评估、交互原型与商业化机制设计。",
    responsibilities: ["用户画像与需求拆解", "推荐逻辑设计", "六维评估框架", "原型与商业化机制梳理"],
    impact: "将复杂升学规划知识转化为更易理解的 AI 分析与报告输出流程。",
    keywords: ["AI Agent", "User Profiling", "Recommendation", "Prototype"],
  },
  {
    number: "Experience 03",
    organization: "南京市苏邑设计集团智慧城市研究所",
    role: "战略咨询实习",
    time: "2025.04 - 2025.07",
    summary: "参与前沿产业研究、智慧城市、脑机接口、智能传感与可行性研究相关工作，支持规划汇报与策略表达。",
    responsibilities: ["前沿产业研究", "智慧城市专题分析", "脑机接口与智能传感资料梳理", "规划汇报材料支持"],
    impact: "形成从技术趋势到城市空间策略的研究表达能力。",
    keywords: ["Smart City", "Strategic Research", "BCI", "Sensing"],
  },
  {
    number: "Experience 04",
    organization: "ACDESIGN 手绘工作室",
    role: "联合创始人 / 教学服务产品化 ",
    time: "2025.04 - 至今",
    summary: "将手绘教学服务产品化，参与课程体系、用户增长、新媒体内容运营与学员服务流程建设。",
    responsibilities: ["课程产品化", "新媒体运营", "教学服务体系", "用户增长与转化"],
    impact: "累计服务 100+ 学员，沉淀教学 SOP 与内容转化机制。",
    keywords: ["Education Product", "Content Operation", "Growth", "SOP"],
  },
  {
    number: "Experience 05",
    organization: "未来学部研究生会 青年发展部",
    role: "部长",
    time: "2025.09 - 至今",
    summary: "围绕就业升学内容 IP、活动 SOP、数据化运营与学生触达，推动校园活动从组织执行走向产品化表达。",
    responsibilities: ["活动产品化", "就业升学内容 IP", "活动 SOP", "学生触达与反馈"],
    impact: "提升活动组织效率与内容传播的连续性。",
    keywords: ["Event Product", "Youth Development", "Content IP", "Operation"],
  },
]

const contactLinks = [
  { label: "Email", href: "Sowon502@163.com", icon: Mail },
  { label: "GitHub", href: "https://github.com/", icon: Github },
  { label: "Resume", href: "#resume", icon: Download },
  { label: "Portfolio", href: "#projects", icon: PanelsTopLeft },
]

function Tag({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] transition-colors ${
        accent
          ? "border-[#dbff00] bg-[#dbff00] text-black"
          : "border-[#ececec] bg-white/80 text-[#555] group-hover:border-[#111]"
      }`}
    >
      {children}
    </span>
  )
}

function CarouselControls({
  active,
  total,
  onPrev,
  onNext,
  onSelect,
  dark = false,
}: {
  active: number
  total: number
  onPrev: () => void
  onNext: () => void
  onSelect: (index: number) => void
  dark?: boolean
}) {
  return (
    <div className="flex items-center justify-between gap-5">
      <div className="flex items-center gap-2">
        {Array.from({ length: total }).map((_, index) => (
          <button
            key={index}
            onClick={() => onSelect(index)}
            className={`h-2 rounded-full transition-all ${
              active === index ? "w-8 bg-[#dbff00]" : dark ? "w-2 bg-white/25" : "w-2 bg-black/15"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      <div className="flex gap-2">
        <button
          onClick={onPrev}
          className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all hover:-translate-y-0.5 ${
            dark ? "border-white/15 bg-white/10 text-white hover:bg-white hover:text-black" : "border-[#e5e5e5] bg-white text-black hover:border-black"
          }`}
          aria-label="Previous slide"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <button
          onClick={onNext}
          className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all hover:-translate-y-0.5 ${
            dark ? "border-white/15 bg-white/10 text-white hover:bg-white hover:text-black" : "border-[#e5e5e5] bg-white text-black hover:border-black"
          }`}
          aria-label="Next slide"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}

function SignalWave({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 420 120" fill="none" aria-hidden="true">
      <path
        d="M0 64 C28 64 28 24 56 24 C84 24 84 96 112 96 C140 96 140 42 168 42 C196 42 196 76 224 76 C252 76 252 18 280 18 C308 18 308 102 336 102 C364 102 364 58 420 58"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M0 76 C34 76 34 52 68 52 C102 52 102 86 136 86 C170 86 170 34 204 34 C238 34 238 70 272 70 C306 70 306 44 340 44 C374 44 374 82 420 82"
        stroke="currentColor"
        strokeOpacity="0.32"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function ProjectVisual({ type }: { type: string }) {
  if (type === "hearspace") {
    return (
      <div className="relative h-full min-h-[360px] overflow-hidden rounded-[28px] bg-[radial-gradient(circle_at_25%_20%,rgba(255,77,140,0.52),transparent_30%),radial-gradient(circle_at_78%_74%,rgba(219,255,0,0.36),transparent_28%),linear-gradient(135deg,#111,#282328_48%,#f9f3f6)] p-6 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:100%_28px]" />
        <div className="relative z-[2] flex h-full flex-col justify-between">
          <div className="flex justify-between">
            <Tag accent>Emotion Memory</Tag>
            <Music2 className="h-7 w-7 text-[#dbff00]" />
          </div>
          <div className="rounded-[24px] border border-white/20 bg-white/12 p-5 backdrop-blur-xl">
            <p className="mb-3 text-xs uppercase tracking-[0.18em] text-white/60">Image to Music Flow</p>
            <SignalWave className="h-24 w-full text-[#dbff00]" />
            <div className="mt-4 grid grid-cols-3 gap-2">
              {["City Rain", "Soft Light", "Late Walk"].map((item) => (
                <span key={item} className="rounded-full bg-white/12 px-3 py-2 text-center text-xs">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (type === "college") {
    return (
      <div className="relative h-full min-h-[360px] overflow-hidden rounded-[28px] bg-white p-6">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:42px_42px]" />
        <div className="relative z-[2] grid h-full grid-cols-2 gap-4">
          <div className="rounded-[24px] border border-[#eee] bg-[#fafafa] p-5">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#888]">User Profile</p>
            {["Interest", "Score", "Location", "Budget"].map((item, index) => (
              <div key={item} className="mb-4">
                <div className="mb-2 flex justify-between text-xs">
                  <span>{item}</span>
                  <span>{82 - index * 9}%</span>
                </div>
                <div className="h-2 rounded-full bg-[#e8e8e8]">
                  <div className="h-2 rounded-full bg-[#111]" style={{ width: `${82 - index * 9}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-1 items-center justify-center rounded-[24px] border border-[#eee] bg-[#111] text-[#dbff00]">
              <Radar className="h-28 w-28" />
            </div>
            <div className="rounded-[24px] border border-[#eee] bg-[#fff5f8] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#ff4d8c]">Decision Report</p>
              <p className="mt-2 text-sm text-[#555]">Profile / Analysis / Recommendation</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (type === "research") {
    return (
      <div className="relative h-full min-h-[360px] overflow-hidden rounded-[28px] bg-[#f6f6f6] p-6">
        <div className="absolute right-8 top-8 h-36 w-36 rounded-full border border-[#111]/15" />
        <div className="absolute right-16 top-16 h-20 w-20 rounded-full bg-[#dbff00]" />
        <div className="relative z-[2] flex h-full flex-col justify-between">
          <div className="flex items-center justify-between">
            <Tag>EEG / EDA Signal</Tag>
            <Waves className="h-7 w-7 text-[#ff4d8c]" />
          </div>
          <div>
            <SignalWave className="mb-8 h-28 w-full text-[#111]" />
            <div className="grid grid-cols-3 gap-3">
              {["VR Scene", "Music Match", "Restoration"].map((item) => (
                <div key={item} className="rounded-2xl border border-[#e8e8e8] bg-white p-4 text-sm font-semibold">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-full min-h-[360px] overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#101010_0%,#f7f7f7_54%,#ffffff_100%)] p-6">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] bg-[size:44px_44px]" />
      <div className="relative z-[2] flex h-full flex-col justify-between">
        <div className="flex items-center justify-between">
          <Tag accent>AI System Cards</Tag>
          <BrainCircuit className="h-7 w-7 text-white" />
        </div>
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
          {["Image", "RAG", "Work Order"].map((node, index) => (
            <div
              key={node}
              className={`rounded-2xl border border-white/70 bg-white/80 p-4 shadow-[0_18px_40px_rgba(0,0,0,0.1)] backdrop-blur-xl ${
                index === 1 ? "col-start-3" : ""
              }`}
            >
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#888]">Node 0{index + 1}</p>
              <p className="font-['Space_Grotesk'] text-lg font-semibold">{node}</p>
            </div>
          ))}
          <div className="row-start-1 flex h-12 w-12 items-center justify-center rounded-full bg-[#111] text-white">
            <Network className="h-5 w-5" />
          </div>
        </div>
        <div className="rounded-[22px] border border-white/70 bg-white/75 p-4 backdrop-blur-xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#888]">Dashboard Fragment</p>
          <div className="grid grid-cols-4 gap-2">
            {[68, 42, 86, 58].map((value, index) => (
              <div key={index} className="flex h-24 items-end rounded-xl bg-[#f2f2f2] p-2">
                <div className="w-full rounded-lg bg-[#111]" style={{ height: `${value}%` }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeProject, setActiveProject] = useState(0)
  const [activeExploration, setActiveExploration] = useState(0)
  const [activeExperience, setActiveExperience] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const nextProject = () => setActiveProject((current) => (current + 1) % projects.length)
  const prevProject = () => setActiveProject((current) => (current - 1 + projects.length) % projects.length)
  const nextExploration = () => setActiveExploration((current) => (current + 1) % explorations.length)
  const prevExploration = () => setActiveExploration((current) => (current - 1 + explorations.length) % explorations.length)
  const nextExperience = () => setActiveExperience((current) => (current + 1) % experiences.length)
  const prevExperience = () => setActiveExperience((current) => (current - 1 + experiences.length) % experiences.length)

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#fafafa] text-[#111]">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(120deg,rgba(219,255,0,0.12),transparent_28%,rgba(255,77,140,0.1)_62%,transparent_82%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.35),transparent_72%)]" />

      <header className="fixed top-0 z-[1000] flex h-20 w-full items-center justify-between border-b border-[rgba(0,0,0,0.04)] bg-[rgba(250,250,250,0.86)] px-4 backdrop-blur-xl md:px-12">
        <button
          className="text-lg transition-transform hover:scale-110 md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <a
          href="#top"
          className="font-['Space_Grotesk'] absolute left-1/2 -translate-x-1/2 text-xl font-bold tracking-[-0.03em] md:relative md:left-auto md:translate-x-0 md:text-2xl"
        >
          sowon<span className="text-[#ff4d8c]">.</span>wei
        </a>

        <nav className="hidden md:block">
          <ul className="flex list-none gap-7">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm font-medium text-[#444] transition-colors hover:text-black">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#resume"
          className="hidden items-center gap-2 rounded-full bg-[#111] px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#222] hover:shadow-[0_10px_20px_rgba(0,0,0,0.15)] md:inline-flex"
        >
          <Download className="h-4 w-4" />
          下载简历
        </a>

        {mobileMenuOpen && (
          <div className="absolute left-0 right-0 top-20 border-b border-[rgba(0,0,0,0.04)] bg-[rgba(250,250,250,0.98)] backdrop-blur-xl md:hidden">
            <nav className="px-4 py-6">
              <ul className="flex list-none flex-col gap-4">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-base font-medium text-[#444] transition-colors hover:text-black"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li className="border-t border-[rgba(0,0,0,0.05)] pt-2">
                  <a href="#resume" className="flex items-center gap-2 py-2 text-base font-semibold text-[#111]">
                    <Download className="h-5 w-5" />
                    下载简历
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>

      <main
        id="top"
        className="relative mx-auto grid min-h-screen w-full max-w-[1400px] items-center gap-14 px-4 pb-16 pt-36 md:grid-cols-2 md:px-12 lg:gap-16"
      >
        <div className="z-[2]">
          <div className="mb-6 inline-flex items-center rounded-full border border-[#e5e5e5] bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wider shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
            <span className="mr-2 h-2 w-2 rounded-full bg-[#10b981]" />
            AI x Spatial Intelligence Portfolio
          </div>

          <div className="mb-8">
            <p className="mb-2 text-[48px] font-semibold leading-none tracking-[-0.06em] text-black sm:text-[72px]">
              韦舒元
            </p>
            <p className="font-['Space_Grotesk'] text-sm font-semibold uppercase tracking-[0.22em] text-[#666]">
              Wei Shuyuan / Sowon Wei
            </p>
          </div>

          <h1 className="font-['Space_Grotesk'] mb-6 text-[42px] font-semibold leading-[0.98] tracking-[-0.03em] text-black sm:text-[58px] lg:text-[70px]">
            Designing Intelligent
            <br />
            Experiences for
            <br />
            <span className="bg-gradient-to-r from-[#ff4d8c] to-[#dbff00] bg-clip-text font-normal italic text-transparent">
              Human-Space Interaction.
            </span>
          </h1>

          <p className="mb-10 max-w-[600px] text-[17px] leading-[1.9] tracking-[0.01em] text-[#444] md:text-lg">
            相比把 AI 视为效率工具，我更关心它如何改变人的感知方式。从空间情绪、环境体验到工作流协同，我希望探索人与智能系统之间更自然的关系。
          </p>

          <div className="mb-10 flex flex-wrap gap-2">
            {["Harbin Institute of Technology, Shenzhen", "AI Product", "Spatial Intelligence", "Creative Technology"].map(
              (tag, index) => (
                <Tag key={tag} accent={index === 0}>
                  {tag}
                </Tag>
              ),
            )}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#111] px-9 py-[18px] text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#222] hover:shadow-[0_10px_20px_rgba(0,0,0,0.15)]"
            >
              查看项目
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#resume"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#e5e5e5] bg-white/60 px-9 py-[18px] text-base font-semibold transition-all hover:border-black hover:bg-white"
            >
              <Download className="h-5 w-5" />
              下载简历
            </a>
          </div>
        </div>

        <div className="relative h-[620px] w-full md:h-[740px]">
          <div className="group relative h-full w-full -rotate-2 overflow-hidden rounded-[40px] border border-white/70 bg-[#101010] shadow-[0_30px_60px_rgba(0,0,0,0.1)] transition-transform duration-500 hover:rotate-0">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#101010_0%,#f7f7f7_48%,#ffffff_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] bg-[size:44px_44px]" />
            <div className="absolute left-8 top-8 z-[3] flex items-center gap-2 rounded-full bg-[#dbff00] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.08em] text-black shadow-[0_10px_20px_rgba(0,0,0,0.1)]">
              <Sparkles className="h-4 w-4" />
              AI x Space x Perception
            </div>

            <div className="absolute right-8 top-24 z-[2] w-[220px] rounded-[24px] border border-white/50 bg-white/75 p-4 shadow-[0_20px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl">
              <div className="mb-3 flex items-center gap-2">
                <Map className="h-4 w-4 text-[#ff4d8c]" />
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#777]">Spatial Map</p>
              </div>
              <div className="grid grid-cols-4 gap-1">
                {Array.from({ length: 16 }).map((_, index) => (
                  <div
                    key={index}
                    className={`h-8 rounded-md ${index % 5 === 0 ? "bg-[#dbff00]" : index % 3 === 0 ? "bg-[#111]" : "bg-[#e9e9e9]"}`}
                  />
                ))}
              </div>
            </div>

            <div className="absolute left-[10%] top-[25%] z-[2] w-[78%] rounded-[28px] border border-white/70 bg-white/80 p-5 shadow-[0_24px_60px_rgba(0,0,0,0.12)] backdrop-blur-2xl transition-transform duration-700 group-hover:scale-[1.02]">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#777]">System Interface</p>
                  <h3 className="font-['Space_Grotesk'] text-2xl font-semibold tracking-[-0.03em]">
                    Perception to workflow
                  </h3>
                </div>
                <div className="rounded-full bg-[#111] p-3 text-white">
                  <BrainCircuit className="h-6 w-6" />
                </div>
              </div>

              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                {["Image", "Emotion", "Action"].map((node, index) => (
                  <div
                    key={node}
                    className={`rounded-2xl border border-[#ececec] bg-white p-4 shadow-[0_10px_24px_rgba(0,0,0,0.04)] ${
                      index === 1 ? "col-start-3" : ""
                    }`}
                  >
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#888]">
                      Node 0{index + 1}
                    </p>
                    <p className="font-['Space_Grotesk'] text-lg font-semibold">{node}</p>
                  </div>
                ))}
                <div className="row-start-1 flex h-12 w-12 items-center justify-center rounded-full border border-[#111] bg-[#111] text-white">
                  <Network className="h-5 w-5" />
                </div>
              </div>

              <SignalWave className="mt-5 h-20 w-full text-[#ff4d8c]" />

              <div className="mt-5 flex flex-wrap gap-2">
                {["AI Agent", "RAG", "Memory", "Dashboard", "Multimodal"].map((tag, index) => (
                  <Tag key={tag} accent={index === 0}>
                    {tag}
                  </Tag>
                ))}
              </div>
            </div>

            <div className="floating-card absolute bottom-[64px] left-[-14px] z-[4] flex items-center gap-3 rounded-[20px] border border-white/60 bg-white/75 p-4 shadow-[0_20px_40px_rgba(0,0,0,0.08)] backdrop-blur-2xl animate-[float_6s_ease-in-out_infinite]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#111] text-[#dbff00]">
                <DatabaseZap className="h-6 w-6" />
              </div>
              <div>
                <h4 className="mb-0.5 text-sm font-semibold">RAG Knowledge Layer</h4>
                <p className="text-xs text-[#666]">Policies / SOPs / Field Data</p>
              </div>
            </div>

            <div className="floating-card absolute bottom-[180px] right-[-18px] z-[4] flex items-center gap-3 rounded-[20px] border border-white/60 bg-white/75 p-4 shadow-[0_20px_40px_rgba(0,0,0,0.08)] backdrop-blur-2xl animate-[float_6s_ease-in-out_1.5s_infinite]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ff4d8c] text-white">
                <Layers3 className="h-6 w-6" />
              </div>
              <div>
                <h4 className="mb-0.5 text-sm font-semibold">Dashboard Fragment</h4>
                <p className="text-xs text-[#666]">Alerts / Tasks / Insights</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section id="about" className="relative mx-auto max-w-[1400px] px-4 py-28 md:px-12">
        <div className="overflow-hidden rounded-[40px] border border-[rgba(0,0,0,0.06)] bg-gradient-to-br from-white to-[#f8f8f8] p-8 shadow-[0_40px_80px_rgba(0,0,0,0.03)] md:p-16">
          <div className="mb-10 inline-flex items-center rounded-full border border-[#ffe0eb] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider shadow-[0_4px_12px_rgba(255,77,140,0.08)]">
            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-[#ff4d8c]" />
            About / Personal Philosophy
          </div>
          <p className="max-w-[1020px] text-2xl font-medium leading-[1.45] tracking-[-0.02em] text-black md:text-[42px]">
            我关注的不只是 AI 如何提升效率，而是智能系统如何重新塑造人与空间、情绪与环境之间的关系。
          </p>
          <div className="mt-10 grid gap-8 text-[17px] leading-[2] tracking-[0.01em] text-[#4d4d4d] md:grid-cols-2">
            <p>
              从智慧运营中的工作流设计，到多感官实验中的空间恢复性研究，我希望探索 AI 在真实世界中的感知、理解与交互方式。
            </p>
            <p>
              我是韦舒元，哈尔滨工业大学（深圳）城乡规划研究生在读，正在走向 AI 产品、Creative Tech 与空间智能交叉的方向。对我来说，好的产品不是功能的堆叠，而是把复杂系统转化为可理解、可行动、可感知的体验。
            </p>
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            {philosophyKeywords.map((keyword, index) => (
              <Tag key={keyword} accent={index === 0}>
                {keyword}
              </Tag>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(219,255,0,0.18),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:100%_38px]" />
        <div className="relative mx-auto max-w-[1400px] px-4 md:px-12">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#ff4d8c]">
            AI as a medium for perception, memory, and interaction.
          </p>
          <h2 className="max-w-[980px] text-[34px] font-semibold leading-[1.28] tracking-[-0.04em] text-black md:text-[64px]">
            AI 不只是提效增值工具，
            <br />
            它也正在改变人感知环境、情绪与记忆之间的关系。
          </h2>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-[1600px] px-4 py-24 md:px-12">
        <div className="mx-auto mb-10 flex max-w-[1400px] flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#ff4d8c]">Focused Case Studies</p>
            <h2 className="font-['Space_Grotesk'] text-[40px] font-semibold tracking-[-0.03em] md:text-[56px]">
              Featured Project Carousel
            </h2>
          </div>
          <CarouselControls
            active={activeProject}
            total={projects.length}
            onPrev={prevProject}
            onNext={nextProject}
            onSelect={setActiveProject}
          />
        </div>

        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeProject * 88}vw)` }}
          >
            {projects.map((project) => (
              <article
                key={project.number}
                className="group grid w-[86vw] shrink-0 gap-8 rounded-[32px] border border-[#eee] bg-white p-6 shadow-[0_30px_70px_rgba(0,0,0,0.05)] md:grid-cols-[0.95fr_1.05fr] md:p-9"
              >
                <div className="flex flex-col justify-between gap-10">
                  <div>
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#ff4d8c]">{project.number}</p>
                    <h3 className="font-['Space_Grotesk'] mb-3 text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-[44px]">
                      {project.title}
                    </h3>
                    <p className="mb-6 text-sm font-semibold uppercase tracking-[0.16em] text-[#888]">{project.subtitle}</p>
                    <p className="mb-6 text-[16px] leading-[1.95] tracking-[0.01em] text-[#444]">{project.description}</p>
                    <div className="mb-6 rounded-[20px] border border-[#eee] bg-[#fafafa] p-5">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#888]">My Role</p>
                      <p className="text-[15px] leading-[1.8] text-[#333]">{project.role}</p>
                    </div>
                  </div>
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#888]">Impact / Highlights</p>
                    <div className="mb-6 grid gap-2 sm:grid-cols-2">
                      {project.impact.map((item) => (
                        <div key={item} className="rounded-2xl bg-[#f6f6f6] px-4 py-3 text-sm font-medium text-[#333]">
                          {item}
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <Tag key={tag} accent={index === 0}>
                          {tag}
                        </Tag>
                      ))}
                    </div>
                  </div>
                </div>
                <ProjectVisual type={project.visual} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="explorations" className="mx-auto max-w-[1600px] px-4 py-24 md:px-12">
        <div className="mx-auto mb-10 flex max-w-[1400px] flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-[760px]">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#10b981]">Research Archive</p>
            <h2 className="font-['Space_Grotesk'] mb-5 text-[40px] font-semibold tracking-[-0.03em] md:text-[56px]">
              Explorations Archive
            </h2>
            <p className="text-[17px] leading-[1.9] text-[#555]">一些关于城市、空间、感知、情绪与 AI 系统的长期观察。</p>
          </div>
          <CarouselControls
            active={activeExploration}
            total={explorations.length}
            onPrev={prevExploration}
            onNext={nextExploration}
            onSelect={setActiveExploration}
          />
        </div>

        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeExploration * 84}vw)` }}
          >
            {explorations.map((item, index) => (
              <article
                key={item.number}
                className="relative grid w-[82vw] shrink-0 overflow-hidden rounded-[32px] border border-[#eee] bg-[#fffdf8] p-7 shadow-[0_24px_60px_rgba(0,0,0,0.05)] md:grid-cols-[0.85fr_1.15fr] md:p-9"
              >
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.045)_1px,transparent_1px)] bg-[size:100%_32px]" />
                <div className="relative z-[2] border-b border-[#eee] pb-6 md:border-b-0 md:border-r md:pb-0 md:pr-8">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#888]">{item.number}</p>
                  <p className="font-['Space_Grotesk'] mb-8 text-[64px] font-semibold leading-none tracking-[-0.08em] text-[#111]">
                    {item.year}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <Tag key={tag} accent={tagIndex === 0}>
                        {tag}
                      </Tag>
                    ))}
                  </div>
                </div>
                <div className="relative z-[2] pt-6 md:pl-8 md:pt-0">
                  <div className="mb-8 flex h-32 items-center justify-between rounded-[24px] border border-[#eee] bg-white/70 p-5">
                    <Map className="h-12 w-12 text-[#ff4d8c]" />
                    <SignalWave className="h-20 w-[65%] text-[#111]" />
                  </div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#10b981]">Notebook Spread 0{index + 1}</p>
                  <h3 className="font-['Space_Grotesk'] mb-3 text-3xl font-semibold tracking-[-0.03em]">{item.title}</h3>
                  <p className="mb-6 text-sm font-semibold uppercase tracking-[0.14em] text-[#888]">{item.subtitle}</p>
                  <p className="text-[16px] leading-[1.95] tracking-[0.01em] text-[#444]">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-[1600px] px-4 py-24 md:px-12">
        <div className="mx-auto mb-10 flex max-w-[1400px] flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#ff4d8c]">Case Snapshots</p>
            <h2 className="font-['Space_Grotesk'] text-[40px] font-semibold tracking-[-0.03em] md:text-[56px]">
              Experience Archive
            </h2>
          </div>
          <CarouselControls
            active={activeExperience}
            total={experiences.length}
            onPrev={prevExperience}
            onNext={nextExperience}
            onSelect={setActiveExperience}
          />
        </div>

        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeExperience * 86}vw)` }}
          >
            {experiences.map((item) => (
              <article
                key={item.number}
                className="grid w-[84vw] shrink-0 gap-8 rounded-[32px] border border-[#eee] bg-white p-7 shadow-[0_24px_60px_rgba(0,0,0,0.05)] md:grid-cols-[0.8fr_1.2fr] md:p-9"
              >
                <div className="rounded-[26px] bg-[#111] p-7 text-white">
                  <p className="mb-8 text-xs font-semibold uppercase tracking-[0.18em] text-[#dbff00]">{item.number}</p>
                  <h3 className="mb-4 text-3xl font-semibold leading-tight tracking-[-0.04em]">{item.organization}</h3>
                  <p className="mb-5 text-lg leading-relaxed text-white/78">{item.role}</p>
                  <p className="font-['Space_Grotesk'] text-sm uppercase tracking-[0.18em] text-white/45">{item.time}</p>
                </div>
                <div>
                  <p className="mb-6 text-[17px] leading-[1.9] tracking-[0.01em] text-[#444]">{item.summary}</p>
                  <div className="mb-6 grid gap-3 sm:grid-cols-2">
                    {item.responsibilities.map((responsibility) => (
                      <div key={responsibility} className="rounded-2xl border border-[#eee] bg-[#fafafa] px-4 py-3 text-sm font-medium text-[#333]">
                        {responsibility}
                      </div>
                    ))}
                  </div>
                  <div className="mb-6 rounded-[22px] border border-[#ffe0eb] bg-[#fff5f8] p-5">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#ff4d8c]">Impact</p>
                    <p className="text-[15px] leading-[1.8] text-[#444]">{item.impact}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.keywords.map((keyword, index) => (
                      <Tag key={keyword} accent={index === 0}>
                        {keyword}
                      </Tag>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="resume" className="mx-auto max-w-[1400px] px-4 py-20 md:px-12">
        <div className="grid gap-8 rounded-[40px] border border-[#eee] bg-white p-8 shadow-[0_30px_70px_rgba(0,0,0,0.04)] md:grid-cols-[0.85fr_1.15fr] md:p-12">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#10b981]">Resume / Capabilities</p>
            <h2 className="font-['Space_Grotesk'] mb-6 text-[38px] font-semibold leading-tight tracking-[-0.03em] md:text-[52px]">
              Download Resume
            </h2>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111] px-8 py-4 text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#222]"
            >
              <Download className="h-5 w-5" />
              获取简历
            </a>
          </div>
          <div>
            <p className="mb-6 text-[16px] leading-[1.9] text-[#555]">
              首页只保留与个人方向强相关的能力标签，工具型技能放入简历中承接，避免页面变成普通技能清单。
            </p>
            <div className="flex flex-wrap gap-3">
              {projectSkills.map((skill, index) => (
                <span
                  key={skill}
                  className={`rounded-full border px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-1 ${
                    index === 0 ? "border-[#dbff00] bg-[#dbff00] text-black" : "border-[#e8e8e8] bg-[#fafafa] text-[#444]"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer
        id="contact"
        className="relative mt-20 overflow-hidden bg-gradient-to-br from-[#111] to-[#1a1a1a] px-4 pb-8 pt-20 text-white md:px-12"
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(219,255,0,0.12),transparent_30%,rgba(255,77,140,0.13)_78%)]" />
        <div className="relative mx-auto max-w-[1400px]">
          <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.2fr]">
            <div>
              <div className="font-['Space_Grotesk'] mb-4 text-3xl font-bold tracking-[-0.03em]">
                sowon<span className="text-[#ff4d8c]">.</span>wei
              </div>
              <p className="max-w-[460px] text-sm leading-relaxed text-[#999]">
                AI Product / Creative Technologist / Spatial Intelligence
              </p>
            </div>
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#dbff00]">
                Exploring Future Human-AI Experiences
              </p>
              <h2 className="mb-8 max-w-[760px] text-[34px] font-semibold leading-[1.22] tracking-[-0.03em] md:text-[52px]">
                关于多模态智能、空间体验与未来系统设计，欢迎交流。
              </h2>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {contactLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center justify-center gap-2 rounded-full bg-white/10 px-4 py-3 text-sm font-semibold transition-all hover:-translate-y-1 hover:bg-white hover:text-black"
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
            <p className="text-center text-xs text-[#666] md:text-left">
              © 2026 Sowon Wei. Creative technologist portfolio for AI product roles.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-xs text-[#666] transition-colors hover:text-white">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-[999] flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(0,0,0,0.06)] bg-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] active:scale-95 ${
          showScrollTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5 text-[#ff4d8c]" />
      </button>
    </div>
  )
}
