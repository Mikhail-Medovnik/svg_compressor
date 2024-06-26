import '@mantine/core/styles.css';
import '@mantine/dropzone/styles.css';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme';
import { SvgCompressor } from './components/SvgCompressor/SvgCompressor';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <SvgCompressor />
    </MantineProvider>
  );
}
