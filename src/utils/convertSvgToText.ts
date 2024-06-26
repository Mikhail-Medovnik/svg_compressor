import { FileWithPath } from '@mantine/dropzone';

export async function convertSvgToText(file: FileWithPath) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsText(file, 'UTF-8');
    fileReader.addEventListener('load', () => resolve(fileReader.result));
    fileReader.addEventListener('error', reject);
  });
}
