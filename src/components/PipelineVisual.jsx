import { useEffect, useRef, useState } from 'react';

const STAGES = ['Build', 'Test', 'Scan', 'Deploy', 'Monitor'];

/**
 * The site's signature visual: a small CI/CD pipeline that lights up stage
 * by stage, once, the first time it scrolls into view. This is the one
 * orchestrated motion moment for the page — everything else is static or
 * only animates in response to a hover/click.
 */
export default function PipelineVisual() {
  const [activeStage, setActiveStage] = useState(-1);
  const [hasRun, setHasRun] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasRun) {
            setHasRun(true);
            if (prefersReducedMotion) {
              setActiveStage(STAGES.length - 1);
              return;
            }
            STAGES.forEach((_, i) => {
              setTimeout(() => setActiveStage(i), i * 450);
            });
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasRun]);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-md rounded-lg border border-line bg-surface p-6 font-mono"
      role="img"
      aria-label="Illustration of a CI/CD pipeline running through build, test, scan, deploy and monitor stages"
    >
      {/* terminal-style chrome */}
      <div className="mb-6 flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-line-hover" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-hover" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-hover" />
        <span className="ml-3 text-xs text-ink-faint">pipeline.yaml</span>
      </div>

      <div className="flex items-center justify-between">
        {STAGES.map((stage, i) => {
          const isActive = i <= activeStage;
          const isCurrent = i === activeStage;
          return (
            <div key={stage} className="flex flex-1 items-center last:flex-none">
              <div className="flex flex-col items-center gap-2">
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full border text-[11px] transition-colors duration-300 ${
                    isActive
                      ? 'border-signal bg-signal/10 text-signal'
                      : 'border-line text-ink-faint'
                  } ${isCurrent ? 'animate-nodeOn' : ''}`}
                >
                  {isActive ? '✓' : i + 1}
                </span>
                <span
                  className={`text-[11px] transition-colors duration-300 ${
                    isActive ? 'text-ink' : 'text-ink-faint'
                  }`}
                >
                  {stage}
                </span>
              </div>
              {i < STAGES.length - 1 && (
                <span
                  className={`mx-1 mt-[-18px] h-px flex-1 transition-colors duration-500 ${
                    i < activeStage ? 'bg-signal/60' : 'bg-line'
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 border-t border-line pt-4 text-xs leading-relaxed text-ink-soft">
        <p>
          <span className="text-pulse">$</span> status:{' '}
          {activeStage < 0 && 'queued'}
          {activeStage >= 0 && activeStage < STAGES.length - 1 && `running ${STAGES[activeStage].toLowerCase()}`}
          {activeStage === STAGES.length - 1 && 'all checks passed'}
          <span className="ml-1 inline-block h-3 w-[6px] translate-y-[2px] bg-pulse animate-blink" />
        </p>
      </div>
    </div>
  );
}
