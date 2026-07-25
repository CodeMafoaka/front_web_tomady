import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number | string;
};

function base(props: IconProps) {
  const { size = 24, className, ...rest } = props;
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
    ...rest,
  };
}

export function AvocadoIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3c4 0 6 3 6 7s-2 9-6 11c-4-2-6-7-6-11s2-7 6-7Z" fill="currentColor" fillOpacity="0.15" />
      <path d="M12 3c4 0 6 3 6 7s-2 9-6 11c-4-2-6-7-6-11s2-7 6-7Z" />
      <circle cx="12" cy="11" r="3" fill="currentColor" />
    </svg>
  );
}

export function BowlIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 11h18a9 9 0 0 1-18 0Z" fill="currentColor" fillOpacity="0.15" />
      <path d="M3 11h18a9 9 0 0 1-18 0Z" />
      <path d="M8 8c0-2 2-3 4-3s4 1 4 3" />
      <path d="M12 5v3" />
    </svg>
  );
}

export function StrawberryIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 7c4 0 7 3 7 7s-3 7-7 7-7-3-7-7 3-7 7-7Z" fill="currentColor" fillOpacity="0.15" />
      <path d="M12 7c4 0 7 3 7 7s-3 7-7 7-7-3-7-7 3-7 7-7Z" />
      <path d="M9 5l3 2 3-2" />
      <circle cx="10" cy="12" r="0.6" fill="currentColor" />
      <circle cx="14" cy="14" r="0.6" fill="currentColor" />
      <circle cx="12" cy="16" r="0.6" fill="currentColor" />
      <circle cx="13" cy="10" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function FishIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M2 12s4-6 10-6 8 6 8 6-2 6-8 6-10-6-10-6Z" fill="currentColor" fillOpacity="0.15" />
      <path d="M2 12s4-6 10-6 8 6 8 6-2 6-8 6-10-6-10-6Z" />
      <path d="M22 12l3-2v4z" fill="currentColor" />
      <circle cx="8" cy="11" r="1" fill="currentColor" />
      <path d="M9 15c1.5 1 3 1 5 0" />
    </svg>
  );
}

export function PeanutIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M9 4c2 0 3 1.5 3 3 0 1.5-1 2-1 3s1 1.5 1 3-1 3-3 3-4-1.5-4-3c0-1.5 1-2 1-3s-1-1.5-1-3 1-3 4-3Z" fill="currentColor" fillOpacity="0.15" />
      <path d="M9 4c2 0 3 1.5 3 3 0 1.5-1 2-1 3s1 1.5 1 3-1 3-3 3-4-1.5-4-3c0-1.5 1-2 1-3s-1-1.5-1-3 1-3 4-3Z" />
      <path d="M11 7c-1-1-3-1-4 0" />
      <path d="M11 13c-1-1-3-1-4 0" />
    </svg>
  );
}

export function CroissantIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 14c-1-3 1-7 4-9s7-2 9 1c2 3-1 7-4 9s-8 1-9-1Z" fill="currentColor" fillOpacity="0.15" />
      <path d="M5 14c-1-3 1-7 4-9s7-2 9 1c2 3-1 7-4 9s-8 1-9-1Z" />
      <path d="M9 6l-2 2M13 5l-1 2M16 7l-1 2M7 11l2-1M9 14l2-1M14 12l2-1" />
    </svg>
  );
}

export function AppleIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 8c-3 0-6 2-6 6s3 8 6 8 6-4 6-8-3-6-6-6Z" fill="currentColor" fillOpacity="0.15" />
      <path d="M12 8c-3 0-6 2-6 6s3 8 6 8 6-4 6-8-3-6-6-6Z" />
      <path d="M12 8c0-2 1-4 3-4" />
      <path d="M14 5l-1 1" />
    </svg>
  );
}

export function BellIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 16V11a6 6 0 1 1 12 0v5l2 2H4z" fill="currentColor" fillOpacity="0.15" />
      <path d="M6 16V11a6 6 0 1 1 12 0v5l2 2H4z" />
      <path d="M10 20a2 2 0 0 0 4 0" />
    </svg>
  );
}

export function AlertTriangleIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3l10 18H2z" fill="currentColor" fillOpacity="0.15" />
      <path d="M12 3l10 18H2z" />
      <path d="M12 10v4M12 17h0" />
    </svg>
  );
}

export function MicIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="9" y="3" width="6" height="11" rx="3" fill="currentColor" fillOpacity="0.15" />
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0" />
      <path d="M12 18v3M9 21h6" />
    </svg>
  );
}

