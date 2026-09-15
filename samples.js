// Original model outputs from the two user-supplied audio archives.
// Stage I: six selected texts. Stage II: five selected text groups, three instructions each.
window.TEXT2STYLE_SAMPLES = {
  "default": [
    {
      "number": 1,
      "title": "Example 01",
      "text": "I told them I'm not okay anymore...",
      "sample_uid": "lime:en:output_2_6_output_2_6_15598_surprise",
      "audio": {
        "Text2Style": "assets/audio/stage1/01/text2style-p0/0f07261b2231fa3b.wav",
        "IndexTTS2": "assets/audio/stage1/01/indextts2-native/0f07261b2231fa3b.wav",
        "CosyVoice3": "assets/audio/stage1/01/cosyvoice3/0f07261b2231fa3b.wav",
        "VoxCPM2": "assets/audio/stage1/01/voxcpm2/0f07261b2231fa3b.wav"
      }
    },
    {
      "number": 2,
      "title": "Example 02",
      "text": "I’ve been trying to open up more, but it just feels pointless!",
      "sample_uid": "lime:en:output_3_3_output_3_3_7799_neutral",
      "audio": {
        "Text2Style": "assets/audio/stage1/02/text2style-p0/2130528569d30c0e.wav",
        "IndexTTS2": "assets/audio/stage1/02/indextts2-native/2130528569d30c0e.wav",
        "CosyVoice3": "assets/audio/stage1/02/cosyvoice3/2130528569d30c0e.wav",
        "VoxCPM2": "assets/audio/stage1/02/voxcpm2/2130528569d30c0e.wav"
      }
    },
    {
      "number": 3,
      "title": "Example 03",
      "text": "I finally tried the new protein shake, and it’s surprisingly good...",
      "sample_uid": "lime:en:output_2_7_output_2_7_18094_happy",
      "audio": {
        "Text2Style": "assets/audio/stage1/03/text2style-p0/5a13e2e21090e2ea.wav",
        "IndexTTS2": "assets/audio/stage1/03/indextts2-native/5a13e2e21090e2ea.wav",
        "CosyVoice3": "assets/audio/stage1/03/cosyvoice3/5a13e2e21090e2ea.wav",
        "VoxCPM2": "assets/audio/stage1/03/voxcpm2/5a13e2e21090e2ea.wav"
      }
    },
    {
      "number": 4,
      "title": "Example 04",
      "text": "The fire alarm chirped twice and died... We’re trapped in here!",
      "sample_uid": "lime:en:output_2_3_output_2_3_8990_disgust",
      "audio": {
        "Text2Style": "assets/audio/stage1/04/text2style-p0/587c6c740b4fff96.wav",
        "IndexTTS2": "assets/audio/stage1/04/indextts2-native/587c6c740b4fff96.wav",
        "CosyVoice3": "assets/audio/stage1/04/cosyvoice3/587c6c740b4fff96.wav",
        "VoxCPM2": "assets/audio/stage1/04/voxcpm2/587c6c740b4fff96.wav"
      }
    },
    {
      "number": 5,
      "title": "Example 05",
      "text": "This movie was supposed to be the funniest of the year!",
      "sample_uid": "lime:en:output_2_3_output_2_3_8782_angry",
      "audio": {
        "Text2Style": "assets/audio/stage1/05/text2style-p0/2ff0d6751c4bbaba.wav",
        "IndexTTS2": "assets/audio/stage1/05/indextts2-native/2ff0d6751c4bbaba.wav",
        "CosyVoice3": "assets/audio/stage1/05/cosyvoice3/2ff0d6751c4bbaba.wav",
        "VoxCPM2": "assets/audio/stage1/05/voxcpm2/2ff0d6751c4bbaba.wav"
      }
    },
    {
      "number": 7,
      "title": "Example 07",
      "text": "The new app update actually fixed all the bugs!",
      "sample_uid": "lime:en:output_2_2_output_2_2_5743_surprise",
      "audio": {
        "Text2Style": "assets/audio/stage1/07/text2style-p0/dc1cd0d4f8b8cd3e.wav",
        "IndexTTS2": "assets/audio/stage1/07/indextts2-native/dc1cd0d4f8b8cd3e.wav",
        "CosyVoice3": "assets/audio/stage1/07/cosyvoice3/dc1cd0d4f8b8cd3e.wav",
        "VoxCPM2": "assets/audio/stage1/07/voxcpm2/dc1cd0d4f8b8cd3e.wav"
      }
    }
  ],
  "instructed": [
    {
      "group": 3,
      "group_uid": "limegrp:en:98a1c56046b7168b4a2d",
      "text": "I can't believe they promoted me to senior manager this week!",
      "emotion": "surprised",
      "instruction": "Say this sentence in a surprised tone.",
      "sample_uid": "paper:lime:en:output_3_7_output_3_7_18963_surprise:seed1234",
      "audio": {
        "Text2Style": "assets/audio/stage2/03/surprised/text2style/paper_lime_en_output_3_7_output_3_7_18963_surprise_seed1234_d4a56b73f387.wav",
        "IndexTTS2": "assets/audio/stage2/03/surprised/indextts2-instruction/d4a56b73f38764e5.wav",
        "CosyVoice3": "assets/audio/stage2/03/surprised/cosyvoice3/d4a56b73f38764e5.wav",
        "VoxCPM2": "assets/audio/stage2/03/surprised/voxcpm2/d4a56b73f38764e5.wav"
      },
      "speaker_reference": "assets/audio/stage2/03/shared-reference/output_3_3_output_3_3_8135_angry.wav",
      "original_instruction": "Say this sentence in a clearly surprised tone."
    },
    {
      "group": 3,
      "group_uid": "limegrp:en:98a1c56046b7168b4a2d",
      "text": "I can't believe they promoted me to senior manager this week!",
      "emotion": "neutral",
      "instruction": "Say this sentence in a calm and neutral tone.",
      "sample_uid": "paper:lime:en:output_3_7_output_3_7_18964_neutral:seed1234",
      "audio": {
        "Text2Style": "assets/audio/stage2/03/neutral/text2style/paper_lime_en_output_3_7_output_3_7_18964_neutral_seed1234_fbf450d1ef53.wav",
        "IndexTTS2": "assets/audio/stage2/03/neutral/indextts2-instruction/fbf450d1ef535e49.wav",
        "CosyVoice3": "assets/audio/stage2/03/neutral/cosyvoice3/fbf450d1ef535e49.wav",
        "VoxCPM2": "assets/audio/stage2/03/neutral/voxcpm2/fbf450d1ef535e49.wav"
      },
      "speaker_reference": "assets/audio/stage2/03/shared-reference/output_3_3_output_3_3_8135_angry.wav",
      "original_instruction": "Say this sentence in a clearly calm and neutral tone."
    },
    {
      "group": 3,
      "group_uid": "limegrp:en:98a1c56046b7168b4a2d",
      "text": "I can't believe they promoted me to senior manager this week!",
      "emotion": "angry",
      "instruction": "Say this sentence in an angry tone.",
      "sample_uid": "paper:lime:en:output_3_7_output_3_7_18965_angry:seed1234",
      "audio": {
        "Text2Style": "assets/audio/stage2/03/angry/text2style/paper_lime_en_output_3_7_output_3_7_18965_angry_seed1234_9c6a5c82f1a9.wav",
        "IndexTTS2": "assets/audio/stage2/03/angry/indextts2-instruction/9c6a5c82f1a9dcca.wav",
        "CosyVoice3": "assets/audio/stage2/03/angry/cosyvoice3/9c6a5c82f1a9dcca.wav",
        "VoxCPM2": "assets/audio/stage2/03/angry/voxcpm2/9c6a5c82f1a9dcca.wav"
      },
      "speaker_reference": "assets/audio/stage2/03/shared-reference/output_3_3_output_3_3_8135_angry.wav",
      "original_instruction": "Say this sentence in a clearly angry tone."
    },
    {
      "group": 4,
      "group_uid": "limegrp:en:d33972183ccbf330af71",
      "text": "That movie’s ending was so unexpected, right...",
      "emotion": "fearful",
      "instruction": "Say this sentence in a fearful tone.",
      "sample_uid": "paper:lime:en:output_4_7_output_4_7_18801_fear:seed1234",
      "audio": {
        "Text2Style": "assets/audio/stage2/04/fearful/text2style/paper_lime_en_output_4_7_output_4_7_18801_fear_seed1234_5b1ce6de68dc.wav",
        "IndexTTS2": "assets/audio/stage2/04/fearful/indextts2-instruction/5b1ce6de68dcfe89.wav",
        "CosyVoice3": "assets/audio/stage2/04/fearful/cosyvoice3/5b1ce6de68dcfe89.wav",
        "VoxCPM2": "assets/audio/stage2/04/fearful/voxcpm2/5b1ce6de68dcfe89.wav"
      },
      "speaker_reference": "assets/audio/stage2/04/shared-reference/output_2_2_output_2_2_5324_fear.wav",
      "original_instruction": "Say this sentence in a clearly fearful tone."
    },
    {
      "group": 4,
      "group_uid": "limegrp:en:d33972183ccbf330af71",
      "text": "That movie’s ending was so unexpected, right...",
      "emotion": "surprised",
      "instruction": "Say this sentence in a surprised tone.",
      "sample_uid": "paper:lime:en:output_4_7_output_4_7_18802_surprise:seed1234",
      "audio": {
        "Text2Style": "assets/audio/stage2/04/surprised/text2style/paper_lime_en_output_4_7_output_4_7_18802_surprise_seed1234_110c0dbd53ab.wav",
        "IndexTTS2": "assets/audio/stage2/04/surprised/indextts2-instruction/110c0dbd53ab4df7.wav",
        "CosyVoice3": "assets/audio/stage2/04/surprised/cosyvoice3/110c0dbd53ab4df7.wav",
        "VoxCPM2": "assets/audio/stage2/04/surprised/voxcpm2/110c0dbd53ab4df7.wav"
      },
      "speaker_reference": "assets/audio/stage2/04/shared-reference/output_2_2_output_2_2_5324_fear.wav",
      "original_instruction": "Say this sentence in a clearly surprised tone."
    },
    {
      "group": 4,
      "group_uid": "limegrp:en:d33972183ccbf330af71",
      "text": "That movie’s ending was so unexpected, right...",
      "emotion": "neutral",
      "instruction": "Say this sentence in a calm and neutral tone.",
      "sample_uid": "paper:lime:en:output_4_7_output_4_7_18803_neutral:seed1234",
      "audio": {
        "Text2Style": "assets/audio/stage2/04/neutral/text2style/paper_lime_en_output_4_7_output_4_7_18803_neutral_seed1234_0f5d0b4ec7ab.wav",
        "IndexTTS2": "assets/audio/stage2/04/neutral/indextts2-instruction/0f5d0b4ec7abacee.wav",
        "CosyVoice3": "assets/audio/stage2/04/neutral/cosyvoice3/0f5d0b4ec7abacee.wav",
        "VoxCPM2": "assets/audio/stage2/04/neutral/voxcpm2/0f5d0b4ec7abacee.wav"
      },
      "speaker_reference": "assets/audio/stage2/04/shared-reference/output_2_2_output_2_2_5324_fear.wav",
      "original_instruction": "Say this sentence in a clearly calm and neutral tone."
    },
    {
      "group": 2,
      "group_uid": "limegrp:en:b2b594183a7281d311d7",
      "text": "The test results came back, so I can start planning my trip tomorrow?",
      "emotion": "fearful",
      "instruction": "Say this sentence in a fearful tone.",
      "sample_uid": "paper:lime:en:output_1_5_output_1_5_13872_fear:seed1234",
      "audio": {
        "Text2Style": "assets/audio/stage2/02/fearful/text2style/paper_lime_en_output_1_5_output_1_5_13872_fear_seed1234_5ad27a4e3271.wav",
        "IndexTTS2": "assets/audio/stage2/02/fearful/indextts2-instruction/5ad27a4e327120d8.wav",
        "CosyVoice3": "assets/audio/stage2/02/fearful/cosyvoice3/5ad27a4e327120d8.wav",
        "VoxCPM2": "assets/audio/stage2/02/fearful/voxcpm2/5ad27a4e327120d8.wav"
      },
      "speaker_reference": "assets/audio/stage2/02/shared-reference/output_1_6_output_1_6_15334_fear.wav",
      "original_instruction": "Say this sentence in a strongly fearful tone."
    },
    {
      "group": 2,
      "group_uid": "limegrp:en:b2b594183a7281d311d7",
      "text": "The test results came back, so I can start planning my trip tomorrow?",
      "emotion": "happy",
      "instruction": "Say this sentence in a happy tone.",
      "sample_uid": "paper:lime:en:output_1_5_output_1_5_13873_happy:seed1234",
      "audio": {
        "Text2Style": "assets/audio/stage2/02/happy/text2style/paper_lime_en_output_1_5_output_1_5_13873_happy_seed1234_4522637a81b9.wav",
        "IndexTTS2": "assets/audio/stage2/02/happy/indextts2-instruction/4522637a81b9a8a7.wav",
        "CosyVoice3": "assets/audio/stage2/02/happy/cosyvoice3/4522637a81b9a8a7.wav",
        "VoxCPM2": "assets/audio/stage2/02/happy/voxcpm2/4522637a81b9a8a7.wav"
      },
      "speaker_reference": "assets/audio/stage2/02/shared-reference/output_1_6_output_1_6_15334_fear.wav",
      "original_instruction": "Say this sentence in a strongly happy tone."
    },
    {
      "group": 2,
      "group_uid": "limegrp:en:b2b594183a7281d311d7",
      "text": "The test results came back, so I can start planning my trip tomorrow?",
      "emotion": "sad",
      "instruction": "Say this sentence in a sad tone.",
      "sample_uid": "paper:lime:en:output_1_5_output_1_5_13874_sad:seed1234",
      "audio": {
        "Text2Style": "assets/audio/stage2/02/sad/text2style/paper_lime_en_output_1_5_output_1_5_13874_sad_seed1234_22e3efab278a.wav",
        "IndexTTS2": "assets/audio/stage2/02/sad/indextts2-instruction/22e3efab278aae0a.wav",
        "CosyVoice3": "assets/audio/stage2/02/sad/cosyvoice3/22e3efab278aae0a.wav",
        "VoxCPM2": "assets/audio/stage2/02/sad/voxcpm2/22e3efab278aae0a.wav"
      },
      "speaker_reference": "assets/audio/stage2/02/shared-reference/output_1_6_output_1_6_15334_fear.wav",
      "original_instruction": "Say this sentence in a strongly sad tone."
    },
    {
      "group": 7,
      "group_uid": "limegrp:en:b43c765032e2a43e49cd",
      "text": "The new app update just wiped all my data...",
      "emotion": "fearful",
      "instruction": "Say this sentence in a fearful tone.",
      "sample_uid": "paper:lime:en:output_1_7_output_1_7_19122_fear:seed1234",
      "audio": {
        "Text2Style": "assets/audio/stage2/07/fearful/text2style/paper_lime_en_output_1_7_output_1_7_19122_fear_seed1234_5a326c87c515.wav",
        "IndexTTS2": "assets/audio/stage2/07/fearful/indextts2-instruction/5a326c87c515a8d2.wav",
        "CosyVoice3": "assets/audio/stage2/07/fearful/cosyvoice3/5a326c87c515a8d2.wav",
        "VoxCPM2": "assets/audio/stage2/07/fearful/voxcpm2/5a326c87c515a8d2.wav"
      },
      "speaker_reference": "assets/audio/stage2/07/shared-reference/output_2_4_output_2_4_11642_surprise.wav",
      "original_instruction": "Say this sentence in a slightly fearful tone."
    },
    {
      "group": 7,
      "group_uid": "limegrp:en:b43c765032e2a43e49cd",
      "text": "The new app update just wiped all my data...",
      "emotion": "angry",
      "instruction": "Say this sentence in an angry tone.",
      "sample_uid": "paper:lime:en:output_1_7_output_1_7_19123_angry:seed1234",
      "audio": {
        "Text2Style": "assets/audio/stage2/07/angry/text2style/paper_lime_en_output_1_7_output_1_7_19123_angry_seed1234_04307e34fafd.wav",
        "IndexTTS2": "assets/audio/stage2/07/angry/indextts2-instruction/04307e34fafd4a3f.wav",
        "CosyVoice3": "assets/audio/stage2/07/angry/cosyvoice3/04307e34fafd4a3f.wav",
        "VoxCPM2": "assets/audio/stage2/07/angry/voxcpm2/04307e34fafd4a3f.wav"
      },
      "speaker_reference": "assets/audio/stage2/07/shared-reference/output_2_4_output_2_4_11642_surprise.wav",
      "original_instruction": "Say this sentence in a slightly angry tone."
    },
    {
      "group": 7,
      "group_uid": "limegrp:en:b43c765032e2a43e49cd",
      "text": "The new app update just wiped all my data...",
      "emotion": "surprised",
      "instruction": "Say this sentence in a surprised tone.",
      "sample_uid": "paper:lime:en:output_1_7_output_1_7_19124_surprise:seed1234",
      "audio": {
        "Text2Style": "assets/audio/stage2/07/surprised/text2style/paper_lime_en_output_1_7_output_1_7_19124_surprise_seed1234_80a60ff9f33a.wav",
        "IndexTTS2": "assets/audio/stage2/07/surprised/indextts2-instruction/80a60ff9f33ae0b9.wav",
        "CosyVoice3": "assets/audio/stage2/07/surprised/cosyvoice3/80a60ff9f33ae0b9.wav",
        "VoxCPM2": "assets/audio/stage2/07/surprised/voxcpm2/80a60ff9f33ae0b9.wav"
      },
      "speaker_reference": "assets/audio/stage2/07/shared-reference/output_2_4_output_2_4_11642_surprise.wav",
      "original_instruction": "Say this sentence in a slightly surprised tone."
    },
    {
      "group": 1,
      "group_uid": "limegrp:en:379f2b29ae55471103ef",
      "text": "The park cleanup day is tomorrow, so we can finally get those benches installed?!",
      "emotion": "angry",
      "instruction": "Say this sentence in an angry tone.",
      "sample_uid": "paper:lime:en:output_4_5_output_4_5_12618_angry:seed1234",
      "audio": {
        "Text2Style": "assets/audio/stage2/01/angry/text2style/paper_lime_en_output_4_5_output_4_5_12618_angry_seed1234_748d3196755a.wav",
        "IndexTTS2": "assets/audio/stage2/01/angry/indextts2-instruction/748d3196755a9604.wav",
        "CosyVoice3": "assets/audio/stage2/01/angry/cosyvoice3/748d3196755a9604.wav",
        "VoxCPM2": "assets/audio/stage2/01/angry/voxcpm2/748d3196755a9604.wav"
      },
      "speaker_reference": "assets/audio/stage2/01/shared-reference/output_4_1_output_4_1_825_angry.wav",
      "original_instruction": "Say this sentence in a strongly angry tone."
    },
    {
      "group": 1,
      "group_uid": "limegrp:en:379f2b29ae55471103ef",
      "text": "The park cleanup day is tomorrow, so we can finally get those benches installed?!",
      "emotion": "sad",
      "instruction": "Say this sentence in a sad tone.",
      "sample_uid": "paper:lime:en:output_4_5_output_4_5_12619_sad:seed1234",
      "audio": {
        "Text2Style": "assets/audio/stage2/01/sad/text2style/paper_lime_en_output_4_5_output_4_5_12619_sad_seed1234_2b94a2effde7.wav",
        "IndexTTS2": "assets/audio/stage2/01/sad/indextts2-instruction/2b94a2effde7de40.wav",
        "CosyVoice3": "assets/audio/stage2/01/sad/cosyvoice3/2b94a2effde7de40.wav",
        "VoxCPM2": "assets/audio/stage2/01/sad/voxcpm2/2b94a2effde7de40.wav"
      },
      "speaker_reference": "assets/audio/stage2/01/shared-reference/output_4_1_output_4_1_825_angry.wav",
      "original_instruction": "Say this sentence in a strongly sad tone."
    },
    {
      "group": 1,
      "group_uid": "limegrp:en:379f2b29ae55471103ef",
      "text": "The park cleanup day is tomorrow, so we can finally get those benches installed?!",
      "emotion": "happy",
      "instruction": "Say this sentence in a happy tone.",
      "sample_uid": "paper:lime:en:output_4_5_output_4_5_12620_happy:seed1234",
      "audio": {
        "Text2Style": "assets/audio/stage2/01/happy/text2style/paper_lime_en_output_4_5_output_4_5_12620_happy_seed1234_1479dc3a1c48.wav",
        "IndexTTS2": "assets/audio/stage2/01/happy/indextts2-instruction/1479dc3a1c489b98.wav",
        "CosyVoice3": "assets/audio/stage2/01/happy/cosyvoice3/1479dc3a1c489b98.wav",
        "VoxCPM2": "assets/audio/stage2/01/happy/voxcpm2/1479dc3a1c489b98.wav"
      },
      "speaker_reference": "assets/audio/stage2/01/shared-reference/output_4_1_output_4_1_825_angry.wav",
      "original_instruction": "Say this sentence in a strongly happy tone."
    }
  ]
};
