import { Box, Title } from '@mantine/core';
import { PreviewImage } from './PreviewImage/PreviewImage';
import { CopyButton } from './CopyButton/CopyButton';

import classes from './Result.module.css';

interface ResultProps {
  svgMarkup: string;
}

export function Result({ svgMarkup }: ResultProps) {
  return (
    <Box className={classes.root}>
      <Box className={classes.column} data-column="image">
        <Title className={classes.title} order={3}>
          Preview
        </Title>
        <Box className={classes.preview}>
          <PreviewImage svgMarkup={svgMarkup} />
        </Box>
        <a
          className={classes.download}
          download="Compressed SVG"
          href={`data:image/svg+xml;charset=utf-8;base64,${btoa(svgMarkup)}`}
        >
          Download File
        </a>
      </Box>

      <Box className={classes.column} data-column="markup">
        <Title className={classes.title} order={3}>
          Compressed code
        </Title>
        <Box className={classes.code}>
          <code className={classes.codeContent}>{svgMarkup}</code>
        </Box>
        <CopyButton textToCopy={svgMarkup} />
      </Box>
    </Box>
  );
}
