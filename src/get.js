import notes from './items'

export async function main(event) {
	const id = event.pathParameters.id
	const note = notes[id]
	return note
		? {
			statusCode: 200,
			body: JSON.stringify(note),
		}
		: {
			statusCode: 404,
			body: JSON.stringify({ error: true }),
		}
}
