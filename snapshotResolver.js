// https://jestjs.io/docs/en/configuration.html#snapshotresolver-string
module.exports = {
  testPathForConsistencyCheck: 'src/components/ErrorBoundary/ErrorBoundary.spec.tsx',

  resolveSnapshotPath: (testPath, snapshotExtension) => {
    return testPath.replace(/\.spec\.([tj]sx?)/, `${snapshotExtension}.$1`).replace(/components/, '__snapshots__');
  },
  resolveTestPath: (snapshotFilePath, snapshotExtension) => {
    return snapshotFilePath.replace(snapshotExtension, '.spec').replace(/__snapshots__/, 'components');
  },
};
