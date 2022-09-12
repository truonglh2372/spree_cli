import type CheckDependency from './CheckDependency';
import extractDockerVersion from './extractDockerVersion';
import checkVersionByShellCommand from './checkVersionByShellCommand';

const checkDockerVersion: CheckDependency = async (versionString: string) => {
  return await checkVersionByShellCommand('docker --version', versionString, extractDockerVersion);
};

export default checkDockerVersion;
