import { useClipboard } from '@mantine/hooks';

import classes from './CopyButton.module.css';

interface CopyButtonProps {
  textToCopy: string;
}

export function CopyButton({ textToCopy }: CopyButtonProps) {
  const clipboard = useClipboard({ timeout: 2000 });

  return (
    <button
      className={classes.root}
      type="button"
      onClick={() => clipboard.copy(textToCopy)}
      data-copied={clipboard.copied || undefined}
    >
      {clipboard.copied ? 'Copied!' : 'Copy to clipboard'}
    </button>
  );
}
