import { useState, useEffect, useRef } from 'react';
import { Box, Button, Group, Text, rem } from '@mantine/core';
import {
  Dropzone as MantineDropZone,
  MIME_TYPES,
  DropzoneProps,
  FileWithPath,
} from '@mantine/dropzone';
import { IconPhoto, IconUpload, IconX } from '@tabler/icons-react';
import { convertSvgToText } from '@/utils/convertSvgToText';
import { initWorker } from '@/worker';
import { Result } from '../Result/Result';

interface MantineDropZone extends DropzoneProps {}

export function DropZone(props: Partial<DropzoneProps>) {
  const openRef = useRef<() => void>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [optimizedSvg, setOptimizedSvg] = useState<string | null>(null);

  useEffect(() => {
    buttonRef.current?.focus();
  }, []);

  const handleDrop = async ([file]: FileWithPath[]) => {
    const worker = initWorker();
    const svgAsText = await convertSvgToText(file);
    worker.postMessage(svgAsText);

    worker.onmessage = (event) => {
      setOptimizedSvg(event.data);
    };
  };

  return (
    <>
      <MantineDropZone
        openRef={openRef}
        activateOnClick={false}
        onDrop={handleDrop}
        maxSize={5 * 1024 ** 2}
        accept={[MIME_TYPES.svg]}
        {...props}
      >
        <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
          <MantineDropZone.Accept>
            <IconUpload
              style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-blue-6)' }}
              stroke={1.5}
            />
          </MantineDropZone.Accept>
          <MantineDropZone.Reject>
            <IconX
              style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-red-6)' }}
              stroke={1.5}
            />
          </MantineDropZone.Reject>
          <MantineDropZone.Idle>
            <IconPhoto
              style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-dimmed)' }}
              stroke={1.5}
            />
          </MantineDropZone.Idle>

          <div>
            <Text size="xl" inline>
              Drag svg here or click button
            </Text>
          </div>
        </Group>
      </MantineDropZone>

      <Group justify="center" mt="md">
        <Button ref={buttonRef} onClick={() => openRef.current?.()}>
          Select files
        </Button>
      </Group>

      <Box mt={40}>{optimizedSvg && <Result svgMarkup={optimizedSvg} />}</Box>
    </>
  );
}
