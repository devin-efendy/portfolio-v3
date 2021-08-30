import React from 'react'
import { motion } from 'framer-motion'

const strokeColor = 'rgba(255,255,255,0.75)'
const strokeWidth = '1'
const height = '40px'
const width = '40px'

const HomeIcon = ({ variants }) => {
  return (
    <motion.svg
      variants={variants}
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-home"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={strokeColor}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <motion.path stroke="none" d="M0 0h24v24H0z" />
      <motion.polyline points="5 12 3 12 12 3 21 12 19 12" />
      <motion.path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
      <motion.path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
    </motion.svg>
  )
}

const UserIcon = ({ variants }) => {
  return (
    <motion.svg
      variants={variants}
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-user"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={strokeColor}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <motion.path stroke="none" d="M0 0h24v24H0z" />
      <motion.circle cx="12" cy="7" r="4" />
      <motion.path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
    </motion.svg>
  )
}

const ToolsIcon = ({ variants }) => {
  return (
    <motion.svg
      variants={variants}
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-tools"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={strokeColor}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <motion.path stroke="none" d="M0 0h24v24H0z" />
      <motion.path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" />
      <motion.line x1="14.5" y1="5.5" x2="18.5" y2="9.5" />
      <motion.polyline points="12 8 7 3 3 7 8 12" />
      <motion.line x1="7" y1="8" x2="5.5" y2="9.5" />
      <motion.polyline points="16 12 21 17 17 21 12 16" />
      <motion.line x1="16" y1="17" x2="14.5" y2="18.5" />
    </motion.svg>
  )
}
const BracesIcon = ({ variants }) => {
  return (
    <motion.svg
      variants={variants}
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-file-code"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={strokeColor}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <motion.path stroke="none" d="M0 0h24v24H0z" />
      <motion.path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <motion.path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
      <motion.path d="M10 13l-1 2l1 2" />
      <motion.path d="M14 13l1 2l-1 2" />
    </motion.svg>
  )
}
const LaptopIcon = ({ variants }) => {
  return (
    <motion.svg
      variants={variants}
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-device-laptop"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={strokeColor}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <motion.path stroke="none" d="M0 0h24v24H0z" />
      <motion.line x1="3" y1="19" x2="21" y2="19" />
      <motion.rect x="5" y="6" width="14" height="10" rx="1" />
    </motion.svg>
  )
}
const PhoneIcon = ({ variants }) => {
  return (
    <motion.svg
      variants={variants}
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-phone"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      stroke-width={strokeWidth}
      stroke={strokeColor}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <motion.path stroke="none" d="M0 0h24v24H0z" />
      <motion.path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
    </motion.svg>
  )
}
const TablerIcon = {
  HomeIcon,
  UserIcon,
  ToolsIcon,
  BracesIcon,
  LaptopIcon,
  PhoneIcon,
}

export default TablerIcon
