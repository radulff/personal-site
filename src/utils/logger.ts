export const logger = {
	trackError: (error: Error, level: string, context?: any) => {
		console.error(`Error level: ${level}`, error, context);
	}
};
