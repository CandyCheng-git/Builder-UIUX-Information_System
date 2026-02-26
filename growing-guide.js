// Comprehensive crop database with growing information
const cropsDatabase = [
  // Vegetables
  {
    id: 'tomato',
    name: 'Tomato',
    category: 'vegetables',
    icon: '🍅',
    difficulty: 'Medium',
    description: 'Versatile fruit vegetable perfect for beginners and experts alike.',
    optimalTemp: '18-24°C',
    humidity: '60-70%',
    wateringFreq: 'Every 2-3 days',
    soilPH: '6.0-6.8',
    sunlight: '6-8 hours direct sun',
    spacing: '45-60cm apart',
    timeToHarvest: '70-80 days',
    substrate: 'Well-draining potting mix with compost',
    tips: [
      'Provide sturdy support structures for vining varieties',
      'Water consistently to prevent blossom end rot',
      'Pinch suckers for better fruit development',
      'Mulch around plants to retain moisture'
    ],
    commonProblems: [
      'Blossom end rot (caused by inconsistent watering)',
      'Tomato hornworms (large green caterpillars)',
      'Early blight (brown spots on leaves)'
    ],
    companionPlants: ['Basil', 'Parsley', 'Carrots', 'Lettuce'],
    harvestTips: 'Harvest when fruits are fully colored but still firm'
  },
  {
    id: 'lettuce',
    name: 'Lettuce',
    category: 'leafy',
    icon: '🥬',
    difficulty: 'Easy',
    description: 'Quick-growing leafy green perfect for continuous harvesting.',
    optimalTemp: '15-20°C',
    humidity: '50-60%',
    wateringFreq: 'Daily light watering',
    soilPH: '6.0-7.0',
    sunlight: '4-6 hours (can tolerate partial shade)',
    spacing: '15-30cm apart',
    timeToHarvest: '30-45 days',
    substrate: 'Light, well-draining potting mix',
    tips: [
      'Succession plant every 2 weeks for continuous harvest',
      'Keep soil consistently moist but not waterlogged',
      'Harvest outer leaves first for cut-and-come-again harvest',
      'Provide afternoon shade in hot climates'
    ],
    commonProblems: [
      'Bolting in hot weather (going to seed)',
      'Aphids on tender leaves',
      'Slug damage in wet conditions'
    ],
    companionPlants: ['Carrots', 'Radishes', 'Onions', 'Tomatoes'],
    harvestTips: 'Best harvested in the morning when leaves are crisp'
  },
  {
    id: 'carrot',
    name: 'Carrot',
    category: 'vegetables',
    icon: '🥕',
    difficulty: 'Medium',
    description: 'Root vegetable requiring deep, loose soil for proper development.',
    optimalTemp: '16-18°C',
    humidity: '55-65%',
    wateringFreq: 'Every 2-3 days, deep watering',
    soilPH: '6.0-6.8',
    sunlight: '6+ hours direct sun',
    spacing: '5-7cm apart',
    timeToHarvest: '70-80 days',
    substrate: 'Deep, loose, sandy loam with no rocks',
    tips: [
      'Ensure deep container (at least 30cm) for root development',
      'Thin seedlings to prevent overcrowding',
      'Keep soil consistently moist during germination',
      'Avoid fresh manure which can cause forked roots'
    ],
    commonProblems: [
      'Forked or stunted roots from compacted soil',
      'Carrot fly larvae in roots',
      'Poor germination in dry conditions'
    ],
    companionPlants: ['Lettuce', 'Onions', 'Chives', 'Sage'],
    harvestTips: 'Harvest when shoulders are about 2cm in diameter'
  },
  {
    id: 'pepper',
    name: 'Bell Pepper',
    category: 'vegetables',
    icon: '🌶️',
    difficulty: 'Medium',
    description: 'Heat-loving vegetable that produces colorful, nutritious fruits.',
    optimalTemp: '21-27°C',
    humidity: '60-70%',
    wateringFreq: 'Every 2-3 days',
    soilPH: '6.0-6.8',
    sunlight: '6-8 hours direct sun',
    spacing: '30-45cm apart',
    timeToHarvest: '75-85 days',
    substrate: 'Rich, well-draining potting mix',
    tips: [
      'Provide support for heavy fruit-laden branches',
      'Maintain consistent soil moisture',
      'Pick first fruits early to encourage more production',
      'Protect from strong winds'
    ],
    commonProblems: [
      'Blossom end rot from inconsistent watering',
      'Aphids and spider mites',
      'Sunscald on fruits in intense heat'
    ],
    companionPlants: ['Basil', 'Parsley', 'Tomatoes', 'Onions'],
    harvestTips: 'Harvest when fruits reach full size and desired color'
  },
  {
    id: 'cucumber',
    name: 'Cucumber',
    category: 'vegetables',
    icon: '🥒',
    difficulty: 'Easy',
    description: 'Fast-growing vine crop perfect for fresh eating and pickling.',
    optimalTemp: '20-25°C',
    humidity: '60-70%',
    wateringFreq: 'Daily in hot weather',
    soilPH: '6.0-6.8',
    sunlight: '6-8 hours direct sun',
    spacing: '30-45cm apart',
    timeToHarvest: '50-70 days',
    substrate: 'Rich, well-draining potting mix with compost',
    tips: [
      'Provide vertical support for vining varieties',
      'Harvest regularly to encourage more production',
      'Keep soil consistently moist to prevent bitter fruit',
      'Mulch around plants to retain moisture'
    ],
    commonProblems: [
      'Cucumber beetles eating leaves and spreading disease',
      'Powdery mildew on leaves in humid conditions',
      'Bitter fruit from water stress'
    ],
    companionPlants: ['Beans', 'Corn', 'Radishes', 'Marigolds'],
    harvestTips: 'Harvest when young and tender, before seeds become large'
  },
  {
    id: 'zucchini',
    name: 'Zucchini',
    category: 'vegetables',
    icon: '🥒',
    difficulty: 'Easy',
    description: 'Prolific summer squash that produces abundant harvests.',
    optimalTemp: '18-24°C',
    humidity: '50-60%',
    wateringFreq: 'Every 2-3 days, deep watering',
    soilPH: '6.0-7.0',
    sunlight: '6+ hours direct sun',
    spacing: '90-120cm apart',
    timeToHarvest: '45-55 days',
    substrate: 'Rich, well-draining soil with plenty of organic matter',
    tips: [
      'Give plants plenty of space for large leaves',
      'Harvest young fruit regularly to maintain production',
      'Water at soil level to prevent leaf diseases',
      'Can be very prolific - one plant feeds a family'
    ],
    commonProblems: [
      'Squash bugs sucking plant juices',
      'Squash vine borers tunneling in stems',
      'Powdery mildew on leaves'
    ],
    companionPlants: ['Nasturtiums', 'Marigolds', 'Beans', 'Corn'],
    harvestTips: 'Harvest when 15-20cm long for best texture and flavor'
  },
  {
    id: 'radish',
    name: 'Radish',
    category: 'vegetables',
    icon: '🔴',
    difficulty: 'Easy',
    description: 'Quick-growing root vegetable perfect for succession planting.',
    optimalTemp: '10-18°C',
    humidity: '50-60%',
    wateringFreq: 'Every 1-2 days',
    soilPH: '6.0-7.0',
    sunlight: '4-6 hours direct sun',
    spacing: '2-5cm apart',
    timeToHarvest: '25-35 days',
    substrate: 'Loose, well-draining potting mix',
    tips: [
      'Perfect for succession planting every 2 weeks',
      'Harvest promptly to prevent woody texture',
      'Can be planted between slower-growing crops',
      'Cool weather crop - avoid hot summer months'
    ],
    commonProblems: [
      'Flea beetles making small holes in leaves',
      'Split roots from irregular watering',
      'Woody texture if left too long'
    ],
    companionPlants: ['Lettuce', 'Spinach', 'Carrots', 'Chives'],
    harvestTips: 'Harvest when roots are firm and crisp, usually marble-sized'
  },
  {
    id: 'broccoli',
    name: 'Broccoli',
    category: 'vegetables',
    icon: '🥦',
    difficulty: 'Medium',
    description: 'Nutritious cool-season crop that forms compact flower heads.',
    optimalTemp: '15-20°C',
    humidity: '60-70%',
    wateringFreq: 'Every 2-3 days',
    soilPH: '6.0-7.0',
    sunlight: '6+ hours direct sun',
    spacing: '45-60cm apart',
    timeToHarvest: '70-100 days',
    substrate: 'Rich, well-draining soil with high nitrogen',
    tips: [
      'Needs cool weather to form good heads',
      'Harvest main head when tight and compact',
      'Side shoots will continue producing after main harvest',
      'Protect from extreme heat with shade cloth'
    ],
    commonProblems: [
      'Cabbage worms eating leaves',
      'Clubroot disease in acidic soil',
      'Bolting in hot weather'
    ],
    companionPlants: ['Onions', 'Garlic', 'Dill', 'Nasturtiums'],
    harvestTips: 'Cut main head when tight and before flowers open'
  },
  {
    id: 'eggplant',
    name: 'Eggplant',
    category: 'vegetables',
    icon: '🍆',
    difficulty: 'Medium',
    description: 'Heat-loving plant producing glossy, versatile fruits.',
    optimalTemp: '22-28°C',
    humidity: '60-70%',
    wateringFreq: 'Every 2-3 days',
    soilPH: '6.0-6.8',
    sunlight: '6-8 hours direct sun',
    spacing: '45-60cm apart',
    timeToHarvest: '70-85 days',
    substrate: 'Rich, well-draining potting mix with compost',
    tips: [
      'Needs warm temperatures to thrive',
      'Pinch flowers until plant is well-established',
      'Support heavy fruit-laden branches',
      'Harvest before skin becomes dull'
    ],
    commonProblems: [
      'Flea beetles on young plants',
      'Colorado potato beetles',
      'Verticillium wilt in cool conditions'
    ],
    companionPlants: ['Tomatoes', 'Peppers', 'Basil', 'Marigolds'],
    harvestTips: 'Harvest when skin is glossy and fruit feels firm'
  },
  {
    id: 'onion',
    name: 'Onion',
    category: 'vegetables',
    icon: '🧅',
    difficulty: 'Easy',
    description: 'Essential cooking ingredient and natural pest deterrent.',
    optimalTemp: '13-24°C',
    humidity: '50-60%',
    wateringFreq: 'Every 3-4 days',
    soilPH: '6.0-7.0',
    sunlight: '6+ hours direct sun',
    spacing: '10-15cm apart',
    timeToHarvest: '90-120 days',
    substrate: 'Well-draining, loose soil with good organic content',
    tips: [
      'Plant sets or transplants for easier growing',
      'Stop watering when tops begin to fall over',
      'Cure in warm, dry place before storage',
      'Excellent companion plant for most vegetables'
    ],
    commonProblems: [
      'Onion maggots in bulbs',
      'Thrips causing silvery streaks on leaves',
      'Neck rot in storage from poor curing'
    ],
    companionPlants: ['Carrots', 'Tomatoes', 'Brassicas', 'Lettuce'],
    harvestTips: 'Harvest when tops fall over and cure for 2-3 weeks'
  },

  // Herbs
  {
    id: 'basil',
    name: 'Basil',
    category: 'herbs',
    icon: '🌿',
    difficulty: 'Easy',
    description: 'Aromatic herb perfect for cooking and companion planting.',
    optimalTemp: '20-25°C',
    humidity: '50-60%',
    wateringFreq: 'Every 1-2 days',
    soilPH: '6.0-7.0',
    sunlight: '6+ hours direct sun',
    spacing: '20-30cm apart',
    timeToHarvest: '60-90 days (continuous)',
    substrate: 'Well-draining potting mix with good organic content',
    tips: [
      'Pinch flower buds to keep leaves tender',
      'Harvest regularly to encourage new growth',
      'Water at soil level to prevent leaf diseases',
      'Bring indoors before first frost'
    ],
    commonProblems: [
      'Fusarium wilt (yellowing and wilting)',
      'Aphids on tender shoots',
      'Cold damage below 10°C'
    ],
    companionPlants: ['Tomatoes', 'Peppers', 'Lettuce', 'Carrots'],
    harvestTips: 'Best harvested in the morning after dew has dried'
  },
  {
    id: 'oregano',
    name: 'Oregano',
    category: 'herbs',
    icon: '🌿',
    difficulty: 'Easy',
    description: 'Hardy perennial herb with intense flavor, perfect for Mediterranean dishes.',
    optimalTemp: '18-22°C',
    humidity: '40-50%',
    wateringFreq: 'Every 3-4 days (drought tolerant)',
    soilPH: '6.0-8.0',
    sunlight: '6+ hours direct sun',
    spacing: '25-30cm apart',
    timeToHarvest: '80-90 days',
    substrate: 'Well-draining, slightly alkaline soil mix',
    tips: [
      'Allow soil to dry between waterings',
      'Trim back after flowering for best leaf production',
      'Divide clumps every 3-4 years',
      'Harvest before flowering for strongest flavor'
    ],
    commonProblems: [
      'Root rot from overwatering',
      'Spider mites in dry conditions',
      'Mint rust (orange spots on leaves)'
    ],
    companionPlants: ['Tomatoes', 'Peppers', 'Cabbage', 'Broccoli'],
    harvestTips: 'Cut stems in the morning when oils are most concentrated'
  },
  {
    id: 'parsley',
    name: 'Parsley',
    category: 'herbs',
    icon: '🌿',
    difficulty: 'Easy',
    description: 'Biennial herb packed with vitamins, essential for any herb garden.',
    optimalTemp: '16-20°C',
    humidity: '50-60%',
    wateringFreq: 'Every 2-3 days',
    soilPH: '6.0-7.0',
    sunlight: '4-6 hours (tolerates partial shade)',
    spacing: '15-20cm apart',
    timeToHarvest: '70-90 days',
    substrate: 'Rich, moist, well-draining potting mix',
    tips: [
      'Soak seeds 24 hours before planting for better germination',
      'Cut outer stems first for continuous harvest',
      'Provide consistent moisture for tender leaves',
      'Can survive light frosts'
    ],
    commonProblems: [
      'Slow germination (2-3 weeks)',
      'Crown rot in waterlogged soil',
      'Caterpillars eating leaves'
    ],
    companionPlants: ['Tomatoes', 'Carrots', 'Chives', 'Roses'],
    harvestTips: 'Harvest outer stems regularly to encourage new growth'
  },
  {
    id: 'cilantro',
    name: 'Cilantro',
    category: 'herbs',
    icon: '🌿',
    difficulty: 'Easy',
    description: 'Fast-growing herb with distinctive flavor, also produces coriander seeds.',
    optimalTemp: '15-20°C',
    humidity: '50-60%',
    wateringFreq: 'Every 1-2 days',
    soilPH: '6.0-7.0',
    sunlight: '4-6 hours (partial shade in hot climates)',
    spacing: '15-20cm apart',
    timeToHarvest: '40-50 days',
    substrate: 'Well-draining potting mix with good organic content',
    tips: [
      'Succession plant every 2-3 weeks for continuous harvest',
      'Bolts quickly in hot weather - plant in cooler seasons',
      'Harvest frequently to prevent flowering',
      'Allow some plants to go to seed for coriander'
    ],
    commonProblems: [
      'Bolting in hot weather',
      'Aphids on tender leaves',
      'Poor germination in hot soil'
    ],
    companionPlants: ['Spinach', 'Dill', 'Anise', 'Tomatoes'],
    harvestTips: 'Harvest outer leaves when plant is 15cm tall'
  },
  {
    id: 'thyme',
    name: 'Thyme',
    category: 'herbs',
    icon: '🌿',
    difficulty: 'Easy',
    description: 'Hardy perennial herb with small aromatic leaves perfect for Mediterranean cooking.',
    optimalTemp: '18-24°C',
    humidity: '40-50%',
    wateringFreq: 'Every 4-5 days (drought tolerant)',
    soilPH: '7.0-8.0',
    sunlight: '6+ hours direct sun',
    spacing: '20-25cm apart',
    timeToHarvest: '75-90 days',
    substrate: 'Well-draining, sandy soil mix',
    tips: [
      'Very drought tolerant once established',
      'Trim lightly after flowering to maintain shape',
      'Can be grown as ground cover',
      'Excellent in rock gardens and containers'
    ],
    commonProblems: [
      'Root rot in wet conditions',
      'Scale insects on stems',
      'Fungal issues in humid climates'
    ],
    companionPlants: ['Cabbage', 'Tomatoes', 'Eggplant', 'Strawberries'],
    harvestTips: 'Cut sprigs in the morning when oils are concentrated'
  },
  {
    id: 'rosemary',
    name: 'Rosemary',
    category: 'herbs',
    icon: '🌿',
    difficulty: 'Medium',
    description: 'Woody perennial herb with needle-like leaves and intense flavor.',
    optimalTemp: '20-25°C',
    humidity: '40-50%',
    wateringFreq: 'Every 5-7 days (very drought tolerant)',
    soilPH: '6.0-7.5',
    sunlight: '6+ hours direct sun',
    spacing: '60-90cm apart',
    timeToHarvest: '90-120 days',
    substrate: 'Very well-draining, sandy soil mix',
    tips: [
      'Extremely drought tolerant - avoid overwatering',
      'Can grow quite large - give plenty of space',
      'Prune regularly to maintain shape',
      'Bring container plants indoors in cold climates'
    ],
    commonProblems: [
      'Root rot from overwatering',
      'Powdery mildew in humid conditions',
      'Cold damage below -5°C'
    ],
    companionPlants: ['Sage', 'Thyme', 'Lavender', 'Beans'],
    harvestTips: 'Harvest sprigs year-round, best flavor before flowering'
  },
  {
    id: 'mint',
    name: 'Mint',
    category: 'herbs',
    icon: '🌿',
    difficulty: 'Easy',
    description: 'Vigorous spreading herb perfect for teas, cooking, and natural pest control.',
    optimalTemp: '18-24°C',
    humidity: '50-70%',
    wateringFreq: 'Every 1-2 days',
    soilPH: '6.0-7.0',
    sunlight: '4-6 hours (tolerates partial shade)',
    spacing: '30-45cm apart (or contained)',
    timeToHarvest: '60-80 days',
    substrate: 'Moist, rich potting mix',
    tips: [
      'Very invasive - best grown in containers',
      'Pinch flowers to keep leaves tender',
      'Divide clumps annually to maintain vigor',
      'Can be grown indoors year-round'
    ],
    commonProblems: [
      'Rust disease causing orange spots',
      'Aphids on young growth',
      'Spreads aggressively if not contained'
    ],
    companionPlants: ['Tomatoes', 'Cabbage', 'Peas', 'Carrots'],
    harvestTips: 'Harvest leaves regularly, best before flowering'
  },
  {
    id: 'dill',
    name: 'Dill',
    category: 'herbs',
    icon: '🌿',
    difficulty: 'Easy',
    description: 'Delicate herb with feathery leaves, excellent for pickling and fish dishes.',
    optimalTemp: '16-22°C',
    humidity: '50-60%',
    wateringFreq: 'Every 2-3 days',
    soilPH: '6.0-7.5',
    sunlight: '6+ hours direct sun',
    spacing: '15-20cm apart',
    timeToHarvest: '40-60 days',
    substrate: 'Well-draining potting mix',
    tips: [
      'Direct sow - doesn\'t transplant well',
      'Succession plant every 2-3 weeks',
      'Allow some plants to go to seed for dill seeds',
      'Attracts beneficial insects to garden'
    ],
    commonProblems: [
      'Aphids on tender growth',
      'Bolting in hot weather',
      'Carrot flies (related to carrots)'
    ],
    companionPlants: ['Cucumbers', 'Tomatoes', 'Lettuce', 'Onions'],
    harvestTips: 'Harvest leaves before flowering, seeds when brown'
  },
  {
    id: 'chives',
    name: 'Chives',
    category: 'herbs',
    icon: '🌿',
    difficulty: 'Easy',
    description: 'Mild onion-flavored herb that forms attractive clumps with edible flowers.',
    optimalTemp: '15-25°C',
    humidity: '50-60%',
    wateringFreq: 'Every 2-3 days',
    soilPH: '6.0-7.0',
    sunlight: '4-6 hours direct sun',
    spacing: '15-20cm apart',
    timeToHarvest: '60-90 days',
    substrate: 'Rich, well-draining potting mix',
    tips: [
      'Cut like grass with scissors',
      'Divide clumps every 3-4 years',
      'Flowers are edible and attract beneficial insects',
      'Can be grown indoors on windowsill'
    ],
    commonProblems: [
      'Thrips causing silvery streaks',
      'Onion fly larvae in bulbs',
      'Overcrowding reducing vigor'
    ],
    companionPlants: ['Tomatoes', 'Carrots', 'Roses', 'Grapes'],
    harvestTips: 'Cut outer leaves to 5cm above soil level'
  },

  // Fruits & Berries
  {
    id: 'strawberry',
    name: 'Strawberry',
    category: 'fruits',
    icon: '🍓',
    difficulty: 'Medium',
    description: 'Sweet, juicy berries perfect for containers and hanging baskets.',
    optimalTemp: '15-20°C',
    humidity: '60-70%',
    wateringFreq: 'Every 1-2 days',
    soilPH: '5.5-6.5',
    sunlight: '6+ hours direct sun',
    spacing: '30cm apart',
    timeToHarvest: '90-120 days',
    substrate: 'Well-draining, slightly acidic potting mix',
    tips: [
      'Remove runners to focus energy on fruit production',
      'Use drip irrigation to keep leaves dry',
      'Mulch around plants to retain moisture and prevent soil contact',
      'Replace plants every 3-4 years for best production'
    ],
    commonProblems: [
      'Gray mold (botrytis) in humid conditions',
      'Slugs and snails eating berries',
      'Bird damage to ripe fruit'
    ],
    companionPlants: ['Lettuce', 'Spinach', 'Thyme', 'Borage'],
    harvestTips: 'Harvest when fully red but still firm, in the morning'
  },
  {
    id: 'blueberry',
    name: 'Blueberry',
    category: 'fruits',
    icon: '🫐',
    difficulty: 'Hard',
    description: 'Antioxidant-rich berries requiring acidic soil and consistent care.',
    optimalTemp: '16-24°C',
    humidity: '50-60%',
    wateringFreq: 'Every 2-3 days (consistent moisture)',
    soilPH: '4.5-5.5 (acidic)',
    sunlight: '6+ hours direct sun',
    spacing: '1.5-2m apart',
    timeToHarvest: '2-3 years for establishment',
    substrate: 'Acidic potting mix with peat moss and pine bark',
    tips: [
      'Use acidic fertilizer specifically for blueberries',
      'Maintain consistent soil moisture but ensure good drainage',
      'Prune annually to remove dead wood and improve air circulation',
      'Plant multiple varieties for better pollination'
    ],
    commonProblems: [
      'Chlorosis (yellowing) from high soil pH',
      'Root rot from poor drainage',
      'Bird damage to ripe berries'
    ],
    companionPlants: ['Azaleas', 'Rhododendrons', 'Pine trees', 'Cranberries'],
    harvestTips: 'Harvest when berries are fully blue and come off easily'
  },
  {
    id: 'raspberry',
    name: 'Raspberry',
    category: 'fruits',
    icon: '🍇',
    difficulty: 'Medium',
    description: 'Delicious cane berries that produce fruit on second-year growth.',
    optimalTemp: '16-20°C',
    humidity: '60-70%',
    wateringFreq: 'Every 2-3 days',
    soilPH: '6.0-6.8',
    sunlight: '6+ hours direct sun',
    spacing: '60cm apart',
    timeToHarvest: '1-2 years for establishment',
    substrate: 'Rich, well-draining soil with organic matter',
    tips: [
      'Provide sturdy support system for canes',
      'Prune old canes after fruiting',
      'Mulch heavily to retain moisture and suppress weeds',
      'Choose between summer-bearing and everbearing varieties'
    ],
    commonProblems: [
      'Raspberry cane borers tunneling in stems',
      'Japanese beetles eating leaves',
      'Viral diseases causing stunted growth'
    ],
    companionPlants: ['Garlic', 'Chives', 'Turnips', 'Roses'],
    harvestTips: 'Harvest when berries are fully colored and easily pull off'
  },
  {
    id: 'blackberry',
    name: 'Blackberry',
    category: 'fruits',
    icon: '🫐',
    difficulty: 'Medium',
    description: 'Thorny canes producing sweet-tart berries rich in antioxidants.',
    optimalTemp: '18-24°C',
    humidity: '60-70%',
    wateringFreq: 'Every 2-3 days',
    soilPH: '5.5-7.0',
    sunlight: '6+ hours direct sun',
    spacing: '1-1.5m apart',
    timeToHarvest: '2 years for establishment',
    substrate: 'Well-draining soil rich in organic matter',
    tips: [
      'Install strong trellis system for support',
      'Wear gloves when harvesting due to thorns',
      'Prune floricanes after harvest',
      'Consider thornless varieties for easier management'
    ],
    commonProblems: [
      'Cane blight causing wilting',
      'Spider mites in hot, dry conditions',
      'Birds eating ripe berries'
    ],
    companionPlants: ['Grapes', 'Mint', 'Tansy', 'Hyssop'],
    harvestTips: 'Harvest when berries turn from red to deep black'
  },
  {
    id: 'cherry-tomato',
    name: 'Cherry Tomato',
    category: 'fruits',
    icon: '🍅',
    difficulty: 'Easy',
    description: 'Small, sweet tomatoes perfect for snacking and salads.',
    optimalTemp: '18-26°C',
    humidity: '60-70%',
    wateringFreq: 'Every 1-2 days',
    soilPH: '6.0-6.8',
    sunlight: '6-8 hours direct sun',
    spacing: '30-45cm apart',
    timeToHarvest: '60-75 days',
    substrate: 'Rich, well-draining potting mix with compost',
    tips: [
      'Very productive - one plant produces hundreds of fruits',
      'Support with cages or stakes',
      'Harvest regularly to encourage continued production',
      'Perfect for container growing'
    ],
    commonProblems: [
      'Cracking from irregular watering',
      'Hornworms eating foliage',
      'Early blight on leaves'
    ],
    companionPlants: ['Basil', 'Marigolds', 'Peppers', 'Parsley'],
    harvestTips: 'Harvest when fully colored but still firm'
  },
  {
    id: 'grape',
    name: 'Grape',
    category: 'fruits',
    icon: '🍇',
    difficulty: 'Hard',
    description: 'Long-lived vines producing clusters of sweet or tart fruit.',
    optimalTemp: '20-25°C',
    humidity: '50-60%',
    wateringFreq: 'Every 3-4 days (drought tolerant when established)',
    soilPH: '6.0-7.0',
    sunlight: '6+ hours direct sun',
    spacing: '2-3m apart',
    timeToHarvest: '3-4 years for establishment',
    substrate: 'Well-draining soil with good air circulation',
    tips: [
      'Requires strong support structure or arbor',
      'Annual pruning essential for fruit production',
      'Choose varieties suitable for your climate',
      'Needs good air circulation to prevent disease'
    ],
    commonProblems: [
      'Powdery mildew on leaves and fruit',
      'Black rot causing shriveled berries',
      'Japanese beetles eating leaves'
    ],
    companionPlants: ['Hyssop', 'Oregano', 'Chives', 'Geraniums'],
    harvestTips: 'Harvest when berries are sweet and easily come off cluster'
  },

  // Leafy Greens
  {
    id: 'spinach',
    name: 'Spinach',
    category: 'leafy',
    icon: '🥬',
    difficulty: 'Easy',
    description: 'Nutrient-dense leafy green that thrives in cool weather.',
    optimalTemp: '10-18°C',
    humidity: '50-60%',
    wateringFreq: 'Every 1-2 days',
    soilPH: '6.0-7.0',
    sunlight: '4-6 hours (tolerates partial shade)',
    spacing: '10-15cm apart',
    timeToHarvest: '40-50 days',
    substrate: 'Rich, well-draining potting mix with high nitrogen',
    tips: [
      'Plant in cool weather - bolts in heat',
      'Succession plant every 2 weeks',
      'Harvest outer leaves for continuous production',
      'Provide shade in warmer climates'
    ],
    commonProblems: [
      'Bolting in hot weather',
      'Leaf miners creating tunnels in leaves',
      'Downy mildew in humid conditions'
    ],
    companionPlants: ['Strawberries', 'Radishes', 'Lettuce', 'Peas'],
    harvestTips: 'Harvest young leaves for best flavor and tenderness'
  },
  {
    id: 'kale',
    name: 'Kale',
    category: 'leafy',
    icon: '���',
    difficulty: 'Easy',
    description: 'Cold-hardy superfood green that improves with cool weather.',
    optimalTemp: '12-18°C',
    humidity: '50-60%',
    wateringFreq: 'Every 2-3 days',
    soilPH: '6.0-7.5',
    sunlight: '4-6 hours direct sun',
    spacing: '30-45cm apart',
    timeToHarvest: '55-65 days',
    substrate: 'Rich, well-draining potting mix',
    tips: [
      'Tastes sweeter after light frost',
      'Remove lower yellowing leaves regularly',
      'Can harvest individual leaves or whole plant',
      'Very cold tolerant - can survive snow'
    ],
    commonProblems: [
      'Cabbage worms eating leaves',
      'Aphids clustering on leaves',
      'Flea beetles making small holes'
    ],
    companionPlants: ['Onions', 'Carrots', 'Beets', 'Potatoes'],
    harvestTips: 'Harvest outer leaves first, leaving center to continue growing'
  },
  {
    id: 'arugula',
    name: 'Arugula',
    category: 'leafy',
    icon: '🥬',
    difficulty: 'Easy',
    description: 'Peppery-flavored green that adds spice to salads and sandwiches.',
    optimalTemp: '15-20°C',
    humidity: '50-60%',
    wateringFreq: 'Every 1-2 days',
    soilPH: '6.0-7.0',
    sunlight: '4-6 hours (partial shade in hot weather)',
    spacing: '10-15cm apart',
    timeToHarvest: '30-40 days',
    substrate: 'Rich, well-draining potting mix',
    tips: [
      'Succession plant every 2 weeks for continuous harvest',
      'Becomes more peppery in hot weather',
      'Can be grown year-round in mild climates',
      'Self-seeds readily if allowed to flower'
    ],
    commonProblems: [
      'Flea beetles making small holes',
      'Bolting in hot weather',
      'Aphids on tender leaves'
    ],
    companionPlants: ['Lettuce', 'Spinach', 'Chives', 'Onions'],
    harvestTips: 'Harvest outer leaves when 10-15cm long'
  },
  {
    id: 'chard',
    name: 'Swiss Chard',
    category: 'leafy',
    icon: '🥬',
    difficulty: 'Easy',
    description: 'Colorful leafy green with edible stems, heat tolerant alternative to spinach.',
    optimalTemp: '16-24°C',
    humidity: '50-60%',
    wateringFreq: 'Every 2-3 days',
    soilPH: '6.0-7.0',
    sunlight: '4-6 hours direct sun',
    spacing: '15-30cm apart',
    timeToHarvest: '50-60 days',
    substrate: 'Rich, moisture-retentive potting mix',
    tips: [
      'More heat tolerant than spinach',
      'Both leaves and stems are edible',
      'Cut outer leaves to encourage continued growth',
      'Comes in beautiful colors - red, yellow, white stems'
    ],
    commonProblems: [
      'Leaf miners creating tunnels',
      'Aphids clustering on leaves',
      'Cercospora leaf spot in humid conditions'
    ],
    companionPlants: ['Onions', 'Beans', 'Brassicas', 'Tomatoes'],
    harvestTips: 'Harvest outer leaves when 15-20cm long, cook stems separately'
  },
  {
    id: 'collards',
    name: 'Collard Greens',
    category: 'leafy',
    icon: '🥬',
    difficulty: 'Easy',
    description: 'Hardy brassica green that becomes sweeter after frost.',
    optimalTemp: '15-20°C',
    humidity: '50-60%',
    wateringFreq: 'Every 2-3 days',
    soilPH: '6.0-6.8',
    sunlight: '4-6 hours direct sun',
    spacing: '30-45cm apart',
    timeToHarvest: '60-75 days',
    substrate: 'Rich, well-draining soil with organic matter',
    tips: [
      'Very cold hardy - improves after light frost',
      'Can grow quite large if given space',
      'Harvest lower leaves first',
      'Excellent source of vitamins A, C, and K'
    ],
    commonProblems: [
      'Cabbage worms eating leaves',
      'Flea beetles on young plants',
      'Clubroot in acidic soils'
    ],
    companionPlants: ['Onions', 'Garlic', 'Herbs', 'Potatoes'],
    harvestTips: 'Harvest outer leaves when large enough, sweeter after frost'
  },
  {
    id: 'bok-choy',
    name: 'Bok Choy',
    category: 'leafy',
    icon: '🥬',
    difficulty: 'Easy',
    description: 'Asian green with crisp white stems and tender dark leaves.',
    optimalTemp: '15-20°C',
    humidity: '50-60%',
    wateringFreq: 'Every 1-2 days',
    soilPH: '6.0-7.0',
    sunlight: '4-6 hours direct sun',
    spacing: '15-20cm apart',
    timeToHarvest: '45-60 days',
    substrate: 'Rich, moisture-retentive potting mix',
    tips: [
      'Cool weather crop - bolts in hot temperatures',
      'Can be harvested as baby greens or full-size',
      'Both leaves and stems are edible',
      'Quick growing for continuous succession planting'
    ],
    commonProblems: [
      'Bolting in hot weather',
      'Cabbage root maggots',
      'Flea beetles on young leaves'
    ],
    companionPlants: ['Onions', 'Garlic', 'Lettuce', 'Herbs'],
    harvestTips: 'Harvest whole plant when compact and before bolting'
  },
  {
    id: 'watercress',
    name: 'Watercress',
    category: 'leafy',
    icon: '🥬',
    difficulty: 'Medium',
    description: 'Peppery aquatic green rich in nutrients, loves moist conditions.',
    optimalTemp: '10-18°C',
    humidity: '70-80%',
    wateringFreq: 'Keep constantly moist/wet',
    soilPH: '6.5-7.5',
    sunlight: '4-6 hours (partial shade preferred)',
    spacing: '10-15cm apart',
    timeToHarvest: '40-50 days',
    substrate: 'Very moist, rich potting mix or hydroponic setup',
    tips: [
      'Needs constantly moist to wet conditions',
      'Can be grown in water containers',
      'Cool weather crop - struggles in heat',
      'Pinch flowers to maintain leaf quality'
    ],
    commonProblems: [
      'Drying out quickly in containers',
      'Aphids in warm conditions',
      'Bolting in hot weather'
    ],
    companionPlants: ['Mint', 'Parsley', 'Celery', 'Cucumber'],
    harvestTips: 'Harvest tender shoots before flowering for best flavor'
  },

  // Flowers
  {
    id: 'marigold',
    name: 'Marigold',
    category: 'flowers',
    icon: '🌼',
    difficulty: 'Easy',
    description: 'Bright companion flowers that naturally repel garden pests.',
    optimalTemp: '18-24°C',
    humidity: '40-50%',
    wateringFreq: 'Every 2-3 days',
    soilPH: '6.0-7.5',
    sunlight: '6+ hours direct sun',
    spacing: '15-30cm apart',
    timeToHarvest: '50-60 days to bloom',
    substrate: 'Well-draining potting mix (not too rich)',
    tips: [
      'Deadhead spent blooms for continuous flowering',
      'Tolerates poor soil conditions',
      'Plant near vegetables to repel pests',
      'Drought tolerant once established'
    ],
    commonProblems: [
      'Root rot in waterlogged soil',
      'Spider mites in hot, dry conditions',
      'Powdery mildew in humid conditions'
    ],
    companionPlants: ['Tomatoes', 'Peppers', 'Beans', 'Squash'],
    harvestTips: 'Harvest flowers regularly to encourage more blooms'
  },
  {
    id: 'nasturtium',
    name: 'Nasturtium',
    category: 'flowers',
    icon: '🌺',
    difficulty: 'Easy',
    description: 'Edible flowers with peppery flavor, excellent companion plants.',
    optimalTemp: '16-22°C',
    humidity: '45-55%',
    wateringFreq: 'Every 2-3 days (drought tolerant)',
    soilPH: '6.1-7.8',
    sunlight: '6+ hours direct sun',
    spacing: '20-30cm apart',
    timeToHarvest: '50-65 days',
    substrate: 'Poor to average soil (too rich reduces flowering)',
    tips: [
      'Both flowers and leaves are edible',
      'Attracts beneficial insects and repels pests',
      'Climbing varieties need support',
      'Self-seeds readily for next season'
    ],
    commonProblems: [
      'Aphids on tender shoots',
      'Caterpillars eating leaves',
      'Reduced flowering in overly rich soil'
    ],
    companionPlants: ['Cucumbers', 'Radishes', 'Beans', 'Tomatoes'],
    harvestTips: 'Harvest flowers and young leaves regularly for best flavor'
  }
];

