import {
  Zap,
  Heart,
  Globe,
  Shield,
  CreditCard,
  Briefcase,
  Phone,
  Battery,
  Sun,
  Warehouse,
  Network,
  Cpu,
  Gauge,
  Flame,
  HardHat,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export interface Division {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export interface Service {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export interface ProductCategory {
  title: string;
  description: string;
  items: string[];
  icon: LucideIcon;
}

export interface Partner {
  name: string;
  category: string;
}

export const divisions: Division[] = [
  {
    title: "Energy",
    description:
      "End-to-end solutions for the oil & gas and industrial energy sector. From upstream exploration to downstream refining, we connect suppliers with the projects that need them.",
    icon: Zap,
    image: "/images/energy.svg",
  },
  {
    title: "Health",
    description:
      "Medical equipment and healthcare goods procurement for hospitals, clinics, and healthcare organizations. Sourced from leading North American and European manufacturers.",
    icon: Heart,
    image: "/images/health.svg",
  },
  {
    title: "Global Trade",
    description:
      "Import and export facilitation across North America, the Arabian Gulf, the Middle East, Africa, and Asia. Bridging supply chains with seamless logistics and procurement.",
    icon: Globe,
    image: "/images/trade.svg",
  },
  {
    title: "IT Security",
    description:
      "Enterprise-grade cybersecurity solutions for critical infrastructure. Protection of systems and networks from threats to hardware, software, and electronic data.",
    icon: Shield,
    image: "/images/security.svg",
  },
  {
    title: "Payment Solutions",
    description:
      "Secure payment processing infrastructure for e-businesses, online retailers, and traditional brick-and-mortar operations across borders.",
    icon: CreditCard,
    image: "/images/payments.svg",
  },
  {
    title: "Special Projects",
    description:
      "Custom-tailored projects for unique client requirements. From concept to delivery, we engineer solutions for complex industrial and cross-border challenges.",
    icon: Briefcase,
    image: "/images/projects.svg",
  },
];

export const services: Service[] = [
  {
    title: "Industrial Telecom Solutions",
    subtitle: "Hazardous Location Communication Systems",
    description:
      "Explosion-proof and hazardous-area telephones, PAGA systems, Page/Talk, Talk/Back, and industrial speaker systems for demanding environments.",
    icon: Phone,
    image: "/images/telecom.svg",
  },
  {
    title: "Industrial AC & DC Power Solutions",
    subtitle: "USA & EU Certified Brands",
    description:
      "Industrial UPS systems, DC chargers, telecom power solutions, and battery bank configurations for mission-critical power infrastructure.",
    icon: Battery,
    image: "/images/power.svg",
  },
  {
    title: "Renewable Energy Solutions",
    subtitle: "Solar & Clean Energy Systems",
    description:
      "Solar panels, charge controllers, inverters, and battery storage systems. Complete renewable energy packages for industrial and commercial applications.",
    icon: Sun,
    image: "/images/solar.svg",
  },
  {
    title: "Industrial Shelters & Cabinets",
    subtitle: "Active & Passive Conditioning",
    description:
      "Outdoor shelters and cabinets with active and passive conditioning for oil & gas and industrial environments. Engineered for extreme conditions.",
    icon: Warehouse,
    image: "/images/shelters.svg",
  },
  {
    title: "Electrical, IT & Communication Solutions",
    subtitle: "Networking & Infrastructure",
    description:
      "Networking devices, explosion-proof panels, fiber optic cable, lighting, fittings, and junction boxes for industrial communication infrastructure.",
    icon: Network,
    image: "/images/networking.svg",
  },
  {
    title: "Project Automation & Control",
    subtitle: "Detection, Monitoring & Protection",
    description:
      "Leak detection systems (LDS), remote terminal units (RTU), online transaction monitoring, fire alarm systems, and cathodic protection solutions.",
    icon: Cpu,
    image: "/images/automation.svg",
  },
];

export const productCategories: ProductCategory[] = [
  {
    title: "Electrical Power",
    description:
      "High voltage equipment, medium voltage systems, transformers, busways, battery & charger systems, and low voltage electrical solutions.",
    icon: Zap,
    items: [
      "High Voltage Equipment",
      "MV Electrical Equipment",
      "Transformers",
      "Busways",
      "Battery & Chargers",
      "LV Solutions & Components",
      "Capacitor Switches",
      "Reclosers",
      "Load Interrupters",
    ],
  },
  {
    title: "Oil & Gas Equipment",
    description:
      "Complete range of oilfield equipment for drilling contractors, operators, and service companies operating globally.",
    icon: Flame,
    items: [
      "Drilling Equipment & Supplies",
      "Well Control Equipment",
      "Well Head Equipment",
      "Production Equipment",
      "Mud Pump and Parts",
      "Solid Control Equipment",
      "Fluid Control Products",
      "Rig Accessories",
      "Fire Protection Systems",
    ],
  },
  {
    title: "Instrumentation & Control",
    description:
      "Precision instrumentation, calibration equipment, process control systems, and testing devices for industrial applications.",
    icon: Gauge,
    items: [
      "Pressure Gauges & Transducers",
      "Temperature Controllers",
      "Flow Meters & Totalizers",
      "Level Switches",
      "Calibrators",
      "Process Control Valves",
      "Analyzers",
      "Thermocouples & RTDs",
      "Multimeters & Test Equipment",
    ],
  },
  {
    title: "Communication Systems",
    description:
      "Enterprise-grade communication infrastructure including broadband, networking, fiber optics, and industrial communication systems.",
    icon: Network,
    items: [
      "Broadband Electronics",
      "IP Network Devices",
      "Fiber Optics",
      "Two-Way Radio Systems",
      "SCADA & Telemetry",
      "Towers & Site Hardware",
      "Distributed Antenna Systems",
      "Racks & Cabinets",
      "Test & Measurement",
    ],
  },
  {
    title: "Safety & Personal Protection",
    description:
      "Comprehensive range of occupational safety products, personal protective equipment, and hazardous-area safety solutions.",
    icon: HardHat,
    items: [
      "Gas Detection Systems",
      "Fall Protection Equipment",
      "Respiratory Protection",
      "Protective Clothing",
      "Safety Glasses & Face Shields",
      "Hearing Protection",
      "FR & Arc Flash Clothing",
      "Safety Boots & Workwear",
      "Spill Kits & First Aid",
    ],
  },
  {
    title: "Industrial Equipment & Tools",
    description:
      "Pumps, valves, pneumatics, hydraulics, motors, compressors, and industrial hand and power tools from leading manufacturers.",
    icon: Wrench,
    items: [
      "Centrifugal & Diaphragm Pumps",
      "Ball, Gate & Control Valves",
      "Air Compressors",
      "Pneumatic & Hydraulic Systems",
      "Industrial Motors",
      "Gearboxes",
      "Industrial Hand Tools",
      "Lifting Equipment",
      "Maintenance Tools",
    ],
  },
];

export const partners: Partner[] = [
  { name: "ABB", category: "Power & Automation" },
  { name: "Siemens", category: "Industrial Automation" },
  { name: "Honeywell", category: "Process Solutions" },
  { name: "Schneider Electric", category: "Energy Management" },
  { name: "Emerson", category: "Automation Solutions" },
  { name: "GE", category: "Power & Energy" },
  { name: "Parker Hannifin", category: "Motion & Control" },
  { name: "Rockwell Automation", category: "Industrial Automation" },
  { name: "Eaton", category: "Power Management" },
  { name: "Yokogawa", category: "Test & Measurement" },
  { name: "Danfoss", category: "Engineering Solutions" },
  { name: "Omron", category: "Industrial Automation" },
  { name: "Phoenix Contact", category: "Electrical Engineering" },
  { name: "Endress+Hauser", category: "Instrumentation" },
  { name: "Fisher", category: "Control Valves" },
  { name: "Rosemount", category: "Measurement Solutions" },
  { name: "Rotork", category: "Flow Control" },
  { name: "3M", category: "Safety & Industrial" },
  { name: "MSA Safety", category: "Safety Equipment" },
  { name: "Toshiba", category: "Power Systems" },
  { name: "Atlas Copco", category: "Compressors" },
  { name: "Grundfos", category: "Pumps" },
  { name: "SKF", category: "Bearings" },
  { name: "Rittal", category: "Enclosures" },
  { name: "Fluke", category: "Test & Measurement" },
  { name: "Ingersoll Rand", category: "Air Solutions" },
  { name: "Velan", category: "Valves" },
  { name: "Victaulic", category: "Pipe Joining" },
  { name: "Weidmuller", category: "Connectivity" },
  { name: "Hach", category: "Water Analysis" },
  { name: "KSB", category: "Pumps & Valves" },
  { name: "Metso", category: "Flow Control" },
  { name: "National Oilwell Varco", category: "Oil & Gas Equipment" },
  { name: "Pentair", category: "Water Treatment" },
  { name: "Tyco", category: "Fire & Security" },
  { name: "Juniper Networks", category: "Networking" },
];

export const companyInfo = {
  name: "Saldu",
  fullName: "Saldu Global Solutions",
  tagline: "Providing Global Industrial & Trading Solutions",
  description:
    "Saldu Global Solutions is a procurement and trading company connecting North American and European industrial suppliers with the Middle East, Arabian Gulf, and emerging markets.",
  mission:
    "To bridge the gap between industrial innovation and market demand across borders, providing cost-effective, high-quality procurement solutions that create lasting partnerships.",
  vision:
    "To become the most trusted cross-border procurement partner, building trade corridors that empower industries on both sides to grow and succeed.",
  email: "info@saldu.ca",
  phone: "+1 (647) 370-2583",
  location: "Toronto, Ontario, Canada",
  markets: [
    "Oil & Gas",
    "Power Generation",
    "Petrochemical",
    "Utilities",
    "Infrastructure",
    "Automation",
    "Mining",
    "Communication",
    "Healthcare",
  ],
  regions: [
    "Canada",
    "United States",
    "Middle East",
    "Arabian Gulf",
    "Africa",
    "Asia",
    "Europe",
  ],
};