export function SendIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 20l18-8L3 4l3 8-3 8z" fill="currentColor" fillOpacity="0.15" />
      <path d="M3 20l18-8L3 4l3 8-3 8z" />
      <path d="M6 12h11" />
    </svg>
  );
}

export function TargetIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 20s-7-4.5-7-10a4.5 4.5 0 0 1 7-3.5A4.5 4.5 0 0 1 19 10c0 5.5-7 10-7 10z" fill="currentColor" fillOpacity="0.15" />
      <path d="M12 20s-7-4.5-7-10a4.5 4.5 0 0 1 7-3.5A4.5 4.5 0 0 1 19 10c0 5.5-7 10-7 10z" />
    </svg>
  );
}

export function PlusIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 12l4 4L19 6" />
    </svg>
  );
}

export function CrossIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function BatteryIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="2" y="8" width="18" height="8" rx="2" />
      <rect x="4" y="10" width="11" height="4" fill="currentColor" />
      <path d="M22 11v2" />
    </svg>
  );
}

export function DropletIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3s-6 6-6 11a6 6 0 0 0 12 0c0-5-6-11-6-11z" fill="currentColor" fillOpacity="0.15" />
      <path d="M12 3s-6 6-6 11a6 6 0 0 0 12 0c0-5-6-11-6-11z" />
    </svg>
  );
}

export function LeafIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 19c0-8 6-14 14-14 0 8-6 14-14 14z" fill="currentColor" fillOpacity="0.15" />
      <path d="M5 19c0-8 6-14 14-14 0 8-6 14-14 14z" />
      <path d="M5 19c4-4 8-7 14-14" />
    </svg>
  );
}

export function FlameIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3s4 4 4 8a4 4 0 0 1-8 0c0-2 1-3 1-3s0 2 2 2c1 0 1-2-1-5 2 0 2-2 2-2z" fill="currentColor" fillOpacity="0.15" />
      <path d="M12 3s4 4 4 8a4 4 0 0 1-8 0c0-2 1-3 1-3s0 2 2 2c1 0 1-2-1-5 2 0 2-2 2-2z" />
      <path d="M9 16a3 3 0 0 0 6 0" />
    </svg>
  );
}

export function HappyFaceIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" fill="currentColor" fillOpacity="0.12" />
      <circle cx="12" cy="12" r="9" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <circle cx="9" cy="10" r="0.8" fill="currentColor" />
      <circle cx="15" cy="10" r="0.8" fill="currentColor" />
    </svg>
  );
}

export function NeutralFaceIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" fill="currentColor" fillOpacity="0.12" />
      <circle cx="12" cy="12" r="9" />
      <path d="M8 15h8" />
      <circle cx="9" cy="10" r="0.8" fill="currentColor" />
      <circle cx="15" cy="10" r="0.8" fill="currentColor" />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export function LogomarkIcon(props: IconProps) {
  return (
    <svg {...base({ ...props, fill: "currentColor", stroke: "none" })}>
      <path d="M12 21s-7-4.35-7-10a7 7 0 1 1 14 0c0 5.65-7 10-7 10z" />
      <path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" fill="#fff" fillOpacity="0.85" />
    </svg>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2 20a7 7 0 0 1 14 0" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M16 20a5 5 0 0 1 6 0" />
    </svg>
  );
}

export function PlateIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg {...base({ ...props, fill: "currentColor", stroke: "none" })}>
      <path d="M12 2l2.39 7.36H22l-6.19 4.5L18.2 21 12 16.5 5.8 21l2.39-7.14L2 9.36h7.61L12 2z" />
    </svg>
  );
}

export function QuoteIcon(props: IconProps) {
  return (
    <svg {...base({ ...props, fill: "currentColor", stroke: "none" })}>
      <path d="M7 7h3v3H7v3H4V7a3 3 0 0 1 3-3zm10 0h-3v3h3v3h3V7a3 3 0 0 0-3-3z" />
    </svg>
  );
}

export const FoodIcon = {
  AvocadoIcon,
  BowlIcon,
  StrawberryIcon,
  FishIcon,
  PeanutIcon,
  CroissantIcon,
  AppleIcon,
};

export const UiIcon = {
  BellIcon,
  AlertTriangleIcon,
  MicIcon,
  SendIcon,
  TargetIcon,
  HeartIcon,
  PlusIcon,
  CheckIcon,
  CrossIcon,
  BatteryIcon,
  DropletIcon,
  LeafIcon,
  FlameIcon,
  HappyFaceIcon,
  NeutralFaceIcon,
  SearchIcon,
  LogomarkIcon,
  UsersIcon,
  PlateIcon,
  StarIcon,
  QuoteIcon,
};