import notes from './items'

export async function main(event) {
	const id = event.pathParameters.id
	const note = notes[id]

	if (!note) {
		return {
			statusCode: 404,
			body: JSON.stringify({ error: true }),
		}
	}

	const data = JSON.parse(event.body)

	note.title = data.title
	note.content = data.content

	return {
		statusCode: 200,
		body: JSON.stringify(note),
	}
}