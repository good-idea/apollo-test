import * as allModules from './modules'
import { PubSub } from './pubSub'

const main = () => {
	const pubSub = new PubSub()
	Object.values(allModules).forEach((M) => {
		new M(pubSub)
	})
}

main()
