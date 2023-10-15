const slicePreviousSlug = (url: string): string => {
  const segments = url.split('/').filter(Boolean);
  segments.pop();
  return segments.join('/');
}

export {
	slicePreviousSlug
}