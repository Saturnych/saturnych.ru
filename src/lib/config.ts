export const config = {
	name: 'saturnych.ru',
	version: '0.1.1',
	title: 'Saturnych.ru',
	description: 'saturnych.ru',
	homepage: 'https://saturnych.ru',
	repository: 'https://github.com/Saturnych/saturnych.ru',
	author: 'Denis Glebko',
};

export const imgDir = `/images`;

export const avatarPath = (src: string) => imgDir + '/users/' + src;

export const imagesPath = (src: string, ...subdirs: string[]) =>
	[imgDir, ...subdirs, src].filter(Boolean).join('/');
