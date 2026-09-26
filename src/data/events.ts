import { EventClass } from '@/types';

export const EVENT_CLASSES: EventClass[] = [
  { id: 'accident', label: 'accident', icon: '💥', description: 'Vehicle collision via trajectory convergence & shape deformation', color: '#ff2d55', cssClass: 'accident' },
  { id: 'near_miss', label: 'near_miss', icon: '⚠️', description: 'Close-proximity conflict predicted before contact', color: '#ff6b35', cssClass: 'nearmiss' },
  { id: 'red_light', label: 'red_light', icon: '🔴', description: 'Stop-line crossing during detected red phase', color: '#ff3b30', cssClass: 'redlight' },
  { id: 'wrong_way', label: 'wrong_way', icon: '🔁', description: 'Opposing flow vector vs lane direction', color: '#ff9f0a', cssClass: 'wrongway' },
  { id: 'illegal_u_turn', label: 'illegal_u_turn', icon: '↩️', description: '180° bearing reversal in restricted zones', color: '#ffd60a', cssClass: 'uturn' },
  { id: 'stopped_vehicle', label: 'stopped_vehicle', icon: '🚗', description: 'Stationary vehicle exceeding dwell threshold', color: '#30d158', cssClass: 'stopped' },
  { id: 'jaywalking', label: 'jaywalking', icon: '🚶', description: 'Pedestrian crossing outside designated zones', color: '#34aadc', cssClass: 'jaywalking' },
  { id: 'failure_to_yield', label: 'failure_to_yield', icon: '🛑', description: 'No deceleration at yield-sign zone', color: '#5ac8fa', cssClass: 'yield' },
  { id: 'illegal_turn', label: 'illegal_turn', icon: '🚦', description: 'Turn manoeuvre at prohibited intersection', color: '#bf5af2', cssClass: 'illegalturn' },
  { id: 'solid_line_crossing', label: 'solid_line_crossing', icon: '〰️', description: 'Track crossing segmented solid lane marking', color: '#ff375f', cssClass: 'solidline' },
  { id: 'stop_line', label: 'stop_line', icon: '⛔', description: 'Vehicle over stop line at red / pedestrian crossing', color: '#ff6961', cssClass: 'stopline' },
  { id: 'congestion', label: 'congestion', icon: '🚧', description: 'Density + speed threshold breach in zone', color: '#636366', cssClass: 'congestion' },
  { id: 'road_obstacle', label: 'road_obstacle', icon: '🔧', description: 'Stationary foreign object on carriageway', color: '#ffe234', cssClass: 'obstacle' },
  { id: 'fire_smoke', label: 'fire_smoke', icon: '🔥', description: 'Thermal anomaly & smoke region segmentation', color: '#ff6b35', cssClass: 'firesmoke' },
];
