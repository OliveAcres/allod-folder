import { useLenis } from './lib/useLenis';
import { useReveal } from './lib/useReveal';
import LiquidLensDef from './components/LiquidLensDef';
import HeroField from './components/HeroField';
import {
  NAV, HERO_STATS, REPOS, MOAT, INDUSTRIES,
  FUND_STATS, TRACKS, STATUS, FOUNDERS, SHIPWALL,
} from './data/content';
import {
  ArrowUpRight, ArrowRight, CheckCircle2, Lock, ShieldCheck, Hash, Menu,
} from 'lucide-react';
import './styles/app.css';

const PROOFS = [
  { icon: CheckCircle2, label: 'Lean-verified' },
  { icon: Lock, label: 'Deterministic' },
  { icon: ShieldCheck, label: 'Post-quantum signed' },
  { icon: Hash, label: 'Content-addressed' },
];

function Eyebrow({ n, children }) {
  return <p className="eyebrow"><b>{n}</b><span>{children}</span></p>;
}

export default function App() {
  useLenis();
  useReveal();

  return (
    <>
      <LiquidLensDef />

      {/* NAV — glass chrome floating over the hero field */}
      <nav className="nav glass glass--dark is-enter" id="top">
        <a className="nav__brand" href="#top">Allodial.</a>
        <div className="nav__links">
          {NAV.map(i => <a key={i.href} href={i.href}>{i.label}</a>)}
          <a className="nav__cta" href="#contact">Request the data room <ArrowRight size={15} strokeWidth={1.5} /></a>
          <button className="nav__menu" aria-label="Menu"><Menu size={22} strokeWidth={1.4} /></button>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero">
        <HeroField />
        <div className="container hero__inner">
          <Eyebrow n="Series A">Deep-tech / Formal Methods</Eyebrow>
          <h1>Deterministic proof unlocks regulated AI spend <em>that probabilistic output can&rsquo;t.</em></h1>
          <div className="hero__actions">
            <a className="btn-primary" href="#contact">Request the data room <ArrowRight size={17} strokeWidth={1.6} /></a>
            <a className="btn-ghost" href="https://github.com/sensenet-ai" target="_blank" rel="noreferrer">
              Browse the substrate <ArrowUpRight size={17} strokeWidth={1.5} />
            </a>
          </div>
          <div className="proofs">
            {PROOFS.map(({ icon: Icon, label }) => (
              <span key={label} className="proof glass glass--dark is-enter">
                <Icon size={16} strokeWidth={1.4} /><em>{label}</em>
              </span>
            ))}
          </div>
        </div>
        <div className="container"><div className="hero__stats">
          {HERO_STATS.map(s => <div key={s.s}><b>{s.b}</b><span>{s.s}</span></div>)}
        </div></div>
      </header>

      {/* 01 — PROBLEM */}
      <section className="section band" id="problem">
        <div className="container reading reveal">
          <Eyebrow n="01">The problem</Eyebrow>
          <h2 className="h-section">AI is being deployed faster than auditors, regulators, and risk officers can keep up.</h2>
          <div className="prose">
            <p>The gap is a compliance ceiling, and it blocks the highest-value use cases from leaving
              the prototype stage: clinical decision support, financial controls, critical-infrastructure
              automation, ITAR-bounded workflows, capital-allocation decisions.</p>
            <p>Every current answer is a version of the same pattern. Wrap the model in a fine-tuned
              classifier, log the input and output, and hope the audit holds. That holds until the
              classifier disagrees with the model it supervises, until a regulator asks how a policy was
              enforced rather than observed, until the log itself becomes the artifact under question.</p>
            <p>The field already agrees on the shape of the answer: verifier agents, hybrid cloud-edge
              supervision, training-free runtime guardrails. The missing piece is the bottom of the stack,
              an acceptance function whose verdict is <strong>checked, not predicted</strong>. We built it.</p>
          </div>
        </div>
      </section>

      {/* 02 — SUBSTRATE */}
      <section className="section section--soft" id="substrate">
        <div className="container">
          <div className="reading reveal">
            <Eyebrow n="02">What we&rsquo;ve built</Eyebrow>
            <h2 className="h-section">A formally-verified action substrate, in production code, open for inspection today.</h2>
            <p className="lede">Roughly 120 repositories at github.com/sensenet-ai span formal proofs,
              build infrastructure, codecs, runtime, and inference. The load-bearing components:</p>
          </div>
          <div className="tiles" style={{ marginTop: 'var(--space-9)' }}>
            {REPOS.map(r => (
              <article key={r.slug} className="tile reveal">
                <span className="tile__slug">{r.slug}</span>
                <h3>{r.name}</h3>
                <p>{r.body}</p>
                <div className="tile__meta">{r.meta.map(m => <span key={m} className="chip">{m}</span>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY IT HOLDS — defensibility on the instrument panel */}
      <section className="section band" id="why-it-holds">
        <div className="container reading reveal">
          <p className="eyebrow eyebrow--plain"><span>Why it holds</span></p>
          <h2 className="h-section">Why this compounds, not a tech demo.</h2>
          <div className="prose">
            <p>The four skill sets this stack requires, Lean 4 formal methods, Haskell systems
              engineering, modern C++23, and Nix-grade reproducible infrastructure, almost never
              co-occur in one engineer, let alone one org chart. A fast follower needs a team that does
              not exist on the market.</p>
          </div>
          <ol className="moat">
            {MOAT.map(m => <li key={m.h}><strong>{m.h}</strong> {m.t}</li>)}
          </ol>
        </div>
      </section>

      {/* 03 — INDUSTRIES */}
      <section className="section" id="industries">
        <div className="container">
          <div className="reading reveal">
            <Eyebrow n="03">Industries that need this</Eyebrow>
            <h2 className="h-section">In 2026, &ldquo;we have logs&rdquo; no longer clears the bar.</h2>
            <p className="lede">The EU AI Act high-risk regime, NIST AI RMF, OMB M-24-10, FDA SaMD guidance,
              the SEC&rsquo;s algorithmic-trading expectations, ITAR-bounded autonomy, HIPAA, FFIEC, and NERC
              all demand the same thing: show the chain of custody and the bounds, not just the outputs.</p>
          </div>
          <div className="ind">
            {INDUSTRIES.map(i => (
              <div key={i.name} className="ind__row reveal">
                <div className="ind__num">{i.n}</div>
                <div className="ind__name">{i.name}</div>
                <div className="ind__body">{i.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — PRODUCT WEDGE (control plane over the inference field) */}
      <section className="section band" id="product">
        <div className="container">
          <div className="reading reveal">
            <Eyebrow n="04">Product wedge</Eyebrow>
            <h2 className="h-section">Sold to the risk officer. Adopted by procurement. Invisible to engineering.</h2>
            <div className="prose">
              <p>SwitchYard bypasses the AI engineering team. We sell to the two roles that hold budget
                veto over enterprise AI procurement, the CISO and the Chief Compliance Officer, and we make
                the developer integration a one-line endpoint swap. Same OpenAI-compatible API, same models,
                same prompts, same code path. The evidence layer attaches underneath.</p>
              <p>That asymmetry is the wedge: compliance can mandate adoption through procurement while
                engineering never has to change a thing. Around SwitchYard we ship applied verticals, each a
                thin layer on the same proven substrate, sold as a paired artifact: a managed service plus an
                open-source proof of the property it preserves.</p>
            </div>
          </div>
          <div className="console glass glass--dark is-enter reveal">
            <div className="console__row"><span className="console__k">request</span>
              <code>base_url = &quot;https://api.allodial.io/v1&quot;</code></div>
            <div className="console__row"><span className="console__k">grade</span>
              <code>capability: clinical.read · discharged at action site</code></div>
            <div className="console__row"><span className="console__k">record</span>
              <code>blake3:9f2c… · sig: Ed25519+ML-DSA-65 · replayable</code></div>
          </div>
        </div>
      </section>

      {/* 05 — FUNDS */}
      <section className="section section--soft" id="funds">
        <div className="container">
          <div className="reading reveal">
            <Eyebrow n="05">Use of funds</Eyebrow>
            <h2 className="h-section">Three concurrent tracks over the next eighteen months.</h2>
          </div>
          <div className="fund-stats reveal">
            {FUND_STATS.map(f => <div key={f.s}><span>{f.s}</span><b>{f.b}</b></div>)}
          </div>
          <div className="tracks">
            {TRACKS.map(t => (
              <div key={t.n} className="track reveal">
                <div className="track__num">{t.n}</div>
                <h4>{t.h}</h4>
                <p>{t.t}</p>
              </div>
            ))}
          </div>
          <p className="unit reveal"><strong>Unit economics.</strong> SwitchYard is consumption-priced as a
            multiplier on underlying inference cost, tiered on audit-record retention and regulatory-artifact
            depth. Gross margin compounds as the evidence layer, not the model, becomes the differentiator.
            Applied verticals are seven-figure annual enterprise contracts with milestone payments around
            proof-artifact delivery. Land with SwitchYard, expand with a vertical.</p>
        </div>
      </section>

      {/* 06 — STATUS */}
      <section className="section">
        <div className="container reading">
          <div className="reveal">
            <Eyebrow n="06">Shipped vs. next</Eyebrow>
            <h2 className="h-section">The same status view we maintain internally.</h2>
            <p className="lede">Sophisticated diligence separates built from frontier. We are explicit about both.</p>
          </div>
          <table className="tbl reveal">
            <tbody>
              {STATUS.map(([cap, st, note]) => (
                <tr key={cap}>
                  <td>{cap}</td>
                  <td>
                    <span className={'st' + (st === 'Next' ? ' st--next' : '')}>{st}</span>
                    {note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 07 — WHY US */}
      <section className="section section--soft">
        <div className="container reading">
          <div className="reveal">
            <Eyebrow n="07">Why us, why now</Eyebrow>
            <h2 className="h-section">Co-founders who have shipped deep-tech products together before.</h2>
          </div>
          <div className="founder-grid">
            {['t1','t2','t3','t4'].map((id, i) => {
              const f = FOUNDERS.find(x => x.id === id);
              return (
                <div key={id} className="founder reveal" style={{ transitionDelay: `${i * 90}ms` }}>
                  <span className="founder__num">{String(i + 1).padStart(2, '0')}</span>
                  <img className="founder-name" src={`/logos/${id}.png`} alt="Co-founder" loading="lazy" />
                  <span className="founder__role">{f.s}</span>
                  <p>{f.p}</p>
                </div>
              );
            })}
          </div>
          <div className="caps reveal">
            <b>One org chart</b>
            <code>Lean 4</code><code>Haskell</code><code>C++23</code><code>Nix</code>
          </div>
          <div className="shipwall reveal">
            <p className="shipwall__label">Where the team has shipped</p>
            {SHIPWALL.map((row, ri) => (
              <div key={ri} className="shipwall__row">
                {row.map(l => (
                  <img key={l.f} className="shiplogo" src={`/logos/${l.f}`} alt={l.a} loading="lazy" />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08 — CONTACT */}
      <section className="section contact" id="contact">
        <div className="container reading reveal">
          <Eyebrow n="08">Open a conversation</Eyebrow>
          <h2 className="h-section">A technical due-diligence packet is available on request.</h2>
          <p>The packet includes the published <em>Reflections on Mistrusting Trust</em> paper, the public
            repository index at github.com/sensenet-ai, and an under-NDA architecture overview of the
            SwitchYard product surface.</p>
          <a className="btn-primary" href="mailto:partners@allodial.io">
            Request the data room <ArrowRight size={17} strokeWidth={1.6} />
          </a>
        </div>
        <div className="container">
          <div className="foot">
            <span>© Allodial, Inc., a Delaware corporation</span>
            <span>
              <a className="link-inline" href="https://github.com/sensenet-ai" target="_blank" rel="noreferrer">github.com/sensenet-ai</a>
              {'  ·  rev 2026.06 · pre-A'}
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
