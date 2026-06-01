export const NAV = [
  { href:'#problem', label:'Problem' },
  { href:'#substrate', label:'Substrate' },
  { href:'#industries', label:'Industries' },
  { href:'#product', label:'SwitchYard' },
  { href:'#funds', label:'Roadmap' },
];

export const HERO_STATS = [
  { b:'168', s:'verified theorems, zero unproved' },
  { b:'120+', s:'open repositories' },
  { b:'Lean 4 · Haskell · C++23 · Nix', s:'stack' },
  { b:'San Juan, PR', s:'headquarters' },
];

export const REPOS = [
  { slug:'sensenet-ai / continuity', name:'Continuity: the action substrate',
    body:'A Lean 4 library defining content-addressed derivations, BLAKE3 hashing, a 13-label graded-monad capability lattice, and the composed correctness theorem that ties the substrate together. Documented in our paper Reflections on Mistrusting Trust.',
    meta:['86 theorems','0 unproved','Lean 4.30'] },
  { slug:'sensenet-ai / cornell', name:'Cornell: verified codec library',
    body:'Bidirectional verified codecs for SIGIL, ZMTP, the Nix daemon protocol, Protobuf, HTTP/2, HTTP/3, and Git pack formats, with proof-carrying extraction to C++ and Haskell. Every input that crosses a trust boundary crosses a verified codec.',
    meta:['82 theorems','0 unproved','C++ · Haskell'] },
  { slug:'sensenet-ai / switchyard', name:'SwitchYard: the proof-carrying LLM gateway',
    body:'An OpenAI-compatible drop-in gateway. Every request carries a typed capability grade discharged at the action site. Every response carries a signed, content-addressed record: a tamper-evident, replayable, machine-checkable evidence chain per inference.',
    meta:['Ed25519 + ML-DSA-65','SLH-DSA-128s','BLAKE3'] },
  { slug:'sensenet-ai / nix (fork)', name:'Content-addressed build infrastructure',
    body:'A daemonless rewrite of Nix in C++23 with BLAKE3 checksums, io_uring-native I/O, and Firecracker-microVM build isolation. The system enforces reproducibility at every layer below the application.',
    meta:['C++23 daemonless','io_uring','Firecracker'] },
  { slug:'internal / ai-safety corpus', name:'Formal AI safety corpus',
    body:'A Lean formalization of the properties an AI system must hold to be deployable where its mistakes hurt people: consent, exit guarantees, anti-coercion, sensory provenance, economic atomicity, anti-replay. One proof family per concern, bridged to the action substrate.',
    meta:['~7,000 lines of Lean','13 concern axes','Bridge.lean'] },
  { slug:'applied / industrial controller', name:'One finished applied vertical',
    body:'A verified controller for industrial setpoint management with quantified safety properties (peak bounds, slew bounds, scenario coverage) proven against a state-machine model. The template for every vertical we ship next: a customer contract plus an open-source proof artifact.',
    meta:['∀-scenario proofs','state-machine','replicable'] },
];

export const MOAT = [
  { h:'The proof corpus is time-cumulative.', t:'Every theorem is permanent and additive. Today’s 168 verified theorems are next year’s 400. A follower has to replay the entire history to match a surface we add to every week.' },
  { h:'Open source is the moat, not the give-away.', t:'The proofs are public because public proofs are the product. The customer pays for the managed runtime, the integration, and the regulatory artifact, not the math.' },
  { h:'The academic anchor is published.', t:'Reflections on Mistrusting Trust plants the flag in the formal-methods literature. The next entrant has to cite us to be taken seriously.' },
  { h:'The proofs are extraction-grade.', t:'Verified codecs compile to production C++ and Haskell. There is no gap between proving it and shipping it.' },
  { h:'The position is substrate-level.', t:'Once SwitchYard sits underneath an enterprise’s inference path, removing it means re-architecting the compliance story. The switching cost is the audit.' },
];

