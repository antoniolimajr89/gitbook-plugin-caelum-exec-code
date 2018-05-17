"use strict"

const cheerio = require('cheerio')
const codeWindowComponent = require('./helpers/CodeWindowComponent')

process.env.LANGUAGE = "java"

module.exports = {
	hooks: {
		'page': function(page) {
			page.sections = page.sections.map((section, index)=>{
				
				const $ = cheerio.load(section.content)
				
				const $currentChapter = $(':root')

				$currentChapter
					.find(`.lang-exec__${process.env.LANGUAGE}`)
					.each((index, element) => {
						const $preTagWrapper = $(element).parent()
						// Insert button runCode
						const $btnCompile = $(`
						<button class="execCodeBtn">
							Executar código
						</button>
						`)
						$preTagWrapper.before($btnCompile)
			
						// Convert highlithed compiler code to pure text
						const pureCompilerCode = $(element).text()
						$(element).html(pureCompilerCode)
			
						// Convert <pre> to <template>
						$preTagWrapper.replaceWith(
							$('<template/>').html($preTagWrapper.html())
						);
					})


				$currentChapter.append(codeWindowComponent($))

				section.content = $currentChapter.html()
				return section
			})

			return Promise.resolve(page)
		}
	},
	book: {
		assets: './theme',
		css: [
			'assets/global.css',
		],
		js: [
			'components/dist/bundle.js',
		]
	}
}
