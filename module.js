(() => {
  const moduleId = Number(document.body.dataset.module);
  const data = COURSE_MODULES.find(item => item.id === moduleId);
  if (!data) return;

  const VISUALS = {
    1: [
      {after:0,src:'hat-design-system.svg',alt:'Diagram showing user, purpose, visual choices, materials and construction combining into a wearable reversible bucket hat',caption:'A successful hat balances the whole design system rather than treating appearance, use and making as separate decisions.'},
      {after:1,src:'bucket-hat-purpose-gallery.png',alt:'Gallery-walk organiser comparing sun-safe, cultural, fashion, awareness and target-market hats',caption:'Compare purpose, user and message before choosing a direction.'},
      {after:2,src:'hat-representation.png',alt:'Mind map asking what hats should represent',caption:'A cause becomes useful when it is connected to a real audience and respectful visual choices.'}
    ],
    2: [
      {after:0,src:'safe-sewing-workstation.png',alt:'Organised school sewing workstation with machine switched off, shears placed flat and pins contained',caption:'Safe practical work begins with an organised space and controlled tools.'},
      {after:1,src:'sewing-machine-parts.png',alt:'Teacher-source labelled diagram of essential sewing-machine parts',caption:'Use the names demonstrated for the actual classroom machine.'},
      {after:2,src:'construction-22.jpg',alt:'Close view of controlled sewing on purple bucket-hat fabric',caption:'Guide the fabric with fingers clear and use only a speed you can control.'}
    ],
    3: [
      {after:0,src:'visual-message-path.svg',alt:'Five-step pathway from researching a cause to checking how an audience interprets an original visual message',caption:'Build meaning through research, definition, creation, placement and an audience check.'},
      {after:1,src:'symbols-that-speak.png',alt:'Organiser for a symbol, its meaning and design possibilities',caption:'Research meaning and ownership, then simplify the symbol for the chosen technique.'},
      {after:2,src:'campaign-analysis.png',alt:'Campaign analysis organiser with three public health and service examples',caption:'Analyse design strategies; do not copy protected campaign branding.'}
    ],
    4: [
      {after:0,src:'frame-the-situation.png',alt:'Design situation organiser divided into context, need and user',caption:'Define the reason for the project before deciding what the hat should look like.'},
      {after:1,src:'my-design-brief.png',alt:'Scaffold for product, user, constraints, materials, time and challenges',caption:'A useful brief is focused while still leaving room for original decisions.'},
      {after:2,src:'criteria-for-success.png',alt:'Criteria table for function, safety, aesthetics and target market',caption:'Write criteria so each one can be observed or tested.'}
    ],
    5: [
      {after:0,src:'mood-board.png',alt:'Mood-board template with space for images, colours, textures and reflection',caption:'Curate a direction; do not fill the board with unrelated decoration.'},
      {after:1,src:'design-sketch-template.png',alt:'Four-view bucket-hat design sketch template',caption:'Generate genuinely different concepts and annotate the decisions that matter.'},
      {after:2,src:'pmi.png',alt:'PMI organiser for four design concepts',caption:'PMI makes strengths, weaknesses and interesting possibilities visible before selection.'}
    ],
    6: [
      {after:0,src:'cotton-polyester-comparison.png',alt:'Side-by-side cotton fibre and fabric with polyester fibre and fabric',caption:'Fibre origin, yarn, fabric structure and finishing all affect performance.'},
      {after:1,src:'material-choice-balance.svg',alt:'Diagram balancing material performance, making, care and responsible use',caption:'Material selection is a balance supported by evidence from the actual fabric and intended use.'},
      {after:2,src:'construction-07.jpg',alt:'Teacher-source pattern layout showing multiple bucket-hat pieces arranged on a worktable',caption:'Efficient layout and durable construction are practical parts of responsible material use.'}
    ],
    7: [
      {after:0,src:'technique-trial-loop.svg',alt:'Decorative technique trial loop from question to sample, observation and refinement',caption:'A focused sample protects final material and makes the next improvement evidence-based.'},
      {after:1,src:'construction-03.jpg',alt:'Teacher-source photograph of tie-dyed bucket-hat fabric pieces and pattern',caption:'Technique, colour and placement should be tested before the final pieces are assembled.'},
      {after:2,src:'decorative-technique-logbook.png',alt:'Logbook table for technique, materials, steps and outcome',caption:'Record the real materials, demonstrated process and observed result for each approved trial.'}
    ],
    8: [
      {after:0,src:'pattern-symbols.png',alt:'Pattern-symbol worksheet showing grainline, fold, cutting lines and notches',caption:'Read the symbols on the approved project pattern and ask when any detail is unclear.'},
      {after:1,src:'construction-03.jpg',alt:'Teacher-source photograph of complete cut bucket-hat pieces arranged by type',caption:'Accurate layout, cutting and organisation prepare the pieces for reliable assembly.'},
      {after:2,src:'sewing-machine-parts.png',alt:'Teacher-source labelled sewing-machine diagram',caption:'Machine readiness depends on the actual classroom model and teacher approval.'}
    ],
    9: [
      {after:0,src:'production-hold-points.svg',alt:'Five bucket-hat production hold points from pattern preparation to final finish',caption:'Pause at planned hold points to proceed, correct or ask before an error becomes permanent.'},
      {after:1,src:'construction-19.jpg',alt:'Teacher-source photograph of a circular crown clipped to a curved side section',caption:'Match curves carefully and stop for a quality check before sewing past a problem.'},
      {after:2,src:'progress-log.png',alt:'Progress log with columns for task, learning, challenge and next step',caption:'Honest stage evidence shows what changed and what needs to happen next.'},
      {after:2,src:'construction-30.jpg',alt:'Teacher-source photograph of the nearly finished purple reversible bucket hat',caption:'The authentic construction sequence provides teaching context; students still record their own product evidence.'}
    ],
    10: [
      {after:0,src:'evaluation-evidence-loop.svg',alt:'Evaluation loop connecting criterion, method, evidence, judgement and specific improvement',caption:'Each evaluation judgement should be traceable to an observable test and a precise next step.'},
      {after:1,src:'peer-feedback.png',alt:'Circle-of-viewpoints organiser for positives, improvements and interesting features',caption:'Feedback is evidence to consider, not an instruction to accept every suggestion.'},
      {after:2,src:'designer-statement.png',alt:'Designer-statement scaffold beside lined writing space',caption:'Explain user, purpose, choices, challenge and judgement with evidence from the real project.'},
      {after:2,src:'construction-32.jpg',alt:'Teacher-source photograph of a completed purple reversible bucket hat',caption:'Present the real product clearly from both sides and keep formal submission details teacher-controlled.'}
    ]
  };

  const MODULE_CHALLENGES = {
    1: {title:'System check',scenario:'A hat communicates a strong cause but is uncomfortable and cannot be reversed cleanly.',prompt:'Which parts of the design system have failed, and what should the designer reconsider first?',example:'The message is working, but user comfort and reversible construction are not. Return to the user need and construction requirements, then adjust the design without losing the message.'},
    2: {title:'Stop-work decision',scenario:'The fabric stops feeding smoothly and the machine begins making an unfamiliar sound.',prompt:'What should the operator do, and why is guessing at settings a poor response?',example:'Remove pressure from the control, stop the machine and follow the demonstrated teacher-check routine. Changing several settings could create another fault and does not identify the original cause.'},
    3: {title:'Audience reading',scenario:'A detailed symbol looks clear on a full-page sketch but becomes confusing when reduced to the side of a hat.',prompt:'Which visual decisions could improve the message without copying another campaign?',example:'Simplify the symbol, increase contrast, remove small detail and test its scale on a hat template. Ask a viewer what they read before finalising it.'},
    4: {title:'Criterion or constraint?',scenario:'A student writes “the hat must look good” and “I do not like sewing curves”.',prompt:'Rewrite one as a testable criterion and explain why the other is not a valid project constraint.',example:'A criterion could be: “The symbol remains recognisable from two metres in an audience check.” Disliking curved sewing is a challenge to manage, not an external limit on the brief.'},
    5: {title:'Genuine alternatives',scenario:'Four concepts use the same layout and symbol; only the colours change.',prompt:'What should vary so the concepts represent real design choices?',example:'Change meaningful features such as symbol scale, placement, repetition, technique or the relationship between the two reversible sides. Colour alone does not create four genuine alternatives.'},
    6: {title:'Material claim check',scenario:'A label says one fabric is “the sustainable choice” but gives no source, use pattern or care information.',prompt:'Why is the claim weak, and what evidence would support a more careful judgement?',example:'The claim ignores durability, care, waste and repeated use. Compare the actual fabrics, record relevant properties and state a limited conclusion supported by the evidence available.'},
    7: {title:'One-variable trial',scenario:'A second sample changes the fabric, thread, motif size and stitch method at the same time.',prompt:'Why is comparison difficult, and how could the next trial be improved?',example:'The result cannot show which change caused the difference. Keep the approved setup consistent and change one feature linked to the investigation question.'},
    8: {title:'Readiness gate',scenario:'All pieces are cut, but matching marks are unclear and the student is unsure which side will face out.',prompt:'Should construction begin? Identify the evidence needed before proceeding.',example:'No. Compare the pieces with the approved pattern, confirm marks, pairs and right or wrong sides, organise the sets, then seek teacher confirmation before an irreversible join.'},
    9: {title:'Quality hold point',scenario:'A curved section is clipped unevenly and small puckers appear before sewing begins.',prompt:'Use proceed, correct or ask to make a justified decision.',example:'Correct first by stopping and redistributing the fabric using the demonstrated method. If the edges still do not match, ask before sewing. Record the check and decision as progress evidence.'},
    10: {title:'Evidence or opinion?',scenario:'An evaluation says “I love the hat, so it met every criterion”.',prompt:'What is missing, and how should one criterion be evaluated?',example:'Personal preference is not enough. Name one criterion, describe the test and result, judge whether it was met and connect a specific improvement to that evidence.'}
  };

  const activityLabels = ['Textiles and purpose investigation','Safety and tools audit','Visual message studio','Brief and criteria builder','Mood board and concept studio','Fibre and sustainability comparison','Technique sample log','Pattern and machine readiness','Action plan and progress evidence','Evaluation and designer statement'];
  const presentationFiles = [
    'Bucket-Hat-Module-01-textiles-with-purpose.pptx','Bucket-Hat-Module-02-safe-textile-work.pptx','Bucket-Hat-Module-03-visual-messages.pptx','Bucket-Hat-Module-04-define-the-challenge.pptx','Bucket-Hat-Module-05-develop-and-select-ideas.pptx','Bucket-Hat-Module-06-fibres-fabrics-sustainability.pptx','Bucket-Hat-Module-07-decorative-technique-trials.pptx','Bucket-Hat-Module-08-prepare-for-production.pptx','Bucket-Hat-Module-09-produce-the-reversible-hat.pptx','Bucket-Hat-Module-10-evaluate-and-communicate.pptx'
  ];

  const escapeAttr = value => String(value).replace(/&/g,'&amp;').replace(/"/g,'&quot;');
  const readJSON = key => { try { return JSON.parse(localStorage.getItem(key) || '{}'); } catch { return {}; } };
  const figureHtml = item => `<figure class="teaching-visual"><a href="../assets/${item.src}" target="_blank" rel="noopener"><img src="../assets/${item.src}" alt="${escapeAttr(item.alt)}" loading="lazy"></a><figcaption>${item.caption} <a href="../assets/${item.src}" target="_blank" rel="noopener">Open larger</a></figcaption></figure>`;
  const challengeHtml = item => `<aside class="transfer-challenge"><p class="eyebrow">Apply it</p><h3>${item.title}</h3><p><strong>Scenario:</strong> ${item.scenario}</p><p><strong>Your decision:</strong> ${item.prompt}</p><details><summary>Appropriate response example</summary><p>${item.example}</p></details></aside>`;
  const videoHtml = (video, sectionNumber) => {
    const isVimeo = video.provider === 'vimeo';
    const thumb = isVimeo ? '../assets/safe-sewing-workstation.png' : `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;
    const fallback = isVimeo ? `https://vimeo.com/${video.id}` : `https://www.youtube.com/watch?v=${video.id}`;
    return `<aside class="video-learning" aria-labelledby="video-title-${sectionNumber}"><div class="video-copy"><p class="eyebrow">Watch and notice</p><h3 id="video-title-${sectionNumber}">${video.title}</h3><p>${video.purpose}</p><p class="watch-for"><strong>Watch for:</strong> ${video.watchFor}</p><p class="fine">${video.channel}</p></div><div><div class="video-frame" data-video-frame><button type="button" class="video-launch" data-video-provider="${video.provider}" data-video-load="${video.id}" aria-label="Play ${escapeAttr(video.title)}"><img src="${thumb}" alt="" loading="lazy"><span class="video-play" aria-hidden="true">▶</span><span class="video-launch-label">Play video</span></button></div><p class="video-fallback"><a href="${fallback}" target="_blank" rel="noopener">Open video in a new tab ↗</a></p></div></aside>`;
  };
  const questionHtml = (item, qi, section) => {
    const saved = readJSON(`buckethat:check:${section.learningId}:${qi}`);
    return `<fieldset class="question" data-question="${qi}"><legend>${qi + 1}. ${item.q}</legend>${item.options.map((option, oi) => `<label class="option"><input type="radio" name="${section.learningId}-q${qi}" value="${oi}" ${saved.selected === oi ? 'checked' : ''}> <span>${option}</span></label>`).join('')}<button type="button" class="button secondary compact" data-check-one>Check answer</button><p class="feedback ${saved.checked ? (saved.correct ? 'good' : 'try') : ''}" aria-live="polite">${saved.checked ? (saved.correct ? 'Correct — keep going.' : `Not yet. Review ${section.title}, then try again.`) : ''}</p></fieldset>`;
  };
  const evidenceHtml = (section, index) => {
    const w = section.written;
    return `<section class="section-evidence" aria-labelledby="evidence-${section.learningId}"><p class="eyebrow">Written evidence ${moduleId}.${index + 1}</p><h3 id="evidence-${section.learningId}">${w.label}</h3><button type="button" class="button secondary response-help-toggle" data-response-help aria-expanded="false" aria-controls="guide-${w.id}">What is this asking?</button><div class="response-guide" id="guide-${w.id}" hidden><p><strong>In plain language:</strong> ${w.clarify}</p><ol>${w.steps.map(step => `<li>${step}</li>`).join('')}</ol><p><strong>Sentence starter:</strong> ${w.starter}</p><p><a href="#section-${index + 1}">Return to the precise relevant theory section: ${section.title}</a></p><details><summary>Appropriate response example</summary><p>${w.example}</p></details></div><label class="sr-only" for="${w.id}">${w.label}</label><textarea id="${w.id}" data-save-key="buckethat:${w.id}" placeholder="Write your response here…"></textarea><p class="save-status" id="status-${w.id}" aria-live="polite"></p></section>`;
  };

  document.title = `Module ${data.id}: ${data.title} | Bucket Hat for a Cause`;
  document.querySelector('[data-module-header]').innerHTML = `<p class="eyebrow">Module ${data.id} of ${COURSE_MODULES.length}</p><h1>${data.title}</h1><p class="lede">${data.subtitle}</p>`;
  document.querySelector('[data-contents]').innerHTML = data.sections.map((s, i) => `<li><a href="#section-${i + 1}">${s.title}</a></li>`).join('');
  const presentationHtml = `<aside class="module-presentation"><div><p class="eyebrow">Module presentation</p><h2>Learn with the slides</h2><p>Use the eight-slide presentation to retrieve prior learning, review the three sections and prepare your evidence.</p><p class="fine">PowerPoint · 8 slides · student-accessible</p></div><a class="button tomato presentation-download" href="../resources/presentations/${presentationFiles[moduleId - 1]}" download>Download Module ${moduleId} PowerPoint</a></aside>`;
  document.querySelector('[data-theory]').innerHTML = presentationHtml + data.sections.map((section, i) => {
    const figures = (VISUALS[moduleId] || []).filter(v => v.after === i).map(figureHtml).join('');
    const video = COURSE_VIDEOS[`${moduleId}.${i + 1}`];
    const transfer = i === 1 ? challengeHtml(MODULE_CHALLENGES[moduleId]) : '';
    return `<section class="theory-block" id="section-${i + 1}"><h2>${section.title}</h2>${section.html}</section>${figures}${videoHtml(video, `${moduleId}-${i + 1}`)}<details class="section-learning" id="check-${section.learningId}"><summary><span>Learning activity ${moduleId}.${i + 1}</span><strong>10 questions + written response</strong></summary><div class="section-learning-body"><p>Answer all ten questions. If an answer needs work, the feedback points back to this precise theory section.</p><div data-section-check="${section.learningId}">${section.questions.map((item, qi) => questionHtml(item, qi, section)).join('')}</div>${evidenceHtml(section, i)}</div></details>${transfer}`;
  }).join('');

  const aside = document.querySelector('.module-aside');
  aside.insertAdjacentHTML('beforeend', `<hr><h3>Project activity</h3><p>${activityLabels[moduleId - 1]}</p><a class="button secondary compact" href="../activities.html#activity-${moduleId}">Open activity</a><button class="button secondary compact" type="button" data-print-module>Print / Save PDF</button>`);
  aside.querySelector('[data-print-module]').addEventListener('click', () => window.print());

  document.querySelectorAll('[data-check-one]').forEach(button => button.addEventListener('click', () => {
    const fieldset = button.closest('[data-question]');
    const sectionBox = button.closest('[data-section-check]');
    const section = data.sections.find(s => s.learningId === sectionBox.dataset.sectionCheck);
    const qi = Number(fieldset.dataset.question);
    const selected = fieldset.querySelector('input:checked');
    const feedback = fieldset.querySelector('.feedback');
    if (!selected) { feedback.className = 'feedback try'; feedback.textContent = 'Choose an answer, then check again.'; return; }
    const selectedIndex = Number(selected.value);
    const correct = selectedIndex === section.questions[qi].answer;
    localStorage.setItem(`buckethat:check:${section.learningId}:${qi}`, JSON.stringify({selected:selectedIndex,checked:true,correct}));
    feedback.className = `feedback ${correct ? 'good' : 'try'}`;
    feedback.innerHTML = correct ? 'Correct — keep going.' : `Not yet. Review <a href="#section-${data.sections.indexOf(section) + 1}">${section.title}</a>, then try again.`;
    updateProgress();
  }));
  document.querySelectorAll('[data-response-help]').forEach(button => button.addEventListener('click', () => {
    const panel = document.getElementById(button.getAttribute('aria-controls'));
    const open = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!open)); panel.hidden = open;
  }));
  document.querySelectorAll('[data-video-load]').forEach(button => button.addEventListener('click', () => {
    const frame = button.closest('[data-video-frame]');
    const title = button.getAttribute('aria-label').replace(/^Play /,'');
    const src = button.dataset.videoProvider === 'vimeo' ? `https://player.vimeo.com/video/${button.dataset.videoLoad}` : `https://www.youtube-nocookie.com/embed/${button.dataset.videoLoad}?autoplay=1&rel=0`;
    frame.innerHTML = `<iframe src="${src}" title="${escapeAttr(title)}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
  }));
  document.querySelectorAll('[data-save-key]').forEach(area => {
    area.value = localStorage.getItem(area.dataset.saveKey) || '';
    let timer;
    area.addEventListener('input', () => { clearTimeout(timer); timer = setTimeout(() => { localStorage.setItem(area.dataset.saveKey, area.value); const status = document.getElementById(`status-${area.id}`); status.textContent = 'Saved on this device'; setTimeout(() => status.textContent = '', 1600); updateProgress(); }, 250); });
  });

  const previous = document.querySelector('[data-previous]');
  const next = document.querySelector('[data-next]');
  if (moduleId === 1) { previous.href = '../index.html'; previous.textContent = '← Course home'; } else { previous.href = `module-${String(moduleId - 1).padStart(2,'0')}.html`; previous.textContent = `← Module ${moduleId - 1}`; }
  if (moduleId === COURSE_MODULES.length) { next.href = '../folio.html'; next.textContent = 'Open My folio →'; } else { next.href = `module-${String(moduleId + 1).padStart(2,'0')}.html`; next.textContent = `Module ${moduleId + 1} →`; }

  function updateProgress() {
    const responses = data.sections.filter(section => (localStorage.getItem(`buckethat:${section.written.id}`) || '').trim().length >= 20).length;
    const correct = data.sections.reduce((sum, section) => sum + section.questions.filter((_, qi) => readJSON(`buckethat:check:${section.learningId}:${qi}`).correct).length, 0);
    const pct = Math.round(((responses + correct) / 33) * 100);
    document.querySelector('[data-progress]').style.width = `${pct}%`;
    document.querySelector('[data-progress-text]').textContent = `${correct} of 30 questions correct and ${responses} of 3 written responses saved on this device`;
  }
  updateProgress();
})();
