module.export = {
	async headers(){
		return [
			{
				source: '/:path*',
				headers:[
					{key: 'Access-Control-Allow-Methods', values: 'GET,OPTIONS,PUT,PATCH,POST,DELETE'},
					{key: 'Access-Control-Allow-Origin', values: '*'},
					{key: 'Access-Control-Allow-Headers', values: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'},
					{key: 'Access-Control-Allow-Credentials', values: 'true'},
                    {key: 'strict-origin-when-cross-origin:', values: 'false'}
				],
			},
		];
	},
};	

