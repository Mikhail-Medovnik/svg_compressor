import { Box } from '@mantine/core';
import React from 'react';

interface PreviewImageProps {
  svgMarkup: string;
}

export function PreviewImage({ svgMarkup, ...others }: PreviewImageProps) {
  return <Box dangerouslySetInnerHTML={{ __html: svgMarkup }} {...others} />;
}
