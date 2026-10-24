import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	PUBLIC_API_URL: {
		description:
			"Server-side base URL of the backend API (docker-compose's existing variable). Read only from server code, never sent to the browser.",
		schema: (value) => value || 'http://localhost:8020'
	}
});
