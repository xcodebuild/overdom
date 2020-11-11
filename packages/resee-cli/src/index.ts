import Cac from 'cac';
import { build, watch } from './webpack';

const cli = Cac('resee-cli');

cli.command('build', 'Build').action(() => {
  build();
});

cli.command('watch', 'Watch').action(() => {
  watch();
});

cli.help();
cli.parse();
