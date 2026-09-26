import { ResultCard } from '@/types';

export const RESULT_CARDS: ResultCard[] = [
  {
    id: 'clip-003',
    clip: 'clip_003.mp4',
    title: 'Intersection Collision Scenario',
    duration: '00:00 – 00:45',
    fps: 25,
    image: '/assets/thumb-accident.png',
    imageAlt: 'Accident detection annotation',
    badges: [
      { label: 'ACCIDENT', color: '#ff2d55' },
      { label: 'NEAR MISS', color: '#ff6b35' },
    ],
    timeline: [
      { color: '#636366', width: 30, opacity: 0.7 },
      { color: '#ff6b35', width: 25 },
      { color: '#ff2d55', width: 20 },
      { color: '#30d158', width: 15 },
      { color: 'rgba(255,255,255,0.03)', width: 10 },
    ],
    legend: [
      { label: 'Congestion', color: '#636366' },
      { label: 'Near Miss', color: '#ff6b35' },
      { label: 'Accident', color: '#ff2d55' },
      { label: 'Stopped', color: '#30d158' },
    ],
  },
  {
    id: 'clip-011',
    clip: 'clip_011.mp4',
    title: 'Counter-flow & Red-Light Violation',
    duration: '00:00 – 00:38',
    fps: 30,
    image: '/assets/thumb-wrongway.png',
    imageAlt: 'Wrong-way driver detection',
    badges: [
      { label: 'WRONG WAY', color: '#ff9f0a' },
      { label: 'RED LIGHT', color: '#ff3b30' },
    ],
    timeline: [
      { color: 'rgba(255,255,255,0.03)', width: 15 },
      { color: '#ff3b30', width: 22 },
      { color: 'rgba(255,255,255,0.03)', width: 8 },
      { color: '#ff9f0a', width: 35 },
      { color: '#ff6b35', width: 10 },
      { color: 'rgba(255,255,255,0.03)', width: 10 },
    ],
    legend: [
      { label: 'Red Light', color: '#ff3b30' },
      { label: 'Wrong Way', color: '#ff9f0a' },
      { label: 'Near Miss', color: '#ff6b35' },
    ],
  },
  {
    id: 'clip-027',
    clip: 'clip_027.mp4',
    title: 'Peak-hour Congestion Build-up',
    duration: '00:00 – 01:10',
    fps: 25,
    image: '/assets/thumb-congestion.png',
    imageAlt: 'Congestion detection',
    badges: [
      { label: 'CONGESTION', color: '#00e5ff' },
      { label: 'STOPPED', color: '#30d158' },
    ],
    timeline: [
      { color: 'rgba(255,255,255,0.03)', width: 20 },
      { color: '#636366', width: 40, opacity: 0.9 },
      { color: '#30d158', width: 20 },
      { color: '#34aadc', width: 10 },
      { color: 'rgba(255,255,255,0.03)', width: 10 },
    ],
    legend: [
      { label: 'Congestion', color: '#636366' },
      { label: 'Stopped Vehicle', color: '#30d158' },
      { label: 'Jaywalking', color: '#34aadc' },
    ],
  },
];
