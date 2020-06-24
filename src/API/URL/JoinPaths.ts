const trimLeadingSlash = (path: string): string => (
	path.charAt(0) === '/' ? path.substr(1) : path
);

const trimTrailingSlash = (path: string): string => (
	path.substr(-1) === '/' ? path.substr(0, path.length - 1) : path
);

export const joinPaths = (...segments: Array<string>): string => (
	segments.reduce(
		(path: string, currentSegment: string) => (`${trimTrailingSlash(path)}/${trimLeadingSlash(currentSegment)}`),
	)
);
