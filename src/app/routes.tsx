import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type SVGProps,
} from "react"
import {
  createHashRouter,
  Link,
  NavLink,
  Outlet,
  useLocation,
  useOutletContext,
  useParams,
  useSearchParams,
} from "react-router"

type IconProps = SVGProps<SVGSVGElement>
function Icon({ children, ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  )
}
const Icons = {
  Grid: (p: IconProps) => (
    <Icon {...p}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </Icon>
  ),
  Shield: (p: IconProps) => (
    <Icon {...p}>
      <path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </Icon>
  ),
  Building: (p: IconProps) => (
    <Icon {...p}>
      <path d="M4 21V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v16M17 9h2a2 2 0 0 1 2 2v10M8 7h5M8 11h5M8 15h5M3 21h18M9 21v-3h3v3" />
    </Icon>
  ),
  Users: (p: IconProps) => (
    <Icon {...p}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </Icon>
  ),
  Device: (p: IconProps) => (
    <Icon {...p}>
      <rect x="6" y="3" width="12" height="18" rx="2" />
      <circle cx="12" cy="9" r="2" />
      <path d="M9 15h6M10 18h4" />
    </Icon>
  ),
  Camera: (p: IconProps) => (
    <Icon {...p}>
      <path d="m3 6 13-3 4 8-13 3-4-8ZM7 14l1 4h6M13 13l2 4M14 18h6v3M20 7l2-1v4l-1-1" />
    </Icon>
  ),
  Bell: (p: IconProps) => (
    <Icon {...p}>
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M14 21h-4" />
    </Icon>
  ),
  Search: (p: IconProps) => (
    <Icon {...p}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m20 20-5-5" />
    </Icon>
  ),
  Settings: (p: IconProps) => (
    <Icon {...p}>
      <circle cx="12" cy="12" r="3" />
      <path d="m9 3-1 3-3 1-2 3 2 2-1 3 3 2 1 3h6l1-3 3-2-1-3 2-2-2-3-3-1-1-3H9Z" />
    </Icon>
  ),
  Help: (p: IconProps) => (
    <Icon {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9a2.5 2.5 0 1 1 3.2 2.4c-.7.3-.7 1-.7 1.6M12 17h.01" />
    </Icon>
  ),
  Plus: (p: IconProps) => (
    <Icon {...p}>
      <path d="M12 5v14M5 12h14" />
    </Icon>
  ),
  Arrow: (p: IconProps) => (
    <Icon {...p}>
      <path d="m9 18 6-6-6-6" />
    </Icon>
  ),
  Down: (p: IconProps) => (
    <Icon {...p}>
      <path d="m6 9 6 6 6-6" />
    </Icon>
  ),
  Check: (p: IconProps) => (
    <Icon {...p}>
      <path d="m5 12 4 4L19 6" />
    </Icon>
  ),
  Pin: (p: IconProps) => (
    <Icon {...p}>
      <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
      <circle cx="12" cy="10" r="2" />
    </Icon>
  ),
  Plan: (p: IconProps) => (
    <Icon {...p}>
      <path d="M3 3h18v18H3V3ZM3 10h8V3M11 10v6h10M11 16v5M6 10v5" />
    </Icon>
  ),
  Refresh: (p: IconProps) => (
    <Icon {...p}>
      <path d="M20 7v5h-5M4 17v-5h5M19 11a7 7 0 0 0-12-5L4 9M5 13a7 7 0 0 0 12 5l3-3" />
    </Icon>
  ),
  Expand: (p: IconProps) => (
    <Icon {...p}>
      <path d="M8 3H3v5M16 3h5v5M21 16v5h-5M8 21H3v-5" />
    </Icon>
  ),
  Play: (p: IconProps) => (
    <Icon {...p}>
      <path d="m9 5 11 7-11 7V5Z" />
    </Icon>
  ),
  Close: (p: IconProps) => (
    <Icon {...p}>
      <path d="m6 6 12 12M6 18 18 6" />
    </Icon>
  ),
  Warning: (p: IconProps) => (
    <Icon {...p}>
      <path d="m12 3 10 18H2L12 3ZM12 9v5M12 17h.01" />
    </Icon>
  ),
  Door: (p: IconProps) => (
    <Icon {...p}>
      <path d="M5 21V3h14v18M3 21h18M14 12h.01" />
    </Icon>
  ),
  Smoke: (p: IconProps) => (
    <Icon {...p}>
      <ellipse cx="12" cy="7" rx="9" ry="4" />
      <path d="M3 7v4c0 5 18 5 18 0V7M9 18v3M15 18v3M12 17v2" />
    </Icon>
  ),
  Motion: (p: IconProps) => (
    <Icon {...p}>
      <circle cx="12" cy="12" r="2" />
      <path d="M7 7a7 7 0 0 0 0 10M17 7a7 7 0 0 1 0 10M4 4a11 11 0 0 0 0 16M20 4a11 11 0 0 1 0 16" />
    </Icon>
  ),
  Clock: (p: IconProps) => (
    <Icon {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </Icon>
  ),
  Link: (p: IconProps) => (
    <Icon {...p}>
      <path d="m10 14 4-4M8 16l-1 1a4 4 0 0 1-6-6l4-4a4 4 0 0 1 6 0M16 8l1-1a4 4 0 0 1 6 6l-4 4a4 4 0 0 1-6 0" />
    </Icon>
  ),
  Server: (p: IconProps) => (
    <Icon {...p}>
      <rect x="4" y="4" width="16" height="6" rx="2" />
      <rect x="4" y="14" width="16" height="6" rx="2" />
      <path d="M8 7h.01M8 17h.01M12 7h5M12 17h5" />
    </Icon>
  ),
  Power: (p: IconProps) => (
    <Icon {...p}>
      <path d="M12 2v10M7.8 4.8a8 8 0 1 0 8.4 0" />
    </Icon>
  ),
}

type Branch = {
  code: string
  name: string
  region: "เหนือ" | "กลาง" | "ใต้" | "ตะวันออก" | "ตะวันตก"
  province: string
  district: string
  subdistrict: string
  address: string
  manager: string
}
const initialBranches: Branch[] = [
  {
    code: "BR-001",
    name: "สำนักงานใหญ่",
    region: "กลาง",
    province: "กรุงเทพมหานคร",
    district: "บางรัก",
    subdistrict: "สีลม",
    address: "125 ถนนสีลม",
    manager: "วรัญญา สีแสง",
  },
  {
    code: "BR-002",
    name: "สาขาเชียงใหม่",
    region: "เหนือ",
    province: "เชียงใหม่",
    district: "เมืองเชียงใหม่",
    subdistrict: "ช้างเผือก",
    address: "88 ถนนโชตนา",
    manager: "ธีรภัทร วงศ์ดี",
  },
  {
    code: "BR-003",
    name: "สาขาขอนแก่น",
    region: "ตะวันออก",
    province: "ขอนแก่น",
    district: "เมืองขอนแก่น",
    subdistrict: "ในเมือง",
    address: "45 ถนนมิตรภาพ",
    manager: "นิชา พัฒนกุล",
  },
  {
    code: "BR-004",
    name: "สาขาชลบุรี",
    region: "ตะวันออก",
    province: "ชลบุรี",
    district: "เมืองชลบุรี",
    subdistrict: "เสม็ด",
    address: "19 ถนนสุขุมวิท",
    manager: "กิตติศักดิ์ แสงทอง",
  },
  {
    code: "BR-005",
    name: "สาขาภูเก็ต",
    region: "ใต้",
    province: "ภูเก็ต",
    district: "เมืองภูเก็ต",
    subdistrict: "ตลาดใหญ่",
    address: "72 ถนนภูเก็ต",
    manager: "อรทัย อรัญวรรณคุณ",
  },
]
const employeeNames = [
  "วรัญญา ศรีสุข",
  "ณัฐพล ใจดี",
  "สุภาวดี แสงจันทร์",
  "ธนกร วัฒนชัย",
  "พิมพ์ชนก สุขสวัสดิ์",
]
const maleEmployeePhotos = [
  "https://images.unsplash.com/photo-1629272039203-7d76fdaf1324?auto=format&fit=crop&w=240&h=240&q=85",
  "https://images.unsplash.com/photo-1544168190-79c17527004f?auto=format&fit=crop&w=240&h=240&q=85",
  "https://images.unsplash.com/photo-1676288869178-1761f567ea91?auto=format&fit=crop&w=240&h=240&q=85",
]
const femaleEmployeePhotos = [
  "https://images.unsplash.com/photo-1762341124796-530c0085f7d8?auto=format&fit=crop&w=240&h=240&q=85",
  "https://images.unsplash.com/photo-1758691737605-69a0e78bd193?auto=format&fit=crop&w=240&h=240&q=85",
  "https://images.unsplash.com/photo-1620409415692-920100aa0ce3?auto=format&fit=crop&w=240&h=240&q=85",
]
const femaleFirstNames = ["วรัญญา", "สุภาวดี", "พิมพ์ชนก", "นิชา", "จิราภา", "อรทัย"]
function staffFor(branch: Branch) {
  return (
    branch.code === "BR-001"
      ? employeeNames
      : [branch.manager, "ภัทรพล มีสุข", "จิราภา วงศ์สวัสดิ์"]
  ).map((name, i) => {
    const isFemale = femaleFirstNames.some((firstName) => name.startsWith(firstName))
    const photoIndex = (Number(branch.code.slice(-1)) + i) % 3
    return {
    id: `${branch.code}-E0${i + 1}`,
    name,
    role: [
      "ผู้จัดการสาขา",
      "รองผู้จัดการสาขา",
      "แผนกบัญชี",
      "ฝ่ายความปลอดภัย",
      "ฝ่ายบุคคล",
    ][i],
    department: [
      "บริหารสาขา",
      "บริหารสาขา",
      "บัญชีและการเงิน",
      "ความปลอดภัย",
      "ทรัพยากรบุคคล",
    ][i],
    start: [
      "1 มี.ค. 2565",
      "15 มิ.ย. 2565",
      "1 ก.พ. 2566",
      "10 เม.ย. 2566",
      "1 พ.ย. 2566",
    ][i],
    branch: branch.name,
    address: `${32 + i * 7} ถนน${branch.province} ${branch.province}`,
    phone: `08${i + 1}-245-${String(6100 + i * 37)}`,
    email: `staff${i + 1}.${branch.code.toLowerCase()}@smartoffice.co.th`,
    lineId: `smart.${branch.code.toLowerCase()}.${String(i + 1).padStart(2, "0")}`,
    photo: (isFemale ? femaleEmployeePhotos : maleEmployeePhotos)[photoIndex],
    access: (["Admin", "Supervisor", "User", "User", "Supervisor"] as const)[i],
    }
  })
}
type Device = {
  id: string
  model: string
  type: string
  location: string
  online: boolean
  icon: typeof Icons.Device
}
function devicesFor(branch: Branch): Device[] {
  return [
    ...Array.from({ length: 4 }, (_, i) => ({
      id: `CAM-0${i + 1}`,
      model: "CCTV",
      type: "กล้องวงจรปิด",
      location: ["โถงต้อนรับ", "พื้นที่สำนักงาน", "ทางเข้าอาคาร", "ลานจอดรถ"][i],
      online: !(i === 3 && branch.code === "BR-003"),
      icon: Icons.Camera,
    })),
    ...Array.from({ length: 2 }, (_, i) => ({
      id: `AC-0${i + 1}`,
      model: "DH-G510S",
      type: "เครื่อง Access Control",
      location: ["ประตูทางเข้าหลัก", "ประตูสำนักงาน"][i],
      online: true,
      icon: Icons.Device,
    })),
    ...Array.from({ length: 4 }, (_, i) => ({
      id: `DC-0${i + 1}`,
      model: "NZ-DD",
      type: "Magnetic Door Sensor",
      location: [
        "ประตูทางเข้าหลัก",
        "ประตูสำนักงาน",
        "ประตูห้องประชุม",
        "ประตูทางออกฉุกเฉิน",
      ][i],
      online: true,
      icon: Icons.Door,
    })),
    ...Array.from({ length: 3 }, (_, i) => ({
      id: `SD-0${i + 1}`,
      model: "NZ-SA",
      type: "Smoke Sensor",
      location: ["พื้นที่สำนักงาน", "ห้องประชุม", "ห้องเก็บเอกสาร"][i],
      online: true,
      icon: Icons.Smoke,
    })),
    ...Array.from({ length: 3 }, (_, i) => ({
      id: `PIR-0${i + 1}`,
      model: "NZ-CT",
      type: "PIR Sensor",
      location: ["โถงต้อนรับ", "ทางเดิน", "ห้องเก็บเอกสาร"][i],
      online: !(i === 2 && branch.code === "BR-001"),
      icon: Icons.Motion,
    })),
  ]
}
function deviceToneClass(model: string) {
  if (model === "CCTV") return "device-tone-cctv"
  if (model === "DH-G510S") return "device-tone-access"
  if (model === "NZ-DD") return "device-tone-door"
  if (model === "NZ-SA") return "device-tone-smoke"
  return "device-tone-pir"
}
const cameraPhotos = [
  "https://images.unsplash.com/photo-1578991624414-276ef23a534f?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1772001936267-b6058748eff4?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1749310726959-d8fccfef7ee4?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1565262353342-6e919eab5b58?auto=format&fit=crop&w=900&q=85",
]
function readStored<T>(key: string, fallback: T): T {
  try {
    return JSON.parse(localStorage.getItem(key) || "null") ?? fallback
  } catch {
    return fallback
  }
}
function Badge({
  children,
  tone = "green",
}: {
  children: ReactNode
  tone?: "green" | "amber" | "slate" | "blue"
}) {
  return (
    <span className={`badge badge-${tone}`}>
      <span className="status-dot" />
      {children}
    </span>
  )
}
function Button({
  children,
  primary,
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { primary?: boolean }) {
  return (
    <button
      className={`button ${primary ? "button-primary" : ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
function SearchBox({
  value,
  onChange,
  placeholder,
}: {
  value: string
  onChange: (v: string) => void
  placeholder: string
}) {
  return (
    <label className="searchbox">
      <Icons.Search />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
      />
    </label>
  )
}
function SectionTitle({
  title,
  subtitle,
  action,
}: {
  title: string
  subtitle?: string
  action?: ReactNode
}) {
  return (
    <div className="section-heading">
      <div>
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </div>
      {action}
    </div>
  )
}
function Modal({
  title,
  children,
  onClose,
  wide,
}: {
  title: string
  children: ReactNode
  onClose: () => void
  wide?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const closeRef = useRef(onClose)
  closeRef.current = onClose
  useEffect(() => {
    const previous = document.activeElement as HTMLElement
    ref.current?.focus()
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeRef.current()
      if (e.key === "Tab") {
        const controls = ref.current?.querySelectorAll<HTMLElement>(
          'button, a[href], input, select, [tabindex="0"]',
        )
        if (!controls?.length) return
        const first = controls[0],
          last = controls[controls.length - 1]
        if (
          e.shiftKey &&
          (document.activeElement === first ||
            document.activeElement === ref.current)
        ) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener("keydown", handler)
    return () => {
      document.removeEventListener("keydown", handler)
      previous?.focus()
    }
  }, [])
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        ref={ref}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={`modal ${wide ? "modal-wide" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-heading">
          <h2>{title}</h2>
          <Button aria-label="ปิดหน้าต่าง" onClick={onClose}>
            <Icons.Close />
          </Button>
        </div>
        {children}
      </div>
    </div>
  )
}
type AppContext = {
  branches: Branch[]
  updateBranch: (b: Branch) => void
}
function DashboardLayout() {
  const location = useLocation()
  const [branches, setBranches] = useState(() =>
    readStored("Smartoffice-branches-v1", initialBranches),
  )
  const [notice, setNotice] = useState(false)
  const [help, setHelp] = useState(false)
  const [search, setSearch] = useState("")
  useEffect(() => {
    setSearch("")
    setNotice(false)
  }, [location.pathname])
  const active = branches.find(
    (b) => location.pathname === `/branches/${b.code}`,
  )
  const updateBranch = (branch: Branch) => {
    const next = branches.map((b) => (b.code === branch.code ? branch : b))
    setBranches(next)
    localStorage.setItem("Smartoffice-branches-v1", JSON.stringify(next))
  }
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <Link to="/" className="brand">
          <span className="brand-symbol">
            <Icons.Shield />
          </span>
          <span>
            <strong>
              Smart Office<span className="brand-period">.</span>
            </strong>
            <small>ระบบรักษาความปลอดภัยสำนักงาน</small>
          </span>
        </Link>
        <div className="workspace">
          <span className="workspace-icon">
            <Icons.Building />
          </span>
          <div>
            <strong>ศูนย์ควบคุมส่วนกลาง</strong>
            <small>ฝ่ายความปลอดภัย · สำนักงานใหญ่</small>
          </div>
          <Icons.Down />
        </div>
        <nav aria-label="เมนูหลัก" className="main-nav">
          <p className="nav-caption">ศูนย์เฝ้าระวัง</p>
          <NavLink
            end
            to="/"
            className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
          >
            <Icons.Grid />
            ภาพรวมความปลอดภัย
          </NavLink>
          <NavLink
            end
            to="/branches"
            className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
          >
            <Icons.Building />
            สาขาทั้งหมด<span className="nav-count">{branches.length}</span>
          </NavLink>
          <div className="nav-caption branch-caption">
            สาขาของคุณ<span>{branches.length} สาขา</span>
          </div>
          <div className="branch-nav">
            {branches.map((branch) => (
              <div key={branch.code}>
                <NavLink
                  to={`/branches/${branch.code}`}
                  className={({ isActive }) =>
                    `branch-link ${isActive ? "selected" : ""}`
                  }
                >
                  <span
                    className={`status-dot ${
                      devicesFor(branch).some((d) => !d.online)
                        ? "dot-amber"
                        : "dot-green"
                    }`}
                  />
                  <span>{branch.name}</span>
                  {active?.code === branch.code ? (
                    <Icons.Down />
                  ) : (
                    <Icons.Arrow />
                  )}
                </NavLink>
                {active?.code === branch.code && (
                  <div className="branch-subnav">
                    {[
                      ["overview", "ภาพรวมสาขา"],
                      ["cameras", "กล้องวงจรปิด"],
                      ["equipment", "อุปกรณ์ความปลอดภัย"],
                      ["plan", "ผังแปลนสาขา"],
                      ["employees", "พนักงาน"],
                    ].map(([key, label]) => (
                      <Link
                        className={
                          (new URLSearchParams(location.search).get("tab") ||
                            "overview") === key
                            ? "sub-active"
                            : ""
                        }
                        to={`/branches/${branch.code}?tab=${key}`}
                        key={key}
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="nav-caption management-caption">การจัดการ</p>
          <NavLink
            to="/employees"
            className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
          >
            <Icons.Users />
            พนักงานทั้งหมด
          </NavLink>
          <NavLink
            to="/equipment"
            className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
          >
            <Icons.Device />
            อุปกรณ์ทั้งหมด
          </NavLink>
          <NavLink
            to="/tasks"
            className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
          >
            <Icons.Check />
            ขั้นตอนปฏิบัติงาน
          </NavLink>
          <NavLink
            to="/logs"
            className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
          >
            <Icons.Clock />
            รายการแจ้งเตือน
          </NavLink>
          <NavLink
            to="/reports"
            className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
          >
            <Icons.Grid />
            รายงาน
          </NavLink>
          <NavLink
            to="/announcements"
            className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
          >
            <Icons.Bell />
            ประกาศ
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
          >
            <Icons.Help />
            รายละเอียดโปรแกรม
          </NavLink>
        </nav>
        <div className="sidebar-bottom">
          <div className="system-health">
            <span className="status-dot dot-green" />
            <span>ระบบเฝ้าระวังพร้อมใช้งาน</span>
            <Icons.Shield />
          </div>
          <button className="help-link" onClick={() => setHelp(true)}>
            <Icons.Help />
            คู่มือการใช้งาน
            <Icons.Arrow />
          </button>
          <div className="user-profile">
            <span className="avatar">สว</span>
            <div>
              <strong>สมชาย วงศ์ดี</strong>
              <small>ผู้ดูแลความปลอดภัย</small>
            </div>
            <Icons.Shield />
          </div>
        </div>
      </aside>
      <main className="main-content">
        <header className="topbar">
          <div className="breadcrumb">
            <Icons.Shield />
            <span>ศูนย์รักษาความปลอดภัย</span>
            <Icons.Arrow />
            <strong>
              {active?.name ||
                ({
                  "/": "ภาพรวม",
                  "/branches": "สาขาทั้งหมด",
                  "/employees": "พนักงาน",
                  "/equipment": "อุปกรณ์",
                  "/tasks": "ขั้นตอนปฏิบัติงาน",
                  "/logs": "รายการแจ้งเตือน",
                  "/reports": "รายงาน",
                  "/announcements": "ประกาศ",
                  "/about": "รายละเอียดโปรแกรม",
                }[location.pathname] ??
                  "ไม่พบหน้า")}
            </strong>
          </div>
          <div className="topbar-actions">
            <div className="global-search">
              <SearchBox
                value={search}
                onChange={setSearch}
                placeholder="ค้นหาสาขา..."
              />
              {search && (
                <div className="search-results">
                  {branches
                    .filter((b) => `${b.name} ${b.province}`.includes(search))
                    .map((b) => (
                      <Link key={b.code} to={`/branches/${b.code}`}>
                        <Icons.Building />
                        {b.name}
                      </Link>
                    ))}
                  {!branches.some((b) =>
                    `${b.name} ${b.province}`.includes(search),
                  ) && <p>ไม่พบสาขาที่ค้นหา</p>}
                </div>
              )}
            </div>
            <div className="topbar-divider" />
            <button
              className="notification-button"
              aria-label="การแจ้งเตือน"
              aria-expanded={notice}
              onClick={() => setNotice(!notice)}
            >
              <Icons.Bell />
              <span />
            </button>
            <span className="avatar avatar-small">สว</span>
            {notice && (
              <div className="notification-popover">
                <strong>การแจ้งเตือนล่าสุด</strong>
                <p>เซ็นเซอร์ห้องเก็บเอกสาร · สำนักงานใหญ่ ออฟไลน์</p>
                <p>กล้องลานจอดรถ · สาขาขอนแก่น ออฟไลน์</p>
                <small>อัปเดตจากศูนย์ควบคุมส่วนกลาง</small>
              </div>
            )}
          </div>
        </header>
        <div className="page-content">
          <Outlet context={{ branches, updateBranch } satisfies AppContext} />
        </div>
        <PageFooter />
      </main>
      {help && (
        <Modal title="คู่มือการใช้งาน" onClose={() => setHelp(false)}>
          <div className="help-content">
            <p>
              เลือกสาขาจากเมนูด้านซ้ายเพื่อดูภาพรวม กล้องวงจรปิด อุปกรณ์ ผังแปลน
              และพนักงานของสาขานั้น
            </p>
            <p>
              กด “แก้ไขข้อมูลสาขา” เพื่อเปลี่ยนที่อยู่ และกดภาพกล้องเพื่อตั้งค่าลิงก์รับชมผ่าน HTTPS
            </p>
            <div className="info-note">
              <Icons.Help />
              ข้อมูลสาขาและลิงก์กล้องจะถูกบันทึกอย่างปลอดภัยในเบราว์เซอร์นี้
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}
function PageFooter() {
  const [now, setNow] = useState(new Date())
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])
  return (
    <footer className="page-footer">
      <span>
        <Icons.Shield />
        Smart Office · ศูนย์เฝ้าระวังความปลอดภัย
      </span>
      <span>
        ระบบทำงานปกติ<span className="footer-separator">|</span>
        {now.toLocaleDateString("th-TH", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}{" "}
        · {now.toLocaleTimeString("th-TH")}
      </span>
    </footer>
  )
}
function PageHeading({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children?: ReactNode
}) {
  return (
    <div className="page-heading">
      <div>
        <div className="eyebrow">
          <span />
          ศูนย์เฝ้าระวังส่วนกลาง
        </div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="heading-actions">{children}</div>
    </div>
  )
}
function Metrics({ branches }: { branches: Branch[] }) {
  const devices = branches.flatMap(devicesFor),
    monitoredDevices = devices.filter((d) => d.model !== "CCTV"),
    online = monitoredDevices.filter((d) => d.online).length,
    cameras = devices.filter((d) => d.model === "CCTV")
  const data = [
    {
      label: branches.length === 1 ? "พนักงานประจำสาขา" : "สาขาในระบบ",
      value:
        branches.length === 1 ? staffFor(branches[0]).length : branches.length,
      suffix: branches.length === 1 ? "คน" : "สาขา",
      note: branches.length === 1 ? "ข้อมูลบุคลากรประจำสาขา" : " " ,
      icon: branches.length === 1 ? Icons.Users : Icons.Building,
      tone: "blue",
    },
    {
      label: "อุปกรณ์ออนไลน์",
      value: online,
      suffix: `/ ${monitoredDevices.length}`,
      note: `พร้อมใช้งาน ${Math.round((online / monitoredDevices.length) * 100)}% ของอุปกรณ์ทั้งหมด`,
      icon: Icons.Device,
      tone: "green",
    },
    {
      label: "กล้องวงจรปิด",
      value: cameras.length,
      suffix: `/ ${cameras.length}`,
      note: "ครอบคลุมทุกพื้นที่สำคัญ",
      icon: Icons.Camera,
      tone: "blue",
    },
    {
      label: "ต้องตรวจสอบ",
      value: monitoredDevices.length - online,
      suffix: "รายการ",
      note: "อุปกรณ์ขาดการเชื่อมต่อ",
      icon: Icons.Warning,
      tone: "amber",
    },
  ]
  return (
    <div className="metrics-grid">
      {data.map((m, i) => (
        <article className={`metric-card metric-${m.tone}`} key={m.label}>
          <div className="metric-top">
            <span>{m.label}</span>
            <span className={`metric-icon icon-${m.tone}`}>
              <m.icon />
            </span>
          </div>
          <div className="metric-value">
            {String(m.value).padStart(2, "0")}
            <span>{m.suffix}</span>
            {i === 1 && (
              <span className="mini-bars">
                {[3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10].map((h, j) => (
                  <i key={j} className={`bar-height-${h}`} />
                ))}
              </span>
            )}
          </div>
         
        </article>
      ))}
    </div>
  )
}
function OverviewPage() {
  const { branches } = useOutletContext<AppContext>()
  const [selected, setSelected] = useState(branches[0].code)
  const [refresh, setRefresh] = useState(false)
  const branch = branches.find((b) => b.code === selected) || branches[0]
  return (
    <>
      <PageHeading
        title="ภาพรวมความปลอดภัย"
        description="เฝ้าระวังทุกสาขา ดูแลทุกพื้นที่ จากศูนย์ควบคุมเดียว"
      >
        <Badge tone="blue">ศูนย์ควบคุมออนไลน์</Badge>
        <Button
          onClick={() => {
            setRefresh(true)
            setTimeout(() => setRefresh(false), 1000)
          }}
        >
          <Icons.Refresh className={refresh ? "spinning" : ""} />
          {refresh ? "อัปเดตข้อมูลแล้ว" : "รีเฟรชข้อมูล"}
        </Button>
      </PageHeading>
      <EmergencyAlertPanel />
      <div className="security-banner">
        <span className="banner-icon">
          <Icons.Shield />
        </span>
        <div>
          <strong>ทุกสาขาอยู่ภายใต้การเฝ้าระวัง</strong>
          <p>
            ระบบความปลอดภัย {branches.length} สาขา · มีอุปกรณ์ 2
            รายการที่ควรตรวจสอบการเชื่อมต่อ
          </p>
        </div>
        <div className="banner-status">
          <span className="status-dot dot-green" />
          ศูนย์ควบคุมพร้อมใช้งาน
        </div>
      </div>
      <Metrics branches={branches} />
      <div className="dashboard-grid">
        <div className="dashboard-primary">
          <CamerasPanel
            branch={branch}
            compact
            selector={
              <select
                aria-label="เลือกสาขาสำหรับกล้อง"
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
              >
                {branches.map((b) => (
                  <option key={b.code} value={b.code}>
                    {b.name}
                  </option>
                ))}
              </select>
            }
          />
          <DeviceSummary branch={branch} />
        </div>
        <div className="dashboard-secondary">
          <Alerts branches={branches} />
          <BranchStatus branches={branches} />
          <div className="secure-note">
            <Icons.Shield />
            <div>
          
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
function Alerts({ branches }: { branches: Branch[] }) {
  const alerts = branches.flatMap((b) =>
    devicesFor(b)
      .filter((d) => d.model !== "CCTV" && !d.online)
      .map((d) => ({ ...d, branch: b })),
  )
  return (
    <section className="panel alert-panel">
      <SectionTitle
        title="แจ้งเตือนที่ต้องตรวจสอบ"
        action={<span className="alert-count">{alerts.length}</span>}
      />
      <div className="alert-list">
        {alerts.length ? (
          alerts.map((a, i) => (
            <Link
              key={`${a.branch.code}-${a.id}`}
              to={`/branches/${a.branch.code}?tab=equipment`}
              className="alert-item"
            >
              <span className="alert-icon">
                <a.icon />
              </span>
              <div>
                <strong>
                  เซ็นเซอร์ออฟไลน์
                </strong>
                <p>
                  {a.branch.name} · {a.location}
                </p>
                <small>
                  <Icons.Clock />
                  วันนี้ · {i === 0 ? "09:42" : "09:35"} น.
                </small>
              </div>
              <Icons.Arrow />
            </Link>
          ))
        ) : (
          <div className="empty-state">
            <Icons.Check />
            <p>ไม่มีอุปกรณ์ที่ต้องตรวจสอบ</p>
          </div>
        )}
      </div>
      <div className="alert-footer">
        <span className="status-dot dot-amber" />
        ควรตรวจสอบเครือข่ายและแหล่งจ่ายไฟ
      </div>
    </section>
  )
}
function BranchStatus({ branches }: { branches: Branch[] }) {
  return (
    <section className="panel branch-status">
      <SectionTitle
        title="สถานะสาขา"
        action={
          <Link className="text-link" to="/branches">
            ดูทั้งหมด
            <Icons.Arrow />
          </Link>
        }
      />
      <div>
        {branches.map((b) => {
          const devices = devicesFor(b).filter((d) => d.model !== "CCTV"),
            count = devices.filter((d) => d.online).length
          return (
            <Link
              className="branch-status-row"
              to={`/branches/${b.code}`}
              key={b.code}
            >
              <span className="branch-building">
                <Icons.Building />
              </span>
              <div>
                <strong>{b.name}</strong>
                <small>
                  {b.province} · {count}/{devices.length} อุปกรณ์
                </small>
              </div>
              <span
                className={`status-dot ${
                  count === devices.length ? "dot-green" : "dot-amber"
                }`}
              />
              <Icons.Arrow />
            </Link>
          )
        })}
      </div>
    </section>
  )
}
function CamerasPanel({
  branch,
  compact = false,
  selector,
}: {
  branch: Branch
  compact?: boolean
  selector?: ReactNode
}) {
  const [camera, setCamera] = useState<Device | null>(null)
  const [cameraParams] = useSearchParams()
  const cameras = devicesFor(branch).filter((d) => d.model === "CCTV")
  const shown = compact ? cameras.slice(0, 2) : cameras
  const cameraId = cameraParams.get("camera")
  useEffect(() => {
    if (cameraId) setCamera(cameras.find((item) => item.id === cameraId) || null)
  }, [branch.code, cameraId])
  return (
    <section className="panel cameras-panel">
      <SectionTitle
        title="กล้องวงจรปิด"
        subtitle="มองเห็นทุกพื้นที่สำคัญของสาขา"
        action={
          <div className="camera-heading-actions">
            {selector || (
              <Badge tone="blue">{cameras.length} พื้นที่สำคัญ</Badge>
            )}
            {compact && (
              <Link
                className="icon-link"
                aria-label="ดูกล้องทั้งหมด"
                to={`/branches/${branch.code}?tab=cameras`}
              >
                <Icons.Expand />
              </Link>
            )}
          </div>
        }
      />
      <div className={`camera-grid ${compact ? "camera-grid-compact" : ""}`}>
        {shown.map((c, i) => (
          <button
            key={`${branch.code}-${c.id}`}
            id={`${branch.code}-${c.id}`}
            className="camera-card"
            onClick={() => setCamera(c)}
          >
            <div className="camera-image">
              <img
                src={cameraPhotos[i % cameraPhotos.length]}
                alt={`พื้นที่${c.location}`}
              />
              <div className="camera-top">
                <span className="camera-id">{c.id}</span>
              </div>
              <span className="camera-play">
                <Icons.Play />
              </span>
              <div className="camera-image-bottom">
                <span>{branch.name}</span>
                <Icons.Expand />
              </div>
            </div>
            <div className="camera-caption">
              <span>
                <Icons.Camera />
                <strong>{c.location}</strong>
              </span>
              <span className="camera-view-link">
                รับชม
                <Icons.Arrow />
              </span>
            </div>
          </button>
        ))}
      </div>
      <div className="camera-panel-footer">
        <span>
          <span className="status-dot dot-blue" />
          ภาพจากกล้องครอบคลุมทุกพื้นที่สำคัญของสาขา
        </span>
        <Link to={`/branches/${branch.code}?tab=cameras`} className="text-link">
          ดูกล้องทั้งหมด
          <Icons.Arrow />
        </Link>
      </div>
      {camera && (
        <CameraModal
          key={`${branch.code}-${camera.id}`}
          camera={camera}
          branch={branch}
          onClose={() => setCamera(null)}
        />
      )}
    </section>
  )
}
function CameraModal({
  camera,
  branch,
  onClose,
}: {
  camera: Device
  branch: Branch
  onClose: () => void
}) {
  const key = `Smartoffice-camera-${branch.code}-${camera.id}`
  const [url, setUrl] = useState(() => readStored<string>(key, ""))
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState("")
  const [storedUrl, setStoredUrl] = useState(() => readStored<string>(key, ""))
  return (
    <Modal title={`${branch.name} · ${camera.location}`} onClose={onClose} wide>
      <div className="camera-preview">
        {camera.online ? (
          <img
            src={cameraPhotos[(Number(camera.id.slice(-1)) - 1) % cameraPhotos.length]}
            alt={`กล้อง ${camera.location}`}
          />
        ) : (
          <div className="offline-image">
            <Icons.Camera />
            <p>ไม่สามารถแสดงภาพจากกล้องได้</p>
          </div>
        )}
        <span className="preview-tag">ช่องสัญญาณ {camera.id}</span>
      </div>
      <div className="camera-settings">
        <p>ตั้งค่าลิงก์รับชมจากระบบกล้องของสาขา ลิงก์จะเปิดในแท็บใหม่</p>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            try {
              if (url && new URL(url).protocol !== "https:") throw new Error()
              localStorage.setItem(key, JSON.stringify(url))
              setStoredUrl(url)
              setError("")
              setSaved(true)
            } catch {
              setError("กรุณาระบุลิงก์ HTTPS ที่ถูกต้อง")
            }
          }}
        >
          <label className="form-label">
            ลิงก์รับชมกล้อง
            <input
              value={url}
              onChange={(e) => {
                setUrl(e.target.value)
                setSaved(false)
              }}
              type="url"
              placeholder="https://..."
            />
          </label>
          {error && (
            <p className="form-error" role="alert">
              {error}
            </p>
          )}
          <div className="form-actions">
            <span role="status">{saved && "บันทึกลิงก์เรียบร้อยแล้ว"}</span>
            <Button type="submit">
              <Icons.Link />
              บันทึกลิงก์
            </Button>
            {storedUrl && (
              <a
                className="button button-primary"
                href={storedUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icons.Play />
                เปิดระบบรับชม
              </a>
            )}
          </div>
        </form>
      </div>
    </Modal>
  )
}
function DeviceSummary({ branch }: { branch: Branch }) {
  const devices = devicesFor(branch)
  const models = ["DH-G510S", "NZ-DD", "NZ-SA", "NZ-CT"]
  return (
    <section className="panel device-summary">
      <SectionTitle
        title="อุปกรณ์รักษาความปลอดภัย"
        subtitle={branch.name}
        action={
          <Link
            className="text-link"
            to={`/branches/${branch.code}?tab=equipment`}
          >
            ดูทั้งหมด
            <Icons.Arrow />
          </Link>
        }
      />
      <div className="device-summary-list">
        {models.map((model) => {
          const group = devices.filter((d) => d.model === model),
            first = group[0],
            online = group.filter((d) => d.online).length
          return (
            <Link
              to={`/branches/${branch.code}?tab=equipment`}
              key={model}
              className="device-summary-row"
            >
              <span
                className={`device-type-icon ${deviceToneClass(model)} ${
                  online < group.length ? "device-tone-alert" : ""
                }`}
              >
                <first.icon />
              </span>
              <div className="device-summary-name">
                <strong>{first.type}</strong>
                <small>{model} · {group.map((item) => item.id).join(", ")}</small>
              </div>
              <span className="device-count">
                {group.length} <small>อุปกรณ์</small>
              </span>
              <Badge tone={online < group.length ? "amber" : "green"}>
                {online < group.length
                  ? `${group.length - online} ออฟไลน์`
                  : "ออนไลน์ทั้งหมด"}
              </Badge>
              <Icons.Arrow />
            </Link>
          )
        })}
      </div>
      <div className="device-summary-footer">
        <Icons.Shield />
        ตรวจสอบสถานะล่าสุดจากศูนย์ควบคุม
      </div>
    </section>
  )
}
function BranchesPage() {
  const { branches } = useOutletContext<AppContext>()
  const [search, setSearch] = useState("")
  const [attention, setAttention] = useState(false)
  const filtered = branches.filter(
    (b) =>
      `${b.name} ${b.province} ${b.district} ${b.subdistrict}`.includes(
        search,
      ) &&
      (!attention || devicesFor(b).some((d) => d.model !== "CCTV" && !d.online)),
  )
  return (
    <>
      <PageHeading
        title="สาขาทั้งหมด"
        description="จัดการและติดตามความปลอดภัยของสำนักงานในทุกพื้นที่"
      >
        <Badge tone="blue">{branches.length} สาขาในระบบ</Badge>
      </PageHeading>
      <Metrics branches={branches} />
      <div className="table-toolbar">
        <SearchBox
          value={search}
          onChange={setSearch}
          placeholder="ค้นหาชื่อสาขาหรือจังหวัด"
        />
        <Button
          className={attention ? "filter-active" : ""}
          onClick={() => setAttention(!attention)}
        >
          <Icons.Warning />
          {attention ? "แสดงทุกสาขา" : "เฉพาะที่ต้องตรวจสอบ"}
        </Button>
      </div>
      <div className="branch-cards">
        {filtered.map((b) => {
          const devices = devicesFor(b),
            offline = devices.filter((d) => d.model !== "CCTV" && !d.online).length
          return (
            <Link
              to={`/branches/${b.code}`}
              className="branch-card"
              key={b.code}
            >
              <div className="branch-card-top">
                <span className="branch-card-icon">
                  <Icons.Building />
                </span>
                <Badge tone={offline ? "amber" : "green"}>
                  {offline ? "ต้องตรวจสอบ" : "สถานะปกติ"}
                </Badge>
              </div>
              <h2>{b.name}</h2>
              <p>
                <Icons.Pin />
                {b.subdistrict} · {b.district} · {b.province}
              </p>
              <div className="branch-card-counts">
                <span>
                  <Icons.Users />
                  {staffFor(b).length} พนักงาน
                </span>
                <span>
                  <Icons.Device />
                  {devices.length} อุปกรณ์
                </span>
              </div>
              <div className="branch-card-footer">
                <span>ดูรายละเอียดสาขา</span>
                <Icons.Arrow />
              </div>
            </Link>
          )
        })}
      </div>
      {!filtered.length && (
        <div className="empty-state">
          <Icons.Search />
          <p>ไม่พบสาขาที่ตรงกับการค้นหา</p>
        </div>
      )}
    </>
  )
}
function BranchDetailPage() {
  const { branches, updateBranch } = useOutletContext<AppContext>()
  const { branchId } = useParams()
  const [params, setParams] = useSearchParams()
  const [editing, setEditing] = useState(false)
  const [planOpen, setPlanOpen] = useState(false)
  const branch = branches.find((b) => b.code === branchId)
  if (!branch) return <NotFoundPage />
  const tab = params.get("tab") || "overview"
  const tabs = [
    { id: "overview", label: "ภาพรวมสาขา", icon: Icons.Grid },
    { id: "cameras", label: "กล้องวงจรปิด", icon: Icons.Camera },
    { id: "equipment", label: "อุปกรณ์ความปลอดภัย", icon: Icons.Device },
    { id: "plan", label: "ผังแปลนสาขา", icon: Icons.Plan },
    { id: "employees", label: "พนักงาน", icon: Icons.Users },
  ]
  const offline = devicesFor(branch).filter(
    (d) => d.model !== "CCTV" && !d.online,
  ).length
  return (
    <>
      <PageHeading
        title={branch.name}
        description={`${branch.address} · ${branch.subdistrict} · ${branch.district} · ${branch.province}`}
      >
        <Badge tone={offline ? "amber" : "green"}>
          {offline ? "มีอุปกรณ์ต้องตรวจสอบ" : "สถานะปกติ"}
        </Badge>
        <Button onClick={() => setEditing(true)}>
          <Icons.Settings />
          แก้ไขข้อมูลสาขา
        </Button>
      </PageHeading>
      <div className="branch-tabs" role="tablist" aria-label="ข้อมูลสาขา">
        {tabs.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={tab === t.id}
            className={tab === t.id ? "tab-active" : ""}
            onClick={() => setParams({ tab: t.id })}
          >
            <t.icon />
            {t.label}
          </button>
        ))}
      </div>
      <EmergencyAlertPanel branch={branch} />
      {tab === "overview" && (
        <>
          <Metrics branches={[branch]} />
          <div className="dashboard-grid">
            <div className="dashboard-primary">
              <CamerasPanel key={branch.code} branch={branch} compact />
              <DeviceSummary branch={branch} />
            </div>
            <div className="dashboard-secondary">
              <Alerts branches={[branch]} />
              <section className="panel">
                <SectionTitle
                  title="ผังแปลนสาขา"
                  action={
                    <button
                      className="icon-link"
                      aria-label="ขยายผังแปลน"
                      onClick={() => setPlanOpen(true)}
                    >
                      <Icons.Expand />
                    </button>
                  }
                />
                <FloorPlan branch={branch} compact />
                <div className="plan-footer">
                  <span>
                    <span className="status-dot dot-blue" />
                    ผังแปลน · ชั้น 1
                  </span>
                  <button
                    className="text-link"
                    onClick={() => setParams({ tab: "plan" })}
                  >
                    ดูผังแปลน
                    <Icons.Arrow />
                  </button>
                </div>
              </section>
              <BranchInfo branch={branch} />
            </div>
          </div>
        </>
      )}
      {tab === "cameras" && <CamerasPanel key={branch.code} branch={branch} />}
      {tab === "equipment" && <DeviceTable branches={[branch]} />}
      {tab === "employees" && <EmployeeTable branches={[branch]} />}
      {tab === "plan" && (
        <section className="panel full-plan">
          <SectionTitle
            title={`ผังแปลน · ${branch.name}`}
            subtitle="ตำแหน่งอุปกรณ์รักษาความปลอดภัยภายในสาขา"
            action={
              <Button onClick={() => setPlanOpen(true)}>
                <Icons.Expand />
                ขยายผังแปลน
              </Button>
            }
          />
          <FloorPlan branch={branch} />
          <PlanLegend />
          <div className="info-note">
            <Icons.Help />
            เลือกจุดอุปกรณ์บนผังเพื่อดูรหัสและตำแหน่งติดตั้ง
          </div>
        </section>
      )}
      {!tabs.some((t) => t.id === tab) && (
        <div className="empty-state">
          <p>ไม่พบหมวดข้อมูลนี้</p>
          <Button onClick={() => setParams({ tab: "overview" })}>
            กลับสู่ภาพรวมสาขา
          </Button>
        </div>
      )}
      {editing && (
        <BranchEdit
          branch={branch}
          onSave={(b) => {
            updateBranch(b)
            setEditing(false)
          }}
          onClose={() => setEditing(false)}
        />
      )}
      {planOpen && (
        <Modal
          title={`ผังแปลน · ${branch.name}`}
          wide
          onClose={() => setPlanOpen(false)}
        >
          <FloorPlan branch={branch} />
          <PlanLegend />
        </Modal>
      )}
    </>
  )
}
function BranchInfo({ branch }: { branch: Branch }) {
  const mapQuery = encodeURIComponent(
    `${branch.address} ${branch.subdistrict} ${branch.district} ${branch.province} ประเทศไทย`,
  )
  return (
    <section className="panel branch-info">
      <SectionTitle title="ข้อมูลสาขา" />
      <dl>
        <div>
          <dt>รหัสสาขา</dt>
          <dd>{branch.code}</dd>
        </div>
        <div>
          <dt>เขตสาขา</dt>
          <dd>{branch.region || "กลาง"}</dd>
        </div>
        <div>
          <dt>ผู้จัดการสาขา</dt>
          <dd>{branch.manager}</dd>
        </div>
        <div>
          <dt>จังหวัด</dt>
          <dd>{branch.province}</dd>
        </div>
        <div>
          <dt>อำเภอ / เขต</dt>
          <dd>{branch.district}</dd>
        </div>
        <div>
          <dt>ตำบล / แขวง</dt>
          <dd>{branch.subdistrict}</dd>
        </div>
      </dl>
      <div className="branch-map">
        <iframe
          title={`แผนที่ ${branch.name}`}
          src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <a
          className="map-open-link"
          href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icons.Pin />
          เปิดตำแหน่งบน Google Maps
          <Icons.Arrow />
        </a>
      </div>
    </section>
  )
}
function BranchEdit({
  branch,
  onSave,
  onClose,
}: {
  branch: Branch
  onSave: (b: Branch) => void
  onClose: () => void
}) {
  const [form, setForm] = useState(branch)
  return (
    <Modal title="แก้ไขข้อมูลสาขา" onClose={onClose}>
      <form
        className="branch-form"
        onSubmit={(e) => {
          e.preventDefault()
          onSave(form)
        }}
      >
        {([
          ["name", "ชื่อสาขา"],
          ["address", "บ้านเลขที่ / ถนน"],
          ["province", "จังหวัด"],
          ["district", "อำเภอ / เขต"],
          ["subdistrict", "ตำบล / แขวง"],
          ["manager", "ผู้จัดการสาขา"],
        ] as [keyof Branch, string][]).map(([key, label]) => (
          <label key={key} className="form-label">
            {label}
            <input
              required
              value={form[key]}
              onChange={(e) => setForm({ ...form, [key]: e.target.value })}
            />
          </label>
        ))}
        <label className="form-label">
          เขตสาขา
          <select
            value={form.region || "กลาง"}
            onChange={(e) => setForm({ ...form, region: e.target.value as Branch["region"] })}
          >
            {["เหนือ", "กลาง", "ใต้", "ตะวันออก", "ตะวันตก"].map((region) => (
              <option key={region}>{region}</option>
            ))}
          </select>
        </label>
        <p className="form-hint">ข้อมูลจะถูกบันทึกอัตโนมัติสำหรับการใช้งานครั้งถัดไป</p>
        <div className="form-actions">
          <Button type="button" onClick={onClose}>
            ยกเลิก
          </Button>
          <Button primary type="submit">
            <Icons.Check />
            บันทึกข้อมูล
          </Button>
        </div>
      </form>
    </Modal>
  )
}
function FloorPlan({
  branch,
  compact = false,
}: {
  branch: Branch
  compact?: boolean
}) {
  const [point, setPoint] = useState("")
  const points = [
    { id: "CAM-01", x: 17, y: 69, name: "กล้องโถงต้อนรับ", icon: Icons.Camera, camera: true },
    { id: "CAM-02", x: 57, y: 30, name: "กล้องพื้นที่สำนักงาน", icon: Icons.Camera, camera: true },
    { id: "CAM-03", x: 66, y: 90, name: "กล้องทางเข้าอาคาร", icon: Icons.Camera, camera: true },
    { id: "CAM-04", x: 82, y: 72, name: "กล้องลานจอดรถ", icon: Icons.Camera, camera: true },
    {
      id: "AC-01",
      x: 42,
      y: 79,
      name: "เครื่องควบคุมประตูหลัก",
      icon: Icons.Device,
    },
    {
      id: "SD-02",
      x: 26,
      y: 31,
      name: "Smoke Sensor ห้องประชุม",
      icon: Icons.Smoke,
    },
    {
      id: "PIR-01",
      x: 61,
      y: 67,
      name: "PIR Sensor ทางเดิน",
      icon: Icons.Motion,
    },
  ]
  const devices = devicesFor(branch)
  const fireResolved = readStored("SmartOffice-fire-case-resolved", false)
  const hasProblem = (id: string) =>
    devices.some(
      (device) => device.model !== "CCTV" && device.id === id && !device.online,
    ) || (id === "SD-02" && branch.code === "BR-001" && !fireResolved)
  return (
    <div className={`floor-plan ${compact ? "floor-plan-compact" : ""}`}>
      <svg
        viewBox="0 0 600 360"
        className="plan-drawing"
        role="img"
        aria-label="ผังชั้นหนึ่ง มีห้องประชุม สำนักงาน โถงต้อนรับ และห้องเก็บเอกสาร"
      >
        <defs>
          <pattern
            id={compact ? "grid-small" : "grid-large"}
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="currentColor"
              strokeWidth=".4"
            />
          </pattern>
        </defs>
        <rect
          width="600"
          height="360"
          fill={`url(#${compact ? "grid-small" : "grid-large"})`}
          opacity=".2"
        />
        <g className="plan-rooms">
          <path d="M60 45H540V310H60Z" />
          <path d="M245 45V190H60M245 190H430V310M430 45V190H540M245 255H60" />
        </g>
        <g className="plan-doors">
          <path d="M180 190h45M245 125v45M430 140v40M370 310h45" />
        </g>
        <g className="plan-furniture">
          <rect x="96" y="82" width="106" height="54" rx="5" />
          <rect x="108" y="69" width="20" height="10" rx="2" />
          <rect x="154" y="69" width="20" height="10" rx="2" />
          <rect x="108" y="140" width="20" height="10" rx="2" />
          <rect x="154" y="140" width="20" height="10" rx="2" />
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect x={276 + i * 45} y="85" width="30" height="32" rx="2" />
              <rect x={276 + i * 45} y="135" width="30" height="32" rx="2" />
            </g>
          ))}
          <rect x="461" y="72" width="51" height="16" rx="2" />
          <rect x="461" y="99" width="51" height="16" rx="2" />
          <rect x="89" y="277" width="67" height="15" rx="3" />
          <rect x="180" y="276" width="37" height="16" rx="3" />
          <rect x="466" y="231" width="40" height="38" rx="2" />
        </g>
        <g className="plan-text">
          <text x="150" y="174">
            ห้องประชุม
          </text>
          <text x="340" y="71">
            พื้นที่สำนักงาน
          </text>
          <text x="486" y="152">
            ห้องเอกสาร
          </text>
          <text x="150" y="237">
            โถงต้อนรับ
          </text>
          <text x="330" y="252">
            ทางเดิน
          </text>
          <text x="482" y="293">
            ห้องพัก
          </text>
        </g>
        <path className="plan-entry" d="M392 346v-27m-7 7 7-7 7 7" />
        <text className="plan-text" x="352" y="349">
          ทางเข้า
        </text>
      </svg>
      {points.map((p) => {
        const problem = hasProblem(p.id)
        const className = `plan-point ${p.camera ? "plan-point-camera" : problem ? "plan-point-danger" : "plan-point-ok"} ${point === p.id ? "point-selected" : ""}`
        const content = (
          <>
            <p.icon />
            {!p.camera && <span className="plan-point-status" />}
            {point === p.id && (
              <span className="point-tooltip">
                {p.name}
                <small>{p.id} · {problem ? "ต้องตรวจสอบ" : "ออนไลน์"}</small>
              </span>
            )}
          </>
        )
        return p.camera ? (
          <Link
            className={className}
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
            key={p.id}
            aria-label={`${p.name} เปิดภาพกล้อง`}
            title={`${p.name} · เปิดภาพกล้อง`}
            to={`/branches/${branch.code}?tab=cameras&camera=${p.id}`}
          >
            {content}
          </Link>
        ) : (
          <button
            className={className}
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
            key={p.id}
            aria-label={p.name}
            onClick={() => setPoint(point === p.id ? "" : p.id)}
          >
            {content}
          </button>
        )
      })}
    </div>
  )
}
function PlanLegend() {
  return (
    <div className="plan-legend">
      {[
        [Icons.Camera, "กล้องวงจรปิด"],
        [Icons.Device, "ควบคุมประตู"],
        [Icons.Smoke, "ตรวจจับควัน"],
        [Icons.Motion, "ตรวจจับการเคลื่อนไหว"],
      ].map(([I, label]) => {
        const Symbol = I as typeof Icons.Camera
        return (
          <span key={String(label)}>
            <Symbol />
            {label as string}
          </span>
        )
      })}
    </div>
  )
}
function EmployeeTable({ branches }: { branches: Branch[] }) {
  const [search, setSearch] = useState("")
  const [branchFilter, setBranchFilter] = useState("")
  const [selected, setSelected] = useState<ReturnType<typeof staffFor>[number] | null>(null)
  const all = branches.flatMap(staffFor)
  const filtered = all.filter(
    (e) =>
      `${e.name} ${e.role} ${e.department} ${e.branch} ${e.lineId}`.includes(search) &&
      (!branchFilter || e.branch === branchFilter),
  )
  return (
    <>
      <div className="table-toolbar">
        <SearchBox
          value={search}
          onChange={setSearch}
          placeholder="ค้นหาชื่อหรือตำแหน่งพนักงาน"
        />
        {branches.length > 1 && (
          <select
            aria-label="กรองพนักงานตามสาขา"
            value={branchFilter}
            onChange={(e) => setBranchFilter(e.target.value)}
          >
            <option value="">ทุกสาขา</option>
            {branches.map((b) => (
              <option key={b.code} value={b.name}>
                {b.name}
              </option>
            ))}
          </select>
        )}
      </div>
      <section className="panel table-panel">
        <table>
          <thead>
            <tr>
              <th>ชื่อ–นามสกุล</th>
              <th>ตำแหน่ง</th>
              <th>แผนก</th>
              <th>สาขา</th>
              <th>LINE ID</th>
              <th>ระดับใช้งาน</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {filtered.map((e) => (
              <tr key={e.id}>
                <td>
                  <div className="table-person">
                    <img className="staff-avatar" src={e.photo} alt={`รูปประจำตัว ${e.name}`} />
                    <span>
                      <strong>{e.name}</strong>
                      <small>รหัสพนักงาน {e.id.slice(-3)}</small>
                    </span>
                  </div>
                </td>
                <td>{e.role}</td>
                <td>{e.department}</td>
                <td>{e.branch}</td>
                <td className="line-id">{e.lineId}</td>
                <td>
                  <Badge tone={e.access === "Admin" ? "blue" : "green"}>
                    {e.access}
                  </Badge>
                </td>
                <td>
                  <button
                    className="icon-link"
                    aria-label={`ดูข้อมูล ${e.name}`}
                    onClick={() => setSelected(e)}
                  >
                    <Icons.Arrow />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!filtered.length && (
          <div className="empty-state">ไม่พบพนักงานที่ตรงกับการค้นหา</div>
        )}
        <div className="table-footer">
          แสดง {filtered.length} จาก {all.length} คน
          <span>อัปเดตข้อมูลบุคลากรล่าสุด</span>
        </div>
      </section>
      {selected && (
        <Modal title={`ข้อมูลพนักงาน · ${selected.name}`} onClose={() => setSelected(null)}>
          <div className="employee-detail">
            <div className="employee-profile">
              <img className="employee-photo" src={selected.photo} alt={`รูปประจำตัว ${selected.name}`} />
              <div>
                <strong>{selected.name}</strong>
                <p>{selected.role} · {selected.department}</p>
                <Badge tone={selected.access === "Admin" ? "blue" : "green"}>
                  {selected.access}
                </Badge>
              </div>
            </div>
            <dl>
              <div><dt>รหัสพนักงาน</dt><dd>{selected.id}</dd></div>
              <div><dt>วันที่เริ่มงาน</dt><dd>{selected.start}</dd></div>
              <div><dt>สาขา</dt><dd>{selected.branch}</dd></div>
              <div><dt>เบอร์ติดต่อ</dt><dd>{selected.phone}</dd></div>
              <div><dt>อีเมล</dt><dd>{selected.email}</dd></div>
              <div><dt>LINE ID</dt><dd>{selected.lineId}</dd></div>
              <div className="detail-wide"><dt>ที่อยู่</dt><dd>{selected.address}</dd></div>
            </dl>
          </div>
        </Modal>
      )}
    </>
  )
}
function EmployeesPage() {
  const { branches } = useOutletContext<AppContext>()
  return (
    <>
      <PageHeading
        title="พนักงานทั้งหมด"
        description="ข้อมูลบุคลากร ตำแหน่ง และวันที่เริ่มงานของทุกสาขา"
      >
        <Badge tone="blue">{branches.flatMap(staffFor).length} คนในระบบ</Badge>
      </PageHeading>
      <EmployeeTable branches={branches} />
    </>
  )
}
function DeviceTable({ branches }: { branches: Branch[] }) {
  const [search, setSearch] = useState("")
  const [status, setStatus] = useState("")
  const [model, setModel] = useState("")
  const [selected, setSelected] = useState<Device & { branch: Branch } | null>(
    null,
  )
  const all = branches.flatMap((b) =>
    devicesFor(b).map((d) => ({ ...d, branch: b })),
  )
  const filtered = all.filter(
    (d) =>
      `${d.model} ${d.type} ${d.location} ${d.branch.name}`
        .toLowerCase()
        .includes(search.toLowerCase()) &&
      (!status ||
        (d.model !== "CCTV" &&
          (status === "online" ? d.online : !d.online))) &&
      (!model || d.model === model),
  )
  return (
    <>
      <div className="table-toolbar">
        <SearchBox
          value={search}
          onChange={setSearch}
          placeholder="ค้นหาอุปกรณ์ ตำแหน่ง หรือสาขา"
        />
        <div className="table-filters">
          <select
            aria-label="กรองประเภทอุปกรณ์"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          >
            <option value="">อุปกรณ์ทุกประเภท</option>
            {["CCTV", "DH-G510S", "NZ-DD", "NZ-SA", "NZ-CT"].map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
          <select
            aria-label="กรองสถานะอุปกรณ์"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">ทุกสถานะ</option>
            <option value="online">ออนไลน์</option>
            <option value="offline">ออฟไลน์</option>
          </select>
        </div>
      </div>
      <section className="panel table-panel">
        <table>
          <thead>
            <tr>
              <th>อุปกรณ์</th>
              <th>รุ่น</th>
              <th>ตำแหน่งติดตั้ง</th>
              <th>สาขา</th>
              <th>สถานะ</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {filtered.map((d) => (
              <tr key={`${d.branch.code}-${d.id}`}>
                <td>
                  <div className="table-person">
                    <span className={`device-type-icon ${deviceToneClass(d.model)} ${!d.online ? "device-tone-alert" : ""}`}>
                      <d.icon />
                    </span>
                    <span>
                      <strong>{d.type}</strong>
                      <small>{d.model} · {d.id}</small>
                    </span>
                  </div>
                </td>
                <td>{d.model}</td>
                <td>{d.location}</td>
                <td>{d.branch.name}</td>
                <td>
                  {d.model === "CCTV" ? (
                    <span className="camera-table-action">
                      <Icons.Camera />
                      เปิดดูภาพ
                    </span>
                  ) : (
                    <Badge tone={d.online ? "green" : "amber"}>
                      {d.online ? "ออนไลน์" : "ออฟไลน์"}
                    </Badge>
                  )}
                </td>
                <td>
                  <button
                    className="icon-link"
                    aria-label={`ดูรายละเอียด ${d.model} ${d.location} ${d.branch.name}`}
                    onClick={() => setSelected(d)}
                  >
                    <Icons.Arrow />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!filtered.length && (
          <div className="empty-state">ไม่พบอุปกรณ์ที่ตรงกับการค้นหา</div>
        )}
        <div className="table-footer">
          แสดง {filtered.length} จาก {all.length} อุปกรณ์
          <span>อัปเดตสถานะล่าสุด</span>
        </div>
      </section>
      {selected &&
        (selected.model === "CCTV" ? (
          <CameraModal
            camera={selected}
            branch={selected.branch}
            onClose={() => setSelected(null)}
          />
        ) : (
          <Modal
            title={`รายละเอียดอุปกรณ์ · ${selected.type}`}
            onClose={() => setSelected(null)}
          >
            <div className="device-detail">
              <span className="detail-device-icon">
                <selected.icon />
              </span>
              <Badge tone={selected.online ? "green" : "amber"}>
                {selected.online ? "ออนไลน์" : "ออฟไลน์"}
              </Badge>
              <dl>
                <div>
                  <dt>รหัสอุปกรณ์</dt>
                  <dd>{selected.id}</dd>
                </div>
                <div>
                  <dt>ชื่ออุปกรณ์</dt>
                  <dd>{selected.type}</dd>
                </div>
                <div>
                  <dt>รุ่น</dt>
                  <dd>{selected.model}</dd>
                </div>
                <div>
                  <dt>สาขา</dt>
                  <dd>{selected.branch.name}</dd>
                </div>
                <div>
                  <dt>ตำแหน่ง</dt>
                  <dd>{selected.location}</dd>
                </div>
              </dl>
              <div className="info-note">
                <Icons.Help />
                ตรวจสอบการเชื่อมต่อและประวัติอุปกรณ์ได้จากศูนย์ควบคุม
              </div>
            </div>
          </Modal>
        ))}
    </>
  )
}
function EquipmentPage() {
  const { branches } = useOutletContext<AppContext>()
  return (
    <>
      <PageHeading
        title="อุปกรณ์รักษาความปลอดภัย"
        description="ติดตามระบบควบคุมประตู กล้องวงจรปิด และเซ็นเซอร์ของทุกสาขา"
      >
        <Badge tone="blue">อัปเดตสถานะอัตโนมัติ</Badge>
      </PageHeading>
      <Metrics branches={branches} />
      <DeviceTable branches={branches} />
    </>
  )
}
const workProcedures = [
  {
    device: "DH-G510S Access Control",
    title: "ตรวจสอบระบบควบคุมประตู",
    steps: ["สังเกตไฟสถานะที่ตัวเครื่อง (แสดงผลออนไลน์ปกติ)", "ทดสอบใช้บัตรแตะเปิดประตูเพื่อเช็กการตอบสนอง", "ตรวจสอบประตูทุกบานว่าปิดสนิทดี เซ็นเซอร์แม่เหล็ก (Magnetic Sensor) ไม่หลุดหลวม และไม่มีการเปิดค้างไว้"],
    warning: "ห้ามลิ่มหรือเปิดประตูฉุกเฉินทิ้งไว้โดยไม่มีเหตุฉุกเฉิน",
  },
  {
    device: "SH4-ZS Smart Control Panel",
    title: "ตรวจสอบหน้าจอควบคุมอัจฉริยะ",
    steps: ["ตรวจสอบหน้าจอแสดงผลว่าเปิดติดปกติ และทัชสกรีนตอบสนองได้ดี", "ตรวจสอบสถานะการเชื่อมต่อเครือข่าย/Wi-Fi บนหน้าจอว่ายังออนไลน์", "ตรวจสอบหน้าจอหลักว่าไม่มีแจ้งเตือนข้อผิดพลาด (Error/Offline)"],
    warning: "ห้ามกดรีเซ็ตหรือเปลี่ยนแปลงค่าตั้งค่าในระบบ หากพบความผิดปกติให้แจ้งเจ้าหน้าที่เทคนิคทันที",
  },
  {
    device: "CCTV",
    title: "ตรวจสอบระบบกล้อง",
    steps: ["เปิดหน้าจอมอนิเตอร์/ระบบดูภาพรวม", "สังงเกตว่ากล้องทุกตัวแสดงภาพปกติ (ไม่มีจอฟ้า, จอดำ, หรือสัญญาณขาดหาย)", "ตรวจสอบมุมกล้องว่าไม่ถูกขยับเปลี่ยนทิศทาง"],
    warning: "หากพบกล้องตัวไหนภาพดับหรือค้าง ให้แจ้งเจ้าหน้าที่ไอที/ผู้ดูแลระบบทันที",
  },
]
function TasksPage() {
  const [done, setDone] = useState<string[]>([])
  return (
    <>
      <PageHeading
        title="ขั้นตอนปฏิบัติงาน"
        description="รายการตรวจสอบประจำวันสำหรับทีมรักษาความปลอดภัย"
      >
        <Badge tone="blue">{done.length}/{workProcedures.length} เสร็จสิ้น</Badge>
      </PageHeading>
      <div className="procedure-grid">
        {workProcedures.map((item, index) => {
          const complete = done.includes(item.device)
          return (
            <section className={`panel procedure-card ${complete ? "procedure-complete" : ""}`} key={item.device}>
              <div className="procedure-head">
                <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
                <div><small>{item.device}</small><h2>{item.title}</h2></div>
                <Badge tone={complete ? "green" : "slate"}>{complete ? "เสร็จสิ้น" : "รอดำเนินการ"}</Badge>
              </div>
              <ol>
                {item.steps.map((step) => <li key={step}><Icons.Check />{step}</li>)}
              </ol>
              <div className="critical-message"><Icons.Warning />{item.warning}</div>
              <Button primary={!complete} onClick={() => setDone(complete ? done.filter((id) => id !== item.device) : [...done, item.device])}>
                <Icons.Check />{complete ? "ยกเลิกการยืนยัน" : "ยืนยันการตรวจสอบ"}
              </Button>
            </section>
          )
        })}
      </div>
    </>
  )
}
type LogItem = {
  id: string
  time: string
  date: string
  level: "red" | "green"
  title: string
  branch: string
  device: string
  closer: string
  status: string
  fire?: boolean
}
const logItems: LogItem[] = [
  { id: "FIRE-250618-01", time: "11:08", date: "18 มิ.ย. 2568", level: "red", title: "ตรวจพบควันและอุณหภูมิสูง", branch: "สำนักงานใหญ่", device: "NZ-SA · SD-02 · ห้องประชุม", closer: "ยังไม่มีผู้ปิดเคส", status: "ต้องดำเนินการ", fire: true },
  { id: "DEV-250618-02", time: "10:42", date: "18 มิ.ย. 2568", level: "red", title: "เซ็นเซอร์ห้องเก็บเอกสารออฟไลน์", branch: "สำนักงานใหญ่", device: "NZ-CT · PIR-03", closer: "สมชาย วงศ์ดี", status: "ปิดเคสแล้ว" },
  { id: "CAM-250618-03", time: "09:35", date: "18 มิ.ย. 2568", level: "red", title: "กล้องลานจอดรถขาดการเชื่อมต่อ", branch: "สาขาขอนแก่น", device: "CCTV · CAM-04", closer: "รอตรวจสอบ", status: "กำลังดำเนินการ" },
  { id: "SYS-250618-04", time: "08:10", date: "18 มิ.ย. 2568", level: "green", title: "ระบบควบคุมประตูพร้อมใช้งาน", branch: "สาขาเชียงใหม่", device: "DH-G510S · AC-01", closer: "ระบบอัตโนมัติ", status: "ปกติ" },
  { id: "CHK-250617-05", time: "17:25", date: "17 มิ.ย. 2568", level: "green", title: "ตรวจสอบอุปกรณ์ประจำวันครบถ้วน", branch: "สาขาภูเก็ต", device: "16 อุปกรณ์", closer: "อรทัย มีสุข", status: "ปิดเคสแล้ว" },
]
function LogsPage() {
  const [level, setLevel] = useState("")
  const [selected, setSelected] = useState<LogItem | null>(null)
  const [resolved, setResolved] = useState(() =>
    readStored("SmartOffice-fire-case-resolved", false),
  )
  const shown = logItems.filter((item) => !level || item.level === level)
  return (
    <>
      <PageHeading title="รายการแจ้งเตือน" description="เหตุการณ์จากทุกสาขา เรียงตามวันและเวลาล่าสุด">
        <Badge tone="amber">{logItems.filter((item) => item.level === "red").length} เหตุการณ์สำคัญ</Badge>
      </PageHeading>
      <div className="table-toolbar">
        <select value={level} onChange={(e) => setLevel(e.target.value)} aria-label="กรองระดับเหตุการณ์">
          <option value="">ทุกเหตุการณ์</option><option value="red">เหตุการณ์สำคัญ</option><option value="green">สถานะปกติ</option>
        </select>
      </div>
      <section className="panel log-timeline">
        {shown.map((item) => (
          <button
            type="button"
            className={`log-row log-${item.level} ${item.fire ? "log-urgent" : ""}`}
            key={item.id}
            onClick={() => item.fire && setSelected(item)}
            disabled={!item.fire}
          >
            <div className="log-time"><strong>{item.time}</strong><small>{item.date}</small></div>
            <span className="log-marker">{item.fire ? <Icons.Smoke /> : <Icons.Bell />}</span>
            <div className="log-main">
              <strong>{item.title}</strong>
              <p>{item.branch} · {item.device}</p>
              <small>{item.level === "red" ? "สาขาออนไลน์ · อุปกรณ์ต้องตรวจสอบ" : "สาขาปกติ · อุปกรณ์ออนไลน์"}</small>
            </div>
            <div className="log-meta"><small>ผู้ปิดเคส</small><strong>{item.closer}</strong></div>
            <Badge tone={resolved && item.fire ? "green" : item.level === "red" ? "amber" : "green"}>
              {resolved && item.fire ? "ปิดเคสแล้ว" : item.status}
            </Badge>
          </button>
        ))}
      </section>
      {selected && (
        <FireCaseModal
          item={selected}
          onClose={() => setSelected(null)}
          onResolved={() => {
            setResolved(true)
            localStorage.setItem("SmartOffice-fire-case-resolved", "true")
            setSelected(null)
          }}
        />
      )}
    </>
  )
}
function FireCaseModal({
  item,
  onClose,
  onResolved,
}: {
  item: LogItem
  onClose: () => void
  onResolved: () => void
}) {
  const actions = [
    "โทรยืนยันเหตุการณ์กับผู้รับผิดชอบสาขา",
    "ตรวจสอบภาพจากกล้องห้องประชุม",
    "แจ้งอพยพพนักงานออกจากพื้นที่",
    "ประสานหน่วยดับเพลิงและทีมอาคาร",
    "ยืนยันว่าพื้นที่ปลอดภัยและบันทึกผล",
  ]
  const [done, setDone] = useState<string[]>([])
  const complete = done.length === actions.length
  return (
    <Modal title="เคสเร่งด่วน · ตรวจพบเหตุเพลิงไหม้" onClose={onClose} wide>
      <div className="fire-case">
        <div className="fire-alert">
          <span><Icons.Warning /></span>
          <div>
            <small>แจ้งเตือนระดับวิกฤต</small>
            <strong>ตรวจพบควันและอุณหภูมิสูงผิดปกติ</strong>
            <p>ดำเนินการตามขั้นตอนทันที และห้ามปิดเคสจนกว่าจะยืนยันว่าพื้นที่ปลอดภัย</p>
          </div>
        </div>
        <div className="case-details">
          <div><small>รหัสเหตุการณ์</small><strong>{item.id}</strong></div>
          <div><small>วันและเวลา</small><strong>{item.date} · {item.time} น.</strong></div>
          <div><small>สาขา</small><strong>{item.branch}</strong></div>
          <div><small>จุดตรวจพบ</small><strong>ห้องประชุม ชั้น 1</strong></div>
          <div><small>อุปกรณ์</small><strong>NZ-SA · SD-02</strong></div>
          <div><small>สถานะ</small><strong className="danger-text">ยังไม่ได้แก้ไข</strong></div>
        </div>
        <div className="case-todo">
          <div className="case-todo-heading">
            <div><small>TODO LIST</small><h3>ขั้นตอนจัดการเหตุการณ์</h3></div>
            <Badge tone={complete ? "green" : "amber"}>{done.length}/{actions.length} รายการ</Badge>
          </div>
          {actions.map((action, index) => {
            const checked = done.includes(action)
            return (
              <button
                type="button"
                className={checked ? "todo-done" : ""}
                key={action}
                onClick={() => setDone(checked ? done.filter((value) => value !== action) : [...done, action])}
              >
                <span>{checked ? <Icons.Check /> : index + 1}</span>
                <strong>{action}</strong>
              </button>
            )
          })}
        </div>
        <div className="case-actions">
          <span>{complete ? "ดำเนินการครบถ้วน พร้อมปิดเคส" : "กรุณาดำเนินการให้ครบทุกขั้นตอน"}</span>
          <Button onClick={onClose}>กลับไปหน้ารายการ</Button>
          <Button primary disabled={!complete} onClick={onResolved}><Icons.Shield />ยืนยันและปิดเคส</Button>
        </div>
      </div>
    </Modal>
  )
}
function EmergencyAlertPanel({ branch }: { branch?: Branch }) {
  const [selected, setSelected] = useState<LogItem | null>(null)
  const [resolved, setResolved] = useState(() =>
    readStored("SmartOffice-fire-case-resolved", false),
  )
  const items = branch
    ? logItems.filter((item) => item.branch === branch.name)
    : logItems.slice(0, 3)
  const urgent = items.find((item) => item.fire)
  return (
    <section className={`emergency-panel ${urgent && !resolved ? "emergency-active" : ""}`}>
      <div className="emergency-heading">
        <span className="emergency-symbol">
          {urgent && !resolved ? <Icons.Warning /> : <Icons.Shield />}
        </span>
        <div>
          <small>เหตุการณ์ฉุกเฉิน</small>
          <strong>
            {urgent && !resolved
              ? "พบเคสที่ต้องดำเนินการทันที"
              : branch
                ? `สถานะล่าสุด · ${branch.name}`
                : "ติดตามเหตุการณ์จากทุกสาขา"}
          </strong>
        </div>
        <Link className="emergency-all-link" to="/logs">
          ดูรายการทั้งหมด
          <Icons.Arrow />
        </Link>
      </div>
      {urgent && !resolved ? (
        <button
          type="button"
          className="emergency-case"
          onClick={() => setSelected(urgent)}
        >
          <span className="emergency-case-time">
            <strong>{urgent.time}</strong>
            <small>{urgent.date}</small>
          </span>
          <span className="emergency-case-main">
            <strong>{urgent.title}</strong>
            <small>{urgent.branch} · {urgent.device}</small>
          </span>
          <span className="emergency-tasks">
            <small>สิ่งที่ต้องทำ</small>
            <strong>ยืนยันเหตุ · อพยพ · ประสานดับเพลิง</strong>
          </span>
          <Badge tone="amber">เปิด Todo</Badge>
          <Icons.Arrow />
        </button>
      ) : items.length ? (
        <div className="emergency-recent">
          {items.slice(0, 2).map((item) => (
            <div key={item.id}>
              <span className={`status-dot ${item.level === "red" ? "dot-amber" : "dot-green"}`} />
              <strong>{resolved && item.fire ? "เคสเพลิงไหม้ได้รับการแก้ไขแล้ว" : item.title}</strong>
              <small>{item.time} น. · {item.branch}</small>
            </div>
          ))}
        </div>
      ) : (
        <div className="emergency-clear">
          <Icons.Check />
          <span><strong>ไม่พบเหตุฉุกเฉิน</strong><small>อุปกรณ์และพื้นที่สาขาอยู่ในสถานะปกติ</small></span>
        </div>
      )}
      {selected && (
        <FireCaseModal
          item={selected}
          onClose={() => setSelected(null)}
          onResolved={() => {
            setResolved(true)
            localStorage.setItem("SmartOffice-fire-case-resolved", "true")
            setSelected(null)
          }}
        />
      )}
    </section>
  )
}
function ReportsPage() {
  const { branches } = useOutletContext<AppContext>()
  const deviceCount = branches.flatMap(devicesFor).length
  const reportCards = [
    ["สถานะความปลอดภัย", "98.4%", "เสถียรภาพรวมทุกสาขา", Icons.Shield],
    ["เหตุการณ์เดือนนี้", "24", "ปิดเคสแล้ว 22 รายการ", Icons.Bell],
    ["อุปกรณ์ในระบบ", String(deviceCount), "พร้อมใช้งาน 97%", Icons.Device],
    ["เวลาตอบสนอง", "6 นาที", "เฉลี่ยจากทุกเหตุการณ์", Icons.Clock],
  ] as const
  return (
    <>
      <PageHeading title="รายงาน" description="สรุปประสิทธิภาพระบบความปลอดภัยและการปฏิบัติงาน">
        <Button><Icons.Refresh />มิถุนายน 2568</Button>
      </PageHeading>
      <div className="report-grid">
        {reportCards.map(([label, value, note, Symbol]) => (
          <section className="panel report-card" key={label}>
            <span className="report-icon"><Symbol /></span><small>{label}</small><strong>{value}</strong><p>{note}</p>
          </section>
        ))}
      </div>
      <section className="panel report-chart">
        <SectionTitle title="แนวโน้มเหตุการณ์ 7 วัน" subtitle="จำนวนเหตุการณ์สำคัญและเหตุการณ์ที่ปิดแล้ว" />
        <div className="chart-bars">
          {[42, 68, 35, 82, 55, 72, 46].map((height, i) => (
            <div key={i}><span style={{ height: `${height}%` }} /><i style={{ height: `${Math.max(20, height - 18)}%` }} /><small>{["จ", "อ", "พ", "พฤ", "ศ", "ส", "อา"][i]}</small></div>
          ))}
        </div>
      </section>
    </>
  )
}
type Announcement = { title: string; target: string; date: string; status: string }
function AnnouncementsPage() {
  const [items, setItems] = useState<Announcement[]>([
    { title: "ตรวจสอบระบบไฟสำรองประจำเดือน", target: "ทุกสาขา", date: "20 มิ.ย. 2568 · 09:00", status: "กำหนดส่ง" },
    { title: "ปรับปรุงระบบควบคุมประตู", target: "กลุ่มภาคกลาง", date: "22 มิ.ย. 2568 · 21:00", status: "กำหนดส่ง" },
  ])
  const [title, setTitle] = useState("")
  const [target, setTarget] = useState("ทุกสาขา")
  const [date, setDate] = useState("")
  return (
    <>
      <PageHeading title="ประกาศ" description="สื่อสารถึงสาขา กลุ่มสาขา หรือทุกสาขาตามเวลาที่กำหนด">
        <Badge tone="blue">{items.length} รายการ</Badge>
      </PageHeading>
      <div className="announcement-layout">
        <section className="panel announcement-form">
          <SectionTitle title="สร้างประกาศ" subtitle="กำหนดผู้รับและเวลาส่ง" />
          <form onSubmit={(e) => { e.preventDefault(); if (!title || !date) return; setItems([...items, { title, target, date: new Date(date).toLocaleString("th-TH", { dateStyle: "medium", timeStyle: "short" }), status: "กำหนดส่ง" }]); setTitle(""); setDate("") }}>
            <label className="form-label">ข้อความประกาศ<input required value={title} onChange={(e) => setTitle(e.target.value)} placeholder="ระบุข้อความสำคัญ" /></label>
            <label className="form-label">ผู้รับ<select value={target} onChange={(e) => setTarget(e.target.value)}><option>ทุกสาขา</option><option>กลุ่มภาคเหนือ</option><option>กลุ่มภาคกลาง</option><option>กลุ่มภาคใต้</option><option>สำนักงานใหญ่</option></select></label>
            <label className="form-label">วันและเวลาส่ง<input required type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} /></label>
            <Button primary type="submit"><Icons.Bell />กำหนดส่งประกาศ</Button>
          </form>
        </section>
        <section className="panel schedule-list">
          <SectionTitle title="ตารางประกาศล่วงหน้า" />
          {items.map((item, i) => <article key={`${item.title}-${i}`}><span className="schedule-date"><Icons.Clock /></span><div><strong>{item.title}</strong><p>{item.target} · {item.date}</p></div><Badge tone="blue">{item.status}</Badge></article>)}
        </section>
      </div>
    </>
  )
}
function AboutPage() {
  return (
    <>
      <PageHeading title="รายละเอียดโปรแกรม" description="ข้อมูลระบบและคู่มือสำหรับผู้ดูแล Smart Office" />
      <div className="about-hero panel">
        <span className="about-logo"><Icons.Shield /></span>
        <div><small>SMART SMALL OFFICE PLATFORM</small><h2>Smart Office</h2><p>ศูนย์บริหารความปลอดภัยสำนักงานแบบรวมศูนย์</p></div>
        <Badge tone="green">Version 2.4.0</Badge>
      </div>
      <div className="about-grid">
        <section className="panel about-card"><Icons.Help /><div><h2>คู่มือการใช้งาน</h2><p>เรียนรู้การดูสาขา ตรวจอุปกรณ์ จัดการเหตุการณ์ และออกรายงาน</p><Button>เปิดคู่มือ <Icons.Arrow /></Button></div></section>
        <section className="panel about-card"><Icons.Shield /><div><h2>ระบบและการสนับสนุน</h2><p>บริการพร้อมใช้งานตลอด 24 ชั่วโมง สำหรับฝ่ายความปลอดภัยสำนักงานใหญ่</p><Badge>ระบบทำงานปกติ</Badge></div></section>
      </div>
    </>
  )
}
function NotFoundPage() {
  return (
    <div className="not-found">
      <Icons.Shield />
      <span>404</span>
      <h1>ไม่พบหน้าที่ต้องการ</h1>
      <p>หน้าหรือสาขานี้อาจไม่มีอยู่ในระบบ</p>
      <Link className="button button-primary" to="/">
        กลับสู่ภาพรวมความปลอดภัย
      </Link>
    </div>
  )
}
// Hash routing keeps navigation within the Figma Make preview.
const router = createHashRouter([
  {
    path: "/",
    Component: DashboardLayout,
    children: [
      { index: true, Component: OverviewPage },
      { path: "branches", Component: BranchesPage },
      { path: "branches/:branchId", Component: BranchDetailPage },
      { path: "employees", Component: EmployeesPage },
      { path: "equipment", Component: EquipmentPage },
      { path: "tasks", Component: TasksPage },
      { path: "logs", Component: LogsPage },
      { path: "reports", Component: ReportsPage },
      { path: "announcements", Component: AnnouncementsPage },
      { path: "about", Component: AboutPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
])
export default router
