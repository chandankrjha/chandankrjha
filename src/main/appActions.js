
export const APP_START = 'app_start';
export const APP_START_SUCCESS = 'app_start_success';
export const APP_START_FAILED = 'app_start_failed';

export function init(params) {
	return { type: APP_START, params };
}