let currentFilter = 'all';
let currentSearchTerm = '';

// Mobile menu functionality
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const sidebar = document.getElementById("sidebar");
  const mobileOverlay = document.getElementById("mobile-overlay");

  function toggleMenu() {
    const isOpen = !sidebar.classList.contains("-translate-x-full");

    if (isOpen) {
      sidebar.classList.add("-translate-x-full");
      mobileOverlay.classList.add("hidden");
      mobileMenuBtn.innerHTML = `
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      `;
    } else {
      sidebar.classList.remove("-translate-x-full");
      mobileOverlay.classList.remove("hidden");
      mobileMenuBtn.innerHTML = `
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      `;
    }
  }

  mobileMenuBtn.addEventListener("click", toggleMenu);
  mobileOverlay.addEventListener("click", toggleMenu);
}

// Get difficulty color
function getDifficultyColor(difficulty) {
  switch (difficulty.toLowerCase()) {
    case 'easy':
      return '#688654';
    case 'medium':
      return '#D57A66';
    case 'hard':
      return '#D169D4';
    default:
      return '#A789A2';
  }
}

// Highlight search terms in text
function highlightSearchTerm(text, searchTerm) {
  if (!searchTerm) return text;
  const regex = new RegExp(`(${searchTerm})`, 'gi');
  return text.replace(regex, '<span class="search-highlight">$1</span>');
}

