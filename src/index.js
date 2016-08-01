import Runner from 'jscodeshift/dist/Runner';
import path from 'path';

export default function parse({ sourcePath, options }) {
  Runner.run(
    path.resolve('./src/transform.js'),
    [sourcePath],
    {
      extensions: 'js,jsx',
      dry: true,
      ...options,
    },
  );
}
