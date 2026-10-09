import type { ArticleBlock } from '@/lib/data';

/** 内联 markdown：**bold**、*italic*、`code` */
function renderInline(text: string) {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  const regex = /\*\*([^*]+)\*\*|\*([^*]+)\*|`([^`]+)`/g;
  let lastIdx = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIdx) {
      parts.push(text.slice(lastIdx, match.index));
    }
    if (match[1]) {
      parts.push(<strong key={key++} className="font-semibold text-ink">{match[1]}</strong>);
    } else if (match[2]) {
      parts.push(<em key={key++}>{match[2]}</em>);
    } else if (match[3]) {
      parts.push(
        <code key={key++} className="px-1.5 py-0.5 rounded text-[0.875em] font-mono"
          style={{ backgroundColor: 'rgba(14,20,25,0.06)' }}>
          {match[3]}
        </code>
      );
    }
    lastIdx = match.index + match[0].length;
  }
  if (lastIdx < text.length) {
    parts.push(text.slice(lastIdx));
  }
  return parts;
}

export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'h2':
            return (
              <h2 key={i} className="font-display text-2xl md:text-3xl leading-tight mt-12 mb-5 text-ink"
                style={{ letterSpacing: '-0.015em' }}>
                {renderInline(block.text)}
              </h2>
            );
          case 'h3':
            return (
              <h3 key={i} className="font-display text-xl md:text-2xl leading-tight mt-9 mb-4 text-ink"
                style={{ letterSpacing: '-0.01em' }}>
                {renderInline(block.text)}
              </h3>
            );
          case 'quote':
            return (
              <blockquote key={i} className="border-l-2 border-vermilion pl-6 md:pl-8 py-3 my-10">
                <p className="font-display text-xl md:text-2xl italic leading-relaxed text-ink/75">
                  {renderInline(block.text)}
                </p>
              </blockquote>
            );
          case 'ul':
            return (
              <ul key={i} className="my-6 space-y-3 pl-1">
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="mt-[10px] w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'rgba(192,57,43,0.55)' }} />
                    <span className="text-base leading-[1.8] text-ink/80 flex-1">
                      {renderInline(item)}
                    </span>
                  </li>
                ))}
              </ul>
            );
          case 'ol':
            return (
              <ol key={i} className="my-6 space-y-3">
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-4">
                    <span className="font-display text-vermilion text-lg leading-none mt-0.5 flex-shrink-0">
                      {String(j + 1).padStart(2, '0')}
                    </span>
                    <span className="text-base leading-[1.8] text-ink/80 flex-1">
                      {renderInline(item)}
                    </span>
                  </li>
                ))}
              </ol>
            );
          case 'callout':
            return (
              <div key={i} className="my-8 p-6 md:p-7 rounded-xl"
                style={{ backgroundColor: 'rgba(192,57,43,0.04)', borderLeft: '3px solid rgba(192,57,43,0.35)' }}>
                <p className="text-base leading-[1.8] text-ink/80">
                  {renderInline(block.text)}
                </p>
              </div>
            );
          default:
            return (
              <p key={i} className="text-base leading-[1.85] text-ink/80">
                {renderInline(block.text)}
              </p>
            );
        }
      })}
    </>
  );
}
