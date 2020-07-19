import React from "react"

const strokeColor="#4bc0c8";
const height = "40px";
const width = "40px";

const HomeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-home"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke={strokeColor}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <polyline points="5 12 3 12 12 3 21 12 19 12" />
    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
    <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
  </svg>
)

const UserIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-user"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke={strokeColor}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <circle cx="12" cy="7" r="4" />
    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
  </svg>
)

const ToolsIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-tools"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke={strokeColor}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" />
    <line x1="14.5" y1="5.5" x2="18.5" y2="9.5" />
    <polyline points="12 8 7 3 3 7 8 12" />
    <line x1="7" y1="8" x2="5.5" y2="9.5" />
    <polyline points="16 12 21 17 17 21 12 16" />
    <line x1="16" y1="17" x2="14.5" y2="18.5" />
  </svg>
)

const BracesIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-file-code"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke={strokeColor}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
    <path d="M10 13l-1 2l1 2" />
    <path d="M14 13l1 2l-1 2" />
  </svg>
)

const LaptopIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-device-laptop"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke={strokeColor}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <line x1="3" y1="19" x2="21" y2="19" />
    <rect x="5" y="6" width="14" height="10" rx="1" />
  </svg>
)

const TablerIcon = {
  HomeIcon,
  UserIcon,
  ToolsIcon,
  BracesIcon,
  LaptopIcon,
}

export default TablerIcon
