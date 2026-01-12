// Solo Leveling: Real Life Level-Up System
// COMPLETE VERSION WITH ALL FEATURES
// =========================
// GAME DATA STRUCTURE - ENHANCED
// =========================
const gameData = {
    player: {
        name: "SUNG JIN-WOO",
        level: 1,
        xp: 0,
        statPoints: 0,
        stats: {
            strength: 5,
            intelligence: 5,
            agility: 5
        },
        totalStats: 15,
        rank: "E-RANK HUNTER",
        streak: 0,
        highestStreak: 0,
        lastActiveDate: null,
        daysActive: 1,
        totalQuestsCompleted: 0,
        totalXPEarned: 0,
        // NEW: Inventory and currency
        inventory: [],
        equippedItems: [],
        gold: 1000,
        // NEW: Skill tree
        learnedSkills: [],
        // NEW: Crafting
        resources: {
            wood: 10,
            iron: 5,
            crystal: 2,
            leather: 8
        },
        // NEW: Pets
        pets: [],
        activePet: null,
        // NEW: Challenges
        completedChallenges: [],
        // NEW: Daily rewards
        dailyRewards: {
            streak: 0,
            lastClaim: null,
            claimedDays: []
        },
        // NEW: Achievements
        achievements: []
    },
    quests: [],
    systemMessages: [
        { tag: "[SYSTEM]", text: "Welcome to the Solo Leveling System. Begin your journey by creating quests!", time: "Just now" }
    ],
    activityLog: [
        { icon: "fa-star", text: "System initialized", time: "Just now" }
    ],
    unlockedFeatures: ["Daily Quests"],
    settings: {
        lastUpdate: new Date().toLocaleString()
    },
    // NEW: Shop items data
    shopItemsData: [
        { id: 1, name: "Health Potion", description: "Restores 50 HP", price: 50, type: "consumable", effect: "heal" },
        { id: 2, name: "Strength Elixir", description: "+5 Strength for 1 hour", price: 150, type: "consumable", effect: "buff_strength" },
        { id: 3, name: "Iron Sword", description: "Basic weapon", price: 300, type: "weapon", stats: { strength: 3 } },
        { id: 4, name: "Leather Armor", description: "Basic armor", price: 400, type: "armor", stats: { agility: 2 } },
        { id: 5, name: "Wisdom Tome", description: "+5 Intelligence", price: 500, type: "artifact", stats: { intelligence: 5 } },
        { id: 6, name: "Speed Boots", description: "+3 Agility", price: 350, type: "boots", stats: { agility: 3 } },
        { id: 7, name: "XP Boost", description: "10% XP boost for 1 hour", price: 200, type: "consumable", effect: "xp_boost" }
    ],
    // NEW: Skill tree data
    skillTreeData: [
        { id: 1, name: "Double XP", description: "Gain double XP for 1 hour", cost: 1, levelReq: 5, type: "buff" },
        { id: 2, name: "Critical Strike", description: "Chance to gain extra XP", cost: 2, levelReq: 10, type: "passive" },
        { id: 3, name: "Quick Learner", description: "XP requirements reduced by 10%", cost: 3, levelReq: 15, type: "passive" },
        { id: 4, name: "Shadow Step", description: "Complete quests 20% faster", cost: 5, levelReq: 20, type: "ability" },
        { id: 5, name: "Iron Will", description: "+5 Strength permanently", cost: 3, levelReq: 8, type: "permanent" }
    ],
    // NEW: Crafting recipes
    craftingRecipes: [
        { id: 1, name: "Health Kit", description: "Crafted health potion", ingredients: { wood: 2, leather: 1 }, result: "Health Potion", xpReward: 25 },
        { id: 2, name: "Iron Dagger", description: "Simple weapon", ingredients: { iron: 3, wood: 1 }, result: "Iron Dagger", xpReward: 50 },
        { id: 3, name: "Crystal Amulet", description: "Magical accessory", ingredients: { crystal: 1, iron: 2 }, result: "Crystal Amulet", xpReward: 100 },
        { id: 4, name: "Leather Boots", description: "Agility boots", ingredients: { leather: 3, iron: 1 }, result: "Leather Boots", xpReward: 40 }
    ],
    // NEW: Pets data
    petsData: [
        { id: 1, name: "Fire Drake", description: "Increases XP gain by 5%", rarity: "rare", levelReq: 10, cost: 1000 },
        { id: 2, name: "Ice Wolf", description: "Boosts strength stats", rarity: "common", levelReq: 5, cost: 500 },
        { id: 3, name: "Shadow Cat", description: "Increases agility", rarity: "uncommon", levelReq: 8, cost: 750 },
        { id: 4, name: "Golden Eagle", description: "Better loot from quests", rarity: "epic", levelReq: 15, cost: 1500 }
    ],
    // NEW: Challenges data
    challengesData: [
        { id: 1, name: "Complete 5 Quests", description: "Complete 5 quests in one day", reward: 250, type: "daily", progress: 0, target: 5 },
        { id: 2, name: "Reach Level 10", description: "Level up to level 10", reward: 500, type: "achievement", progress: 0, target: 10 },
        { id: 3, name: "Craft 3 Items", description: "Craft 3 different items", reward: 300, type: "weekly", progress: 0, target: 3 },
        { id: 4, name: "Earn 1000 XP", description: "Accumulate 1000 total XP", reward: 400, type: "achievement", progress: 0, target: 1000 },
        { id: 5, name: "7 Day Streak", description: "Maintain a 7-day login streak", reward: 1000, type: "achievement", progress: 0, target: 7 }
    ],
    // NEW: Achievements data
    achievementsData: [
        { id: 1, name: "First Steps", description: "Complete your first quest", reward: 100, achieved: false, icon: "fa-footsteps" },
        { id: 2, name: "Level 5", description: "Reach level 5", reward: 200, achieved: false, icon: "fa-star" },
        { id: 3, name: "Quest Master", description: "Complete 10 quests", reward: 300, achieved: false, icon: "fa-scroll" },
        { id: 4, name: "Strength Trainer", description: "Reach 20 Strength", reward: 250, achieved: false, icon: "fa-fist-raised" },
        { id: 5, name: "Intellect Boost", description: "Reach 20 Intelligence", reward: 250, achieved: false, icon: "fa-brain" },
        { id: 6, name: "Agility Expert", description: "Reach 20 Agility", reward: 250, achieved: false, icon: "fa-running" },
        { id: 7, name: "Rich Hunter", description: "Accumulate 5000 gold", reward: 500, achieved: false, icon: "fa-coins" },
        { id: 8, name: "Crafting Novice", description: "Craft your first item", reward: 150, achieved: false, icon: "fa-hammer" },
        { id: 9, name: "Pet Lover", description: "Acquire your first pet", reward: 300, achieved: false, icon: "fa-paw" },
        { id: 10, name: "Skill Master", description: "Learn 3 skills", reward: 400, achieved: false, icon: "fa-graduation-cap" }
    ],
    // NEW: Random quests database
    randomQuestsDatabase: {
        strength: [
            { template: "Do {count} pushups", baseXP: 25, difficulty: "easy", time: "5m" },
            { template: "Do {count} situps", baseXP: 30, difficulty: "easy", time: "5m" },
            { template: "Hold plank for {count} seconds", baseXP: 40, difficulty: "medium", time: "3m" },
            { template: "Run {count} km", baseXP: 100, difficulty: "hard", time: "30m" },
            { template: "Lift weights for {count} minutes", baseXP: 75, difficulty: "medium", time: "20m" },
            { template: "Complete {count} burpees", baseXP: 60, difficulty: "hard", time: "10m" },
            { template: "Do {count} pull-ups", baseXP: 120, difficulty: "hard", time: "15m" },
            { template: "Sprint {count}x100m", baseXP: 90, difficulty: "hard", time: "25m" }
        ],
        intelligence: [
            { template: "Read {count} pages of a book", baseXP: 35, difficulty: "easy", time: "15m" },
            { template: "Learn {count} new words", baseXP: 40, difficulty: "medium", time: "10m" },
            { template: "Solve {count} math problems", baseXP: 50, difficulty: "medium", time: "20m" },
            { template: "Study for {count} minutes", baseXP: 80, difficulty: "hard", time: "30m" },
            { template: "Write {count} paragraphs", baseXP: 70, difficulty: "medium", time: "25m" },
            { template: "Watch {count} educational videos", baseXP: 45, difficulty: "easy", time: "20m" },
            { template: "Practice coding for {count} minutes", baseXP: 100, difficulty: "hard", time: "45m" },
            { template: "Learn {count} new concepts", baseXP: 120, difficulty: "expert", time: "60m" }
        ],
        agility: [
            { template: "Stretch for {count} minutes", baseXP: 20, difficulty: "easy", time: "5m" },
            { template: "Practice yoga for {count} minutes", baseXP: 45, difficulty: "medium", time: "15m" },
            { template: "Do {count} minutes of jump rope", baseXP: 55, difficulty: "medium", time: "10m" },
            { template: "Dance for {count} minutes", baseXP: 40, difficulty: "easy", time: "15m" },
            { template: "Practice martial arts for {count} minutes", baseXP: 90, difficulty: "hard", time: "30m" },
            { template: "Complete {count} agility ladder drills", baseXP: 65, difficulty: "medium", time: "20m" },
            { template: "Do {count} minutes of shadow boxing", baseXP: 75, difficulty: "hard", time: "25m" },
            { template: "Practice parkour for {count} minutes", baseXP: 150, difficulty: "expert", time: "45m" }
        ],
        mixed: [
            { template: "Meditate for {count} minutes", baseXP: 30, difficulty: "easy", category: "intelligence" },
            { template: "Drink {count} glasses of water", baseXP: 15, difficulty: "easy", category: "strength" },
            { template: "Organize your room", baseXP: 50, difficulty: "medium", category: "agility" },
            { template: "Cook a healthy meal", baseXP: 60, difficulty: "medium", category: "intelligence" },
            { template: "Walk {count} steps", baseXP: 40, difficulty: "easy", category: "agility" },
            { template: "Plan your week", baseXP: 55, difficulty: "medium", category: "intelligence" },
            { template: "Clean for {count} minutes", baseXP: 35, difficulty: "easy", category: "agility" },
            { template: "Practice a musical instrument for {count} minutes", baseXP: 85, difficulty: "hard", category: "intelligence" }
        ]
    },
    // NEW: Daily Missions data
    dailyMissionsData: [
        { 
            id: 1, 
            name: "Push-ups", 
            description: "Complete 50 push-ups daily", 
            current: 0, 
            target: 50, 
            unit: "", 
            xpReward: 100, 
            penalty: 50,
            completed: false,
            claimed: false,
            lastUpdated: null,
            type: "strength"
        },
        { 
            id: 2, 
            name: "Running", 
            description: "Run 5km daily", 
            current: 0, 
            target: 5, 
            unit: "km", 
            xpReward: 150, 
            penalty: 75,
            completed: false,
            claimed: false,
            lastUpdated: null,
            type: "agility"
        }
    ],
    dailyMissions: {
        lastReset: new Date().toDateString(),
        completedToday: false,
        penaltyApplied: false
    },
    // NEW: Auto-quest settings
    autoQuestSettings: {
        enabled: true,
        interval: 3600000, // 1 hour in milliseconds
        maxAutoQuests: 5,
        lastGenerated: null,
        difficultyScaling: true,
        timerInterval: null,
        nextQuestTime: null
    }
};

