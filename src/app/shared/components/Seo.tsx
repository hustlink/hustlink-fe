import Head from 'next/head';
import { openGraph } from '@/lib/helper';

const defaultMeta = {
	title: 'Hustlink',
	siteName: 'Hustlink',
	description:
		'Hustlink is the place to connect freelancers and clients for IT, design, writing, video, business, engineering, and more. Hire experts or offer your services now!',
	/** Without additional '/' on the end, e.g. https://theodorusclarence.com */
	url: 'https://hustlink.com',
	type: 'website',
	robots: 'follow, index',
	/**
	 * No need to be filled, will be populated with openGraph function
	 * If you wish to use a normal image, just specify the path below
	 */
	image: 'https://tsnext-tw.thcl.dev/images/large-og.png',
};

type SeoProps = {
	date?: string;
	templateTitle?: string;
	urlPath?: string; // dikirim dari parent component
} & Partial<typeof defaultMeta>;

export default function Seo({ urlPath = '', ...props }: SeoProps) {
	const meta = {
		...defaultMeta,
		...props,
	};

	meta.title = props.templateTitle
		? `${props.templateTitle} | ${meta.siteName}`
		: meta.title;

	meta.image = openGraph({
		description: meta.description,
		siteName: props.templateTitle ? meta.siteName : meta.title,
		templateTitle: props.templateTitle,
	});

	const fullPath = `${urlPath}`; // fullPath bisa dikirim langsung dari parent

	return (
		<Head>
			<title>{meta.title}</title>
			<meta name='robots' content={meta.robots} />
			<meta content={meta.description} name='description' />
			<meta property='og:url' content={`${meta.url}${fullPath}`} />
			<link rel='canonical' href={`${meta.url}${fullPath}`} />
			{/* Open Graph */}
			<meta property='og:type' content={meta.type} />
			<meta property='og:site_name' content={meta.siteName} />
			<meta property='og:description' content={meta.description} />
			<meta property='og:title' content={meta.title} />
			<meta name='image' property='og:image' content={meta.image} />
			{/* Twitter */}
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:title' content={meta.title} />
			<meta name='twitter:description' content={meta.description} />
			<meta name='twitter:image' content={meta.image} />
			{meta.date && (
				<>
					<meta property='article:published_time' content={meta.date} />
					<meta
						name='publish_date'
						property='og:publish_date'
						content={meta.date}
					/>
				</>
			)}

			{/* Favicons */}
			{favicons.map((linkProps) => (
				<link key={linkProps.href} {...linkProps} />
			))}
			<meta name='msapplication-TileColor' content='#ffffff' />
			<meta name='msapplication-config' content='/favicon/browserconfig.xml' />
			<meta name='theme-color' content='#ffffff' />
		</Head>
	);
}

const favicons: Array<React.ComponentPropsWithoutRef<'link'>> = [
	{
		rel: 'apple-touch-icon',
		sizes: '180x180',
		href: '/favicon/apple-touch-icon.png',
	},
	{
		rel: 'icon',
		type: 'image/png',
		sizes: '32x32',
		href: '/favicon/favicon-32x32.png',
	},
	{
		rel: 'icon',
		type: 'image/png',
		sizes: '16x16',
		href: '/favicon/favicon-16x16.png',
	},
	{ rel: 'manifest', href: '/favicon/site.webmanifest' },
	{
		rel: 'mask-icon',
		href: '/favicon/safari-pinned-tab.svg',
		color: '#00e887',
	},
	{ rel: 'shortcut icon', href: '/favicon/favicon.ico' },
];