// Render crops grid
function renderCrops() {
  const container = document.getElementById('crops-grid');
  const noResults = document.getElementById('no-results');
  
  // Filter crops based on current filter and search term
  let filteredCrops = cropsDatabase;
  
  if (currentFilter !== 'all') {
    filteredCrops = filteredCrops.filter(crop => crop.category === currentFilter);
  }
  
  if (currentSearchTerm) {
    filteredCrops = filteredCrops.filter(crop =>
      crop.name.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
      crop.description.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
      crop.category.toLowerCase().includes(currentSearchTerm.toLowerCase())
    );
  }
  
  // Update search results count
  const searchCount = document.getElementById('search-results-count');
  if (currentSearchTerm) {
    searchCount.textContent = `${filteredCrops.length} crop${filteredCrops.length !== 1 ? 's' : ''} found`;
  } else {
    searchCount.textContent = '';
  }
  
  // Show/hide no results message
  if (filteredCrops.length === 0) {
    container.classList.add('hidden');
    noResults.classList.remove('hidden');
    return;
  } else {
    container.classList.remove('hidden');
    noResults.classList.add('hidden');
  }
  
  // Render crops
  container.innerHTML = filteredCrops.map(crop => `
    <div class="crop-card rounded-lg p-6 shadow-sm cursor-pointer" onclick="openCropModal('${crop.id}')">
      <div class="flex items-start justify-between mb-4">
        <div class="flex items-center space-x-3">
          <div class="text-3xl">${crop.icon}</div>
          <div>
            <h3 class="font-semibold text-lg" style="color: #356C48;">
              ${highlightSearchTerm(crop.name, currentSearchTerm)}
            </h3>
            <p class="text-sm text-gray-600 capitalize">${crop.category}</p>
          </div>
        </div>
        <span 
          class="difficulty-badge" 
          style="background-color: ${getDifficultyColor(crop.difficulty)}; color: white;"
        >
          ${crop.difficulty}
        </span>
      </div>
      
      <p class="text-sm text-gray-700 mb-4 line-clamp-2">
        ${highlightSearchTerm(crop.description, currentSearchTerm)}
      </p>
      
      <div class="grid grid-cols-2 gap-3 text-xs">
        <div class="flex items-center space-x-2">
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
          </svg>
          <span class="text-gray-600">${crop.optimalTemp}</span>
        </div>
        <div class="flex items-center space-x-2">
          <svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2c-4.97 0-9 4.03-9 9 0 4.17 2.84 7.67 6.69 8.69L12 22l2.31-2.31C18.16 18.67 21 15.17 21 11c0-4.97-4.03-9-9-9z"/>
          </svg>
          <span class="text-gray-600">${crop.wateringFreq}</span>
        </div>
        <div class="flex items-center space-x-2">
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span class="text-gray-600">${crop.timeToHarvest}</span>
        </div>
        <div class="flex items-center space-x-2">
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364-.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
          </svg>
          <span class="text-gray-600">pH ${crop.soilPH}</span>
        </div>
      </div>
      
      <div class="mt-4 pt-4 border-t border-gray-100">
        <span class="text-xs text-gray-500">Click for detailed growing guide</span>
      </div>
    </div>
  `).join('');
}

