/**
 * MMPI-2-RF Scale Definitions
 *
 * All 51 scales with metadata and item key arrays.
 *
 * IMPORTANT: The item compositions (which items belong to each scale and their
 * keying directions) are proprietary to University of Minnesota Press / Pearson.
 * The items arrays below must be populated from your licensed MMPI-2-RF Technical
 * Manual (Ben-Porath & Tellegen, 2008/2011), Appendix A.
 *
 * Format for each item: { id: <MMPI-2-RF item number 1-338>, key: <true|false> }
 *   - key: true  = endorsing "True" adds 1 to the raw score
 *   - key: false = endorsing "False" adds 1 to the raw score
 *
 * For VRIN-r and TRIN-r, use the itemPairs format:
 *   { pair: [item1, item2], scoreIf: "different"|"same"|"both_true"|"both_false" }
 *
 * TO POPULATE: Use the loadScaleKeys() function at the bottom of this file
 * to load item keys from a JSON file exported from your scoring spreadsheet.
 */

const mmpiScales = {

  // ============================================================
  // VALIDITY SCALES (9)
  // ============================================================

  "VRIN-r": {
    name: "Variable Response Inconsistency - Revised",
    description: "Measures random or inconsistent responding by comparing responses to item pairs with similar/opposite content",
    type: "validity",
    scoringType: "pair_comparison",
    itemPairs: [
      // Populate from manual: ~53 item pairs
      // Format: { pair: [itemA, itemB], scoreIf: "different" } for similar-content pairs
      //         { pair: [itemA, itemB], scoreIf: "same" } for opposite-content pairs
    ]
  },

  "TRIN-r": {
    name: "True Response Inconsistency - Revised",
    description: "Detects indiscriminate true or false responding by comparing responses to opposite-content item pairs",
    type: "validity",
    scoringType: "pair_comparison",
    itemPairs: [
      // Populate from manual: ~26 item pairs
      // Format: { pair: [itemA, itemB], scoreIf: "both_true" }
      //         { pair: [itemA, itemB], scoreIf: "both_false" }
    ]
  },

  "F-r": {
    name: "Infrequent Responses - Revised",
    description: "Identifies infrequent responses in the general population; elevated scores suggest overreporting, random responding, or genuine severe pathology",
    type: "validity",
    items: [] // Populate: ~32 items
  },

  "Fp-r": {
    name: "Infrequent Psychopathology Responses - Revised",
    description: "Identifies responses infrequent even among psychiatric patients; helps distinguish genuine psychopathology from overreporting",
    type: "validity",
    items: [] // Populate: ~21 items
  },

  "Fs": {
    name: "Infrequent Somatic Responses",
    description: "Identifies somatic complaints infrequent even among medical patients; detects somatic symptom overreporting",
    type: "validity",
    items: [] // Populate: ~16 items
  },

  "FBS-r": {
    name: "Symptom Validity - Revised",
    description: "Detects non-credible somatic and cognitive symptom reporting, particularly relevant in personal injury and disability contexts",
    type: "validity",
    items: [] // Populate: ~30 items
  },

  "RBS": {
    name: "Response Bias Scale",
    description: "Detects response bias associated with overreporting of memory complaints",
    type: "validity",
    items: [] // Populate: ~28 items
  },

  "L-r": {
    name: "Uncommon Virtues - Revised",
    description: "Measures tendency to present oneself in an unrealistically positive manner by denying common human shortcomings",
    type: "validity",
    items: [] // Populate: ~14 items, mostly keyed False
  },

  "K-r": {
    name: "Adjustment Validity - Revised",
    description: "Measures tendency to underreport psychological problems and present oneself as well-adjusted",
    type: "validity",
    items: [] // Populate: ~14 items, mostly keyed False
  },

  // ============================================================
  // HIGHER-ORDER (H-O) SCALES (3)
  // ============================================================

  "EID": {
    name: "Emotional/Internalizing Dysfunction",
    description: "Broad measure of emotional distress, mood problems, and internalizing difficulties including anxiety and low positive affect",
    type: "higher-order",
    items: [] // Populate: ~41 items
  },

  "THD": {
    name: "Thought Dysfunction",
    description: "Broad measure of disordered thinking including unusual perceptions, paranoid ideation, and psychotic-like experiences",
    type: "higher-order",
    items: [] // Populate: ~26 items
  },

  "BXD": {
    name: "Behavioral/Externalizing Dysfunction",
    description: "Broad measure of acting-out behaviors including substance abuse, antisocial behavior, and poor impulse control",
    type: "higher-order",
    items: [] // Populate: ~23 items
  },

  // ============================================================
  // RESTRUCTURED CLINICAL (RC) SCALES (9)
  // ============================================================

  "RCd": {
    name: "Demoralization",
    description: "General unhappiness, life dissatisfaction, hopelessness, and emotional distress common across clinical conditions",
    type: "clinical",
    items: [] // Populate: ~24 items
  },

  "RC1": {
    name: "Somatic Complaints",
    description: "Diffuse physical health complaints including gastrointestinal, neurological, and pain-related symptoms",
    type: "clinical",
    items: [] // Populate: ~27 items
  },

  "RC2": {
    name: "Low Positive Emotions",
    description: "Absence of positive emotional experiences, anhedonia, social withdrawal, and lack of engagement",
    type: "clinical",
    items: [] // Populate: ~17 items
  },

  "RC3": {
    name: "Cynicism",
    description: "Non-self-referential beliefs that others are untrustworthy, exploitative, and motivated by self-interest",
    type: "clinical",
    items: [] // Populate: ~15 items
  },

  "RC4": {
    name: "Antisocial Behavior",
    description: "History of rule-breaking, antisocial acts, and externalizing behavior problems",
    type: "clinical",
    items: [] // Populate: ~22 items
  },

  "RC6": {
    name: "Ideas of Persecution",
    description: "Persecutory beliefs, self-referential ideation, and the belief that others intend harm",
    type: "clinical",
    items: [] // Populate: ~17 items
  },

  "RC7": {
    name: "Dysfunctional Negative Emotions",
    description: "Anxiety, irritability, intrusive ideation, and maladaptive experiences of negative emotions",
    type: "clinical",
    items: [] // Populate: ~24 items
  },

  "RC8": {
    name: "Aberrant Experiences",
    description: "Unusual thought processes, perceptual experiences, and psychotic-like symptoms",
    type: "clinical",
    items: [] // Populate: ~18 items
  },

  "RC9": {
    name: "Hypomanic Activation",
    description: "Overactivation, aggression, impulsivity, grandiosity, and elevated mood",
    type: "clinical",
    items: [] // Populate: ~28 items
  },

  // ============================================================
  // SOMATIC/COGNITIVE SCALES (5)
  // ============================================================

  "MLS": {
    name: "Malaise",
    description: "General sense of physical debility, poor health, and fatigue",
    type: "somatic",
    items: [] // Populate: ~8 items
  },

  "GIC": {
    name: "Gastrointestinal Complaints",
    description: "Nausea, upset stomach, and other GI symptoms",
    type: "somatic",
    items: [] // Populate: ~5 items
  },

  "HPC": {
    name: "Head Pain Complaints",
    description: "Head and neck pain symptoms",
    type: "somatic",
    items: [] // Populate: ~6 items
  },

  "NUC": {
    name: "Neurological Complaints",
    description: "Dizziness, numbness, weakness, and other neurological symptoms",
    type: "somatic",
    items: [] // Populate: ~9 items
  },

  "COG": {
    name: "Cognitive Complaints",
    description: "Difficulties with memory, concentration, and other cognitive functions",
    type: "somatic",
    items: [] // Populate: ~10 items
  },

  // ============================================================
  // INTERNALIZING SCALES (9)
  // ============================================================

  "SUI": {
    name: "Suicidal/Death Ideation",
    description: "Reports of suicidal ideation and recent thoughts of death or suicide",
    type: "internalizing",
    items: [] // Populate: ~5 items
  },

  "HLP": {
    name: "Helplessness/Hopelessness",
    description: "Belief that goals cannot be reached, things will not improve, and nothing can be done to change one's situation",
    type: "internalizing",
    items: [] // Populate: ~5 items
  },

  "SFD": {
    name: "Self-Doubt",
    description: "Lack of self-confidence, feelings of inadequacy and uselessness",
    type: "internalizing",
    items: [] // Populate: ~4 items
  },

  "NFC": {
    name: "Inefficacy",
    description: "Belief that one is indecisive and ineffective in dealing with problems",
    type: "internalizing",
    items: [] // Populate: ~9 items
  },

  "STW": {
    name: "Stress/Worry",
    description: "Preoccupation with disappointments, worry, and time pressure",
    type: "internalizing",
    items: [] // Populate: ~7 items
  },

  "AXY": {
    name: "Anxiety",
    description: "Pervasive anxiety, frights, frequent nightmares, and intrusive ideation",
    type: "internalizing",
    items: [] // Populate: ~7 items
  },

  "ANP": {
    name: "Anger Proneness",
    description: "Tendency to become easily angered, impatient, and irritable",
    type: "internalizing",
    items: [] // Populate: ~7 items
  },

  "BRF": {
    name: "Behavior-Restricting Fears",
    description: "Fears that significantly limit daily activities (e.g., blood, fire, storms)",
    type: "internalizing",
    items: [] // Populate: ~9 items
  },

  "MSF": {
    name: "Multiple Specific Fears",
    description: "Endorsement of multiple specific fears (e.g., animals, heights, darkness)",
    type: "internalizing",
    items: [] // Populate: ~9 items
  },

  // ============================================================
  // EXTERNALIZING SCALES (4)
  // ============================================================

  "JCP": {
    name: "Juvenile Conduct Problems",
    description: "History of behavioral difficulties during adolescence including legal trouble and school problems",
    type: "externalizing",
    items: [] // Populate: ~6 items
  },

  "SUB": {
    name: "Substance Abuse",
    description: "Past and current substance misuse including alcohol and drug problems",
    type: "externalizing",
    items: [] // Populate: ~7 items
  },

  "AGG": {
    name: "Aggression",
    description: "Physically aggressive, violent, and intimidating behavior",
    type: "externalizing",
    items: [] // Populate: ~9 items
  },

  "ACT": {
    name: "Activation",
    description: "Heightened excitation, energy level, and restlessness",
    type: "externalizing",
    items: [] // Populate: ~8 items
  },

  // ============================================================
  // INTERPERSONAL SCALES (5)
  // ============================================================

  "FML": {
    name: "Family Problems",
    description: "Conflictual family relationships and feelings of alienation from family",
    type: "interpersonal",
    items: [] // Populate: ~10 items
  },

  "IPP": {
    name: "Interpersonal Passivity",
    description: "Submissive, unassertive interpersonal style; difficulty standing up for oneself",
    type: "interpersonal",
    items: [] // Populate: ~10 items
  },

  "SAV": {
    name: "Social Avoidance",
    description: "Avoidance of social situations and events; preference for being alone",
    type: "interpersonal",
    items: [] // Populate: ~10 items
  },

  "SHY": {
    name: "Shyness",
    description: "Social anxiety, inhibition, and embarrassment in social situations",
    type: "interpersonal",
    items: [] // Populate: ~7 items
  },

  "DSF": {
    name: "Disaffiliativeness",
    description: "Disliking people, preferring to be alone, and viewing others negatively",
    type: "interpersonal",
    items: [] // Populate: ~6 items
  },

  // ============================================================
  // INTEREST SCALES (2)
  // ============================================================

  "AES": {
    name: "Aesthetic-Literary Interests",
    description: "Interest in literature, music, art, and the performing arts",
    type: "interest",
    items: [] // Populate: ~7 items
  },

  "MEC": {
    name: "Mechanical-Physical Interests",
    description: "Interest in building, repairing things, outdoor activities, and sports",
    type: "interest",
    items: [] // Populate: ~9 items
  },

  // ============================================================
  // PSY-5 (PERSONALITY PSYCHOPATHOLOGY FIVE) SCALES (5)
  // ============================================================

  "AGGR-r": {
    name: "Aggressiveness-Revised",
    description: "Instrumental and goal-directed aggression, dominance, and grandiosity",
    type: "psy5",
    items: [] // Populate: ~18 items
  },

  "PSYC-r": {
    name: "Psychoticism-Revised",
    description: "Disconnection from reality including unusual beliefs and perceptual experiences",
    type: "psy5",
    items: [] // Populate: ~26 items
  },

  "DISC-r": {
    name: "Disconstraint-Revised",
    description: "Under-controlled behavior, impulsivity, risk-taking, and rule-breaking",
    type: "psy5",
    items: [] // Populate: ~20 items
  },

  "NEGE-r": {
    name: "Negative Emotionality/Neuroticism-Revised",
    description: "Broad disposition to experience negative emotions including anxiety, insecurity, worry, and self-criticism",
    type: "psy5",
    items: [] // Populate: ~20 items
  },

  "INTR-r": {
    name: "Introversion/Low Positive Emotionality-Revised",
    description: "Social disengagement, anhedonia, and absence of positive emotional experiences",
    type: "psy5",
    items: [] // Populate: ~20 items
  }
};


