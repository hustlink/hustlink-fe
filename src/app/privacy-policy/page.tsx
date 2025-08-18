import Link from 'next/link';
import Seo from '@/app/shared/components/Seo';
import Typography from '../shared/components/ui/Typography';
import { Navbar } from '../shared/components/widgets/NavbarTransparent';

export default function PrivacyPolicyPage() {
	return (
		<div className="flex flex-col w-full min-h-screen bg-[#DFE7F2] bg-[url('/background.svg')] bg-cover bg-center bg-no-repeat text-gray-800">
			<Seo templateTitle='Privacy Policy' />
			<Navbar
				leftContent={
					<>
						<Link href='/' className='text-lg text-[#1F2937]'>
							Hust<span className='text-[#2563EB]'>link</span>
						</Link>
					</>
				}
			/>
			<main className='max-w-6xl mx-auto px-4 py-12'>
				<Typography variant='j1' as='h1' className='mb-6'>
					Privacy Policy
				</Typography>
				<Typography variant='s1' as='h2' color='tertiary' className='mb-10'>
					Last updated: {new Date().toLocaleDateString()}
				</Typography>
				<section className='space-y-6 text-base leading-relaxed'>
					<div>
						<Typography variant='h2' as='h1' color='primary' className='mb-2'>
							1. What Are Cookies?
						</Typography>
						<Typography variant='s2' as='p' color='secondary' className='mb-6'>
							Cookies are small text files stored on your device when you visit
							a website. They help websites function properly and improve user
							experience.
						</Typography>
					</div>

					<div>
						<h2 className='text-xl font-semibold mb-2'>
							2. Types of Cookies We Use
						</h2>
						<ul className='list-disc list-inside space-y-2'>
							<li>
								<strong>Essential Cookies:</strong> These are strictly necessary
								for the operation of our website, such as authentication,
								security, and maintaining your session. Without them, certain
								features of the website may not function correctly.
							</li>
							<li>
								<strong>Functional Cookies (if applicable):</strong> Improve
								your experience by remembering preferences (e.g., language or
								region).
							</li>
							<li>
								<strong>Analytics Cookies (if applicable):</strong> Allow us to
								understand how visitors use the website, so we can improve
								content and services.
							</li>
							<li>
								<strong>Marketing/Advertising Cookies (if applicable):</strong>{' '}
								Used to deliver relevant advertisements based on your interests.
							</li>
						</ul>
						<p className='mt-2 italic'>
							Note: Currently, we only use <strong>Essential Cookies</strong>.
						</p>
					</div>

					<div>
						<h2 className='text-xl font-semibold mb-2'>
							3. Why We Use Cookies
						</h2>
						<ul className='list-disc list-inside space-y-1'>
							<li>Authenticate users and secure logins</li>
							<li>Maintain website performance</li>
							<li>Protect against fraudulent activity</li>
						</ul>
					</div>

					<div>
						<h2 className='text-xl font-semibold mb-2'>4. Managing Cookies</h2>
						<p>
							Most web browsers allow you to control cookies through their
							settings. However, please note that disabling essential cookies
							may prevent you from using certain parts of the website.
						</p>
					</div>

					<div>
						<h2 className='text-xl font-semibold mb-2'>
							5. Third-Party Cookies
						</h2>
						<p>
							We do not use third-party cookies for advertising. If in the
							future we integrate third-party services, we will update this
							policy and ask for your consent.
						</p>
					</div>

					<div>
						<h2 className='text-xl font-semibold mb-2'>
							6. Changes to This Policy
						</h2>
						<p>
							We may update this Privacy Policy from time to time. Any updates
							will be posted on this page with a revised "Last Updated" date.
						</p>
					</div>

					<div>
						<h2 className='text-xl font-semibold mb-2'>7. Contact Us</h2>
						<p>
							If you have any questions about this Privacy Policy or our use of
							cookies, please contact us at:
						</p>
						<p className='mt-2'>
							📧{' '}
							<a href='mailto:your@email.com' className='underline'>
								hustlink@gmail.com
							</a>
						</p>
					</div>
				</section>
			</main>
		</div>
	);
}
