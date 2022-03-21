new Vue({
	el: '#workshops',
	data: {
		workshops: [
			{
				title: 'Server Side Swift with Vapor',
				image: 'img/workshops/vapor.svg',
				platform: 'ios',
				mentors: [
					{
						firstName: 'Tim',
						lastName: 'Condon',
						jobTitle: '',
						company: 'Broken Hands',
						picture: 'img/people/Tim.jpg',
						twitter: '0xTim',
						bio: "Tim is a Swift developer from Manchester, UK and part of the Vapor Core Team. He's the server-side Swift team lead at raywenderlich.com and has written the unofficial-official book on Vapor with the founders of the framework. He founded Broken Hands a few years ago and delivers talks and workshops on Vapor and server-side Swift around the world. He also co-organises the ServerSide.swift conference - the world’s first and only conference focused on server-side Swift.",
					},
				],
			},
			{
				title: 'Modern Techniques for Android',
				image: 'img/workshops/mad.svg',
				platform: 'android',
				mentors: [
					{
						firstName: 'Darryl',
						lastName: 'Bayliss',
						jobTitle: 'Senior Android Engineer',
						company: 'The Body Coach',
						picture: 'img/people/Darryl.jpeg',
						twitter: 'darryl_bayliss',
						bio: "A Liverpudlian in London with nine years of mobile dev experience. Darryl writes, speaks and teaches all things mobile.\nHis travels have seen him work with Swiss smart mobility startup Axon Vibe, mobile tutorial website raywenderlich.com, and creative card marketplace Thortful.\nDarryl currently develops The Body Coach app -- working in the team behind the UK's favourite fitness coach, Joe Wicks -- helping people get fitter, healthier and happier.",
					},
				],
			},
			{
				title: 'Introduction to Flutter',
				image: 'img/workshops/flutter.svg',
				platform: 'both',
				mentors: [
					{
						firstName: 'Patrice',
						lastName: 'Müller',
						jobTitle: 'Mobile Lead',
						company: 'Migros Online',
						picture: 'img/people/Patrice.jpg',
						twitter: 'swissonid',
						bio: 'Patrice is a passionate mobile developer, community organizer (GDG Zürich), and Flutter enthusiast since 2017.\nHe loves coding as much as learning new stuff and sharing it with the community.\nBefore he started his journey as a Mobile Lead at Migros Online, he was one of the drivers to establish Flutter in the mobile department at SBB.',
					},
				],
			},
			{
				title: 'Network Debugging Tools',
				image: 'img/workshops/ndt.svg',
				platform: 'ios',
				mentors: [
					{
						firstName: 'Emad',
						lastName: 'Ghorbaninia',
						jobTitle: '',
						company: '',
						picture: 'img/people/Emad.jpg',
						twitter: 'emadgnia',
						bio: "Emad is a Lead iOS engineer at the Ministry of Taxation in Denmark and Article Author, Tech Editor, Video Instructor at Raywenderlich. When he’s not in front of a computer he is usually playing board games 🎲 and video games🎮 or watching series 📺. (you won't believe it) sometimes he plays harmonica 🎼.",
					},
				],
			},
			{
				title: 'Swift Structured Concurrency',
				image: 'img/workshops/ssc.svg',
				platform: 'ios',
				mentors: [
					{
						firstName: 'Vikram',
						lastName: 'Kriplaney',
						jobTitle: '',
						company: '',
						picture: 'img/people/vikram.jpg',
						twitter: 'krips',
						bio: "A veteran software engineer and mobile developer since when Symbian roamed the earth, Vikram has built iOS and Android apps ever since both platforms debuted. A SwiftUI and Combine convert and evangelist, he's currently putting these frameworks to good use at Netcetera.",
					},
				],
			},
			{
				title: 'Automatic Tests for iOS apps',
				image: 'img/workshops/ios-testsb.svg',
				platform: 'ios',
				mentors: [
					{
						firstName: 'Dominik',
						lastName: 'Hauser',
						jobTitle: 'iOS Developer',
						company: 'Rocket Apes',
						picture: 'img/people/Dominik.png',
						twitter: 'dasdom',
						website: 'https://xcode.tips',
						bio: "Many years ago, Dominik was teaching physics at the university and he needed a formulary app for his iPod touch. The App Store was just one year old and he couldn't find an app that fits his needs. So he build one himself. That was so much fun that he learned enough to get hired as a full-time iOS developer. Years later, after creating several unmaintainable projects, we heard about test-driven development (TDD) and how it could solve some his problems. Since then, Dominik has written many blog posts and a book about test-driven iOS development, talked about it on conferences and gave workshops.",
					},
				],
			},
			{
				title: 'Advanced Kotlin',
				image: 'img/workshops/kotlin.svg',
				platform: 'android',
				mentors: [
					{
						firstName: 'Sebastiano',
						lastName: 'Poggi',
						jobTitle: 'Team Lead',
						company: 'JetBrains',
						picture: 'img/people/sebastiano.jpg',
						twitter: 'seebrock3r',
						website: 'https://sebastiano.dev',
						bio: 'Emerging from the foggy plains of northern Italy 🇮🇹 after working at a smartwatch startup, Sebastiano moved with his curls to London 🇬🇧 💂 to do great things at AKQA and then Novoda. In the meantime, he\'s become a Google Developer Expert and a frequent speaker at conferences. Nowadays he\'s working remotely for JetBrains and is in Italy once again 🇮🇹. He really wishes he had more time to write technical articles on his blog, but he\'s live coding on Twitch in the meantime on <a target="_blank" href="http://codewiththeitalians.it">codewiththeitalians.it</a>',
					},
					{
						firstName: 'Ivan',
						lastName: 'Morgillo',
						jobTitle: 'Android Consultant and Trainer',
						company: '',
						picture: 'img/people/ivan.jpg',
						twitter: 'hamen',
						github: 'hamen',
						linkedin: 'ivanmorgillo',
						bio: 'I\'m a passionate Android developer, a writer, a speaker, a trainer, and I\'m always looking for new opportunities to learn and share back my findings with the community. I\'m also 1/2 of <a target="_blank" href="http://codewiththeitalians.it">codewiththeitalians.it</a> 😁',
					},
				],
			},
		],
	},
});