export const INDUSTRIES = [
  { n:'i', name:'Healthcare',
    body:'Clinical decision support that survives M&M review. Prior-authorization workflows where the recommendation enters an auditable encounter record under HIPAA. Radiology triage with FDA SaMD change-control. Documentation that satisfies 21 CFR Part 11. The difference between a model a clinician trusts and one a CMO will deploy is the evidence chain underneath it, and we have stood on both sides of the chart.' },
  { n:'ii', name:'Financial services',
    body:'Model risk management under SR 11-7 with full attestation lineage from training data to deployed inference. Algorithmic-trading audit trails that withstand a SEC Rule 15c3-5 review. CCAR and DFAST pipelines where every input, artifact, and intermediate output is content-addressed and replayable years later. MiFID II and Reg NMS best-execution evidence. The controls desks have quietly built in-house for a decade, productized.' },
  { n:'iii', name:'Critical infrastructure',
    body:'Utility-side load balancing, industrial control systems, datacenter power management. The verified controller we already shipped, with quantified peak and slew bounds, is the seed for this vertical and the natural fit for NERC CIP-aligned deployments.' },
  { n:'iv', name:'Defense & government',
    body:'ITAR-bounded autonomy, OMB M-24-10 inventory and risk-management requirements, IL5+ workloads where reproducibility is the contract. Our content-addressed, post-quantum-signed substrate is the right shape for the compliance baseline these programs already require.' },
  { n:'v', name:'Regulated enterprise AI procurement',
    body:'The buyer is the CISO and the Chief Compliance Officer. The question they are putting to their AI vendors is the question SwitchYard answers, without the AI engineering team ever being in the room.' },
];

export const FUND_STATS = [
  { s:'Raise target', b:'$10,000,000' },
  { s:'Runway', b:'18 mo to revenue inflection' },
  { s:'Vehicle', b:'Priced equity · Delaware C-corp' },
  { s:'Allocation', b:'Strategic + government LPs' },
];

export const TRACKS = [
  { n:'01', h:'Productize the substrate into SwitchYard.', t:'Harden the gateway, ship enterprise authentication and tenancy, build the audit-record export tooling compliance teams plug into their GRC stacks, and complete the SOC 2 Type II and FedRAMP Moderate pathway. This is the revenue layer.' },
  { n:'02', h:'Extend the verified surface into the applied verticals.', t:'The controller-safety proof we shipped is the template. Funding replicates it across clinical decision support, financial model governance, and one industrial-controls partnership already in motion. Each vertical is a customer contract paired with an open-source proof artifact.' },
  { n:'03', h:'Close the remaining substrate gaps and widen the moat.', t:'A dedicated formal-methods team to retire remaining axiomatic assumptions, bring the codegen-to-binary path under proof, and ship the second-generation capability lattice the verticals depend on. Every quarter our proven surface grows and the gap to any fast follower widens.' },
];

export const STATUS = [
  ['Content-addressed action chain (BLAKE3 + CAS)','Shipped','In production across the substrate. Public.'],
  ['Verified codec library for trust-boundary inputs','Shipped','82 theorems, zero unproved. C++ and Haskell extraction.'],
  ['Capability-bound LLM gateway with discharge proofs','Shipped','Ed25519 runtime verification path integrated end-to-end.'],
  ['Hybrid post-quantum signature substrate','Shipped','Ed25519 + ML-DSA-65 + SLH-DSA-128s. In the published paper.'],
  ['Formal AI safety corpus (consent, exit, anti-coercion)','Shipped','~7,000 lines of Lean. Substrate-bridged.'],
  ['Industrial setpoint controller (∀-scenario safety)','Shipped','One finished applied vertical. Template for the next five.'],
  ['Multi-vertical action-obligation completeness (L4)','Next','Funded by Track 2. Partial records unconstructible at compile time.'],
  ['Codegen-to-binary path under proof','Next','Funded by Track 3. Closes the last unproven gap in extraction.'],
  ['FedRAMP Moderate · SOC 2 Type II','Next','Funded by Track 1. Required for federal and large-enterprise procurement.'],
];

export const FOUNDERS = [
  { b:'Ben Reesman', s:'Co-founder', p:'Primary author of Continuity and Reflections on Mistrusting Trust. Architect of the Lean substrate and Nix-fork runtime.' },
  { b:'Michael Brubeck', s:'Co-founder', p:'3x hyperscale strategy director. 20+ years in M&A, turnaround, and systems engineering across 19+ countries.' },
  { b:'Justin Breen', s:'Co-founder', p:'Brand and go-to-market lead for Fortune 100 launches (Coca-Cola, AT&T, Warner Bros). Applied AI researcher in diffusion and world models.' },
  { b:'Jesse Wilson', s:'Co-founder', p:'Director-level product and operations leader across enterprise and startups.' },
];
