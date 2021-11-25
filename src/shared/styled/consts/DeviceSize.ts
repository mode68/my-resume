export const deviceSize = {
	mobileS: '320px',
	mobileM: '375px',
	mobileL: '425px',
	tablet: '768px',
	laptop: '1024px',
	desktop: '1440px',
	desktopL: '2560px',
};

export const device = {
	mobileS: `(min-width: ${deviceSize.mobileS})`,
	mobileM: `(min-width: ${deviceSize.mobileM})`,
	mobileL: `(min-width: ${deviceSize.mobileL})`,
	tablet: `(min-width: ${deviceSize.tablet})`,
	laptop: `(min-width: ${deviceSize.laptop})`,
	desktop: `(min-width: ${deviceSize.desktop})`,
	desktopL: `(min-width: ${deviceSize.desktopL})`,
};
