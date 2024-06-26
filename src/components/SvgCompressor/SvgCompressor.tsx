import { Container } from '@mantine/core';
import { DropZone } from './DropZone/DropZone';

export function SvgCompressor() {
  return (
    <Container size={1440} pb={40} pt={40}>
      <DropZone />
    </Container>
  );
}
