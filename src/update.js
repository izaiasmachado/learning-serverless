import users from './items'

export async function main(event) {
	const id = event.pathParameters.id
	const user = users[id]

	if (!user) {
		return {
			statusCode: 404,
			body: JSON.stringify({ error: true }),
		}
	}

	const data = JSON.parse(event.body)

	user.title = data.title
	user.description = data.description
	user.imageUrl = data.imageUrl
	user.items = data.items

	return {
		statusCode: 200,
		body: JSON.stringify(user),
	}
}