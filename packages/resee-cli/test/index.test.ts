import fs from 'fs-extra-promise';
import path from 'path';
import shell from 'shelljs';

describe('Basic', () => {
  const TEMP_DIR = path.join(__dirname, '.tmp');
  const FIXTURE_DIR = path.join(__dirname, './fixture/');
  const dirs = fs.readdirSync(FIXTURE_DIR);
  if (fs.existsSync(TEMP_DIR)) {
    fs.removeSync(TEMP_DIR);
  }
  fs.mkdirSync(TEMP_DIR);

  dirs.forEach(dir => {
    const targetDir = path.join(TEMP_DIR, dir);
    fs.copySync(path.join(FIXTURE_DIR, dir), targetDir);
    it('Build fixture ' + dir, () => {
      expect(shell.exec(`cd ${targetDir} && npm run build`).code).toEqual(0);
    });
  });
});
