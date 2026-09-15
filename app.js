'use strict';
const models = ['Text2Style', 'IndexTTS2', 'CosyVoice3', 'VoxCPM2'];
// Include all speaker references in the one-player-at-a-time behavior.
document.addEventListener('play', event => {
  const current = event.target;
  if (current.tagName !== 'AUDIO') return;
  document.querySelectorAll('audio').forEach(other => {
    if (other !== current && !other.paused) other.pause();
  });
}, true);
function audioCell(src, label) {
  const cell = document.createElement('td');
  const audio = document.createElement('audio');
  audio.controls = true;
  audio.preload = 'none';
  audio.setAttribute('aria-label', src ? label : `${label} — audio pending`);
  if (src) {
    audio.src = src;
  } else {
    audio.setAttribute('aria-disabled', 'true');
    audio.tabIndex = -1;
  }
  cell.append(audio);
  if (!src) {
    const note = document.createElement('span');
    note.className = 'audio-pending';
    note.textContent = 'Audio pending';
    cell.append(note);
  }
  return cell;
}
function renderDefaultSamples() {
  const rows = window.TEXT2STYLE_SAMPLES.default.map((sample, index) => {
    const row = document.createElement('tr');
    const text = document.createElement('td');
    text.textContent = sample.text;
    row.append(text);
    models.forEach(model => row.append(audioCell(sample.audio[model], `${model}, default synthesis, example ${index + 1}`)));
    return row;
  });
  document.getElementById('default-samples').replaceChildren(...rows);
}

function renderInstructionGroups() {
  const groups = new Map();
  for (const sample of window.TEXT2STYLE_SAMPLES.instructed) {
    if (!groups.has(sample.group_uid)) groups.set(sample.group_uid, []);
    groups.get(sample.group_uid).push(sample);
  }
  const sections = Array.from(groups.values()).map(samples => {
    const group = document.createElement('div');
    group.className = 'instruction-group';
    const text = document.createElement('p');
    text.className = 'group-text';
    const label = document.createElement('strong');
    label.textContent = 'Text: ';
    text.append(label, samples[0].text);

    const reference = document.createElement('div');
    reference.className = 'shared-reference group-reference';
    const referenceDetails = document.createElement('div');
    const referenceLabel = document.createElement('strong');
    referenceLabel.textContent = 'Speaker Reference';
    const referenceNote = document.createElement('p');
    referenceNote.textContent = 'Shared across the three instructions below.';
    referenceDetails.append(referenceLabel, referenceNote);
    const referenceAudio = document.createElement('audio');
    referenceAudio.controls = true;
    referenceAudio.preload = 'metadata';
    referenceAudio.src = samples[0].speaker_reference;
    referenceAudio.setAttribute('aria-label', `Speaker reference for: ${samples[0].text}`);
    reference.append(referenceDetails, referenceAudio);

    const viewport = document.createElement('div');
    viewport.className = 'table-responsive';
    viewport.tabIndex = 0;
    viewport.setAttribute('role', 'region');
    viewport.setAttribute('aria-label', `Emotion comparison: ${samples[0].text}`);
    const table = document.createElement('table');
    table.className = 'audio-table';
    table.innerHTML = '<colgroup><col class="text-column"><col span="4" class="audio-column"></colgroup><thead><tr><th scope="col">Emotion Instruction</th><th scope="col">Text2Style (Ours)</th><th scope="col">IndexTTS2 Instruction</th><th scope="col">CosyVoice3</th><th scope="col">VoxCPM2</th></tr></thead>';
    const tbody = document.createElement('tbody');
    samples.forEach(sample => {
      const row = document.createElement('tr');
      const instruction = document.createElement('td');
      const phrase = sample.instruction.match(/^(Say this sentence in an? )(.+?)( tone\.)$/);
      if (phrase) {
        const emotionText = document.createElement('span');
        emotionText.className = `emotion-text emotion-${sample.emotion}`;
        emotionText.textContent = phrase[2];
        instruction.append(phrase[1], emotionText, phrase[3]);
      } else {
        instruction.textContent = sample.instruction;
      }
      row.append(instruction);
      models.forEach(model => row.append(audioCell(sample.audio[model], `${model}: ${sample.instruction} Text: ${sample.text}`)));
      tbody.append(row);
    });
    table.append(tbody);
    viewport.append(table);
    group.append(text, reference, viewport);
    return group;
  });
  document.getElementById('instructed-groups').replaceChildren(...sections);
}

const resultData = {
  default: {
    caption: 'Text-only synthesis on TextrolSpeech',
    metrics: [['Emotion similarity ↑', '0.8643', '+0.0144 over the best baseline'], ['Word error rate ↓', '1.38%', 'Lowest among evaluated systems'], ['Style expressiveness ↑', '4.42', 'Mean eMOS · 95% CI ± 0.15']],
    rows: [
      ['IndexTTS2', '0.8499', '1.48%', '0.8361', ['4.20', '0.12'], ['4.12', '0.16']],
      ['CosyVoice3', '0.7913', '1.51%', '0.7638', ['4.24', '0.13'], ['4.12', '0.14']],
      ['VoxCPM2', '0.8493', '2.80%', '0.7148', ['3.94', '0.13'], ['3.92', '0.14']],
      ['Text2Style', '0.8643', '1.38%', '0.7724', ['4.34', '0.17'], ['4.42', '0.15']]
    ]
  },
  instructed: {
    caption: 'Instruction-conditioned synthesis on LIME-Core',
    metrics: [['Emotion similarity ↑', '0.8736', '+0.0145 over the best baseline'], ['Word error rate ↓', '1.50%', 'Lowest among evaluated systems'], ['Style expressiveness ↑', '4.29', 'Mean eMOS · 95% CI ± 0.15']],
    rows: [
      ['IndexTTS2', '0.8568', '1.75%', '0.8287', ['4.12', '0.11'], ['4.23', '0.10']],
      ['CosyVoice3', '0.8146', '1.86%', '0.7962', ['4.14', '0.17'], ['4.20', '0.17']],
      ['VoxCPM2', '0.8591', '2.40%', '0.7120', ['3.89', '0.11'], ['3.97', '0.09']],
      ['Text2Style', '0.8736', '1.50%', '0.8178', ['4.25', '0.12'], ['4.29', '0.15']]
    ]
  }
};

function renderResults(mode) {
  document.getElementById(`${mode}-results`).replaceChildren(...resultData[mode].rows.map(row => {
    const tr = document.createElement('tr');
    row.forEach((value, column) => {
      const td = document.createElement('td');
      const best = column > 0 && (column === 3 ? row[0] === 'IndexTTS2' : row[0] === 'Text2Style');
      const main = document.createElement(best ? 'strong' : 'span');
      main.textContent = Array.isArray(value) ? value[0] : value;
      td.append(main);
      if (Array.isArray(value)) { const ci = document.createElement('span'); ci.className = 'ci'; ci.textContent = ` ± ${value[1]}`; td.append(ci); }
      tr.append(td);
    });
    return tr;
  }));
}
renderDefaultSamples();
renderInstructionGroups();
for (const mode of ['default', 'instructed']) renderResults(mode);