// ============================================================
// SCALE KEY LOADING SYSTEM
// ============================================================

/**
 * Loads item-to-scale keys from a JSON data structure.
 * Use this to populate the empty items arrays from your licensed manual data.
 *
 * Expected JSON format:
 * {
 *   "RCd": { "items": [{"id": 24, "key": true}, {"id": 30, "key": true}, ...] },
 *   "RC1": { "items": [{"id": 11, "key": true}, {"id": 18, "key": true}, ...] },
 *   "VRIN-r": { "itemPairs": [{"pair": [3, 39], "scoreIf": "different"}, ...] },
 *   ...
 * }
 *
 * @param {Object} keyData - JSON object with scale IDs as keys
 * @returns {number} - Number of scales successfully loaded
 */
function loadScaleKeys(keyData) {
  let loaded = 0;

  for (const [scaleId, data] of Object.entries(keyData)) {
    if (!mmpiScales[scaleId]) {
      console.warn(`Unknown scale ID: ${scaleId}`);
      continue;
    }

    if (data.itemPairs && mmpiScales[scaleId].scoringType === "pair_comparison") {
      mmpiScales[scaleId].itemPairs = data.itemPairs;
      loaded++;
      console.log(`Loaded ${data.itemPairs.length} pairs for ${scaleId}`);
    } else if (data.items) {
      mmpiScales[scaleId].items = data.items;
      loaded++;
      console.log(`Loaded ${data.items.length} items for ${scaleId}`);
    }
  }

  console.log(`Successfully loaded keys for ${loaded} of 51 scales`);
  return loaded;
}