// =========================
// DOM ELEMENTS
// =========================
// Player Stats Elements
const playerLevelEl = document.getElementById('playerLevel');
const currentXPEl = document.getElementById('currentXP');
const requiredXPEl = document.getElementById('requiredXP');
const xpNeededEl = document.getElementById('xpNeeded');
const xpBarEl = document.getElementById('xpBar');
const statPointsEl = document.getElementById('statPoints');
const strengthValueEl = document.getElementById('strengthValue');
const intelligenceValueEl = document.getElementById('intelligenceValue');
const agilityValueEl = document.getElementById('agilityValue');
const totalStatsEl = document.getElementById('totalStats');
const playerRankEl = document.getElementById('playerRank');
const streakCountEl = document.getElementById('streakCount');
const totalQuestsEl = document.getElementById('totalQuests');
const totalXPEarnedEl = document.getElementById('totalXP');
const daysActiveEl = document.getElementById('daysActive');
const highestStreakEl = document.getElementById('highestStreak');
const goldAmountEl = document.getElementById('goldAmount');

// Quest Elements
const questsListEl = document.getElementById('questsList');
const systemMessagesEl = document.getElementById('systemMessages');
const activityListEl = document.getElementById('activityList');
const unlocksListEl = document.getElementById('unlocksList');
const lastUpdateEl = document.getElementById('lastUpdate');

// Milestone Elements
const milestone5El = document.getElementById('milestone5');
const milestone10El = document.getElementById('milestone10');
const milestone15El = document.getElementById('milestone15');

// Modal Elements
const questModal = document.getElementById('questModal');
const createQuestBtn = document.getElementById('createQuestBtn');
const closeModal = document.getElementById('closeModal');
const cancelQuest = document.getElementById('cancelQuest');
const saveQuest = document.getElementById('saveQuest');
const questName = document.getElementById('questName');
const questDescription = document.getElementById('questDescription');
const customXP = document.getElementById('customXP');

// Level Up Overlay
const levelUpOverlay = document.getElementById('levelUpOverlay');
const newLevelEl = document.getElementById('newLevel');
const levelDisplayEl = document.getElementById('levelDisplay');
const statPointsRewardEl = document.getElementById('statPointsReward');
const unlockMessageEl = document.getElementById('unlockMessage');
const closeLevelUp = document.getElementById('closeLevelUp');

// Data Management
const dataModal = document.getElementById('dataModal');
const exportDataBtn = document.getElementById('exportData');
const importDataBtn = document.getElementById('importData');
const closeDataModal = document.getElementById('closeDataModal');
const exportDataText = document.getElementById('exportDataText');
const importDataText = document.getElementById('importDataText');
const copyDataBtn = document.getElementById('copyData');
const restoreDataBtn = document.getElementById('restoreData');
const resetDataBtn = document.getElementById('resetData');

// Category & XP Selectors
const categoryButtons = document.querySelectorAll('.category-btn');
const xpOptions = document.querySelectorAll('.xp-option');

// new DOM elements for name & rank progress
const playerNameEl = document.getElementById('playerName');
const editNameBtn = document.getElementById('editName');
const rankProgressEl = document.getElementById('rankProgress');

// NEW: Modal elements for new features
const shopModal = document.getElementById('shopModal');
const inventoryModal = document.getElementById('inventoryModal');
const skillTreeModal = document.getElementById('skillTreeModal');
const craftModal = document.getElementById('craftModal');
const petModal = document.getElementById('petModal');
const challengesModal = document.getElementById('challengesModal');
const achievementsModal = document.getElementById('achievementsModal');

// NEW: Button elements for new features
const shopBtn = document.getElementById('shopBtn');
const inventoryBtn = document.getElementById('inventoryBtn');
const skillTreeBtn = document.getElementById('skillTreeBtn');
const craftBtn = document.getElementById('craftBtn');
const petBtn = document.getElementById('petBtn');
const challengesBtn = document.getElementById('challengesBtn');
const achievementsBtn = document.getElementById('achievementsBtn');
const generateRandomQuestBtn = document.getElementById('generateRandomQuest');
const autoQuestCheckbox = document.getElementById('autoQuestCheckbox');
const nextQuestTimerEl = document.getElementById('nextQuestTimer');

// NEW: Content containers for new modals
const shopList = document.getElementById('shopList');
const inventoryList = document.getElementById('inventoryList');
const skillTree = document.getElementById('skillTree');
const craftList = document.getElementById('craftList');
const resourcesList = document.getElementById('resourcesList');
const petsList = document.getElementById('petsList');
const challengesList = document.getElementById('challengesList');
const achievementsList = document.getElementById('achievementsList');

// NEW: Daily Rewards elements
const rewardsGrid = document.getElementById('rewardsGrid');
const dailyStreakEl = document.getElementById('dailyStreak');
const claimRewardBtn = document.getElementById('claimReward');

// NEW: Daily Missions elements
const dailyMissionsList = document.getElementById('dailyMissionsList');
const missionResetTimerEl = document.getElementById('missionResetTimer');

// =========================
// UTILITY FUNCTIONS
// =========================

