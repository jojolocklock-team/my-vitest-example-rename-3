export function throwCustomError(message: string): never {
	throw new Error(message)
}

process.exit(1)
