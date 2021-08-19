import * as sst from '@serverless-stack/resources'

export default class MyStack extends sst.Stack {
	constructor(scope, id, props) {
		super(scope, id, props)
		const api = new sst.Api(this, 'Api', {
			routes: {
				'GET /links': 'src/list.main',
				'GET /links/{id}': 'src/get.main',
				'PUT /links/{id}': 'src/update.main',
			},
		})

		const site = new sst.ReactStaticSite(this, 'ReactSite', {
			path: 'frontend',
			environment: {
				REACT_APP_API_URL: api.url,        
			}
		})

		this.addOutputs({
			SiteUrl: site.url,
			ApiEndpoint: api.url,
		})
	}
}
