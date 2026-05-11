/**
 * MMPI-2-RF Clinical Narrative Interpretations
 *
 * Provides clinically rich narrative interpretations for all 51 MMPI-2-RF scales
 * based on T-score ranges. Intended for use by qualified clinicians only.
 *
 * T-score interpretation levels:
 *   Low:           T < 39
 *   Normal:        T 39-64
 *   Borderline:    T = 65
 *   Elevated:      T 66-79
 *   Very Elevated: T >= 80
 */

const scaleInterpretations = {

  // ============================================================
  // VALIDITY SCALES
  // ============================================================

  "VRIN-r": {
    name: "Variable Response Inconsistency",
    low: "This individual responded to item pairs in a highly consistent manner throughout the assessment, suggesting careful attention to item content and thoughtful engagement with the testing process. The protocol can be interpreted with confidence regarding internal consistency.",
    normal: "This individual responded to similar item pairs in a reasonably consistent manner, indicating adequate attention to item content throughout the assessment. There is no evidence of random or careless responding, and the resulting profile can be interpreted with confidence.",
    borderline: "This individual produced a mildly inconsistent pattern of responses to similar item pairs. While not clearly invalid, there is some suggestion of inattentiveness or difficulty maintaining focus during the assessment. Interpretive caution is warranted, particularly for scales near clinical thresholds.",
    elevated: "This individual responded inconsistently to item pairs measuring similar content, raising significant concerns about the validity of the protocol. This pattern may reflect random responding, difficulty reading or comprehending items, or disengagement from the assessment process. Scale elevations should be interpreted with substantial caution.",
    veryElevated: "This individual produced a highly inconsistent response pattern across item pairs with similar content, strongly suggesting random or careless responding. The protocol is likely invalid due to content-nonresponsiveness, and substantive scale scores should not be interpreted. Readministration under more favorable conditions should be considered."
  },

  "TRIN-r": {
    name: "True Response Inconsistency",
    low: "This individual responded to item pairs in a balanced and content-appropriate manner, with no evidence of an indiscriminate nay-saying response bias. The protocol reflects genuine engagement with item content.",
    normal: "This individual responded to item pairs without evidence of a fixed response style. There is no indication of indiscriminate agreement (acquiescence) or disagreement (nay-saying). The protocol can be interpreted without concern for response bias.",
    borderline: "This individual produced a mildly biased pattern of responding to item pairs, suggesting a slight tendency toward either acquiescence or nay-saying. While not definitively invalid, this pattern introduces some uncertainty into the interpretation of substantive scales.",
    elevated: "This individual demonstrated a notable bias toward either indiscriminate true-responding (acquiescence) or false-responding (nay-saying), raising significant concerns about protocol validity. Substantive scale elevations may be artifactually inflated or suppressed by this response style and should be interpreted cautiously.",
    veryElevated: "This individual produced a response pattern dominated by either indiscriminate agreement or disagreement with item content, rendering the protocol likely invalid. Substantive scale scores are uninterpretable as they primarily reflect a fixed response set rather than genuine psychological characteristics."
  },

  "F-r": {
    name: "Infrequent Responses",
    low: "This individual endorsed very few items that are rarely endorsed in the general population, suggesting a tendency toward conventional or possibly guarded self-presentation. If clinical concerns exist despite a benign profile, consider whether this individual may be underreporting symptoms.",
    normal: "This individual endorsed an expected number of infrequently endorsed items, consistent with a valid and interpretable protocol. The response pattern does not suggest either overreporting or underreporting of psychological symptoms.",
    borderline: "This individual endorsed a somewhat elevated number of items rarely endorsed in the general population. This may reflect genuine psychological distress, a cry for help, or the beginning of symptom exaggeration. The clinical context should be carefully considered when interpreting this protocol.",
    elevated: "This individual endorsed a notable number of items that are rarely endorsed in the general population. This pattern may indicate genuine severe psychopathology, overreporting of symptoms, or a combination of both. The possibility of symptom exaggeration should be evaluated alongside clinical history and behavioral observations before interpreting substantive scales.",
    veryElevated: "This individual endorsed an unusually high number of items that are very rarely endorsed in the general population. This pattern raises serious concerns about possible overreporting, malingering, or an invalid attempt to portray extreme psychological dysfunction. Unless there is strong corroborating evidence of severe psychopathology, the protocol should be considered potentially invalid due to overreporting."
  },

  "Fp-r": {
    name: "Infrequent Psychopathology Responses",
    low: "This individual did not endorse items that are rarely endorsed even by psychiatric inpatients, suggesting no evidence of overreporting severe psychopathology. The profile is not suggestive of malingering.",
    normal: "This individual endorsed few items that are rarely endorsed even by individuals with genuine severe mental illness. There is no evidence of fabricated or exaggerated psychopathology, and the protocol can be interpreted without concern for malingering.",
    borderline: "This individual endorsed a mildly elevated number of items rarely endorsed even by psychiatric patients. While not definitive, this introduces the possibility of some exaggeration of severe psychopathological symptoms. Clinical context should guide interpretation.",
    elevated: "This individual endorsed a notable number of items that are rarely endorsed even among individuals with significant psychiatric disorders. This pattern raises meaningful concerns about possible malingering or fabrication of severe psychological symptoms. Independent corroboration of reported symptoms is strongly recommended.",
    veryElevated: "This individual endorsed a very high number of items that are almost never endorsed even by severely disturbed psychiatric patients. This pattern is strongly suggestive of malingering or intentional fabrication of psychopathology. The protocol should be considered invalid for the purpose of assessing genuine psychological dysfunction unless extraordinary clinical circumstances are documented."
  },

  "Fs": {
    name: "Infrequent Somatic Responses",
    low: "This individual did not endorse somatic items that are rarely endorsed in medical patient samples. There is no indication of somatic symptom exaggeration.",
    normal: "This individual endorsed somatic items at a rate consistent with genuine medical or psychological conditions. There is no evidence of somatic symptom overreporting.",
    borderline: "This individual endorsed a somewhat elevated number of somatic items that are rarely endorsed even by medical patients. This may reflect genuine but unusual somatic experiences, or the beginning of somatic symptom exaggeration. Clinical correlation is recommended.",
    elevated: "This individual endorsed a notable number of somatic items rarely endorsed by medical patients, raising concerns about possible somatic symptom overreporting. This pattern may reflect symptom exaggeration in the context of disability claims, litigation, or secondary gain. Somatic scale elevations should be interpreted cautiously.",
    veryElevated: "This individual endorsed an unusually high number of somatic complaints that are very rarely reported even by individuals with documented medical conditions. This pattern is strongly suggestive of non-credible somatic symptom reporting and possible malingering of physical complaints. Somatic and cognitive scale elevations should not be interpreted at face value."
  },

  "FBS-r": {
    name: "Symptom Validity",
    low: "This individual presented a pattern of somatic and cognitive complaints consistent with genuine reporting. There is no evidence of non-credible symptom presentation.",
    normal: "This individual's pattern of symptom endorsement is within expected limits and does not suggest non-credible reporting. The profile can be interpreted without concern for symptom fabrication or exaggeration.",
    borderline: "This individual endorsed a mildly elevated combination of somatic and cognitive complaints that may suggest some degree of symptom exaggeration. This pattern is sometimes seen in individuals involved in personal injury or disability evaluations. Further assessment of symptom validity may be warranted.",
    elevated: "This individual endorsed a pattern of symptoms that raises significant concerns about non-credible reporting. The combination of somatic, cognitive, and emotional complaints is atypical of genuine clinical presentations and is more commonly associated with symptom exaggeration or fabrication, particularly in forensic or disability contexts.",
    veryElevated: "This individual produced a symptom endorsement pattern highly suggestive of non-credible reporting. The breadth and severity of endorsed symptoms significantly exceed what is typically observed in genuine clinical presentations. This pattern is strongly associated with malingered neurocognitive dysfunction and exaggerated somatic complaints."
  },

  "RBS": {
    name: "Response Bias Scale",
    low: "This individual did not endorse items associated with overreported memory complaints. There is no indication of non-credible cognitive symptom reporting.",
    normal: "This individual's endorsement of items related to memory and cognitive functioning falls within expected limits. There is no evidence suggesting exaggerated or non-credible cognitive complaints.",
    borderline: "This individual endorsed a mildly elevated number of items associated with overreported memory complaints. While not definitive, this pattern warrants consideration of possible cognitive symptom exaggeration, particularly in forensic or disability evaluation contexts.",
    elevated: "This individual endorsed a notable number of items associated with non-credible memory complaints. This pattern raises significant concerns about the validity of reported cognitive difficulties and may reflect exaggeration or fabrication of memory problems.",
    veryElevated: "This individual produced a pattern of endorsement strongly associated with non-credible memory complaints. The level of reported cognitive difficulty is highly atypical of genuine neurological or psychological conditions and is most consistent with exaggerated or fabricated memory dysfunction."
  },

  "L-r": {
    name: "Uncommon Virtues",
    low: "This individual presented in an unusually self-critical and candid manner, freely acknowledging common human shortcomings. This level of openness may reflect genuine self-awareness, a tendency toward self-deprecation, or a desire to appear psychologically distressed.",
    normal: "This individual presented in a balanced and generally candid manner, acknowledging common human foibles while maintaining a reasonably positive self-image. There is no evidence of significant positive impression management.",
    borderline: "This individual presented in a mildly favorable light, claiming an above-average number of uncommon virtues and denying common human shortcomings. This may reflect a somewhat idealized self-concept or mild positive impression management. Some underreporting of psychological difficulties is possible.",
    elevated: "This individual presented in a notably virtuous and favorable manner, denying many common human shortcomings and claiming unlikely positive attributes. This pattern is consistent with meaningful positive impression management and suggests that psychological difficulties may be underreported. Clinical scales may be suppressed.",
    veryElevated: "This individual presented an unrealistically virtuous self-image, denying virtually all common human foibles and claiming an extraordinary number of positive attributes. This pattern indicates significant positive impression management rendering the protocol likely invalid for detecting genuine psychological difficulties. Substantive scale scores are likely suppressed."
  },

  "K-r": {
    name: "Adjustment Validity",
    low: "This individual presented as unusually open about personal problems and psychological difficulties, suggesting either genuine distress, poor self-regard, or a deliberate attempt to present in an unfavorable light. The degree of acknowledged difficulty exceeds what is typical even for individuals seeking treatment.",
    normal: "This individual presented with a balanced level of self-disclosure regarding personal strengths and difficulties. There is no indication of either excessive defensiveness or exaggerated openness about problems. The protocol can be interpreted without significant concern for response style distortion.",
    borderline: "This individual presented in a mildly guarded manner, with some tendency to minimize personal difficulties and present as well-adjusted. Mild underreporting of psychological symptoms is possible, and clinicians should consider whether clinical scales may be slightly suppressed.",
    elevated: "This individual presented in a notably defensive and self-assured manner, minimizing personal problems and portraying themselves as highly well-adjusted. This pattern is consistent with denial of psychological difficulties and may result in meaningful suppression of clinical scale elevations.",
    veryElevated: "This individual presented in a highly defensive manner, strongly denying psychological difficulties and portraying near-perfect adjustment. This level of defensiveness is associated with significant underreporting of genuine problems, and the clinical profile is likely substantially suppressed. The validity of the protocol for detecting psychopathology is compromised."
  },

  // ============================================================
  // HIGHER-ORDER (H-O) SCALES
  // ============================================================

  "EID": {
    name: "Emotional/Internalizing Dysfunction",
    low: "This individual reports an unusually low level of emotional distress and internalizing problems. They describe themselves as emotionally resilient, content, and free from significant anxiety, depression, or emotional turmoil. Consider whether this reflects genuine well-being or possible underreporting.",
    normal: "This individual reports a typical range of emotional experiences, with no significant elevation in internalizing problems. They describe manageable levels of stress and emotional functioning within expected limits. Overall emotional adjustment appears adequate.",
    borderline: "This individual is beginning to report a level of emotional distress that exceeds the typical range. There are emerging signs of internalizing difficulties that may include elements of demoralization, anxiety, or diminished positive emotional experience. Further assessment of specific emotional domains is warranted.",
    elevated: "This individual reports significant emotional and internalizing dysfunction. Their experience is characterized by notable distress across multiple emotional domains, potentially including demoralization, low positive emotions, anxiety, and general emotional suffering. Daily functioning is likely impacted by the breadth and severity of these internalizing problems.",
    veryElevated: "This individual reports pervasive and severe emotional/internalizing dysfunction affecting virtually all areas of psychological functioning. They describe overwhelming distress, profound demoralization, intense anxiety, and an inability to experience positive emotions. This level of emotional dysfunction typically requires immediate clinical attention and may necessitate intensive treatment or crisis intervention."
  },

  "THD": {
    name: "Thought Dysfunction",
    low: "This individual reports no thought disturbance or unusual perceptual experiences. Their thinking appears organized, reality-based, and free from paranoid ideation or aberrant experiences.",
    normal: "This individual reports thought processes and perceptual experiences within normal limits. There is no evidence of significant thought dysfunction, persecutory ideation, or unusual perceptual experiences.",
    borderline: "This individual is beginning to report experiences suggestive of emerging thought dysfunction. There may be mild paranoid ideation, unusual perceptual experiences, or disorganized thinking that warrants further evaluation.",
    elevated: "This individual reports significant thought dysfunction, which may include persecutory beliefs, unusual perceptual experiences, or disorganized thinking. These symptoms suggest a possible thought disorder or psychotic-spectrum condition that warrants thorough diagnostic evaluation and may require psychiatric consultation.",
    veryElevated: "This individual reports severe thought dysfunction characterized by prominent paranoid ideation, aberrant perceptual experiences, and/or significantly disorganized thinking. This pattern is consistent with an active psychotic process or severe personality disorganization. Immediate psychiatric evaluation and consideration of appropriate level of care are recommended."
  },

  "BXD": {
    name: "Behavioral/Externalizing Dysfunction",
    low: "This individual reports a very low level of externalizing behavior. They describe themselves as highly rule-following, risk-averse, and conventional. Consider whether this reflects genuine behavioral restraint or possible underreporting of antisocial or impulsive tendencies.",
    normal: "This individual reports behavioral functioning within normal limits. There is no significant evidence of externalizing problems such as impulsivity, aggression, rule-breaking, or substance misuse. Behavioral self-regulation appears adequate.",
    borderline: "This individual is beginning to report externalizing tendencies that exceed the typical range. There may be emerging problems with impulsivity, rule-following, substance use, or anger management that warrant further assessment.",
    elevated: "This individual reports significant behavioral and externalizing dysfunction. Their history or current functioning likely includes notable problems with impulsivity, antisocial behavior, substance use, aggression, or poor behavioral self-regulation. These patterns may contribute to interpersonal conflict, legal difficulties, or occupational instability.",
    veryElevated: "This individual reports severe behavioral/externalizing dysfunction encompassing multiple domains of acting-out behavior. Their profile suggests pervasive problems with impulse control, antisocial conduct, substance misuse, and aggressive behavior. This level of externalizing dysfunction is associated with significant risk for harm to self or others and typically requires structured intervention."
  },

  // ============================================================
  // RESTRUCTURED CLINICAL (RC) SCALES
  // ============================================================

  "RCd": {
    name: "Demoralization",
    low: "This individual presents with an unusually positive self-assessment and high morale. They report minimal dissatisfaction with their life circumstances and describe themselves as exceptionally capable and optimistic. This may reflect genuine well-being or a reluctance to acknowledge difficulties.",
    normal: "This individual maintains a generally positive outlook on life, experiencing typical ups and downs with adequate coping resources. They see themselves as reasonably competent and effective, believing their future holds positive possibilities.",
    borderline: "This individual is beginning to question their ability to cope effectively with life's demands. There is a growing sense of discouragement, with self-confidence becoming fragile and episodes of self-doubt occurring more frequently.",
    elevated: "This individual experiences significant and pervasive demoralization. They describe helplessness and hopelessness, believing their situation cannot improve. Daily activities feel burdensome and purposeless. Self-perception is characterized by worthlessness and incompetence. They struggle to find meaning or satisfaction in their current circumstances.",
    veryElevated: "This individual experiences profound and debilitating demoralization that permeates every aspect of their psychological functioning. They report an overwhelming sense of helplessness, hopelessness, and worthlessness. Life feels entirely purposeless, and they see no possibility of improvement. This level of demoralization significantly increases risk for suicidal ideation and requires careful safety assessment."
  },

  "RC1": {
    name: "Somatic Complaints",
    low: "This individual reports minimal attention to bodily sensations and physical health. They describe themselves as physically robust and untroubled by somatic concerns. Their identity is not connected to health status.",
    normal: "This individual reports generally good physical health with typical minor ailments. Bodily sensations are noticed but not fixated upon. Identity is not significantly connected to health status, and physical complaints do not dominate their clinical presentation.",
    borderline: "This individual is becoming increasingly focused on bodily sensations and physical health concerns. Multiple physical symptoms may exceed what can be accounted for by medical findings. Medical appointments are becoming more frequent, and health worries are beginning to affect daily functioning.",
    elevated: "This individual's experience is dominated by multiple, persistent somatic complaints affecting various body systems, including pain, weakness, gastrointestinal distress, and neurological complaints that significantly impair daily functioning. Medical explanations may be insufficient to account for the breadth and severity of reported symptoms.",
    veryElevated: "This individual reports an extreme level of somatic preoccupation with pervasive complaints across multiple body systems. Physical symptoms dominate their daily experience to such a degree that normal functioning is severely compromised. The breadth and intensity of somatic complaints far exceed what is typically associated with documented medical conditions and suggest a significant somatization component."
  },

  "RC2": {
    name: "Low Positive Emotions",
    low: "This individual reports an abundance of positive emotional experiences and high levels of engagement with pleasurable activities. They describe themselves as enthusiastic, energetic, and frequently joyful.",
    normal: "This individual describes genuine experiences of joy, enthusiasm, and satisfaction. They can become excited about future events and pursue activities with interest. Emotional range includes frequent positive states, and capacity for pleasure appears intact.",
    borderline: "This individual is experiencing noticeable diminishment in positive emotions. Activities that once brought pleasure now feel less satisfying. They describe having to 'go through the motions' and may be withdrawing from previously enjoyed activities.",
    elevated: "This individual experiences a significant absence of positive emotions. They report difficulty feeling joy, pleasure, or enthusiasm in most contexts. Emotional landscape is characterized by flatness, emptiness, and anhedonia. Social withdrawal and loss of interest in activities are likely prominent features.",
    veryElevated: "This individual experiences a profound and pervasive absence of positive emotions. They are unable to feel joy, pleasure, or enthusiasm in any context. Their emotional world is characterized by persistent emptiness, emotional numbness, and complete anhedonia. They have likely withdrawn from most social and recreational activities, and their capacity for emotional engagement appears severely compromised."
  },

  "RC3": {
    name: "Cynicism",
    low: "This individual reports an unusually trusting and positive view of human nature. They assume the best in others and may have difficulty recognizing when others' motives are not benign. Consider whether this reflects genuine prosociality or naivete.",
    normal: "This individual maintains a balanced view of human nature. They form trusting relationships while maintaining appropriate boundaries and can recognize both altruistic and self-serving behavior in others without excessive suspicion.",
    borderline: "This individual is developing a more guarded and skeptical orientation toward others. They increasingly question others' motives and look for hidden agendas in interpersonal interactions. Trust may be becoming more difficult to extend.",
    elevated: "This individual maintains pervasive cynicism about human nature. They approach virtually all interactions with the expectation of manipulation or betrayal. This cynical worldview likely interferes with the formation and maintenance of close relationships and may contribute to social isolation.",
    veryElevated: "This individual holds deeply entrenched and extreme cynicism about human nature. They believe that virtually everyone operates from selfish, manipulative, or malicious motives. This pervasive distrust poisons all interpersonal relationships and creates a hostile, guarded orientation toward the world that severely limits social functioning and treatment engagement."
  },

  "RC4": {
    name: "Antisocial Behavior",
    low: "This individual reports strong adherence to social norms and conventional behavior. They describe themselves as rule-following, responsible, and unlikely to engage in risk-taking or antisocial conduct.",
    normal: "This individual reports behavioral patterns generally consistent with social norms and expectations. While they may acknowledge minor rule-bending or past indiscretions, there is no significant pattern of antisocial behavior, substance misuse, or conflict with authority.",
    borderline: "This individual is beginning to report behaviors and attitudes suggestive of emerging antisocial tendencies. There may be a history of minor conflicts with authority, rule-breaking, or risk-taking behavior that is becoming more prominent.",
    elevated: "This individual reports a significant pattern of antisocial behavior, which may include a history of legal problems, conflict with authority, dishonesty, irresponsibility, and disregard for social norms. Family conflict, substance misuse, and occupational instability may also be present. These behaviors likely reflect a broader pattern of poor behavioral self-regulation.",
    veryElevated: "This individual reports a pervasive and severe pattern of antisocial behavior spanning multiple life domains. Their history likely includes significant legal involvement, chronic dishonesty, exploitation of others, substance misuse, and flagrant disregard for social norms and the rights of others. Empathy and remorse may be notably absent, and this pattern is consistent with a characterological antisocial orientation."
  },

  "RC6": {
    name: "Ideas of Persecution",
    low: "This individual reports no persecutory beliefs or suspicions of being targeted. They feel safe in their environment and do not believe others are working against them.",
    normal: "This individual reports no significant persecutory ideation. While they may occasionally feel misunderstood or unfairly treated, these experiences are transient and do not constitute a pattern of paranoid thinking.",
    borderline: "This individual is beginning to report persecutory beliefs that exceed normal interpersonal vigilance. They may describe feeling singled out, monitored, or conspired against in ways that are difficult to verify. These emerging paranoid concerns warrant further evaluation.",
    elevated: "This individual reports significant persecutory ideation, including beliefs that others are working against them, monitoring them, or deliberately trying to harm them. These ideas may be approaching delusional intensity and likely interfere with interpersonal relationships, occupational functioning, and treatment engagement.",
    veryElevated: "This individual reports severe and pervasive persecutory ideation. They firmly believe that others are conspiring against them, monitoring their activities, or plotting to cause them harm. These beliefs may have reached delusional proportions and significantly dominate their thinking and behavior. Psychiatric evaluation for psychotic-spectrum pathology is strongly recommended."
  },

  "RC7": {
    name: "Dysfunctional Negative Emotions",
    low: "This individual reports minimal negative emotional experiences. They describe themselves as emotionally calm, unbothered by anxiety, and not prone to irritability or emotional distress.",
    normal: "This individual reports a typical range of negative emotions that are generally proportionate to life circumstances. Anxiety, irritability, and worry are present at manageable levels and do not significantly interfere with daily functioning.",
    borderline: "This individual is beginning to report an elevated level of negative emotional experiences, including anxiety, irritability, and difficulty managing worry. These emotions may be becoming disproportionate to circumstances and are beginning to interfere with functioning.",
    elevated: "This individual reports significant dysfunctional negative emotions, including pervasive anxiety, intrusive worry, irritability, and emotional dysregulation. They describe being easily overwhelmed by negative affect and may report stress-related physical symptoms. These emotional difficulties likely interfere substantially with daily functioning and interpersonal relationships.",
    veryElevated: "This individual reports severe and pervasive dysfunctional negative emotions that dominate their psychological experience. They describe overwhelming anxiety, constant intrusive worry, intense irritability, and an inability to regulate negative affect. Emotional distress is essentially continuous and severely impairs all areas of functioning. This level of negative emotionality may require intensive intervention and possible medication management."
  },

  "RC8": {
    name: "Aberrant Experiences",
    low: "This individual denies unusual sensory or perceptual experiences. Their reported experience of reality is consistent with normative expectations.",
    normal: "This individual reports perceptual and sensory experiences within normal limits. There is no evidence of hallucinations, unusual thought processes, or aberrant perceptual phenomena.",
    borderline: "This individual is beginning to report unusual sensory or perceptual experiences that exceed the normal range. These may include unusual somatic sensations, perceptual distortions, or mildly unusual thought content that warrants further evaluation.",
    elevated: "This individual reports significant aberrant experiences, which may include unusual perceptual phenomena such as hearing voices, experiencing unusual physical sensations, or having thoughts that feel externally controlled or inserted. These experiences suggest possible psychotic-spectrum pathology and warrant comprehensive diagnostic evaluation.",
    veryElevated: "This individual reports severe and pervasive aberrant experiences, including prominent hallucinations, thought disorganization, and unusual perceptual phenomena. These experiences are consistent with an active psychotic process and require immediate psychiatric evaluation. Consideration should be given to the individual's safety and appropriate level of care."
  },

  "RC9": {
    name: "Hypomanic Activation",
    low: "This individual reports low levels of energy, activation, and risk-taking. They describe themselves as cautious, low-key, and not prone to excitability or impulsive behavior.",
    normal: "This individual reports typical levels of energy, activation, and engagement with activities. There is no evidence of pathological hypomanic features such as grandiosity, pressured speech, or reckless behavior. Energy levels appear appropriate and well-regulated.",
    borderline: "This individual is beginning to report elevated levels of activation and energy that exceed the typical range. There may be emerging features such as increased risk-taking, mild grandiosity, or difficulty slowing down that warrant monitoring.",
    elevated: "This individual reports significant hypomanic activation, including elevated energy, grandiosity, reduced need for sleep, racing thoughts, and increased risk-taking behavior. They may describe themselves as unusually creative, productive, or important. Impaired judgment and impulsive decision-making may be creating problems in multiple life domains.",
    veryElevated: "This individual reports severe hypomanic or manic activation characterized by extreme energy, pronounced grandiosity, markedly reduced need for sleep, pressured speech, flight of ideas, and reckless behavior. Judgment is likely significantly impaired, and risk-taking may pose danger to self or others. Immediate psychiatric evaluation for a bipolar-spectrum disorder is recommended."
  },

  // ============================================================
  // SOMATIC/COGNITIVE SPECIFIC PROBLEM SCALES
  // ============================================================

  "MLS": {
    name: "Malaise",
    low: "This individual denies physical fatigue, weakness, or general malaise. They describe themselves as physically energetic and vital.",
    normal: "This individual reports typical levels of physical energy and vitality. While they may experience occasional fatigue, it does not represent a persistent or concerning pattern.",
    borderline: "This individual is beginning to report increased feelings of physical debilitation, fatigue, and general malaise that exceed normal levels. These complaints may reflect emerging health problems, psychological distress manifesting somatically, or the early stages of a depressive process.",
    elevated: "This individual reports significant malaise, including persistent fatigue, physical weakness, and a general sense of feeling unwell. These symptoms impair daily functioning and may contribute to reduced activity levels, social withdrawal, and diminished quality of life.",
    veryElevated: "This individual reports severe and pervasive malaise characterized by debilitating fatigue, profound physical weakness, and a constant sense of being unwell. Normal daily activities are extremely difficult, and this individual may be functionally incapacitated by the severity of their malaise."
  },

  "GIC": {
    name: "Gastrointestinal Complaints",
    low: "This individual denies gastrointestinal symptoms. Their digestive functioning is described as unremarkable.",
    normal: "This individual reports gastrointestinal functioning within normal limits, with no significant complaints of nausea, vomiting, or digestive distress.",
    borderline: "This individual is beginning to report gastrointestinal symptoms that exceed typical levels. Complaints may include recurring nausea, stomach upset, or digestive discomfort that is becoming a noticeable concern.",
    elevated: "This individual reports significant gastrointestinal complaints including persistent nausea, stomach pain, and digestive distress. These symptoms may or may not have a clear medical etiology and are impacting daily comfort and functioning.",
    veryElevated: "This individual reports severe and persistent gastrointestinal distress that dominates their physical experience. The intensity and frequency of these complaints significantly impair daily functioning and quality of life. Comprehensive medical evaluation alongside psychological assessment is recommended."
  },

  "HPC": {
    name: "Head Pain Complaints",
    low: "This individual denies significant headaches or head pain. This symptom domain is not a concern.",
    normal: "This individual reports headaches and head pain within the normal range of experience. Occasional headaches may occur but are not a significant clinical concern.",
    borderline: "This individual is beginning to report head pain complaints that exceed typical levels. Headaches may be occurring with increased frequency or intensity and are becoming a more prominent concern.",
    elevated: "This individual reports significant and persistent head pain complaints, including frequent or severe headaches that interfere with daily functioning. These complaints may be associated with stress, tension, or may require further neurological evaluation.",
    veryElevated: "This individual reports severe, persistent head pain that substantially impairs daily functioning. The frequency and intensity of head pain complaints are extreme and dominate their symptom presentation. Comprehensive neurological evaluation is recommended alongside consideration of psychogenic factors."
  },

  "NUC": {
    name: "Neurological Complaints",
    low: "This individual denies neurological symptoms such as dizziness, numbness, weakness, or sensory disturbances.",
    normal: "This individual reports neurological functioning within normal limits, with no significant complaints of dizziness, numbness, tingling, or sensory-motor disturbances.",
    borderline: "This individual is beginning to report neurological symptoms that exceed the typical range. Complaints may include occasional dizziness, numbness, or sensory disturbances that warrant further evaluation.",
    elevated: "This individual reports significant neurological complaints, including persistent dizziness, numbness, weakness, or sensory disturbances that interfere with daily functioning. These symptoms may or may not have a demonstrable neurological basis and warrant comprehensive neurological evaluation.",
    veryElevated: "This individual reports severe and pervasive neurological complaints affecting multiple sensory and motor systems. The breadth and severity of these complaints may exceed what is typically associated with documented neurological conditions, raising the possibility of conversion-type or functional neurological symptoms alongside the need for thorough neurological workup."
  },

  "COG": {
    name: "Cognitive Complaints",
    low: "This individual denies cognitive difficulties. They report that their memory, concentration, and mental clarity are functioning well.",
    normal: "This individual reports cognitive functioning within normal limits. While they may acknowledge occasional forgetfulness or lapses in concentration, these are within the expected range and do not represent a significant concern.",
    borderline: "This individual is beginning to report cognitive difficulties that exceed the typical range. Complaints may include noticeable problems with memory, concentration, or mental clarity that are becoming a source of concern and may be starting to affect daily functioning.",
    elevated: "This individual reports significant cognitive complaints, including persistent problems with memory, concentration, attention, and mental clarity. These difficulties interfere with occupational, academic, or daily functioning and may reflect neurological, psychological, or factitious etiologies that warrant further evaluation.",
    veryElevated: "This individual reports severe and pervasive cognitive dysfunction affecting memory, concentration, attention, and executive functioning. The degree of reported cognitive impairment is extreme and significantly impairs all areas of daily functioning. Comprehensive neuropsychological evaluation is recommended, with attention to the possibility of cognitive symptom exaggeration given the validity scale context."
  },

  // ============================================================
  // INTERNALIZING SPECIFIC PROBLEM SCALES
  // ============================================================

  "SUI": {
    name: "Suicidal/Death Ideation",
    low: "This individual denies suicidal thoughts, death wishes, or self-harm ideation. They report wanting to live and do not endorse items related to suicidality.",
    normal: "This individual does not report significant suicidal ideation or preoccupation with death. There is no indication from this scale that the individual is at elevated risk for self-harm based on their test responses.",
    borderline: "CLINICAL ALERT: This individual has endorsed items suggestive of emerging suicidal or death ideation. Even at this borderline level of elevation, IMMEDIATE FOLLOW-UP IS REQUIRED. A thorough suicide risk assessment should be conducted, including evaluation of suicidal ideation (frequency, intensity, duration), intent, plan, means access, and protective factors. Safety planning should be initiated regardless of the assessed risk level.",
    elevated: "CLINICAL ALERT - ELEVATED SUICIDE RISK: This individual has endorsed multiple items indicative of significant suicidal ideation and/or preoccupation with death. IMMEDIATE AND COMPREHENSIVE SUICIDE RISK ASSESSMENT IS REQUIRED. The clinician must evaluate current ideation, intent, plan specificity, means access, prior attempts, and risk and protective factors. A safety plan must be developed, and appropriate level of care must be determined. Consultation with a supervisor or colleague is strongly recommended.",
    veryElevated: "CRITICAL CLINICAL ALERT - SEVERE SUICIDE RISK: This individual has endorsed a high number of items related to suicidal ideation and death wishes, indicating SEVERE AND IMMINENT RISK. IMMEDIATE CRISIS INTERVENTION IS REQUIRED. Do not leave this individual unattended. Conduct an emergency suicide risk assessment, implement immediate safety measures, and determine whether emergency psychiatric hospitalization is warranted. Contact emergency services if there is imminent danger. Document all risk assessment findings and clinical decisions thoroughly."
  },

  "HLP": {
    name: "Helplessness/Hopelessness",
    low: "This individual reports a strong sense of personal agency and optimism. They believe they can influence their circumstances and that the future holds positive possibilities.",
    normal: "This individual maintains a generally hopeful outlook and reasonable sense of personal efficacy. While acknowledging life's challenges, they believe in their ability to cope and see potential for positive outcomes.",
    borderline: "This individual is beginning to report feelings of helplessness and hopelessness that exceed the typical range. A growing sense of powerlessness and pessimism about the future is emerging, which may reflect a depressive cognitive style.",
    elevated: "This individual reports significant helplessness and hopelessness. They believe they are unable to change their circumstances and see the future as bleak. This cognitive pattern is strongly associated with depression and may contribute to passive coping, treatment nonadherence, and suicidal risk.",
    veryElevated: "This individual reports profound helplessness and hopelessness, firmly believing they are powerless to change their situation and that nothing will ever improve. This extreme hopelessness is one of the strongest predictors of suicidal behavior and requires careful safety assessment and immediate clinical attention."
  },

  "SFD": {
    name: "Self-Doubt",
    low: "This individual reports high self-confidence and a positive self-image. They describe themselves as competent and self-assured, with little tendency toward self-criticism.",
    normal: "This individual maintains a generally positive self-concept with typical levels of self-doubt. They can acknowledge personal limitations without these becoming sources of persistent distress or functional impairment.",
    borderline: "This individual is beginning to report increased self-doubt and negative self-evaluation. Confidence is becoming fragile, and comparisons with others are increasingly unfavorable. Self-critical thoughts are becoming more frequent.",
    elevated: "This individual reports significant self-doubt and negative self-evaluation. They describe themselves as inferior to others, lacking in competence, and undeserving of success. This pervasive self-doubt likely interferes with assertiveness, goal-pursuit, and interpersonal functioning.",
    veryElevated: "This individual reports extreme and pervasive self-doubt, viewing themselves as fundamentally inadequate and inferior. Their self-concept is dominated by feelings of worthlessness and incompetence. This level of self-doubt is debilitating and likely contributes to avoidance, passivity, and severe interpersonal difficulties."
  },

  "NFC": {
    name: "Inefficacy",
    low: "This individual reports a strong sense of personal efficacy and decisiveness. They believe they can handle challenges and make effective decisions.",
    normal: "This individual reports a generally adequate sense of personal efficacy. They feel capable of handling most situations, making decisions, and accomplishing tasks, even if they occasionally experience uncertainty.",
    borderline: "This individual is beginning to report a diminished sense of personal efficacy. Decision-making is becoming more difficult, and confidence in their ability to handle life's demands is waning.",
    elevated: "This individual reports significant feelings of inefficacy, including difficulty making decisions, a sense of being unable to handle responsibilities, and a belief that they cannot accomplish meaningful goals. This may contribute to passivity, procrastination, and dependence on others.",
    veryElevated: "This individual reports profound inefficacy, believing they are fundamentally incapable of making decisions or accomplishing anything meaningful. They feel paralyzed by indecision and overwhelmed by even minor responsibilities. This degree of perceived inefficacy is severely debilitating and is associated with significant functional impairment."
  },

  "STW": {
    name: "Stress/Worry",
    low: "This individual reports minimal stress and worry. They describe themselves as relaxed, unburdened, and not prone to anxious rumination.",
    normal: "This individual reports typical levels of stress and worry that are proportionate to life circumstances. They can manage worries without becoming overwhelmed and maintain adequate functioning despite everyday pressures.",
    borderline: "This individual is beginning to report stress and worry that exceed the typical range. Preoccupation with problems may be increasing, and difficulty 'turning off' worrying thoughts is becoming more noticeable.",
    elevated: "This individual reports significant stress and persistent worry that interfere with daily functioning. They describe being preoccupied with problems, unable to relax, and constantly anticipating negative outcomes. Sleep disturbance and difficulty concentrating may accompany this chronic worry state.",
    veryElevated: "This individual reports severe, unrelenting stress and worry that pervade their daily experience. They are unable to stop worrying, feel constantly overwhelmed by life demands, and experience chronic tension that significantly impairs all areas of functioning. This pattern is consistent with a generalized anxiety presentation requiring targeted intervention."
  },

  "AXY": {
    name: "Anxiety",
    low: "This individual denies significant anxiety symptoms. They report feeling calm, safe, and free from excessive fear or apprehension.",
    normal: "This individual reports anxiety levels within the normal range. Occasional anxiety is acknowledged but does not constitute a pattern of clinically significant distress or functional impairment.",
    borderline: "This individual is beginning to report anxiety symptoms that exceed the typical range. Experiences may include pervasive apprehension, nightmares, intrusive thoughts, or a general sense of dread that is becoming more prominent.",
    elevated: "This individual reports significant anxiety characterized by pervasive fear, apprehension, and hyperarousal. They may describe nightmares, intrusive anxiety-related thoughts, flashbacks, or a persistent sense of impending doom. These symptoms likely impair concentration, sleep, and daily functioning.",
    veryElevated: "This individual reports severe, debilitating anxiety characterized by constant terror, pervasive hyperarousal, frequent nightmares, and intrusive thoughts or flashbacks. The intensity of anxiety symptoms is extreme and profoundly impairs all areas of functioning. Trauma-related pathology should be carefully evaluated, and intensive anxiety-focused treatment is indicated."
  },

  "ANP": {
    name: "Anger Proneness",
    low: "This individual reports minimal anger and irritability. They describe themselves as patient, tolerant, and not easily provoked.",
    normal: "This individual reports typical levels of anger and irritability that are generally proportionate to circumstances. They can become angry when warranted but do not describe a pattern of excessive or disproportionate anger.",
    borderline: "This individual is beginning to report increased anger proneness. They may describe becoming frustrated or irritated more easily than usual and finding it harder to maintain patience in provocative situations.",
    elevated: "This individual reports significant anger proneness, including frequent irritability, a low frustration threshold, and difficulty controlling angry reactions. They may describe being easily provoked, having explosive outbursts, or carrying persistent resentment. These anger problems likely create difficulties in interpersonal relationships and occupational settings.",
    veryElevated: "This individual reports severe and pervasive anger that dominates their emotional experience. They describe nearly constant irritability, explosive outbursts, and intense hostility that significantly impairs all interpersonal relationships and poses potential risk for aggressive behavior. Anger management intervention is strongly indicated."
  },

  "BRF": {
    name: "Behavior-Restricting Fears",
    low: "This individual denies fears that limit their behavior or daily activities. They describe themselves as comfortable with a wide range of situations and environments.",
    normal: "This individual reports fears and avoidance behaviors within the normal range. While specific mild fears may exist, they do not significantly restrict daily activities or functioning.",
    borderline: "This individual is beginning to report fears that are starting to restrict their daily behavior and activities. Avoidance of certain situations or environments is becoming more noticeable and may be limiting their engagement with normal activities.",
    elevated: "This individual reports significant behavior-restricting fears. Specific phobias or generalized fearfulness leads to substantial avoidance of situations, places, or activities, meaningfully limiting their daily functioning and quality of life.",
    veryElevated: "This individual reports severe, pervasive fears that profoundly restrict their behavior and daily activities. Avoidance has become a dominant coping strategy, severely limiting their engagement with work, social activities, and routine tasks. Their world has become markedly constricted by fear, and exposure-based treatment is strongly indicated."
  },

  "MSF": {
    name: "Multiple Specific Fears",
    low: "This individual denies specific fears of common objects or situations. They report comfort with animals, heights, natural phenomena, and other commonly feared stimuli.",
    normal: "This individual reports specific fears within the normative range. While they may acknowledge mild discomfort with certain stimuli, these fears do not constitute clinical phobias or cause significant distress.",
    borderline: "This individual is beginning to report multiple specific fears that exceed the typical range. Fears of specific objects, animals, or situations may be becoming more numerous or intense.",
    elevated: "This individual reports multiple specific fears across various categories, potentially including animals, blood/injury, natural environments, and situational triggers. The breadth of feared stimuli suggests a pervasive fearfulness that likely limits daily activities and may reflect an underlying anxiety diathesis.",
    veryElevated: "This individual reports an extensive array of specific fears affecting many categories of stimuli. Their pervasive fearfulness severely restricts their daily functioning and represents a significant clinical concern. The breadth of phobic responses may reflect a generalized fear sensitivity requiring comprehensive anxiety treatment."
  },

  // ============================================================
  // EXTERNALIZING SPECIFIC PROBLEM SCALES
  // ============================================================

  "JCP": {
    name: "Juvenile Conduct Problems",
    low: "This individual denies a history of behavioral problems during childhood or adolescence. They describe their developmental history as conforming and uneventful with respect to conduct.",
    normal: "This individual reports a childhood and adolescent behavioral history within normal limits. While minor incidents may be acknowledged, there is no significant pattern of conduct problems, rule-breaking, or antisocial behavior during development.",
    borderline: "This individual is beginning to report a history of juvenile conduct problems that exceeds the typical range. There may be acknowledgment of early behavioral issues such as school disciplinary actions, stealing, or conflict with authority figures.",
    elevated: "This individual reports a significant history of juvenile conduct problems, including early antisocial behavior, school disciplinary issues, stealing, running away, or involvement with the juvenile justice system. This developmental history is associated with increased risk for persistent antisocial behavior and personality pathology in adulthood.",
    veryElevated: "This individual reports a severe and pervasive history of juvenile conduct problems beginning early in development. Their childhood and adolescent history is characterized by persistent rule-breaking, aggression, stealing, truancy, and possible juvenile justice involvement. This pattern is strongly associated with conduct disorder and increased risk for antisocial personality features in adulthood."
  },

  "SUB": {
    name: "Substance Abuse",
    low: "This individual denies problems related to alcohol or substance use. They report either abstinence or controlled, nonproblematic use.",
    normal: "This individual reports substance use patterns within social norms, with no endorsement of items suggesting substance-related problems, consequences, or loss of control.",
    borderline: "This individual is beginning to report substance use patterns or consequences that exceed the typical range. There may be emerging problems with alcohol or drug use, including occasional loss of control, interpersonal conflicts related to use, or increasing frequency of use.",
    elevated: "This individual reports significant substance abuse problems, including past or current misuse of alcohol or drugs. They may acknowledge loss of control over use, negative consequences in multiple life domains, and possibly prior treatment for substance-related issues. Comprehensive substance abuse assessment is warranted.",
    veryElevated: "This individual reports severe substance abuse problems characterized by significant loss of control, pervasive negative consequences, and possible physiological dependence. Substance use has likely caused substantial impairment across social, occupational, and health domains. Immediate substance abuse assessment and referral for appropriate level of treatment are strongly indicated."
  },

  "AGG": {
    name: "Aggression",
    low: "This individual denies aggressive impulses or behaviors. They describe themselves as gentle, nonconfrontational, and averse to physical violence.",
    normal: "This individual reports aggressive tendencies within normal limits. While they may acknowledge occasional angry feelings, they do not describe a pattern of physically aggressive or intimidating behavior.",
    borderline: "This individual is beginning to report aggressive tendencies that exceed the typical range. There may be an increasing history of intimidating behavior, physical altercations, or enjoyment of violent content that warrants monitoring.",
    elevated: "This individual reports significant aggressive tendencies, including a history of physical confrontations, intimidating behavior, and possible enjoyment of violence. They may describe themselves as physically imposing and willing to use force to resolve conflicts. This pattern poses risk for harm to others and should be carefully evaluated.",
    veryElevated: "This individual reports severe aggressive tendencies, including frequent physical confrontations, instrumental use of violence, and possible enjoyment of hurting others. This level of aggression poses significant risk for harm to others and requires careful risk assessment, safety planning for potential victims, and may necessitate referral for specialized anger management or violence prevention programs."
  },

  "ACT": {
    name: "Activation",
    low: "This individual reports low levels of energy and behavioral activation. They describe themselves as deliberate, low-energy, and not prone to impulsive or excited behavior.",
    normal: "This individual reports typical levels of energy and behavioral activation. Activity levels appear appropriate and well-regulated, without evidence of pathological hyperactivity or impulsivity.",
    borderline: "This individual is beginning to report elevated levels of activation and energy that exceed the typical range. There may be emerging restlessness, difficulty slowing down, or increased impulsivity.",
    elevated: "This individual reports significant behavioral activation, including heightened energy, restlessness, impulsivity, and difficulty inhibiting behavior. They may describe feeling 'wound up,' having difficulty sitting still, and acting without adequate forethought. This pattern may reflect hypomanic features or ADHD-related symptoms.",
    veryElevated: "This individual reports severe behavioral activation characterized by extreme restlessness, pronounced impulsivity, and an inability to regulate their activity level. Their behavior may appear frantic or driven, with significant risk for impulsive decisions with negative consequences. Evaluation for bipolar-spectrum or attention-related disorders is recommended."
  },

  // ============================================================
  // INTERPERSONAL SPECIFIC PROBLEM SCALES
  // ============================================================

  "FML": {
    name: "Family Problems",
    low: "This individual reports a harmonious and supportive family environment. They describe positive relationships with family members and minimal family conflict.",
    normal: "This individual reports family relationships within the typical range. While acknowledging occasional disagreements or tensions, they describe generally functional family dynamics without significant discord.",
    borderline: "This individual is beginning to report family problems that exceed the typical range. Increasing conflict, communication difficulties, or feelings of alienation within the family system may be emerging.",
    elevated: "This individual reports significant family problems, including persistent conflict, poor communication, feelings of alienation, and possible resentment toward family members. Family relationships are a notable source of distress and may contribute to broader psychological difficulties.",
    veryElevated: "This individual reports severe and pervasive family dysfunction characterized by intense conflict, deep-seated resentment, emotional or physical abuse, and fundamental breakdown in family relationships. Family problems are a dominant source of distress and likely contribute significantly to overall psychological dysfunction. Family therapy or mediation may be indicated alongside individual treatment."
  },

  "IPP": {
    name: "Interpersonal Passivity",
    low: "This individual reports being assertive and direct in interpersonal interactions. They are comfortable expressing their needs, setting boundaries, and advocating for themselves.",
    normal: "This individual reports interpersonal assertiveness within the typical range. They can generally express their needs and opinions while maintaining cooperative relationships, finding a balance between assertiveness and accommodation.",
    borderline: "This individual is beginning to report a pattern of interpersonal passivity that exceeds the typical range. They may describe increasing difficulty asserting themselves, expressing disagreement, or advocating for their own needs.",
    elevated: "This individual reports significant interpersonal passivity, including chronic difficulty asserting themselves, expressing disagreement, or setting boundaries. They tend to defer to others, avoid confrontation at all costs, and may allow themselves to be taken advantage of. This passive orientation likely contributes to resentment, unexpressed frustration, and interpersonal difficulties.",
    veryElevated: "This individual reports extreme interpersonal passivity, being virtually unable to assert themselves or express their needs in any interpersonal context. They describe submitting to others' demands without resistance, being unable to say no, and chronically suppressing their own needs. This severe passivity likely results in exploitation, accumulated resentment, and significant impairment in relationships and self-efficacy."
  },

  "SAV": {
    name: "Social Avoidance",
    low: "This individual reports strong preference for social engagement and discomfort with solitude. They actively seek out social situations and describe themselves as highly sociable.",
    normal: "This individual reports a comfortable balance between social engagement and solitary activity. They enjoy social interactions without significant avoidance and can participate in group activities without marked discomfort.",
    borderline: "This individual is beginning to report social avoidance that exceeds the typical range. There is an increasing preference for solitary activities and growing discomfort with social situations that may be limiting their social engagement.",
    elevated: "This individual reports significant social avoidance, including a strong preference for being alone and active avoidance of social situations. They may describe feeling overwhelmed, uncomfortable, or drained by social interactions. This pattern likely limits their social network and may contribute to isolation and loneliness.",
    veryElevated: "This individual reports severe social avoidance, actively avoiding virtually all social contact and experiencing marked distress when social interaction is unavoidable. They have likely become significantly isolated, with few or no meaningful social connections. This degree of social avoidance requires clinical attention and may respond to graduated exposure-based interventions."
  },

  "SHY": {
    name: "Shyness",
    low: "This individual reports minimal social anxiety or self-consciousness. They describe themselves as comfortable in social situations and at ease around others, including strangers.",
    normal: "This individual reports typical levels of shyness and social self-consciousness. While they may feel mildly uncomfortable in some novel social situations, this does not represent a significant pattern of distress or avoidance.",
    borderline: "This individual is beginning to report shyness and social anxiety that exceed the typical range. They may describe increasing self-consciousness, embarrassment, and discomfort in social situations, particularly with unfamiliar people.",
    elevated: "This individual reports significant shyness, including pronounced social anxiety, self-consciousness, and fear of negative evaluation by others. Social situations provoke notable distress, and avoidance of social encounters may be increasing. This pattern is consistent with social anxiety and likely impairs social and occupational functioning.",
    veryElevated: "This individual reports severe shyness and social anxiety that pervade their interpersonal experience. They describe intense self-consciousness, overwhelming fear of negative evaluation, and profound discomfort in virtually all social situations. This level of social anxiety is debilitating and consistent with social anxiety disorder requiring targeted treatment."
  },

  "DSF": {
    name: "Disaffiliativeness",
    low: "This individual reports a strong desire for social connection and finds being with others rewarding. They value interpersonal relationships and seek closeness with others.",
    normal: "This individual reports a typical desire for social connection. They value relationships with others and find social interactions generally rewarding, maintaining a healthy balance of independence and affiliation.",
    borderline: "This individual is beginning to report a diminished desire for social connection that exceeds the typical range. There may be an increasing preference for isolation not driven by anxiety but by genuine disinterest in others.",
    elevated: "This individual reports significant disaffiliativeness, characterized by a genuine lack of interest in social relationships. Unlike social avoidance driven by anxiety, this pattern reflects a fundamental disinterest in human connection. They may describe finding others boring, unnecessary, or burdensome. This orientation is associated with schizoid-spectrum personality features.",
    veryElevated: "This individual reports extreme disaffiliativeness, with virtually no desire for human connection or social interaction. They describe a profound and pervasive disinterest in others that goes beyond introversion or shyness. This pattern is strongly associated with schizoid personality features and represents a fundamental orientation away from interpersonal engagement. Treatment engagement may be challenging given this individual's lack of interest in relationships."
  },

  // ============================================================
  // INTEREST SCALES
  // ============================================================

  "AES": {
    name: "Aesthetic-Literary Interests",
    low: "This individual reports minimal interest in aesthetic, literary, or artistic pursuits. They describe themselves as practically oriented and uninterested in creative or cultural activities.",
    normal: "This individual reports a typical level of interest in aesthetic and literary pursuits. They may enjoy some artistic or cultural activities without these being a dominant feature of their personality.",
    borderline: "This individual reports an above-average interest in aesthetic and literary pursuits. Creative and cultural activities may be becoming an increasingly important part of their identity and daily life.",
    elevated: "This individual reports strong interest in aesthetic and literary pursuits, including literature, art, music, and cultural activities. These interests are a significant part of their identity and self-expression.",
    veryElevated: "This individual reports an extremely strong orientation toward aesthetic and literary interests. Creative and cultural pursuits dominate their interests and may be central to their sense of identity. This pattern is noteworthy primarily in the context of overall profile interpretation."
  },

  "MEC": {
    name: "Mechanical-Physical Interests",
    low: "This individual reports minimal interest in mechanical, physical, or outdoor activities. They describe themselves as uninterested in hands-on work, sports, or physically demanding pursuits.",
    normal: "This individual reports a typical level of interest in mechanical and physical activities. They may enjoy some outdoor, athletic, or hands-on activities without these dominating their interests.",
    borderline: "This individual reports an above-average interest in mechanical and physical activities. Hands-on work, athletics, or outdoor pursuits may be an increasingly prominent part of their interests.",
    elevated: "This individual reports strong interest in mechanical and physical pursuits, including hands-on work, athletics, outdoor activities, and physically demanding tasks. These interests are a significant part of their identity.",
    veryElevated: "This individual reports an extremely strong orientation toward mechanical and physical interests. Hands-on, athletic, and outdoor activities dominate their interests and may be central to their self-concept. This pattern is noteworthy primarily in the context of overall profile interpretation."
  },

  // ============================================================
  // PSY-5 (PERSONALITY PSYCHOPATHOLOGY FIVE) SCALES
  // ============================================================

  "AGGR-r": {
    name: "Aggressiveness-Revised",
    low: "This individual reports very low levels of interpersonal aggressiveness. They describe themselves as meek, unassertive, and conflict-avoidant, preferring to yield to others rather than assert themselves.",
    normal: "This individual reports typical levels of interpersonal assertiveness. They can advocate for their needs and express disagreement when appropriate without being hostile, domineering, or excessively aggressive.",
    borderline: "This individual is beginning to report elevated levels of interpersonal aggressiveness. They may be becoming more domineering, forceful, or intimidating in their interactions with others.",
    elevated: "This individual reports significant interpersonal aggressiveness, characterized by domineering behavior, grandiosity, and a willingness to use intimidation or force to achieve their goals. They may describe themselves as powerful and in control, with little empathy for those they see as weaker.",
    veryElevated: "This individual reports extreme interpersonal aggressiveness, including pronounced grandiosity, domineering and intimidating behavior, and instrumental use of aggression. They view others as tools or obstacles and may lack empathy entirely. This pattern is associated with narcissistic and antisocial personality features and poses significant risk for interpersonal harm."
  },

  "PSYC-r": {
    name: "Psychoticism-Revised",
    low: "This individual reports no unusual perceptual experiences, persecutory beliefs, or disorganized thinking. Their experience of reality is firmly grounded and conventional.",
    normal: "This individual reports thinking and perceptual experiences within the normal range. There is no evidence of psychotic-spectrum symptoms, unusual beliefs, or aberrant perceptual experiences.",
    borderline: "This individual is beginning to report unusual experiences and beliefs that exceed the typical range. There may be emerging features such as unusual perceptions, paranoid ideation, or mildly disorganized thinking that warrant further evaluation.",
    elevated: "This individual reports significant psychotic-spectrum experiences, including unusual perceptual phenomena, persecutory beliefs, and/or disorganized thinking. These symptoms may reflect a psychotic disorder, schizotypal personality features, or severe stress-related perceptual disturbances. Comprehensive diagnostic evaluation is recommended.",
    veryElevated: "This individual reports severe psychotic-spectrum experiences, including prominent hallucinations, delusional beliefs, and markedly disorganized thinking. The breadth and severity of these experiences are consistent with an active psychotic process requiring immediate psychiatric evaluation and appropriate pharmacological intervention."
  },

  "DISC-r": {
    name: "Disconstraint-Revised",
    low: "This individual reports high levels of behavioral constraint, risk aversion, and adherence to rules and conventions. They describe themselves as cautious, deliberate, and traditional.",
    normal: "This individual reports typical levels of behavioral constraint. They balance spontaneity with appropriate caution and can follow rules while also engaging in some degree of novelty-seeking. Impulse control appears adequate.",
    borderline: "This individual is beginning to report a level of disconstraint that exceeds the typical range. There may be increasing impulsivity, risk-taking, or disregard for rules and conventions.",
    elevated: "This individual reports significant disconstraint, including impulsivity, risk-taking, sensation-seeking, and disregard for rules and social conventions. They may describe themselves as thrill-seeking and unconcerned with consequences. This pattern is associated with substance abuse risk and antisocial behavior.",
    veryElevated: "This individual reports extreme disconstraint characterized by pervasive impulsivity, reckless risk-taking, and flagrant disregard for rules and consequences. They seek intense stimulation and show little concern for the impact of their behavior on others. This pattern poses significant risk for substance abuse, legal problems, and harm to self or others."
  },

  "NEGE-r": {
    name: "Negative Emotionality/Neuroticism-Revised",
    low: "This individual reports very low levels of negative emotionality. They describe themselves as emotionally stable, rarely anxious, and untroubled by negative affect.",
    normal: "This individual reports typical levels of negative emotionality. They experience a normal range of negative emotions that are generally proportionate to circumstances and managed effectively.",
    borderline: "This individual is beginning to report elevated negative emotionality. Anxiety, worry, self-criticism, and negative affect may be becoming more prominent and disproportionate to circumstances.",
    elevated: "This individual reports significant negative emotionality, including chronic anxiety, pervasive worry, self-criticism, guilt, and irritability. They describe being easily overwhelmed by negative affect and may exhibit a ruminative cognitive style. This trait-level vulnerability to negative emotions likely affects multiple areas of functioning.",
    veryElevated: "This individual reports severe and pervasive negative emotionality that dominates their psychological experience. They describe constant anxiety, unrelenting worry, intense self-criticism, and overwhelming negative affect. This extreme trait-level vulnerability to negative emotions is profoundly disabling and is associated with chronic distress across all areas of functioning."
  },

  "INTR-r": {
    name: "Introversion/Low Positive Emotionality-Revised",
    low: "This individual reports high levels of positive emotionality, social engagement, and capacity for pleasure. They describe themselves as energetic, sociable, and capable of experiencing joy.",
    normal: "This individual reports a typical balance of introversion and extraversion. They enjoy social activities while also valuing time alone, and they experience a normal range of positive emotions.",
    borderline: "This individual is beginning to report elevated introversion and diminished positive emotionality. Social engagement may be decreasing, and the capacity for pleasure and enthusiasm may be waning.",
    elevated: "This individual reports significant introversion and low positive emotionality. They describe diminished capacity for joy and pleasure, social withdrawal, and a flat or constricted emotional range. They have little energy or motivation for social engagement and may be experiencing anhedonia. This pattern is associated with depressive and schizoid features.",
    veryElevated: "This individual reports extreme introversion and profoundly diminished positive emotionality. They describe near-complete social withdrawal, inability to experience pleasure or joy, emotional flatness, and pervasive apathy. Their world has become markedly constricted, and they show little interest in or capacity for engagement with others or activities. This pattern may reflect severe depression, schizoid personality features, or both."
  }
};