/**
 * Loads scale keys from a JSON file via fetch.
 * Place your scoring keys in a file called 'scale-keys.json' in the same directory.
 *
 * @param {string} url - URL or path to the JSON file
 * @returns {Promise<number>} - Number of scales loaded
 */
async function loadScaleKeysFromFile(url) {
  try {
    const response = await fetch(url || 'scale-keys.json');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const keyData = await response.json();
    return loadScaleKeys(keyData);
  } catch (error) {
    console.error('Error loading scale keys:', error);
    return 0;
  }
}

/**
 * Validates that all scales have item keys populated.
 * Call this after loading keys to verify completeness.
 *
 * @returns {Object} - { complete: string[], missing: string[], total: number }
 */
function validateScaleKeys() {
  const complete = [];
  const missing = [];

  for (const [scaleId, scale] of Object.entries(mmpiScales)) {
    if (scale.scoringType === "pair_comparison") {
      if (scale.itemPairs && scale.itemPairs.length > 0) {
        complete.push(scaleId);
      } else {
        missing.push(scaleId);
      }
    } else {
      if (scale.items && scale.items.length > 0) {
        complete.push(scaleId);
      } else {
        missing.push(scaleId);
      }
    }
  }

  console.log(`Scale keys: ${complete.length}/51 complete, ${missing.length} missing`);
  if (missing.length > 0) {
    console.warn('Missing scale keys for:', missing.join(', '));
  }

  return { complete, missing, total: 51 };
}

// Export for Node.js testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { mmpiScales, loadScaleKeys, loadScaleKeysFromFile, validateScaleKeys };
}