// Format date for display
function formatDate(date) {
    return date.toLocaleDateString('en-US', { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Calculate required XP for a level
function calculateRequiredXP(level) {
    return level * level * 100;
}

// Add system message
function addSystemMessage(tag, text) {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const message = { tag, text, time };
    gameData.systemMessages.unshift(message);
    
    // Keep only last 10 messages
    if (gameData.systemMessages.length > 10) {
        gameData.systemMessages.pop();
    }
    
    // Update UI
    updateSystemMessages();
    
    // Add to activity log
    addActivityLog(text, "fa-broadcast-tower");
}

// Add activity log entry
function addActivityLog(text, icon = "fa-star") {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const activity = { icon, text, time };
    gameData.activityLog.unshift(activity);
    
    // Keep only last 10 activities
    if (gameData.activityLog.length > 10) {
        gameData.activityLog.pop();
    }
    
    updateActivityLog();
}

// Update system messages display
function updateSystemMessages() {
    systemMessagesEl.innerHTML = '';
    
    gameData.systemMessages.forEach(message => {
        const messageEl = document.createElement('div');
        messageEl.className = 'system-message';
        messageEl.innerHTML = `
            <span class="message-tag">${message.tag}</span>
            <span class="message-text">${message.text}</span>
            <span class="message-time" style="float: right; font-size: 12px; color: var(--text-muted);">${message.time}</span>
        `;
        systemMessagesEl.appendChild(messageEl);
    });
}

// Update activity log display
function updateActivityLog() {
    activityListEl.innerHTML = '';
    
    gameData.activityLog.forEach(activity => {
        const activityEl = document.createElement('div');
        activityEl.className = 'activity-item';
        activityEl.innerHTML = `
            <span class="activity-icon"><i class="fas ${activity.icon}"></i></span>
            <div class="activity-content">
                <div class="activity-text">${activity.text}</div>
                <div class="activity-time">${activity.time}</div>
            </div>
        `;
        activityListEl.appendChild(activityEl);
    });
}

// Update player stats display
function updatePlayerStats() {
    const player = gameData.player;
    const requiredXP = calculateRequiredXP(player.level);
    const xpNeeded = requiredXP - player.xp;
    
    // Update level and XP
    playerLevelEl.textContent = player.level;
    currentXPEl.textContent = player.xp;
    requiredXPEl.textContent = requiredXP;
    xpNeededEl.textContent = xpNeeded;
    
    // Update XP bar
    const xpPercent = (player.xp / requiredXP) * 100;
    xpBarEl.style.width = `${xpPercent}%`;
    
    // Update stat points
    statPointsEl.textContent = player.statPoints;
    
    // Update stats (base)
    strengthValueEl.textContent = player.stats.strength;
    intelligenceValueEl.textContent = player.stats.intelligence;
    agilityValueEl.textContent = player.stats.agility;
    
    // Update total stats
    player.totalStats = player.stats.strength + player.stats.intelligence + player.stats.agility;
    totalStatsEl.textContent = player.totalStats;
    
    // Update rank
    playerRankEl.textContent = player.rank;
    
    // Update rank progress (progress towards S-Rank (level 50))
    const maxRankLevel = 50;
    const rankPercent = Math.min(100, Math.round((player.level / maxRankLevel) * 100));
    if (rankProgressEl) {
        rankProgressEl.style.width = `${rankPercent}%`;
        rankProgressEl.title = `Rank progress: ${rankPercent}% (Level ${player.level}/${maxRankLevel})`;
    }
    
    // Update displayed player name
    if (playerNameEl) playerNameEl.textContent = player.name || "PLAYER";
    
    // Update streak
    streakCountEl.textContent = player.streak;
    
    // Update summary
    totalQuestsEl.textContent = player.totalQuestsCompleted;
    totalXPEarnedEl.textContent = player.totalXPEarned;
    daysActiveEl.textContent = player.daysActive;
    highestStreakEl.textContent = player.highestStreak;
    
    // Update gold
    if (goldAmountEl) goldAmountEl.textContent = player.gold;
    
    // Update last update time
    lastUpdateEl.textContent = gameData.settings.lastUpdate;
    
    // Update milestone progress
    updateMilestones();
    
    // Update unlocks
    updateUnlocks();
    
    // Enable/disable stat buttons
    document.querySelectorAll('.btn-stat').forEach(button => {
        button.disabled = player.statPoints <= 0;
    });
}

// Update milestone progress bars
function updateMilestones() {
    const player = gameData.player;
    
    // Level 5 milestone
    const milestone5Percent = player.level >= 5 ? 100 : (player.level / 5) * 100;
    milestone5El.style.width = `${milestone5Percent}%`;
    
    // Level 10 milestone
    const milestone10Percent = player.level >= 10 ? 100 : (player.level / 10) * 100;
    milestone10El.style.width = `${milestone10Percent}%`;
    
    // Level 15 milestone
    const milestone15Percent = player.level >= 15 ? 100 : (player.level / 15) * 100;
    milestone15El.style.width = `${milestone15Percent}%`;
}

// Update unlocked features
function updateUnlocks() {
    const player = gameData.player;
    const unlocksList = unlocksListEl.querySelectorAll('.unlock-item');
    
    // Update each unlock item based on player level
    unlocksList.forEach((item, index) => {
        const requiredLevel = index === 0 ? 1 : 
                             index === 1 ? 5 : 
                             index === 2 ? 10 : 
                             index === 3 ? 15 : 
                             index === 4 ? 20 : 3;
        
        if (player.level >= requiredLevel) {
            item.className = 'unlock-item unlocked';
            
            // Add to unlocked features if not already there
            const featureName = item.textContent.replace(` (Level ${requiredLevel})`, '');
            if (!gameData.unlockedFeatures.includes(featureName)) {
                gameData.unlockedFeatures.push(featureName);
            }
        } else {
            item.className = 'unlock-item locked';
        }
    });
}

// Update quests display
function updateQuests() {
    questsListEl.innerHTML = '';
    
    if (gameData.quests.length === 0) {
        questsListEl.innerHTML = `
            <div class="empty-quests">
                <i class="fas fa-scroll"></i>
                <p>No active quests. Create your first quest to begin your journey!</p>
            </div>
        `;
        return;
    }
    
    gameData.quests.forEach((quest, index) => {
        const questEl = document.createElement('div');
        questEl.className = `quest-item ${quest.isAutoGenerated ? 'auto-generated' : ''}`;
        questEl.dataset.index = index;
        
        const difficultyBadge = quest.difficulty ? 
            `<span class="quest-difficulty ${quest.difficulty}">${quest.difficulty.toUpperCase()}</span>` : '';
        
        questEl.innerHTML = `
            <div class="quest-info">
                <div class="quest-header">
                    <span class="quest-category ${quest.category}">${quest.category.toUpperCase()}</span>
                    <span class="quest-name">${quest.name}</span>
                    ${difficultyBadge}
                    ${quest.isAutoGenerated ? '<span style="font-size:10px; color:var(--secondary); margin-left:5px;"><i class="fas fa-robot"></i> AUTO</span>' : ''}
                </div>
                ${quest.description ? `<div class="quest-description">${quest.description}</div>` : ''}
                <div class="quest-xp">
                    <i class="fas fa-star"></i>
                    <span>${quest.xp} XP</span>
                </div>
            </div>
            <div class="quest-actions">
                <button class="btn-complete" data-index="${index}">
                    <i class="fas fa-check"></i> COMPLETE
                </button>
                <button class="btn-delete" data-index="${index}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        questsListEl.appendChild(questEl);
    });
    
    // Add event listeners to quest buttons
    document.querySelectorAll('.btn-complete').forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            completeQuest(index);
        });
    });
    
    document.querySelectorAll('.btn-delete').forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            deleteQuest(index);
        });
    });
}

// =========================
// DAILY MISSIONS SYSTEM
// =========================

// Update daily missions display
function updateDailyMissions() {
    if (!dailyMissionsList) return;
    
    dailyMissionsList.innerHTML = '';
    
    gameData.dailyMissionsData.forEach(mission => {
        const missionEl = document.createElement('div');
        missionEl.className = 'daily-mission';
        missionEl.dataset.id = mission.id;
        
        const progressPercent = Math.min(100, (mission.current / mission.target) * 100);
        const isCompleted = mission.current >= mission.target;
        const isClaimed = mission.claimed;
        
        missionEl.innerHTML = `
            <div class="mission-header">
                <div class="mission-name">
                    <i class="fas ${mission.type === 'strength' ? 'fa-fist-raised' : 'fa-running'}"></i>
                    ${mission.name}
                </div>
                <div class="mission-xp">
                    <i class="fas fa-star"></i> ${mission.xpReward} XP
                </div>
            </div>
            <div class="mission-description">${mission.description}</div>
            <div class="mission-progress-container">
                <div class="mission-progress-info">
                    <span>Progress: ${mission.current}${mission.unit}/${mission.target}${mission.unit}</span>
                    <span>${progressPercent.toFixed(0)}%</span>
                </div>
                <div class="mission-progress-bar">
                    <div class="mission-progress-fill" style="width: ${progressPercent}%"></div>
                </div>
            </div>
            <div class="mission-actions">
                <button class="btn-mission update" data-id="${mission.id}">
                    <i class="fas fa-plus"></i> UPDATE PROGRESS
                </button>
                <button class="btn-mission complete" data-id="${mission.id}" ${!isCompleted || isClaimed ? 'disabled' : ''}>
                    <i class="fas fa-check"></i> ${isClaimed ? 'CLAIMED' : (isCompleted ? 'CLAIM REWARD' : 'INCOMPLETE')}
                </button>
            </div>
        `;
        
        dailyMissionsList.appendChild(missionEl);
    });
    
    // Add event listeners
    document.querySelectorAll('.btn-mission.update').forEach(button => {
        button.addEventListener('click', function() {
            const missionId = parseInt(this.dataset.id);
            updateMissionProgress(missionId);
        });
    });
    
    document.querySelectorAll('.btn-mission.complete').forEach(button => {
        button.addEventListener('click', function() {
            const missionId = parseInt(this.dataset.id);
            claimMissionReward(missionId);
        });
    });
    
    // Update timer display
    updateMissionTimer();
}

// Update mission progress
function updateMissionProgress(missionId) {
    const mission = gameData.dailyMissionsData.find(m => m.id === missionId);
    if (!mission || mission.claimed) return;
    
    const input = prompt(`Update progress for ${mission.name} (Current: ${mission.current}/${mission.target}${mission.unit}):`, mission.current);
    if (input === null) return;
    
    const newValue = parseInt(input);
    if (isNaN(newValue) || newValue < 0) {
        addSystemMessage("[DAILY MISSIONS]", "Invalid input. Please enter a valid number.");
        return;
    }
    
    mission.current = Math.min(newValue, mission.target);
    mission.lastUpdated = new Date().toISOString();
    
    // Check if mission is now complete
    if (mission.current >= mission.target) {
        mission.completed = true;
        addSystemMessage("[DAILY MISSIONS]", `${mission.name} mission completed! You can now claim your reward.`);
        addActivityLog(`Completed ${mission.name} mission`, "fa-calendar-check");
    } else {
        addSystemMessage("[DAILY MISSIONS]", `${mission.name} progress updated to ${mission.current}/${mission.target}${mission.unit}`);
    }
    
    updateDailyMissions();
    saveGameData();
}

// Claim mission reward
function claimMissionReward(missionId) {
    const mission = gameData.dailyMissionsData.find(m => m.id === missionId);
    if (!mission || !mission.completed || mission.claimed) return;
    
    // Award XP
    addXP(mission.xpReward, `Daily Mission: ${mission.name}`);
    
    // Mark mission as claimed
    mission.claimed = true;
    
    addSystemMessage("[DAILY MISSIONS]", `Claimed ${mission.xpReward} XP for completing ${mission.name}!`);
    addActivityLog(`Claimed ${mission.xpReward} XP for ${mission.name} mission`, "fa-trophy");
    
    updateDailyMissions();
    saveGameData();
}

// Check and reset daily missions
function checkAndResetDailyMissions() {
    const today = new Date().toDateString();
    
    // Check if we need to reset missions
    if (gameData.dailyMissions.lastReset !== today) {
        // Apply penalties for incomplete missions
        let totalPenalty = 0;
        let incompleteMissions = 0;
        
        gameData.dailyMissionsData.forEach(mission => {
            if (!mission.claimed && mission.current < mission.target) {
                totalPenalty += mission.penalty;
                incompleteMissions++;
            }
            
            // Reset mission progress
            mission.current = 0;
            mission.completed = false;
            mission.claimed = false;
            mission.lastUpdated = null;
        });
        
        // Apply penalty if there were incomplete missions
        if (incompleteMissions > 0 && !gameData.dailyMissions.penaltyApplied) {
            const oldXP = gameData.player.xp;
            gameData.player.xp = Math.max(0, gameData.player.xp - totalPenalty);
            const xpLost = oldXP - gameData.player.xp;
            
            if (xpLost > 0) {
                addSystemMessage("[DAILY MISSIONS]", `Penalty applied! Lost ${xpLost} XP for ${incompleteMissions} incomplete mission(s).`);
                addActivityLog(`Penalty: -${xpLost} XP for incomplete missions`, "fa-exclamation-triangle");
            }
            
            gameData.dailyMissions.penaltyApplied = true;
            
            // Update UI
            updatePlayerStats();
        } else {
            gameData.dailyMissions.penaltyApplied = false;
        }
        
        // Update reset date
        gameData.dailyMissions.lastReset = today;
        gameData.dailyMissions.completedToday = false;
        
        addSystemMessage("[DAILY MISSIONS]", "Daily missions have been reset!");
        updateDailyMissions();
        saveGameData();
    }
}

// Update mission reset timer
function updateMissionTimer() {
    if (!missionResetTimerEl) return;
    
    const now = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    const timeLeft = tomorrow - now;
    
    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    missionResetTimerEl.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Start mission timer
function startMissionTimer() {
    // Update timer every second
    setInterval(updateMissionTimer, 1000);
    
    // Check for reset every minute
    setInterval(checkAndResetDailyMissions, 60000);
    
    // Initial check
    checkAndResetDailyMissions();
}

// =========================
// RANDOM QUEST GENERATOR SYSTEM
// =========================

// Get random number between min and max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Get random quest from database
function generateRandomQuest() {
    const player = gameData.player;
    const categories = ['strength', 'intelligence', 'agility', 'mixed'];
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    
    let questPool = gameData.randomQuestsDatabase[randomCategory];
    const randomQuest = questPool[Math.floor(Math.random() * questPool.length)];
    
    // Calculate count based on difficulty and player level
    let count = 0;
    let xpMultiplier = 1;
    
    // Adjust count based on difficulty
    switch(randomQuest.difficulty) {
        case 'easy':
            count = getRandomNumber(5, 15);
            xpMultiplier = 1;
            break;
        case 'medium':
            count = getRandomNumber(15, 30);
            xpMultiplier = 1.5;
            break;
        case 'hard':
            count = getRandomNumber(30, 50);
            xpMultiplier = 2;
            break;
        case 'expert':
            count = getRandomNumber(50, 100);
            xpMultiplier = 3;
            break;
    }
    
    // Scale with player rank/level
    if (gameData.autoQuestSettings.difficultyScaling) {
        const rankMultiplier = Math.max(1, player.level / 10);
        count = Math.round(count * rankMultiplier);
        xpMultiplier *= rankMultiplier;
    }
    
    // Generate quest name from template
    const questName = randomQuest.template.replace('{count}', count);
    
    // Calculate XP with multiplier
    const questXP = Math.round(randomQuest.baseXP * xpMultiplier);
    
    // Determine final category
    const questCategory = randomQuest.category || randomCategory;
    
    return {
        id: Date.now() + Math.random(),
        name: questName,
        category: questCategory,
        xp: questXP,
        description: `Auto-generated quest. Difficulty: ${randomQuest.difficulty}. Estimated time: ${randomQuest.time || 'Varies'}`,
        isAutoGenerated: true,
        difficulty: randomQuest.difficulty,
        createdAt: new Date().toISOString()
    };
}

// Start auto quest timer
function startAutoQuestTimer() {
    if (!gameData.autoQuestSettings.enabled) return;
    
    // Clear existing interval
    if (gameData.autoQuestSettings.timerInterval) {
        clearInterval(gameData.autoQuestSettings.timerInterval);
    }
    
    // Set next quest time (5 minutes from now)
    gameData.autoQuestSettings.nextQuestTime = Date.now() + gameData.autoQuestSettings.interval;
    
    // Update timer every second
    gameData.autoQuestSettings.timerInterval = setInterval(() => {
        if (!gameData.autoQuestSettings.enabled || !gameData.autoQuestSettings.nextQuestTime) {
            if (nextQuestTimerEl) nextQuestTimerEl.textContent = "OFF";
            return;
        }
        
        const timeLeft = gameData.autoQuestSettings.nextQuestTime - Date.now();
        
        if (timeLeft <= 0) {
            // Generate new quest
            if (gameData.quests.length < gameData.autoQuestSettings.maxAutoQuests) {
                const newQuest = generateRandomQuest();
                gameData.quests.push(newQuest);
                gameData.autoQuestSettings.lastGenerated = new Date().toISOString();
                gameData.autoQuestSettings.nextQuestTime = Date.now() + gameData.autoQuestSettings.interval;
                
                updateQuests();
                saveGameData();
                
                // Add system message
                addSystemMessage("[AUTO-QUEST]", `New quest available: "${newQuest.name}" (${newQuest.xp} XP)`);
                addActivityLog(`Auto-generated quest: ${newQuest.name}`, "fa-robot");
            }
        }
        
        // Update timer display
        if (nextQuestTimerEl) {
            const hours = Math.floor(timeLeft / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            if (hours > 0) {
                nextQuestTimerEl.textContent = `${hours}h ${minutes.toString().padStart(2, '0')}m`;
            } else {
                nextQuestTimerEl.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            }
        }
    }, 1000);
}

// Generate initial auto quests
function generateInitialAutoQuests() {
    if (!gameData.autoQuestSettings.enabled) return;
    
    const neededQuests = Math.min(
        gameData.autoQuestSettings.maxAutoQuests - gameData.quests.length,
        3 // Max 3 initial quests
    );
    
    for (let i = 0; i < neededQuests; i++) {
        const newQuest = generateRandomQuest();
        gameData.quests.push(newQuest);
    }
    
    gameData.autoQuestSettings.lastGenerated = new Date().toISOString();
    updateQuests();
    saveGameData();
    
    if (neededQuests > 0) {
        addSystemMessage("[AUTO-QUEST]", `${neededQuests} new auto-quests generated!`);
    }
}

// Toggle auto quest generation
function toggleAutoQuests(enabled) {
    gameData.autoQuestSettings.enabled = enabled;
    
    if (enabled) {
        startAutoQuestTimer();
        generateInitialAutoQuests();
        addSystemMessage("[SYSTEM]", "Auto-quest generation enabled. New quests will appear every 5 minutes.");
    } else {
        if (gameData.autoQuestSettings.timerInterval) {
            clearInterval(gameData.autoQuestSettings.timerInterval);
            gameData.autoQuestSettings.timerInterval = null;
        }
        addSystemMessage("[SYSTEM]", "Auto-quest generation disabled.");
    }
    
    saveGameData();
}

// Manually generate a random quest
function generateManualRandomQuest() {
    if (gameData.quests.length >= 10) {
        addSystemMessage("[SYSTEM]", "Maximum quest limit reached (10). Complete some quests first.");
        return;
    }
    
    const newQuest = generateRandomQuest();
    gameData.quests.push(newQuest);
    
    updateQuests();
    saveGameData();
    
    addSystemMessage("[SYSTEM]", `Manual quest generated: "${newQuest.name}" (${newQuest.xp} XP)`);
    addActivityLog(`Manually generated quest: ${newQuest.name}`, "fa-dice");
    
    return newQuest;
}

// =========================
// DAILY REWARDS SYSTEM
// =========================

// Update daily rewards display
function updateDailyRewards() {
    if (!rewardsGrid) return;
    
    rewardsGrid.innerHTML = '';
    const dailyRewards = gameData.player.dailyRewards;
    const today = new Date().toDateString();
    const lastClaim = dailyRewards.lastClaim ? new Date(dailyRewards.lastClaim).toDateString() : null;
    
    // Daily rewards (7-day cycle with increasing rewards)
    const rewards = [50, 100, 150, 200, 300, 500, 1000];
    
    for (let i = 0; i < 7; i++) {
        const dayEl = document.createElement('div');
        dayEl.className = 'reward-day';
        
        const dayNumber = (dailyRewards.streak % 7) + 1;
        const isToday = (i + 1) === dayNumber;
        const isClaimed = dailyRewards.claimedDays.includes(i + 1);
        const isFuture = (i + 1) > dayNumber;
        
        if (isToday) dayEl.classList.add('today');
        if (isClaimed) dayEl.classList.add('claimed');
        if (isFuture) dayEl.classList.add('future');
        
        dayEl.innerHTML = `
            <div>Day ${i + 1}</div>
            <div class="reward-xp">${rewards[i]} XP</div>
        `;
        
        rewardsGrid.appendChild(dayEl);
    }
    
    // Update streak display
    if (dailyStreakEl) {
        dailyStreakEl.textContent = dailyRewards.streak;
    }
    
    // Update claim button
    if (claimRewardBtn) {
        const canClaim = lastClaim !== today;
        claimRewardBtn.disabled = !canClaim;
        claimRewardBtn.textContent = canClaim ? "CLAIM TODAY'S REWARD" : "ALREADY CLAIMED";
    }
}

// Claim daily reward
function claimDailyReward() {
    const dailyRewards = gameData.player.dailyRewards;
    const today = new Date().toDateString();
    const lastClaim = dailyRewards.lastClaim ? new Date(dailyRewards.lastClaim).toDateString() : null;
    
    if (lastClaim === today) {
        addSystemMessage("[DAILY REWARD]", "You've already claimed your daily reward today!");
        return;
    }
    
    // Calculate reward
    const rewards = [50, 100, 150, 200, 300, 500, 1000];
    const dayIndex = dailyRewards.streak % 7;
    const rewardXP = rewards[dayIndex];
    
    // Update streak
    if (!lastClaim || isYesterday(lastClaim, today)) {
        dailyRewards.streak++;
    } else {
        dailyRewards.streak = 1; // Reset streak if missed a day
    }
    
    // Mark as claimed
    dailyRewards.claimedDays.push(dayIndex + 1);
    dailyRewards.lastClaim = new Date().toISOString();
    
    // Give reward
    addXP(rewardXP, "Daily Reward");
    
    // Update UI
    updateDailyRewards();
    saveGameData();
    
    addSystemMessage("[DAILY REWARD]", `Daily reward claimed! ${rewardXP} XP earned. Streak: ${dailyRewards.streak} days.`);
    addActivityLog(`Claimed daily reward (${rewardXP} XP)`, "fa-gift");
}

// Check if yesterday
function isYesterday(lastClaimDate, todayDate) {
    const lastClaim = new Date(lastClaimDate);
    const today = new Date(todayDate);
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    return lastClaim.toDateString() === yesterday.toDateString();
}

// =========================
// ACHIEVEMENTS SYSTEM
// =========================

// Update achievements display
function updateAchievements() {
    if (!achievementsList) return;
    
    achievementsList.innerHTML = '';
    
    gameData.achievementsData.forEach(achievement => {
        const isAchieved = gameData.player.achievements.includes(achievement.id);
        const achievementEl = document.createElement('div');
        achievementEl.className = `achievement-item ${isAchieved ? 'achieved' : ''}`;
        
        achievementEl.innerHTML = `
            <div>
                <strong>${achievement.name}</strong>
                <div class="desc">${achievement.description}</div>
                <div style="margin-top:5px;">
                    <span style="color: var(--accent);">Reward: ${achievement.reward} Gold</span>
                    <span style="margin-left:10px; font-size:12px;">
                        <i class="fas ${achievement.icon}"></i>
                    </span>
                </div>
            </div>
            <div>
                ${isAchieved ? 
                    '<span style="color:var(--success);"><i class="fas fa-check-circle"></i> ACHIEVED</span>' : 
                    '<span style="color:var(--text-muted);">NOT ACHIEVED</span>'
                }
            </div>
        `;
        
        achievementsList.appendChild(achievementEl);
    });
}

// Check and unlock achievements
function checkAchievements() {
    const player = gameData.player;
    let newAchievements = [];
    
    gameData.achievementsData.forEach(achievement => {
        if (gameData.player.achievements.includes(achievement.id)) return;
        
        let achieved = false;
        
        switch(achievement.id) {
            case 1: // First Steps
                achieved = player.totalQuestsCompleted >= 1;
                break;
            case 2: // Level 5
                achieved = player.level >= 5;
                break;
            case 3: // Quest Master
                achieved = player.totalQuestsCompleted >= 10;
                break;
            case 4: // Strength Trainer
                achieved = player.stats.strength >= 20;
                break;
            case 5: // Intellect Boost
                achieved = player.stats.intelligence >= 20;
                break;
            case 6: // Agility Expert
                achieved = player.stats.agility >= 20;
                break;
            case 7: // Rich Hunter
                achieved = player.gold >= 5000;
                break;
            case 8: // Crafting Novice
                achieved = player.inventory.some(item => item.type === 'crafted');
                break;
            case 9: // Pet Lover
                achieved = player.pets.length >= 1;
                break;
            case 10: // Skill Master
                achieved = player.learnedSkills.length >= 3;
                break;
        }
        
        if (achieved) {
            gameData.player.achievements.push(achievement.id);
            player.gold += achievement.reward;
            newAchievements.push(achievement.name);
            
            addSystemMessage("[ACHIEVEMENT]", `Achievement unlocked: ${achievement.name}! +${achievement.reward} Gold`);
            addActivityLog(`Unlocked achievement: ${achievement.name}`, "fa-trophy");
        }
    });
    
    if (newAchievements.length > 0) {
        updateAchievements();
        updatePlayerStats();
        saveGameData();
    }
}

// =========================
// SHOP SYSTEM
// =========================

function updateShop() {
    if (!shopList) return;
    
    shopList.innerHTML = '';
    
    gameData.shopItemsData.forEach(item => {
        const shopItem = document.createElement('div');
        shopItem.className = 'shop-item';
        shopItem.innerHTML = `
            <div>
                <strong>${item.name}</strong>
                <div class="desc">${item.description}</div>
                <div style="color: var(--accent); margin-top: 5px;">${item.price} Gold</div>
            </div>
            <button class="btn-buy" data-id="${item.id}" ${gameData.player.gold < item.price ? 'disabled' : ''}>
                ${gameData.player.gold < item.price ? 'NEED GOLD' : 'BUY'}
            </button>
        `;
        shopList.appendChild(shopItem);
    });
    
    // Add event listeners to buy buttons
    document.querySelectorAll('.btn-buy').forEach(button => {
        button.addEventListener('click', function() {
            const itemId = parseInt(this.dataset.id);
            buyItem(itemId);
        });
    });
}

function buyItem(itemId) {
    const player = gameData.player;
    const item = gameData.shopItemsData.find(i => i.id === itemId);
    
    if (!item) return;
    
    if (player.gold >= item.price) {
        player.gold -= item.price;
        
        // Add to inventory
        player.inventory.push({
            ...item,
            id: Date.now(),
            purchaseDate: new Date().toISOString()
        });
        
        addSystemMessage("[SHOP]", `Purchased ${item.name} for ${item.price} gold.`);
        addActivityLog(`Bought ${item.name}`, "fa-shopping-cart");
        
        updateShop();
        updateInventory();
        updatePlayerStats();
        checkAchievements();
        saveGameData();
    } else {
        addSystemMessage("[SHOP]", `Not enough gold to buy ${item.name}! Need ${item.price - player.gold} more gold.`);
    }
}

// =========================
// INVENTORY SYSTEM
// =========================

function updateInventory() {
    if (!inventoryList) return;
    
    inventoryList.innerHTML = '';
    
    if (gameData.player.inventory.length === 0) {
        inventoryList.innerHTML = `<div style="text-align:center; color:var(--text-muted); padding:20px;">Inventory is empty</div>`;
        return;
    }
    
    gameData.player.inventory.forEach((item, index) => {
        const invItem = document.createElement('div');
        invItem.className = 'inv-item';
        invItem.innerHTML = `
            <div>
                <strong>${item.name}</strong>
                <div class="desc">${item.description}</div>
                <div style="color: var(--text-secondary); font-size:12px; margin-top:3px;">
                    Type: ${item.type} | Value: ${item.price || 'N/A'} Gold
                </div>
            </div>
            <div style="display:flex; gap:5px;">
                <button class="btn-use" data-index="${index}">USE</button>
                <button class="btn-drop" data-index="${index}">DROP</button>
            </div>
        `;
        inventoryList.appendChild(invItem);
    });
    
    // Add event listeners
    document.querySelectorAll('.btn-use').forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            useItem(index);
        });
    });
    
    document.querySelectorAll('.btn-drop').forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            dropItem(index);
        });
    });
}

function useItem(index) {
    const item = gameData.player.inventory[index];
    
    // Apply item effect based on type
    switch(item.type) {
        case 'consumable':
            addSystemMessage("[INVENTORY]", `Used ${item.name}.`);
            // Remove from inventory after use
            gameData.player.inventory.splice(index, 1);
            break;
        case 'weapon':
        case 'armor':
        case 'artifact':
        case 'boots':
            // Check if already equipped
            const isEquipped = gameData.player.equippedItems.some(eq => eq.name === item.name);
            if (!isEquipped) {
                gameData.player.equippedItems.push(item);
                addSystemMessage("[INVENTORY]", `Equipped ${item.name}.`);
                // Apply stat bonuses if any
                if (item.stats) {
                    Object.keys(item.stats).forEach(stat => {
                        gameData.player.stats[stat] += item.stats[stat];
                    });
                    updatePlayerStats();
                }
            }
            break;
    }
    
    updateInventory();
    saveGameData();
}

function dropItem(index) {
    const item = gameData.player.inventory[index];
    
    if (confirm(`Are you sure you want to drop ${item.name}?`)) {
        gameData.player.inventory.splice(index, 1);
        addSystemMessage("[INVENTORY]", `Dropped ${item.name}.`);
        updateInventory();
        saveGameData();
    }
}

// =========================
// SKILL TREE SYSTEM
// =========================

function updateSkillTree() {
    if (!skillTree) return;
    
    skillTree.innerHTML = '';
    
    gameData.skillTreeData.forEach(skill => {
        const skillNode = document.createElement('div');
        const isLearned = gameData.player.learnedSkills.includes(skill.id);
        const canLearn = gameData.player.level >= skill.levelReq && gameData.player.statPoints >= skill.cost;
        
        skillNode.className = `skill-node ${isLearned ? 'learned' : ''}`;
        skillNode.innerHTML = `
            <div>
                <strong>${skill.name}</strong>
                <div class="sk-desc">${skill.description}</div>
                <div style="margin-top: 5px;">
                    <span style="color: var(--accent);">Cost: ${skill.cost} stat points</span>
                    <span style="margin-left: 10px; color: var(--text-secondary);">Level: ${skill.levelReq}+</span>
                </div>
            </div>
            ${!isLearned ? 
                `<button class="btn-learn" data-id="${skill.id}" ${!canLearn ? 'disabled' : ''}>
                    ${canLearn ? 'LEARN' : 'LOCKED'}
                </button>` : 
                '<span style="color:var(--success);"><i class="fas fa-check-circle"></i> LEARNED</span>'
            }
        `;
        skillTree.appendChild(skillNode);
    });
    
    // Add event listeners
    document.querySelectorAll('.skill-node .btn-learn').forEach(button => {
        button.addEventListener('click', function() {
            const skillId = parseInt(this.dataset.id);
            learnSkill(skillId);
        });
    });
}

function learnSkill(skillId) {
    const player = gameData.player;
    const skill = gameData.skillTreeData.find(s => s.id === skillId);
    
    if (!skill || player.learnedSkills.includes(skillId)) return;
    
    if (player.level >= skill.levelReq && player.statPoints >= skill.cost) {
        player.statPoints -= skill.cost;
        player.learnedSkills.push(skillId);
        
        // Apply skill effect
        if (skill.type === 'permanent' && skill.name === 'Iron Will') {
            player.stats.strength += 5;
        }
        
        addSystemMessage("[SKILL TREE]", `Learned skill: ${skill.name}!`);
        addActivityLog(`Learned ${skill.name} skill`, "fa-graduation-cap");
        
        updateSkillTree();
        updatePlayerStats();
        checkAchievements();
        saveGameData();
    }
}

// =========================
// CRAFTING SYSTEM
// =========================

function updateCrafting() {
    if (!craftList || !resourcesList) return;
    
    // Update recipes
    craftList.innerHTML = '';
    
    gameData.craftingRecipes.forEach(recipe => {
        const recipeEl = document.createElement('div');
        recipeEl.className = 'recipe';
        
        // Check if player has enough resources
        let canCraft = true;
        let missingResources = [];
        
        Object.keys(recipe.ingredients).forEach(resource => {
            if (gameData.player.resources[resource] < recipe.ingredients[resource]) {
                canCraft = false;
                missingResources.push(resource);
            }
        });
        
        recipeEl.innerHTML = `
            <div>
                <strong>${recipe.name}</strong>
                <div class="desc">${recipe.description}</div>
                <div style="margin-top: 5px;">
                    ${Object.keys(recipe.ingredients).map(res => 
                        `<span style="color: ${gameData.player.resources[res] < recipe.ingredients[res] ? 'var(--danger)' : 'var(--text-secondary)'};">
                            ${res}: ${recipe.ingredients[res]}
                        </span>`
                    ).join(' · ')}
                </div>
                <div style="color: var(--accent); margin-top: 5px;">Reward: ${recipe.xpReward} XP</div>
            </div>
            <button class="btn-craft" data-id="${recipe.id}" ${!canCraft ? 'disabled' : ''}>
                ${!canCraft ? 'NEED RESOURCES' : 'CRAFT'}
            </button>
        `;
        craftList.appendChild(recipeEl);
    });
    
    // Update resources display
    resourcesList.innerHTML = '';
    Object.keys(gameData.player.resources).forEach(resource => {
        const resEl = document.createElement('div');
        resEl.className = 'resource-row';
        resEl.innerHTML = `
            <span style="text-transform:capitalize;">${resource}:</span>
            <span style="float:right; color:var(--accent);">${gameData.player.resources[resource]}</span>
        `;
        resourcesList.appendChild(resEl);
    });
    
    // Add event listeners
    document.querySelectorAll('.btn-craft').forEach(button => {
        button.addEventListener('click', function() {
            const recipeId = parseInt(this.dataset.id);
            craftItem(recipeId);
        });
    });
}

function craftItem(recipeId) {
    const player = gameData.player;
    const recipe = gameData.craftingRecipes.find(r => r.id === recipeId);
    
    if (!recipe) return;
    
    // Check resources
    let hasResources = true;
    Object.keys(recipe.ingredients).forEach(resource => {
        if (player.resources[resource] < recipe.ingredients[resource]) {
            hasResources = false;
        }
    });
    
    if (hasResources) {
        // Consume resources
        Object.keys(recipe.ingredients).forEach(resource => {
            player.resources[resource] -= recipe.ingredients[resource];
        });
        
        // Add XP reward
        addXP(recipe.xpReward, `Crafted ${recipe.name}`);
        
        // Add to inventory
        player.inventory.push({
            name: recipe.result,
            description: `Crafted: ${recipe.description}`,
            type: 'crafted'
        });
        
        addSystemMessage("[CRAFTING]", `Crafted ${recipe.name}! Gained ${recipe.xpReward} XP.`);
        addActivityLog(`Crafted ${recipe.name}`, "fa-hammer");
        
        // Update crafting challenge
        updateChallengeProgress("crafting", 1);
        
        updateCrafting();
        updateInventory();
        checkAchievements();
        saveGameData();
    }
}

// =========================
// PETS SYSTEM
// =========================

function updatePets() {
    if (!petsList) return;
    
    petsList.innerHTML = '';
    
    if (gameData.player.pets.length === 0) {
        petsList.innerHTML = `<div style="text-align:center; color:var(--text-muted); padding:20px;">No pets yet. Visit the shop!</div>`;
        return;
    }
    
    // Display available pets to buy
    gameData.petsData.forEach(pet => {
        const petRow = document.createElement('div');
        petRow.className = 'pet-row';
        const isOwned = gameData.player.pets.some(p => p.id === pet.id);
        const isActive = gameData.player.activePet === pet.id;
        
        petRow.innerHTML = `
            <div>
                <strong>${pet.name}</strong>
                <div style="color: var(--text-secondary); font-size:13px;">${pet.description}</div>
                <div style="margin-top:5px;">
                    <span style="color: ${pet.rarity === 'rare' ? 'var(--accent)' : 
                                      pet.rarity === 'epic' ? '#9b59b6' : 
                                      pet.rarity === 'uncommon' ? 'var(--secondary)' : 
                                      'var(--text-muted)'};">${pet.rarity.toUpperCase()}</span>
                    <span style="margin-left:10px;">Level: ${pet.levelReq}+</span>
                </div>
            </div>
            <div style="display:flex; gap:5px;">
                ${!isOwned ? 
                    `<button class="btn-buy" data-id="${pet.id}" ${gameData.player.level < pet.levelReq || gameData.player.gold < pet.cost ? 'disabled' : ''}>
                        ${pet.cost} GOLD
                    </button>` :
                    `<button class="btn-equip" data-id="${pet.id}" ${isActive ? 'disabled' : ''}>
                        ${isActive ? 'ACTIVE' : 'EQUIP'}
                    </button>`
                }
            </div>
        `;
        petsList.appendChild(petRow);
    });
    
    // Add event listeners
    document.querySelectorAll('.pet-row .btn-buy').forEach(button => {
        button.addEventListener('click', function() {
            const petId = parseInt(this.dataset.id);
            buyPet(petId);
        });
    });
    
    document.querySelectorAll('.pet-row .btn-equip').forEach(button => {
        button.addEventListener('click', function() {
            const petId = parseInt(this.dataset.id);
            equipPet(petId);
        });
    });
}

function buyPet(petId) {
    const player = gameData.player;
    const pet = gameData.petsData.find(p => p.id === petId);
    
    if (!pet) return;
    
    if (player.level >= pet.levelReq && player.gold >= pet.cost) {
        player.gold -= pet.cost;
        player.pets.push({
            id: pet.id,
            name: pet.name,
            description: pet.description,
            acquired: new Date().toISOString()
        });
        
        addSystemMessage("[PETS]", `Purchased ${pet.name} for ${pet.cost} gold!`);
        addActivityLog(`Bought pet: ${pet.name}`, "fa-paw");
        
        updatePets();
        updatePlayerStats();
        checkAchievements();
        saveGameData();
    } else if (player.level < pet.levelReq) {
        addSystemMessage("[PETS]", `Need level ${pet.levelReq} to buy ${pet.name}.`);
    } else {
        addSystemMessage("[PETS]", `Not enough gold to buy ${pet.name}. Need ${pet.cost - player.gold} more gold.`);
    }
}

function equipPet(petId) {
    gameData.player.activePet = petId;
    const pet = gameData.petsData.find(p => p.id === petId);
    
    addSystemMessage("[PETS]", `${pet.name} is now your active companion!`);
    addActivityLog(`Equipped pet: ${pet.name}`, "fa-dragon");
    
    updatePets();
    saveGameData();
}

// =========================
// CHALLENGES SYSTEM
// =========================

function updateChallenges() {
    if (!challengesList) return;
    
    challengesList.innerHTML = '';
    
    gameData.challengesData.forEach(challenge => {
        const challengeItem = document.createElement('div');
        challengeItem.className = 'challenge-item';
        const isCompleted = gameData.player.completedChallenges.includes(challenge.id);
        
        challengeItem.innerHTML = `
            <div>
                <strong>${challenge.name}</strong>
                <div style="color: var(--text-secondary); font-size:13px;">${challenge.description}</div>
                <div style="margin-top:5px;">
                    <span style="color: var(--accent);">Reward: ${challenge.reward} Gold</span>
                    <span style="margin-left:10px; color:var(--text-muted);">${challenge.type.toUpperCase()}</span>
                </div>
                <div style="margin-top:5px; font-size:12px;">
                    Progress: ${challenge.progress}/${challenge.target}
                </div>
            </div>
            ${!isCompleted ? 
                `<button class="btn-complete-ch" data-id="${challenge.id}">VIEW</button>` :
                '<span style="color:var(--success);">COMPLETED</span>'
            }
        `;
        challengesList.appendChild(challengeItem);
    });
    
    // Add event listeners
    document.querySelectorAll('.btn-complete-ch').forEach(button => {
        button.addEventListener('click', function() {
            const challengeId = parseInt(this.dataset.id);
            viewChallenge(challengeId);
        });
    });
}

function viewChallenge(challengeId) {
    const challenge = gameData.challengesData.find(c => c.id === challengeId);
    if (!challenge) return;
    
    alert(`${challenge.name}\n\n${challenge.description}\n\nProgress: ${challenge.progress}/${challenge.target}\nReward: ${challenge.reward} Gold\n\nKeep completing tasks to finish this challenge!`);
}

// Update challenge progress
function updateChallengeProgress(type, amount = 1) {
    let updated = false;
    
    gameData.challengesData.forEach(challenge => {
        if ((challenge.type === type || type === "all") && !gameData.player.completedChallenges.includes(challenge.id)) {
            challenge.progress += amount;
            
            // Check if completed
            if (challenge.progress >= challenge.target) {
                challenge.progress = challenge.target;
                completeChallenge(challenge.id);
                updated = true;
            } else {
                updated = true;
            }
        }
    });
    
    if (updated) {
        updateChallenges();
    }
}

function completeChallenge(challengeId) {
    const challenge = gameData.challengesData.find(c => c.id === challengeId);
    
    if (challenge && !gameData.player.completedChallenges.includes(challengeId)) {
        gameData.player.completedChallenges.push(challengeId);
        gameData.player.gold += challenge.reward;
        
        addSystemMessage("[CHALLENGES]", `Challenge "${challenge.name}" completed! Awarded ${challenge.reward} gold.`);
        addActivityLog(`Completed challenge: ${challenge.name}`, "fa-trophy");
        
        updateChallenges();
        updatePlayerStats();
        saveGameData();
    }
}

// =========================
// GAME LOGIC FUNCTIONS
// =========================

// Add XP to player
function addXP(amount, source = "Quest") {
    const player = gameData.player;
    const oldLevel = player.level;
    
    player.xp += amount;
    player.totalXPEarned += amount;
    
    // Update quest challenge progress
    if (source.includes("Quest")) {
        updateChallengeProgress("daily", 1);
    }
    
    // Update XP challenge
    gameData.challengesData.forEach(challenge => {
        if (challenge.id === 4 && !gameData.player.completedChallenges.includes(4)) {
            challenge.progress = player.totalXPEarned;
            if (challenge.progress >= challenge.target) {
                completeChallenge(4);
            }
        }
    });
    
    addSystemMessage("[SYSTEM]", `${source} completed! Gained ${amount} XP.`);
    addActivityLog(`Gained ${amount} XP from ${source}`, "fa-star");
    
    // Check for level up
    checkLevelUp(oldLevel);
    
    // Update UI and save
    updatePlayerStats();
    saveGameData();
}

// Check if player leveled up
function checkLevelUp(oldLevel) {
    const player = gameData.player;
    
    while (player.xp >= calculateRequiredXP(player.level)) {
        player.xp -= calculateRequiredXP(player.level);
        const prevLevel = player.level;
        const prevRank = player.rank;
        
        player.level++;
        
        // Update level challenge progress
        gameData.challengesData.forEach(challenge => {
            if (challenge.id === 2 && !gameData.player.completedChallenges.includes(2)) {
                challenge.progress = player.level;
                if (challenge.progress >= challenge.target) {
                    completeChallenge(2);
                }
            }
        });
        
        // Grant stat points on level up (more points at higher levels)
        const pointsEarned = Math.max(1, Math.floor(player.level / 5) + 1);
        player.statPoints += pointsEarned;
        
        // Update rank based on level
        updatePlayerRank();
        
        // If rank changed, apply bonuses
        if (prevRank !== player.rank) {
            applyRankBonuses(prevRank, player.rank);
        }
        
        // Show level up animation
        showLevelUp(oldLevel, player.level, pointsEarned);
        
        // Check for feature unlocks
        checkFeatureUnlocks();
        
        oldLevel = player.level;
    }
    
    // Check achievements
    checkAchievements();
}

// Apply bonuses when rank increases
function applyRankBonuses(oldRank, newRank) {
    const player = gameData.player;
    // Map of bonuses for reaching a new rank (these apply once when rank changes)
    const bonuses = {
        "D-RANK HUNTER": { statAdd: 1, statPoints: 1 },
        "C-RANK HUNTER": { statAdd: 2, statPoints: 2 },
        "B-RANK HUNTER": { statAdd: 3, statPoints: 3 },
        "A-RANK HUNTER": { statAdd: 5, statPoints: 4 },
        "S-RANK HUNTER": { statAdd: 8, statPoints: 6 }
    };
    
    const bonus = bonuses[newRank];
    if (bonus) {
        // Increase base stats and give extra stat points
        player.stats.strength += bonus.statAdd;
        player.stats.intelligence += bonus.statAdd;
        player.stats.agility += bonus.statAdd;
        player.statPoints += bonus.statPoints;
        
        addSystemMessage("[SYSTEM]", `Rank Up! ${newRank} reached — Base stats +${bonus.statAdd}, +${bonus.statPoints} stat points awarded.`);
        addActivityLog(`Reached ${newRank} — stats increased`, "fa-award");
        
        // Save after awarding
        saveGameData(); 
    }
}

// Update player rank based on level
function updatePlayerRank() {
    const player = gameData.player;
    
    if (player.level >= 50) {
        player.rank = "S-RANK HUNTER";
    } else if (player.level >= 40) {
        player.rank = "A-RANK HUNTER";
    } else if (player.level >= 30) {
        player.rank = "B-RANK HUNTER";
    } else if (player.level >= 20) {
        player.rank = "C-RANK HUNTER";
    } else if (player.level >= 10) {
        player.rank = "D-RANK HUNTER";
    } else {
        player.rank = "E-RANK HUNTER";
    }
}

// Check for feature unlocks
function checkFeatureUnlocks() {
    const player = gameData.player;
    
    if (player.level >= 3 && !gameData.unlockedFeatures.includes("Auto-Quest System")) {
        addSystemMessage("[SYSTEM]", "Feature Unlocked: Auto-Quest System is now active!");
        gameData.unlockedFeatures.push("Auto-Quest System");
    }
    
    if (player.level >= 5 && !gameData.unlockedFeatures.includes("Weekly Quests")) {
        addSystemMessage("[SYSTEM]", "Feature Unlocked: Weekly Quests are now available!");
        gameData.unlockedFeatures.push("Weekly Quests");
    }
    
    if (player.level >= 10 && !gameData.unlockedFeatures.includes("Streak System")) {
        addSystemMessage("[SYSTEM]", "Feature Unlocked: Streak System activated!");
        gameData.unlockedFeatures.push("Streak System");
    }
    
    if (player.level >= 15 && !gameData.unlockedFeatures.includes("Achievements")) {
        addSystemMessage("[SYSTEM]", "Feature Unlocked: Achievements system unlocked!");
        gameData.unlockedFeatures.push("Achievements");
    }
    
    if (player.level >= 20 && !gameData.unlockedFeatures.includes("Shadow Army")) {
        addSystemMessage("[SYSTEM]", "Feature Unlocked: Shadow Army feature unlocked!");
        gameData.unlockedFeatures.push("Shadow Army");
    }
    
    updateUnlocks();
}

// Complete a quest
function completeQuest(index) {
    if (index >= 0 && index < gameData.quests.length) {
        const quest = gameData.quests[index];
        
        // Add XP
        addXP(quest.xp, `"${quest.name}"`);
        
        // Update quest completion stats
        gameData.player.totalQuestsCompleted++;
        
        // Remove quest from list
        gameData.quests.splice(index, 1);
        
        // Update UI
        updateQuests();
        
        // Add activity log
        addActivityLog(`Completed quest: "${quest.name}"`, "fa-check-circle");
        
        // Check achievements
        checkAchievements();
        
        // If auto-quests enabled and we're low on quests, generate more
        if (gameData.autoQuestSettings.enabled && gameData.quests.length < 3) {
            setTimeout(() => {
                const newQuest = generateRandomQuest();
                gameData.quests.push(newQuest);
                updateQuests();
                saveGameData();
                addSystemMessage("[AUTO-QUEST]", `New quest generated: "${newQuest.name}"`);
            }, 2000);
        }
    }
}

// Delete a quest
function deleteQuest(index) {
    if (index >= 0 && index < gameData.quests.length) {
        const quest = gameData.quests[index];
        gameData.quests.splice(index, 1);
        
        addSystemMessage("[SYSTEM]", `Quest "${quest.name}" deleted.`);
        addActivityLog(`Deleted quest: "${quest.name}"`, "fa-trash");
        
        updateQuests();
        saveGameData();
    }
}

// Add a stat point
function addStat(stat) {
    const player = gameData.player;
    
    if (player.statPoints > 0) {
        player.stats[stat]++;
        player.statPoints--;
        
        // Animate stat increase
        const statEl = document.getElementById(`${stat}Value`);
        if (statEl) {
            statEl.classList.add('stat-increase');
            setTimeout(() => statEl.classList.remove('stat-increase'), 300);
        }
        
        addSystemMessage("[SYSTEM]", `${stat.toUpperCase()} increased to ${player.stats[stat]}.`);
        addActivityLog(`Increased ${stat} to ${player.stats[stat]}`, "fa-arrow-up");
        
        updatePlayerStats();
        checkAchievements();
        saveGameData();
    }
}

// Create a new quest
function createQuest() {
    const name = questName.value.trim();
    const description = questDescription.value.trim();
    
    // Get selected category
    let category = "strength";
    categoryButtons.forEach(btn => {
        if (btn.classList.contains('active')) {
            category = btn.dataset.category;
        }
    });
    
    // Get XP value
    let xp = 50; // default
    let customXPValue = parseInt(customXP.value);
    
    if (!isNaN(customXPValue) && customXPValue >= 10 && customXPValue <= 500) {
        xp = customXPValue;
    } else {
        xpOptions.forEach(option => {
            if (option.classList.contains('active')) {
                xp = parseInt(option.dataset.xp);
            }
        });
    }
    
    // Validate
    if (!name) {
        addSystemMessage("[SYSTEM]", "Quest name cannot be empty.");
        return;
    }
    
    // Create quest object
    const quest = {
        id: Date.now(),
        name,
        category,
        xp,
        description: description || null,
        createdAt: new Date().toISOString(),
        isAutoGenerated: false
    };
    
    // Add to quests
    gameData.quests.push(quest);
    
    // Update UI
    updateQuests();
    
    // Add system message
    addSystemMessage("[SYSTEM]", `New quest created: "${name}" (${xp} XP).`);
    addActivityLog(`Created new quest: "${name}"`, "fa-plus-circle");
    
    // Close modal and reset form
    questModal.classList.remove('active');
    questName.value = '';
    questDescription.value = '';
    customXP.value = '';
    
    // Reset category and XP selectors
    categoryButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === 'strength') {
            btn.classList.add('active');
        }
    });
    
    xpOptions.forEach(option => {
        option.classList.remove('active');
        if (option.dataset.xp === '50') {
            option.classList.add('active');
        }
    });
    
    // Save game data
    saveGameData();
}

// Show level up overlay
function showLevelUp(oldLevel, newLevel, pointsEarned) {
    newLevelEl.textContent = newLevel;
    levelDisplayEl.textContent = newLevel;
    statPointsRewardEl.textContent = pointsEarned;
    
    // Check for unlocks
    let unlockMsg = "";
    if (newLevel >= 3) unlockMsg = "Auto-Quest System unlocked!";
    if (newLevel >= 5) unlockMsg = "Weekly Quests unlocked!";
    if (newLevel >= 10) unlockMsg = "Streak System activated!";
    if (newLevel >= 15) unlockMsg = "Achievements system unlocked!";
    if (newLevel >= 20) unlockMsg = "Shadow Army feature unlocked!";
    
    unlockMessageEl.textContent = unlockMsg;
    
    // Show overlay
    levelUpOverlay.classList.add('active');
}

// Check and update streak
function updateStreak() {
    const player = gameData.player;
    const today = new Date().toDateString();
    
    if (player.lastActiveDate) {
        const lastActive = new Date(player.lastActiveDate);
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        
        // If last active was yesterday, increment streak
        if (lastActive.toDateString() === yesterday.toDateString()) {
            player.streak++;
        } 
        // If last active was today, do nothing
        else if (lastActive.toDateString() === today) {
            // Do nothing
        }
        // Otherwise, reset streak
        else {
            player.streak = 1;
        }
    } else {
        // First time using the system
        player.streak = 1;
    }
    
    // Update last active date
    player.lastActiveDate = new Date().toISOString();
    
    // Update days active
    if (player.lastActiveDate) {
        const lastActive = new Date(player.lastActiveDate);
        const todayDate = new Date();
        const diffTime = Math.abs(todayDate - lastActive);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays > 1) {
            player.daysActive += 1;
        }
    }
    
    // Update highest streak
    if (player.streak > player.highestStreak) {
        player.highestStreak = player.streak;
        if (player.streak > 1) {
            addSystemMessage("[SYSTEM]", `New streak record: ${player.streak} days!`);
        }
    }
    
    // Update streak challenge
    gameData.challengesData.forEach(challenge => {
        if (challenge.id === 5 && !gameData.player.completedChallenges.includes(5)) {
            challenge.progress = player.streak;
            if (challenge.progress >= challenge.target) {
                completeChallenge(5);
            }
        }
    });
    
    // Add streak message if streak is > 1
    if (player.streak > 1) {
        addSystemMessage("[SYSTEM]", `Daily login streak: ${player.streak} days!`);
    }
}

// =========================
// DATA PERSISTENCE
// =========================

// Save game data to localStorage
function saveGameData() {
    gameData.settings.lastUpdate = new Date().toLocaleString();
    
    try {
        localStorage.setItem('soloLevelingSystem', JSON.stringify(gameData));
    } catch (e) {
        console.error("Failed to save game data:", e);
        addSystemMessage("[SYSTEM]", "Failed to save game data to local storage.");
    }
}

// Load game data from localStorage
function loadGameData() {
    try {
        const savedData = localStorage.getItem('soloLevelingSystem');
        
        if (savedData) {
            const parsedData = JSON.parse(savedData);
            
            // Merge saved data with default structure
            Object.assign(gameData, parsedData);
            
            // Ensure required properties exist
            if (!gameData.player.totalQuestsCompleted) gameData.player.totalQuestsCompleted = 0;
            if (!gameData.player.totalXPEarned) gameData.player.totalXPEarned = gameData.player.xp;
            if (!gameData.player.daysActive) gameData.player.daysActive = 1;
            if (!gameData.player.highestStreak) gameData.player.highestStreak = gameData.player.streak || 0;
            if (!gameData.unlockedFeatures) gameData.unlockedFeatures = ["Daily Quests"];
            if (!gameData.player.name) gameData.player.name = "PLAYER";
            
            // Ensure new properties exist
            if (!gameData.player.inventory) gameData.player.inventory = [];
            if (!gameData.player.equippedItems) gameData.player.equippedItems = [];
            if (!gameData.player.gold) gameData.player.gold = 1000;
            if (!gameData.player.learnedSkills) gameData.player.learnedSkills = [];
            if (!gameData.player.resources) gameData.player.resources = { wood: 10, iron: 5, crystal: 2, leather: 8 };
            if (!gameData.player.pets) gameData.player.pets = [];
            if (!gameData.player.activePet) gameData.player.activePet = null;
            if (!gameData.player.completedChallenges) gameData.player.completedChallenges = [];
            if (!gameData.player.dailyRewards) gameData.player.dailyRewards = { streak: 0, lastClaim: null, claimedDays: [] };
            if (!gameData.player.achievements) gameData.player.achievements = [];
            
            // Ensure daily missions data exists
            if (!gameData.dailyMissionsData) {
                gameData.dailyMissionsData = [
                    { 
                        id: 1, 
                        name: "Push-ups", 
                        description: "Complete 50 push-ups daily", 
                        current: 0, 
                        target: 50, 
                        unit: "", 
                        xpReward: 100, 
                        penalty: 50,
                        completed: false,
                        claimed: false,
                        lastUpdated: null,
                        type: "strength"
                    },
                    { 
                        id: 2, 
                        name: "Running", 
                        description: "Run 5km daily", 
                        current: 0, 
                        target: 5, 
                        unit: "km", 
                        xpReward: 150, 
                        penalty: 75,
                        completed: false,
                        claimed: false,
                        lastUpdated: null,
                        type: "agility"
                    }
                ];
            }
            
            if (!gameData.dailyMissions) {
                gameData.dailyMissions = {
                    lastReset: new Date().toDateString(),
                    completedToday: false,
                    penaltyApplied: false
                };
            }
            
            // Ensure auto-quest settings exist
            if (!gameData.autoQuestSettings) {
                gameData.autoQuestSettings = {
                    enabled: true,
                    interval: 300000,
                    maxAutoQuests: 5,
                    lastGenerated: null,
                    difficultyScaling: true,
                    timerInterval: null,
                    nextQuestTime: null
                };
            }
            
            addSystemMessage("[SYSTEM]", "Game data loaded successfully.");
        } else {
            addSystemMessage("[SYSTEM]", "No saved data found. Starting fresh.");
        }
    } catch (e) {
        console.error("Failed to load game data:", e);
        addSystemMessage("[SYSTEM]", "Failed to load game data. Starting fresh.");
    }
    
    // Update streak
    updateStreak();
    
    // Update UI
    updatePlayerStats();
    updateQuests();
    updateSystemMessages();
    updateActivityLog();
    updateDailyRewards();
    updateUnlocks();
    
    // Update new features UI
    updateShop();
    updateInventory();
    updateSkillTree();
    updateCrafting();
    updatePets();
    updateChallenges();
    updateAchievements();
    
    // Update daily missions
    updateDailyMissions();
    startMissionTimer();
    
    // Start auto-quest timer if enabled
    if (gameData.autoQuestSettings.enabled) {
        startAutoQuestTimer();
        // Generate initial quests if needed
        if (gameData.quests.length < 3) {
            setTimeout(generateInitialAutoQuests, 1000);
        }
    }
    
    // Set auto-quest checkbox state
    if (autoQuestCheckbox) {
        autoQuestCheckbox.checked = gameData.autoQuestSettings.enabled;
    }
}

// Export game data
function exportGameData() {
    const dataStr = JSON.stringify(gameData, null, 2);
    exportDataText.value = dataStr;
    dataModal.classList.add('active');
}

// Import game data
function importGameData() {
    try {
        const dataStr = importDataText.value.trim();
        
        if (!dataStr) {
            addSystemMessage("[SYSTEM]", "No data provided to import.");
            return;
        }
        
        const importedData = JSON.parse(dataStr);
        
        // Validate imported data structure
        if (!importedData.player || !importedData.quests) {
            addSystemMessage("[SYSTEM]", "Invalid data format.");
            return;
        }
        
        // Replace current data
        Object.assign(gameData, importedData);
        
        // Update all UI components
        updatePlayerStats();
        updateQuests();
        updateSystemMessages();
        updateActivityLog();
        updateDailyRewards();
        updateUnlocks();
        updateShop();
        updateInventory();
        updateSkillTree();
        updateCrafting();
        updatePets();
        updateChallenges();
        updateAchievements();
        updateDailyMissions();
        
        // Restart timers
        startMissionTimer();
        
        // Restart auto-quest timer if enabled
        if (gameData.autoQuestSettings.enabled) {
            startAutoQuestTimer();
        }
        
        // Save to localStorage
        saveGameData();
        
        // Close modal and reset
        dataModal.classList.remove('active');
        importDataText.value = '';
        
        addSystemMessage("[SYSTEM]", "Game data imported successfully!");
        addActivityLog("Imported game data from backup", "fa-file-import");
        
    } catch (e) {
        console.error("Failed to import game data:", e);
        addSystemMessage("[SYSTEM]", "Failed to import game data. Invalid format.");
    }
}

// Reset game data
function resetGameData() {
    if (confirm("Are you sure you want to reset all game data? This cannot be undone.")) {
        // Reset to default
        Object.assign(gameData, {
            player: {
                name: "SUNG JIN-WOO",
                level: 1,
                xp: 0,
                statPoints: 0,
                stats: {
                    strength: 5,
                    intelligence: 5,
                    agility: 5
                },
                totalStats: 15,
                rank: "E-RANK HUNTER",
                streak: 1,
                highestStreak: 0,
                lastActiveDate: new Date().toISOString(),
                daysActive: 1,
                totalQuestsCompleted: 0,
                totalXPEarned: 0,
                inventory: [],
                equippedItems: [],
                gold: 1000,
                learnedSkills: [],
                resources: { wood: 10, iron: 5, crystal: 2, leather: 8 },
                pets: [],
                activePet: null,
                completedChallenges: [],
                dailyRewards: { streak: 0, lastClaim: null, claimedDays: [] },
                achievements: []
            },
            quests: [],
            systemMessages: [
                { tag: "[SYSTEM]", text: "System reset. Welcome to the Solo Leveling System.", time: "Just now" }
            ],
            activityLog: [
                { icon: "fa-redo", text: "System reset to initial state", time: "Just now" }
            ],
            unlockedFeatures: ["Daily Quests"],
            settings: {
                lastUpdate: new Date().toLocaleString()
            },
            shopItemsData: [
                { id: 1, name: "Health Potion", description: "Restores 50 HP", price: 50, type: "consumable", effect: "heal" },
                { id: 2, name: "Strength Elixir", description: "+5 Strength for 1 hour", price: 150, type: "consumable", effect: "buff_strength" },
                { id: 3, name: "Iron Sword", description: "Basic weapon", price: 300, type: "weapon", stats: { strength: 3 } },
                { id: 4, name: "Leather Armor", description: "Basic armor", price: 400, type: "armor", stats: { agility: 2 } },
                { id: 5, name: "Wisdom Tome", description: "+5 Intelligence", price: 500, type: "artifact", stats: { intelligence: 5 } },
                { id: 6, name: "Speed Boots", description: "+3 Agility", price: 350, type: "boots", stats: { agility: 3 } },
                { id: 7, name: "XP Boost", description: "10% XP boost for 1 hour", price: 200, type: "consumable", effect: "xp_boost" }
            ],
            skillTreeData: [
                { id: 1, name: "Double XP", description: "Gain double XP for 1 hour", cost: 1, levelReq: 5, type: "buff" },
                { id: 2, name: "Critical Strike", description: "Chance to gain extra XP", cost: 2, levelReq: 10, type: "passive" },
                { id: 3, name: "Quick Learner", description: "XP requirements reduced by 10%", cost: 3, levelReq: 15, type: "passive" },
                { id: 4, name: "Shadow Step", description: "Complete quests 20% faster", cost: 5, levelReq: 20, type: "ability" },
                { id: 5, name: "Iron Will", description: "+5 Strength permanently", cost: 3, levelReq: 8, type: "permanent" }
            ],
            craftingRecipes: [
                { id: 1, name: "Health Kit", description: "Crafted health potion", ingredients: { wood: 2, leather: 1 }, result: "Health Potion", xpReward: 25 },
                { id: 2, name: "Iron Dagger", description: "Simple weapon", ingredients: { iron: 3, wood: 1 }, result: "Iron Dagger", xpReward: 50 },
                { id: 3, name: "Crystal Amulet", description: "Magical accessory", ingredients: { crystal: 1, iron: 2 }, result: "Crystal Amulet", xpReward: 100 },
                { id: 4, name: "Leather Boots", description: "Agility boots", ingredients: { leather: 3, iron: 1 }, result: "Leather Boots", xpReward: 40 }
            ],
            petsData: [
                { id: 1, name: "Fire Drake", description: "Increases XP gain by 5%", rarity: "rare", levelReq: 10, cost: 1000 },
                { id: 2, name: "Ice Wolf", description: "Boosts strength stats", rarity: "common", levelReq: 5, cost: 500 },
                { id: 3, name: "Shadow Cat", description: "Increases agility", rarity: "uncommon", levelReq: 8, cost: 750 },
                { id: 4, name: "Golden Eagle", description: "Better loot from quests", rarity: "epic", levelReq: 15, cost: 1500 }
            ],
            challengesData: [
                { id: 1, name: "Complete 5 Quests", description: "Complete 5 quests in one day", reward: 250, type: "daily", progress: 0, target: 5 },
                { id: 2, name: "Reach Level 10", description: "Level up to level 10", reward: 500, type: "achievement", progress: 0, target: 10 },
                { id: 3, name: "Craft 3 Items", description: "Craft 3 different items", reward: 300, type: "weekly", progress: 0, target: 3 },
                { id: 4, name: "Earn 1000 XP", description: "Accumulate 1000 total XP", reward: 400, type: "achievement", progress: 0, target: 1000 },
                { id: 5, name: "7 Day Streak", description: "Maintain a 7-day login streak", reward: 1000, type: "achievement", progress: 0, target: 7 }
            ],
            achievementsData: [
                { id: 1, name: "First Steps", description: "Complete your first quest", reward: 100, achieved: false, icon: "fa-footsteps" },
                { id: 2, name: "Level 5", description: "Reach level 5", reward: 200, achieved: false, icon: "fa-star" },
                { id: 3, name: "Quest Master", description: "Complete 10 quests", reward: 300, achieved: false, icon: "fa-scroll" },
                { id: 4, name: "Strength Trainer", description: "Reach 20 Strength", reward: 250, achieved: false, icon: "fa-fist-raised" },
                { id: 5, name: "Intellect Boost", description: "Reach 20 Intelligence", reward: 250, achieved: false, icon: "fa-brain" },
                { id: 6, name: "Agility Expert", description: "Reach 20 Agility", reward: 250, achieved: false, icon: "fa-running" },
                { id: 7, name: "Rich Hunter", description: "Accumulate 5000 gold", reward: 500, achieved: false, icon: "fa-coins" },
                { id: 8, name: "Crafting Novice", description: "Craft your first item", reward: 150, achieved: false, icon: "fa-hammer" },
                { id: 9, name: "Pet Lover", description: "Acquire your first pet", reward: 300, achieved: false, icon: "fa-paw" },
                { id: 10, name: "Skill Master", description: "Learn 3 skills", reward: 400, achieved: false, icon: "fa-graduation-cap" }
            ],
            randomQuestsDatabase: gameData.randomQuestsDatabase,
            dailyMissionsData: [
                { 
                    id: 1, 
                    name: "Push-ups", 
                    description: "Complete 50 push-ups daily", 
                    current: 0, 
                    target: 50, 
                    unit: "", 
                    xpReward: 100, 
                    penalty: 50,
                    completed: false,
                    claimed: false,
                    lastUpdated: null,
                    type: "strength"
                },
                { 
                    id: 2, 
                    name: "Running", 
                    description: "Run 5km daily", 
                    current: 0, 
                    target: 5, 
                    unit: "km", 
                    xpReward: 150, 
                    penalty: 75,
                    completed: false,
                    claimed: false,
                    lastUpdated: null,
                    type: "agility"
                }
            ],
            dailyMissions: {
                lastReset: new Date().toDateString(),
                completedToday: false,
                penaltyApplied: false
            },
            autoQuestSettings: {
                enabled: true,
                interval: 300000,
                maxAutoQuests: 5,
                lastGenerated: null,
                difficultyScaling: true,
                timerInterval: null,
                nextQuestTime: null
            }
        });
        
        // Update streak
        updateStreak();
        
        // Update all UI
        updatePlayerStats();
        updateQuests();
        updateSystemMessages();
        updateActivityLog();
        updateDailyRewards();
        updateUnlocks();
        updateShop();
        updateInventory();
        updateSkillTree();
        updateCrafting();
        updatePets();
        updateChallenges();
        updateAchievements();
        updateDailyMissions();
        
        // Start timers
        startMissionTimer();
        
        // Start auto-quest timer
        if (gameData.autoQuestSettings.enabled) {
            startAutoQuestTimer();
            setTimeout(generateInitialAutoQuests, 1000);
        }
        
        // Save to localStorage
        saveGameData();
        
        addSystemMessage("[SYSTEM]", "Game data reset to initial state.");
    }
}

// =========================
// CRYSTAL BACKGROUND
// =========================
function initCrystalBackground() {
    const canvas = document.getElementById('crystalCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Crystal particles
    const particles = [];
    const particleCount = 40;
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 8 + 4,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5,
            color: Math.random() > 0.5 ? 
                `rgba(0, 168, 255, ${Math.random() * 0.3 + 0.1})` : 
                `rgba(156, 136, 255, ${Math.random() * 0.3 + 0.1})`,
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: (Math.random() - 0.5) * 0.02,
            vertices: Math.floor(Math.random() * 4) + 3 // 3-6 vertices
        });
    }
    
    // Draw a crystal shape
    function drawCrystal(ctx, x, y, size, rotation, vertices, color) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rotation);
        
        ctx.beginPath();
        
        // Create polygon
        for (let i = 0; i < vertices; i++) {
            const angle = (i * 2 * Math.PI / vertices) - Math.PI / 2;
            const radius = size;
            const px = Math.cos(angle) * radius;
            const py = Math.sin(angle) * radius;
            
            if (i === 0) {
                ctx.moveTo(px, py);
            } else {
                ctx.lineTo(px, py);
            }
        }
        
        ctx.closePath();
        
        // Fill
        ctx.fillStyle = color;
        ctx.fill();
        
        // Glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = color;
        ctx.fill();
        
        // Border
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.stroke();
        
        ctx.restore();
    }
    
    // Draw connecting lines
    function drawConnections(ctx, particles) {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const p1 = particles[i];
                const p2 = particles[j];
                
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                // Draw line if particles are close enough
                if (distance < 150) {
                    const opacity = 1 - (distance / 150);
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(100, 150, 255, ${opacity * 0.1})`;
                    ctx.lineWidth = 1;
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }
        }
    }
    
    // Animation loop
    function animate() {
        // Clear canvas with fade effect
        ctx.fillStyle = 'rgba(5, 5, 16, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw particles
        particles.forEach(p => {
            // Update position
            p.x += p.speedX;
            p.y += p.speedY;
            p.rotation += p.rotationSpeed;
            
            // Bounce off edges
            if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
            if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
            
            // Keep within bounds
            p.x = Math.max(0, Math.min(canvas.width, p.x));
            p.y = Math.max(0, Math.min(canvas.height, p.y));
            
            // Draw crystal
            drawCrystal(ctx, p.x, p.y, p.size, p.rotation, p.vertices, p.color);
        });
        
        // Draw connections
        drawConnections(ctx, particles);
        
        requestAnimationFrame(animate);
    }
    
    // Start animation
    animate();
}

// =========================
// EVENT LISTENERS
// =========================
function initEventListeners() {
    // Quest creation modal
    createQuestBtn.addEventListener('click', () => {
        questModal.classList.add('active');
        questName.focus();
    });
    
    closeModal.addEventListener('click', () => {
        questModal.classList.remove('active');
    });
    
    cancelQuest.addEventListener('click', () => {
        questModal.classList.remove('active');
    });
    
    saveQuest.addEventListener('click', createQuest);
    
    // Category selection
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
    
    // XP selection
    xpOptions.forEach(option => {
        option.addEventListener('click', () => {
            xpOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            customXP.value = '';
        });
    });
    
    // Custom XP input
    customXP.addEventListener('input', () => {
        xpOptions.forEach(opt => opt.classList.remove('active'));
    });
    
    // Level up overlay close
    closeLevelUp.addEventListener('click', () => {
        levelUpOverlay.classList.remove('active');
    });
    
    // Stat buttons
    document.querySelectorAll('.btn-stat').forEach(button => {
        button.addEventListener('click', function() {
            const stat = this.dataset.stat;
            addStat(stat);
        });
    });
    
    // Clear messages button
    document.getElementById('clearMessages').addEventListener('click', () => {
        gameData.systemMessages = [];
        updateSystemMessages();
        addSystemMessage("[SYSTEM]", "Message history cleared.");
    });
    
    // Data management
    exportDataBtn.addEventListener('click', exportGameData);
    importDataBtn.addEventListener('click', () => {
        exportDataText.value = JSON.stringify(gameData, null, 2);
        dataModal.classList.add('active');
    });
    
    closeDataModal.addEventListener('click', () => {
        dataModal.classList.remove('active');
    });
    
    copyDataBtn.addEventListener('click', () => {
        exportDataText.select();
        document.execCommand('copy');
        addSystemMessage("[SYSTEM]", "Game data copied to clipboard.");
    });
    
    restoreDataBtn.addEventListener('click', importGameData);
    
    resetDataBtn.addEventListener('click', resetGameData);
    
    // NEW: Feature buttons
    shopBtn.addEventListener('click', () => {
        updateShop();
        shopModal.classList.add('active');
    });
    
    inventoryBtn.addEventListener('click', () => {
        updateInventory();
        inventoryModal.classList.add('active');
    });
    
    skillTreeBtn.addEventListener('click', () => {
        updateSkillTree();
        skillTreeModal.classList.add('active');
    });
    
    craftBtn.addEventListener('click', () => {
        updateCrafting();
        craftModal.classList.add('active');
    });
    
    petBtn.addEventListener('click', () => {
        updatePets();
        petModal.classList.add('active');
    });
    
    challengesBtn.addEventListener('click', () => {
        updateChallenges();
        challengesModal.classList.add('active');
    });
    
    achievementsBtn.addEventListener('click', () => {
        updateAchievements();
        achievementsModal.classList.add('active');
    });
    
    // Random quest generation
    generateRandomQuestBtn.addEventListener('click', () => {
        generateManualRandomQuest();
    });
    
    // Auto-quest toggle
    if (autoQuestCheckbox) {
        autoQuestCheckbox.addEventListener('change', (e) => {
            toggleAutoQuests(e.target.checked);
        });
    }
    
    // Daily reward claim
    if (claimRewardBtn) {
        claimRewardBtn.addEventListener('click', claimDailyReward);
    }
    
    // Allow Enter key to submit quest form
    questName.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') createQuest();
    });
    
    // Close modals with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            questModal.classList.remove('active');
            levelUpOverlay.classList.remove('active');
            dataModal.classList.remove('active');
            shopModal.classList.remove('active');
            inventoryModal.classList.remove('active');
            skillTreeModal.classList.remove('active');
            craftModal.classList.remove('active');
            petModal.classList.remove('active');
            challengesModal.classList.remove('active');
            achievementsModal.classList.remove('active');
        }
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === questModal) {
            questModal.classList.remove('active');
        }
        if (e.target === levelUpOverlay) {
            levelUpOverlay.classList.remove('active');
        }
        if (e.target === dataModal) {
            dataModal.classList.remove('active');
        }
        if (e.target === shopModal) {
            shopModal.classList.remove('active');
        }
        if (e.target === inventoryModal) {
            inventoryModal.classList.remove('active');
        }
        if (e.target === skillTreeModal) {
            skillTreeModal.classList.remove('active');
        }
        if (e.target === craftModal) {
            craftModal.classList.remove('active');
        }
        if (e.target === petModal) {
            petModal.classList.remove('active');
        }
        if (e.target === challengesModal) {
            challengesModal.classList.remove('active');
        }
        if (e.target === achievementsModal) {
            achievementsModal.classList.remove('active');
        }
    });
    
    // Allow editing player name by clicking the name or edit button
    if (playerNameEl) {
        playerNameEl.addEventListener('click', () => {
            const newName = prompt("Enter your player name:", gameData.player.name || "");
            if (newName !== null) {
                gameData.player.name = newName.trim() || gameData.player.name;
                updatePlayerStats();
                saveGameData();
                addSystemMessage("[SYSTEM]", `Player name set to: ${gameData.player.name}`);
            }
        });
    }
    if (editNameBtn) {
        editNameBtn.addEventListener('click', () => playerNameEl.click());
    }
}

// =========================
// INITIALIZATION
// =========================
function init() {
    // Initialize crystal background
    initCrystalBackground();
    
    // Load saved game data
    loadGameData();
    
    // Initialize event listeners
    initEventListeners();
    
    // Add CSS for stat increase animation
    const style = document.createElement('style');
    style.textContent = `
        .stat-increase {
            animation: statIncrease 0.3s ease;
        }
        
        @keyframes statIncrease {
            0% { transform: scale(1); }
            50% { transform: scale(1.3); color: var(--accent); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
    
    // Initial system message
    addSystemMessage("[SYSTEM]", "System initialized. All functions operational.");
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);