// ============================================================
// INTERPRETATION ENGINE
// ============================================================

/**
 * Returns the interpretation level key based on T-score.
 * @param {number} tScore - The T-score value
 * @returns {string} One of: "low", "normal", "borderline", "elevated", "veryElevated"
 */
function getInterpretationLevel(tScore) {
  if (tScore < 39) return "low";
  if (tScore <= 64) return "normal";
  if (tScore === 65) return "borderline";
  if (tScore <= 79) return "elevated";
  return "veryElevated";
}

/**
 * Returns a clinical narrative interpretation for a given scale and T-score.
 * @param {string} scaleId - The scale identifier (e.g., "RCd", "SUI", "VRIN-r")
 * @param {number} tScore - The T-score value
 * @returns {string} Clinical narrative paragraph, or a fallback message if scale not found
 */
function getNarrativeInterpretation(scaleId, tScore) {
  const scale = scaleInterpretations[scaleId];
  if (!scale) {
    return `No interpretation available for scale "${scaleId}".`;
  }

  const level = getInterpretationLevel(tScore);
  const narrative = scale[level];

  if (!narrative) {
    return `No interpretation available for scale "${scaleId}" at T-score ${tScore}.`;
  }

  return narrative;
}

/**
 * Returns the scale name for a given scale ID.
 * @param {string} scaleId - The scale identifier
 * @returns {string} Human-readable scale name
 */
