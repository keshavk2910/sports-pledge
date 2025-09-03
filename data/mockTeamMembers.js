import { viewFundPerson1, viewFundPerson2, viewFundPerson3, viewFundPerson4, viewFundPerson5 } from '../components/images/player';

export const mockTeamMembers = [
  {
    id: 1,
    name: 'Marcus Johnson',
    position: 'Point Guard #23',
    raised: 950,
    progress: 70,
    image: viewFundPerson1,
    height: '6\'2"',
    year: 'Junior',
    personalGoal: 1000,
    story: 'As a junior at East Side High School, Marcus has established himself as one of the team\'s most reliable scorers and perimeter defenders.',
    stats: {
      offensive: {
        pointsPerGame: 18.4,
        fieldGoalPercentage: 46,
        threePointPercentage: 38,
        freeThrowPercentage: 84
      },
      defensive: {
        reboundsPerGame: 4.2,
        stealsPerGame: 2.8,
        blocksPerGame: 0.5,
        deflections: 3.4
      },
      efficiency: {
        minutesPerGame: 28.5,
        playerEfficiency: 19.2,
        assistTurnoverRatio: 2.4,
        plusMinus: 8.2
      }
    },
    highlights: [
      'Career-high 32 points vs. Westside High',
      'Game-winning three-pointer against rival North Central',
      'Named to All-Tournament Team at Holiday Classic',
      'Currently on a streak of 18 consecutive free throws made',
      'Lead team with 7 games of 20+ points'
    ],
    donations: [
      { category: 'Uniforms', raised: 220, goal: 300, progress: 73 },
      { category: 'Performance Shoes', raised: 120, goal: 180, progress: 67 },
      { category: 'Summer Skills Camp', raised: 180, goal: 520, progress: 35 }
    ]
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    position: 'Point Guard #23',
    raised: 950,
    progress: 70,
    image: viewFundPerson2,
    height: '6\'1"',
    year: 'Senior',
    personalGoal: 1000,
    story: 'Team captain and defensive specialist with excellent court vision.',
    stats: {
      offensive: { pointsPerGame: 15.2, fieldGoalPercentage: 44, threePointPercentage: 35, freeThrowPercentage: 80 },
      defensive: { reboundsPerGame: 5.1, stealsPerGame: 3.2, blocksPerGame: 0.8, deflections: 4.1 },
      efficiency: { minutesPerGame: 30.2, playerEfficiency: 17.8, assistTurnoverRatio: 2.8, plusMinus: 6.5 }
    }
  },
  {
    id: 3,
    name: 'Marcus Johnson',
    position: 'Point Guard #23',
    raised: 950,
    progress: 70,
    image: viewFundPerson3,
    height: '6\'0"',
    year: 'Sophomore',
    personalGoal: 1000,
    story: 'Rising star with exceptional basketball IQ and leadership potential.',
    stats: {
      offensive: { pointsPerGame: 12.8, fieldGoalPercentage: 48, threePointPercentage: 32, freeThrowPercentage: 78 },
      defensive: { reboundsPerGame: 3.8, stealsPerGame: 2.1, blocksPerGame: 0.3, deflections: 2.9 },
      efficiency: { minutesPerGame: 22.4, playerEfficiency: 16.1, assistTurnoverRatio: 2.1, plusMinus: 4.2 }
    }
  },
  {
    id: 4,
    name: 'Marcus Johnson',
    position: 'Point Guard #23',
    raised: 950,
    progress: 70,
    image: viewFundPerson4,
    height: '6\'3"',
    year: 'Junior',
    personalGoal: 1000,
    story: 'Versatile forward with strong rebounding skills and developing outside shot.',
    stats: {
      offensive: { pointsPerGame: 14.6, fieldGoalPercentage: 52, threePointPercentage: 28, freeThrowPercentage: 72 },
      defensive: { reboundsPerGame: 7.2, stealsPerGame: 1.8, blocksPerGame: 1.2, deflections: 3.1 },
      efficiency: { minutesPerGame: 26.8, playerEfficiency: 18.5, assistTurnoverRatio: 1.9, plusMinus: 5.8 }
    }
  },
  {
    id: 5,
    name: 'Marcus Johnson', 
    position: 'Point Guard #23',
    raised: 950,
    progress: 70,
    image: viewFundPerson5,
    height: '5\'11"',
    year: 'Freshman',
    personalGoal: 1000,
    story: 'Promising rookie with excellent work ethic and natural athletic ability.',
    stats: {
      offensive: { pointsPerGame: 8.2, fieldGoalPercentage: 42, threePointPercentage: 30, freeThrowPercentage: 75 },
      defensive: { reboundsPerGame: 2.8, stealsPerGame: 1.5, blocksPerGame: 0.2, deflections: 2.1 },
      efficiency: { minutesPerGame: 18.6, playerEfficiency: 13.8, assistTurnoverRatio: 1.6, plusMinus: 2.9 }
    }
  }
];