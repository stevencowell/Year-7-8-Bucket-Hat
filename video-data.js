const VIDEO_LIBRARY = {
  textiles: { provider:'youtube', id:'eCqsEaYv70s', title:'Introduction to textiles: the fabric of society', channel:'Teacher-posted Classroom resource', purpose:'See how textile products connect people, materials and everyday life.', watchFor:'different places textiles appear and the purposes they serve' },
  world: { provider:'youtube', id:'1U8iPCf67A0', title:'A world without textiles', channel:'Teacher-posted Classroom resource', purpose:'Notice how many familiar activities depend on textile materials.', watchFor:'products whose function would change without fabric' },
  sun: { provider:'youtube', id:'QU8hSXOKKIs', title:'Shade and sun protection', channel:'Conquering Skin Cancer with Cancer Council Victoria', purpose:'Connect a hat design to the wider idea of reducing UV exposure.', watchFor:'why shade and protective choices work together' },
  safety: { provider:'vimeo', id:'236679683', title:'Safety in the textiles room', channel:'Teacher-posted Classroom resource', purpose:'Review the room behaviours that prevent common textile-workshop injuries.', watchFor:'controls that happen before tools are used' },
  cotton: { provider:'youtube', id:'t6plTYrBth4', title:'Australian Cotton: from seed to sock', channel:'Cotton Australia', purpose:'Follow a natural fibre from primary production to a finished textile product.', watchFor:'the stages that change fibre into yarn and fabric' },
  cottonFull: { provider:'youtube', id:'LfJcSvV9TP0', title:'Australian Cotton: from seed to sock (full length)', channel:'Cotton Australia', purpose:'Examine how farming, processing and manufacturing connect.', watchFor:'where technology and quality checks enter the system' },
  machine: { provider:'youtube', id:'VUS8Kn5CI7Y', title:'Sewing-machine threading tutorial', channel:'SINGER Sewing Company', purpose:'See the broad threading sequence, then follow the exact classroom-machine demonstration.', watchFor:'thread guides, tension path, bobbin steps and safe stopping' },
  mood: { provider:'youtube', id:'-aH43oMW9RQ', title:'Creating a mood board', channel:'Canva learning video', purpose:'See how selected images, colour and texture create a coherent direction.', watchFor:'how the creator groups related visual ideas' },
  hat: { provider:'youtube', id:'I1CB6-2h0z8', title:'Sew a reversible bucket hat', channel:'Teacher-posted Classroom resource', purpose:'Preview how curved pieces and two sides become a reversible product.', watchFor:'the order of assembly—not dimensions or settings' },
};

const VIDEO_KEYS = [
  ['textiles','sun','world'],
  ['safety','safety','machine'],
  ['world','textiles','sun'],
  ['textiles','world','sun'],
  ['mood','mood','mood'],
  ['cotton','cottonFull','world'],
  ['hat','hat','hat'],
  ['hat','hat','machine'],
  ['hat','hat','hat'],
  ['hat','hat','world']
];

const COURSE_VIDEOS = {};
VIDEO_KEYS.forEach((row, moduleIndex) => row.forEach((key, sectionIndex) => {
  COURSE_VIDEOS[`${moduleIndex + 1}.${sectionIndex + 1}`] = VIDEO_LIBRARY[key];
}));