// Filter by category
function filterByCategory(category) {
  currentFilter = category;
  
  // Update active category button
  document.querySelectorAll('.category-filter').forEach(btn => {
    if (btn.dataset.category === category) {
      btn.classList.add('active');
      btn.style.backgroundColor = '#356C48';
      btn.style.color = '#F5F3EF';
    } else {
      btn.classList.remove('active');
      btn.style.backgroundColor = '#F5F3EF';
      btn.style.color = '#356C48';
    }
  });
  
  renderCrops();
}

// Search crops
function searchCrops(searchTerm) {
  currentSearchTerm = searchTerm.trim();
  renderCrops();
}

// Open crop detail modal
function openCropModal(cropId) {
  const crop = cropsDatabase.find(c => c.id === cropId);
  if (!crop) return;
  
  const modal = document.getElementById('crop-detail-modal');
  const modalContent = document.getElementById('modal-content');
  
  // Update modal header
  document.getElementById('modal-crop-icon').textContent = crop.icon;
  document.getElementById('modal-crop-name').textContent = crop.name;
  document.getElementById('modal-crop-category').textContent = `${crop.category.charAt(0).toUpperCase() + crop.category.slice(1)} • ${crop.difficulty} Difficulty`;
  
  // Update modal content
  modalContent.innerHTML = `
    <div class="space-y-6">
      <!-- Overview -->
      <div>
        <h3 class="text-lg font-semibold mb-3" style="color: #356C48;">Overview</h3>
        <p class="text-gray-700">${crop.description}</p>
      </div>
      
      <!-- Growing Conditions -->
      <div>
        <h3 class="text-lg font-semibold mb-3" style="color: #356C48;">Optimal Growing Conditions</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-gray-50 rounded-lg p-4">
            <div class="flex items-center space-x-2 mb-2">
              <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
              <span class="font-medium">Temperature</span>
            </div>
            <p class="text-gray-700">${crop.optimalTemp}</p>
          </div>
          
          <div class="bg-gray-50 rounded-lg p-4">
            <div class="flex items-center space-x-2 mb-2">
              <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
              </svg>
              <span class="font-medium">Humidity</span>
            </div>
            <p class="text-gray-700">${crop.humidity}</p>
          </div>
          
          <div class="bg-gray-50 rounded-lg p-4">
            <div class="flex items-center space-x-2 mb-2">
              <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2c-4.97 0-9 4.03-9 9 0 4.17 2.84 7.67 6.69 8.69L12 22l2.31-2.31C18.16 18.67 21 15.17 21 11c0-4.97-4.03-9-9-9z"/>
              </svg>
              <span class="font-medium">Watering</span>
            </div>
            <p class="text-gray-700">${crop.wateringFreq}</p>
          </div>
          
          <div class="bg-gray-50 rounded-lg p-4">
            <div class="flex items-center space-x-2 mb-2">
              <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
              <span class="font-medium">Sunlight</span>
            </div>
            <p class="text-gray-700">${crop.sunlight}</p>
          </div>
          
          <div class="bg-gray-50 rounded-lg p-4">
            <div class="flex items-center space-x-2 mb-2">
              <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364-.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
              <span class="font-medium">Soil pH</span>
            </div>
            <p class="text-gray-700">${crop.soilPH}</p>
          </div>
          
          <div class="bg-gray-50 rounded-lg p-4">
            <div class="flex items-center space-x-2 mb-2">
              <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span class="font-medium">Harvest Time</span>
            </div>
            <p class="text-gray-700">${crop.timeToHarvest}</p>
          </div>
        </div>
      </div>
      
      <!-- Planting Details -->
      <div>
        <h3 class="text-lg font-semibold mb-3" style="color: #356C48;">Planting Details</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 class="font-medium text-gray-900 mb-2">Plant Spacing</h4>
            <p class="text-gray-700">${crop.spacing}</p>
          </div>
          <div>
            <h4 class="font-medium text-gray-900 mb-2">Growing Substrate</h4>
            <p class="text-gray-700">${crop.substrate}</p>
          </div>
        </div>
      </div>
      
      <!-- Growing Tips -->
      <div>
        <h3 class="text-lg font-semibold mb-3" style="color: #356C48;">Growing Tips</h3>
        <ul class="space-y-2">
          ${crop.tips.map(tip => `
            <li class="flex items-start space-x-2">
              <svg class="w-4 h-4 mt-0.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-gray-700">${tip}</span>
            </li>
          `).join('')}
        </ul>
      </div>
      
      <!-- Common Problems -->
      <div>
        <h3 class="text-lg font-semibold mb-3" style="color: #356C48;">Common Problems</h3>
        <ul class="space-y-2">
          ${crop.commonProblems.map(problem => `
            <li class="flex items-start space-x-2">
              <svg class="w-4 h-4 mt-0.5 text-yellow-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-gray-700">${problem}</span>
            </li>
          `).join('')}
        </ul>
      </div>
      
      <!-- Companion Plants -->
      <div>
        <h3 class="text-lg font-semibold mb-3" style="color: #356C48;">Companion Plants</h3>
        <div class="flex flex-wrap gap-2">
          ${crop.companionPlants.map(plant => `
            <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">${plant}</span>
          `).join('')}
        </div>
      </div>
      
      <!-- Harvest Tips -->
      <div>
        <h3 class="text-lg font-semibold mb-3" style="color: #356C48;">Harvest Tips</h3>
        <div class="bg-blue-50 rounded-lg p-4">
          <div class="flex items-start space-x-2">
            <svg class="w-5 h-5 mt-0.5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <p class="text-blue-800">${crop.harvestTips}</p>
          </div>
        </div>
      </div>
    </div>
  `;
  
  modal.classList.remove('hidden');
}

// Close crop modal
function closeCropModal() {
  const modal = document.getElementById('crop-detail-modal');
  modal.classList.add('hidden');
}

// Make functions globally available
window.filterByCategory = filterByCategory;
window.searchCrops = searchCrops;
window.openCropModal = openCropModal;
window.closeCropModal = closeCropModal;

// Initialize the growing guide page
document.addEventListener("DOMContentLoaded", function () {
  initMobileMenu();
  renderCrops();
  
  // Close modal when clicking outside
  const modal = document.getElementById('crop-detail-modal');
  modal.addEventListener('click', function(event) {
    if (event.target === modal) {
      closeCropModal();
    }
  });
  
  // Close modal with Escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeCropModal();
    }
  });
});
