(() => {
  const makeQuestions = (facts) => facts.flatMap((fact, index) => {
    const [recallQ, recallA, recallB, recallC, applyQ, applyA, applyB, applyC] = fact;
    const recall = { q: recallQ, options: [recallA, recallB, recallC], answer: 0 };
    const application = { q: applyQ, options: [applyA, applyB, applyC], answer: 0 };
    if (index % 3 === 1) {
      recall.options = [recallB, recallA, recallC]; recall.answer = 1;
      application.options = [applyB, applyC, applyA]; application.answer = 2;
    } else if (index % 3 === 2) {
      recall.options = [recallC, recallB, recallA]; recall.answer = 2;
      application.options = [applyC, applyA, applyB]; application.answer = 1;
    }
    return [recall, application];
  });

  COURSE_MODULES.forEach(module => module.sections.forEach((section, index) => {
    section.learningId = `m${module.id}s${index + 1}`;
    section.questions = makeQuestions(section.facts);
    delete section.facts;
  }));
})();