function getScaleName(scaleId) {
  const scale = scaleInterpretations[scaleId];
  return scale ? scale.name : scaleId;
}

/**
 * Generates a complete clinical narrative report organized by scale groups.
 *
 * @param {Object} tScores - Map of scaleId to T-score (e.g., { "RCd": 72, "RC1": 55, ... })
 * @param {Object} [rawScores] - Optional map of scaleId to raw score
 * @param {number} [cns] - Optional Cannot Say (?) count
 * @returns {string} Complete narrative report as formatted text
 */
function generateNarrativeReport(tScores, rawScores, cns) {
  if (!tScores || typeof tScores !== "object") {
    return "Error: T-scores object is required to generate a narrative report.";
  }

  const sections = [
    {
      title: "PROTOCOL VALIDITY",
      description: "Assessment of response style and protocol interpretability.",
      scales: ["VRIN-r", "TRIN-r", "F-r", "Fp-r", "Fs", "FBS-r", "RBS", "L-r", "K-r"]
    },
    {
      title: "HIGHER-ORDER SCALES",
      description: "Broad-band measures of the major domains of psychopathology.",
      scales: ["EID", "THD", "BXD"]
    },
    {
      title: "RESTRUCTURED CLINICAL SCALES",
      description: "Core clinical constructs representing the major dimensions of psychopathology.",
      scales: ["RCd", "RC1", "RC2", "RC3", "RC4", "RC6", "RC7", "RC8", "RC9"]
    },
    {
      title: "SOMATIC/COGNITIVE SCALES",
      description: "Specific somatic and cognitive problem areas.",
      scales: ["MLS", "GIC", "HPC", "NUC", "COG"]
    },
    {
      title: "INTERNALIZING SCALES",
      description: "Specific internalizing problem areas including mood, anxiety, and self-concept.",
      scales: ["SUI", "HLP", "SFD", "NFC", "STW", "AXY", "ANP", "BRF", "MSF"]
    },
    {
      title: "EXTERNALIZING SCALES",
      description: "Specific externalizing problem areas including behavioral dyscontrol.",
      scales: ["JCP", "SUB", "AGG", "ACT"]
    },
    {
      title: "INTERPERSONAL SCALES",
      description: "Interpersonal functioning and relationship patterns.",
      scales: ["FML", "IPP", "SAV", "SHY", "DSF"]
    },
    {
      title: "INTEREST SCALES",
      description: "Broad interest patterns.",
      scales: ["AES", "MEC"]
    },
    {
      title: "PSY-5 (PERSONALITY PSYCHOPATHOLOGY FIVE) SCALES",
      description: "Dimensional personality trait measures linked to personality pathology.",
      scales: ["AGGR-r", "PSYC-r", "DISC-r", "NEGE-r", "INTR-r"]
    }
  ];

  let report = "";

  // Header
  report += "═══════════════════════════════════════════════════════════════\n";
  report += "       MMPI-2-RF CLINICAL NARRATIVE INTERPRETATION REPORT\n";
  report += "═══════════════════════════════════════════════════════════════\n\n";

  // Cannot Say count
  if (typeof cns === "number") {
    report += `Cannot Say (?) Count: ${cns}\n`;
    if (cns > 17) {
      report += "*** WARNING: Elevated Cannot Say count (>17). Protocol validity may be compromised due to item omission. ***\n";
    } else if (cns > 7) {
      report += "Note: Mildly elevated Cannot Say count. Some scales may be affected by item omission.\n";
    }
    report += "\n";
  }

  // Clinical alerts (check for critical elevations first)
  const alerts = [];
  if (tScores["SUI"] && tScores["SUI"] >= 65) {
    alerts.push("SUICIDE RISK: SUI scale is elevated (T=" + tScores["SUI"] + "). Immediate suicide risk assessment is required.");
  }
  if (tScores["THD"] && tScores["THD"] >= 65) {
    alerts.push("THOUGHT DYSFUNCTION: THD scale is elevated (T=" + tScores["THD"] + "). Evaluate for psychotic-spectrum pathology.");
  }
  if (tScores["RC8"] && tScores["RC8"] >= 65) {
    alerts.push("ABERRANT EXPERIENCES: RC8 scale is elevated (T=" + tScores["RC8"] + "). Evaluate for psychotic-spectrum symptoms.");
  }
  if (tScores["AGG"] && tScores["AGG"] >= 65) {
    alerts.push("AGGRESSION RISK: AGG scale is elevated (T=" + tScores["AGG"] + "). Assess risk for harm to others.");
  }
  if (tScores["SUB"] && tScores["SUB"] >= 65) {
    alerts.push("SUBSTANCE ABUSE: SUB scale is elevated (T=" + tScores["SUB"] + "). Substance abuse assessment is recommended.");
  }

  if (alerts.length > 0) {
    report += "╔══════════════════════════════════════════════════════════╗\n";
    report += "║                  CLINICAL ALERTS                       ║\n";
    report += "╠══════════════════════════════════════════════════════════╣\n";
    alerts.forEach(function(alert) {
      report += "║ ⚠ " + alert + "\n";
    });
    report += "╚══════════════════════════════════════════════════════════╝\n\n";
  }

  // Generate each section
  sections.forEach(function(section) {
    const availableScales = section.scales.filter(function(s) {
      return tScores.hasOwnProperty(s);
    });

    if (availableScales.length === 0) return;

    report += "───────────────────────────────────────────────────────────────\n";
    report += section.title + "\n";
    report += section.description + "\n";
    report += "───────────────────────────────────────────────────────────────\n\n";

    availableScales.forEach(function(scaleId) {
      const t = tScores[scaleId];
      const level = getInterpretationLevel(t);
      const levelLabel = {
        low: "Low (Below Average)",
        normal: "Within Normal Limits",
        borderline: "Borderline (Emerging Concerns)",
        elevated: "Clinically Significant",
        veryElevated: "Very Elevated (Severe)"
      }[level];

      const scaleName = getScaleName(scaleId);
      const narrative = getNarrativeInterpretation(scaleId, t);

      report += scaleId + " - " + scaleName + "\n";
      report += "  T-Score: " + t;
      if (rawScores && rawScores.hasOwnProperty(scaleId)) {
        report += " | Raw Score: " + rawScores[scaleId];
      }
      report += " | Classification: " + levelLabel + "\n\n";
      report += "  " + narrative + "\n\n";
    });
  });

  // Integrated summary
  report += "═══════════════════════════════════════════════════════════════\n";
  report += "INTEGRATED SUMMARY\n";
  report += "═══════════════════════════════════════════════════════════════\n\n";

  const elevatedScales = [];
  const veryElevatedScales = [];

  Object.keys(tScores).forEach(function(scaleId) {
    if (!scaleInterpretations[scaleId]) return;
    const level = getInterpretationLevel(tScores[scaleId]);
    if (level === "elevated" || level === "borderline") {
      elevatedScales.push(scaleId + " (" + getScaleName(scaleId) + ", T=" + tScores[scaleId] + ")");
    } else if (level === "veryElevated") {
      veryElevatedScales.push(scaleId + " (" + getScaleName(scaleId) + ", T=" + tScores[scaleId] + ")");
    }
  });

  if (veryElevatedScales.length > 0) {
    report += "Very Elevated Scales (T >= 80):\n";
    veryElevatedScales.forEach(function(s) {
      report += "  - " + s + "\n";
    });
    report += "\n";
  }

  if (elevatedScales.length > 0) {
    report += "Elevated/Borderline Scales (T 65-79):\n";
    elevatedScales.forEach(function(s) {
      report += "  - " + s + "\n";
    });
    report += "\n";
  }

  if (elevatedScales.length === 0 && veryElevatedScales.length === 0) {
    report += "No substantive scales were elevated above the clinical threshold (T >= 65).\n";
    report += "This profile is within normal limits across all measured domains.\n\n";
  }

  report += "───────────────────────────────────────────────────────────────\n";
  report += "NOTE: This report is generated from standardized interpretive\n";
  report += "guidelines and should be integrated with clinical interview,\n";
  report += "behavioral observations, collateral information, and other\n";
  report += "assessment data by a qualified professional. No clinical\n";
  report += "decisions should be based solely on this automated report.\n";
  report += "───────────────────────────────────────────────────────────────\n";

  return report;
}

// Export for use in other modules (browser or Node.js)
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    scaleInterpretations: scaleInterpretations,
    getNarrativeInterpretation: getNarrativeInterpretation,
    getInterpretationLevel: getInterpretationLevel,
    getScaleName: getScaleName,
    generateNarrativeReport: generateNarrativeReport
  };
}
