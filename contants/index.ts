import {
  ChartBarIcon,
  ChartBarSquareIcon,
  ChartPieIcon,
  ChatBubbleLeftRightIcon,
  HomeIcon,
  SpeakerWaveIcon,
} from "@heroicons/react/24/outline";

export const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Listings", href: "#", icon: ChartBarSquareIcon, current: false },
  { name: "Chats", href: "#", icon: ChatBubbleLeftRightIcon, current: false },
  { name: "Stats", href: "#", icon: ChartBarIcon, current: false },
  { name: "Marketing", href: "#", icon: SpeakerWaveIcon, current: false },
  { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
];

export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};
